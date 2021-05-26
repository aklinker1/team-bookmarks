<template>
  <div ref="gridRef">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import Masonary from "masonry-layout";

console.log(Masonary);

export default defineComponent({
  props: {
    itemSelector: { type: String, required: true },
    columnWidth: { type: Number, default: undefined },
    gutter: { type: Number, default: undefined },
    horizontalOrder: { type: Boolean, default: undefined },
    isFitWidth: { type: Boolean, default: undefined },
    transitionDuration: { type: String, default: undefined },
    stagger: { type: String, default: undefined },
  },
  setup(props) {
    const gridRef = ref<HTMLDivElement | null>(null);
    const masonary = ref<Masonary | undefined>();
    watch(gridRef, (newGridRef) => {
      if (!newGridRef) return;
      const options = JSON.parse(JSON.stringify(props));
      masonary.value = new Masonary(newGridRef, options);
    });

    return {
      gridRef,
      masonary,
    };
  },
});
</script>
