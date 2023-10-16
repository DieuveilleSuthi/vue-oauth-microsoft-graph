<template>
    <div class="corps">
         <p>Here comes the content of the HomePage</p>
         <BaseButton>BaseButton with custom margin</BaseButton>
         <BaseButton :is-disabled="true">BaseButton Disabled</BaseButton>
         <BaseButton class="un">BaseButton with color props</BaseButton>
         <BaseButton class="deux">BaseButton with color props</BaseButton>
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
.un{
    background-color: rgb(231, 23, 23);
}

.deux{
    background-color: rgb(153, 48, 48);
}
p{
    margin-bottom:0;
}
</style>