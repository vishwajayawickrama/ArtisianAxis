from django.urls import path
from .views import CollectionList, CollectionById, CollectionProductsById

urlpatterns = [
    path('', CollectionList.as_view(), name='collection-list'),
    path('<int:id>/', CollectionById.as_view(), name='collection-by-id'),
    path('<int:id>/products/', CollectionProductsById.as_view(), name='collection-products-by-id'),
]

