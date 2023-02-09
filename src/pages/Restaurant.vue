<template>
    <div>


        <div v-for="(plate, index) in restaurant.plates" :key="index">
        
        <p>{{ plate.name }}</p>
        
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store'
    export default {
        name: 'Restaurant',

        data(){
            return {
                
                store,
                restaurant:null,
            }
        },


        methods: {
        getRestaurant() {
            axios.get(`${this.store.apiBaseUrl}/restaurants/${this.$route.params.slug}`).then((response) => {
                console.log(response.data.results)
                if (response.data.success) {
                    
                    this.restaurant = response.data.results;
                } else {
                    this.$router.push({ name: 'notfound' })
                }
            })

        },

        getPlates() {
            axios.get(`${this.store.apiBaseUrl}/plates/${this.$route.params.slug}`).then((response) => {
                console.log(response.data.results)
             
                    
                    this.plates = response.data.results;
              
            })

        },

        
    },

    mounted() {
        setTimeout(
            this.getRestaurant, 1500,
            this.getPlates, 1500
        )

    }
        

    }
</script>

<style lang="scss" scoped>

</style>