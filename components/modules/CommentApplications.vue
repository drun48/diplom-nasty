<script setup lang="ts">
import InputComment from '~/components/modules/InputComment.vue'

const props = defineProps<{
    comments: Array<string>
}>()

const emit = defineEmits<{
    sendComment: [string]
}>()

const sendComment = (comment: string) => {
    emit('sendComment', comment)
}
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col flex-auto gap-2">
            <div v-for="(message, index) in comments" :key="index" class="message">
                <p>{{ message }}</p>
            </div>
        </div>
        <InputComment @sendComment="sendComment" />
    </div>
</template>

<style lang="scss" scoped>
.message{
    background: rgba(235, 242, 250, 0.99);
    color: #3770b1;
    padding: 8px 12px;
    border-radius: 6px;
}
</style>