<template>
  <span>
    Note sur {{ matiere }} : {{ note }} =
    <span v-if="note > 10">{{ matiere }} validé</span>
    <span v-else><b>{{ matiere }} non validé</b></span>
  </span>
</template>

<script>
export default {
  name: 'Note',
  props: {
    matiere: String,
    note: Number
  }
}
</script>

<style scoped>

</style>
