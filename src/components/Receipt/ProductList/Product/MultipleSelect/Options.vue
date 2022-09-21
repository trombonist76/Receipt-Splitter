<script setup>
  const props = defineProps(["options", "addSelected", "notSelectedOpts","selectAll"])
</script>

<template>
    <div>
      <button
        v-if="props.selectAll"
        class="option" 
        @click="props.selectAll" 
        value="Herkes">
        Herkes
      </button>
      <button
        class="option" 
        @click="props.addSelected(option)" 
        v-for="option in props.notSelectedOpts" 
        :key="option.id" 
        :value="option.name">
        {{option.name}}
      </button>
    </div>
</template>

<style lang="scss" scoped>
  .option{
    display: block;
    padding: 6px 0;
    margin-bottom: 10px;
    width: 100%;
    transition: all .3s;
    background-color: #16213E;
    border-radius: 5px;
    
    &:hover{
      background: #EEEEEE;
      color: black;
    }

    &:disabled{
      color: #ccc;
    }
  }
    
</style>