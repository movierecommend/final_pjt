from django.shortcuts import get_list_or_404, get_object_or_404

from .serializers import UserSerializer, GenreSerializer, UserLikeMovieListSerializer, MovieSerializer, MovieListSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Movie, Genre
from accounts.models import User
from django.http import JsonResponse

# Create your views here.
@api_view(['GET'])
def genre_detail(request, genre_pk):
    genre = get_object_or_404(Genre, pk=genre_pk)
    serializer = GenreSerializer(genre)
    return Response(serializer.data)

@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializr = MovieSerializer(movie)
    return Response(serializr.data)

@api_view(['POST'])
def like_movie(request, movie_pk):
    user = request.user
    movie = get_object_or_404(Movie, pk=movie_pk)
    if movie.like_users.filter(pk=user.pk).exists():
        movie.like_users.remove(user)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)
    else:
        movie.like_users.add(user)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

@api_view(['GET'])
def user_like_movie(request, username):
    user = get_object_or_404(User, username=username)
    serializer = UserLikeMovieListSerializer(user)
    movies = get_list_or_404(Movie)
    movies_serializer = MovieListSerializer(movies, many=True)
    
    # user가 좋아요한 영화 key값 담기
    movie_key = [data['pk'] for data in serializer.data.get('like_movies')]

    # user가 좋아요 한 영화 index 담기
    idx = []
    for key in movie_key:
        for i in range(len(movies_serializer.data)):
            if key == movies_serializer.data[i]['pk']:
                idx.append(i)
                break
    # words 담기
    xMovie = [data.get('words') for data in movies_serializer.data]

    # 유사 영화 pk 반환
    result = recommend_movies_names(xMovie, idx, movies_serializer)

    # 유사 영화 pk 기반 querySet 생성
    final_movie = [get_object_or_404(Movie, pk=i) for i in result]
    final_serializer = UserChoiceSimilarMovieSerializer(final_movie, many=True)

    return Response(final_serializer.data)



