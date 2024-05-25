<script setup lang="ts">
import Card from '~/components/UI/Card.vue'
import { getNowDayTimeMinute } from '~/utils/utilDate'

const props = defineProps<{
    title: string,
    discription: string,
    date: Date,
    statusColor: {
        disable: string,
        active: string,
        now: string,
    }
}>()

const date = ref<Date>(getNowDayTimeMinute())

const status = computed(() => {
    const value = +props.date - +date.value
    const valueHours = Math.floor((value / (1000 * 60 * 60)))
    if (value <= 0) return props.statusColor.disable
    else if (props.date.getFullYear() === date.value.getFullYear()
        && props.date.getMonth() === date.value.getMonth()
        && props.date.getDate() === date.value.getDate()) return props.statusColor.now
    else return props.statusColor.active
})

setInterval(() => {
    date.value = getNowDayTimeMinute()
}, 60000)
</script>

<template>
    <Card :label="'00:30 - 18:30'" :title="title" :tooltip="discription" :color="status" />
</template>

<style lang="scss" scoped></style>