<script setup lang="ts">
import CuratorTable from '~/components/modules/CuratorTable.vue'

</script>

<template>
    <section>
        <div class="flex justify-between items-center">
            <div class="flex gap-4">
                <SelectedCategory v-model="selectedFace" />
                <UInput icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
                    placeholder="ФИО" v-model="name" />
            </div>
            <nuxt-link to="/add-curator" class="flex gap-2 items-center text-blue-500">
                <Icon name="solar:user-plus-broken" size="16"></Icon>
                <p>Добавить куратора</p>
            </nuxt-link>
        </div>
        <CuratorTable />
    </section>
</template>


<style lang="scss" scoped></style>