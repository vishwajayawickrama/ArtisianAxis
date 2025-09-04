from rest_framework import serializers
from products.models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
                    'id', 'name', 'artist', 'price', 'original_price', 'rating', 
                    'reviews', 'image', 'badge', 'origin', 'materials', 
                    'in_stock', 'collection'
        ]
        read_only_fields = ['image_url']