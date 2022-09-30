<script setup>
import Billing from './Billing.vue';
  const props = defineProps(["billings"])
</script>
<template>
  <div class="flex flex-col gap-3">
    <div class="grid grid-cols-6 gap-y-2">
      <div class="col-span-4 col-start-1 pl-5">Ad</div>
      <div class="col-span-2 col-start-5 text-center">Toplam Tutar</div>
      <Billing v-for="billing in props.billings"  :payerName="billing.payerName" :total="billing.total" />
      <Billing  payerName="Toplam Tutar" :total="props.billings.totalPrice" />
     
    </div>
  </div>
</template>