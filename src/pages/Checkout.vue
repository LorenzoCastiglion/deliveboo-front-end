<template>
    <div>
        <h1 class="ms-5">Checkout</h1>

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
    </div>

    <button class="ms-5" @click.prevent="pay()">Paga</button>
</template>

<script>
    import axios from "axios";
    import { store } from "../store";
    export default {
        name:'Checkout',

        data() {
        return {
        store,
        name:"",
        last_name:"",
        email: "",
        address: "",
        phone: "",

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
        pay(){
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
                
        }
    },
    mounted(){
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            store.cart = JSON.parse(storedCart);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>