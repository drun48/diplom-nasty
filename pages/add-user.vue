<script setup lang="ts">
import { reactive } from 'vue';
import type { User } from '../types/user';
import SelectedCategory from '../components/modules/SelectedCategory.vue'
import BackBtn from '../components/modules/BackBtn.vue'
import { useAppStore } from '@/store/app.ts'
const appStore = useAppStore()
appStore.currentTitle = 'Добавить клиента'

const form = reactive<User>({
    inn: '',
    first_name: '',
    last_name: '',
    second_name: '',
    email: '',
    phone: '',
    category: '',
    organizationName: ''
})
</script>

<template>
    <div class="flex flex-col gap-4">
        <BackBtn to="/users"/>
        <form class="flex flex-col gap-4">
            <div class="flex gap-4">
                <UInput size="sm" color="white" :trailing="false" placeholder="Почта" v-model="form.email" />
            </div>
            <div class="flex gap-4">
                <SelectedCategory v-model="form.category" />
                <UInput size="sm" color="white" :trailing="false" placeholder="ИНН" v-model="form.inn" />
                <UInput v-if="form.category == 'Организация'" size="sm" color="white" :trailing="false"
                    placeholder="Название организации" v-model="form.organizationName" />
            </div>
            <div class="flex gap-4">
                <UInput size="sm" color="white" :trailing="false" placeholder="Имя" v-model="form.first_name" />
                <UInput size="sm" color="white" :trailing="false" placeholder="Фамилия" v-model="form.last_name" />
                <UInput size="sm" color="white" :trailing="false" placeholder="Отчество" v-model="form.second_name" />
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
form>div>* {
    max-width: 300px;
    width: 100%;
}
</style>