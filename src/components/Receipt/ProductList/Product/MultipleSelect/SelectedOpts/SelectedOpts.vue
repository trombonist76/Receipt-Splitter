<script setup>
  import SelectedOpt from "./SelectedOpt.vue"
  import {computed} from 'vue';

  const props = defineProps(["selectedOptions","removeSelected"])
  const isAnySelected = computed(()=> props.selectedOptions.length > 0)

</script>
<template>
  <template v-if="isAnySelected">
    <SelectedOpt v-for="selected in props.selectedOptions" :key="selected.id" :selected="selected" :removeSelected="props.removeSelected"/>
  </template>
    <div v-else class="text-gray-400 text-sm text-center" >Kişi Seçin</div>
</template>