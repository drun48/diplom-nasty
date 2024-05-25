<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ru } from 'date-fns/locale';
import { formatDateRussian } from '~/utils/utilDate'

type DateRangeType = {
    start?: Date,
    end?: Date
}

const props = defineProps<{
    modelValue: DateRangeType
}>()
const emit = defineEmits(['update:modelValue'])

const date = ref<[Date?, Date?]>([])
if (props.modelValue) {
    date.value = [props.modelValue.start, props.modelValue.end]
}

watch(props, () => {
    if (!date.value) {
        if (props.modelValue && props.modelValue.start && props.modelValue.end)
            date.value = [props.modelValue.start, props.modelValue.end]
    } else if (date.value[0] !== props.modelValue.start || date.value[1] !== props.modelValue.end) {
        date.value = [props.modelValue.start, props.modelValue.end]
    }
})

const updateDateRange = () => {
    if (!date.value) {
        emit('update:modelValue', {})
        return
    }
    emit('update:modelValue', {
        start: date.value[0],
        end: date.value[1]
    })
}

const format = (date: Array<Date>) => {
    let dates = date.map(item => formatDateRussian(item))
    return dates.join(' - ');
}
</script>

<template>
    <VueDatePicker v-model="date" @update:model-value="updateDateRange" range :format-locale="ru" :format="format"
        max-range="1">
        <template #action-row="{ closePicker, selectDate }">
            <div class="flex gap-4 justify-end w-full">
                <UButton @click="closePicker">Отмена</UButton>
                <UButton @click="selectDate">Выбирите дату</UButton>
            </div>
        </template>
    </VueDatePicker>
</template>

<style lang="scss" scoped></style>