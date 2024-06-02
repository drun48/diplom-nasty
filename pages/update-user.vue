<script setup lang="ts">
import { reactive } from 'vue';
import type { User } from '../types/user';
import SelectedCategory from '../components/modules/SelectedCategory.vue'
import BackBtn from '../components/modules/BackBtn.vue'
import { useAppStore } from '@/store/app.ts'
import FromUser from '~/components/modules/FormUser.vue'
const appStore = useAppStore()
appStore.currentTitle = 'Редактирование клиента'

const form = ref<User>()
</script>

<template>
    <div class="flex flex-col gap-4">
        <BackBtn to="/users" />
        <FromUser v-model="form" />
    </div>
</template>

<style lang="scss" scoped>
form>div>* {
    max-width: 300px;
    width: 100%;
}
</style>