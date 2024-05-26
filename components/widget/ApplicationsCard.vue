<script setup lang="ts">
import CommentApplications from '~/components/modules/CommentApplications.vue'

const props = defineProps<{
    id: number,
    citizen: any,
    comments: Array<string>,
    request_date: Date,
    confirm_date?: Date,
    end_date?: Date,
    support_measures: Array<any>
}>()

const card = computed(() => {
    return [{
        id: props.id,
        slot: 'card-application',
        citizen: props.citizen,
        comments: props.comments,
    }]
})

const cardStatusLabel = ['Принять в работу', 'Закрыть заявку', 'Заявка закрыта']

const cardStatus = computed(() => {
    const status = props.end_date ? 2 : props.confirm_date ? 1 : 0
    return {
        status: status,
        label: cardStatusLabel[status]
    }
})

const sendComment = (comment: string) => {
    console.log(comment)
}

const changeStatus = (status: number) => {
    switch (status) {
        case 0:
            break
        case 1:
            break
    }
}
</script>

<template>
    <UAccordion :items="card" :ui="{ wrapper: 'flex flex-col w-full' }">

        <template #card-application="{ item }">
            <div class="flex flex-col p-4 rounded gap-4 applications">

                <div class="flex">

                    <div class="flex flex-auto gap-4">
                        <div class="flex flex-col gap-2">
                            <p>ФИО Заявителя</p>
                            <p>{{ item.citizen.name }}</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>Телефон Заявителя</p>
                            <p>{{ item.citizen.phone }}</p>
                        </div>
                    </div>

                    <div class="flex gap-2 change-status">
                        <p>{{ cardStatus.label }}</p>
                        <UButton v-if="cardStatus.status < 2" @click="changeStatus(cardStatus.status)">
                            <Icon name="i-ic-baseline-check" size="15" />
                        </UButton>
                    </div>
                </div>

                <CommentApplications @sendComment="sendComment" :comments="item.comments" />
            </div>
        </template>

        <template #default="{ item, open }">
            <UButton class="flex text-gray-900 dark:text-white" variant="ghost">

                <div class="flex flex-auto">
                    <div>
                        <p>Заявка под номером: {{ item.id }}</p>
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