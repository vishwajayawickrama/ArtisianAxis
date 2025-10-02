from django.shortcuts import render
from django.db import transaction
from django.db.models import F
from .serializers import AuctionSerializer
from .serializers import BiddingSerializer
from .models import Auction
from .models import Bidding
from rest_framework.views import APIView
from rest_framework.response import Response
import logging
from django.utils import timezone
from typing import cast

logger = logging.getLogger(__name__)


class AuctionView(APIView):
    def get(self, request):
        serializer = AuctionSerializer(Auction.objects.all(), many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = AuctionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
class BiddingView(APIView):
    def get(self, request, auction_id):
        auction = Auction.objects.get(id=auction_id)
        bids = Bidding.objects.filter(auction=auction).order_by('-bid_amount').first()
        serializer = BiddingSerializer(bids, many=True)
        return Response(serializer.data)

    @transaction.atomic
    def post(self, request, auction_id):
        try:
            auction = Auction.objects.select_for_update().get(id=auction_id)
            serializer = BiddingSerializer(data=request.data)
            if not serializer.is_valid():
                return Response(serializer.errors, status=400)

            bidding_value = cast(dict, serializer.validated_data)['bid_amount']

            if hasattr(auction, 'end_time') and auction.end_time and auction.end_time < timezone.now():
                return Response({"error": "Auction has ended."}, status=400)
            
            if auction.current_bid is not None and bidding_value <= auction.current_bid:
                return Response({
                    "error": f"Bid must be higher than current bid of {auction.current_bid}."
                }, status=400)
            
            #TODO: Add minimum increment logic
            
            auction.current_bid = bidding_value
            auction.save(update_fields=['current_bid'])
            
            bid = serializer.save(auction=auction)
            logger.info(f"Successful bid of {bidding_value} placed on auction {auction_id}")
            
            return Response(serializer.data, status=201)
            
        except Auction.DoesNotExist:
            return Response({"error": "Auction not found."}, status=404)
        except Exception as e:
            logger.error(f"Error processing bid for auction {auction_id}: {str(e)}")
            return Response({"error": "An error occurred while processing your bid."}, status=500)
