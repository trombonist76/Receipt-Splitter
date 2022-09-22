<script setup>
  import { provide,onMounted,ref } from 'vue'
  import {nanoid} from "nanoid"
  import Receipt from '@/components/Receipt/Receipt.vue';
  import {getPayers, getProducts, createNewPayerName} from '@/service/service'
import { counter } from '@fortawesome/fontawesome-svg-core';

  const payers = ref([])
  const products = ref([])
    

  onMounted(async () => {
    const payersData = await getPayers()
    const productsData = await getProducts()
    products.value = productsData       
    payers.value = payersData
  })

  

  const addProduct = () => {
    const product = {
      id: nanoid(),
      name: "",
      count:1
    }
    products.value.push(product)
  }

  const deleteProduct = (product) => {
    products.value = products.value.filter(item => product.id !== item.id)
  }

  const addPayer = () => {
    const name = createNewPayerName(payers.value)
    const payer = {
      id: nanoid(),
      name
    }
    payers.value.push(payer)
  }

  const deletePayer = (payer) => {
    payers.value = payers.value.filter(item => payer.id !== item.id)
  }

  provide("payers", {payers,addPayer,deletePayer})
  provide("products", {products,addProduct,deleteProduct})

</script>

<template>
  <div class="flex justify-center h-full sm:h-auto sm:mt-12 sm:mb-12">
    <Receipt/>
  </div>
</template>

