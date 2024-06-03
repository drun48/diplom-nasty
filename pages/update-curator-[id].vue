<script setup lang="ts">
import FormCurator from '@/components/modules/FormCurator.vue'
import { useAppStore } from '@/store/app.ts'
import validateRoute from '@/validateRoute/index'
import { GET_CURATOR_ID, UPDATE_CURATOR } from '@/query/curators/index'

definePageMeta({
  validate: validateRoute('ADMIN')
})

const appStore = useAppStore()
appStore.currentTitle = 'Редактирование куратора'
const router = useRouter()

const { result } = useQuery(GET_CURATOR_ID, {
  data: { id: router.currentRoute.value.params.id },
  fetchPolicy: "cache-and-network",
})

const form = ref({})

watch(result, () => {
  form.value = { ...result.value.getCuratorArgs, districtId: Number(result.value.getCuratorArgs.district.id) }
})

const { mutate: updateCurator } = useMutation(UPDATE_CURATOR)

const submit = async () => {
  const variable = {
    ...form.value,
    role: 'CURATOR',
    phone: form.value.phone.replaceAll(' ', '').replaceAll('-', '').replace('(', '').replace(')', '')
  }

  delete variable?.__typename
  delete variable?.id
  delete variable?.district
  delete variable?.citizen

  const res = await updateCurator({ data: variable })
  console.log(res.data, 'asdasda')
  if (!res.data) return
  // router.push('/curators')
}
</script>

<template>
  <FormCurator v-model="form" label="Редактировать куратора" @submit="submit" />
</template>

<style lang="scss" scoped></style>