<script setup>
  import { inject,ref  } from 'vue';
  import MultipleSelect from './MultipleSelect/MultipleSelect.vue';
  import Button from '@/components/Receipt/Shared/Button.vue';
import CounterInput from '../../Shared/CounterInput.vue';

  const props = defineProps(["product","deleteProduct"])
  const {payers} = inject("payers")
  const priceInput = ref(null)
  const handleClick = () => {
    console.log('priceInput.value :>> ', priceInput.value);
    if (!props.product.price) priceInput.value.focus()
  }

</script>
<template>
  <div class="flex gap-2.5 mb-4" >
    <div class="flex flex-col sticky top-4 self-baseline ">
      <Button styleType="delete-btn"  @click="deleteProduct(product)" icon="trash"/>
      <CounterInput v-model="props.product.count" class="self-baseline w-full"/>
    </div>

    <div class="flex flex-col flex-1 gap-1">
      <input class="input" placeholder="Ürün Adı" type="text" v-model="props.product.name">
      <div class="flex flex-1 border border-dark items-center focus-within:border-white bg-dark"> 
        <input ref="priceInput" class="input border-none" placeholder="Ürün Fiyatı" min=0 max="100000" oninput="validity.valid||(value='')" type="number" v-model="props.product.price">
        <span class="pr-2 sm:px-2  border-gray-400" >₺</span>
      </div>
    
    </div>
    <MultipleSelect @click="handleClick" :disabled="!props.product.price" :options="payers" v-model="props.product.payers"/>
    
    
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