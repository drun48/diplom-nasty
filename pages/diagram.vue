<script setup lang="ts">
import { ref } from "vue"
import DiagramaGranta from '~/components/widget/DiagramaGranta.vue'
import { useAppStore } from '@/store/app.ts'
import validateRoute from '@/validateRoute/index'
definePageMeta({
    validate: validateRoute('CURATOR')
})
const appStore = useAppStore()
appStore.currentTitle = 'Диаграмма Ганта'
</script>

<template>
    <div>
        <div class="flex w-full justify-end">
            <nuxt-link to="/add-task" class="flex gap-2 items-center text-blue-500">
                <Icon name="i-material-symbols-light-add-task-rounded" size="16"></Icon>
                <p>Добавить Задачу</p>
            </nuxt-link>
        </div>
        <DiagramaGranta />
    </div>
</template>

<style lang="scss"></style>