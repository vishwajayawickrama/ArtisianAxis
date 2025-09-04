from django.urls import path
from .views import ProductView, ProductById

urlpatterns = [
    path('', ProductView.as_view(), name='product-list'),
    path('<int:id>', ProductById.as_view(), name='product-by-id'),
]
