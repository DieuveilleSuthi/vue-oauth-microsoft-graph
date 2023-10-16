<template>
    <div class="corps">
        <p>Here content of the HomePage</p>
        <base-button
            :isDisabled="isPending"
            :color="color"
            @click.stop.prevent ="handleAsyncClick"
            >
            <font-awesome-icon
                v-if="isPending"
                :icon="['fas', 'circle-notch']"
                pulse
            />
            Disabled and animated for 2 seconds if clicked
            <slot />
        </base-button>
    </div>
  </template>
  
  <script>
  import BaseButton from './BaseButton.vue';
  
  export default {
    name: 'AsyncButton',
    components: { BaseButton },
    inheritAttrs: false,
  
    props: {
      color: {
        type: String,
        default: 'primary'
      }
    },
  
    data () {
      return {
        isPending: false
      }
    },
  
    methods: {
        async handleAsyncClick() {
        // Simulate an asynchronous action that takes 2 seconds
        await new Promise(resolve => {
            setTimeout(() => {
            resolve();
            }, 2000); // 2 seconds
        });

        console.log('Button clicked after 2 seconds');
        this.isPending = true
        },
    }
  }
  </script>
<style scoped>
.corps{
    padding: 300px;
}
p{
    margin-bottom: 0;
}
</style>