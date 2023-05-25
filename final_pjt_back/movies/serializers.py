from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Movie, Genre

User = get_user_model()

# 유저 정보
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'username')

# 장르 상세 정보
class GenreSerializer(serializers.ModelSerializer):

    class MovieSerializer(serializers.ModelSerializer):
        class Meta:
            model = Movie
            fields = ('title', 'poster_path')

    movies = MovieSerializer(many=True, read_only=True)

    class Meta:
        model = Genre
        fields = '__all__'


# 사용자가 좋아요 누른 영화
class UserLikeMovieListSerializer(serializers.ModelSerializer):
    
    class MovieSerializer(serializers.ModelSerializer):

        class Meta:
            model = Movie
            fields = ('pk', )
    like_movies = MovieSerializer(many=True)
    
    class Meta:
        model = get_user_model()
        fields = ('pk', 'username', 'like_movies',)

# 여러 영화 제공
class MovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('pk', 'words',)

# 단일 영화 상세 정보
class MovieSerializer(serializers.ModelSerializer):
    class GenreSerializer(serializers.ModelSerializer):
        class Meta:
            model = Genre
            fields = ('name',)

    genres = GenreSerializer(read_only=True, many=True)
    like_movies = UserSerializer(read_only=True, many=True)

    class Meta:
        model = Movie
        fields = '__all__'
