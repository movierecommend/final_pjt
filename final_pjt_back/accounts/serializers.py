from rest_framework import serializers
from django.contrib.auth import get_user_model
from articles.models import Article
from movies.models import Movie

User = get_user_model()

# 사용자 프로필에 들어가는 정보
class ProfileSerializer(serializers.ModelSerializer):
    class ArticleSerializer(serializers.ModelSerializer):
        class Meta:
            model = Article
            fields = '__all__'

    class MovieSerializer(serializers.ModelSerializer):
        class Meta:
            model = Movie
            fields = '__all__'

    like_articles = ArticleSerializer(many=True)
    articles = ArticleSerializer(many=True)
    like_movies = MovieSerializer(many=True)

    class Meta:
        model = User
        fields = ('articles', 'id', 'username', 'like_articles', 'like_movies',)

# 유저 정보
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'username',)

# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     def create(self, validated_data):
#         password = validated_data.pop('password', None)
#         instance = self.Meta.model(**validated_data)
#         if password is not None:
#             instance.set_password(password)
#         instance.save()
#         return instance