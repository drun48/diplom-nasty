<script lang="ts" setup>
import { GET_CITIZEN_LIST_NAME } from '@/query/citizen/index'
import type { ListCitizenName } from '@/query/citizen/dto'
import nameFormat from "@/utils/nameFormat";
import { useAppStore } from '@/store/app'

const props = defineProps<{
    modelValue?: Array<number>
}>()

const appStore = useAppStore()

const emit = defineEmits(['update:modelValue'])

const { result: listCitizen } = useQuery<{ getCitizens: Array<ListCitizenName> }>(GET_CITIZEN_LIST_NAME, { curatorId: appStore.id }, { fetchPolicy: 'cache-and-network' })

const citizen = computed(() => {
    return listCitizen.value?.getCitizens.map((item: ListCitizenName) => ({
        id: Number(item.id),
        name: nameFormat(item.last_name, item.first_name, item.second_name)
    }))
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
    emit('update:modelValue', selected.value)
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