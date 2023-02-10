<template>

    <header>
        <nav class="container navbar navbar-expand-lg bg-body-tertiary px-5 px-md-0 ">
            <div class="container-fluid">
                <router-link :to="{name: store.menuItems[0].routeName}">
                    <img class="logo" src="../../public/img/logo_text_b.png" alt="">
                </router-link>
                

                <div id="NavDesktop" class="collapse navbar-collapse justify-content-end">
                    <ul class="navbar-nav  mb-2 mb-lg-0 ">
                        <li id="nav-txt" class="nav-item  hover-underline-animation"
                            v-for="(item, index) in store.menuItems" :key="index">
                            <router-link :to="{ name: item.routeName }" active-class="active"
                                class="nav-link  nav-link">
                                {{ item.label }}

                            </router-link>
                        </li>

                    </ul>

                </div>

                <!-- Toggle Menu-->


                <div id="NavMobile" class="row justify-content-end">

                    <label for="check" class="bar ">
                        <input id="check" type="checkbox" @click="isMenuOpen = !isMenuOpen">

                        <span class="top"></span>
                        <span class="middle"></span>
                        <span class="bottom"></span>
                    </label>

                    <!-- <div class="d-flex justify-content-end"><button @click="isMenuOpen = !isMenuOpen"><i
                                class="fa-regular" :class="isMenuOpen ? 'fa-circle-xmark' : 'fa-bars'"></i></button>
                    </div> -->
                    <transition name="fade">
                        <div v-if="isMenuOpen" class=" text-end">
                            <ul class="navbar-nav  mb-2 mb-lg-0 ">
                                <li id="nav-txt" class="nav-item   hover-underline-animation"
                                    v-for="(item, index) in store.menuItems" :key="index">
                                    <router-link :to="{ name: item.routeName }" active-class="active"
                                        class="nav-link  nav-link">
                                        {{ item.label }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </div>


                <!-- Fine Toggle Menu-->

            </div>
        </nav>
    </header>


</template>

<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            isMenuOpen: false,
        }
    }

}
</script>



<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.logo {
    width: 80px;
}



#nav-txt {
    font-family: 'Mona Sans', sans-serif;
    font-weight: 700;
    font-size: 20px;
}


.hover-underline-animation {
    display: inline-block;
    position: relative;



}

.hover-underline-animation:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: $red;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

header {
    -webkit-box-shadow: 0 1.5px 6px -1px $red;
    -moz-box-shadow: 0 1.5px 6px -1px $red;
    box-shadow: 0 1.5px 6px -1px $red;

}

button {

    background-color: $red;
    border-radius: 5px;
    padding: 5px 20px;
    color: white;
    border: $red;
}


.fade-enter-active,
.fade-leave-active {
    transition: all 0.7s ease-in-out;

}

.fade-enter-from,
.fade-leave-to {
    transform: translate(10px, 0);
    opacity: 0;
}




//CSS Toogle Menu
@media only screen and (min-width: 480px) {
    #NavDesktop {
        display: none;
    }
}

@media only screen and (min-width: 992px) {
    #NavMobile {
        display: none;
    }
}


input[type = "checkbox"] {
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
}

.bar {
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 40px;
}

.bar span {
  position: absolute;
  width: 45px;
  height: 7px;
  background: $red;
  border-radius: 100px;
  display: inline-block;
  transition: 0.3s ease;
  left: 0;
}

.bar span.top {
  top: 0;
}

.bar span.middle {
  top: 17px;
}

.bar span.bottom {
  bottom: 0;
}

input[type]:checked ~ span.top {
  transform: rotate(45deg);
  transform-origin: top left;
  width: 48px;
  left: 5px;
}

input[type]:checked ~ span.bottom {
  transform: rotate(-45deg);
  transform-origin: top left;
  width: 48px;
  bottom: -1px;
  box-shadow: 0 0 10px #495057;
}

input[type]:checked ~ span.middle {
  transform: translateX(-20px);
  opacity: 0;
}
</style>