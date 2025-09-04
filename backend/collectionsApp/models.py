from django.db import models
from django.db.models.signals import post_delete
from django.dispatch import receiver
import os


class Collection(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    product_count = models.IntegerField(default=0)
    featured = models.BooleanField(default=False)
    image = models.ImageField(upload_to="collections/", blank=True, null=True, default=None)

    def __str__(self):
        return self.name
    
    @property
    def image_url(self):
        if self.image and hasattr(self.image, 'url'):
            return self.image.url
        return None