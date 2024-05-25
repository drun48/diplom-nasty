<script setup lang="ts">
import { ref } from "vue"
import DiagramaGranta from '@/components/modules/DiagramaGranta.vue'

</script>

<template>
    <div>
        <div class="flex w-full justify-end">
            <nuxt-link to="/add-task" class="flex gap-2 items-center text-blue-500">
                <Icon name="i-material-symbols-light-add-task-rounded" size="16"></Icon>
                <p>Добавить Задачу</p>
            </nuxt-link>
        </div>
        <DiagramaGranta></DiagramaGranta>
    </div>
</template>

<style lang="scss"></style>