<template>
    <section class="about-container d-flex justify-content-center align-items-center flex-wrap pt-5">
        <div class="position-absolute blobtainer col-12 ">
            <div class="blob "></div>
        </div>
        <!-- SCRITTA CENTRALE -->
        <div class="container col-12">
            <TextAnimationAbout></TextAnimationAbout>
        </div>

        <div class="container">
            <h2 class="">
                Siamo un team di sviluppatori web junior con le  competenze di base nella progettazione e sviluppo di siti web. 
                
            </h2>

            <h2 class="pt-2 pb-2">
                I membri del team possono  progettare l'interfaccia utente e la grafica, sviluppare codici HTML, CSS e JavaScript per progettare front-end, scrivere codice back-end in linguaggi come PHP, 
                impostare database, integrare API e creare strumenti di amministrazione.
            </h2>

            <h2 class="pb-5">
                Il nostro team di sviluppatori web è riuscito a rendere il sito Web moderno, responsive e sicuro. 
                Utilizzando le tecnologie più recenti, come l'utilizzo di framework come Bootstrap, Vue.
            </h2>


        </div>
        <!--FINE SCRITTA CENTRALE --> 

        <!-- CAROSELLO TRAM :) -->
            <div class=" container pt-5 pb-5">
                
                
            <CarouselAboutTeam></CarouselAboutTeam>
            
            
            
            </div>



    </section>


</template>

<script>
import TextAnimationAbout from '../components/TextAnimationAbout.vue';
import CarouselAboutTeam from '../components/CarouselAboutTeam.vue';
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Restaurants',

    components: {
        TextAnimationAbout,
        CarouselAboutTeam,

    },
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;
.about-container{
    position: relative;
    height: 100vh;
    overflow-x: hidden;
}



.blobtainer {
    height: 100vh;
    top: 1%;
    right: -40%;
    z-index: -10;

}

.blob {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22719.88%22 height=%22653.424%22 viewBox=%22131.714 172.967 719.88 653.424%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M823 616.5Q777 733 661 743t-244 66.5q-128 56.5-160.5-76t-99-257.5Q91 351 196 253t231-76q126 22 256 41t158 150.5q28 131.5-18 248Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.15 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23F4F1BB%22 d=%22M823 616.5Q777 733 661 743t-244 66.5q-128 56.5-160.5-76t-99-257.5Q91 351 196 253t231-76q126 22 256 41t158 150.5q28 131.5-18 248Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}


  


</style>