<script setup lang="ts">
import { useAppStore } from '~/store/app.ts'
import { type NavList } from '~/types/Nav.ts'
const appStore = useAppStore()

const route = useRoute()
const navigation: NavList = appStore.getNav

</script>

<template>
    <div class="flex flex-col items-center absolute gap-6 top-6 left-6">
        <Icon name="iconamoon:3d" size="40"></Icon>
        <ul class="flex flex-col items-center gap-4">
            <li v-for="(item, key) in navigation" :key="key" :class="route.path === item.href ? 'active' : ''"
                class="p-2">
                <nuxt-link :to="item.href">
                    <Icon v-if="item.icon" size="30" :name="item.icon"></Icon>
                    <!-- <img v-if="item.image" :src="item.image" /> -->
                    <div v-if="item.image" v-html="item.image" class="my-icon" />
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.active {
    background: rgba(180, 192, 197, 1);
    border-radius: 8px;

    svg * {
        fill: #FFF;
    }

    transition: all 0.3s;
}

.my-icon>* {
    width: 30px;
    height: auto;
}

.active .my-icon * {
    fill: #FFF;
}
</style>