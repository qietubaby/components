<template>
  <svg
    class="g-icon"
    @click="$emit('click',$event)"
    aria-hidden="true"
  >
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
export default {
  props: ['name']
}
</script>
<style lang="scss">
.g-icon {
  width: 1em;
  height: 1em;
}
</style>
