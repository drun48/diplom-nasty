<script setup lang="ts">
import { useCuratorStore } from '~/store/curator'
const curatorStore = useCuratorStore()

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
</script>

<template>
    <UTable :rows="[]" :columns="columns"
        :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'Нет клиентов' }" />
</template>

<style lang="scss" scoped></style>