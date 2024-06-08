<script lang="ts" setup>
import { GET_LIST_APPLICATION_ID } from '@/query/application/index'

const props = defineProps<{
    modelValue?: string | null,
    necessarySelected?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

let category = [
    { id: '', name: 'Все' },
    { id: 'IP', name: 'ИП' },
    { id: 'INDIVIDUAL', name: 'физическое лицо' },
    { id: 'ORGANIZATION', name: 'организация' },
]
if(props.necessarySelected){
    category = category.slice(1, category.length)
}

const selected = ref<string | null>(null)
if (typeof props.modelValue === 'string') {
    selected.value = props.modelValue
}

watch(props, () => {
    if (props.modelValue && props.modelValue !== selected.value)
        selected.value = props.modelValue
})

watch(selected, () => {
    emit('update:modelValue', selected.value)
})
</script>

<template>
    <USelectMenu class="w-full" v-model="selected" :options="category" value-attribute="id" option-attribute="name"
        searchable searchable-placeholder="Ввидите">
    </USelectMenu>
</template>


<style lang="scss" scoped></style>