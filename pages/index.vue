<script setup lang="ts">
import CalendarEventTask from '~/components/widget/CalendarEventTask.vue'
</script>

<template>
  <div>
    <div class="flex w-full justify-end">
      <div class="flex flex-col gap-2">
        <nuxt-link to="/add-event" class="flex gap-2 items-center text-blue-500">
          <Icon name="i-material-symbols-light-calendar-add-on-rounded" size="16"></Icon>
          <p>Добавить Мероприятие</p>
        </nuxt-link>
        <nuxt-link to="/add-event" class="flex gap-2 items-center text-blue-500">
          <Icon name="i-material-symbols-light-add-task-rounded" size="16"></Icon>
          <p>Добавить Задачу</p>
        </nuxt-link>
      </div>
    </div>
    <CalendarEventTask />
  </div>
</template>

<style></style>