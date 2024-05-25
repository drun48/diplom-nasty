<script setup lang="ts">
import { ref } from 'vue'
import BackBtn from '../components/modules/BackBtn.vue'
import DatePickerTimeRangeDay from '~/components/UI/DatePickerTimeRangeDay.vue'
import SelectedCitizenId from '~/components/widget/SelectedCitizenId.vue'
import { isEqual } from '~/utils/isEqual'
import { mapped } from '~/utils/mapped'

const props = defineProps<{
    modelValue: {
        name?: string,
        description?: string,
        selectedUser?: string,
        date?: string,
    }
}>()

const emit = defineEmits(['update:modelValue'])

const defaultObj = {
    name: '',
    description: '',
    selectedUser: [],
    date: {}
}

const form = ref(defaultObj)

const mappedEvent = () => {
    form.value = mapped(form.value, props.modelValue, defaultObj)
}
mappedEvent()

watch(props, () => {
    if (!isEqual(props.modelValue, form.value)) {
        mappedEvent()
    }
})


watch(form, () => {
    emit('update:modelValue', form.value)
}, { deep: true })

</script>

<template>
    <div class="flex flex-col gap-4">
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
                <SelectedCitizenId class="w-full" v-model="form.selectedUser" />
            </div>
        </form>
    </div>
</template>


<style lang="scss" scoped></style>