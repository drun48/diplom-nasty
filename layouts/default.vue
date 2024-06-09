<script setup lang="ts">
import { useAppStore } from '@/store/app.ts'
import Header from '~/components/widget/header.vue'
import Nav from '@/components/UI/nav.vue'
import { logout } from '@/service/auth'

const appStore = useAppStore()

const logoutHeader = () => {
    logout()
}
</script>

<template>
    <div>
        <Header :title="appStore.currentTitle" :email="appStore.email" class="mb-8" @logout="logoutHeader"></Header>
        <div class="px-20">
            <Nav></Nav>
            <slot />
        </div>
    </div>
</template>

<style lang="scss"></style>