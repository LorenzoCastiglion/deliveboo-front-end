<template>

    <!-- sezione hero e ricerca -->
    <section class="home-container position-relative  ">


        <section
            class="inner-sect d-flex justify-content-center container-xl align-items-center flex-wrap justify-content-md-center m-auto">

            <div class="position-absolute blobtainer col-12 overflow-visible ">
                <div class="blob "></div>
            </div>
            <div class="position-absolute blobtainer2 col-12 overflow-visible ">
                <div class="blob2 "></div>
            </div>
            <div class="position-absolute blobtainer1 col-12 overflow-visible ">
                <div class="blob1 "></div>
            </div>
            <div class="position-absolute blobtainer3 col-12 overflow-visible ">
                <div class="blob3 "></div>
            </div>



            <!-- <div class="blob1 position-absolute"></div>
            <div class="blob2 position-absolute"></div> -->
            <div class="d-flex container ">
                <div class="d-flex flex-column col-sm-12 col-md-6 justify-content-center align-items-center  ">
                    <div class=" align-self-start">
                        <h3 class="text-start">Hai voglia di: <br>
                            <span></span>
                        </h3>
                    </div>
                    <div class="align-self-start">
                        <router-link :to="{ name: 'restaurants' }">
                            <button>Trova Ristorante</button>
                        </router-link>
                    </div>
                </div>

                <div class=" col-6 ">

                    <div class="d-flex flex-wrap col-12">

                        <div class="col-6">
                            <img class="w-100" src="../../public/img/riz.png" alt="">
                        </div>
                        <div class="col-6">
                            <img class="w-100" src="../../public/img/salad.png" alt="">
                        </div>

                        <div class="col-12">
                            <img class="w-100 roto-img" src="../../public/img/ramen.png" alt="">
                        </div>

                    </div>

                </div>

            </div>



            <!-- Scritta centrale -->
            <div class="container justify-content-sm-center col-md-12">
                <div class="d-flex ">
                    <h2 class="scritta-centrale text-start">
                        I nostri partners
                    </h2>
                </div>
                <div class="my-4">
                    <carousel :itemsToShow="3" :wrapAround="true" :transition="2000" :autoplay="500">
                        <slide v-for="(slide, index) in store.homePaths" :key="index">
                            <div class="">
                                <img class="carousel__item w-25 sponsors" :src="`../../public/img/${slide.path}`" :alt="slide.alt">
                                
                            </div>
                        </slide>


                    </carousel>
                </div>
            </div>

            <!-- Carousel fine -->
            <div class="container-fluid d-flex justify-content-md-end justify-content-sm-center col-md-12 my-3 ">
                <div class=" align-self-center  overflow-hidden p-5 m-auto  ">
                    <span></span>
                    </div>
                <div class="p-4 ">
                    <h2 class="tex-second1 text-uppercase">scegli</h2>
                    <h2 class="tex-second2 text-uppercase">ordina</h2>
                    <h2 class="tex-second3 text-uppercase">mangia</h2>
                </div>

            </div>
            <!-- TESTO -->
            <div class=" container-fluid d-flex">
                <div class="col-sm-12  justify-content-center ">
                    <h2 class="text-area-long"> 
                        Code_eat è una piattaforma di consegna rivoluzionaria che offre un modo semplice e conveniente
                        per ricevere gli articoli di cui hai bisogno in modo rapido e sicuro. <br> Con Code_eat, puoi
                        scegliere tra una varietà di servizi e tariffe
                        Comprendiamo che non hai sempre il tempo di uscire e acquistare ciò di cui hai bisogno, motivo
                        per cui offriamo una varietà di opzioni di consegna adatte al tuo stile di vita. <br>
                        Inoltre, non sarai mai lasciato ad aspettare sulla soglia di casa; i nostri partner di consegna
                        porteranno i tuoi articoli direttamente a casa tua.
                        Quindi, perché aspettare?
                    </h2>
                    <h2 class="short-text container-md text-center">
                       
                        Code_eat è una piattaforma di consegna rivoluzionaria che offre un modo semplice e conveniente
                        per ricevere gli articoli di cui hai bisogno in modo rapido e sicuro.
                        Quindi, perché aspettare?

                    </h2>
                </div>
            </div>
        </section>
    </section>




</template>

<script>
import { store } from '../store';
import axios from "axios";
import CreditCard from '../components/CreditCard.vue';
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';



