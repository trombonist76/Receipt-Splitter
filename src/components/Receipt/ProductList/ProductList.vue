<script setup>
  import Product from './Product/Product.vue';
  import Button from '@/components/Receipt/Shared/Button.vue';
  
  import { inject } from 'vue';
  const {products, addProduct, deleteProduct} = inject("products")
  const title = "Alınan Ürünler"
</script>

<template>
  <h3>{{title}}</h3>
  <div>
    <Product v-for="product in products" :key="product.id" :product="product" :deleteProduct="deleteProduct"/>
    <Button class="btn w-full rounded-full mt-2" @click="addProduct" icon="plus">&nbsp;Yeni Ürün Ekle</Button>
  </div>
</template>
