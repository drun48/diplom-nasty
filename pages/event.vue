<script setup lang="ts">
import EventTable from '~/components/widget/EventTable.vue'
import { useAppStore } from '@/store/app.ts'
import validateRoute from '@/validateRoute/index'
definePageMeta({
  validate: validateRoute('ADMIN')
})
const appStore = useAppStore()
appStore.currentTitle = 'Мероприятия'

</script>

<template>
    <EventTable />
</template>


<style lang="scss" scoped></style>