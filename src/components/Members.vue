<template>
  <div>
    <img :src="photo" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    position: String,
    photo: Object,
  },
};
</script>
