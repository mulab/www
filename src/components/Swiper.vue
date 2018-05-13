<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide class="slide-1">
      <div class="text">
        <h2>All information, one place. <br /></h2>
        <router-link to="/about">LEARN MORE</router-link>
      </div>
      <img class="pic-left" src="../../static/images/1-1.png" />
      <img class="pic-right" src="../../static/images/1-2.png" />
      <img class="pic-mid" src="../../static/images/ipad_1.png" />
    </swiper-slide>
    <swiper-slide class="slide-2">
      <div class="text">
        <h2>Hack, tinker and paint the world. <br /></h2>
        <router-link to="/about">LEARN MORE</router-link>
      </div>
      <img class="pic-left" src="../../static/images/2-1.png" />
      <img class="pic-right" src="../../static/images/2-2.png" />
      <img class="pic-mid" src="../../static/images/ipad_2.png" />
    </swiper-slide>
    <swiper-slide class="slide-3">
      <div class="text">
        <h2>Simplify our campus life.</h2>
        <router-link to="/about">LEARN MORE</router-link>
      </div>
      <img class="pic-left" src="../../static/images/3-1.png" />
      <img class="pic-right" src="../../static/images/3-2.png" />
      <img class="pic-mid" src="../../static/images/ipad_3.png" />
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<style>
.swiper
{
  background-color: white;
}
.slide-1
{
  width: 100%;
  height: 1080px;
  background-color: #756594;
  color: white;
}
.slide-2
{
  width: 100%;
  height: 1080px;
  background-color: #b5696a;
  color: white;
}
.slide-3
{
  width: 100%;
  height: 1080px;
  background-color: #5797bd;
  color: white;
}
.text
{
  position: relative;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  Z-index: 10;
}
.pic-left
{
  position: absolute;
  top: 100px;
  left: 150px;
}
.pic-right
{
  position: absolute;
  top: 100px;
  right: 150px;
}
.pic-mid
{
  position: absolute;
  bottom: 20px;
  left: 600px;
}
a
{
  color: white;
  transition: color .2s;
  text-decoration: none!important;
}
a:hover
{
  color: #ff0;
}
</style>

<script>
export default {
  data()
  {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  }
};
</script>
