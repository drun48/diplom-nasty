<script setup lang="ts">
import { reactive } from 'vue';
import type { User } from '../types/user';
import SelectedCategory from '../components/modules/SelectedCategory.vue'
import BackBtn from '../components/modules/BackBtn.vue'
import { useAppStore } from '@/store/app.ts'
import FromUser from '~/components/modules/FormUser.vue'
import validateRoute from '@/validateRoute/index'
import { ADD_CITIZEN } from '~/query/citizen/index';
definePageMeta({
    validate: validateRoute('CURATOR')
})
const appStore = useAppStore()
appStore.currentTitle = 'Добавить клиента'

const { mutate: addCitizen } = useMutation(ADD_CITIZEN)

const form = ref<Partial<User>>({})

const submit = async () => {
    const variable = {
        first_name: form.value.first_name,
        last_name: form.value.last_name,
        second_name: form.value.second_name,
        email: form.value.email,
        phone: form.value.phone?.replaceAll(' ', '').replaceAll('-', '').replace('(', '').replace(')', ''),
        category: form.value.category,
        organizationName: form.value.organizationName,
        curatorId: appStore.id,
        inn:form.value.inn
    }

    if (!variable.organizationName) {
        delete variable.organizationName
    }

    const res = await addCitizen({ data: variable })
    if (res.data) {
        useRouter().push('/users')
    }
}
</script>

<template>
    <div class="flex flex-col gap-4">
        <BackBtn to="/users" />
        <FromUser v-model="form" label="Добавить клиента" @submit="submit" />
    </div>
</template>

<style lang="scss" scoped>
form>div>* {
    max-width: 300px;
    width: 100%;
}
</style>