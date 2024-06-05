<script lang="ts" setup>
import { GET_LIST_APPLICATION_ID } from '@/query/application/index'

const props = defineProps<{
    modelValue?: number | null
}>()

const emit = defineEmits(['update:modelValue'])

const { result } = useQuery<{ getActivitys: Array<{ id: number }> }>(GET_LIST_APPLICATION_ID, { fetchPolicy: 'cache-and-network' })

const citizen = computed(() => {
    return result.value?.getActivitys.map((item: any) => ({
        id: Number(item.id),
        name: `Заявка под номером ${item.id}`
    }))
})


const selected = ref<number | null>(null)
if (typeof props.modelValue === 'number') {
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
    <USelectMenu class="w-full" v-model="selected" :options="citizen" value-attribute="id" option-attribute="name"
        searchable searchable-placeholder="Ввидите">
    </USelectMenu>
</template>


<style lang="scss" scoped></style>