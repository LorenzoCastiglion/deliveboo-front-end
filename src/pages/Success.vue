<template>
    <div class="wrapper d-flex justify-content-center align-items-center">
        <div class="box " ref="box">
            <div class="blob"></div>
        </div>

        <div class="box1 " ref="box1">
            <div class="blob1"></div>
        </div>

        <div class="box2 " ref="box2">
            <div class="blob2"></div>
        </div>
        <div class="messaggio">
            <p>Pagamento avvenuto con successo!</p>
            <div class="d-flex">
                <p>Prepara la tavola, stiamo arrivando</p>
                <div class="truck"><i class="fa-solid fa-truck mt-3"></i></div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Success',

    methods: {

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
    },

    mounted() {
        document.addEventListener('mousemove', this.handleMouseMove);
    },
    beforeUnmount() {
        document.removeEventListener('mousemove', this.handleMouseMove);
    }

}
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.wrapper {
    height: calc(100vh - 276px);
    position: relative;
}

p {
    font-weight: 700;
    font-stretch: extra-condensed;
    font-size: 30px;

}

.box {

    top: 100px;
    right: -300px;
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
    transform: rotate(90deg);
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22780.373%22 height=%22811.297%22 viewBox=%22146.222 96.449 780.373 811.297%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M918 639.5Q884 779 752.5 825T491 899.5Q361 928 232 858t-64-214q65-144 94.5-219.5T336 240q44-109 173.5-138T695 195.5Q751 318 851.5 409T918 639.5Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.35 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23F4F1BB%22 d=%22M918 639.5Q884 779 752.5 825T491 899.5Q361 928 232 858t-64-214q65-144 94.5-219.5T336 240q44-109 173.5-138T695 195.5Q751 318 851.5 409T918 639.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

.box1 {

    bottom: 0;
    left: 50px;
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
    left: 350px;
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


.truck {
    width: 80px;
    overflow: hidden;
    color: $red;

    i {

        animation: movetruck 3s ease-in-out infinite;

        @keyframes movetruck {

            0% {
                transform: translate(-50px);

            }

            50%{
                transform: rotate(-20deg);
            }



            100% {
                transform: translate(100px);

            }

        }

    }
}
</style>