<script setup lang="ts">
import { getWeekTitle, formatDayMounth, MounthInit } from '../../utils/utilDate'
import rangeDate from '../UI/rangeDate.vue'


const title: Array<string> = getWeekTitle()


const firsDateCalendar = ref(new Date())
const sectorCount = ref(0)
const currentMounth = ref(0)
const currentYear = ref(0)


const calendarInit = (date: Date) => {
    const { count, dateFirst } = MounthInit(date.getMonth(), date.getFullYear())
    currentMounth.value = date.getMonth()
    currentYear.value = date.getFullYear()
    firsDateCalendar.value = dateFirst
    sectorCount.value = count
}
calendarInit(new Date())

const changeMounth = (value: number) => {
    const date = new Date(currentYear.value, currentMounth.value + value, 1)
    calendarInit(date)
}

const strCurrentMounth = computed(() => {
    return formatMounthYear(new Date(currentYear.value, currentMounth.value, 1))
})

const sectors = computed(() => {
    return new Array(sectorCount.value).fill(null).map((item, index) => {
        const day = structuredClone(firsDateCalendar.value)
        day.setDate(day.getDate() + index)
        return formatDayMounth(day)
    })
})

</script>

<template>
    <div class="flex flex-col gap-4">
        <rangeDate :label="strCurrentMounth" @changeDate="changeMounth"></rangeDate>
        <div>
            <div class="grid grid-cols-7 bg-white">
                <div v-for="item in title" :key="item" class="flex justify-center ">
                    <p>{{ item }}</p>
                </div>
            </div>
            <div class="grid grid-cols-7">
                <div v-for="(item, index) in sectors" :key="index" class="sector">
                    <div class="flex px-4 bg-gray-200">
                        <p style="color:rgba(144, 156, 162, 1);">{{ item }}</p>
                    </div>
                    <div class="flex">
                        <div class="min-h-48 aspect-square sector__content">
                            <slot />
                        </div>
                        <hr v-if="(index + 1) % 7 > 0" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.sector__content {
    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
    flex: 1 auto;
}

.sector hr {
    border-right: 1px solid #E0E0E0;
    height: auto;
}
</style>