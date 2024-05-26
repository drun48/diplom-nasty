<script setup lang="ts">
import ApplicationsCard from '~/components/widget/ApplicationsCard.vue';

const list = ref([
    {
        id: 1,
        citizen: {
            name: 'Иванов Иван Иваныч',
            phone: '89006008913'
        },
        comments: ['Текст сообщение', 'Текст сообщение', 'Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание Описание задачи очень очень ОЧЕНЬ большое описание'],
        support_measures: [],
        request_date: new Date(),
    }
])
</script>

<template>
    <div>
        <ApplicationsCard v-for="(item, key) in list" :key="key" v-bind="item" />
    </div>
</template>

<style lang="scss"></style>