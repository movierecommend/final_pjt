import requests
from bs4 import BeautifulSoup as bs

# 주소로 get 요청을 보내고 응답 받음. 상태 코드와 HTML 내용을 응답받을 수 있음
page = requests.get("https://pedia.watcha.com/ko-KR")

# 응답받은 HTML 내용을 BeautifulSoup 클래스의 객체 형채로 생성/반환
# BeautifulSoup 객체를 통해 HTML 코드는 파싱하기 위한 여러 가지 기능 사용 가능
# (`response.text`는 응답 받은 내용(HTML)을 Unicode 형태로 반환)
soup = bs(page.text, "html.parser")

# BeautifulSoup가 제공하는 기능 중 CSS 셀렉터를 이용하여 원하는 정보를 찾을 수 있는 기능
#  `div.esg-entry-content a > span`은 esg-entry-content 클래스로 설정된 div 태그들의 하위에 존재하는 a 태그,
# 그 하위에 존재하는 span 태그를 의미
elements = soup.select('div.css-174lxc3 div.css-5yuqaa')
images = soup.select('div.css-1qmeemv img')
image_src = []
for image in images:
	image_src.append(image['src'])

# print(image_src)
# selectall 도 써보셈

# elements에 선택된 a 태그들을 순회하면서 각 영화 제목, 이미지 url을 출력
for rank, tag in enumerate(elements, 1):
	if rank < 11:
		print(f"현재 박스오피스: Rank {rank}: {tag.text} : {image_src[rank-1]}")
	elif rank < 21:
		print(f"왓차 박스오피스: Rank {rank-10}: {tag.text} :{image_src[rank-1]}")
	else:
		print(f"넷플릭스 박스오피스: Rank {rank-20}: {tag.text} :{image_src[rank-1]}")

