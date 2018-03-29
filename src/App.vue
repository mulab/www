<template>
  <div id="app">
    <Navigation
      background-color="#222"
      text-color="#fff"
      active-text-color="#ffd04b"
      />
    <router-view/>
    <el-button>Button</el-button>
    <Footer
      background-color="#222"
      text-color="white"
      />
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default {
  components: {
    Navigation,
    Footer,
  },
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
