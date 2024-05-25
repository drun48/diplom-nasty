<script setup lang="ts">
import CardCalendar from '~/components/modules/CardCalendar.vue'

const props = defineProps<{
    title: string,
    discription: string,
    date: Date
}>()

const colors = {
    disable: '#F0F0F0',
    now: '#87CEFA',
    active: '#ADD8E6'
}

</script>

<template>
    <CardCalendar :title="title" :discription="discription" :date="date" :statusColor="colors" />
</template>

<style lang="scss" scoped></style>