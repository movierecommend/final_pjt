from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    # actor
    path('actors/', views.actor_list),
    
    # genre
    path('genre/<int:genre_pk>/', views.genre_detail),

    # movie
    path('<int:movie_pk>/', views.movie_detail),
    path('<int:movie_pk>/like/', views.like_movie),
    path('<int:user_pk>/recommendation/', views.user_like_movie),
    path('<int:movie_pk>/rating/', views.create_rating),
    path('<int:movie_pk>/rating/<int:rating_pk>/', views.rating_update_or_delete),
]