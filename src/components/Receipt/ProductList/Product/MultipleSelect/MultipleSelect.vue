<script setup>
  import { ref,watchEffect,computed} from 'vue';
  import Options from './Options.vue';
  import SelectedOpts from './SelectedOpts/SelectedOpts.vue';
  import Button from '@/components/Receipt/Shared/Button.vue';

  const props = defineProps(["options","disabled"])
  const emit = defineEmits(['update:modelValue'])
  const selectedOptions = ref([])

  const selectedOptIds = computed(() => selectedOptions.value.map(selected => selected.id))
  const isinSelectedOpts = (id) => selectedOptIds.value.includes(id)
  const notSelectedOpts = computed(()=> props.options.filter(option => !isinSelectedOpts(option.id) && option.name))
  const isAnyUnselectedOpts = computed(()=> notSelectedOpts.value.length > 0)
  const isDisabled = computed(()=> (!isAnyUnselectedOpts.value || props.disabled))

  watchEffect(()=>{
    const ids = props.options.map(option => option.id)
    selectedOptions.value = selectedOptions.value.filter(item=> ids.includes(item.id))
    emit("update:modelValue",selectedOptions.value)
  })
  
  const addSelected = (option) => {
    selectedOptions.value.push(option)
  }

  const selectAll = () => {
    selectedOptions.value = props.options
  }

  const removeSelected = (selected) => {
    selectedOptions.value = selectedOptions.value.filter(item => selected.id !== item.id)
  }

</script>

<template>

  <div class="select-container focus:border-white border border-dark bg-dark flex-1 outline-none rounded-sm py-1 px-2">
    <div class="select-container__input" tabindex="0">
      <SelectedOpts :removeSelected="removeSelected" :selectedOptions="selectedOptions" />
    </div>
    <button class="h-full">
      <svg v-show="!isDisabled" class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
    <div v-if="!isDisabled" class="select-container__options bg-dark-deep" tabindex="1">
      <Options :options="options" :addSelected="addSelected" :notSelectedOpts="notSelectedOpts" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .select-container{
    position: relative;
    display: flex;
    align-items: center;


    &__input{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items:center;
      gap: 7px;
      row-gap: 10px;
      height: 100%;
    }

    &__options{
      display: block;
      padding: 10px 15px;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      opacity: 0;
      border-radius: 5px;
      transform: translateY(2px);
      visibility: hidden;
      border-top: 0;
    }

    .icon{
      width: 18px;
      height: 18px;
      transition: transform .4s;
    }

    &:focus-within  &__options {
      opacity: 1;
      z-index: 1;
      visibility: visible;
    }

    &:focus-within  .icon {
      transform: rotate(180deg);
      
    }


  }
</style>