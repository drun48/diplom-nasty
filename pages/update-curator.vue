<script setup lang="ts">
import FormCurator from '~/components/modules/FormCurator.vue'
import { useAppStore } from '@/store/app.ts'
const appStore = useAppStore()
appStore.currentTitle = 'Редактирование куратора'

const form = ref({})
</script>

<template>
    <FormCurator v-model="form" />
</template>

<style lang="scss" scoped></style>