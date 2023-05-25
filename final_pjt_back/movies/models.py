from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings
import datetime

class Genre(models.Model):
    name = models.CharField(max_length=50, null=False)
    def __str__(self):
        return self.name

class Movie(models.Model):
    title = models.CharField(max_length=20)
    genres = models.ManyToManyField(Genre, related_name='movies')
    poster_path = models.TextField()
    overview = models.TextField()
    
    def __str__(self):
        return self.title

    
