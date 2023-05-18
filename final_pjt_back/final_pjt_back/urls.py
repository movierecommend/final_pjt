from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('main/', include('main.urls')),
    path('recommendations/', include('recommendations.urls')),
    path('tests/', include('tests.urls')),
    path('boards/', include('boards.urls')),
    path('movies/', include('movies.urls')),
    path('accounts/', include('accounts.urls')),
]
