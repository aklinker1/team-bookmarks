<template>
  <Dialog v-if="isVisible" @close="$emit('close')">
    <h3 slot="header">Change Sort Order</h3>
    <div slot="body">
      <draggable v-model="list" @start="dragging = true" @end="dragging = false">
        <transition-group>
          <SortItem
            v-for="category in sortedCategories"
            :key="category.name"
            :name="category.name"
          />
        </transition-group>
      </draggable>
    </div>
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Dialog from '@/components/Dialog.vue';
import SortItem from '@/components/SortItem.vue';
import SortedCategoriesMixin from '../mixins/SortedCategoriesMixin';
import draggable from 'vuedraggable';

export default Vue.extend({
  components: { Dialog, SortItem, draggable },
  mixins: [SortedCategoriesMixin],
  props: {
    isVisible: Boolean,
  },
  computed: {
    list: {
      get(): ICategory[] {
        // @ts-ignore
        return this.sortedCategories;
      },
      set(categories: ICategory[]): void {
        const orderMap: SortOrderMap = {};
        categories.forEach((category, index) => {
          orderMap[category.name] = index;
        });
        this.$store.commit('updateCategoryOrder', orderMap);
      },
    },
  },
  data() {
    return {
      dragging: false,
    };
  },
});
</script>

<style lang="scss" scoped>
h3 {
  opacity: 0.48;
}
</style>
