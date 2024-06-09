<script setup lang="ts">
import { reactive } from 'vue';
import type { User } from '../types/user';
import SelectedCategory from '../components/modules/SelectedCategory.vue'
import BackBtn from '../components/modules/BackBtn.vue'
import { useAppStore } from '@/store/app.ts'
import FromUser from '~/components/modules/FormUser.vue'
import validateRoute from '@/validateRoute/index'
import { GET_CITIZEN, UPDATE_CITIZEN } from '~/query/citizen/index';

definePageMeta({
    validate: validateRoute('CURATOR')
})

const appStore = useAppStore()
appStore.currentTitle = 'Редактирование клиента'

const router = useRouter()
const { onResult } = useQuery(GET_CITIZEN, { id: Number(router.currentRoute.value.params.id) }, { fetchPolicy: 'cache-and-network' })
const { mutate: updateCitizen } = useMutation(UPDATE_CITIZEN)

const form = ref<User>()

onResult((result) => {
    if (!result.data) return
    form.value = result.data.getCitizen
})

const submit = async () => {
    const variable = {
        first_name: form.value.first_name,
        last_name: form.value.last_name,
        second_name: form.value.second_name,
        organizationName: form.value.organizationName,
        email: form.value.email,
        phone: form.value.phone?.replaceAll(' ', '').replaceAll('-', '').replace('(', '').replace(')', ''),
    }
    const res = await updateCitizen({ data: variable, id: Number(router.currentRoute.value.params.id) })
    if (!res.data) return
    router.push('/users')
}
</script>

<template>
    <div class="flex flex-col gap-4">
        <BackBtn to="/users" />
        <FromUser v-model="form" label="Изменить клиента" @submit="submit" />
    </div>
</template>

<style lang="scss" scoped>
form>div>* {
    max-width: 300px;
    width: 100%;
}
</style>