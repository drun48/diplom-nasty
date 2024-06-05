<script setup lang="ts">
import { ref } from 'vue'
import BackBtn from '~/components/modules/BackBtn.vue'
import FormTask from '~/components/modules/FormTask.vue'
import { useAppStore } from '@/store/app.ts'
import validateRoute from '@/validateRoute/index'
import { ADD_TASK } from '@/query/task/index'
definePageMeta({
  validate: validateRoute('CURATOR')
})
const appStore = useAppStore()
appStore.currentTitle = 'Добавить задачу'

const form = ref<any>()

const { mutate: addTask } = useMutation(ADD_TASK)

const submit = async () => {
  const variable = {
    description: form.value.description,
    activityId: form.value.selectedApplication,
    dateStart: form.value.date.start,
    dateEnd: form.value.date.end,
  }

  const res = await addTask({ data: variable })
  if (!res?.data) return
  useRouter().back()
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <BackBtn to="/" />
    <FormTask v-model="form" label="Добавить задачу" @submit="submit" />
  </div>
</template>


<style lang="scss" scoped></style>