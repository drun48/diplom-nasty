<script setup lang="ts">
import { ref } from 'vue'
import BackBtn from '../components/modules/BackBtn.vue'
import DatePickerTimeRangeDay from '../components/UI/DatePickerTimeRangeDay.vue'
import SelectedApplications from '~/components/widget/SelectedApplications.vue'
import { useAppStore } from '@/store/app.ts'
const appStore = useAppStore()
appStore.currentTitle = 'Добавить задачу'

const form = reactive({
    name: '',
    description: '',
    selectedUser: [],
    date: {}
})
</script>

<template>
    <div class="flex flex-col gap-4">
        <BackBtn to="/" />
        <form class="flex flex-col gap-4 max-w-96" @submit.prevent="">
            <div class="flex w-full">
                <UInput size="sm" color="white" class="w-full" :trailing="false" placeholder="Название мероприятия"
                    v-model="form.name" />
            </div>
            <div>
                <UTextarea size="sm" color="white" :trailing="false" placeholder="Описание"
                    v-model="form.description" />
            </div>
            <div class="flex w-full">
                <DatePickerTimeRangeDay class="calendar" v-model="form.date" />
            </div>
            <div class="flex w-full">
                <SelectedApplications class="w-full" v-model="form.selectedUser" />
            </div>
        </form>
    </div>
</template>


<style lang="scss" scoped></style>