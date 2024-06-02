<script lang="ts" setup>
import { useUserStore } from '~/store/user'
// const storeUser = useUserStore()

const props = defineProps<{
    modelValue?: number
}>()
const emit = defineEmits(['update:modelValue', 'changeSelected'])

const citizen = computed(() => {
    return [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
    ]
})

const selected = ref<number | null>(null)
if (props.modelValue) {
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
    <USelectMenu class="w-full" v-model="selected" :options="citizen" value-attribute="id" option-attribute="id"
        searchable searchable-placeholder="Ввидите" @change="emit('changeSelected')">
    </USelectMenu>
</template>


<style lang="scss" scoped></style>