<script lang="ts" setup>
import { useUserStore } from '~/store/user'
// const storeUser = useUserStore()

const props = defineProps<{
    modelValue?: Array<number>
}>()
const emit = defineEmits(['update:modelValue'])

const citizen = computed(() => {
    return [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
    ]
})

const selected = ref<Array<number>>([])
if (Array.isArray(props.modelValue)) {
    selected.value = props.modelValue
}

watch(props, () => {
    if (props.modelValue && props.modelValue !== selected.value)
        selected.value = props.modelValue
})

watch(selected, () => {
    emit('update:modelValue', selected)
})
</script>

<template>
    <USelectMenu class="w-full" v-model="selected" multiple :options="citizen" value-attribute="id"
        option-attribute="id" searchable searchable-placeholder="Ввидите">
        <template #label>
            <span>Выбрано мер поддержки: {{ selected.length }}</span>
        </template>
    </USelectMenu>
</template>


<style lang="scss" scoped></style>