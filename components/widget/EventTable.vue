<script setup lang="ts">
import { GET_LIST_EVENT } from '@/query/event/index'
import { formatDateRussian } from '@/utils/utilDate'

const { result: listEvent } = useQuery(GET_LIST_EVENT, null, { fetchPolicy: 'cache-and-network' })
const columns = [
    {
        key: 'name',
        label: 'Название мероприятия'
    }, {
        key: 'description',
        label: 'Описание'
    }, {
        key: 'date',
        label: 'Начало мероприятия - Оконачание мероприятия'
    },
]

const events = computed(() => {
    const list = listEvent?.value?.getEvents.map((item) => ({
        id: item.id,
        name: item.name,
        date: `${formatDateRussian(new Date(item.dateStart))} - ${formatDateRussian(new Date(item.dateEnd))}`,
        description: item.description
    })) ?? []
    return [...list]
})
</script>

<template>
    <UTable :rows="events" :columns="columns"
        :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'Нет клиентов' }" />
</template>

<style lang="scss" scoped></style>