<script setup lang="ts">
import { GET_LIST_CITIZEN } from '@/query/citizen/index'
import nameFormat from '@/utils/nameFormat'
import { useAppStore } from '@/store/app'

const props = defineProps<{
    filterInn?: string,
    filterCategory?: string,
    filterName?: string
}>()

const appStore = useAppStore()

const columns = [
    {
        key: 'name',
        label: 'ФИО'
    }, {
        key: 'email',
        label: 'Почта'
    }, {
        key: 'phone',
        label: 'Телефон'
    }, {
        key: 'inn',
        label: 'ИНН'
    }, {
        key: 'category',
        label: 'Категория'
    }, {
        key: 'organizationName',
        label: 'Оргранизации'
    },
]

const { result: listUser } = useQuery(GET_LIST_CITIZEN, { curatorId: appStore.id }, { fetchPolicy: 'cache-and-network' })

const goToUser = (data: unknown) => {
    useRouter().push(`/update-user-${data.id}`)
}

const listCitize = computed(() => {
    return listUser?.value?.getCitizens.map(item => ({
        name: nameFormat(item.first_name, item.last_name, item.second_name),
        email: item.email,
        phone: item.phone,
        inn: item.inn,
        category: item.category,
        organizationName: item.organizationName,
        id:item.id
    })) ?? []
})

const filterList = (value) => {
    let access = true
    if (props.filterInn) {
        access = access && value.inn.includes(props.filterInn)
    } if (props.filterName) {
        access = access && value.name.includes(props.filterName)
    } if (props.filterCategory) {
        access = access && value.category === props.filterCategory
    }
    return access
}

const filterListCitizen = computed(() => {
    return listCitize.value.filter(filterList)
})

</script>

<template>
    <UTable :rows="filterListCitizen" :columns="columns"
        :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'Нет клиентов' }" @select="goToUser" />
</template>

<style lang="scss"></style>