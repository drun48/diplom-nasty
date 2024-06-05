<script setup lang="ts">
import { formatDateRussianOnlyDate, getNowDayTimeMinute } from '~/utils/utilDate'
import Calendar from '~/components/modules/Calendar.vue'
import CardEvent from '~/components/modules/CardEvent.vue';
import CardTask from '~/components/modules/CardTask.vue';
import { GET_LIST_EVENT } from '@/query/event/index'
import { GET_LIST_TASK } from '@/query/task/index'
const calendar = ref()

const dateNow = new Date()
const dateYesterday = new Date(new Date().setDate(dateNow.getDate() - 1))
const dateNowNextHours = new Date(new Date().setHours(dateNow.getHours() + 1))
const dateNowNextDay = new Date(new Date().setDate(dateNow.getDate() + 1))

const { result: listEvent } = useQuery(GET_LIST_EVENT, { fetchPolicy: 'cache-and-network' })
const { result: listTask } = useQuery(GET_LIST_TASK, { fetchPolicy: 'cache-and-network' })

// const listTaskEvent = [
//     {
//         day: formatDateRussianOnlyDate(dateNow),
//         cards: [
//             {
//                 dateStart: getDateTimeMinute(dateNow),
//                 dateEnd: getDateTimeMinute(dateNow),
//                 title: 'Название события сегодня прошло',
//                 discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
//                 type: 'Event'
//             },
//             {
//                 dateStart: getDateTimeMinute(dateNow),
//                 dateEnd: getDateTimeMinute(dateNow),
//                 title: 'Название задачи сегодня прошло',
//                 discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
//                 type: 'Task'
//             },
//             {
//                 dateStart: getDateTimeMinute(dateNowNextHours),
//                 dateEnd: getDateTimeMinute(dateNowNextHours),
//                 title: 'Название события следующий час',
//                 discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
//                 type: 'Event'
//             },
//             {
//                 dateStart: getDateTimeMinute(dateNowNextHours),
//                 dateEnd: getDateTimeMinute(dateNowNextHours),
//                 title: 'Название задачи следующий час',
//                 discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
//                 type: 'Task'
//             }
//         ]
//     },
//     {
//         day: formatDateRussianOnlyDate(dateYesterday),
//         cards: [
//             {
//                 dateStart: getDateTimeMinute(dateYesterday),
//                 dateEnd: getDateTimeMinute(dateYesterday),
//                 title: 'Название события вчера',
//                 discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
//                 type: 'Event'
//             },
//             {
//                 dateStart: getDateTimeMinute(dateYesterday),
//                 dateEnd: getDateTimeMinute(dateYesterday),
//                 title: 'Название задачи вчера',
//                 discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
//                 type: 'Task'
//             },
//         ]
//     },
//     {
//         day: formatDateRussianOnlyDate(dateNowNextDay),
//         cards: [
//             {
//                 dateStart: getDateTimeMinute(dateNowNextDay),
//                 dateEnd: getDateTimeMinute(dateNowNextDay),
//                 title: 'Название события завтра',
//                 discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
//                 type: 'Event'
//             },
//             {
//                 dateStart: getDateTimeMinute(dateNowNextDay),
//                 dateEnd: getDateTimeMinute(dateNowNextDay),
//                 title: 'Название задачи завтра',
//                 discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
//                 type: 'Task'
//             }
//         ]
//     },
// ]

const events = computed(() => {
    return listEvent?.value?.getEvents.map((item) => ({
        type: 'Event',
        title: item.name,
        dateStart: getDateTimeMinute(new Date(item.dateStart)),
        dateEnd: getDateTimeMinute(new Date(item.dateEnd)),
        day: item.dateStart,
        id: item.id,
        discription: item.description
    })) ?? []
})

const tasks = computed(() => {
    return listTask?.value?.getTasks.map((item) => ({
        type: 'Task',
        title: '',
        dateStart: getDateTimeMinute(new Date(item.dateStart)),
        dateEnd: getDateTimeMinute(new Date(item.dateEnd)),
        day: item.dateStart,
        id: item.id,
        discription: item.description
    })) ?? []
})

const listTaskEvent = computed(() => {
    const list = [...events.value, ...tasks.value]
    const obj = list.reduce((res, item) => {
        if (!res[formatDateRussianOnlyDate(item.day)]) res[formatDateRussianOnlyDate(item.day)] = []
        res[formatDateRussianOnlyDate(item.day)].push(item)
        return res
    }, {})
    return Object.entries(obj).map(([key, value]) => ({
        day: key,
        cards: value
    }))
})
</script>

<template>
    <div>
        <Calendar ref="calendar">
            <template v-for="(item, key) in listTaskEvent" v-slot:[item.day] :key="key">
                <div v-for="(card, index) in item.cards" :key="index">
                    <CardEvent v-if="card.type === 'Event'" v-bind="card" class="w-full" />
                    <CardTask v-if="card.type === 'Task'" v-bind="card" class="w-full" />
                </div>
            </template>
        </Calendar>
    </div>
</template>

<style></style>