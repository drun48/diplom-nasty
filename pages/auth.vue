<script setup lang="ts">
import AuthForm from '~/components/modules/AuthForm.vue'

definePageMeta({
    layout: ''
})

const form = ref({})

const auth = () => {
    console.log(form)
}
</script>

<template>
    <div class="flex h-full items-center justify-center">
        <AuthForm v-model="form" class="max-w-[24rem] w-full" @submit="auth" />
    </div>
</template>

<style lang="scss" scoped></style>