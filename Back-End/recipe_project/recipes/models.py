from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='recipes/')

    def __str__(self):
        return self.title
