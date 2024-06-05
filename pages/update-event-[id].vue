<script setup lang="ts">
import { ref } from 'vue'
import BackBtn from '../components/modules/BackBtn.vue'
import { useAppStore } from '@/store/app.ts'
import FormEvent from '~/components/modules/FormEvent.vue'
import validateRoute from '@/validateRoute/index'
import { GET_EVENT, UPDATE_EVENT } from '@/query/event/index'
definePageMeta({
  validate: validateRoute('CURATOR')
})
const appStore = useAppStore()
appStore.currentTitle = 'Изменить мероприятие'

const router = useRouter()

const { data } = await useAsyncQuery(GET_EVENT, { id: Number(router.currentRoute.value.params.id) })
const { mutate: updateEvent } = useMutation(UPDATE_EVENT)

console.log(data)
const form = ref()

if (data.value) {
  form.value = {
    id: data.value.getEvent.id,
    name: data.value.getEvent.name,
    description: data.value.getEvent.description,
    date: {
      start: new Date(data.value.getEvent.dateStart),
      end: new Date(data.value.getEvent.dateEnd),
    },
    selectedUser: data.value.getEvent.citizenOnEvent.map(item => Number(item.citizenId))
  }
}

const submit = async () => {
  const variable = {
    name: form.value.name,
    description: form.value.description,
    dateStart: form.value.date.start,
    dateEnd: form.value.date.end,
    citizenIds: form.value.selectedUser
  }
  const res = await updateEvent({ id: Number(form.value.id), data: variable })
  if (!res?.data) return
  router.push('/')
}

</script>

<template>
  <div class="flex flex-col gap-4">
    <BackBtn to="/" />
    <FormEvent v-model="form" label="Изменить мероприятие" @submit="submit" />
  </div>
</template>


<style lang="scss" scoped></style>