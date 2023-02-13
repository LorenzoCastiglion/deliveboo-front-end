<template>
    <section class="restaurants-container d-flex justify-content-center align-items-center flex-wrap pt-5">
        <div class="position-absolute blobtainer col-12 ">
            <div class="blob "></div>
        </div>

        <div class="container col-12">
            <TextAnimation></TextAnimation>
        </div>

        <section class="d-flex flex-column justify-content-center align-items-center">
            <button @click="showAllTypes"> <i class="fa-solid fa-magnifying-glass"></i> cerca per tipologia</button>
            <div v-if="showTypes">
                <label for="types"></label>
                <select name="types" id="types" v-model="selectedType" class="my-3">
                    <option v-for="tipo in types" :value="tipo.id">
                        {{ tipo.name }}
                    </option>
                </select>
                <button v-if="!showRes" @click="filterRestaurants">Filtra ristoranti</button>
                <button v-if="showRes" @click="filterRestaurants">Reset</button>
            </div>
            <div v-if="showRes">
            <div v-if="filteredRestaurants.length">
                <h2>Ristoranti appartenenti alla tipologia: {{ selectedType }}</h2>
                <div v-for="restaurant in filteredRestaurants" :key="restaurant.id">
                    {{ restaurant.name }}
                </div>
            </div>
            <div v-else>
                <p>al momento non ci sono ristornati per questa tipologia</p>
            </div>
        </div>
        </section>







        

        <div v-if="!showRes" class="col-12 mt-4">

            <CarouselRestaurants>

            </CarouselRestaurants>
        </div>



    </section>
    <!-- seleziona ristoranti  -->






</template>

<script>
import TextAnimation from '../components/TextAnimation.vue';
import CarouselRestaurants from '../components/CarouselRestaurants.vue';
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Restaurants',

    components: {
        TextAnimation,
        CarouselRestaurants,

    },

    data() {
        return {

            store,
            restaurants: [],
            types: [],
            showTypes: false,
            selectedType: null,
            showRes: false,
            filteredRestaurants: []

        }
    },



    methods: {


        getRestautants() {
            axios.get(`${this.store.apiBaseUrl}/restaurants`).then((response) => {

                // console.log(response.data.results)
                this.restaurants = response.data.results
            })

        },

        getPlate() {
            axios.get(`${this.store.apiBaseUrl}/plates`).then((response) => {

                console.log(response.data.results)
                this.plates = response.data.results
            })
        },
        showAllTypes() {
            this.showTypes = !this.showTypes;
        },
        filterRestaurants() {
            const data = {
                params: {
                    type_id: this.selectedType,
                }
            };
            axios.get("http://127.0.0.1:8000/api/filter", data).then((response) => {
                console.log(response.data.results);
                this.filteredRestaurants = response.data.results;
                console.log(this.filteredRestaurants);
            });

            this.showRes = !this.showRes;
        }

    },

    mounted() {
        this.getRestautants()
        this.getPlate()
        axios.get("http://127.0.0.1:8000/api/types").then((response) => {
            console.log(response.data.results);
            this.types = response.data.results;
        });
    }
}




</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.restaurants-container {
    position: relative;

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
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22721.219%22 height=%22605.411%22 viewBox=%22129.347 155.24 721.219 605.411%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M786.5 606Q669 712 553 744t-309.5 2.5Q50 717 184.5 565T365 261.5q46-151.5 194.5-87t246.5 195Q904 500 786.5 606Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.1 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23ED6A5A%22 d=%22M786.5 606Q669 712 553 744t-309.5 2.5Q50 717 184.5 565T365 261.5q46-151.5 194.5-87t246.5 195Q904 500 786.5 606Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

// BOTTONI

a {

    text-decoration: none;
}

button {
    padding: 0.5em 1.7em;
    display: block;
    margin: auto;
    border-radius: 25px;
    border: none;

    font-weight: bold;
    background: $yellow;
    color: $red;
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

select {
    border-radius: 8px;

    margin: auto;
}
</style>