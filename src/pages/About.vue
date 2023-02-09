<template>

    test di cose
    <div style="min-height: 100vh">
        <FadeIntoView>
            <div class="demo">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque fuga quod, temporibus aliquam aliquid exercitationem quis distinctio voluptatem quisquam ipsa expedita delectus sint excepturi itaque necessitatibus molestias! Repudiandae dignissimos qui illo et accusamus, quo magni repellat error incidunt voluptates provident sunt nisi ex facere totam temporibus expedita sapiente cum numquam dolorem. Nesciunt esse, reprehenderit nulla explicabo provident a blanditiis, quaerat fugiat maiores quidem ab tempora corrupti quas, officiis distinctio non. Animi, veniam voluptatem. Pariatur repellendus fugit, veritatis at maiores aut consectetur sequi quis. Sed quasi laboriosam, vel voluptatum delectus a, nihil dolore earum, provident iure eius distinctio doloremque dolores consectetur.
        </div>
        </FadeIntoView>
        <FadeIntoView>
            <div class="demo">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque fuga quod, temporibus aliquam aliquid exercitationem quis distinctio voluptatem quisquam ipsa expedita delectus sint excepturi itaque necessitatibus molestias! Repudiandae dignissimos qui illo et accusamus, quo magni repellat error incidunt voluptates provident sunt nisi ex facere totam temporibus expedita sapiente cum numquam dolorem. Nesciunt esse, reprehenderit nulla explicabo provident a blanditiis, quaerat fugiat maiores quidem ab tempora corrupti quas, officiis distinctio non. Animi, veniam voluptatem. Pariatur repellendus fugit, veritatis at maiores aut consectetur sequi quis. Sed quasi laboriosam, vel voluptatum delectus a, nihil dolore earum, provident iure eius distinctio doloremque dolores consectetur.
        </div>
        </FadeIntoView>
        <FadeIntoView>
            <div class="demo">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque fuga quod, temporibus aliquam aliquid exercitationem quis distinctio voluptatem quisquam ipsa expedita delectus sint excepturi itaque necessitatibus molestias! Repudiandae dignissimos qui illo et accusamus, quo magni repellat error incidunt voluptates provident sunt nisi ex facere totam temporibus expedita sapiente cum numquam dolorem. Nesciunt esse, reprehenderit nulla explicabo provident a blanditiis, quaerat fugiat maiores quidem ab tempora corrupti quas, officiis distinctio non. Animi, veniam voluptatem. Pariatur repellendus fugit, veritatis at maiores aut consectetur sequi quis. Sed quasi laboriosam, vel voluptatum delectus a, nihil dolore earum, provident iure eius distinctio doloremque dolores consectetur.
        </div>
        </FadeIntoView>
    </div>

</template>

<script>
import FadeIntoView from '../components/FadeIntoView.vue';

    export default {
        name: 'About',

        components: {
            FadeIntoView
        }

    }
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;
.demo {
  max-width: 600px;
  border: 2px solid #2c3e50;
  padding: 2rem;
  margin: 2rem auto;
  background-color: #42b983;
}


</style>