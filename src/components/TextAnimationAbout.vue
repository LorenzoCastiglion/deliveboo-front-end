<template>
    <h3 ref="targetEl" id="bubble-hover" class="text-center">
        
      <span v-for="(char, idx) in phrase" :key="idx" :data-index="idx" class="hover-char" @mouseover="mouseOverHandler" @mouseleave="removeClasses" >{{ char }}</span>
    </h3>
  </template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'TeamAnimationAbout',
    setup() {
        const phrase = ref("Chi Siamo?")
        const targetEl = ref(null)
        const hoverChars = ref(null)

        onMounted(() => {
  hoverChars.value = document.querySelectorAll('.hover-char')
})

        const removeClasses = () => {
            hoverChars.value.forEach((char) => {
                char.classList.remove("hovered")
                char.classList.remove("hovered-adjacent")
                char.classList.remove("hovered-adjacent-plus")
            })
        }

        const mouseOverHandler = (e) => {
            removeClasses()
            const currentElement = e.target
            const index = parseInt(currentElement.getAttribute("data-index"), 10)
            const prevIndex = index === 0 ? null : index - 1
            const nextIndex = index === phrase.value.length - 1 ? null : index + 1
            const prevPrevIndex = index === 0 ? null : index - 2
            const nextNextIndex = index === phrase.value.length - 1 ? null : index + 2
            const prevEl = prevIndex !== null && document.querySelector(`[data-index="${prevIndex}"]`)
            const nextEl = prevIndex !== null && document.querySelector(`[data-index="${nextIndex}"]`)
            const prevPrevEl = prevIndex !== null && document.querySelector(`[data-index="${prevPrevIndex}"]`)
            const nextNextEl = prevIndex !== null && document.querySelector(`[data-index="${nextNextIndex}"]`)
            e.target.classList.add("hovered")
            prevEl && prevEl.classList.add("hovered-adjacent")
            nextEl && nextEl.classList.add("hovered-adjacent")
            prevPrevEl && prevPrevEl.classList.add("hovered-adjacent-plus")
            nextNextEl && nextNextEl.classList.add("hovered-adjacent-plus")
        }

        return {
            phrase,
            mouseOverHandler,
            removeClasses
        }
    }
}
</script>


<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;


* {
    font-family: 'Mona Sans', sans-serif;
    // transition: all;
    transition:0.15s ease-in-out;
    font-feature-settings: unset;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
}

h3 {
    
    font-size: 200px;
    color:$black;
    font-weight: bold;
    cursor: default;
    letter-spacing: 0.03em;
   
    
}


.hovered {
    color:$acqua;
    font-weight: 900;
    letter-spacing: 0.1em;
    
}

.hovered-adjacent {
    color: $acqua;
    font-weight: 600;
    letter-spacing: 0.09em;
   
}
.hovered-adjacent-plus{
   
    color: $acqua;
    font-weight: 300;
    
    

}

@media (max-width: 768px){
    h3{
        font-size: 50px;
    }
}

</style>