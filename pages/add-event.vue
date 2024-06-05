<script setup lang="ts">
import { ref } from 'vue'
import BackBtn from '../components/modules/BackBtn.vue'
import { useAppStore } from '@/store/app.ts'
import FormEvent from '~/components/modules/FormEvent.vue'
import validateRoute from '@/validateRoute/index'
import { ADD_EVENT } from '@/query/event/index'

definePageMeta({
  validate: validateRoute('CURATOR')
})

const appStore = useAppStore()
appStore.currentTitle = 'Добавить мероприятие'

const { mutate: addEvent } = useMutation(ADD_EVENT)

const form = ref<any>()

const submit = async () => {
  const variable = {
    name: form.value.name,
    description: form.value?.description,
    dateStart: form.value?.date?.start ?? '',
    dateEnd: form.value?.date?.end ?? '',
    citizenIds: form.value?.selectedUser,
  }
  const res = await addEvent({ data: variable })
  if(!res?.data)return
  useRouter().push('/')
}

</script>

<template>
  <div class="flex flex-col gap-4">
    <BackBtn to="/" />
    <FormEvent v-model="form" @submit="submit" label="Добавить куратора" />
  </div>
</template>


<style lang="scss" scoped></style>