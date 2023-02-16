<template>
    <form id="payment-form" :action="`${store.apiBaseUrl}/payment`" method="post">
        <div id="dropin-container"></div>
        <input type="submit" value="Procedi al pagamento" />
        <input type="hidden" id="nonce" name="payment_method_nonce"/>
    </form>
</template>

<script>
import {store} from '../store';
import axios from 'axios';

    export default {
        name: 'Payment',
        data(){
            return{
                store,
            }
        },
        methods:{
            clearCart() {
                store.cart = [];
                localStorage.removeItem("cart");
                console.log(store.cart);
                console.log("Carrello svuotato");
            },
           
            redirectToPage() {
                this.$router.push('/success')
            }
        },
        mounted(){
        // braintree
        const form = document.getElementById('payment-form');
        axios.get(`${store.apiBaseUrl}/token`).then((response) => {
            // Step two: create a dropin instance using that container (or a string
            //   that functions as a query selector such as `#dropin-container`)
            braintree.dropin.create({
                // container: document.getElementById('dropin-container'),
                authorization: response.data.client_token,
                container: '#dropin-container'
                // ...plus remaining configuration
            }, (error, dropinInstance) => {
                // Use `dropinInstance` here
                // Methods documented at https://braintree.github.io/braintree-web-drop-in/docs/current/Dropin.html
                if (error) console.error(error);
                form.addEventListener('submit', event => {
                    event.preventDefault();

                    dropinInstance.requestPaymentMethod((error, payload) => {
                        if (error) console.error(error);

                        // Step four: when the user is ready to complete their
                        //   transaction, use the dropinInstance to get a payment
                        //   method nonce for the user's selected payment method, then add
                        //   it a the hidden field before submitting the complete form to
                        //   a server-side integration
                        document.getElementById('nonce').value = payload.nonce;
                        axios.post('http://127.0.0.1:8000/api/payment', {payment_method_nonce : payload.nonce, amount: store.total_amount}).then((response) => {
                            console.log(response.data);
                            this.clearCart();
                            this.redirectToPage();
                        })
                    });
                });
            });
        });
        }
    }
</script>

<style lang="scss" scoped>

</style>