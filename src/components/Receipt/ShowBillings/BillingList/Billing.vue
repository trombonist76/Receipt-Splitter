<script setup>
  import { computed } from 'vue';
  import {formatNumber} from "@/service/service"
  const props = defineProps(["billing"])
  const formattedTotalPrice = computed(()=> formatNumber(props.billing.total))
</script>
<template>
  <div v-if="billing.payerName" class="col-span-6 grid grid-cols-6 bg-dark p-2 rounded-md items-center">
    <div class="col-span-4 px-4 break-words">{{billing.payerName}}</div>
    <div class="col-span-2 text-center" >{{formattedTotalPrice}}</div>
  </div>
</template>

