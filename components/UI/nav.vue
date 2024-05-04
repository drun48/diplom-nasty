<script setup lang="ts">
import { computed } from 'vue';

const route = useRoute()
const navigation: Array<{ icon: string, href: string }> = [
    {
        icon: 'mdi:account-eye',
        href: '/users',
    },
    {
        icon: 'solar:calendar-bold',
        href: '/',
    }
]

</script>

<template>
    <div class="flex flex-col items-center absolute gap-6 top-6 left-6">
        <Icon name="iconamoon:3d" size="40"></Icon>
        <ul class="flex flex-col items-center gap-4">
            <li v-for="(item, key) in navigation" :key="key"
                :class="route.path === item.href ? 'active' : ''"
                class="p-2">
                <nuxt-link :to="item.href">
                    <Icon size="30" :name="item.icon"></Icon>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.active {
    background: rgba(180, 192, 197, 1);
    border-radius: 8px;
    svg *{
        fill: #FFF;
    }
    transition: all 0.3s;
}
</style>