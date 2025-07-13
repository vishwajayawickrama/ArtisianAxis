from rest_framework import serializers
from .models import Collection

class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = ['id', 'name', 'description', 'products', 'image', 'image_url']
        read_only_fields = ['image_url']