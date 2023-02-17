<template>
    <section v-if="restaurant">


        <div class="container pt-5">


            <div v-if="showModal" class="modal">
                <div class="blob"></div>
                <p>Vuoi svuotare il carrello e ordinare da questo ristorante?</p>
                <button class="mod-button" @click="addNewPlate()">Sì</button>
                <button class="mod-button" @click="hideModal">No</button>
            </div>

            <div class="d-flex justify-content-around gap-2 flex-wrap">
                <div class="">
                    <div class="blob-img">
                        <img class="w-100 h-100 bg-danger"
                            :src="restaurant.image ? `${store.imagBasePath}${restaurant.image}` : '../../public/img/logo-01.png'"
                            alt="">
                    </div>
                </div>
                <!-- Ristorante Dettagli  -->
                <div class="col-md-6 col-sm-12">
                    <h1 class="text-capitalize">{{ restaurant.name }}</h1>
                    <div class=" d-flex flex-column">
                        <p class="text-capitalize"><i class="fa-solid fa-location-dot"></i> &nbsp;{{
                            restaurant.address
                        }} </p>
                        <p><i class="fa-solid fa-phone"></i> &nbsp;{{ restaurant.phone }} </p>
                        <p><i class="fa-solid fa-calendar"></i> &nbsp;{{ restaurant.opening_days }} </p>
                        <p><i class="fa-solid fa-clock"></i> &nbsp;{{ truncate(restaurant.opening_hours, 6) }} - {{
                            truncate(restaurant.closing_hours, 6)
                        }} </p>

                    </div>
                    <div class=" overflow-scroll description">
                        <p>{{ restaurant.description }}</p>
                    </div>
                </div>
            </div>

            <!--FINE Ristorante Dettagli  -->


            <div class="card border-0">
                <div class="row g-0">




                    <!-- CARRELLO -->
                    <!-- <div class="col-md-4">

                        <div class="my-cart">
                            <p class="pt-3 fw-semibold">Carrello:</p>
                            <ul>
                                <li v-for="(item, i) in store.cart" :key="i">
                                    <p> <span class="fw-bold">{{ item.name }}</span> x{{ item.quantity }}</p>
                                </li>
                            </ul>
                            <p> <span class="fw-bold">Totale:</span> {{ cartTotal }} &#8364;</p>
                            <button class="btn btn-primary" @click="clearCart()">Svuota</button>
                            <br>
                            <router-link :to="{ name: 'checkout' }">
                                <button class="mt-3">checkout</button>
                            </router-link>
                        </div>
                    </div> -->
                    <!-- FINE CARRELLO -->



                    <!-- MENU PIATTI -->
                    <div class="mt-5">
                        <h4>Scegli i tuoi piatti</h4>
                        <div class="container pt-2 pb-4">
                            <div class="row g-3 justify-content-around">
                                <div class="col-md-5 col-sm-12 border rounded-5 "
                                    v-for="(plate, index) in restaurant.plates" :key="index">
                                    <div class="card-body d-flex ">
                                        <div class="me-3">
                                            <img :src="plate.image ? `${store.imagBasePath}${plate.image}` : '../../public/img/boolean.png'"
                                                alt="">
                                        </div>


                                        <FadeIntoView>

                                            <div>
                                                <p class="fw-semibold">{{ plate.name }}</p>
                                                <p>{{ plate.price }} &#8364;</p>

                                                <p v-if="(plate.allergens)">Allergeni: {{ plate.allergens }} </p>
                                                <p v-else="( plate.allergens )"> Non ci sono allergeni</p>

                                                <!-- <p>{{ plate.available == 1 ? 'Sì è disponibile' : 'No disponibile' }}</p> -->
                                                <button class="my-button fa-solid fa-plus me-3"
                                                    @click="addToCart(plate)"></button>
                                                <button class="my-button fa-solid fa-minus me-3"
                                                    @click="removeFromCart(plate)"></button>
                                                <!-- <p>quantità: {{ plate.quantity }}</p> -->
                                            </div>

                                        </FadeIntoView>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- FINE MENU PIATTI -->
                </div>
            </div>
        </div>

    </section>

    <!-- LOADER -->
    <section class="loader " v-else>
        <div class="load-img">
            <img class="w-100" src="../../public/img/logo_text_b.png" alt="">
        </div>
        <div class="progress-loader mt-5">
            <div class="progress"></div>
        </div>
    </section>

</template>

<script>

