<script setup lang="ts">
const props = defineProps<{ title: string, email: string }>()
const emit = defineEmits(['logout'])
</script>

<template>
    <header class="flex flex-row w-full justify-between relative px-20 pt-8">
        <div class="flex items-center">
            <h2>{{ title }}</h2>
        </div>
        <div class="flex items-center gap-4">
            <p>{{ email }}</p>
            <Icon name="mdi:logout" size="20" @click="emit('logout')" class="cursor-pointer"></Icon>
        </div>
    </header>
</template>

<style lang="scss"></style>