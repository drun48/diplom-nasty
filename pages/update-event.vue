<script setup lang="ts">
import { ref } from 'vue'
import BackBtn from '../components/modules/BackBtn.vue'
import { useAppStore } from '@/store/app.ts'
import FormEvent from '~/components/modules/FormEvent.vue'
const appStore = useAppStore()
appStore.currentTitle = 'Изменить мероприятие'

const form = ref()
</script>

<template>
    <div class="flex flex-col gap-4">
        <BackBtn to="/" />
        <FormEvent v-model="form" />
    </div>
</template>


<style lang="scss" scoped></style>