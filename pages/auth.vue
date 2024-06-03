<script setup lang="ts">
import AuthForm from '~/components/modules/AuthForm.vue'
import { LOGIN } from '@/query/auth/index'
import type { loginDTO } from '@/query/auth/dto'
import { useAppStore } from '@/store/app'

definePageMeta({
    layout: false
})

const appStore = useAppStore()
const router = useRouter()

const form = ref({})

const { mutate: authAction } = useMutation<loginDTO>(LOGIN)

let access_token = useCookie('access_token')
let role_user = useCookie('role_user')

const auth = async () => {
    const res = await authAction({ data: form.value })
    if (!res.data) return
    appStore.role = res.data.login.curator.role
    appStore.email = res.data.login.curator.email
    role_user.value = res.data.login.curator.role
    access_token.value = res.data.login.access_token
    console.log(router)
    router.push('/')
}
</script>

<template>
    <div class="flex h-full items-center justify-center">
        <AuthForm v-model="form" class="max-w-[24rem] w-full" @submit="auth" />
    </div>
</template>

<style lang="scss" scoped></style>