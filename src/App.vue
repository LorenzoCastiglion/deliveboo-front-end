<template>
  <header>
    <AppHeader></AppHeader>
  </header>
<main>
    <router-view></router-view>
</main>

<!-- carrello -->
  <div class="side_menu_shop">
    <i class="fa-solid fa-cart-shopping" @click="store.openCart = true"></i>
    <Transition class="cart_animation">
      <div class="cart_counter" v-if="store.cart.length > 0">
        <span>{{ store.cart.length }}</span>
      </div>
    </Transition>
  </div>
  <Transition name="openCart">
    <CartComponent v-if="store.openCart" />
  </Transition>


  
<footer>
  <AppFooter></AppFooter>
</footer>
</template>
<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import CartComponent from './components/CartComponent.vue';
  export default {
    name: 'App',
    components:{
      AppHeader,
      AppFooter,
      CartComponent,
     
    
  },

  data(){
    return {
      index:0,
      store
    }
  }

  
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;



.cart_animation-enter-active,
.cart_animation-leave-active {
  transition: opacity 0.5s ease;
}
.cart_animation-enter-from,
.cart_animation-leave-to {
  opacity: 0;
}

.cart_counter {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: $red;
  color: $yellow;
  text-align: center;
  line-height: 32px;
  font-size: 1em;
  position: absolute;
  bottom: -15px;
  left: -15px;
}
.openCart-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.openCart-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.openCart-enter-from,
.openCart-leave-to {
  transform: translateX(550px);
  // opacity: 0;
}
// side menu
.side_menu_shop {
  position: fixed;
  top: 7.5rem;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 0.8rem;
  background-color: white;
  color: black;;
  font-size: 1.4rem;
  box-shadow: 0px 4px 8px -2px rgba(black, 0.35);
  border-radius: 0.5rem 0 0 0.5rem;
  transition: all 450ms ease;
  cursor: pointer;
  &:hover {
    padding-right: 1.5rem;
  }
}


</style>