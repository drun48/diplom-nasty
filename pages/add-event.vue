<script setup lang="ts">
import { reactive } from 'vue'
import BackBtn from '../components/modules/BackBtn.vue'

const form = reactive({
    name: '',
    description: ''
})
</script>

<template>
    <div class="flex flex-col gap-4">
        <BackBtn to="/" />
        <form class="flex flex-col gap-4">
            <div class="flex gap-4">
                <UInput size="sm" color="white" :trailing="false" placeholder="Название мероприятия"
                    v-model="form.name" />
                <UInput size="sm" color="white" :trailing="false" placeholder="Описание" v-model="form.description" />
            </div>
            <div class="flex gap-4">
            </div>
            <div class="flex gap-4">
            </div>
        </form>
    </div>
</template>


<style lang="scss" scoped></style>