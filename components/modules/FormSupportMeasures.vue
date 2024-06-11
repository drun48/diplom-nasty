<script setup lang="ts">
import { isEqual } from '~/utils/isEqual'
import { mapped } from '~/utils/mapped'

const props = defineProps<{
    modelValue?: any,
    label: string
}>()

const emit = defineEmits(['update:modelValue', 'submit'])

const defaultObj = {
    value: ''
}
const form = ref(defaultObj)


const mappedUser = () => {
    if (props.modelValue)
        form.value = mapped(form.value, props.modelValue, defaultObj)
}
mappedUser()

watch(props, () => {
    if (!isEqual(props.modelValue, form.value)) {
        mappedUser()
    }
})


watch(form, () => {
    emit('update:modelValue', form.value)
}, { deep: true })
</script>

<template>
    <form class="flex flex-col gap-4" @submit.prevent="emit('submit')" style="max-width: 600px;">
        <div class="flex gap-4 w-full">
            <UInput size="sm" color="white" :trailing="false" placeholder="Название" v-model="form.value" />
        </div>
        <button class="w-full">
            <UButton class="flex justify-center btn-form w-full">
                {{ label }}
            </UButton>
        </button>
    </form>
</template>

<style lang="scss" scoped>
form>div>* {
    width: 100%;
}
</style>