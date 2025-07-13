from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Collection
from .serializers import CollectionSerializer

# Create your views here.

class CollectionList(APIView):
    def get(self, request):
        collections = Collection.objects.all()
        serializer = CollectionSerializer(collections, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        image_obj = request.FILES.get('image')
        name = request.POST.get('name')
        if not image_obj or name:
            return JsonResponse()
        serializer = CollectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
