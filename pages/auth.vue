<script setup lang="ts">
import AuthForm from '~/components/modules/AuthForm.vue'

definePageMeta({
  layout: ''
})

const form = ref({})
</script>

<template>
    <div class="flex h-full items-center justify-center">
        <AuthForm v-model="form" class="max-w-[24rem] w-full"/>
    </div>
</template>

<style lang="scss" scoped></style>