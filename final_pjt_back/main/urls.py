from django.urls import path
from . import views

app_name = 'main'
urlpatterns = [
    # path('', views.index),
    path('api/movies/', views.MovieListView.as_view(), name='movie_list'),
]