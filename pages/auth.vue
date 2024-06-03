<script setup lang="ts">
import AuthForm from '~/components/modules/AuthForm.vue'
import { LOGIN } from '@/query/auth.ts'

definePageMeta({
    layout: ''
})

const form = ref({})

const { mutate: authAction } = useMutation(LOGIN)

const auth = () => {
    console.log(form)
    authAction({ data: form.value })
}
</script>

<template>
    <div class="flex h-full items-center justify-center">
        <AuthForm v-model="form" class="max-w-[24rem] w-full" @submit="auth" />
    </div>
</template>

<style lang="scss" scoped></style>