<script setup>
import { ref,watch } from 'vue';
import Button from './Button.vue';

  const emit = defineEmits(['update:modelValue'])
  const numberValue = ref(1)
  const min = 1
  const max = 99
  const style = "px-3 md:px-3 text-xs"

  watch(numberValue, ()=> {
    numberValue.value = Math.min(Math.max(min,numberValue.value),max)
    emit("update:modelValue",numberValue.value)
  })

  const increment = () => {
    numberValue.value ++ 
  }

  const decrement = () => {
    numberValue.value --
  }
</script>

<template>
  <div class="flex self-baseline pt-5 flex-col w-9 overflow-hidden">
    <Button @click="increment" icon="plus" :class="style"/>
    <span :value="numberValue" class="input flex-1 rounded-none  flex items-center justify-center pointer-events-none text-center text-xs"  type="number">{{numberValue}}</span>
    <Button @click="decrement" icon="minus" :class="style"/>
  </div>
</template>