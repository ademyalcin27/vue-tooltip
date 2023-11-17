<template>
  <span ref="tooltipRef"></span>
</template>

<script setup lang="ts">
import tippy from 'tippy.js';
import type { Instance ,Props} from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { ref,onMounted, onUpdated, onUnmounted } from 'vue';

interface TooltipProps {
  text: string;
  options?: Partial<Props>;
}
const props = defineProps<TooltipProps>();
const tooltipRef = ref<HTMLElement>();

const tooltipInstance = ref<Instance>();

function destroyTooltip() {
  if (tooltipInstance.value) {
    tooltipInstance.value.destroy();
  }
}

function initTooltip() {
  destroyTooltip()
  tooltipInstance.value = tippy(tooltipRef.value?.parentNode as HTMLElement, {
    content: props.text,
    ...props.options
  });
}

onMounted(initTooltip)
onUpdated(initTooltip) 
onUnmounted(destroyTooltip)

</script>

<style scoped>

</style>