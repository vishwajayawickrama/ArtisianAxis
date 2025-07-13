from django.db import models

class CollectionImage(models.Model):
    name = models.CharField(max_length=255)
    image_url = models.URLField()
    blob_name = models.CharField(max_length=255)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    file_size = models.IntegerField()
    content_type = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} - {self.image_url}"

class Collection(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    products = models.IntegerField()
    image = models.OneToOneField(CollectionImage, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    

