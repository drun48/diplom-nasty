<script setup lang="ts">
import FormCurator from '~/components/modules/FormCurator.vue'
import { useAppStore } from '@/store/app.ts'
import validateRoute from '@/validateRoute/index'
import { ADD_CURATOR } from '@/query/curators/index'
definePageMeta({
  validate: validateRoute('ADMIN')
})
const appStore = useAppStore()
appStore.currentTitle = 'Добавление куратора'

const { mutate: addCurator } = useMutation(ADD_CURATOR)
const form = ref<any>({})
const submit = async () => {
  const variable = {
    ...form.value,
    role: 'CURATOR',
    phone: form.value.phone.replaceAll(' ', '').replaceAll('-', '').replace('(', '').replace(')', '')
  }
  const res = await addCurator({ data: variable })
  if (!res.data) return
  useRouter().push('/curators')
}
</script>

<template>
  <FormCurator v-model="form" label="Добавить куратора" @submit="submit" />
</template>

<style lang="scss" scoped></style>