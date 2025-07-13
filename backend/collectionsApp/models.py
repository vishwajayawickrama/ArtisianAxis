from django.db import models


class Collection(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    products = models.IntegerField(default=True)
    image = models.ImageField(upload_to="collections/", blank=True, null=True, default=True)

    def __str__(self):
        return self.name
    
    @property
    def image_url(self):
        if self.image and hasattr(self.image, 'url'):
            return self.image.url
        return None
    

