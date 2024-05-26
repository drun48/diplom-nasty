<script setup lang="ts">

const emit = defineEmits<{
    sendComment: [string]
}>()

const input = ref('')

const sendComment = () => {
    emit('sendComment', input.value)
    input.value = ''
}
</script>

<template>
    <form class="flex gap-2" @submit.prevent="sendComment">
        <input v-model="input" class="flex-auto" placeholder="Введите комментарий" />
        <button class="btn-input">
            <Icon name="i-material-symbols-mode-comment" />
        </button>
    </form>
</template>

<style lang="scss" scoped>
input {
    background: #FFF;
    border-radius: 0.25rem;
    padding: 4px 8px;
    color: black;
    outline: none;
    border:1px solid rgba(0, 0, 0, 0.12);
}

input::selection {
    background: #86befe;
}

.btn-input {
    background: #218aff;
    padding: 4px;
    border-radius: 4px;
    width: 30px;
    aspect-ratio: 1/1;

    svg * {
        fill: #fdfdfd;
    }
}

.btn-input:hover {
    background: #218aff;
}
</style>