<script setup lang="ts">
import { defineEmits } from 'vue'

const face = ['ИП', 'ЮР', 'Организация']
const selectedFace = defineModel()
const emit = defineEmits(['update:modelValue'])

if(!selectedFace.value){
    selectedFace.value = face[0]
}
</script>

<template>
    <UInputMenu v-model="selectedFace" :options="face" />
</template>


<style lang="scss"></style>