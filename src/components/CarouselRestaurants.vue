<template >
    <div class="bkg ">
        <div class="container">

            <Carousel class=" cards" :items-to-show="1" :wrap-around="true" :autoplay='4000'>
                <Slide v-for="slide in restaurants" :key="slide">


                    <div class=" text-start mx-3 bg-transparent px-5 pb-5 rounded-3">
                        <h4>{{ slide.name }}</h4>
                        <p class="slide-content">{{ slide.address }}</p>
                        <div class="d-flex mt-2  align-items-center">
                            <div class=" overflow-hidden img-cont">
                                <img :src="`${store.imagBasePath}${slide.image} `" alt="">
                            </div>
                            <p class="mb-0 ms-3 text-capitalize text-white"><i class="fa-solid fa-phone"></i>{{
                                slide.phone
                            }}</p>
                           <p v-for="(type,index) in slide.types" :key="index" class="mb-0 ms-3 text-capitalize text-white">{{ type.name }}</p>
                            
                        </div>
                        <div>
                            
                            <router-link :to="{ name: 'restaurant', params: { slug: slide.slug } }">
                                Scopri il menu
                            </router-link>
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
    },

    mounted() {
        this.getType(),
        this.getRestautants()


    }

}

</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.dot {
    color: $red;
    font-size: 50px;
}


span,
h4 {
    color: $black;
}

.cta {
    border: 0;
    background-color: $red;
    color: white;
    padding: 10px 30px;
    border-radius: 8px;
}

.bkg {
    padding-top: 15px;

}

.img-cont {
    width: 60px;
    height: 60px;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
    }



}

h4 {
    font-size: 16px;
    font-weight: bold;
}

.slide-content {
    font-size: 12px;
    color: rgb(234, 223, 223);
}

.nomeproff {
    font-size: 14px;
    color: white;
}

.carousel__slide--next {
    opacity: 0.5;
}

.carousel__slide--prev {
    opacity: 0.5;
}
</style>