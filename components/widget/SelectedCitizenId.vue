<script lang="ts" setup>
import { useUserStore } from '~/store/user'
const storeUser = useUserStore()

const props = defineProps<{
    modelValue?: Array<number>
}>()
const emit = defineEmits(['update:modelValue'])

const citizen = computed(() => {
    return storeUser.list
})

const selectedCitizen = ref<Array<number>>([])

watch(props, () => {
    if (props.modelValue && props.modelValue !== selectedCitizen.value)
        selectedCitizen.value = props.modelValue
})
</script>

<template>
    <USelectMenu class="w-full" v-model="selectedCitizen" multiple :options="citizen" value-attribute="id"
        option-attribute="name" />
</template>


<style lang="scss" scoped></style>