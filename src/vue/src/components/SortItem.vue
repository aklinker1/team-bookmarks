<template>
  <div class="SortItem noselect" :class="{ lightTheme }" v-ripple="rippleColor">
    <div class="icon">
      <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24">
        <path :fill="iconColor" d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
      </svg>
    </div>
    <p>
      {{ name }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ThemeMixin from '../mixins/ThemeMixin';

export default Vue.extend({
  mixins: [ThemeMixin],
  props: {
    name: String,
  },
});
</script>

<style lang="scss" scoped>
.SortItem {
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 250ms;
  border: 1px solid rgba(255, 255, 255, 0);
  padding: 0 8px;
  cursor: pointer;
  border-radius: 3px;

  &.sortable-chosen {
    border: 1px solid rgba(255, 255, 255, 0.24);
    background-color: rgba(255, 255, 255, 0.06);
  }

  .icon {
    width: 24px;
    height: 24px;
    padding: 4px;
    margin-right: 12px;
  }

  &.lightTheme {
    border: 1px solid rgba(0, 0, 0, 0);

    &.sortable-chosen {
      border: 1px solid rgba(0, 0, 0, 0.18);
      background-color: rgba(0, 0, 0, 0.06);
    }
  }
}
</style>