// import 'vue3-carousel/carousel.css';
export default {
    name: 'HomePage',
    name: 'WrapAround',

    data() {
        return {
            store,
            restaurants: [],
            textlength: 100,
       


        };
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    methods: {

        getRestaurants() {
            axios.get(`${this.store.apiBaseUrl}/restaurants`).then((response) => {
                this.restaurants = response.data.results;

            });
        },


        trimText(text) {
            if (text.length > this.textlength) {
                return text.substr(0, this.textlength) + '...';
            }
            return text;
        }
    },

    mounted() {
        this.getRestaurants();
    },






}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

// jumbo/hero section

* {
    font-family: 'Mona Sans', sans-serif;

}

.roto-img{
    animation: roto 100s infinite linear;
}

@keyframes roto {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.home-container {
    overflow: hidden;
}

// BOTTONI

a {

    text-decoration: none;
}

button {
    padding: 0.5em 1.7em;
    display: block;

    border-radius: 25px;
    border: none;

    font-weight: bold;
    background: $red;
    color: $yellow;
    transition: .4s ease-in-out;


    &:hover {
        background: $yellow;
        color: $acqua;
        text-decoration: none;
        transform: translateY(-4px) translateX(-2px);
        box-shadow: 2px 5px 0 0 black;
    }

    &:active {
        transform: translateY(2px) translateX(1px);
        box-shadow: 0 0 0 0 black;
    }


}


.sponsors{
    filter: brightness(10%);
}


h3 {
    font-size: 4.5rem;
    font-weight: 500;
    text-align: center;
}

h3 span::before {
    text-transform: uppercase;
    font-weight: 900;
    content: '';
    color: $red;
    animation: profile 5s infinite;
}

@keyframes profile {
    0% {
        content: 'pizza'
    }

    50% {
        content: 'poké'
    }

    100% {
        content: 'sushi'
    }
}

.blobtainer {
    height: 100vh;
    top: 1%;
    right: -20%;
    z-index: -10;

}

.blob {

    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;

    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22814.357%22 height=%22607.875%22 viewBox=%2287.171 154.642 814.357 607.875%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M867.5 632q-52.5 132-187 130.5t-233-1.5Q349 761 246 695.5t-148-212q-45-146.5 97-206T450.5 178q113.5-40 263-11.5t178 181Q920 500 867.5 632Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.1 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23F4F1BB%22 d=%22M867.5 632q-52.5 132-187 130.5t-233-1.5Q349 761 246 695.5t-148-212q-45-146.5 97-206T450.5 178q113.5-40 263-11.5t178 181Q920 500 867.5 632Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}


.blobtainer1 {
    height: 100vh;
    top: 80%;
    left: 10%;
    z-index: -5;
    transform: rotate(140deg);

}

.blob1 {

    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22745.52%22 height=%22781.027%22 viewBox=%22103.544 94.553 745.52 781.027%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M848 622.5Q838 745 738 834t-205-12.5Q428 720 318 716T139.5 606Q71 500 133 389t151-194.5Q373 111 504.5 96T663 221.5Q690 362 774 431t74 191.5Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.1 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%239BC1BC%22 d=%22M848 622.5Q838 745 738 834t-205-12.5Q428 720 318 716T139.5 606Q71 500 133 389t151-194.5Q373 111 504.5 96T663 221.5Q690 362 774 431t74 191.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

.blobtainer3 {
    height: 100vh;
    top: 80%;
  left: -10%;
    z-index: -15;
    // transform: rotate(140deg);

}



 

.blob3 {

    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22739.408%22 height=%22614.268%22 viewBox=%22187.485 208.685 739.408 614.268%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M884 682q-94 182-268.5 129t-309-103q-134.5-50-117-199.5t135.5-205q118-55.5 273.5-89t267.5 126Q978 500 884 682Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.35 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23ed6a5a%22 d=%22M884 682q-94 182-268.5 129t-309-103q-134.5-50-117-199.5t135.5-205q118-55.5 273.5-89t267.5 126Q978 500 884 682Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");

    }

.blobtainer2 {
    height: 60%;
    top: 40%;
    left: 0%;
    z-index: -5;
    padding: 5%;

}

.blob2 {

    width: 60%;
    height: 60%;

    background: rgb(237,106,90);
background: linear-gradient( $red 0%, $acqua 40%, $yellow 100%);
    border-radius: 40% 43% 56% 39% / 34% 27% 89% 60%;
    animation: blob 10s linear infinite;
}

@keyframes blob {

    0%,
    100% {
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
    }

    33% {
        border-radius: 42% 28% 62% 18% / 28% 28% 89% 89%;
    }

    66% {
        border-radius: 100% 56% 56% 100% / 100% 100% 79% 79%;
    }


}

// scritta centrale
.scritta-centrale {
    font-size: 80px;
    font-weight: 900;
    color: $acqua;
    padding-top: 100px;
   
    // padding-left: 150px;

}




.tex-second1 {

    font-size: 80px;
    font-weight: 900;
    color: $red;
}

.tex-second2 {

    font-size: 80px;
    font-weight: 900;
    color: $acqua;
}

.tex-second3 {

    font-size: 80px;
    font-weight: 900;
    color: $yellow;
}

.text-area-long {
    // text-align: center;
    letter-spacing: 2px;
    vertical-align: middle;
    padding-top: 5%;
    padding-bottom: 5%;
    //   font-stretch:ultra-condensed;
    padding-bottom: 200px;

}

// CAROSELLO
.img-cont-circular img {
    width: 180%;
}

.card-carousel {
    cursor: pointer;
}

.img-cont-circular {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    //   display:inline-block;
    vertical-align: middle;
    //   object-fit: contain;
}

.short-text {
    display: none;
}

@media (max-width: 768px) {
    .short-text {
        display: inline-block;
        padding-bottom: 100px;
    }

    .text-area-long {
        display: none;
    }

    .tex-second1 {
        color: $yellow ;
    }

    .tex-second2 {
        color: $yellow ;
    }

    .tex-second3 {
        color: $yellow ;
    }
}


.blob-img{
    width: 60%;
    height: 60%;
    
    border-radius: 34% 65% 78% 19% / 80% 33% 42% 52%;
    background-color: red;
}

// .carousel__slide--next {
//     opacity: 0.5;
// }

// .carousel__slide--prev {
//     opacity: 0.5;
// }
</style>





