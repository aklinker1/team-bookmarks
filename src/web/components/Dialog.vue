<template>
  <transition name="dialog" @close="$emit('close')">
    <div class="overlay-background" @click="$emit('close')">
      <div class="dialog" @click.prevent.stop>
        <div class="header">
          <slot name="header"> </slot>
        </div>

        <div class="body">
          <slot name="body"> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
/*
.overlay-background {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(32, 32, 32, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;

  &.lightTheme {
    background-color: rgba(248, 248, 248, 0.7);

    .dialog {
      background-color: rgb(248, 248, 248);
      border: 2px solid rgba(0, 0, 0, 0.12);

      * {
        color: rgba($color: #000000, $alpha: 0.9);
      }
    }
  }

  .dialog {
    width: 300px;
    padding: 16px 16px;
    background-color: rgb(28, 28, 28);
    border: 2px solid rgba(255, 255, 255, 0.18);
    border-radius: 2px;
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
}

.body {
  margin-top: 16px;
}

.dialog-enter {
  opacity: 0;
}

.dialog-leave-active {
  opacity: 0;
}

.dialog-enter .dialog,
.dialog-leave-active .dialog {
  -webkit-transform: translateY(64px);
  transform: translateY(64px);
}
*/
</style>
