<template >
    <div class="bkg ">
        <div class="container">

            <Carousel class=" cars" :items-to-show="3" :wrap-around="true" autoplay=4000 >
                <Slide v-for="slide in store.carouselcard" :key="slide">

                    <div class=" text-start mx-3 bg-transparent px-5 pb-5 rounded-3">
                        <h4>{{ slide.title }}</h4>
                        <p class="slide-content">{{ slide.content }}</p>
                        <div class="d-flex mt-2  align-items-center">
                            <div class=" overflow-hidden img-cont">
                                <!-- <img :src="`../../public/img/testimonial-avata-${slide.pic}.jpg`" alt=""> -->
                            </div>
                            <p class="mb-0 ms-3 text-capitalize text-white">{{ slide.name }}</p>
                        </div>
                    </div>


                </Slide>

                <template #addons>
                    <Pagination/>
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


export default {
    name:'CarouselRecensioni',
    data() {
        return {
            store

        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    }
}

</script>

<style lang="scss" scoped>

@use './../assets/styles/partials/variables' as *;

.dot{
    color:$red;
    font-size: 50px;
}


span, h4 {
    color: $red;
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