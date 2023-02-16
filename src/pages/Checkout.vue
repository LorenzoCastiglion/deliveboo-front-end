<template>
    <div class="wrapper">

        <div class="container my-5 d-flex flex-column justify-content-center align-items-center">


            <div class="d-flex flex-column ">

                <h2>Il tuo ordine:</h2>
                <div v-for="item in store.cart">

                    <p>{{ item.name }} x {{ item.quantity }}</p>

                </div>
                <p> totale: {{ store.total_amount }} €</p>
            </div>

            <div v-if="!prova">
                <h1 class="text-capitalize text-center">Inserisci i tuoi dati</h1>
                <form action="" class="w-75 m-auto row">

                    <div class="input mb-2 col-md-6 col-sm-12">
                        <label for="name" class="form-label">Nome</label>
                        <input class="form-control" type="text" name="name" id="name" placeholder="Nome" v-model="name"
                            required />

                        <span v-if="v$.name.$error" class="form-text text-danger">
                            &#42; Campo obbligatorio
                        </span>

                    </div>

                    <div class="input mb-2 col-md-6 col-sm-12">
                        <label for="last_name" class="form-label">Cognome</label>
                        <input class="form-control" type="text" name="last_name" id="last_name" placeholder="Cognome"
                            v-model="last_name" required />

                        <span v-if="v$.last_name.$error" class="form-text text-danger">
                            &#42; Campo obbligatorio
                        </span>
                    </div>

                    <div class="input mb-2 col-md-6 col-sm-12">
                        <label for="email" class="form-label">E-mail</label>
                        <input class="form-control" type="email" name="email" id="email" placeholder="E-mail"
                            v-model="email" required />
                        <span v-if="v$.email.$error" class="form-text text-danger">
                            &#42; Inserisci un indirizzo email valido con "&#64;"
                        </span>

                    </div>

                    <div class="input mb-2 col-md-6 col-sm-12">
                        <label for="address" class="form-label">Indirizzo</label>
                        <input class="form-control" type="text" name="address" id="address" placeholder="Indirizzo"
                            v-model="address" required />
                    </div>

                    <span v-if="v$.address.$error" class="form-text text-danger">
                        &#42; Campo obbligatorio
                    </span>

                    <div class="input mb-5 col-md-6 col-sm-12">
                        <label for="phone" class="form-label">Telefono</label>
                        <input class="form-control" type="text" name="phone" id="phone" placeholder="Telefono"
                            v-model="phone" />
                    </div>
                </form>
                <button class="m-auto btn btn-primary" @click.prevent="order()">Invia i dati per il tuo ordine</button>
            </div>






        </div>





        <section v-if="prova" class="mt-5 mx-5 px-5">
            <Payment />
        </section>
    </div>

</template>

<script>
import axios from "axios";
import { store } from "../store";
import Payment from "../components/Payment.vue";
import useValidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators'

export default {
    name: 'Checkout',
    components: {
        Payment
    },
    data() {
        return {
            v$: useValidate(),
            store,
            name: '',
            last_name: '',
            email: '',
            address: '',
            phone: '',
            prova: false,


        };
    },
    validations() {
        return {
            name: { required },
            name: { required },
            last_name: { required },
            email: { required, email },
            address: { required },
        }
    },
    computed: {
        cartTotal() {

            let total = 0
            for (let i = 0; i < store.cart.length; i++) {
                total += store.cart[i].price * store.cart[i].quantity
            }
            return total
        }
    },
    methods: {

        order() {

            const data = {
                name: this.name,
                last_name: this.last_name,
                email: this.email,
                address: this.address,
                cart: this.store.cart,
                total_amount: this.cartTotal,
                phone: this.phone,
                restaurant: this.store.cart[0].restaurant_id
            }

            axios.post('http://127.0.0.1:8000/api/checkout', data, { headers: { "Content-Type": "multipart/form-data" } }).then((response) => {
                console.log(response.data.results)
                console.log(response.data.id)
            })
            // this.prova = true;
            this.v$.$validate()
            if (!this.v$.$error) {
                this.prova = true;
            } else {
                console.log(this.v$)
            }
        },
        getTotal() {
            if (!store.cart) {
                store.cart = [];
            }
            let total = 0
            for (let i = 0; i < store.cart.length; i++) {
                total += store.cart[i].price * store.cart[i].quantity
            }
            store.total_amount = total
        }
    },
    mounted() {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            store.cart = JSON.parse(storedCart);
        }
        this.getTotal();
        console.log(this.store.cart);
    }
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.wrapper {
    height: 100vh;
}

// BOTTONI

button {
    padding: 0.5em 1.7em;
    display: block;

    border-radius: 25px;
    border: none;

    font-weight: bold;
    background: $red;
    color: $yellow;
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
</style>