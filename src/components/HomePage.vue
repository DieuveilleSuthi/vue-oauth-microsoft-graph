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
            Disabled and animated for {{ clickCount }} seconds if clicked
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
        isPending: false,
        clickCount: 0,
      }
    },
  
    methods: {
        async handleAsyncClick() {
        
        this.clickCount++;

        const delay = this.clickCount * 1000
        await new Promise(resolve => {
            setTimeout(() => {
            resolve();
            }, delay); // 2 seconds
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