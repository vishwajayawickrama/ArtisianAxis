from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Collection
from .serializers import CollectionSerializer
from django.shortcuts import get_object_or_404

class CollectionList(APIView):
    def get(self, request):
        collections = Collection.objects.all()
        serializer = CollectionSerializer(collections, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CollectionSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class CollectionById(APIView):
    def get(self, request, id):
        collection = Collection.objects.get(id = id)
        serializer = CollectionSerializer(collection)
        return Response(serializer.data)
    
    def put(self, request, id):
        collection = get_object_or_404(Collection, id=id)
        serializer = CollectionSerializer(collection, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        collection = get_object_or_404(Collection, id=id)
        collection.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
