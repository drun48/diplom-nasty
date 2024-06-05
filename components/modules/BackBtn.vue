<script setup lang="ts">
const props = defineProps<{to?:string}>()
</script>

<template>
    <nuxt-link :to="to" class="w-10">
        <Icon name="i-solar-arrow-left-linear" size="24"></Icon>
    </nuxt-link>
</template>


<style></style>