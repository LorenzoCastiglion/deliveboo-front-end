<template>
    <div class="wrapper position-relative">


        <!-- moving blobs -->

        <div class="box " ref="box">
            <div class="blob"></div>
        </div>

        <div class="box1 " ref="box1">
            <div class="blob1"></div>
        </div>

        <div class="box2 " ref="box2">
            <div class="blob2"></div>
        </div>

      

        <div class="container my-5 d-flex flex-column justify-content-center align-items-center">


            <div class="d-flex flex-column ">

                <h1>Il tuo ordine:</h1>
                <div class="d-flex" v-for="item in store.cart">

                    <p>- {{ item.name }} </p>
                    <span class="quantita">x</span>
                    <p>{{ item.quantity }}</p>
                </div>
                <p class="text-uppercase"> totale: <span class="totale">{{ store.total_amount }} €</span></p>
            </div>

            <div v-if="!prova">
                <h1 class="text-capitalize text-center mt-4">Inserisci i tuoi dati</h1>
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

                    <div class="mb-5 col-md-6 col-sm-12">
                        <label for="phone" class="form-label "></label>
                        <button class="mt-3 m-auto btn btn-primary " @click.prevent="order()">Invia i dati per il tuo ordine</button>
                    </div>
                  
                </form>
                
            </div>






        </div>



        <!-- -->

        <section v-if="prova"   class="mt-5 col-4 text-center m-auto pay">
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


        // mousemove



        handleMouseMove(event) {
            const boxes = [
                {
                    el: this.$refs.box,
                    x: 1,
                    y: 1
                },
                {
                    el: this.$refs.box1,
                    x: 1,
                    y: -1
                },
                {
                    el: this.$refs.box2,
                    x: -2,
                    y: 1
                }
            ];

            for (const box of boxes) {
                const boxCenterX = box.el.offsetLeft + box.el.offsetWidth / 25;
                const boxCenterY = box.el.offsetTop + box.el.offsetHeight / 25;
                const mouseX = event.pageX;
                const mouseY = event.pageY;
                const deltaX = (mouseX - boxCenterX) / (10 * box.x);
                const deltaY = (mouseY - boxCenterY) / (10 * box.y);
                box.el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            }
        },

        // fine mousemove

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

        document.addEventListener('mousemove', this.handleMouseMove);

    },

    beforeUnmount() {
        document.removeEventListener('mousemove', this.handleMouseMove);
    }
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.wrapper {
    height: 100vh;
    overflow: hidden;
    ;
}

label {
    color: $acqua;
    font-weight: 900;
    font-stretch: extra-expanded;
    font-size: 20px;
}

input {
    font-weight: 700;
    font-stretch: extra-condensed;
    background-color: transparent;
    border-color: $red;
}

h1{
    font-size: 55px;
    font-weight: 900;
    font-stretch: extra-condensed;
}

p{
    font-weight: 700;
    font-stretch: extra-condensed;
   font-size: 30px;
    
}

.quantita{
    font-weight: 700;
    font-stretch: extra-condensed;
   font-size: 30px;
   color: $red;
   margin: 0 10px;
   transform: rotate(15deg);
   
}

.totale{
    margin-left: 20px;
    font-weight: 700;
    font-stretch: extra-condensed;
   font-size: 50px;
   color: $red;
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


// moving divs

.box {

    top: 100px;
    left: -300px;
    position: absolute;
    width: 600px;
    height: 600px;

    z-index: -1;
}



.blob {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22780.373%22 height=%22811.297%22 viewBox=%22146.222 96.449 780.373 811.297%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M918 639.5Q884 779 752.5 825T491 899.5Q361 928 232 858t-64-214q65-144 94.5-219.5T336 240q44-109 173.5-138T695 195.5Q751 318 851.5 409T918 639.5Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.35 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23F4F1BB%22 d=%22M918 639.5Q884 779 752.5 825T491 899.5Q361 928 232 858t-64-214q65-144 94.5-219.5T336 240q44-109 173.5-138T695 195.5Q751 318 851.5 409T918 639.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

.box1 {

    bottom: 300px;
    right: 50px;
    position: absolute;
    width: 100px;
    height: 100px;

    z-index: -1;
}

.blob1 {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22721.926%22 height=%22790.098%22 viewBox=%22164.597 130.634 721.926 790.098%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M886.5 639.5q-1.5 139.5-121 225t-251 41Q383 861 302 782T187.5 601.5q-33.5-101.5-18-216t106-206.5Q366 87 473 170t166 134.5Q698 356 793 428t93.5 211.5Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.35 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23ED6A5A%22 d=%22M886.5 639.5q-1.5 139.5-121 225t-251 41Q383 861 302 782T187.5 601.5q-33.5-101.5-18-216t106-206.5Q366 87 473 170t166 134.5Q698 356 793 428t93.5 211.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}



.box2 {

    top: 0px;
    right: 50px;
    position: absolute;
    width: 300px;
    height: 300px;

    z-index: -1;
}

.blob2 {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(90deg);
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22603.23%22 height=%22681.692%22 viewBox=%22206.377 93.308 603.23 681.692%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M768 619.5Q691 739 562 767t-256.5-42q-127.5-70-91-207.5t107.5-313q71-175.5 231.5-74t226 235.5Q845 500 768 619.5Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.35 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%239BC1BC%22 d=%22M768 619.5Q691 739 562 767t-256.5-42q-127.5-70-91-207.5t107.5-313q71-175.5 231.5-74t226 235.5Q845 500 768 619.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");

}

// payment


</style>