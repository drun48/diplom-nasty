<script setup lang="ts">
import AuthForm from '@/components/modules/AuthForm.vue'
import { LOGIN } from '@/query/auth/index'
import type { loginDTO } from '@/query/auth/dto'
import { useAppStore } from '@/store/app'
import { login } from '@/service/auth'

definePageMeta({
    layout: false
})

const appStore = useAppStore()

const form = ref({})

const { mutate: authAction } = useMutation<loginDTO>(LOGIN)


const auth = async () => {
    const res = await authAction({ data: form.value })
    if (!res.data) return

    login(res.data.login.access_token, res.data.login.curator.role, res.data.login.curator.email, res.data.login.curator.id)
}
</script>

<template>
    <div class="flex h-full items-center justify-center">
        <AuthForm v-model="form" class="max-w-[24rem] w-full" @submit="auth" />
    </div>
</template>

<style lang="scss" scoped></style>