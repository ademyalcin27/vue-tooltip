<script setup lang="ts">
import { ref } from 'vue';
import ToolTip from './plugin/ToolTip.vue';
const title = ref('Hello World');
</script>

<template>
  <div> 
  <input v-model="title" />
    <span>
      Hover me for tooltip
      <ToolTip :text="title" :options="{  placement: 'right',}"/>
    </span>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
./plugin/Tooltip.vue./components/ToolTip.vue