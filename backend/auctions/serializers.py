from .models import Auction
from .models import Bidding
from rest_framework import serializers


class AuctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Auction
        fields = [
            'id', 'title', 'description', 'starting_bid', 'current_bid', 
            'end_time', 'created_at', 'updated_at', 'is_active', 'product'
        ]

class BiddingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bidding
        fields = ['id', 'auction', 'bidder_name', 'bid_amount', 'bid_time']