<script setup lang="ts">
import CommentApplications from '~/components/modules/CommentApplications.vue'
import SelectedSupportMeasures from '~/components/widget/SelectedSupportMeasures.vue'
import { CONFIRM_APPLICATIONS, UPDATE_APPLICATIONS } from '~/query/application/index'

const props = defineProps<{
    id: number,
    citizen: any,
    comments: Array<string>,
    request_date: Date,
    confirm_date?: Date,
    end_date?: Date,
    support_measures: Array<number>,
    open?: boolean
}>()

const emit = defineEmits<{
    changeStateOpen: [state: boolean, id: number]
}>()

const { mutate: confirm } = useMutation(CONFIRM_APPLICATIONS, { refetchQueries: ['GET_LIST_APPLICATION'] })
const { mutate: update } = useMutation(UPDATE_APPLICATIONS, { refetchQueries: ['GET_LIST_APPLICATION'] })

const card = ref({ ...props })

watch(props, () => {
    card.value = { ...props }
})

const cardConfig = computed(() => {
    return [{
        ...card.value,
        slot: 'card-application',
        defaultOpen: card.value?.open,
    }]
})

const cardStatusLabel = ['Принять в работу', 'Закрыть заявку', 'Заявка закрыта']

const cardStatus = computed(() => {
    const status = card.value.end_date ? 2 : card.value.confirm_date ? 1 : 0
    return {
        status: status,
        label: cardStatusLabel[status]
    }
})


const changeStatus = (status: number) => {
    switch (status) {
        case 0:
            confirmApplications()
            break
        case 1:
            endAplication()
            break
    }
}

const changeSelectedSupport = () => {
    console.log(card.value.support_measures)
}

const sendComment = (comment: string) => {
    updateApplications({ comment: [comment] })
}

const endAplication = () => {
    updateApplications({ end_date: new Date() })
}

async function confirmApplications() {
    const res = await confirm({ id: props.id })
    if (!res?.data) return
    const obj = {
        confirm_date: res?.data.confirmActivity?.confirm_date ? new Date(res?.data.confirmActivity?.confirm_date) : undefined
    }
    card.value = Object.assign(card.value, obj)
    emit('changeStateOpen', false, card.value.id)
}

async function updateApplications(variable: any) {
    const res = await update({ id: props.id, data: variable })
    if (!res?.data) return
    if (variable.end_date) {
        emit('changeStateOpen', false, card.value.id)
    }
}

const changeStateOpen = () => {
    card.value.open = !Boolean(card.value.open)
    emit('changeStateOpen', card.value.open, card.value.id)
}
</script>

<template>
    <UAccordion :items="cardConfig" :ui="{ wrapper: 'flex flex-col w-full' }">

        <template #card-application>
            <div class="flex flex-col p-4 rounded gap-4 applications">

                <div class="flex">

                    <div class="flex flex-auto gap-4">
                        <div class="flex flex-col gap-2">
                            <p>ФИО Заявителя</p>
                            <p>{{ card.citizen.name }}</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>Телефон Заявителя</p>
                            <p>{{ card.citizen.phone }}</p>
                        </div>
                    </div>


                    <div class="flex gap-2 change-status">
                        <p>{{ cardStatus.label }}</p>
                        <UButton v-if="cardStatus.status < 2" @click="changeStatus(cardStatus.status)">
                            <Icon name="i-ic-baseline-check" size="15" />
                        </UButton>
                    </div>
                </div>

                <SelectedSupportMeasures v-model="card.support_measures" @changeSelected="changeSelectedSupport" />

                <CommentApplications @sendComment="sendComment" :comments="card.comments" />
            </div>
        </template>

        <template #default="{ item, open }">
            <UButton class="flex text-gray-900 dark:text-white" variant="ghost" @click="changeStateOpen">

                <div class="flex flex-auto">
                    <div>
                        <p>Заявка №: {{ item.id }}</p>
                    </div>
                </div>


                <template #trailing>
                    <UIcon name="i-heroicons-chevron-right-20-solid"
                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                        :class="[open && 'rotate-90']" />
                </template>

            </UButton>
        </template>
    </UAccordion>
</template>
<style lang="scss" scoped>
.applications {
    background: #fafbfc;
}

.change-status {
    align-items: center;

    svg * {
        fill: white;
    }
}
</style>