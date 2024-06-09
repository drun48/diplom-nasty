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

const { onResult } = useQuery(GET_EVENT, { id: Number(router.currentRoute.value.params.id) }, { fetchPolicy: 'cache-and-network' })
const { mutate: updateEvent } = useMutation(UPDATE_EVENT)

const form = ref()

onResult((result) => {
  if (!result.data) return
  form.value = {
    id: result.data.getEvent.id,
    name: result.data.getEvent.name,
    description: result.data.getEvent.description,
    date: {
      start: new Date(result.data.getEvent.dateStart),
      end: new Date(result.data.getEvent.dateEnd),
    },
    selectedUser: result.data.getEvent.citizenOnEvent.map(item => Number(item.citizenId))
  }
})

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