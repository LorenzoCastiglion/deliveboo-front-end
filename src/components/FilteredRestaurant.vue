<template >
    <div class="bkg ">
        <div class="container">

           



                    <div class="carta">
                        <div class="img mb-2">
                            <img class="w-100 h-100" :src="card.image ? `${store.imagBasePath}${card.image}` : '../../public/img/logo-01.png'" alt="">
                        </div>
                        <h3 class="w-50 m-auto">{{ card.name ? card.name : 'coming soon' }}</h3>
                        <p class="info w-50 m-auto"> <i class="fa-solid fa-phone"></i> {{card.phone ? card.phone : '****' }}</p>
                        <p class="info w-50 m-auto"> <i class="fa-solid fa-clock"></i> {{card.opening_hours ? truncate(card.opening_hours, 5) : '**:**'}} - {{card.closing_hours ? truncate(card.closing_hours, 5) : '**:**'}}</p>
                        <p class="info w-50 m-auto"> <i class="fa-solid fa-calendar"></i> {{ card.opening_days ? card.opening_days : '***/***'}}</p>
                        <p class="info w-50 m-auto"> <i class="fa-solid fa-map-marker"></i> {{ card.address ? card.address : '############' }}</p>
                        

                        <router-link :to="{ name: 'restaurant', params: { slug: card.slug ? card.slug : '#' } }">
                            <button class="">
                                <p class="  m-0">Menù</p>
                            </button>
                        </router-link>
                    </div>


         


        </div>
    </div>
</template>

<script >
import { store } from '../store';
import 'vue3-carousel/dist/carousel.css'



export default {
    name: 'FilteredRestaurant',


props:[
    'card'
],

    data() {
        return {
            store,
            
            
        }
    },
    
   




    methods: {
        
        truncate(str, n) {
            return str.substring(0, n) ;
        }


    },


}

</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.carta {
    width: 30em;
    height: 100%;
   padding: 0.5rem;
    transition: 1s ease-in-out;
    clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.5s ease-in-out;;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22782.65%22 height=%22756.095%22 viewBox=%22170.24 151.895 782.65 756.095%22%3E%3Cdefs%3E%3ClinearGradient id=%22c%22 gradientTransform=%22rotate(225 .5 .5)%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23F4F1BB%22%2F%3E%3Cstop offset=%2250%25%22 stop-color=%22%23ED6A5A%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%239bc1bc%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M939.5 642q-49.5 142-204 125.5T466 854q-115 103-226.5 9.5T196 635q68-135 9-263.5t63.5-168Q391 164 503.5 153T669 240.5q53 98.5 186.5 179t84 222.5Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.3 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22url(%23c)%22 d=%22M939.5 642q-49.5 142-204 125.5T466 854q-115 103-226.5 9.5T196 635q68-135 9-263.5t63.5-168Q391 164 503.5 153T669 240.5q53 98.5 186.5 179t84 222.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  
    
    &:hover{
        transform: scale(1.02);
        .img{
            transform: translateY(-20px);
        }
    }

    h3{
        text-transform: capitalize;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: $yellow;
    }

//     span {
//     font-weight: bold;
//     color: white;
//     text-align: center;
//     display: block;
//     padding-top: 1em;
//     font-size: 1em;
// }

.info {
    font-weight: 400;
    color: $black;
   
    
    padding-top: 0.1em;
    font-size: 0.72em;
    margin: 1em;
    margin-top: 1em;
}


.img {
    overflow: hidden;
    width: 5rem;
    height: 5rem;
    background: white;
    border-radius: 15px;
    margin: auto;
    margin-top: 1.7em;
    transition: 0.5s ease-in-out;
}


a {
    
    text-decoration: none;
}


button {
    padding: 0.5em 1.7em;
    display: block;
    margin: auto;
    border-radius: 25px;
    border: none;
    margin-top: 2em;
    margin-bottom: 2em;
    font-weight: bold;
    background: $acqua;
    color: rgb(0, 0, 0);
    transition: .4s ease-in-out;


    &:hover{
        background: $yellow;
    color:$red;
    text-decoration: none;
    transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 black;
    }

    &:active{
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 black;}


}

}


.carousel__slide--next {
    opacity: 0.5;
}

.carousel__slide--prev {
    opacity: 0.5;
}






</style>


  