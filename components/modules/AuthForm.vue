<script setup lang="ts">
import { ref } from 'vue'
import { checkEmpty } from '~/utils/checkEmpty.ts'

const props = defineProps<{
    modelValue: {}
}>()

const emit = defineEmits(['update:modelValue', 'submit'])

const form = ref<{
    email: string,
    password: string
}>({
    email: '',
    password: ''
})

watch(form, () => {
    emit('update:modelValue', form.value)
}, { deep: true })

const submitTest = () => {
    if (checkEmpty(form.value)) {
        emit('submit')
    }
}

</script>

<template>
    <form class="flex flex-col items-center gap-10" @submit.prevent="submitTest">
        <div class="flex flex-col gap-4 items-center">
            <Icon name="iconamoon:3d" size="180"></Icon>
            <h3>Вход в систему</h3>
        </div>
        <div class="flex flex-col gap-4 w-full">
            <UInput size="sm" color="white" class="w-full" :trailing="false" placeholder="Логин" type="email"
                v-model="form.email" />
            <UInput size="sm" color="white" class="w-full" :trailing="false" placeholder="Пароль" type="password"
                v-model="form.password" />
        </div>
        <div class="flex w-full">
            <button class="w-full">
                <UButton class="flex justify-center btn w-full">
                    Вход
                </UButton>
            </button>
        </div>
    </form>
</template>


<style lang="scss" scoped>
svg * {
    stroke: rgba(144, 156, 162, 1);
}

.btn {
    background: rgba(144, 156, 162, 1);
}
</style>