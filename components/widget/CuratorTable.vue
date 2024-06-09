<script setup lang="ts">
import { useCuratorStore } from '~/store/curator'
import { getListCurator } from '@/service/curator'
const curatorStore = useCuratorStore()
getListCurator()
const columns = [
    {
        key: 'name',
        label: 'ФИО'
    }, {
        key: 'email',
        label: 'Почта'
    }, {
        key: 'phone',
        label: 'Телефон'
    }, {
        key: 'role',
        label: 'Роль'
    }, {
        key: 'district',
        label: 'Район'
    },{
        key:'rating',
        label:'Рейтинг'
    }
]
</script>

<template>
    <UTable :rows="curatorStore.getList" :columns="columns"
        :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'Нет клиентов' }" />
</template>

<style lang="scss" scoped></style>