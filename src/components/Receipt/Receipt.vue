<script setup>
  import PayerList from './PayerList/PayerList.vue';
  import ProductList from './ProductList/ProductList.vue';
  import ShowBillings from './ShowBillings/ShowBillings.vue';
  const title = "Alışveriş Fişi Bilgileri"

</script>
<template>
  <div class="w-full h-screen sm:h-auto sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-2/5 flex flex-col gap-6 px-5 py-8 rounded-md bg-dark-deep ">
    <h1 class="pb-5 text-2xl text-center">{{title}}</h1>
    <PayerList/>
    <ProductList/>
    <ShowBillings/>
  </div>
</template>