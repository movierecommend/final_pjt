<template>
<<<<<<< HEAD



  <div
  style="border-radius:30px; margin-bottom:5px;"
  class="boxoffice">

    <div class="swiper">
      <div class="thumb_img">
        <!-- <img :src="require(`@/assets/posterimg/background.jpg`)"> -->
        <!-- <div class="thumb_img" style="background-image:url(https://img1.daumcdn.net/thumb/S1960x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F2a73785bfe207fbca22708658653a29ed81a335e)"></div> -->
        {{ boxoffice[0].movieNm }}

      </div>
      <div style="position: relative; overflow: hidden;">
        <ol class="swiper-wrapper" style="margin-left: 0px; transform: translate3d(0px, 0px, 0px);">
          <div class="swiper-button-prev"></div>
          <li v-for="box in boxoffice" :key="box.rank" class="swiper-slide" style="margin-left: 0px;width: 204px;margin-right: 20px;">
            <div class="caard item_poster swiper-slide">
              <div class="poster_movie">
                <img :src="require(`@/assets/posterimg/${box.rank}.jpg`)" style="margin-left: 0px; width: 204px; margin-right: 20px; "/>
                <span class="rank_num" >{{ box.rank }}</span>
              </div>
              <span class="movieName">
              <span v-if="box.rankOldAndNew == 'NEW'">
                <button style="color:red;" class="btn btn-border-none btn-sm">
                  {{ box.rankOldAndNew }}
                </button></span>
                {{ box.movieNm }}
              </span>
            </div>
          </li>
          <div class="swiper-button-next"></div>
        </ol>   
      </div>
    </div>
=======
  <div>
    <iframe :src="this.realurl" width="900px" height="800px">
        <p>지원하지 않는 브라우저입니다.</p>
    </iframe>
    <div style="border-radius: 30px; margin-bottom: 5px;" class="boxoffice">
    <div class="swiper-container">
      <div class="swiper-button-prev"></div>
      <ol class="swiper-wrapper">
        <li v-for="box in boxoffice" :key="box.rank" class="swiper-slide">
          <div class="card2 item_poster swiper-slide">
            <div class="poster_movie">
              <img :src="require(`@/assets/posterimg/${box.rank}.jpg`)" style="margin-left: 0px; width: 204px; margin-right: 20px;" />
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
>>>>>>> 740b2695e16cc26b235ed384e183109f4cc7c1ab
    </div>
  </div>
</div>
</template>

<script>
<<<<<<< HEAD
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { mapGetters } from "vuex"
// var mySwiper = new Swiper('.swiper-container', {
// 	slidesPerView: 5, //슬라이드를 한번에 5개를 보여준다
//   spaceBetween: 30, //슬라이드간 padding 값 30px 씩 떨어뜨려줌
// 	loop: false, //loop 를 true 로 할경우 무한반복 슬라이드 false 로 할경우 슬라이드의 끝에서 더보여지지 않음
// });

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: false,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
=======
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { mapGetters } from 'vuex';
import axios from 'axios';

Swiper.use([Navigation, Pagination]);
>>>>>>> 740b2695e16cc26b235ed384e183109f4cc7c1ab

export default {
  name: 'BoxofficeDaily',
  computed: {
    ...mapGetters('home/', ['boxoffice']),
  },
  data() {
    return {
      realurl: '',
    };
  },
  methods: {
    fetchTrailerUrl() {
      fetch(
        'https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_xml2.jsp?collection=kmdb_new2&title=분노의 질주: 라이드&releaseDate=2022&ServiceKey=D2VY8455A80060QVE094'
      )
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, 'text/xml');
          const resultNode = xmlDoc.querySelector('Result');
          const vodsUrl = resultNode.querySelector('Row').querySelector('vods').querySelector('vod').querySelector('vodUrl');
          const vodsUrl2 = vodsUrl.textContent;
          axios
            .get(vodsUrl2)
            .then((response) => {
              const html = response.data;
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, 'text/html');
              const anchorMovie = doc.getElementById('anchorMovieMovie');
              const vodElements = anchorMovie.getElementsByTagName('a');
              const beforeurl = vodElements[2].getAttribute('href');
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

</style>