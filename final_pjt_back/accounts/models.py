from django.db import models
from django.contrib.auth.models import AbstractUser 
from movies.models import Movie
from articles.models import Article

class User(AbstractUser):
    like_movies = models.ManyToManyField(Movie, related_name='liked_by', blank=True)
