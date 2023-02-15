<template>
    <section class=" d-flex justify-content-center align-items-center flex-wrap pt-5 about-container ">
        <div class="position-absolute blobtainer col-12  ">
            <div class="blob "></div>
        </div>
        <div class="position-absolute blobtainer3 col-12 overflow-visible ">
                <div class="blob3 "></div>
            </div>
        
        <!-- SCRITTA CENTRALE -->
        <div class="container col-12 pb-5">
            <TextAnimationAbout></TextAnimationAbout>
        </div>

        <div class="container">
            <h3 class="pt-5">
                Siamo un team di <strong> sviluppatori </strong>web junior con le  competenze di base nella progettazione e sviluppo di siti web. 
                
            </h3>

            <h3 class="pt-2 pb-2">
                <strong>I membri del team</strong> possono  progettare l'interfaccia utente e la grafica, <strong> sviluppare codici</strong> HTML, CSS e JavaScript per progettare <strong>front-end, scrivere codice back-end</strong> in linguaggi come PHP, 
               <strong> impostare database</strong>, integrare API e creare strumenti di amministrazione.
            </h3>

            <h3 class="pb-5">
                Il nostro team di sviluppatori web è riuscito a rendere <strong>il sito Web moderno, responsive e sicuro</strong>. 
                Utilizzando le tecnologie più recenti, come <strong>l'utilizzo di framework</strong> come Bootstrap, Vue.
            </h3>


        </div>
        <!--FINE SCRITTA CENTRALE --> 

        <!-- CAROUSEL  :) -->
            <div class="pt-5 pb-5"> 
                <CarouselAboutTeam></CarouselAboutTeam>
            </div>
         <!--FINE CAROUSEL  -->

        <!--  RECENSIONI -->
            <!--Testimonials------------------->
    <section id="testimonials " class="cont-pading container">
        <!--heading--->
        <div class="testimonial-heading">
            <span>Commenti</span>
            <!-- <h1>Clients Says</h1> -->
            <div class="text-animation">
                <TextAnimationComments></TextAnimationComments>
            </div>
            


        </div>
        <!--testimonials-box-container------>
        <div class="testimonial-box-container">
            <!--BOX-1-------------->
            <div class="testimonial-box">
                <!--top------------------------->
                <div class="box-top">
                    <!--profile----->
                    <div class="profile">
                        <!--img---->
                        <div class="profile-img">
                            <img src="../../public/img/persona1.jpeg" />
                        </div>
                        <!--name-and-username-->
                        <div class="name-user">
                            <strong>Touseeq Ijaz</strong>
                            <span>@touseeqijazweb</span>
                        </div>
                    </div>
                    <!--reviews------>
                    <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i><!--Empty star-->
                    </div>
                </div>
                <!--Comments---------------------------------------->
                <div class="client-comment">
                    <p>Ho usato Code_Eat per la prima volta questa settimana ed è stata un'esperienza molto piacevole. Il servizio è stato veloce, efficiente e senza problemi. Il fattorino è arrivato in tempo e mi ha portato l'ordine esattamente come richiesto. Il personale era gentile e disponibile, anche se l'interazione è stata molto breve.</p>
                </div>
            </div>
            <!--BOX-2-------------->
            <div class="testimonial-box">
                <!--top------------------------->
                <div class="box-top">
                    <!--profile----->
                    <div class="profile">
                        <!--img---->
                        <div class="profile-img">
                            <img src="../../public/img/persona2F.jpeg" />
                        </div>
                        <!--name-and-username-->
                        <div class="name-user">
                            <strong>J.K Rowling</strong>
                            <span>@jkrowling</span>
                        </div>
                    </div>
                    <!--reviews------>
                    <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i><!--Empty star-->
                    </div>
                </div>
                <!--Comments---------------------------------------->
                <div class="client-comment">
                    <p>I prezzi erano piuttosto ragionevoli e competitivi rispetto ad altri servizi di consegna simili. Il sito web è molto facile da usare e ho potuto trovare tutti i prodotti che cercavo in pochi minuti. Il processo di pagamento era anche abbastanza semplice e non ho avuto alcun problema con il mio metodo di pagamento preferito.</p>
                </div>
            </div>
            <!--BOX-3-------------->
            <div class="testimonial-box">
                <!--top------------------------->
                <div class="box-top">
                    <!--profile----->
                    <div class="profile">
                        <!--img---->
                        <div class="profile-img">
                            <img src="../../public/img/harry.jpg" />
                        </div>
                        <!--name-and-username-->
                        <div class="name-user">
                            <strong>Harry Potter</strong>
                            <span>@DanielRedclief</span>
                        </div>
                    </div>
                    <!--reviews------>
                    <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i><!--Empty star-->
                    </div>
                </div>
                <!--Comments---------------------------------------->
                <div class="client-comment">
                    <p>Recentemente ho avuto occasione di servirmi del servizio di consegna di Code_eat e, devo ammettere, sono rimasta piacevolmente colpita dall'efficienza e dalla precisione della consegna. Ho ordinato una pizza e l'ho ricevuta nei tempi specificati. Anche il prezzo è stato abbastanza accessibile..</p>
                </div>
            </div>
            <!--BOX-4-------------->
            <div class="testimonial-box">
                <!--top------------------------->
                <div class="box-top">
                    <!--profile----->
                    <div class="profile">
                        <!--img---->
                        <div class="profile-img">
                            <img src="../../public/img/persona3F.jpeg" />
                        </div>
                        <!--name-and-username-->
                        <div class="name-user">
                            <strong>Oliva</strong>
                            <span>@Olivaadward</span>
                        </div>
                    </div>
                    <!--reviews------>
                    <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i><!--Empty star-->
                    </div>
                </div>
                <!--Comments---------------------------------------->
                <div class="client-comment">
                    <p> Consiglio vivamente Code_eat a chiunque cercasse un servizio di consegna affidabile ed efficiente. Il servizio è veloce, conveniente e offre una buona esperienza utente. Non avrei potuto chiedere di meglio.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- FINE RECENSIONI -->






    </section>


