import requests
from bs4 import BeautifulSoup
import json
from django.http import JsonResponse

import requests
import json
from bs4 import BeautifulSoup

def netflix_ranking():
    # 웹 페이지 가져오기
    url = "https://pedia.watcha.com/ko-KR"
    response = requests.get(url)
    html = response.text

    # BeautifulSoup를 사용하여 HTML 파싱
    soup = BeautifulSoup(html, "html.parser")

    # 넷플릭스 영화 순위 아이템 가져오기
    items = soup.select(".css-8y23cj")

    # 결과를 저장할 리스트 생성
    movies = []

    # 영화 순위 아이템을 순회하며 정보 추출
    for item in items:
        # 영화 제목 가져오기
        title = item.select_one("a").text

        # 포스터 이미지 URL 가져오기
        poster = item.select_one(".css-unzuzl-StyledLazyLoadingImage.ezcopuc0 > img")["src"]

        # 영화 정보를 딕셔너리로 저장
        movie = {
            "title": title,
            "poster": poster
        }

        # 결과 리스트에 추가
        movies.append(movie)

    # JSON 파일로 저장
    with open("netflix_list.json", "w", encoding="utf-8") as file:
        json.dump(movies, file, ensure_ascii=False, indent=4)

    print("넷플릭스 영화 순위 정보를 netflix_list.json 파일로 저장했습니다.")



# netflix_ranking()