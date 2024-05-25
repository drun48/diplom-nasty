<script setup lang="ts">
import { formatDateRussianOnlyDate, getNowDayTimeMinute } from '~/utils/utilDate'
import Calendar from '~/components/modules/Calendar.vue'
import CardEvent from '~/components/modules/CardEvent.vue';
import CardTask from '~/components/modules/CardTask.vue';
const calendar = ref()

const dateNow = new Date()
const dateYesterday = new Date(new Date().setDate(dateNow.getDate() - 1))
const dateNowNextHours = new Date(new Date().setHours(dateNow.getHours() + 1))
const dateNowNextDay = new Date(new Date().setDate(dateNow.getDate() + 1))

console.log(dateNowNextHours, dateNow)
const listTaskEvent = [
    {
        day: formatDateRussianOnlyDate(dateNow),
        cards: [
            {
                date: getDateTimeMinute(dateNow),
                title: 'Название события сегодня прошло',
                discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
                type: 'Event'
            },
            {
                date: getDateTimeMinute(dateNow),
                title: 'Название задачи сегодня прошло',
                discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
                type: 'Task'
            },
            {
                date: getDateTimeMinute(dateNowNextHours),
                title: 'Название события следующий час',
                discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
                type: 'Event'
            },
            {
                date: getDateTimeMinute(dateNowNextHours),
                title: 'Название задачи следующий час',
                discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
                type: 'Task'
            }
        ]
    },
    {
        day: formatDateRussianOnlyDate(dateYesterday),
        cards: [
            {
                date: getDateTimeMinute(dateYesterday),
                title: 'Название события вчера',
                discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
                type: 'Event'
            },
            {
                date: getDateTimeMinute(dateYesterday),
                title: 'Название задачи вчера',
                discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
                type: 'Task'
            },
        ]
    },
    {
        day: formatDateRussianOnlyDate(dateNowNextDay),
        cards: [
            {
                date: getDateTimeMinute(dateNowNextDay),
                title: 'Название события завтра',
                discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
                type: 'Event'
            },
            {
                date: getDateTimeMinute(dateNowNextDay),
                title: 'Название задачи завтра',
                discription: 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание',
                type: 'Task'
            }
        ]
    },
]
</script>

<template>
    <div>
        <Calendar ref="calendar">
            <template v-for="(item, key) in listTaskEvent" v-slot:[item.day] :key="key">
                <div v-for="(card, index) in item.cards" :key="index">
                    <CardEvent v-if="card.type === 'Event'" v-bind="card" />
                    <CardTask v-if="card.type === 'Task'" v-bind="card" />
                </div>
            </template>
        </Calendar>
    </div>
</template>

<style></style>