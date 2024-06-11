<script setup lang="ts">
import { ADD_SUPPORT_MEASURE } from '@/query/support-measures/index'
import FormSupportMeasures from '@/components/modules/FormSupportMeasures.vue'

const form = ref()

const { mutate } = useMutation(ADD_SUPPORT_MEASURE)

const submit = async () => {
    const res = await mutate({ data: form.value })
    if (!res?.data) return
    useRouter().push('/support-measures')
}
</script>

<template>
    <FormSupportMeasures v-model="form" label="Добавить поддержку" @submit="submit" />
</template>

<style lang="scss" scoped></style>