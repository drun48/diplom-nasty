<script lang="ts" setup>
import { useUserStore } from '~/store/user'
const storeUser = useUserStore()

const props = defineProps<{
    modelValue?: Array<number>
}>()
const emit = defineEmits(['update:modelValue'])

const citizen = computed(() => {
    return storeUser.list
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
        option-attribute="name" searchable searchable-placeholder="Ввидите имя">
        <template #label>
            <span>Выбрано: {{ selected.length }}</span>
        </template>
    </USelectMenu>
</template>


<style lang="scss" scoped></style>