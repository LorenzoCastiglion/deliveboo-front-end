<template>


    <div class="container ">
        <div class="d-flex  ">
            <div class="flex-column align-items-center">
                <div class="col-12 text-center">
                    <img class="img pt-3" src="../../public/img/logo-01.png" alt="">
                </div>
                <!-- Copyright -->
                <div class="mt-1 text-center">
                    2023 <span class="text-reset fw-bold">Codeat <sup>®</sup></span>
                </div>
                <!-- Copyright -->

            </div>
            <div class="d-flex flex-grow-1 justify-content-around align-items-baseline ">

                <div v-for="(item, index) in store.footerItems" :key="index">
                    <ul class="">{{ item.label }}<span class=" dot">.</span>
                        <li v-for="x in item.storeItem" class="hover-underline-animation">
                            {{ x.pagename }}
                        </li>
                    </ul>
                </div>

                <div class="wrapper d-flex flex-wrap flex-column  ">
                    <div class="">
                        <h3 class="m-0 ">Social <span class="dot">.</span></h3>
                    </div>

                    <div class="mt-3">
                        <div class="d-flex flex-wrap">

                            <a v-for="link in socialLinks" :key="link.name" :href="link.url" class="icon"
                            :class="link.name.toLowerCase()">
                            <div class="tooltip">{{ link.name }}</div>
                            <span><i :class="`fa-brands ${link.icon}`"></i></span>

                        </a>
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
            store
        }
    },
    computed: {
        socialLinks() {
            return store.socialLinks;
        }
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

@media only screen and (max-width: 570px) {

    ul {
        display: none;
    }

    .wrapper {

        h3,
        a,
        div,
        span {

            display: none;
        }
    }

}

// SOCIAL ICON
.wrapper {
    .icon {
        position: relative;
        background-color: #ffffff;
        border-radius: 50%;
        margin: 0.2em;
        width: 2em;
        height: 2em;

        font-size: 1.5em;
        display: inline-block;
        align-items: center;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        color: #333;
        text-decoration: none;


        span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size:1em;
            font-weight: 500;

            text-align: center;
            color: #333;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &:hover {

            span {
                color: white;
            }

            .tooltip {
                text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
            }

            .tooltip {
                top: -80%;
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
            }
        }

        &:hover,
        &:hover .tooltip,
        &:hover .tooltip::before {
            background-color: #ffffff;
            color: #333;
        }

        &.facebook:hover,
        &.facebook:hover .tooltip,
        &.facebook:hover .tooltip::before {
            background-color: #3b5999;
            color: #ffffff;
        }

        &.twitter:hover,
        &.twitter:hover .tooltip,
        &.twitter:hover .tooltip::before {
            background-color: #46c1f6;
            color: #ffffff;
        }

        &.instagram:hover,
        &.instagram:hover .tooltip,
        &.instagram:hover .tooltip::before {
            background-color: #e1306c;
            color: #ffffff;
        }

        &.github:hover,
        &.github:hover .tooltip,
        &.github:hover .tooltip::before {
            background-color: #333333;
            color: #ffffff;
        }

        &.youtube:hover,
        &.youtube:hover .tooltip,
        &.youtube:hover .tooltip::before {
            background-color: #de463b;
            color: #ffffff;
        }
    }


    .tooltip {
        position: absolute;
        top: 0;
        line-height: 1.5;
        font-size: 14px;
        background-color: #ffffff;
        color: #ffffff;
        padding: 5px 8px;
        border-radius: 5px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

        &::before {
            position: absolute;
            content: "";
            height: 8px;
            width: 8px;
            background-color: #ffffff;
            bottom: -3px;
            left: 50%;
            transform: translate(-50%) rotate(45deg);
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
    }
}
</style>