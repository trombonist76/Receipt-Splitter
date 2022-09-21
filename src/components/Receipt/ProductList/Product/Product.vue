<script setup>
  import { inject  } from 'vue';
  import MultipleSelect from './MultipleSelect/MultipleSelect.vue';
  import Button from '@/components/Receipt/Shared/Button.vue';

  const props = defineProps(["product","deleteProduct"])
  const {payers} = inject("payers")
  

</script>
<template>
  <div class="flex gap-2.5 mb-4" >
    <div class="flex flex-col flex-1 gap-1">
      <input class="input" placeholder="Ürün Adı" type="text" v-model="props.product.name">
      <div class="flex flex-1 border border-dark items-center focus-within:border-white bg-dark"> 
        <input class="input border-none" placeholder="Ürün Fiyatı" type="number" v-model="props.product.price">
        <span class="pr-2 sm:px-2  border-gray-400" >₺</span>
      </div>
    </div>
    <MultipleSelect :disabled="!props.product.price" :options="payers" v-model="props.product.payers"/>
    <Button styleType="delete-btn" @click="deleteProduct(product)" icon="trash"/>
    
  </div>
</template>

<style>
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
  }

</style>