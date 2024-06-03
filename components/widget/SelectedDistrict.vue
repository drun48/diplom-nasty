<script lang="ts" setup>
import { GET_DISTRICTS } from '@/query/district/index'

const props = defineProps<{
    modelValue?: number
}>()
const { result: listDicstrict } = useQuery(GET_DISTRICTS, { fetchPolicy: 'cache-and-network' })
const emit = defineEmits(['update:modelValue', 'changeSelected'])

const citizen = computed(() => {
    if (!listDicstrict.value) return []
    return listDicstrict.value.getDistricts.map((item: any) => ({ ...item, id: Number(item.id) }))
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
    emit('update:modelValue', selected.value)
})

</script>

<template>
    <USelectMenu class="w-full" v-model="selected" :options="citizen" value-attribute="id" option-attribute="name"
        searchable searchable-placeholder="Ввидите" @change="emit('changeSelected')">
    </USelectMenu>
</template>


<style lang="scss" scoped></style>