<script setup lang="ts">
import { ref } from 'vue'
import DatePickerTimeRangeDay from '~/components/UI/DatePickerTimeRangeDay.vue'
import SelectedApplications from '~/components/widget/SelectedApplications.vue'
import { isEqual } from '~/utils/isEqual'
import { mapped } from '~/utils/mapped'

const props = defineProps<{
    modelValue?: {
        description?: string,
        selectedApplication?: number,
        date?: Record<string, Date>,
    }
    label: string
}>()

const emit = defineEmits(['update:modelValue', 'submit'])

const defaultObj = {
    description: '',
    selectedApplication: null,
    date: {}
}

const form = ref(defaultObj)

const mappedTask = () => {
    if (props.modelValue)
        form.value = mapped(form.value, props.modelValue, defaultObj)
}
mappedTask()

watch(props, () => {
    if (!isEqual(props.modelValue, form.value)) {
        mappedTask()
    }
})


watch(form, () => {
    emit('update:modelValue', form.value)
}, { deep: true })
</script>

<template>
    <form class="flex flex-col gap-4 max-w-96" @submit.prevent="emit('submit')">
        <div>
            <UTextarea size="sm" color="white" :trailing="false" placeholder="Описание" v-model="form.description" />
        </div>
        <div class="flex w-full">
            <DatePickerTimeRangeDay class="calendar" v-model="form.date" />
        </div>
        <div class="flex w-full">
            <SelectedApplications class="w-full" v-model="form.selectedApplication" />
        </div>
        <button class="w-full">
            <UButton class="flex justify-center btn-form w-full">
                {{ label }}
            </UButton>
        </button>
    </form>
</template>


<style lang="scss" scoped></style>