import FadeIntoView from '../components/FadeIntoView.vue';
import axios from 'axios';
import { store } from '../store'
export default {
    name: 'Restaurant',

    components: {

        FadeIntoView
    },

    data() {
        return {

            store,
            restaurant: null,
            imagBasePath: '',
            showModal: false

        }
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

    methods: {



        truncate(str, n) {
            if (typeof str !== 'string') {
                return '';
            }
            return (str.length > n) ? str.substring(0, n - 1) : str;
        },

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

        getApi() {
            return (this.getRestaurant,
                this.getPlates)
        },
        // addToCart(plate) {
        //     // if (!store.cart) {
        //     //     store.cart = [];
        //     // }
        //     let plateInCart = false;
        //     for (let i = 0; i < store.cart.length; i++) {
        //         if (store.cart[i].slug === plate.slug) {
        //             store.cart[i].quantity++;
        //             plateInCart = true;
        //             break;
        //         }
        //     }
        //     if (!plateInCart) {
        //         for (let i = 0; i < store.cart.length; i++) {
        //             if (plate.restaurant_id !== store.cart[i].restaurant_id) {
        //                 if (confirm('Vuoi svuotare il carrello e ordinare dal nuovo ristorante?')) {
        //                     store.cart = [];
        //                     console.log('non corrispondono');
        //                 } else {
        //                     return;
        //                 }
        //             }
        //         }
        //         plate.quantity = 1;
        //         store.cart.push(plate);
        //     }
        //     localStorage.setItem("cart", JSON.stringify(store.cart));
        //     console.log("Piatto aggiunto al carrello");
        //     console.log(store.cart);
        // },


        addToCart(plate) {
            // if (!store.cart) {
            //     store.cart = [];
            // }
            let plateInCart = false;
            for (let i = 0; i < store.cart.length; i++) {
                if (store.cart[i].slug === plate.slug) {
                    store.cart[i].quantity++;
                    plateInCart = true;
                    break;
                }
            }
            if (!plateInCart) {
                for (let i = 0; i < store.cart.length; i++) {
                    if (plate.restaurant_id !== store.cart[i].restaurant_id) {
                        store.newFood = plate
                        this.showModal = true

                        return;

                    } else {

                    }
                }
                plate.quantity = 1;
                store.cart.push(plate);
            }
            localStorage.setItem("cart", JSON.stringify(store.cart));
            console.log("Piatto aggiunto al carrello");
            console.log(store.cart);
        },


        addNewPlate() {
            const plate = store.newFood;
            console.log(plate);
            store.cart = [];
            plate.quantity = 1;
            this.store.cart.push(plate);
            localStorage.setItem('cart', JSON.stringify(store.cart));
            this.hideModal();


        },




        hideModal() {
            this.showModal = false;
        },

        removeFromCart(plate) {
            if (store.cart.length > 0) {
                for (let i = 0; i < store.cart.length; i++) {
                    if (store.cart[i].slug === plate.slug) {
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

    mounted() {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            store.cart = JSON.parse(storedCart);
        }

        setTimeout(
            this.getRestaurant, 1500,
            this.getPlates, 1500
        )

    }

}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;



// Modale

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        color: $red;
        text-align: center;
        ;
        width: 500px;
        font-size: 30px;
        font-weight: 900;
        margin-bottom: 16px;
    }

    .mod-button {
        padding: 0.5em 1.7em;
        display: block;
        margin-bottom: 10px;
        border-radius: 25px;
        border: none;
        width: 100px;
        font-weight: bold;
        background: $yellow;
        color: $red;
        transition: .4s ease-in-out;


        &:hover {
            background: $red;
            color: $yellow;
            text-decoration: none;
            transform: translateY(-4px) translateX(-2px);
            box-shadow: 2px 5px 0 0 black;
        }

        &:active {
            transform: translateY(2px) translateX(1px);
            box-shadow: 0 0 0 0 black;
        }

    }

    .blob {


        position: absolute;
        ;
        background-color: $acqua;
        width: 40%;
        height: 40%;
        z-index: -1;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 44%;
        animation: blab 10s linear infinite;

        @keyframes blab {

            0%,
            100% {
                border-radius: 42% 56% 72% 28% / 42% 42% 56% 44%;
            }

            20% {
                border-radius: 52% 46% 42% 38% / 32% 42% 66% 44%;
            }

            40% {
                border-radius: 42% 56% 62% 48% / 22% 42% 56% 54%;
            }

            60% {
                border-radius: 32% 60% 72% 28% / 42% 52% 46% 64%;
            }

            80% {
                border-radius: 22% 50% 60% 40% / 50% 30% 66% 54%;
            }


        }
    }



}









// fine modale


// Ristorante Dettagli
h1 {
    font-size: 3rem;
    font-weight: 900;
    color: $acqua;
    font-stretch: extra-condensed;
}

h4 {
    font-size: 2.5rem;
    font-weight: 900;
    color: $red;
}

i {
    color: $red;
}

.description {
    height: 30%;
}

// MENU CARDS
.my-card-menu {
    margin: 10px 10px;
    width: calc(50% - 20px);
    background-color: white;
}

// Immagine piatto singlo
.card-body img {
    width: 150px;
    height: 150px;
    // object-fit: cover;
    border-radius: 50%;
}

@media (max-width: 1024px) {
    .card-body img {
        width: 80px;
        height: 80px;
    }
}

.fa-plus:hover {
    color: blue;
}

.fa-minus:hover {
    color: red;
}

.fa-solid:not(:hover) {
    animation: none;
}

// CARELLO
.my-cart {
    position: sticky;
    top: 0;
    z-index: 10;
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
    transition: 0.1s ease-in-out;

    &:hover {
        transform: scale(1.1);

        color: $yellow;
    }
}

// Loader
.loader {
    height: 70vh;
}

.load-img {
    top: 40%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
}

.progress-loader {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    width: 200px;
    background: rgba(236, 236, 238, 0.253);
    height: 10px;
    border-radius: 7px;
}

.progress {
    width: 1px;
    height: 10px;
    border-radius: 7px;
    background: $red;
    transition: 0.5s;
    animation: loading_44 3s ease infinite;
}

@keyframes loading_44 {
    0% {
        width: 0%;
    }

    50% {
        width: 100%;
    }

    100% {
        width: 0%;
    }
}


// image container

.blob-img {
    overflow: hidden;
    width: 400px;
    height: 400px;
    border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
    animation: blob 10s linear infinite;
    ;
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
</style>