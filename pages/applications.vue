<script setup lang="ts">
import ApplicationsCard from '~/components/widget/ApplicationsCard.vue';
import { useAppStore } from '@/store/app.ts'
const appStore = useAppStore()
appStore.currentTitle = 'Обращения'

const list = ref([
    {
        id: 1,
        citizen: {
            name: 'Иванов Иван Иваныч',
            phone: '89006008913'
        },
        comments: ['Текст сообщение', 'Текст сообщение', 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание'],
        support_measures: [1, 2],
        request_date: new Date()
    },
    {
        id: 2,
        citizen: {
            name: 'Иванов Иван Иваныч',
            phone: '89006008913'
        },
        comments: ['Текст сообщение', 'Текст сообщение', 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание'],
        support_measures: [1, 2],
        request_date: new Date(),
        confirm_date: new Date()
    },
    {
        id: 3,
        citizen: {
            name: 'Иванов Иван Иваныч',
            phone: '89006008913'
        },
        comments: ['Текст сообщение', 'Текст сообщение', 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание'],
        support_measures: [1, 2],
        request_date: new Date(),
        confirm_date: new Date(),
        end_date: new Date()
    }
])

const filter = ref(1)

const filterList = computed(() => {
    if (filter.value === 0) return list.value
    return list.value.filter(filterStatus) ?? []
})

const filterStatus = (applications: any): boolean => {
    if (filter.value === 1) return !Boolean(applications.confirm_date)
    if (filter.value === 2) return Boolean(applications.confirm_date) && !Boolean(applications.end_date)
    if (filter.value === 3) return Boolean(applications.end_date)
    return false
}
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex gap-2">
            <UButton :class="`${filter === 1 ? 'active' : ''} btn-filter`" @click="filter = 1">Необработанные заявки
            </UButton>
            <UButton :class="`${filter === 2 ? 'active' : ''} btn-filter`" @click="filter = 2">Заявки в работе</UButton>
            <UButton :class="`${filter === 3 ? 'active' : ''} btn-filter`" @click="filter = 3">Выполненные заявки
            </UButton>
            <UButton :class="`${filter === 0 ? 'active' : ''} btn-filter`" @click="filter = 0">Все заявки</UButton>
        </div>
        <div class="flex flex-col">
            <ApplicationsCard v-for="(item, key) in filterList" :key="key" v-bind="item" />
        </div>
    </div>
</template>

<style lang="scss">
.btn-filter {
    background: #ADB5BD;
}

.active {
    background: #007BFF;
}

.btn-filter:hover {
    background: #007BFF;
}
</style>