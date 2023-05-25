from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [    
    # genre
    path('genre/<int:genre_pk>/', views.genre_detail),

    # movie
    path('<int:movie_pk>/', views.movie_detail),
    path('<int:movie_pk>/like/', views.like_movie),
    path('<str:username>/like/', views.user_like_movie),
]