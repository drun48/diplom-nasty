<script setup lang="ts">
import { useAppStore } from '~/store/app';

const props = defineProps<{ title: string, email: string }>()
const emit = defineEmits(['logout'])

const appStore = useAppStore()

</script>

<template>
    <header class="flex flex-row w-full justify-between relative px-20 pt-8">
        <div class="flex items-center">
            <h2>{{ title }}</h2>
        </div>
        <div class="flex items-center gap-4">
            <a v-if="appStore.getRole == 'ADMIN'" href="https://opora-bac.onrender.com/excel/download" download>
                Сделать выгрузку
            </a>
            <p>{{ email }}</p>
            <Icon name="mdi:logout" size="20" @click="emit('logout')" class="cursor-pointer"></Icon>
        </div>
    </header>
</template>

<style lang="scss" scoped>
a{
    background: rgb(144, 156, 162);
    color:#FFF;
    padding: 4px 8px;
    border-radius: 0.375rem;
}
</style>