<script setup lang="ts">
import CardCalendar from '~/components/modules/CardCalendar.vue'

const props = defineProps<{
    title: string,
    discription: string,
    dateStart: Date,
    dateEnd: Date
}>()

const colors = {
    disable: '#F0F0F0',
    now: '#87CEFA',
    active: '#ADD8E6'
}

</script>

<template>
    <CardCalendar v-bind="props" :statusColor="colors" />
</template>

<style lang="scss" scoped></style>