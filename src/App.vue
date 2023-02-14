<template>
  <header>
    <AppHeader></AppHeader>
  </header>
<main>
  
    <router-view></router-view>
  
  
  
</main>
<footer>
  <AppFooter></AppFooter>
</footer>
 
  
</template>
<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
  export default {
    name: 'App',
    components:{
      AppHeader,
      AppFooter,
    
  },

  data(){
    return {
      index:0,
    }
  }

  
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

main{
  height: 100vh;
}


</style>