</template>

<script>
import TextAnimationAbout from '../components/TextAnimationAbout.vue';
import CarouselAboutTeam from '../components/CarouselAboutTeam.vue';
import TextAnimationComments from '../components/TextAnimationComments.vue';
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Restaurants',

    components: {
        TextAnimationAbout,
        CarouselAboutTeam,
        TextAnimationComments,

    },
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;



.about-container{
    position: relative;
    height: 100vh;
    overflow-x: hidden;
}



.blobtainer {
    height: 100vh;
    top: 1%;
    right: -40%;
    z-index: -10;

}

.blob {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22719.88%22 height=%22653.424%22 viewBox=%22131.714 172.967 719.88 653.424%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M823 616.5Q777 733 661 743t-244 66.5q-128 56.5-160.5-76t-99-257.5Q91 351 196 253t231-76q126 22 256 41t158 150.5q28 131.5-18 248Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.15 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23F4F1BB%22 d=%22M823 616.5Q777 733 661 743t-244 66.5q-128 56.5-160.5-76t-99-257.5Q91 351 196 253t231-76q126 22 256 41t158 150.5q28 131.5-18 248Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

.blob3 {

width: 100%;
height: 100%;
background-size: contain;
background-repeat: no-repeat;
background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22739.408%22 height=%22614.268%22 viewBox=%22187.485 208.685 739.408 614.268%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M884 682q-94 182-268.5 129t-309-103q-134.5-50-117-199.5t135.5-205q118-55.5 273.5-89t267.5 126Q978 500 884 682Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.35 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23ed6a5a%22 d=%22M884 682q-94 182-268.5 129t-309-103q-134.5-50-117-199.5t135.5-205q118-55.5 273.5-89t267.5 126Q978 500 884 682Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");

}

.blobtainer3 {
    height: 100vh;
    top: 80%;
  left: -10%;
    z-index: -15;
    // transform: rotate(140deg);

}

.cont-pading{
   padding-top: 100px;
   padding-bottom: 100px;
}


// RECENSIONI

a{
    text-decoration: none;
}
#testimonials{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
}
.testimonial-heading{
    letter-spacing: 1px;
    margin: 30px 0px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.testimonial-heading h1{
    font-size: 2.2rem;
    font-weight: 500;
    background-color: #202020;
    color: #ffffff;
    padding: 10px 20px;
}
.testimonial-heading span{
    font-size: 1.3rem;
    color: #252525;
    margin-bottom: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.testimonial-box-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width:100%;
}
.testimonial-box{
    width:500px;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
    background-color: #ffffff;
    padding: 20px;
    margin: 15px;
    cursor: pointer;
    box-shadow: 8px 13px 19px 0px #000000;

}
.profile-img{
    width:50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
}
.profile-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.profile{
    display: flex;
    align-items: center;
}
.name-user{
    display: flex;
    flex-direction: column;
}
.name-user strong{
    color: #3d3d3d;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
}
.name-user span{
    color: #979797;
    font-size: 0.8rem;
}
.reviews{
    color: #f9d71c;
}
.box-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.client-comment p{
    font-size: 0.9rem;
    color: #4b4b4b;
}
.testimonial-box:hover{
    transform: translateY(-10px);
    transition: all ease 0.3s;
}
 
@media(max-width:1060px){
    .testimonial-box{
        width:45%;
        padding: 10px;
    }
}
@media(max-width:790px){
    .testimonial-box{
        width:100%;
    }
    .testimonial-heading h1{
        font-size: 1.4rem;
    }
}
@media(max-width:340px){
    .box-top{
        flex-wrap: wrap;
        margin-bottom: 10px;
    }
    .reviews{
        margin-top: 10px;
    }
}
::selection{
    color: #ffffff;
    background-color: #252525;
}
 
  


</style>