<template >
    <div class="bkg ">
        <div class="">

            <Carousel class=" w-100 cards" :settings="settings"  :breakpoints="breakpoints" :wrap-around="true" :autoplay="2000"  :transition="1000">
                <Slide v-for="(slide,item) in slide " key="item">


                    <div class="carta">
                        <div class="img mb-2">
                            <img class="w-100 h-100" :src="`${slide.image}`" alt="">
                        </div>
                        <h3 class="w-60 m-auto">{{ slide.name }}</h3>
                            <div class="cont-h">
                                <a class="" v-bind:href="slide.git"><i class="fa-brands fa-3x  fa-github cont-link "></i></a>
                            </div>
                        

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
    name: 'CarouselAboutTeam',
    data() {
        return {

            settings: {
				itemsToShow: 1,
				snapAlign: "center"
			},

            breakpoints: {
				// 700px and up
				800: {
					itemsToShow: 2.5,
					snapAlign: "center",
				}
            },

            store,
            slide:[
                {
                name: 'Salvatore Colopi',
                image :'../../public/img/salvo.jpeg',
                git:"https://github.com/colopisalvatore",
                },

                {
                name: 'Lorenzo Castiglion',
                image :'../../public/img/lore.png',
                git:"https://github.com/LorenzoCastiglion",
                },

                {
                name: 'Valentina Zussino',
                image :'../../public/img/vale2.jpg',
                git:"https://github.com/ValentinaZussino",
                },

                {
                name: 'Luis Miguel Gonzalez Castellanos',
                image :'../../public/img/luis.png',
                git:"https://github.com/LuisGonzalez27",
                },
                {
                name: 'Michele Benaco',
                image :'../../public/img/mike.jpg',
                git:"https://github.com/MicheleBenaco",
                },
            ]

                

        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },




    methods: {

        truncate(str, n) {
            return str.substring(0, n) + '...';
        }


    },

}

</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.carta {
    width: 30em;
    height: 100%;

    transition: 1s ease-in-out;
    clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.5s ease-in-out;;
    
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22753.595%22 height=%22644.116%22 viewBox=%22112.635 218.87 753.595 644.116%22%3E%3Cdefs%3E%3CradialGradient id=%22c%22 r=%22100%25%22 cx=%222%25%22 cy=%2280%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23FF0037%22%2F%3E%3Cstop offset=%2250%25%22 stop-color=%22%23F4F1BB%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%239BC1BC%22%2F%3E%3C%2FradialGradient%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M825.5 631Q762 762 631 824.5T345.5 848q-154.5-39-211-193.5t33-276q89.5-121.5 211-111T659 230q159-48 194.5 111t-28 290Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.1 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22url(%23c)%22 d=%22M825.5 631Q762 762 631 824.5T345.5 848q-154.5-39-211-193.5t33-276q89.5-121.5 211-111T659 230q159-48 194.5 111t-28 290Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    
    &:hover{
        transform: scale(1.02);
        .img{
            transform: translateY(-20px);
        }
    }

    span {
    font-weight: bold;
    color: white;
    text-align: center;
    display: block;
    padding-top: 1em;
    font-size: 1em;
}




.img {
    overflow: hidden;
    width: 13rem;
    height: 13rem;
    background: white;
    border-radius: 15px;
    margin: auto;
    margin-top: 1.7em;
    transition: 0.5s ease-in-out;
}


a {
    
    text-decoration: none;
}




}

.bkg{
    width: 100vw;
}

.carousel__slide--next {
    opacity: 0.5;
}

.carousel__slide--prev {
    opacity: 0.5;
}


.blob {
    
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22753.595%22 height=%22644.116%22 viewBox=%22112.635 218.87 753.595 644.116%22%3E%3Cdefs%3E%3CradialGradient id=%22c%22 r=%22100%25%22 cx=%222%25%22 cy=%2280%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23FF0037%22%2F%3E%3Cstop offset=%2250%25%22 stop-color=%22%23F4F1BB%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%239BC1BC%22%2F%3E%3C%2FradialGradient%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M825.5 631Q762 762 631 824.5T345.5 848q-154.5-39-211-193.5t33-276q89.5-121.5 211-111T659 230q159-48 194.5 111t-28 290Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.1 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22url(%23c)%22 d=%22M825.5 631Q762 762 631 824.5T345.5 848q-154.5-39-211-193.5t33-276q89.5-121.5 211-111T659 230q159-48 194.5 111t-28 290Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

.cont-h{
    height: 150px;
}


</style>