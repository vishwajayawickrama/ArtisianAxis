from django.urls import path
from backend.auctions.views import AuctionView

urlpatterns = [
    path('', AuctionView.as_view(), name='auction-list'),
]