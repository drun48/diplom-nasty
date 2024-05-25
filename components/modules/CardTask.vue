<script setup lang="ts">
import CardCalendar from '~/components/modules/CardCalendar.vue'

const props = defineProps<{
    title: string,
    discription: string,
    date: Date
}>()

const colors = {
    disable: '#F0F0F0',
    now: '#FFDAB9',
    active: '#90EE90'
}

</script>

<template>
    <CardCalendar :title="title" :discription="discription" :date="date" :statusColor="colors" />
</template>

<style lang="scss" scoped></style>