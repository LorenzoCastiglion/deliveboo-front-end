<template>
    <div class="shopping_cart ">
        <div class="position-relative">
            <div class="blobtainer">
                <div class="blob"></div>
            </div>
            <div class="py-3 fs-3 text-start ms-3" @click="store.openCart = !store.openCart">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <h3 class="ms-4 text-uppercase text-center">Il tuo ordine</h3>

            <!-- lista piatti -->
            <div class="product_list mt-5 d-flex justify-content-around">
                <ul class="mt-4">
                    <li v-for="(item, i) in store.cart" :key="i" class="d-flex">
                        <p> <span class="fw-bold fs-4">{{ truncate(item.name, 15) }}</span> x {{ item.quantity }}</p>
                        <div class="ps-2">
                            <button class="my-button fa-solid fa-plus me-3"
                                @click="addToCart(item)"></button>
                            <button class="my-button fa-solid fa-minus "
                                @click="removeFromCart(item)"></button>
                        </div>
                    </li>
                </ul>
               
            </div>
            <div class="d-flex flex-column justify-content-center  align-items-center gap-2 ">

                <p class=" fs-4"> <span class="fw-bold">Totale:</span > {{ cartTotal }} &#8364;</p>
                <button class="btn-clear-cart" @click="clearCart()">Svuota</button>

                <router-link :to="{ name: 'checkout' }" class="text-decoration-none">
                    <button class="mb-5 btn-checkout" @click="store.openCart = !store.openCart">Vai al pagamento</button>
                </router-link>
            </div>
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
        truncate(str, n) {
            if (typeof str !== 'string') {
                return '';
            }
            return (str.length > n) ? str.substring(0, n - 1) + '...' : str;
        },

        getPlates() {
            axios.get(`${this.store.apiBaseUrl}/plates/${this.$route.params.slug}`).then((response) => {
                console.log(response.data.results)
                this.plates = response.data.results;
            })
        },
        addToCart(item) {
            // if (!store.cart) {
            //     store.cart = [];
            // }
            let plateInCart = false;
            for (let i = 0; i < store.cart.length; i++) {
                if (store.cart[i].slug === item.slug) {
                    store.cart[i].quantity++;
                    plateInCart = true;
                    break;
                }
            }
            if (!plateInCart) {
                for (let i = 0; i < store.cart.length; i++) {
                    if (item.restaurant_id !== store.cart[i].restaurant_id) {
                        if (confirm('Vuoi svuotare il carrello e ordinare dal nuovo ristorante?')) {
                            store.cart = [];
                            console.log('non corrispondono');
                        } else {
                            return;
                        }
                    }
                }
                item.quantity = 1;
                store.cart.push(item);
            }
            localStorage.setItem("cart", JSON.stringify(store.cart));
            console.log("Piatto aggiunto al carrello");
            console.log(store.cart);
        },

        removeFromCart(item) {
            if (store.cart.length > 0) {
                for (let i = 0; i < store.cart.length; i++) {
                    if (store.cart[i].slug === item.slug) {
                        store.cart[i].quantity--;
                        if (store.cart[i].quantity === 0) {
                            store.cart.splice(i, 1);
                        }
                        break;
                    }
                }
                localStorage.setItem("cart", JSON.stringify(store.cart));
                console.log("Plate rimosso dal carrello");
            }
            console.log(store.cart);
        },
        clearCart() {
            store.cart = [];
            localStorage.removeItem("cart");
            console.log(store.cart);
            console.log("Carrello svuotato");
        },

    },
    computed: {
        cartTotal() {
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
        console.log(localStorage)
        this.getPlates();
    }
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;




.product_list {
    overflow-y: auto;
    height: 60vh;
}



.shopping_cart {
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    min-height: 100vh;

    backdrop-filter: blur(6px);

    z-index: 20;
    color: $red;

    i {
        cursor: pointer;
    }

    h3{
        font-size: 2.5rem;
        font-weight: 900;
        
    }
    .my-button {
        background-color: $red;
        border: none;
        color: $yellow;
        // padding: 10px 24px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 25px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        border-radius: 12px;
        transition: 0.5s ease-in-out;

        &:hover{
            transform: scale(1.2);
            
            color: $yellow;
    }
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

.blobtainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;


    top: 12%;
    right: 20px;
    z-index: -10;

}

.blob {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22834.749%22 height=%22753.262%22 viewBox=%22107.261 165.883 834.749 753.262%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M859.5 613Q726 726 613 855.5T391.5 851Q283 717 169 608.5T151.5 374Q248 248 374 204.5t290-38Q828 172 910.5 336t-51 277Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.35 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%239BC1BC%22 d=%22M859.5 613Q726 726 613 855.5T391.5 851Q283 717 169 608.5T151.5 374Q248 248 374 204.5t290-38Q828 172 910.5 336t-51 277Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}
</style>