<template >
    <div class="bkg ">
        <div class="container">

            <Carousel class=" cards" :items-to-show="1" :wrap-around="true">
                <Slide v-for="slide in restaurants" :key="slide">




                    <div class="carta">
                        <div class="img mb-2">
                            <img class="w-100 h-100" :src="`${store.imagBasePath}${slide.image}`" alt="">
                        </div>
                        <h3 class="">{{ slide.name }}</h3>
                        <p class="info">{{ truncate(slide.description, 100) }}</p>

                        <router-link :to="{ name: 'restaurant', params: { slug: slide.slug } }">
                            <button class="">
                                <p class="  m-0">Menù</p>
                            </button>
                        </router-link>
                    </div>


                </Slide>

                <template #addons>
                    <Pagination />
                    <Navigation />
                </template>
            </Carousel>


        </div>
    </div>
</template>

<script >
import { store } from '../store';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import axios from 'axios';


export default {
    name: 'CarouselRestaurant',
    data() {
        return {
            store,
            restaurants: [],




        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },




    methods: {
        getRestautants() {
            axios.get(`${this.store.apiBaseUrl}/restaurants`).then((response) => {

                console.log(response.data.results)
                this.restaurants = response.data.results
            })

        },

        getType() {
            axios.get(`${this.store.apiBaseUrl}/types`).then((response) => {


                this.types = response.data.results
            })

        },

        truncate(str, n) {
            return str.substring(0, n) + '...';
        }


    },





    mounted() {
        this.getType(),
            this.getRestautants()


    }

}

</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.carta {
    width: 20em;
    height: 22em;

    transition: 1s ease-in-out;
    clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22753.595%22 height=%22644.116%22 viewBox=%22112.635 218.87 753.595 644.116%22%3E%3Cdefs%3E%3CradialGradient id=%22c%22 r=%22100%25%22 cx=%222%25%22 cy=%2280%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23FF0037%22%2F%3E%3Cstop offset=%2250%25%22 stop-color=%22%23F4F1BB%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%239BC1BC%22%2F%3E%3C%2FradialGradient%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M825.5 631Q762 762 631 824.5T345.5 848q-154.5-39-211-193.5t33-276q89.5-121.5 211-111T659 230q159-48 194.5 111t-28 290Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.1 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22url(%23c)%22 d=%22M825.5 631Q762 762 631 824.5T345.5 848q-154.5-39-211-193.5t33-276q89.5-121.5 211-111T659 230q159-48 194.5 111t-28 290Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");

}

.carta span {
    font-weight: bold;
    color: white;
    text-align: center;
    display: block;
    padding-top: 1em;
    font-size: 1em;
}

.carta .info {
    font-weight: 400;
    color: $black;
    display: block;
    text-align: center;
    padding-top: 0.1em;
    font-size: 0.72em;
    margin: 1em;
    margin-top: 1em;
}

.carta .img {
    overflow: hidden;
    width: 5rem;
    height: 5rem;
    background: white;
    border-radius: 15px;
    margin: auto;
    margin-top: 1.7em;
}

.carta .share {
    text-align: center;
    margin-top: 1.8em;
}

.carta a {
    color: white;
    transition: .4s ease-in-out;
    text-decoration: none;
}



.carta button {
    padding: 0.8em 1.7em;
    display: block;
    margin: auto;
    border-radius: 25px;
    border: none;
    margin-top: 2em;
    font-weight: bold;
    background: $acqua;
    color: rgb(0, 0, 0);
    transition: .4s ease-in-out;
}

.carta button:hover {
    background: $yellow;
    color:$red;
    text-decoration: none;
}

.carousel__slide--next {
    opacity: 0.5;
}

.carousel__slide--prev {
    opacity: 0.5;
}


.blob {
    //   width: 100%;
    //   height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22753.595%22 height=%22644.116%22 viewBox=%22112.635 218.87 753.595 644.116%22%3E%3Cdefs%3E%3CradialGradient id=%22c%22 r=%22100%25%22 cx=%222%25%22 cy=%2280%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23FF0037%22%2F%3E%3Cstop offset=%2250%25%22 stop-color=%22%23F4F1BB%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%239BC1BC%22%2F%3E%3C%2FradialGradient%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M825.5 631Q762 762 631 824.5T345.5 848q-154.5-39-211-193.5t33-276q89.5-121.5 211-111T659 230q159-48 194.5 111t-28 290Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.1 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22url(%23c)%22 d=%22M825.5 631Q762 762 631 824.5T345.5 848q-154.5-39-211-193.5t33-276q89.5-121.5 211-111T659 230q159-48 194.5 111t-28 290Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}
button {
  background-color: white;
  color: black;
  border-radius: 10em;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;
}

button:hover {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 black;
};

button:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 black;
};
</style>