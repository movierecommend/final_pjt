<template>
  <div>
    <h2>실시간 박스오피스 {{this.rank}}위! {{ this.movieNm }}의 예고편입니다.</h2>
    <div style="background-color: black;">
      <iframe :src="this.realurl" width="900px" height="600px">
          <p>지원하지 않는 브라우저입니다.</p>
      </iframe>
    </div>
    <div style="border-radius: 30px; margin-bottom: 5px;" class="boxoffice">
    <div class="swiper-container">
      <div class="swiper-button-prev"></div>
      <ol class="swiper-wrapper">
        <li v-for="box in boxoffice" :key="box.rank" class="swiper-slide">
          <div class="card2 item_poster swiper-slide">
            <div class="poster_movie">
              <img :src="require(`@/assets/posterimg/${box.rank}.jpg`)" style="margin-left: 0px; width: 204px; margin-right: 20px;" @click="updateUrl(box.movieNm, box.rank)"/>
              <span class="rank_num">{{ box.rank }}</span>
            </div>
            <span class="movieName">
              <span v-if="box.rankOldAndNew == 'NEW'">
                <button style="color: red;" class="btn btn-border-none btn-sm">{{ box.rankOldAndNew }}</button>
              </span>
              {{ box.movieNm }}
            </span>
          </div>
        </li>
      </ol>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <br><br>
      <h2>실시간 박스오피스</h2><br>
    </div>
  </div>
</div>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { mapGetters } from 'vuex';
import axios from 'axios';

Swiper.use([Navigation, Pagination]);

export default {
  name: 'BoxofficeDaily',
  computed: {
    ...mapGetters('home/', ['boxoffice']),
  },
  data() {
    return {
      realurl: '',
      rank: 1,
      originalurl:'https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_xml2.jsp?collection=kmdb_new2',
      movieNm: '가디언즈 오브 갤럭시',
      title: '',
      API_KEY: 'D2VY8455A80060QVE094',
      updatedurl: 'https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_xml2.jsp?collection=kmdb_new2&title=분노의 질주: 라이드&ServiceKey=D2VY8455A80060QVE094'
  }},
  methods: {
    updateUrl(movieNm, rank) {
      this.rank = rank
      this.movieNm = movieNm
      this.updatedurl = new URL(this.originalurl + `&title=${this.movieNm}` + `&ServiceKey=${this.API_KEY}`)['href']
      this.fetchTrailerUrl()
    },
    // fetchPosterImg() {
    //   fetch(
    //     this.updatedurl
    //   )
    //   .then((response) => response.text())
    //   .then((data) => {
    //       const parser1 = new DOMParser();
    //       const xmlDoc1 = parser1.parseFromString(data, 'text/xml');
    //       const resultNode1 = xmlDoc1.querySelector('Result');
    //       const vodsUrls1 = resultNode1.getElementsByTagName('Row');

    //       for (var index = 0; index < vodsUrls1.length; index++) {
    //         if (vodsUrls1[index].querySelector('prodYear').textContent.trim() === '2023') {
    //           const posterUrls = vodsUrls1[index].querySelector('posters')
    //           const posterUrl = posterUrls.textContent.trim().split(',')[0];
    //           this.posterUrl = posterUrl
    //           break;
    //         }
    //         // const posterUrl2 = this.posterUrl
    //     }})
    //     .catch((error) => {
    //       console.error('Error fetching XML data:', error);
    //     });
    // },
    
    fetchTrailerUrl() {
      fetch(
        this.updatedurl
      )
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, 'text/xml');
          const resultNode = xmlDoc.querySelector('Result');
          const vodsUrls = resultNode.getElementsByTagName('Row');
      
          for (var index = 0; index < vodsUrls.length; index++) {
            if (vodsUrls[index].querySelector('prodYear').textContent.trim() === '2023') {
              const vodUrl = vodsUrls[index].querySelector('vods').querySelector('vod').querySelector('vodUrl');
              const vodsUrl = vodUrl.textContent.trim();
              this.vodsUrl = vodsUrl
              break;
            }
          }
          const vodsUrl2 = this.vodsUrl
          axios
            .get(vodsUrl2)
            .then((response) => {
              const html = response.data;
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, 'text/html');
              const anchorMovie = doc.getElementById('anchorMovieMovie');
              const vodElements = anchorMovie.getElementsByTagName('a');
              const beforeurl = vodElements[0].getAttribute('href');
              const cdataStart = "javascript:fcnPlay('";
              const cdataEnd = "');";
              const url = beforeurl.substring(cdataStart.length, beforeurl.length - cdataEnd.length);
              const realurl = 'https://www.kmdb.or.kr/trailer/trailerPlayPop?pFileNm=' + url;
              this.realurl = realurl;
              // console.log(this.realurl);
            })
            .catch((error) => {
              console.error('Error fetching trailer URL:', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching XML data:', error);
        });
    },
  },
  mounted() {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 5,
      spaceBetween: 15,
      debugger: true,
      mousewheel: false,
      loop: false,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    this.fetchTrailerUrl();
  },
};
</script>

<style scoped>
  .swiper-container {
    width: 70%;
    height: 300px;
    margin: 0 auto;
  }

  .boxoffice {
    text-align: center;
    background-color: #0000;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    transition-property: transform;
    box-sizing: content-box;
    white-space: nowrap;
<<<<<<< HEAD
    /* .caard {
      display: inline-block;
    }
    &::-webkit-scrollbar { */
    display: none;
  /* } */
=======
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    width: 200px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .card {
    display: inline-block;
>>>>>>> 740b2695e16cc26b235ed384e183109f4cc7c1ab
  }

  ol {
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 10px;
  }

  .item_poster {
    display: block;
    width: 204px;
  }

  img {
    border: 1px solid #d8d8d8;
    width: 70%;
    box-shadow: 0px 0.5px 1px #d8d8d8;
    display: block;
    width: 100%;
    vertical-align: top;
    border-radius: 8px;
  }

  .poster_movie {
    position: relative;
    height: 100%;
  }

  .poster_movie:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    opacity: 0.2;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0, black 100%);
    border-radius: 8px;
  }

  .rank_num {
    top: -1px;
    left: 12px;
    font-size: 40px;
    color: white;
    position: absolute;
    font-family: 'SF-UI-Display-Thin', sans-serif;
    font-style: italic;
    z-index: 1;
  }

  .movieName {
    display: block;
    overflow: hidden;
    padding: 17px 0;
    text-overflow: ellipsis;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: 70%;
  }
</style>