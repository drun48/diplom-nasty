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

const { result: listEvent } = useQuery(GET_LIST_EVENT, null, { fetchPolicy: 'cache-and-network' })
const { result: listTask } = useQuery(GET_LIST_TASK, null, { fetchPolicy: 'cache-and-network' })

const events = computed(() => {
    const list = listEvent?.value?.getEvents.map((item) => ({
        type: 'Event',
        title: item.name,
        dateStart: getDateTimeMinute(new Date(item.dateStart)),
        dateEnd: getDateTimeMinute(new Date(item.dateEnd)),
        day: item.dateStart,
        id: item.id,
        discription: item.description
    })) ?? []
    return [...list]
})

const tasks = computed(() => {
    const list = listTask?.value?.getTasks.map((item) => ({
        type: 'Task',
        title: `Задание №${item.id}`,
        dateStart: getDateTimeMinute(new Date(item.dateStart)),
        dateEnd: getDateTimeMinute(new Date(item.dateEnd)),
        day: item.dateStart,
        id: item.id,
        discription: item.description
    })) ?? []
    return [...list]
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

const router = useRouter()
const goToCard = (type: string, id: number) => {
    switch (type) {
        case 'Event':
            router.push(`update-event-${id}`)
            break
        case 'Task':
            router.push(`update-task-${id}`)
            break
    }
}
</script>

<template>
    <div>
        <Calendar ref="calendar">
            <template v-for="(item, key) in listTaskEvent" v-slot:[item.day] :key="key">
                <div v-for="(card, index) in item.cards" :key="index">
                    <CardEvent v-if="card.type === 'Event'" v-bind="card" class="w-full"
                        @click="goToCard(card.type, card.id)" />
                    <CardTask v-if="card.type === 'Task'" v-bind="card" class="w-full"
                        @click="goToCard(card.type, card.id)" />
                </div>
            </template>
        </Calendar>
    </div>
</template>

<style></style>