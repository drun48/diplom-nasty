<script lang="ts" setup>
import { GET_LIST_SUPPORT_MEASURE } from "~/query/support-measures/index"

const props = defineProps<{
    modelValue?: number
}>()
const emit = defineEmits(['update:modelValue', 'changeSelected'])

const { result } = useQuery(GET_LIST_SUPPORT_MEASURE, null, { fetchPolicy: 'cache-and-network' })

const list = computed(() => {
    return result.value?.getsSupportMeasures.map(item => ({
        id: Number(item.id),
        value: item.value,
    })) ?? []
})

const selected = ref<number | null | undefined>(null)
selected.value = props.modelValue

watch(props, () => {
    if (props.modelValue && props.modelValue !== selected.value)
        selected.value = props.modelValue
})

watch(selected, () => {
    emit('update:modelValue', selected)
    emit('changeSelected')
})
</script>

<template>
    <USelectMenu class="w-full" v-model="selected" :options="list" value-attribute="id" option-attribute="value"
        searchable searchable-placeholder="Ввидите" >
    </USelectMenu>
</template>


<style lang="scss" scoped></style>