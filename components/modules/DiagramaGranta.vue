<script setup lang="ts">
import { ref } from "vue"
import { getNowDay, formatDateToGranta } from '../../utils/utilDate'
import rangeDate from '../UI/rangeDate.vue'

import * as dayjs from 'dayjs'
import 'dayjs/locale/ru'
dayjs.locale('ru')

const startDay = ref(getNowDay())

const currentRange = computed(() => {
    return {
        start: formatDateToGranta(startDay.value),
        end: formatDateToGranta(new Date(startDay.value.getFullYear(), startDay.value.getMonth(), startDay.value.getDate(), 23, 59, 0))
    }
})

const strCurrentDayString = computed(() => {
    return `${formatDayMounth(startDay.value)} ${startDay.value.getFullYear()}`
})

const changeDate = (duration: number) => {
    startDay.value = new Date(startDay.value.getFullYear(), startDay.value.getMonth(), startDay.value.getDate() + duration, 0, 0, 0)
}

const row1BarList = ref([
    {
        myBeginDate: "2024-05-23 08:00",
        myEndDate: "2024-05-23 16:00",
        ganttBarConfig: {
            // each bar must have a nested ganttBarConfig object ...
            id: "unique-id-1", // ... and a unique "id" property
            label: "Lorem ipsum dolor",
            hasHandles: true,
        }
    }
])
const row2BarList = ref([
    {
        myBeginDate: "2024-05-23 00:00",
        myEndDate: "2024-05-23 10:00",
        ganttBarConfig: {
            id: "another-unique-id-2",
            hasHandles: true,
            label: "Hey, look at me",
            style: {
                // arbitrary CSS styling for your bar
                background: "#e09b69",
                borderRadius: "20px",
                color: "black"
            },
            class: "foo" // you can also add CSS classes to your bars!
        }
    }
])
</script>

<template>
    <div class="flex flex-col gap:4">
        <div>
            <rangeDate :label="strCurrentDayString" @changeDate="changeDate"></rangeDate>
        </div>
        <g-gantt-chart :chart-start="currentRange.start" :chart-end="currentRange.end" precision="hour"
            bar-start="myBeginDate" bar-end="myEndDate">
            <g-gantt-row label="My row 1" :bars="row1BarList" />
            <g-gantt-row label="My row 2" :bars="row2BarList" />
        </g-gantt-chart>
    </div>
</template>

<style lang="scss" scoped>
</style>