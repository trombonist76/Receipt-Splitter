<script setup>
import { inject, ref, computed } from 'vue';
import Button from '@/components/Receipt/Shared/Button.vue';

  const props = defineProps(["payer","deletePayer"])
  const {payers} = inject("payers")
  const nameInput = ref(null)
  const updatedPayerName = ref(props.payer.name)
  const isDifferent = computed(() => updatedPayerName.value !== props.payer.name || !props.payer.name)
  const isAnotherSameName = computed(() => payers.value.filter(payer => updatedPayerName.value === payer.name && isDifferent.value).length > 0)
  const hasError = computed(() => isAnotherSameName.value ? "Bu kullanıcı adı zaten kullanılıyor!" : false)

  const changePayerName = (event) => {
    if(event.target.value && !hasError.value){
      props.payer.name = updatedPayerName.value
      nameInput.value.blur()
      localStorage.setItem("payers",JSON.stringify(payers.value))
    }
    updatedPayerName.value = props.payer.name
  }


</script>

<template>
    <div class="flex gap-2.5 mb-2">
      <input ref="nameInput" class="input" @blur="changePayerName" :class="{'border border-red-400':hasError}"  type="text" v-model.trim="updatedPayerName" tabindex="0">
      <Button @click="props.deletePayer(payer)" styleType="delete-btn" icon="trash"/>
    </div>
  <div class="text-red-600 text-sm" v-if="hasError">{{hasError}}</div>

</template>