<script setup>
  import { ref,watchEffect,computed} from 'vue';
  import Options from './Options.vue';
  import SelectedOpts from './SelectedOpts/SelectedOpts.vue';

  const props = defineProps(["options","disabled"])
  const emit = defineEmits(['update:modelValue'])
  const selectedOptions = ref([])

  const selectedOptIds = computed(() => selectedOptions.value.map(selected => selected.id))
  const isinSelectedOpts = (id) => selectedOptIds.value.includes(id)
  const notSelectedOpts = computed(()=> props.options.filter(option => !isinSelectedOpts(option.id) && option.name))
  const notSelectedOptsLength = computed(()=> notSelectedOpts.value.length > 0)

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
    <div v-if="notSelectedOptsLength" class="select-container__options bg-dark-deep" tabindex="1">
      <Options :options="options" :addSelected="addSelected" :notSelectedOpts="notSelectedOpts" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .select-container{
    position: relative;
    display: flex;


    &__input{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items:center;
      gap: 7px;
      row-gap: 10px;
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

    &:focus-within  &__options {
      opacity: 1;
      z-index: 1;
      visibility: visible;
    }


  }
</style>