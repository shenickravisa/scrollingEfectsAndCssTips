<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  min-height: 100vh;
  width: 100%;
  color: #2c3e50;
}
</style>

<script>
export default {
  name: 'app',
  components: {
  },
  props: [],
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {},
  methods: {
  }
}
</script>