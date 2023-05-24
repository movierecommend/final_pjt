import requests
from bs4 import BeautifulSoup
import json
from django.http import JsonResponse

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time


service = Service('C:/Users/SSAFY/Desktop/chromedriver.exe')

def movie_ranking():
    # Selenium 드라이버 초기화
    driver = webdriver.Chrome(service=service)

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

    SCROLL_PAUSE_SEC = 1

    # 스크롤 높이 가져옴
    last_height = driver.execute_script("return document.body.scrollHeight")

    while True:
        # 끝까지 스크롤 다운
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        # 1초 대기
        time.sleep(SCROLL_PAUSE_SEC)
        # 스크롤 다운 후 스크롤 높이 다시 가져옴
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            break
        last_height = new_height

    # 웹 페이지 가져오기
    html = driver.page_source

    # BeautifulSoup를 사용하여 HTML 파싱
    soup = BeautifulSoup(html, "html.parser")

    # Netflix 영화 순위 아이템 가져오기
    items = soup.select("li.css-8y23cj")

    # 결과를 저장할 리스트 생성
    movies_watcha = []
    movies_netflix = []

    # OTT 서비스 별로 나눠서 저장할 때 쓸 cnt
    cnt = 0

    # 영화 순위 아이템을 순회하며 정보 추출
    for item in items:
        # 영화 제목 가져오기
        title = item.select_one(".css-5yuqaa").text
        # 포스터 이미지 URL 가져오기
        poster = item.select_one(".css-unzuzl-StyledLazyLoadingImage.ezcopuc0 > img")["src"]

        # print(title, poster)

        # 영화 정보를 딕셔너리로 저장
        movie = {
            "title": title,
            "poster": poster
        }
        cnt += 1
        # 결과 리스트에 추가
        if 41 <= cnt <= 50: 
            movies_watcha.append(movie)
        elif 51 <= cnt <= 60:
            movies_netflix.append(movie)

        # 현재 박스오피스 0~20
        # 문화다양성 21~40
        # 왓챠 41~50
        # 넷플릭스 51~60

    # JSON 파일로 저장
    with open("watcha_list.json", "w", encoding="utf-8") as file:
        json.dump(movies_watcha, file, ensure_ascii=False, indent=4)

    print("WATCHA 영화 순위 정보를 watcha_list.json 파일로 저장했습니다.")

    with open("netflix_list.json", "w", encoding="utf-8") as file:
        json.dump(movies_netflix, file, ensure_ascii=False, indent=4)

    print("NETFLIX 영화 순위 정보를 netflix_list.json 파일로 저장했습니다.")

movie_ranking()