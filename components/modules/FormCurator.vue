<script setup lang="ts">
import { ref } from 'vue'
import SelectedDistrict from '~/components/widget/SelectedDistrict.vue'
import { isEqual } from '~/utils/isEqual'
import { mapped } from '~/utils/mapped'

const props = defineProps<{
    modelValue?: {
        first_name?: string,
        last_name?: string,
        second_name?: string,
        email?: string,
        role?: string,
        phone?: string,
        districtId: number,
        password?: String
    }
    label: string
}>()

const emit = defineEmits(['update:modelValue', 'submit'])

const defaultObj = {
    first_name: '',
    last_name: '',
    second_name: '',
    email: '',
    role: '',
    phone: '',
    districtId: -1,
    password: ''
}

const form = ref(defaultObj)

const mappedEvent = () => {
    if (props.modelValue)
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
        <form class="flex flex-col gap-4" style="max-width: 32rem;" @submit.prevent="emit('submit')">
            <div class="flex w-full gap-2">
                <UInput size="sm" color="white" class="w-full" :trailing="false" placeholder="Имя"
                    v-model="form.first_name" />
                <UInput size="sm" color="white" class="w-full" :trailing="false" placeholder="Фамилия"
                    v-model="form.second_name" />
                <UInput size="sm" color="white" class="w-full" :trailing="false" placeholder="Отчество"
                    v-model="form.last_name" />
            </div>
            <div class="flex gap-4">
                <UInput size="sm" color="white" class="w-full" :trailing="false" placeholder="Почта"
                    v-model="form.email" type="email" />
                <UInput size="sm" color="white" class="w-full" :trailing="false" placeholder="Телефон"
                    v-model="form.phone" type="tel" v-maska data-maska="8 (###) ###-##-##"/>
            </div>
            <div class="flex w-full">
                <SelectedDistrict class="w-full" v-model="form.districtId" />
            </div>
            <div class="flex w-full">
                <UInput size="sm" color="white" class="w-full" :trailing="false" placeholder="Придумайте пароль"
                    v-model="form.password" type="password" />
            </div>
            <button class="w-full">
                <UButton class="flex justify-center btn-form w-full">
                    {{ label }}
                </UButton>
            </button>
        </form>
    </div>
</template>


<style lang="scss" scoped></style>