from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Movie, Genre, Actor, Rating

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'nickname')

# 사용자가 좋아요 누른 영화
class UserLikeMovieListSerializer(serializers.ModelSerializer):
    
    class MovieSerializer(serializers.ModelSerializer):

        class Meta:
            model = Movie
            fields = ('pk', 'words',)
    like_movies = MovieSerializer(many=True)
    
    class Meta:
        model = get_user_model()
        fields = ('pk', 'nickname', 'like_movies',)

class MovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('pk', 'words',)

class RatingSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields =('pk', 'nickname',)

    user = UserSerializer(read_only=True)

    class Meta:
        model = Rating
        fields= '__all__'
        read_only_fields = ('movie',)


# 단일 영화 상세 정보
class MovieSerializer(serializers.ModelSerializer):

    class GenreSerializer(serializers.ModelSerializer):
        class Meta:
            model = Genre
            fields = ('name',)

    class ActorSerializer(serializers.ModelSerializer):
        class Meta:
            model = Actor
            fields = ('name',)

    genres = GenreSerializer(read_only=True, many=True)
    actors = ActorSerializer(read_only=True, many=True)
    like_movies = UserSerializer(read_only=True, many=True)
    ratings = RatingSerializer(many=True)

    class Meta:
        model = Movie
        fields = '__all__'

# 장르 상세 정보
class GenreSerializer(serializers.ModelSerializer):

    class MovieSerializer(serializers.ModelSerializer):
        class Meta:
            model = Movie
            fields = ('title', 'poster_path', 'tagline',)

    movies = MovieSerializer(many=True, read_only=True)

    class Meta:
        model = Genre
        fields = '__all__'
  
# 배우 목록 정보
class ActorListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Actor
        fields = '__all__'