<script setup>
  const props = defineProps(["selected","removeSelected"])
</script>

<template>
  <span @click="removeSelected(props.selected)" class="selected">{{props.selected.name}}</span>
</template>

<style lang="scss" scoped>
  .selected{
    padding: 5px 10px;
    border-radius: 15px;
    background-color: tomato;
    font-size: 13px;
    user-select: none;
    }
</style>