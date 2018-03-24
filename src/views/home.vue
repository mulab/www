<template lang="pug">
#home
  img(src="../assets/logo.png")
  hello-world(msg="Welcome to Your Vue.js + TypeScript App")
</template>


<script>
import HelloWorld from '@/components/HelloWorld'; // @ is an alias to /src

export default {
  components: {
    HelloWorld,
  },
};
</script>
