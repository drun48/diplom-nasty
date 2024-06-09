<script setup lang="ts">
import { reactive } from 'vue';
import type { User } from '~/types/user';
import SelectedCategory from '~/components/modules/SelectedCategory.vue'
import { isEqual } from '~/utils/isEqual'
import { mapped } from '~/utils/mapped'

const props = defineProps<{
    modelValue?: Partial<User>,
    label: string
}>()

const emit = defineEmits(['update:modelValue', 'submit'])

const defaultObj = {
    inn: '',
    first_name: '',
    last_name: '',
    second_name: '',
    email: '',
    phone: '',
    category: '',
    organizationName: ''
}
const form = ref<User>(defaultObj)


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
        <div class="flex gap-4">
            <UInput size="sm" color="white" :trailing="false" placeholder="Почта" v-model="form.email" />
            <UInput size="sm" color="white" class="w-full" :trailing="false" placeholder="Телефон" v-model="form.phone"
                type="tel" v-maska data-maska="8 (###) ###-##-##" />
        </div>
        <div class="flex gap-4">
            <SelectedCategory v-model="form.category" :necessarySelected="true" />
            <UInput size="sm" color="white" :trailing="false" placeholder="ИНН" v-model="form.inn" />
            <UInput v-if="form.category == 'ORGANIZATION'" size="sm" color="white" :trailing="false"
                placeholder="Название организации" v-model="form.organizationName" />
        </div>
        <div class="flex gap-4">
            <UInput size="sm" color="white" :trailing="false" placeholder="Имя" v-model="form.first_name" />
            <UInput size="sm" color="white" :trailing="false" placeholder="Фамилия" v-model="form.last_name" />
            <UInput size="sm" color="white" :trailing="false" placeholder="Отчество" v-model="form.second_name" />
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
    max-width: 300px;
    width: 100%;
}
</style>