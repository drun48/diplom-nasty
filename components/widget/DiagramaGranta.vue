<script setup lang="ts">
import { ref } from "vue"
import { getNowDay, formatDateToGranta, getDateWithoutTime } from '../../utils/utilDate'
import rangeDate from '../UI/rangeDate.vue'
import { GET_LIST_TASK } from '@/query/task/index'

import * as dayjs from 'dayjs'
import 'dayjs/locale/ru'
dayjs.locale('ru')

const { result: listTask } = useQuery(GET_LIST_TASK, null, { fetchPolicy: 'cache-and-network' })

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

const listTaskGrant = computed(() => {
    return listTask.value?.getTasks?.map((item) => ([{
        myBeginDate: formatDateToGranta(item.dateStart),
        myEndDate: formatDateToGranta(item.dateEnd),
        label: `Задача №${item.id}`,
        ganttBarConfig: {
            id: item.id,
            hasHandles: false,
            style: {
                background: "#e09b69",
                borderRadius: "20px",
                color: "black"
            },
            class: "foo"
        }
    }])) ?? []
})

const listToDayTask = computed(() => {
    return listTaskGrant.value.filter(item => (+startDay.value - +getDateWithoutTime(new Date(item[0].myBeginDate))) >= 0 && (+startDay.value - +getDateWithoutTime(new Date(item[0].myEndDate))) <= 0)
})

const goTask = (id: number) => {
    useRouter().push(`update-task-${id}`)
}
</script>

<template>
    <div class="flex flex-col gap:4">
        <div>
            <rangeDate :label="strCurrentDayString" @changeDate="changeDate"></rangeDate>
        </div>
        <g-gantt-chart :chart-start="currentRange.start" :chart-end="currentRange.end" precision="hour"
            bar-start="myBeginDate" bar-end="myEndDate">
            <g-gantt-row v-for="item in listToDayTask" :key="item[0].ganttBarConfig.id" :label="item[0].label"
                :bars="item" @click="goTask(item[0].ganttBarConfig.id)" />
        </g-gantt-chart>
    </div>
</template>

<style lang="scss" scoped></style>