from django.urls import path
from .views import CollectionList, CollectionById

urlpatterns = [
    path('', CollectionList.as_view(), name='collection-list'),
    path('<int:id>', CollectionById.as_view(), name='collection-by-id'),
]

