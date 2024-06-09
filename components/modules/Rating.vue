<script setup lang="ts">
const props = defineProps<{
    rating: number
}>()
console.log(props)
</script>

<template>
    <div>
        <Icon name="i-mdi-star" size="32" v-for="i in 5" :key="i" :class="{ 'active': rating >= i }"/>
    </div>
</template>

<style lang="scss" scoped>
.active *{
    fill:#ffe234;
}
</style>