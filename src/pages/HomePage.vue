<template>

    <!-- sezione hero e ricerca -->
    <section class="home-container position-relative d-flex justify-content-center align-items-center flex-wrap ">

        <div class="position-absolute blobtainer col-12 ">
            <div class="blob "></div>
        </div>

        <div class="position-absolute blobtainer1 col-12  ">
            <div class="blob1 "></div>
        </div>

        <div class="position-absolute blobtainer2 col-12  ">
            <div class="blob2 "></div>
        </div>
        
        <!-- <div class="blob1 position-absolute"></div>
        <div class="blob2 position-absolute"></div> -->
        <div class="d-flex container ">
            <div class="d-flex col-sm-12 col-md-6 justify-content-end align-items-center ">
                <h3 class="text-start">Hai voglia di: <br>
                    <span></span> </h3>
            </div>
            <div class=" col-6 ">
                <div class="d-flex flex-wrap col-12">
                    <div class="col-12">
                        <img class="w-100" src="../../public/img/ramen.png" alt="">
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="../../public/img/riz.png" alt="">
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="../../public/img/salad.png" alt="">
                    </div>
                </div>

            

               
            </div>

                
        </div>

       <!-- Scritta centrale -->

        <div class="col-6">

            <h1 class="scritta-centrale">
                 i nostri partners
            </h1>
        <!-- Fine scritta -->   

        </div>
        
     <div class="container-fluid">
            <div class="carosel-main col-sm-12 ">
                
                <Carousel :items-to-show="2.5" :wrap-around="true">
                    <Slide v-for="slide in 10" :key="slide">
                        <div class="carousel__item">
                            {{ slide }}
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>

        
            </div>       
        </div>
       
    </section>

    
</template>

<script>
import CreditCard from '../components/CreditCard.vue';
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

// import 'vue3-carousel/carousel.css';
    export default {
        name: 'HomePage',
        name: 'WrapAround',

        components: {
            Carousel,
            Slide,
            Navigation,
        }

        


    }
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

// jumbo/hero section
.home-container {
   overflow-x: hidden;
}

h3{
    font-size: 4.5rem;
    font-weight: 500;
    text-align: center;
}

h3 span::before{
    text-transform: uppercase;
    font-weight: 900;
  content: '';
  color: $red;
  animation: profile 5s infinite;
}
@keyframes profile {
  0% { content: 'pizza'}
  50% { content: 'poké'}
  100% { content: 'sushi'}
}

.blobtainer{
    height: 100vh;
    top:1%;
    right: -10%;
    z-index: -10;
    
}
.blob { 
    
  width:100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;

  background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22814.357%22 height=%22607.875%22 viewBox=%2287.171 154.642 814.357 607.875%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M867.5 632q-52.5 132-187 130.5t-233-1.5Q349 761 246 695.5t-148-212q-45-146.5 97-206T450.5 178q113.5-40 263-11.5t178 181Q920 500 867.5 632Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.1 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23F4F1BB%22 d=%22M867.5 632q-52.5 132-187 130.5t-233-1.5Q349 761 246 695.5t-148-212q-45-146.5 97-206T450.5 178q113.5-40 263-11.5t178 181Q920 500 867.5 632Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}


.blobtainer1{
    height: 100vh;
    top:35%;
   left: 10%;
    z-index: -5;
    
}
.blob1 { 
   
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22745.52%22 height=%22781.027%22 viewBox=%22103.544 94.553 745.52 781.027%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M848 622.5Q838 745 738 834t-205-12.5Q428 720 318 716T139.5 606Q71 500 133 389t151-194.5Q373 111 504.5 96T663 221.5Q690 362 774 431t74 191.5Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.1 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%239BC1BC%22 d=%22M848 622.5Q838 745 738 834t-205-12.5Q428 720 318 716T139.5 606Q71 500 133 389t151-194.5Q373 111 504.5 96T663 221.5Q690 362 774 431t74 191.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

.blobtainer2{
    height: 100vh;
    top:70%;
   left: 0%;
    z-index: -5;
    
}
.blob2 { 
    
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22819.217%22 height=%22573.739%22 viewBox=%2273.94 249.839 819.217 573.739%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M864 642q-80 142-222 143t-317.5 33.5Q149 851 92.5 675.5t59-292Q267 267 383.5 253t199 34q82.5 48 222 130.5T864 642Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.1 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23ED6A5A%22 d=%22M864 642q-80 142-222 143t-317.5 33.5Q149 851 92.5 675.5t59-292Q267 267 383.5 253t199 34q82.5 48 222 130.5T864 642Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

// scritta centrale
.scritta-centrale{
    font-size: 80px;
    font-weight: 900;
    color: white;
    padding-top:100px;
    padding-bottom: 100px;
}



</style>