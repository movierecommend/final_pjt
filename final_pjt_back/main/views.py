from django.http import JsonResponse
from django.views import View
import requests
from bs4 import BeautifulSoup

class MovieListView(View):
    def get_ott_list(self, request):
    # 크롤링할 사이트 URL
        url = 'https://https://movie.daum.net/main'

        # 요청 보내기
        response = requests.get(url)
        if response.status_code == 200:
            # 크롤링한 데이터 파싱
            soup = BeautifulSoup(response.text, 'html.parser')
            movies = []
            movie_elements = soup.select('.movie-element')

            for movie_element in movie_elements:
                title = movie_element.select_one('.title').text
                rating = movie_element.select_one('.rating').text
                movies.append({
                    'title': title,
                    'rating': rating,
                })

            return JsonResponse(movies, safe=False)
        else:
            return JsonResponse({'error': 'Failed to fetch data'}, status=500)
