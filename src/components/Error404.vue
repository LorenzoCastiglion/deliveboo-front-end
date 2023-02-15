<template>
    <section class="container d-flex justify-content-center align-items-center pt-5">
        <div class="blobtainer col-8">
            <div class="blob"></div>
        </div>        
        <div class="error-message">
            <img src="public\img\error404.png" alt="Pagina non trovata" />
            <p>Ops! Sembra che tu abbia sbagliato strada. Qui non c'è nulla da vedere, a parte questo simpatico pasticciere che a
            quanto pare si è perso anche lui. Ma non temere, basta premere il pulsante magico qui sotto e tornerai alla giusta
            rotta!</p>
            <button @click="goHome">Torna alla Home</button>
        </div>
    </section>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const goHome = () => {
            router.push({ path: '/' });
        };

        return {
            goHome,
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    height: 100vh;
    // overflow-x: hidden;

    .blobtainer {
            height: 100vh;
            top: 1%;
            right: -40%;
            z-index: -10;

            .blob {
                    width: 100%;
                    height: 80%;
                    background-size: contain;
                    background: rgb(237,106,90);
                    background-repeat: no-repeat;
                    z-index: -1;
                    animation: blob 10s linear infinite;
                    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22721.219%22 height=%22605.411%22 viewBox=%22129.347 155.24 721.219 605.411%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M786.5 606Q669 712 553 744t-309.5 2.5Q50 717 184.5 565T365 261.5q46-151.5 194.5-87t246.5 195Q904 500 786.5 606Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.1 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23ED6A5A%22 d=%22M786.5 606Q669 712 553 744t-309.5 2.5Q50 717 184.5 565T365 261.5q46-151.5 194.5-87t246.5 195Q904 500 786.5 606Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
                }

                                @keyframes blob {
                
                                    0%,
                                    100% {
                                        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
                                    }
                
                                    33% {
                                        border-radius: 42% 28% 62% 18% / 28% 28% 89% 89%;
                                    }
                
                                    66% {
                                        border-radius: 100% 56% 56% 100% / 100% 100% 79% 79%;
                                    }
                
                
                                }
        }
    .error-message {
        position: absolute;
        max-width: 700px;
        top: 15%;
        left: 25%;
        text-align: center;
    
        p {
            font-size: 16px;
            margin: 20px;
            color: #fff;
        }
    
        button {
            background: #2a435d;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
        }
    
        img {
            max-width: 60%;
            height: auto;
            margin-top: 50px;
        }
    }
}
</style>