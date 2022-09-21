<script setup>
import { computed } from 'vue';

  const props = defineProps(["icon","styleType"])
  const type = computed(()=>props.styleType ? props.styleType : "btn")
</script>
<template>
  <button @click="props.click" :class="type">
    <fa :icon="props.icon" />
    <slot></slot>
  </button>
</template>