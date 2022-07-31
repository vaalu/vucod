<template>
  <OPButton :class="cls">
    Component - {{ name }}
  </OPButton>
</template>

<script >
import '../assets/styles/styles.css'
export default {
  props: {
    property: { type: Object, required: true },
    cls: { type: String, required: true },
    name: { type: String, required: true },
  },
  data() {
    return {
      btn: this.property,
    }
  },
  created() {
  },
}
</script>
