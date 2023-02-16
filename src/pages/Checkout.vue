<template>
    <div class="container my-5">
        <h1 class="ms-5">ORDINA</h1>
        <div v-if="!prova">
            <form action="" class="ms-5">
                <p class="mx-1 text-uppercase">*Nome</p>
                <div class="input mb-2">
                    <input class="" type="text" name="name" id="name" placeholder="Nome" required v-model="name"/>
                </div>
                <p class="mx-1 text-uppercase">*Cognome</p>
                <div class="input mb-2">
                    <input class="" type="text" name="last_name" id="last_name" placeholder="Cognome" required v-model="last_name"/>
                </div>
                <p class="mx-1 text-uppercase">*E-mail</p>
                <div class="input mb-2">
                    <input class="" type="email" name="email" id="email" placeholder="E-mail" required v-model="email"/>
                </div>
                <p class="mx-1 text-uppercase">*Indirizzo</p>
                <div class="input mb-2">
                    <input class="" type="text" name="address" id="address" placeholder="Indirizzo"  required v-model="address"/>
                </div>
                <p class="mx-1 text-uppercase">Telefono</p>
                <div class="input mb-5">
                    <input class="" type="text" name="phone" id="phone" placeholder="Telefono" v-model="phone"/>
                </div>
            </form>
            <button class="ms-5 btn btn-primary" @click.prevent="order()">Invia i dati per il tuo ordine</button>
        </div>
    </div>

    

    <section v-if="prova" class="mt-5 mx-5 px-5">
     <Payment/>   
    </section>

</template>

<script>
    import axios from "axios";
    import { store } from "../store";
    import Payment from "../components/Payment.vue";

    export default {
        name:'Checkout',
        components: {
            Payment
        },
        data() {
        return {
        store,
        name:"",
        last_name:"",
        email: "",
        address: "",
        phone: "",
        prova: false

        };
    },
    computed: {
            cartTotal () {
                
                let total = 0
                for (let i = 0; i < store.cart.length; i++) {
                    total += store.cart[i].price * store.cart[i].quantity
                }
                return total
            }
        },
    methods: {
        order(){
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

            axios.post('http://127.0.0.1:8000/api/checkout', data, {headers: { "Content-Type": "multipart/form-data" }} ).then((response) => {
                console.log(response.data.results)
                console.log(response.data.id)
            })
            this.prova = true;
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
    mounted(){
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            store.cart = JSON.parse(storedCart);
        }
        this.getTotal();
    }
}
</script>

<style lang="scss" scoped>

</style>