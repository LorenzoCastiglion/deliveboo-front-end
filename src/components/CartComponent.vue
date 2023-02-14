<template>
    <div class="shopping_cart">
        <div class="">
            <div class="py-3 fs-3 text-start ms-3" @click="store.openCart = !store.openCart">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <h3 class="ms-4">Il tuo ordine:</h3>
            <div class="product_list mt-5">

            </div>




        </div>
    </div>
</template>

<script>
import { store } from "../store";
export default {
    name: "CartComponent",
    data() {
        return {
            store
        };
    },
    methods: {
      
    },
    computed: {
       
    },
    mounted() {

    }
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.product_list {
    overflow-y: auto;
    height: 70vh;
}



.shopping_cart {
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
    min-height: 100vh;
    background-color: white;

    z-index: 20;
    color: $red;

    i {
        cursor: pointer;
    }
}
</style>