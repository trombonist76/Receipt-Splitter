<script setup>
import { inject,computed } from 'vue';
import { getProductPayers } from '@/service/service';
import BillingList from './BillingList/BillingList.vue';

  const {products} = inject("products")
  const {payers} = inject("payers")
  const title = "Hesap Özeti"
  const billings = computed(() => { return payers.value.reduce((payerObj,curPayer) => {
  const items = products.value.filter(product=>getProductPayers(product,curPayer))
  const total = items.reduce((a,b)=> a + (b.price / b.payers.length) * b.count , 0)
    payerObj[curPayer.name] = {
      payerName:curPayer.name,
      // item,
      total
      }
    if(!payerObj["totalPrice"]) payerObj["totalPrice"] = 0
    payerObj["totalPrice"] = payerObj["totalPrice"] + total
    return payerObj
  },{})})


</script>

<template>
  
  <h3>{{title}}</h3>
  <BillingList :billings="billings"/>
</template>