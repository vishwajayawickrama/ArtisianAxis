from django.db import models
from collectionsApp.models import Collection

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=200)
    artist = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    original_price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.FloatField()
    reviews = models.PositiveIntegerField()
    image = models.ImageField(upload_to="collections/", blank=True, null=True, default=None)
    badge = models.CharField(max_length=50, blank=True, null=True)
    origin = models.CharField(max_length=100)
    materials = models.CharField(max_length=200)
    in_stock = models.BooleanField(default=True)
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name="products")

    @property
    def image_url(self):
        if self.image and hasattr(self.image, 'url'):
            return self.image.url
        return None
    
    def __str__(self):
        return self.name
