import requests
from bs4 import BeautifulSoup
import json
from django.http import JsonResponse

def watcha_ranking():
    # 웹 페이지 가져오기
    url = "https://pedia.watcha.com/ko-KR"
    response = requests.get(url)
    html = response.text

    # BeautifulSoup를 사용하여 HTML 파싱
    soup = BeautifulSoup(html, "html.parser")

    # watcha 영화 순위 아이템 가져오기
    items = soup.select("li.css-8y23cj")
    # print(items)
    # 결과를 저장할 리스트 생성
    movies = []
    # 왓챠 순위만 저장할 수 있게 cnt 사용..
    cnt = 0
    # 영화 순위 아이템을 순회하며 정보 추출
    for item in items:
        # 영화 제목 가져오기

        title = item.select_one(".css-5yuqaa").text

        # 포스터 이미지 URL 가져오기
        poster = item.select_one(".css-unzuzl-StyledLazyLoadingImage.ezcopuc0 > img")["src"]

        # 영화 정보를 딕셔너리로 저장
        movie = {
            "title": title,
            "poster": poster
        }

        cnt += 1
        # 결과 리스트에 추가
        if cnt > 20:
            movies.append(movie)

    # JSON 파일로 저장
    with open("watcha_list.json", "w", encoding="utf-8") as file:
        json.dump(movies, file, ensure_ascii=False, indent=4)

    print("왓챠 영화 순위 정보를 netflix_list.json 파일로 저장했습니다.")



# watcha_ranking()
def netflix_ranking():
    # 웹 페이지 가져오기
    url = "https://pedia.watcha.com/ko-KR"
    response = requests.get(url)
    html = response.text

    # BeautifulSoup를 사용하여 HTML 파싱
    soup = BeautifulSoup(html, "html.parser")

    # Netflix 영화 순위 아이템 가져오기
    items = soup.select("#root > div > div.css-1xm32e0 > section > div > section > div:nth-child(5) > div.css-1qq59e8 > div > div.css-9dnzub > div")
    # print(items)
    # 결과를 저장할 리스트 생성
    movies = []
    # Netflix 순위만 저장할 수 있게 cnt 사용..
    cnt = 0
    # 영화 순위 아이템을 순회하며 정보 추출
    for item in items:
        # 영화 제목 가져오기

        title = item.select_one(".css-5yuqaa").text

        # 포스터 이미지 URL 가져오기
        poster = item.select_one(".css-unzuzl-StyledLazyLoadingImage.ezcopuc0 > img")["src"]

        # 영화 정보를 딕셔너리로 저장
        movie = {
            "title": title,
            "poster": poster
        }

        cnt += 1
        # 결과 리스트에 추가
        if cnt > 20:
            movies.append(movie)

    # JSON 파일로 저장
    with open("netflix_list.json", "w", encoding="utf-8") as file:
        json.dump(movies, file, ensure_ascii=False, indent=4)

    print("넷플릭스 영화 순위 정보를 netflix_list.json 파일로 저장했습니다.")

<<<<<<< HEAD


# netflix_ranking()
=======
netflix_ranking()
>>>>>>> 88a82c4009442915bf3142672350123fa4ed73d8
