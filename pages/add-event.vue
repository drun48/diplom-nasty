<script setup lang="ts">
import { ref } from 'vue'
import BackBtn from '../components/modules/BackBtn.vue'
import DatePickerTimeRange from '../components/UI/DatePickerTimeRange.vue'

const form = reactive({
    name: '',
    description: ''
})
const date = ref({})
</script>

<template>
    <div class="flex flex-col gap-4">
        <BackBtn to="/" />
        <form class="flex flex-col gap-4" @submit.prevent="">
            <div class="flex gap-4">
                <UInput size="sm" color="white" :trailing="false" placeholder="Название мероприятия"
                    v-model="form.name" />
                <UInput size="sm" color="white" :trailing="false" placeholder="Описание" v-model="form.description" />
            </div>
            <div class="flex gap-4">
                <DatePickerTimeRange class="calendar" v-model="date" />
            </div>
            <div class="flex gap-4">
                
            </div>
        </form>
    </div>
</template>


<style lang="scss" scoped>
.calendar{
    max-width: 350px;
}
</style>