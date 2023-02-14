<template>
    <div class="shopping_cart">
        <div class="">
            <div class="py-3 fs-3 text-start ms-3" @click="store.openCart = !store.openCart">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <h3 class="ms-4">Il tuo ordine:</h3>

            <!-- lista piatti -->
            <div class="product_list mt-5">
                <ul>
                    <li v-for="(item, i) in store.cart" :key="i">
                        <p> <span class="fw-bold">{{ item.name }}</span> x{{ item.quantity }}</p>
                    </li>
                </ul>
                <p> <span class="fw-bold">Totale:</span>  {{ cartTotal }} &#8364;</p>
            </div>
            <button class="btn-clear-cart" @click="clearCart()">Svuota</button>
            <br>
            <router-link :to="{ name: 'checkout' }" class="text-decoration-none">
                <button class="mb-5 btn-checkout">Vai al pagamento</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { store } from "../store";
import axios from 'axios';
export default {
    name: "CartComponent",
    data() {
        return {
            store,
        };
    },
    methods: {
        getPlates() {
            axios.get(`${this.store.apiBaseUrl}/plates/${this.$route.params.slug}`).then((response) => {
                console.log(response.data.results)  
                    this.plates = response.data.results;
            })
        },
        clearCart() {
            store.cart = [];
            localStorage.removeItem("cart");
            console.log( store.cart); 
            console.log("Carrello svuotato");
        },
      
    },
    computed: {
        cartTotal () {
            if (!store.cart) {
            store.cart = [];
        }
            let total = 0
            for (let i = 0; i < store.cart.length; i++) {
                total += store.cart[i].price * store.cart[i].quantity
            }
            return total
        }
    },
    mounted() {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            store.cart = JSON.parse(storedCart);
        }

        this.getPlates();
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

    .btn-clear-cart {
        padding: 0.5em 1.7em;
        display: block;

        border-radius: 25px;
        border: none;

        font-weight: bold;
        background: $red;
        color: $yellow;
        transition: .4s ease-in-out;


        &:hover {
            background: $acqua;
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

    .btn-checkout {
        padding: 0.5em 1.7em;
        display: block;
        

        border-radius: 25px;
        border: none;

        font-weight: bold;
        background: $yellow;
        color: $red;
        transition: .4s ease-in-out;


        &:hover {
            background: $acqua;
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
}
</style>