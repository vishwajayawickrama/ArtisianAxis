from django.db import models

class Collection(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    img_url = models.URLField(max_length=200)

    def __str__(self):
        return self.name
