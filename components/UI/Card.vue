<script setup lang="ts">

const props = defineProps<{
    label: string,
    title: string,
    tooltip: string,
    color:string
}>()
</script>

<template>
    <UTooltip :popper="{ arrow: true, scroll: true }">
        <template #text>
            <p class="italic">{{ tooltip }}</p>
            <p class="italic">{{ tooltip }}</p>
        </template>
        <div class="flex flex-col gap-1.5 cursor-pointer card" :style="`background:${color}`">
            <div>
                <p>{{ label }}</p>
            </div>
            <div>
                <h3>{{ title }}</h3>
            </div>
        </div>
    </UTooltip>
</template>


<style lang="scss" scoped>
::v-deep .truncate {
    white-space: normal;
    height: auto;
}

::v-deep .before\:ring-gray-200::before {
    background: white;
}

.card{
    width: 100%;
    border-bottom: 1px solid #E0E0E0;
}
</style>