from django.urls import path
from .views import AuctionView

urlpatterns = [
    path('', AuctionView.as_view(), name='auction-list'),
]