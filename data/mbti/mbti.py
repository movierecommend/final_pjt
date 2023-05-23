mbti_list = []
names = []
mbtis = []
title = "해리 포터"
content = "해리 포터 (Harry Potter) - ISFP,헤르미온느 그레인저 (Hermione Granger) - INTJ,론 위즐리 (Ron Weasley) - ESFP,알버스 덤블도어 (Albus Dumbledore) - INFJ,세베루스 스네이프 (Severus Snape) - ISTJ,드라코 말포이 (Draco Malfoy) - ESTP,루나 러브굿 (Luna Lovegood) - INFP,네빌 롱부텀 (Neville Longbottom) - ISFJ,진니 위즐리 (Ginny Weasley) - ESFP,헤드위그 (Hedwig, 해리의 올빼미) - ISTP,루비우스 헤그리드 (Rubeus Hagrid) - ESFJ,프레드와 조지 위즐리 (Fred and George Weasley) - ENTP,시리우스 블랙 (Sirius Black) - ENFP,레무스 루핀 (Remus Lupin) - INFJ,미네르바 맥고나걸 (Minerva McGonagall) - ENTJ,볼드모트 (Lord Voldemort) - INTJ"
for i in content.split(','):
    each_mbti = {}
    name, mbti = i.split(' - ')[0], i.split(' - ')[1]
    each_mbti["title"] = title
    each_mbti["name"] = name
    each_mbti["mbti"] = mbti
    mbti_list.append(each_mbti)
    # mbti_list.append("{"title": "해리 포터", "name": f{i.split(' - ')[1]}, "mbti":f'i.split(' - ')[1]'}")
print(mbti_list)