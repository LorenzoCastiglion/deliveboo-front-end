<template>
  <section v-if="restaurant">
    <h2 class="mb-5">{{ restaurant.name }}</h2>
    <div class="blob-img">
        <img class="w-100 h-100" :src="`${store.imagBasePath}${restaurant.image}`" alt="">
    </div>
    <!-- menù -->
    <div class="d-flex">
        <div class="me-5">
            <h4>Scegli i tuoi piatti</h4>
            <div v-for="(plate,index) in restaurant.plates" :key="index">
            <p>{{ plate.name }}: <span>{{ plate.price }} euro</span></p> 
            <button @click="addToCart(plate)">Aggiungi al carrello</button>
            <button @click="removeFromCart(plate)">Rimuovi dal carrello</button>
            <p>quantità: {{ plate.quantity }}</p>
            </div>
        </div>
        <!-- carrello -->
        <div>
            <p>CARRELLO:</p>
            <ul>
                <li v-for="(item, i) in store.cart" :key="i">
                    <p> <span class="fw-bold">{{ item.name }}</span>  x{{ item.quantity }}</p>
                </li>
            </ul>
            <p >Totale: {{ total }} euro</p>
            <button @click="clearCart()">Svuota</button>
        </div>
    </div>
  </section>
  <!-- loader -->
  <section class="loader " v-else>
      <div class="load-img">
          <img class="w-100"  src="../../public/img/logo_text_b.png" alt="">
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
        computed: {
            total () {
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
              for (let i = 0; i < store.cart.length; i++){
                if(plate.restaurant_id !== store.cart[i].restaurant_id){
                  if(confirm('Vuoi svuotare il carrello e ordinare dal nuovo ristorante?')){
                    store.cart = [];
                    console.log('non corrispondono');
                  }else{
                    return;
                  }
              }
              }
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
                console.log("Piatto rimosso dal carrello");
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