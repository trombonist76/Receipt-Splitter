<script setup>
  import { provide,onMounted,ref } from 'vue'
  import {nanoid} from "nanoid"
  import Receipt from '@/components/Receipt/Receipt.vue';
  import {getPayers, getProducts, createNewPayerName} from '@/service/service'

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
      name: ""
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
  <div class="flex justify-center items-center h-full md:mt-12 md:mb-12">
    <Receipt/>
  </div>
</template>

