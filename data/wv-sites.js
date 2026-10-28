/* 월드비전 사업장 데이터 — 지도 컴포넌트와 분리된 원본 데이터.
   출처: worldvision.or.kr 사업장안내(해외/국내) · 확인일 2026-10-28
   필드: id, name, type, country, region, latitude, longitude, address, description, website, relatedProjects(P 사업 id), relatedCases(CASES id)
   값이 없으면 null 로 두세요. 화면에서는 숨기거나 '확인 필요'로 표시됩니다. 좌표·주소를 임의로 넣지 마세요. */
window.WV_SITES={
 "meta": {
  "checked": "2026-10-28",
  "worldSource": {
   "t": "월드비전 해외사업장 안내",
   "u": "https://www.worldvision.or.kr/businessGuide/overseaBusinessMap"
  },
  "krSource": {
   "t": "월드비전 국내사업장 안내",
   "u": "https://www.worldvision.or.kr/businessGuide/domesticBusinessMap"
  },
  "worldTotal": "52개국 259개 사업장",
  "krTotalLabel": "18곳 복지사업장",
  "notes": [
   "해외: 공식 페이지에 국가 정보가 공개된 31개국을 표시합니다. 공식 총계(52개국 259개 사업장)와의 차이는 확인이 필요합니다.",
   "국내: 공식 페이지 상단 문구는 ‘18곳’이지만 지역별 목록에는 21곳이 게시되어 있어 확인이 필요합니다.",
   "국내 사업장 위치는 공식 주소를 OpenStreetMap(Nominatim)으로 변환한 근사 위치입니다."
  ]
 },
 "continents": [
  {
   "id": "동아프리카",
   "name": "동아프리카"
  },
  {
   "id": "서아프리카",
   "name": "서아프리카"
  },
  {
   "id": "남아프리카",
   "name": "남아프리카"
  },
  {
   "id": "중남미/카리브해",
   "name": "중남미/카리브해"
  },
  {
   "id": "중동/동유럽",
   "name": "중동/동유럽"
  },
  {
   "id": "동아시아",
   "name": "동아시아"
  },
  {
   "id": "남아시아/태평양",
   "name": "남아시아/태평양"
  }
 ],
 "countries": [
  {
   "id": "w-404",
   "iso": "404",
   "name": "케냐",
   "type": "해외사업 국가",
   "country": "케냐",
   "region": "동아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "나이로비(Nairobi)",
   "population": "5,250만명",
   "year": 2024,
   "areas": [
    "와지르",
    "오실리기",
    "앙구라이",
    "밤바",
    "찬감웨",
    "올도니로"
   ],
   "areaCount": 6,
   "beneficiaries": "339,634",
   "budget": "$3,022,500",
   "sectors": [
    [
     "교육",
     8.5
    ],
    [
     "보건/영양",
     0.7
    ],
    [
     "식수위생",
     15
    ],
    [
     "소득증대",
     7.8
    ],
    [
     "아동보호/참여",
     17.1
    ],
    [
     "지역사회 자립역량강화",
     48.3
    ],
    [
     "재난 대비/대응",
     2.7
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=6",
   "relatedProjects": [
    "protect",
    "water",
    "edu"
   ],
   "relatedCases": []
  },
  {
   "id": "w-108",
   "iso": "108",
   "name": "부룬디",
   "type": "해외사업 국가",
   "country": "부룬디",
   "region": "동아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "기테가 (Gitega)",
   "population": "1,150만명",
   "year": 2024,
   "areas": [
    "기타바",
    "킨잔자",
    "카요고로",
    "솜보"
   ],
   "areaCount": 4,
   "beneficiaries": "161,977",
   "budget": "$1,348,500",
   "sectors": [
    [
     "교육",
     16.3
    ],
    [
     "보건/영양",
     12.2
    ],
    [
     "식수위생",
     4.2
    ],
    [
     "소득증대",
     37.1
    ],
    [
     "지역사회 자립역량강화",
     30.2
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=7",
   "relatedProjects": [
    "income",
    "edu",
    "health"
   ],
   "relatedCases": []
  },
  {
   "id": "w-231",
   "iso": "231",
   "name": "에티오피아",
   "type": "해외사업 국가",
   "country": "에티오피아",
   "region": "동아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "아디스아바바(Addis Ababa)",
   "population": "약 1억 1092만명",
   "year": 2024,
   "areas": [
    "짐마게네티",
    "훌라",
    "하브로",
    "멜카벨로",
    "디겔루나티조"
   ],
   "areaCount": 5,
   "beneficiaries": "181,987",
   "budget": "$2,841,500",
   "sectors": [
    [
     "교육",
     15.8
    ],
    [
     "보건/영양",
     0.5
    ],
    [
     "식수위생",
     26.4
    ],
    [
     "소득증대",
     23.9
    ],
    [
     "아동보호/참여",
     10.5
    ],
    [
     "지역사회 자립역량강화",
     22.8
    ],
    [
     "재난 대비/대응",
     0.1
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=8",
   "relatedProjects": [
    "water",
    "income",
    "edu"
   ],
   "relatedCases": []
  },
  {
   "id": "w-834",
   "iso": "834",
   "name": "탄자니아",
   "type": "해외사업 국가",
   "country": "탄자니아",
   "region": "동아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "다레살람(Dar es Salaam, 경제·행정수도) 도도마(Dodoma, 정치수도, 의회소재지)",
   "population": "약5,800만명",
   "year": 2024,
   "areas": [
    "레이크에야시",
    "은다바시",
    "음파윤구",
    "다발로"
   ],
   "areaCount": 4,
   "beneficiaries": "99,367",
   "budget": "$1,705,000",
   "sectors": [
    [
     "교육",
     17.5
    ],
    [
     "보건/영양",
     4.1
    ],
    [
     "식수위생",
     24.8
    ],
    [
     "소득증대",
     13.5
    ],
    [
     "아동보호/참여",
     17.7
    ],
    [
     "지역사회 자립역량강화",
     19.4
    ],
    [
     "재난 대비/대응",
     3.1
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=9",
   "relatedProjects": [
    "water",
    "protect",
    "edu"
   ],
   "relatedCases": []
  },
  {
   "id": "w-800",
   "iso": "800",
   "name": "우간다",
   "type": "해외사업 국가",
   "country": "우간다",
   "region": "동아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "캄팔라(Kampala)",
   "population": "4,420만명",
   "year": 2024,
   "areas": [
    "카삼브야",
    "부둠바",
    "키지란품비",
    "파야",
    "음풍궤"
   ],
   "areaCount": 5,
   "beneficiaries": "211,581",
   "budget": "$2,336,000",
   "sectors": [
    [
     "교육",
     19.6
    ],
    [
     "보건/영양",
     10.7
    ],
    [
     "식수위생",
     2.8
    ],
    [
     "소득증대",
     13
    ],
    [
     "아동보호/참여",
     18.5
    ],
    [
     "지역사회 자립역량강화",
     32.9
    ],
    [
     "재난 대비/대응",
     2.6
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=16",
   "relatedProjects": [
    "edu",
    "protect",
    "income"
   ],
   "relatedCases": []
  },
  {
   "id": "w-646",
   "iso": "646",
   "name": "르완다",
   "type": "해외사업 국가",
   "country": "르완다",
   "region": "동아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "키갈리 (Kigali)",
   "population": "1,260만명",
   "year": 2024,
   "areas": [
    "우부뭬",
    "비링기로",
    "우무초",
    "음웨지"
   ],
   "areaCount": 4,
   "beneficiaries": "185,780",
   "budget": "$2,100,000",
   "sectors": [
    [
     "교육",
     15.3
    ],
    [
     "보건/영양",
     15.4
    ],
    [
     "식수위생",
     13.3
    ],
    [
     "소득증대",
     27.5
    ],
    [
     "아동보호/참여",
     10.5
    ],
    [
     "지역사회 자립역량강화",
     17.5
    ],
    [
     "재난 대비/대응",
     0.5
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=17",
   "relatedProjects": [
    "income",
    "health",
    "edu"
   ],
   "relatedCases": []
  },
  {
   "id": "w-686",
   "iso": "686",
   "name": "세네갈",
   "type": "해외사업 국가",
   "country": "세네갈",
   "region": "서아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "다카르(Dakar)",
   "population": "1,630만명",
   "year": 2024,
   "areas": [
    "퐁고",
    "톰보론",
    "반다파시"
   ],
   "areaCount": 3,
   "beneficiaries": "90,171",
   "budget": "$1,410,000",
   "sectors": [
    [
     "교육",
     18.6
    ],
    [
     "보건/영양",
     7.9
    ],
    [
     "식수위생",
     11.2
    ],
    [
     "소득증대",
     23.6
    ],
    [
     "아동보호/참여",
     29.7
    ],
    [
     "지역사회 자립역량강화",
     6.7
    ],
    [
     "재난 대비/대응",
     2.3
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=10",
   "relatedProjects": [
    "protect",
    "income",
    "edu"
   ],
   "relatedCases": []
  },
  {
   "id": "w-694",
   "iso": "694",
   "name": "시에라리온",
   "type": "해외사업 국가",
   "country": "시에라리온",
   "region": "서아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "프리타운(Freetown)",
   "population": "631만명",
   "year": 2024,
   "areas": [
    "니미코로",
    "레이",
    "소로베마",
    "말렌"
   ],
   "areaCount": 4,
   "beneficiaries": "202,572",
   "budget": "$1,782,500",
   "sectors": [
    [
     "교육",
     23.3
    ],
    [
     "보건/영양",
     9.8
    ],
    [
     "식수위생",
     1.5
    ],
    [
     "소득증대",
     0.4
    ],
    [
     "아동보호/참여",
     31.4
    ],
    [
     "지역사회 자립역량강화",
     31.5
    ],
    [
     "재난 대비/대응",
     2.2
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=18",
   "relatedProjects": [
    "protect",
    "edu",
    "health"
   ],
   "relatedCases": []
  },
  {
   "id": "w-562",
   "iso": "562",
   "name": "니제르",
   "type": "해외사업 국가",
   "country": "니제르",
   "region": "서아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "니아메(Niamey)",
   "population": "2,331만명",
   "year": 2024,
   "areas": [
    "마카론디",
    "토로디"
   ],
   "areaCount": 2,
   "beneficiaries": "26,524",
   "budget": "$620,000",
   "sectors": [
    [
     "보건/영양",
     36.5
    ],
    [
     "식수위생",
     9.4
    ],
    [
     "소득증대",
     13.6
    ],
    [
     "아동보호/참여",
     0.8
    ],
    [
     "지역사회 자립역량강화",
     31.6
    ],
    [
     "재난 대비/대응",
     8.1
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=19",
   "relatedProjects": [
    "health",
    "income",
    "water"
   ],
   "relatedCases": []
  },
  {
   "id": "w-466",
   "iso": "466",
   "name": "말리",
   "type": "해외사업 국가",
   "country": "말리",
   "region": "서아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "바마코(Bamako)",
   "population": "1,910만명",
   "year": 2024,
   "areas": [
    "소로",
    "사모리",
    "베마"
   ],
   "areaCount": 3,
   "beneficiaries": "65,254",
   "budget": "$987,500",
   "sectors": [
    [
     "교육",
     6.5
    ],
    [
     "보건/영양",
     5.3
    ],
    [
     "식수위생",
     46.5
    ],
    [
     "소득증대",
     1.3
    ],
    [
     "아동보호/참여",
     32.5
    ],
    [
     "지역사회 자립역량강화",
     4.5
    ],
    [
     "재난 대비/대응",
     3.4
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=20",
   "relatedProjects": [
    "water",
    "protect",
    "edu"
   ],
   "relatedCases": []
  },
  {
   "id": "w-288",
   "iso": "288",
   "name": "가나",
   "type": "해외사업 국가",
   "country": "가나",
   "region": "서아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "아크라(Accra)",
   "population": "3,041만명",
   "year": 2024,
   "areas": [
    "판테아크와",
    "아프람플레인즈",
    "가루템페인",
    "바우쿠웨스트",
    "크라치웨스트",
    "카제비"
   ],
   "areaCount": 6,
   "beneficiaries": "296,472",
   "budget": "$2,607,649",
   "sectors": [
    [
     "교육",
     23.6
    ],
    [
     "보건/영양",
     4
    ],
    [
     "식수위생",
     29.1
    ],
    [
     "소득증대",
     15.7
    ],
    [
     "아동보호/참여",
     11
    ],
    [
     "지역사회 자립역량강화",
     13
    ],
    [
     "재난 대비/대응",
     3.8
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=21",
   "relatedProjects": [
    "water",
    "edu",
    "income"
   ],
   "relatedCases": []
  },
  {
   "id": "w-180",
   "iso": "180",
   "name": "콩고민주공화국",
   "type": "해외사업 국가",
   "country": "콩고민주공화국",
   "region": "남아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "킨샤사(Kinshasa)",
   "population": "8,679만명",
   "year": 2024,
   "areas": [
    "풍구루메",
    "무토시",
    "키쿨라",
    "키순카"
   ],
   "areaCount": 4,
   "beneficiaries": "70,524",
   "budget": "$2,014,943",
   "sectors": [
    [
     "교육",
     20.2
    ],
    [
     "소득증대",
     32.7
    ],
    [
     "지역사회 자립역량강화",
     41.7
    ],
    [
     "재난 대비/대응",
     5.4
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=2",
   "relatedProjects": [
    "income",
    "edu"
   ],
   "relatedCases": []
  },
  {
   "id": "w-508",
   "iso": "508",
   "name": "모잠비크",
   "type": "해외사업 국가",
   "country": "모잠비크",
   "region": "남아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "마푸투(Maputo)",
   "population": "3,006만명",
   "year": 2024,
   "areas": [
    "도무에",
    "은다울라",
    "리피지",
    "울롱궤"
   ],
   "areaCount": 4,
   "beneficiaries": "48,002",
   "budget": "$1,968,500",
   "sectors": [
    [
     "교육",
     20.7
    ],
    [
     "소득증대",
     6.2
    ],
    [
     "아동보호/참여",
     10.1
    ],
    [
     "지역사회 자립역량강화",
     53.5
    ],
    [
     "재난 대비/대응",
     9.5
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=4",
   "relatedProjects": [
    "edu",
    "protect",
    "income"
   ],
   "relatedCases": []
  },
  {
   "id": "w-748",
   "iso": "748",
   "name": "에스와티니",
   "type": "해외사업 국가",
   "country": "에스와티니",
   "region": "남아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "음바바네(Mbabane)",
   "population": "114만 명",
   "year": 2024,
   "areas": [
    "음키웨니",
    "솜통고",
    "은톤도지"
   ],
   "areaCount": 3,
   "beneficiaries": "84,886",
   "budget": "$1,025,000",
   "sectors": [
    [
     "보건/영양",
     4
    ],
    [
     "식수위생",
     32.4
    ],
    [
     "소득증대",
     38
    ],
    [
     "아동보호/참여",
     8
    ],
    [
     "지역사회 자립역량강화",
     17.6
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=5",
   "relatedProjects": [
    "income",
    "water",
    "protect"
   ],
   "relatedCases": []
  },
  {
   "id": "w-454",
   "iso": "454",
   "name": "말라위",
   "type": "해외사업 국가",
   "country": "말라위",
   "region": "남아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "릴롱궤(Lilongwe)",
   "population": "1,860만명",
   "year": 2024,
   "areas": [
    "쳇사",
    "부아음테테",
    "카상가지",
    "음페레레",
    "상가"
   ],
   "areaCount": 5,
   "beneficiaries": "630,812",
   "budget": "$2,511,000",
   "sectors": [
    [
     "교육",
     29.4
    ],
    [
     "보건/영양",
     14.7
    ],
    [
     "식수위생",
     23.4
    ],
    [
     "소득증대",
     16
    ],
    [
     "아동보호/참여",
     0.6
    ],
    [
     "지역사회 자립역량강화",
     13
    ],
    [
     "재난 대비/대응",
     2.9
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=15",
   "relatedProjects": [
    "edu",
    "water",
    "income"
   ],
   "relatedCases": []
  },
  {
   "id": "w-894",
   "iso": "894",
   "name": "잠비아",
   "type": "해외사업 국가",
   "country": "잠비아",
   "region": "남아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "루사카(Lusaka)",
   "population": "1,780만명",
   "year": 2024,
   "areas": [
    "마고예",
    "충고",
    "룽가",
    "무다냐마",
    "총궤사우스"
   ],
   "areaCount": 5,
   "beneficiaries": "307,784",
   "budget": "$2,637,240",
   "sectors": [
    [
     "교육",
     20.7
    ],
    [
     "보건/영양",
     21.9
    ],
    [
     "식수위생",
     10.3
    ],
    [
     "소득증대",
     22.7
    ],
    [
     "아동보호/참여",
     11.7
    ],
    [
     "지역사회 자립역량강화",
     5.5
    ],
    [
     "재난 대비/대응",
     7.2
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=31",
   "relatedProjects": [
    "income",
    "health",
    "edu"
   ],
   "relatedCases": []
  },
  {
   "id": "w-716",
   "iso": "716",
   "name": "짐바브웨",
   "type": "해외사업 국가",
   "country": "짐바브웨",
   "region": "남아프리카",
   "latitude": null,
   "longitude": null,
   "capital": "하라레",
   "population": "15,090,000(2021년)",
   "year": 2024,
   "areas": [
    "니아샤누",
    "황게이스트",
    "부헤라웨스트"
   ],
   "areaCount": 3,
   "beneficiaries": "63,218",
   "budget": "$675,000",
   "sectors": [
    [
     "교육",
     35.5
    ],
    [
     "식수위생",
     13.2
    ],
    [
     "소득증대",
     14
    ],
    [
     "아동보호/참여",
     20.9
    ],
    [
     "지역사회 자립역량강화",
     15.7
    ],
    [
     "재난 대비/대응",
     0.6
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=33",
   "relatedProjects": [
    "edu",
    "protect",
    "income"
   ],
   "relatedCases": [
    "c7"
   ]
  },
  {
   "id": "w-222",
   "iso": "222",
   "name": "엘살바도르",
   "type": "해외사업 국가",
   "country": "엘살바도르",
   "region": "중남미/카리브해",
   "latitude": null,
   "longitude": null,
   "capital": "산살바도르(San Salvador)",
   "population": "676만명",
   "year": 2024,
   "areas": [
    "누에바비다",
    "솔리다리다드",
    "토레푸에르떼"
   ],
   "areaCount": 3,
   "beneficiaries": "24,161",
   "budget": "$1,500,000",
   "sectors": [
    [
     "교육",
     36.5
    ],
    [
     "보건/영양",
     0.1
    ],
    [
     "식수위생",
     23.1
    ],
    [
     "소득증대",
     3.9
    ],
    [
     "아동보호/참여",
     17.1
    ],
    [
     "지역사회 자립역량강화",
     17.9
    ],
    [
     "재난 대비/대응",
     1.5
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=14",
   "relatedProjects": [
    "edu",
    "water",
    "protect"
   ],
   "relatedCases": []
  },
  {
   "id": "w-320",
   "iso": "320",
   "name": "과테말라",
   "type": "해외사업 국가",
   "country": "과테말라",
   "region": "중남미/카리브해",
   "latitude": null,
   "longitude": null,
   "capital": "과테말라시티(Guatemala City)",
   "population": "1,797만명",
   "year": 2024,
   "areas": [
    "산후안에르미따",
    "호코탄"
   ],
   "areaCount": 2,
   "beneficiaries": "45,601",
   "budget": "$900,000",
   "sectors": [
    [
     "교육",
     10
    ],
    [
     "보건/영양",
     8.9
    ],
    [
     "식수위생",
     1.9
    ],
    [
     "소득증대",
     8.5
    ],
    [
     "아동보호/참여",
     10.9
    ],
    [
     "지역사회 자립역량강화",
     58.6
    ],
    [
     "재난 대비/대응",
     1.4
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=29",
   "relatedProjects": [
    "protect",
    "edu",
    "health"
   ],
   "relatedCases": []
  },
  {
   "id": "w-068",
   "iso": "068",
   "name": "볼리비아",
   "type": "해외사업 국가",
   "country": "볼리비아",
   "region": "중남미/카리브해",
   "latitude": null,
   "longitude": null,
   "capital": "라파스 (La Paz, 행정수도), 헌법상의 수도는 수크레(Sucre)",
   "population": "1,164만명",
   "year": 2024,
   "areas": [
    "차얀타",
    "알파레로",
    "칸차이",
    "싸우씨사"
   ],
   "areaCount": 4,
   "beneficiaries": "49,965",
   "budget": "$1,845,000",
   "sectors": [
    [
     "교육",
     28.6
    ],
    [
     "보건/영양",
     11.4
    ],
    [
     "식수위생",
     12.6
    ],
    [
     "소득증대",
     18.5
    ],
    [
     "아동보호/참여",
     10.2
    ],
    [
     "지역사회 자립역량강화",
     14.3
    ],
    [
     "재난 대비/대응",
     4.4
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=30",
   "relatedProjects": [
    "edu",
    "income",
    "water"
   ],
   "relatedCases": []
  },
  {
   "id": "w-275",
   "iso": "275",
   "name": "예루살렘 서안 가자지구",
   "type": "해외사업 국가",
   "country": "예루살렘 서안 가자지구",
   "region": "중동/동유럽",
   "latitude": null,
   "longitude": null,
   "capital": "라말라(임시 행정수도)",
   "population": "4,654,421명",
   "year": null,
   "areas": null,
   "areaCount": null,
   "beneficiaries": null,
   "budget": null,
   "sectors": [],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=34",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "w-008",
   "iso": "008",
   "name": "알바니아",
   "type": "해외사업 국가",
   "country": "알바니아",
   "region": "중동/동유럽",
   "latitude": null,
   "longitude": null,
   "capital": "티라나",
   "population": "2,893,005명",
   "year": null,
   "areas": null,
   "areaCount": null,
   "beneficiaries": null,
   "budget": null,
   "sectors": [],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=41",
   "relatedProjects": [],
   "relatedCases": [
    "c7"
   ]
  },
  {
   "id": "w-496",
   "iso": "496",
   "name": "몽골",
   "type": "해외사업 국가",
   "country": "몽골",
   "region": "동아시아",
   "latitude": null,
   "longitude": null,
   "capital": "울란바타르 (Ulaanbaatar)",
   "population": "329만명",
   "year": 2024,
   "areas": [
    "투브",
    "고비알타이"
   ],
   "areaCount": 2,
   "beneficiaries": "78,238",
   "budget": "$945,000",
   "sectors": [
    [
     "소득증대",
     29.9
    ],
    [
     "아동보호/참여",
     27.4
    ],
    [
     "지역사회 자립역량강화",
     18.2
    ],
    [
     "재난 대비/대응",
     24.5
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=11",
   "relatedProjects": [
    "income",
    "protect"
   ],
   "relatedCases": []
  },
  {
   "id": "w-704",
   "iso": "704",
   "name": "베트남",
   "type": "해외사업 국가",
   "country": "베트남",
   "region": "동아시아",
   "latitude": null,
   "longitude": null,
   "capital": "하노이(Ha Noi)",
   "population": "9,646만 명",
   "year": 2024,
   "areas": [
    "트엉쑤언",
    "후엉호아",
    "응오꾸엔",
    "다크롱",
    "디엔비엔동",
    "투아추아"
   ],
   "areaCount": 6,
   "beneficiaries": "299,277",
   "budget": "$2,475,000",
   "sectors": [
    [
     "보건/영양",
     16.6
    ],
    [
     "식수위생",
     2.9
    ],
    [
     "소득증대",
     24.6
    ],
    [
     "아동보호/참여",
     34
    ],
    [
     "지역사회 자립역량강화",
     16.6
    ],
    [
     "재난 대비/대응",
     5.3
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=22",
   "relatedProjects": [
    "protect",
    "income",
    "health"
   ],
   "relatedCases": []
  },
  {
   "id": "w-116",
   "iso": "116",
   "name": "캄보디아",
   "type": "해외사업 국가",
   "country": "캄보디아",
   "region": "동아시아",
   "latitude": null,
   "longitude": null,
   "capital": "프놈펜(Phnom Penh)",
   "population": "1,649만 명",
   "year": 2024,
   "areas": [
    "상큼트머이",
    "푸옥",
    "소트니꿈"
   ],
   "areaCount": 3,
   "beneficiaries": "59,218",
   "budget": "$1,275,000",
   "sectors": [
    [
     "교육",
     30.7
    ],
    [
     "보건/영양",
     29.2
    ],
    [
     "식수위생",
     2.1
    ],
    [
     "소득증대",
     1.9
    ],
    [
     "아동보호/참여",
     17.3
    ],
    [
     "지역사회 자립역량강화",
     17.5
    ],
    [
     "재난 대비/대응",
     1.5
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=24",
   "relatedProjects": [
    "edu",
    "health",
    "protect"
   ],
   "relatedCases": []
  },
  {
   "id": "w-608",
   "iso": "608",
   "name": "필리핀",
   "type": "해외사업 국가",
   "country": "필리핀",
   "region": "남아시아/태평양",
   "latitude": null,
   "longitude": null,
   "capital": "메트로마닐라(Metro Manila)",
   "population": "1억 877만 명",
   "year": 2024,
   "areas": null,
   "areaCount": null,
   "beneficiaries": "6,130",
   "budget": "$300,000",
   "sectors": [
    [
     "교육",
     56.5
    ],
    [
     "소득증대",
     5.1
    ],
    [
     "아동보호/참여",
     3.5
    ],
    [
     "지역사회 자립역량강화",
     33.3
    ],
    [
     "재난 대비/대응",
     1.6
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=12",
   "relatedProjects": [
    "edu",
    "income",
    "protect"
   ],
   "relatedCases": []
  },
  {
   "id": "w-524",
   "iso": "524",
   "name": "네팔",
   "type": "해외사업 국가",
   "country": "네팔",
   "region": "남아시아/태평양",
   "latitude": null,
   "longitude": null,
   "capital": "카트만두(Kathmandu)",
   "population": "2,913만명",
   "year": 2024,
   "areas": null,
   "areaCount": null,
   "beneficiaries": "9,523",
   "budget": "$346,762",
   "sectors": [
    [
     "교육",
     54.2
    ],
    [
     "아동보호/참여",
     4.6
    ],
    [
     "지역사회 자립역량강화",
     41.3
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=13",
   "relatedProjects": [
    "edu",
    "protect"
   ],
   "relatedCases": []
  },
  {
   "id": "w-144",
   "iso": "144",
   "name": "스리랑카",
   "type": "해외사업 국가",
   "country": "스리랑카",
   "region": "남아시아/태평양",
   "latitude": null,
   "longitude": null,
   "capital": "콜롬보(실질적 수도), 스리 자야와르데네푸라 코테(행정수도)",
   "population": "2,167만명",
   "year": 2024,
   "areas": [
    "비빌리",
    "바하라이",
    "캔디",
    "와타왈라"
   ],
   "areaCount": 4,
   "beneficiaries": "55,308",
   "budget": "$2,025,000",
   "sectors": [
    [
     "교육",
     2.6
    ],
    [
     "보건/영양",
     6.6
    ],
    [
     "식수위생",
     1
    ],
    [
     "소득증대",
     42.8
    ],
    [
     "아동보호/참여",
     25.2
    ],
    [
     "지역사회 자립역량강화",
     21.6
    ],
    [
     "재난 대비/대응",
     0.2
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=25",
   "relatedProjects": [
    "income",
    "protect",
    "health"
   ],
   "relatedCases": []
  },
  {
   "id": "w-356",
   "iso": "356",
   "name": "인도",
   "type": "해외사업 국가",
   "country": "인도",
   "region": "남아시아/태평양",
   "latitude": null,
   "longitude": null,
   "capital": "뉴델리(New Delhi)",
   "population": "약 13억 5천만명",
   "year": 2022,
   "areas": [
    "아샤딥",
    "빌라스푸르"
   ],
   "areaCount": 2,
   "beneficiaries": "91,339",
   "budget": "$1,020,000",
   "sectors": [
    [
     "보건/영양",
     38
    ],
    [
     "소득증대",
     33
    ],
    [
     "지역사회 자립역량강화",
     30
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=26",
   "relatedProjects": [
    "health",
    "income"
   ],
   "relatedCases": []
  },
  {
   "id": "w-360",
   "iso": "360",
   "name": "인도네시아",
   "type": "해외사업 국가",
   "country": "인도네시아",
   "region": "남아시아/태평양",
   "latitude": null,
   "longitude": null,
   "capital": "자카르타(Jakarta)",
   "population": "2억 7,020만 명",
   "year": 2024,
   "areas": null,
   "areaCount": null,
   "beneficiaries": "14,398",
   "budget": "$495,000",
   "sectors": [
    [
     "보건/영양",
     25.3
    ],
    [
     "식수위생",
     13.6
    ],
    [
     "소득증대",
     2.8
    ],
    [
     "아동보호/참여",
     12.4
    ],
    [
     "지역사회 자립역량강화",
     45.8
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=27",
   "relatedProjects": [
    "health",
    "water",
    "protect"
   ],
   "relatedCases": []
  },
  {
   "id": "w-050",
   "iso": "050",
   "name": "방글라데시",
   "type": "해외사업 국가",
   "country": "방글라데시",
   "region": "남아시아/태평양",
   "latitude": null,
   "longitude": null,
   "capital": "다카(Dhaka)",
   "population": "약 1억6,305만명",
   "year": 2024,
   "areas": [
    "락삼",
    "푸바달라",
    "다모이랏",
    "디나즈푸르",
    "키쇼르곤즈",
    "카하롤",
    "라무"
   ],
   "areaCount": 7,
   "beneficiaries": "344,219",
   "budget": "$3,190,000",
   "sectors": [
    [
     "교육",
     16.2
    ],
    [
     "보건/영양",
     15.4
    ],
    [
     "식수위생",
     1.3
    ],
    [
     "소득증대",
     37.1
    ],
    [
     "아동보호/참여",
     6.1
    ],
    [
     "지역사회 자립역량강화",
     22
    ],
    [
     "재난 대비/대응",
     2.1
    ]
   ],
   "description": null,
   "website": "https://www.worldvision.or.kr/businessGuide/overseaBusinessDetail?nationIdx=28",
   "relatedProjects": [
    "income",
    "edu",
    "health"
   ],
   "relatedCases": []
  }
 ],
 "krRegions": [
  {
   "id": "서울",
   "name": "서울",
   "provinces": [
    "서울특별시"
   ],
   "relatedCases": []
  },
  {
   "id": "경기인천",
   "name": "경기인천",
   "provinces": [
    "경기도",
    "인천광역시"
   ],
   "relatedCases": [
    "c3"
   ]
  },
  {
   "id": "강원",
   "name": "강원",
   "provinces": [
    "강원도"
   ],
   "relatedCases": []
  },
  {
   "id": "대전충남",
   "name": "대전충남",
   "provinces": [
    "대전광역시",
    "충청남도",
    "세종특별자치시"
   ],
   "relatedCases": []
  },
  {
   "id": "충북",
   "name": "충북",
   "provinces": [
    "충청북도"
   ],
   "relatedCases": [
    "c1",
    "c9"
   ]
  },
  {
   "id": "대구경북",
   "name": "대구경북",
   "provinces": [
    "대구광역시",
    "경상북도"
   ],
   "relatedCases": []
  },
  {
   "id": "전북",
   "name": "전북",
   "provinces": [
    "전라북도"
   ],
   "relatedCases": []
  },
  {
   "id": "광주전남",
   "name": "광주전남",
   "provinces": [
    "광주광역시",
    "전라남도"
   ],
   "relatedCases": []
  },
  {
   "id": "부산경남울산",
   "name": "부산경남울산",
   "provinces": [
    "부산광역시",
    "경상남도",
    "울산광역시"
   ],
   "relatedCases": [
    "c2",
    "c4"
   ]
  },
  {
   "id": "제주",
   "name": "제주",
   "provinces": [
    "제주특별자치도"
   ],
   "relatedCases": []
  }
 ],
 "sites": [
  {
   "id": "kr-16",
   "name": "서울동부사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "서울",
   "latitude": 37.49725,
   "longitude": 127.14099,
   "geoPrecision": "street",
   "address": "서울특별시 송파구 오금로51길 34, 나동",
   "phone": "02-988-1794",
   "children": 290,
   "opened": "2017년 7월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=16",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-15",
   "name": "서울서부사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "서울",
   "latitude": 37.60276,
   "longitude": 126.91987,
   "geoPrecision": "street",
   "address": "서울특별시 은평구 진흥로5길 10",
   "phone": "02-357-1318",
   "children": 400,
   "opened": "2017년 7월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=15",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-24",
   "name": "송파종합사회복지관",
   "type": "종합사회복지관",
   "country": "대한민국",
   "region": "서울",
   "latitude": 37.49725,
   "longitude": 127.14099,
   "geoPrecision": "street",
   "address": "서울특별시 송파구 오금로51길 34",
   "phone": "02-401-1919",
   "children": 360,
   "opened": "1988년 11월 18일",
   "description": null,
   "website": [
    {
     "t": "송파복지관 홈페이지",
     "u": "http://www.songpacc.or.kr/"
    },
    {
     "t": "송파복지관 유튜브",
     "u": "https://www.youtube.com/@wvsongpa"
    }
   ],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=24",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-13",
   "name": "경기남부사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "경기인천",
   "latitude": 37.2593,
   "longitude": 127.0466,
   "geoPrecision": "district",
   "address": "경기도 수원시 영통구 매영로 176-1, 4층",
   "phone": "031-245-3004",
   "children": 380,
   "opened": "2013년 1월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=13",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-19",
   "name": "경기북부사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "경기인천",
   "latitude": 37.64511,
   "longitude": 126.78594,
   "geoPrecision": "building",
   "address": "경기도 고양시 일산동구 중앙로 1072 아이비프라자 8층 801호",
   "phone": "031-913-8151",
   "children": 290,
   "opened": "2017년 7월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=19",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-23",
   "name": "성남종합사회복지관",
   "type": "종합사회복지관",
   "country": "대한민국",
   "region": "경기인천",
   "latitude": 37.4307,
   "longitude": 127.137,
   "geoPrecision": "district",
   "address": "경기도 성남시 중원구 금빛로 89",
   "phone": "031-748-7151",
   "children": 360,
   "opened": "1974년 10월 1일",
   "description": null,
   "website": [
    {
     "t": "성남복지관 홈페이지",
     "u": "https://wvsungnam.or.kr/"
    }
   ],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=23",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-18",
   "name": "인천경기사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "경기인천",
   "latitude": 37.53931,
   "longitude": 126.73421,
   "geoPrecision": "building",
   "address": "인천광역시 계양구 장제로 799, 2층",
   "phone": "032-684-7594",
   "children": 380,
   "opened": "2017년 7월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=18",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-12",
   "name": "강원사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "강원",
   "latitude": 37.39703,
   "longitude": 127.95286,
   "geoPrecision": "street",
   "address": "강원특별자치도 원주시 동부순환로 31, 4층",
   "phone": "033-254-2271",
   "children": 290,
   "opened": "2017년 7월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=12",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-1",
   "name": "강원사업본부(태백)",
   "type": "사업본부",
   "country": "대한민국",
   "region": "강원",
   "latitude": 37.10285,
   "longitude": 129.00668,
   "geoPrecision": "street",
   "address": "강원도 태백시 보드미길 35-1",
   "phone": "033-581-4200",
   "children": 320,
   "opened": "2005년 2월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=1",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-31",
   "name": "강원특별자치도장애인종합복지관",
   "type": "장애인종합복지관",
   "country": "대한민국",
   "region": "강원",
   "latitude": 37.90455,
   "longitude": 127.73246,
   "geoPrecision": "street",
   "address": "강원도 춘천시 사우로 27",
   "phone": "033-255-2491",
   "children": 300,
   "opened": "1989년 2월 28일",
   "description": null,
   "website": [
    {
     "t": "강원도장애인복지관 홈페이지",
     "u": "https://rehab.or.kr/"
    }
   ],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=31",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-32",
   "name": "동해시종합사회복지관",
   "type": "종합사회복지관",
   "country": "대한민국",
   "region": "강원",
   "latitude": 37.48282,
   "longitude": 129.12288,
   "geoPrecision": "street",
   "address": "강원도 동해시 전천로 273-10",
   "phone": "033-533-8247",
   "children": 200,
   "opened": "1995년 3월 1일",
   "description": null,
   "website": [
    {
     "t": "동해시종합사회복지관 홈페이지",
     "u": "http://wvdh.or.kr/"
    }
   ],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=32",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-28",
   "name": "춘천종합사회복지관",
   "type": "종합사회복지관",
   "country": "대한민국",
   "region": "강원",
   "latitude": 37.87362,
   "longitude": 127.71509,
   "geoPrecision": "street",
   "address": "강원도 춘천시 근화길 95",
   "phone": "033-254-7244",
   "children": 360,
   "opened": "1976년 6월 22일",
   "description": null,
   "website": [
    {
     "t": "춘천복지관 홈페이지",
     "u": "http://wvcc.or.kr/"
    }
   ],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=28",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-22",
   "name": "대전세종충남사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "대전충남",
   "latitude": 36.3367,
   "longitude": 127.39527,
   "geoPrecision": "street",
   "address": "대전광역시 서구 계룡로 314, (대전일보사) 6층",
   "phone": "042-484-4323",
   "children": 400,
   "opened": "2020년 1월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=22",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-33",
   "name": "충북사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "충북",
   "latitude": 36.61653,
   "longitude": 127.5187,
   "geoPrecision": "street",
   "address": "충청북도 청주시 상당구 중고개로 189, 2층",
   "phone": "043-643-9191",
   "children": 290,
   "opened": "1995년 2월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=33",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-26",
   "name": "대구경북사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "대구경북",
   "latitude": 35.82545,
   "longitude": 128.62742,
   "geoPrecision": "street",
   "address": "대구광역시 수성구 지범로 31, 3층",
   "phone": "053-781-2005",
   "children": 380,
   "opened": "1992년 11월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=26",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-21",
   "name": "전북사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "전북",
   "latitude": 35.8122,
   "longitude": 127.1197,
   "geoPrecision": "district",
   "address": "전라북도 전주시 완산구 맏내4길 5",
   "phone": "063-246-0213",
   "children": 290,
   "opened": "2018년 1월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=21",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-11",
   "name": "광주전남사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "광주전남",
   "latitude": 35.14838,
   "longitude": 126.87131,
   "geoPrecision": "street",
   "address": "광주광역시 서구 월드컵4강로 114, 성준빌딩 3층",
   "phone": "062-372-2601",
   "children": 290,
   "opened": "1985년 4월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=11",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-25",
   "name": "무진종합사회복지관",
   "type": "종합사회복지관",
   "country": "대한민국",
   "region": "광주전남",
   "latitude": 35.16857,
   "longitude": 126.87542,
   "geoPrecision": "building",
   "address": "광주광역시 서구 천변좌하로 594",
   "phone": "062-372-2600",
   "children": 360,
   "opened": "1991년 4월 18일",
   "description": null,
   "website": [
    {
     "t": "무진복지관 홈페이지",
     "u": "https://www.wvmoojin.kr/"
    }
   ],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=25",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-14",
   "name": "경남울산사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "부산경남울산",
   "latitude": 35.24394,
   "longitude": 128.58083,
   "geoPrecision": "street",
   "address": "경상남도 창원시 마산회원구 합성북2길 45",
   "phone": "055-255-9393",
   "children": 380,
   "opened": "2013년 1월 1일",
   "description": null,
   "website": [
    {
     "t": "경남울산사업본부 홈페이지",
     "u": "http://www.wvgn.or.kr/xe/"
    }
   ],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=14",
   "relatedProjects": [],
   "relatedCases": [
    "c2"
   ]
  },
  {
   "id": "kr-27",
   "name": "부산사업본부",
   "type": "사업본부",
   "country": "대한민국",
   "region": "부산경남울산",
   "latitude": 35.18832,
   "longitude": 129.08138,
   "geoPrecision": "building",
   "address": "부산광역시 연제구 중앙대로 1130, 연산동 SK VIEW (2단지) 501호",
   "phone": "051-862-9090",
   "children": 380,
   "opened": "2020년 11월 16일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=27",
   "relatedProjects": [],
   "relatedCases": []
  },
  {
   "id": "kr-5",
   "name": "제주나눔센터",
   "type": "나눔센터",
   "country": "대한민국",
   "region": "제주",
   "latitude": 33.4786,
   "longitude": 126.47464,
   "geoPrecision": "street",
   "address": "제주시 한라대학로 39, 3층",
   "phone": "064-725-6050",
   "children": 0,
   "opened": "1999년 3월 1일",
   "description": null,
   "website": [],
   "officialUrl": "https://www.worldvision.or.kr/businessGuide/domesticBusinessDetail?KoBusinessIdx=5",
   "relatedProjects": [],
   "relatedCases": []
  }
 ]
};
