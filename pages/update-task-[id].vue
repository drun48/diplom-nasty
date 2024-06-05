<script setup lang="ts">
import { ref } from 'vue'
import BackBtn from '~/components/modules/BackBtn.vue'
import FormTask from '~/components/modules/FormTask.vue'
import { useAppStore } from '@/store/app.ts'
import validateRoute from '@/validateRoute/index'
import { GET_TASK, UPDATE_TASK } from '@/query/task/index'

definePageMeta({
  validate: validateRoute('CURATOR')
})
const appStore = useAppStore()
appStore.currentTitle = 'Изменить задачу'

const router = useRouter()
const { data } = await useAsyncQuery(GET_TASK, { id: Number(router.currentRoute.value.params.id) })
const { mutate: updateTask } = useMutation(UPDATE_TASK)

const form = ref()

if (data.value) {
  form.value = {
    id: data.value.getTask.id,
    description: data.value.getTask.description,
    selectedApplication: data.value.getTask.activityId,
    date: {
      start: data.value.getTask.dateStart,
      end: data.value.getTask.dateEnd,
    },
  }
}

const submit = async () => {
  const variable = {
    description: form.value.description,
    activityId: form.value.selectedApplication,
    dateStart: form.value.date.start,
    dateEnd: form.value.date.end,
  }
  const res = await updateTask({ id: Number(form.value.id), data: variable })
  if (!res?.data) return
  router.back()
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <BackBtn  @click="router.back()"/>
    <FormTask v-model="form" label="Изменить задачу" @submit="submit" />
  </div>
</template>


<style lang="scss" scoped></style>