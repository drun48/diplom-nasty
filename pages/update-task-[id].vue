<script setup lang="ts">
import { ref } from 'vue'
import BackBtn from '~/components/modules/BackBtn.vue'
import FormTask from '~/components/modules/FormTask.vue'
import { useAppStore } from '@/store/app.ts'
import validateRoute from '@/validateRoute/index'
definePageMeta({
  validate: validateRoute('CURATOR')
})
const appStore = useAppStore()
appStore.currentTitle = 'Изменить задачу'

const form = ref()
</script>

<template>
    <div class="flex flex-col gap-4">
        <BackBtn to="/" />
        <FormTask v-model="form" label="Изменить задачу"/>
    </div>
</template>


<style lang="scss" scoped></style>