<template>
    <div class="corps">
         <p>Here comes the content of the HomePage</p>
         <BaseButton>BaseButton with custom margin</BaseButton>
         <BaseButton :is-disabled="true">BaseButton Disabled</BaseButton>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
};
</script>

<style scoped>
.corps{
    padding: 300px;
    
}

p{
    margin-bottom:0;
}
</style>