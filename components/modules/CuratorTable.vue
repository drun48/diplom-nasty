<script setup lang="ts">
import { useCuratorStore } from '~/store/curator'
const curatorStore = useCuratorStore()

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
    },
]

const goToCurator = (data:unknown) => {
    console.log(data)
}
</script>

<template>
    <UTable :rows="curatorStore.getList" :columns="columns"
        :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'Нет клиентов' }" @select="goToCurator" />
</template>

<style lang="scss" scoped></style>