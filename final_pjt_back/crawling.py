import requests
from bs4 import BeautifulSoup as bs

page = requests.get("https://movie.daum.net/")
soup = bs(page.text, "html.parser")

elements = soup.select('div.esg-entry-content a.eg-grant-element-0')

for index, element in enumerate(elements, 1):
		print("{} 번째 게시글: {}, {}".format(index, element.text, element.attrs['href']))