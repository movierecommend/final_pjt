from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/main/', include('main.urls')),
    path('api/v1/recommendations/', include('recommendations.urls')),
    path('api/v1/tests/', include('tests.urls')),

    path('api/v1/movies/', include('movies.urls')),
    path('api/v1/articles/', include('articles.urls')),

    path('api/v1/accounts/', include('accounts.urls')),
    path('api/v1/accounts/', include('dj_rest_auth.urls')),
    path('api/v1/accounts/signup/', include('dj_rest_auth.registration.urls')),
]
