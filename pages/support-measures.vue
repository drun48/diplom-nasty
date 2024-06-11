<script setup lang="ts">
import validateRoute from '@/validateRoute/index'
import SupportMeasuresTable from '@/components/widget/SupportMeasuresTable.vue'

definePageMeta({
    validate: validateRoute('ADMIN')
})

</script>

<template>
    <div class="flex flex-col">
        <div class="flex justify-end">
            <nuxt-link to="/add-support-measures" class="flex gap-2 items-center text-blue-500">
                <Icon name="i-material-symbols-help-center" size="16"></Icon>
                <p>Добавить Мероприятие</p>
            </nuxt-link>
        </div>
        <SupportMeasuresTable />
    </div>
</template>

<style lang="scss" scoped></style>