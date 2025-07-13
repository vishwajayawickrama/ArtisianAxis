from django.db import models


class Collection(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    products = models.IntegerField()
    image = models.ImageField(upload_to="collections/", blank=True, null=True)

    def __str__(self):
        return self.name
    

