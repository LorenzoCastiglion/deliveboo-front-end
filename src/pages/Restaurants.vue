<template>
    <section
        class="restaurants-container d-flex justify-content-center align-items-center align-content-start flex-wrap pt-5">
        <div class="position-absolute blobtainer col-12 ">
            <div class="blob "></div>
        </div>

        <div class="container col-12">
            <TextAnimation></TextAnimation>
        </div>

        <section class="d-flex flex-column  align-items-center col-12">
            <button @click="showAllTypes"> <i class="fa-solid fa-magnifying-glass"></i> cerca per tipologia</button>
            <div v-if="showTypes" class="">

                <div class="multi-check my-4 px-3">
                    <div class="" v-for="tipo in types">
                        <input type="checkbox" id="types" name="types" :value="tipo.id" v-model="selectedType">
                        <span> &nbsp; {{ tipo.name }}</span>
                    </div>
                </div>
                <button v-if="!showRes" @click.prevent="switcher">Filtra ristoranti</button>
                <button v-if="showRes" @click.prevent="resetFilter">Reset</button>
            </div>

            <div v-if="showRes">
                <div v-if="filteredRestaurants.length"
                    class="d-flex flex-wrap container justify-content-center my-3 filtered mt-5">
                    <FilteredRestaurant class="col-sm-12 col-md-8 col-lg-4" v-for="item in filteredRestaurants"
                        :card="item"></FilteredRestaurant>
                </div>

            </div>

        </section>

        <div v-if="!showRes" class="col-12 carosello">
            <CarouselRestaurants></CarouselRestaurants>
        </div>

    </section>
    <!-- seleziona ristoranti  -->






</template>

<script>
import TextAnimation from '../components/TextAnimation.vue';
import CarouselRestaurants from '../components/CarouselRestaurants.vue';
import FilteredRestaurant from '../components/FilteredRestaurant.vue';
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'Restaurants',

    components: {
        TextAnimation,
        CarouselRestaurants,
        FilteredRestaurant
    },

    data() {
        return {
            store,
            restaurants: [],
            types: [],
            showTypes: false,
            selectedType: [],
            showRes: false,
            show: false,
            filteredRestaurants: []

        }
    },


    watch: {
        $route(to) {
            if (Array.isArray(to.query.types)) {
                this.selectedType = to.query.types;
            } else if (to.query.types) {
                this.selectedType = [to.query.types];
            } else {
                this.selectedType = [];
            }
            this.filterRestaurants();
        }
    },

    methods: {

        resetFilter() {
            this.showRes = false;
            this.selectedType = [];
            //   this.$router.replace( {name: '/restaurants' });
            this.filteredRestaurants = [];
            console.log(this.filteredRestaurants);

        },

        getRestaurants() {
            axios.get(`${this.store.apiBaseUrl}/restaurants`).then((response) => {
                this.restaurants = response.data.results
            })
        },

        showAllTypes() {
            this.showTypes = !this.showTypes;
        },

        filterRestaurants() {
            const data = { params: { type_id: this.selectedType } };
            axios.get("http://127.0.0.1:8000/api/filter", data).then((response) => {
                this.filteredRestaurants = response.data.results;
            });
            this.$router.push({ query: { types: this.selectedType } });
            //   console.log(this.showRes, 'sono filter')
            //   console.log(this.show, 'sono filter')
            this.showRes = true
        },

        switcher() {
            this.filterRestaurants();
            // this.showRes = !this.showRes;
            console.log(this.showRes, 'sono switcher')
        },
    },

    created() {
        this.getRestaurants();
        axios.get("http://127.0.0.1:8000/api/types").then((response) => {
            // console.log(response.data.results);
            this.types = response.data.results;
        });
        const types = this.$route.query.types;
        if (types) {
            this.selectedType = Array.isArray(types) ? types : [types];
            this.filterRestaurants();
            // console.log(this.showRes);
            // console.log(this.filterRestaurants());
        } else {
            this.selectedType = [];
        }
    }

}
</script>


<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.restaurants-container {
    position: relative;
    height: 100vh;
    overflow-x: hidden;
}

.carosello{
    margin-top: 6rem;
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
    background: $acqua;
    color: $yellow;
    transition: .4s ease-in-out;


    &:hover {
        background: $yellow;
        color: $red;
        text-decoration: none;
        transform: translateY(-4px) translateX(-2px);
        box-shadow: 2px 5px 0 0 black;
    }

    &:active {
        transform: translateY(2px) translateX(1px);
        box-shadow: 0 0 0 0 black;
    }

}

.multi-check {

    border-radius: 8px;
    border: 3px solid $yellow;
    width: 250px;
    padding: 20px 0;
    height: 100px;
    overflow: scroll;
}
</style>