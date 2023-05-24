import requests
from bs4 import BeautifulSoup
import json
from django.http import JsonResponse

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

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
    # Selenium 드라이버 초기화
    driver = webdriver.Chrome()

    # 웹 페이지 로드
    driver.get('https://pedia.watcha.com/ko-KR')

    # 광고 창이 나타날 때까지 대기
    ad_element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, 'css-1doegd6'))
    )

    # 광고 창을 닫는 동작 수행
    ad_element.click()

    # 원래 창으로 전환
    driver.switch_to.window(driver.window_handles[0])

    # 웹 페이지 가져오기
    html = driver.page_source

    # BeautifulSoup를 사용하여 HTML 파싱
    soup = BeautifulSoup(html, "html.parser")

    # Netflix 영화 순위 아이템 가져오기
    items = soup.select("div.css-5yuqaa")
    print(items)
    # 결과를 저장할 리스트 생성
    movies = []
    
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

        # cnt += 1
        # 결과 리스트에 추가
        movies.append(movie)

    # JSON 파일로 저장
    with open("netflix_list.json", "w", encoding="utf-8") as file:
        json.dump(movies, file, ensure_ascii=False, indent=4)

    print("넷플릭스 영화 순위 정보를 netflix_list.json 파일로 저장했습니다.")

# watcha_ranking()

netflix_ranking()