<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const props = defineProps<{ label: string }>()
const emits = defineEmits<{
    changeDate: [number]
}>()
const changeDate = (duration: number) => {
    emits('changeDate', duration)
}
</script>

<template>
    <div class="flex gap-2 align-center">
        <button @click="changeDate(-1)">
            <Icon name="i-solar-alt-arrow-left-line-duotone"></Icon>
        </button>
        <p>{{ label }}</p>
        <button @click="changeDate(1)">
            <Icon name="i-solar-alt-arrow-right-line-duotone"></Icon>
        </button>
    </div>
</template>


<style lang="scss" scoped></style>