<script setup lang="ts">
import ApplicationsCard from '~/components/widget/ApplicationsCard.vue';
import { useAppStore } from '@/store/app.ts'
import validateRoute from '@/validateRoute/index'
import { GET_LIST_APPLICATION } from '~/query/application/index';
import nameFormat from "@/utils/nameFormat";
definePageMeta({
    validate: validateRoute('CURATOR')
})
const appStore = useAppStore()
appStore.currentTitle = 'Обращения'

const { onResult } = useQuery(GET_LIST_APPLICATION, { curatorId: appStore.id }, { fetchPolicy: 'cache-and-network' })

const list = ref([])

onResult((listApplications) => {
    if (!listApplications.data) return
    list.value = listApplications.data.getActivitys.map(item => {
        return {
            id: Number(item.id),
            comments: item.comment,
            support_measures: item.supportMeasures ?? [],
            request_date: item.request_date ? new Date(item.request_date) : null,
            confirm_date: item.confirm_date ? new Date(item.confirm_date) : null,
            end_date: item.end_date ? new Date(item.end_date) : null,
            citizen: {
                name: nameFormat(item.citizen.first_name, item.citizen.last_name, item.citizen.second_name),
                phone: item.citizen.phone
            },
            open: Boolean(list.value[getIndexApplication(item.id)]?.open)
        }
    }).sort((a, b) => a.id - b.id)
})

const filter = ref(1)
const key = ref(Math.random())

const filterList = computed(() => {
    key.value = Math.random()
    if (filter.value === 0) return list.value
    return list.value.filter(filterStatus) ?? []
})

const filterStatus = (applications: any): boolean => {
    if (filter.value === 1) return !Boolean(applications.confirm_date)
    if (filter.value === 2) return Boolean(applications.confirm_date) && !Boolean(applications.end_date)
    if (filter.value === 3) return Boolean(applications.end_date)
    return false
}

function getIndexApplication(id: number) {
    return list.value.findIndex(item => item.id == id)
}

const changeStateOpen = (state: boolean, id: number) => {
    const index = getIndexApplication(id)
    if (index < 0) return
    list.value[index].open = state
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
        <div class="flex flex-col" :key="key">
            <ApplicationsCard v-for="(item, key) in filterList" :key="key" v-bind="item" @changeStateOpen="changeStateOpen" />
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