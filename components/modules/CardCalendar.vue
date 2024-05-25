<script setup lang="ts">
import Card from '~/components/UI/Card.vue'
import { getNowDayTimeMinute, getTime } from '~/utils/utilDate'

const props = defineProps<{
    title: string,
    discription: string,
    dateStart: Date,
    dateEnd: Date,
    statusColor: {
        disable: string,
        active: string,
        now: string,
    }
}>()

const date = ref<Date>(getNowDayTimeMinute())
setInterval(() => {
    date.value = getNowDayTimeMinute()
}, 60000)

const status = computed(() => {
    const value = +props.dateStart - +date.value
    const valueHours = Math.floor((value / (1000 * 60 * 60)))
    if (value <= 0) return props.statusColor.disable
    else if (props.dateStart.getFullYear() === date.value.getFullYear()
        && props.dateStart.getMonth() === date.value.getMonth()
        && props.dateStart.getDate() === date.value.getDate()) return props.statusColor.now
    else return props.statusColor.active
})

const labelTime = computed(() => {
    return `${getTime(props.dateStart)} - ${getTime(props.dateEnd)}`
})
</script>

<template>
    <Card :label="labelTime" :title="title" :tooltip="discription" :color="status" />
</template>

<style lang="scss" scoped></style>