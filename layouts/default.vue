<script setup lang="ts">
import { useAppStore } from '@/store/app.ts'
import Header from '@/components/UI/header.vue'
import Nav from '@/components/UI/nav.vue'

const appStore = useAppStore()
</script>

<template>
    <div>
        <Header :title="appStore.currentTitle" :email="appStore.email" class="mb-8"></Header>
        <div class="px-20">
            <Nav></Nav>
            <slot />
        </div>
    </div>
</template>

<style lang="scss"></style>