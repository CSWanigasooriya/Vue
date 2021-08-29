<template>
  <h3>{{ title }}</h3>
  <Button text="Custom " color="red" />
  <Button text="Custom " />
</template>

<script>
import Button from "./Button.vue";

export default {
  props: {
    title: String,
  },
  components: {
    Button,
  },
};
</script>
