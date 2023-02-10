<template>
    <div ref="target">
      <Transition :name="animationType">
        <div v-show="animate" class="animated-component">
          <slot />
        </div>
      </Transition>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'fadeIntoView',
    props: {
      animationType: {
        type: String,
        required: false,
        default: 'fade',
      },
    },
    setup() {
      const target = ref();
      const animate = ref(false);
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          animate.value = entry.isIntersecting;
        },
        {
        //   threshold: 0.3,
        },
      );
  
      onMounted(() => {
        observer.observe(target.value);
      });
  
      return {
        target,
        animate,
      };
    },
  };
  </script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
  transition: none;
}
/* Fade animation */
// .fade-enter-active,
// .fade-leave-active {
  
//   transition: all 500ms ease;
// }
// .fade-enter-from,
// .fade-leave-to {
    
//     transform: translateY(50px);
//     opacity: 0;
    
// }

.fade-enter-active {
  transition: all 500ms ease;
}
.fade-enter-from {
  transform: translateY(50px);
  opacity: 0;
}
/* Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
    
  transition: transform 500ms ease;
}
.zoom-enter-from,
.zoom-leave-to {

  transform: scale(0.9);
}
</style>