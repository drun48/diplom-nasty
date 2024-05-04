<script setup lang="ts">
import { useUserStore } from '~/store/user'
const userStore = useUserStore()

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
        key: 'inn',
        label: 'ИНН'
    }, {
        key: 'category',
        label: 'Категория'
    }, {
        key: 'organizationName',
        label: 'Оргранизации'
    },
]

const goToUser = (data:unknown) => {
    console.log(data)
}
</script>

<template>
    <UTable :rows="userStore.getList" :columns="columns"
        :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'Нет клиентов' }" @select="goToUser" />
</template>

<style lang="scss"></style>