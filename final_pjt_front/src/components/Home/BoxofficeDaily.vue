<template>



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
    </div>
</template>
<!-- <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
> -->

<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

<script>
import Swiper from 'swiper';
import { mapGetters } from "vuex"
var mySwiper = new Swiper('.swiper-container', {
	slidesPerView: 5, //슬라이드를 한번에 3개를 보여준다
  spaceBetween: 30, //슬라이드간 padding 값 30px 씩 떨어뜨려줌
	loop: true, //loop 를 true 로 할경우 무한반복 슬라이드 false 로 할경우 슬라이드의 끝에서 더보여지지 않음
});

export default {
  name: 'BoxofficeDaily',
  computed: {
    ...mapGetters("home/", ["boxoffice"]),
  },
}
</script>

<style scoped>
  .boxoffice {
    text-align: left;
    background-color: #0000;
  }
  .movie_visual .thumb_img {
    position: relative;
    max-width: 1960px;
    height: 730px;
    margin: 0 auto;
    background: #313137;
    height: 100%;
    opacity: 0;
    width: auto;
}

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    overflow: hidden;
    /* -webkit-overflow-scrolling: touch; */
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    .caard {
      display: inline-block;
    }
    &::-webkit-scrollbar {
    display: none;
  }
  }

  ol {
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  
  .item_poster {
    display: block;
    width: 204px;
  }

  img {
    border: 1px solid #d8d8d8;
    width: 70%;
    /* margin: 40px; */
    box-shadow: 0px .5px 1px #d8d8d8;
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
    white-space: nowrap;

  }
  
</style>
