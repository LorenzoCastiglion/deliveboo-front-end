<template>
    <section v-if="restaurant">
        <div class="container pt-5">
            <!-- Ristorante Dettagli  -->
            <h1>{{ restaurant.name }}</h1>
            <div class="info d-flex">
                <p><i class="fa-solid fa-location-dot"></i> {{ restaurant.address }} </p>
                <p>Cellulare: {{ restaurant.phone }} </p>
                <p>Aperti da: {{ restaurant.opening_days }} </p>
                <p>Apre alle: {{ restaurant.opening_hours }} </p>
                <p>Chiude alle: {{ restaurant.closing_hours}} </p>
            </div>
            <p>{{ restaurant.description }}</p>

            <!--FINE Ristorante Dettagli  -->

            
            <div class="card border-0">
                <div class="row g-0">
                    <div class="col-md-4">
                        
                        <div class="blob-img">
                            <img class="w-100 h-100" :src="`${store.imagBasePath}${restaurant.image}`" alt="">
                        </div>
                        
                        <!-- CARELLO -->
                        <div class="my-cart">
                            <p class="pt-3 fw-semibold">Carello:</p>
                            <ul>
                                <li v-for="(item, i) in store.cart" :key="i">
                                    <p> <span class="fw-bold">{{ item.name }}</span> x{{ item.quantity }}</p>
                                </li>
                            </ul>
                        
                            <button class="btn btn-primary" @click="clearCart()">Svuota</button>
                        </div>
                        <!-- FINE CARELLO -->

                    </div>

                    <!-- MENU PIATTI -->
                    <div class="col-md-8">
                        <h4>Scegli i tuoi piatti</h4>
                        <div class="container pt-2 pb-4">
                            <div class="row g-3">
                                <div class="my-card-menu border rounded-5" v-for="(plate, index) in restaurant.plates"
                                    :key="index" >
                                    <div class="card-body d-flex ">
                                        <div class="me-3">
                                            <img :src="`${store.imagBasePath}${plate.image}`" alt="">
                                        </div>
                                        <div>
                                            <p class="fw-semibold">{{ plate.name }}</p>
                                            <p>{{ plate.price }} &#8364;</p>

                                            <p v-if="( plate.allergens )">Allergeni: {{ plate.allergens }} </p>
                                            <p v-else="( plate.allergens )"> Non ci sono allergeni</p>

                                            <!-- <p>{{ plate.available == 1 ? 'Sì è disponibile' : 'No disponibile' }}</p> -->
                                            <button class="my-button fa-solid fa-plus fa-beat" @click="addToCart(plate)"></button>
                                            <button class="my-button fa-solid fa-minus fa-beat" @click="removeFromCart(plate)"></button>
                                            <!-- <p>quantità: {{ plate.quantity }}</p> -->
                                        </div>
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
import axios from 'axios';
import { store } from '../store'
    export default {
        name: 'Restaurant',

        data(){
            return {
                
                store,
                restaurant:null,
                imagBasePath:''
                
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

        getApi(){
            return (this.getRestaurant,
             this.getPlates)
        },
        addToCart(plate){
            if (!store.cart) {
                store.cart = [];
            }
            let plateInCart = false;
            for (let i = 0; i < store.cart.length; i++) {
                if (store.cart[i].slug === plate.slug) {
                store.cart[i].quantity++;
                plateInCart = true;
                break;
                }
            }
            if (!plateInCart) {
                plate.quantity = 1;
                store.cart.push(plate);
            }
            localStorage.setItem("cart", JSON.stringify(store.cart));
            console.log("Piatto aggiunto al carrello"); 
            console.log( store.cart); 
        },

        removeFromCart(plate) {
            if(store.cart.length>0){
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
            console.log( store.cart); 
        },
        clearCart() {
            store.cart = [];
            localStorage.removeItem("cart");
            console.log( store.cart); 
            console.log("Carrello svuotato");
            },
        
    },

    mounted() {
      const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            store.cart = JSON.parse(storedCart);
        }

        setTimeout(
            this.getRestaurant,1500,
            this.getPlates,1500
        )
          
        

    }
        

    }
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

// Ristorante Dettagli
.info {
    p:not(:first-child) {
        margin: 0 5px;
    }

    p::after {
        content: " \00B7 ";
    }

    p:last-child:after {
        content: " ";
    }
}

// MENU CARDS
.my-card-menu{
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

@media (max-width: 1024px){
    .card-body img {
        width: 80px;
        height: 80px;
    }
}

.fa-plus:hover{
    color: blue;
}

.fa-minus:hover{
    color: red;
}
.fa-solid:not(:hover) {
   animation: none;
}

// CARELLO
.my-cart{
    position: sticky;
    top: 0;
    z-index: 10;
}

.my-button {
    background-color: white;
    border: none;
    color: black;
    // padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 25px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 12px;
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

.blob-img{
    overflow: hidden;
    width: 400px;
    height: 400px;
    border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
    animation: blob 10s linear infinite; ;
}

@keyframes blob {
      0%, 100%{
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
      }  
      33%{
        border-radius: 42% 28% 62% 18% / 28% 28% 89% 89%;
      }

      66%{
        border-radius: 100% 56% 56% 100% / 100% 100% 79% 79%;
      }

      
}

</style>