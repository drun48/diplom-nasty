<script setup lang="ts">
import { reactive } from 'vue'
import IMask from 'imask';
import moment from 'moment'

const dateRangeStr = reactive<{ start: string, end: string }>({
  start: '',
  end: '',
})
const dateRange = reactive<{ start: Date | null, end: Date | null }>({
  start: null,
  end: null,
})

const _date_range_start = ref<string | UInput>('')
const _date_range_end = ref<string | UInput>('')
const momentFormat = 'DD.MM.YYYY HH:mm';
const configMask = {
  mask: Date,
  pattern: momentFormat,
  format: (date: any) => moment(date).format(momentFormat),
  parse: (str: any) => moment(str, momentFormat) as any,
  blocks: {
    YYYY: {
      mask: IMask.MaskedRange,
      from: 1970,
      to: 2030
    },
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    },
    DD: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31
    },
    HH: {
      mask: IMask.MaskedRange,
      from: 0,
      to: 23
    },
    mm: {
      mask: IMask.MaskedRange,
      from: 0,
      to: 59
    }
  }
}
watch(_date_range_start, () => {
  IMask(_date_range_start.value.input, configMask)
})
watch(_date_range_end, () => {
  IMask(_date_range_end.value.input, configMask)
})

</script>

<template>
  <div class="flex gap-2">
    <UInput size="sm" ref="_date_range_start" color="white" :trailing="false" placeholder="Начало"
      v-model="dateRangeStr.start" />
    <div>-</div>
    <UInput size="sm" ref="_date_range_end" color="white" :trailing="false" placeholder="Конец"
      v-model="dateRangeStr.end" />
  </div>
</template>

<style lang="scss" scoped></style>