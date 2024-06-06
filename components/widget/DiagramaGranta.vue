<script setup lang="ts">
import { ref } from "vue"
import { getNowDay, formatDateToGranta, getDateWithoutTime } from '../../utils/utilDate'
import rangeDate from '../UI/rangeDate.vue'
import { GET_LIST_TASK, UPDATE_TASK } from '@/query/task/index'

import * as dayjs from 'dayjs'
import 'dayjs/locale/ru'
dayjs.locale('ru')

const { result: listTask } = useQuery(GET_LIST_TASK, null, { fetchPolicy: 'cache-and-network' })

const { mutate: updateTask } = useMutation(UPDATE_TASK)

const stateEditDate = ref(false)

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

const updateBarDate = ref<Record<string, { start: string, end: string, ctx: any }>>({})

const listTaskGrant = computed(() => {
    return listTask.value?.getTasks?.map((item) => ([{
        myBeginDate: updateBarDate.value[item.id] ? updateBarDate.value[item.id].start : formatDateToGranta(item.dateStart),
        myEndDate: updateBarDate.value[item.id] ? updateBarDate.value[item.id].end : formatDateToGranta(item.dateEnd),
        label: `Задача №${item.id}`,
        value: {
            ...item
        },
        ganttBarConfig: {
            id: item.id,
            hasHandles: stateEditDate.value,
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
    if (stateEditDate.value) return
    useRouter().push(`update-task-${id}`)
}

const DragElement = (val: any) => {
    if (!stateEditDate.value) return
    const { myBeginDate, myEndDate } = val.bar
    updateBarDate.value[val.bar.ganttBarConfig.id] = {
        start: myBeginDate,
        end: myEndDate,
        ctx: val.bar.value
    }
}

const cancel = () => {
    stateEditDate.value = false
    updateBarDate.value = {}
}

const acceptChangeDate = () => {
    stateEditDate.value = false
    Object.entries(updateBarDate.value).forEach(([key, value]) => {
        const variable = {
            description: value.ctx.description,
            activityId: value.ctx.activityId,
            dateStart: new Date(value.start),
            dateEnd: new Date(value.end)
        }
        updateTask({ id: Number(key), data: variable })
    })
}
</script>

<template>
    <div class="flex flex-col gap:4">
        <div class="flex flex-col gap-4 items-start">
            <rangeDate :label="strCurrentDayString" @changeDate="changeDate"></rangeDate>
            <div v-if="!stateEditDate">
                <UButton @click="stateEditDate = true">Редактировать время</UButton>
            </div>
            <div v-else class="flex gap-4">
                <UButton @click="cancel" style="background: #f72424;">Отменить</UButton>
                <UButton @click="acceptChangeDate">Применить</UButton>
            </div>
        </div>
        <g-gantt-chart :chart-start="currentRange.start" :chart-end="currentRange.end" precision="hour"
            bar-start="myBeginDate" bar-end="myEndDate" @drag-bar="DragElement">
            <g-gantt-row v-for="item in listToDayTask" :key="item[0].ganttBarConfig.id" :label="item[0].label"
                :bars="item" @click="goTask(item[0].ganttBarConfig.id)" class="item-task" />
        </g-gantt-chart>
    </div>
</template>

<style lang="scss" scoped>
.item-task {
    cursor: pointer;
}
</style>