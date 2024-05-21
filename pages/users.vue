<script setup lang="ts">
import { ref } from 'vue';
import UserTable from '../components/modules/UserTable.vue'
import { useAppStore } from '@/store/app.ts'
import SelectedCategory from '../components/modules/SelectedCategory.vue'

const appStore = useAppStore()
appStore.currentTitle = 'Клиенты'

const selectedFace = ref('')

const name = ref('')
const inn = ref('')

</script>

<template>
    <section>
        <div class="flex justify-between items-center">
            <div class="flex gap-4">
                <SelectedCategory v-model="selectedFace" />
                <UInput icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
                    placeholder="ФИО" v-model="name" />
                <UInput icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
                    placeholder="ИНН" v-model="inn" />
            </div>
            <nuxt-link to="/add-user" class="flex gap-2 items-center text-blue-500">
                <Icon name="solar:user-plus-broken" size="16"></Icon>
                <p>Добавить клиента</p>
            </nuxt-link>
        </div>
        <UserTable></UserTable>
    </section>
</template>

<style lang="scss"></style>