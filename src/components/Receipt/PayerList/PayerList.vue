<script setup>
  import Payer from './Payer.vue';
  import Button from '@/components/Receipt/Shared/Button.vue';

  import { inject, computed } from 'vue';
  const {payers, addPayer, deletePayer} = inject("payers")
  const isAnyBlankName = computed(()=>payers.value.some(payer => !payer.name))
  const title = "Alışveriş Yapanlar"
</script>

<template>
  <h3>{{title}}</h3>
  <div>
    <Payer v-for="payer in payers" :key="payer.id" :payer="payer" :deletePayer="deletePayer"/>
    <Button :disabled="isAnyBlankName" class="w-full rounded-full btn mt-2" @click="addPayer" icon="plus">&nbsp;Yeni Kişi Ekle</Button>
  </div>
</template>

