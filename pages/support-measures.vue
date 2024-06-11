<script setup lang="ts">
import validateRoute from '@/validateRoute/index'
import SupportMeasuresTable from '@/components/widget/SupportMeasuresTable.vue'

definePageMeta({
    validate: validateRoute('ADMIN')
})

</script>

<template>
    <SupportMeasuresTable />
</template>

<style lang="scss" scoped></style>