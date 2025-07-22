from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Collection
from .serializers import CollectionSerializer

class CollectionList(APIView):
    def get(self, request):
        collections = Collection.objects.all()
        serializer = CollectionSerializer(collections, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CollectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CollectionById(APIView):
    def get(self, request):
        collection = Collection.objects.get(id = 1)