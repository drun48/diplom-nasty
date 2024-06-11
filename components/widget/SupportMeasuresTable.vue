<script setup lang="ts">
import { GET_LIST_CITIZEN } from '@/query/citizen/index'
import nameFormat from '@/utils/nameFormat'
import { useAppStore } from '@/store/app'
import { GET_LIST_SUPPORT_MEASURE } from '@/query/support-measures/index'

const props = defineProps<{
    filterInn?: string,
    filterCategory?: string,
    filterName?: string
}>()

const appStore = useAppStore()

const columns = [
    {
        key: 'value',
        label: 'Назание'
    },
]


const { result } = useQuery(GET_LIST_SUPPORT_MEASURE, null, { fetchPolicy: 'cache-and-network' })

const listSupportMeasure = computed(() => {
    return result.value?.getsSupportMeasures ?? []
})

</script>

<template>
    <UTable :rows="listSupportMeasure" :columns="columns"
        :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'Нет мер поддержки' }" />
</template>

<style lang="scss"></style>