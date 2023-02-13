<template>
<div class="container">
    <div class="d-flex flex-wrap">
        <div class="d-flex flex-column align-items-center col-12 col-md-4">
            <img class="img pt-2" src="../../public/img/logo-01.png" alt="">
            <div class="mt-1">
                2023 <span class="text-reset fw-bold">Codeat <sup>®</sup></span>
            </div>
        </div>
        <div class="d-flex flex-column flex-sm-row justify-content-around align-items-baseline col-12 col-sm-12 col-md-8">
            <!-- DISPLAY UP 768px -->
            <div v-for="(item, index) in store.footerItems" :key="index" class="col-14 col-sm-4 d-none d-md-block">
                <ul>
                    <h3>{{ item.label }}<span class="dot">.</span></h3>
                    <li v-for="x in item.storeItem" class="hover-underline-animation">
                        <template v-if="x.icon">
                            <i :class="'fa-brands' + ' ' + x.icon"></i>
                        </template>
                        {{ x.pagename }}
                    </li>
                </ul>
            </div>
    
            <!-- DISPLAY UNDER 768px -->
            <div class="container p-5 d-md-none">
                <div class="accordion" id="accordionExample">
                    <template v-if="windowWidth >= 768">
                    </template>
                    <div class="accordion-item" v-for="(item, index) in store.footerItems" :key="item">
                        <h2 class="accordion-header" :id="'heading' + item">
                            <button class="accordion-button" :class="{ 'collapsed': index !== activeIndex }" type="button" @click="toggle(index)"
                                :aria-expanded="index === activeIndex" :aria-controls="'collapse-'+item.label">
                                {{item.label}}
                            </button>
                        </h2>
                        <div :id="'collapse-' + item.label" class="accordion-collapse collapse"
                            :class="{ 'show': index === activeIndex }" 
                            :aria-labelledby="'heading' + item"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul>
                                    <li v-for="x in item.storeItem" class="hover-underline-animation">
                                        <template v-if="x.icon">
                                            <i :class="'fa-brands' + ' ' + x.icon"></i>
                                        </template>
                                        {{ x.pagename }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'AppFooter',

    data() {
        return {
            store,
            activeIndex: 0,
        }
    },
    methods: {
        toggle(index) {
            this.activeIndex = this.activeIndex === index ? -1 : index;
        },
    }    
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.dot {
    color: $red;
    font-size: 30px;

}

h3 {
    font-size: 22px;
    font-weight: 500;
    &:hover {
            color: #000!important;
        }
}

img {
    width: 100px;
}


ul {
    font-size: 22px;
    font-weight: 500;

    &:nth-child(1){
        margin-right: 20px;
    }

    li {
        font-size: 14px;
        font-weight: 300;
        list-style: none;
        color: grey;
    }

    :hover {
        color: grey;
    }


}
.hover-underline-animation {
    position: relative;

    &:after {
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

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
}
@media only screen and (max-width: 768px) {
   .img{
    align-items: center!important;
   }
   
   .accordion-button {
       transition: all 0.3s ease-in-out;

       &:not(.collapsed) {
           color: #fff;
           background: linear-gradient(to right, #ED6A5A, #F4F1BB, #9BC1BC);
       }

       &:focus {
           border-color: #fff !important;
           box-shadow: none !important;
       }
   }
}
</style>