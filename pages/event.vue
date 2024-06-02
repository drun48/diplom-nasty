<script setup lang="ts">
import EventTable from '~/components/modules/EventTable.vue'
import { useAppStore } from '@/store/app.ts'
const appStore = useAppStore()
appStore.currentTitle = 'Мероприятия'

</script>

<template>
    <EventTable />
</template>


<style lang="scss" scoped></style>