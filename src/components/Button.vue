<template>
  <button @click="click()" :style="{ background: color }">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "One",
    },
    color: {
      type: String,
      default: "green",
    },
  },
  methods: {
    click() {
      console.log("Message");
    },
  },
};
</script>

<style scoped>
button {
  padding: 1rem;
  color: aliceblue;
  border-radius: 1em;
  margin: 1em;
}
</style>
