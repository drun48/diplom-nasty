<script setup lang="ts">
import { ref } from "vue"
import * as dayjs from 'dayjs'
import 'dayjs/locale/ru'
dayjs.locale('ru')

const row1BarList = ref([
    {
        myBeginDate: "2021-07-12 13:00",
        myEndDate: "2021-07-12 19:00",
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
        myBeginDate: "2021-07-12 00:00",
        myEndDate: "2021-07-12 03:00",
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
    <g-gantt-chart chart-start="2021-07-12 00:00" chart-end="2021-07-12 23:59" precision="hour" bar-start="myBeginDate"
        bar-end="myEndDate" >
        <g-gantt-row label="My row 1" :bars="row1BarList" />
        <g-gantt-row label="My row 2" :bars="row2BarList" />
    </g-gantt-chart>
</template>

<style lang="scss"></style>