<template>
    <div id="app">
        <api-seek></api-seek>
    </div>
</template>

<script>
  import ApiSeek from './components/ApiSeek'

  export default {
    name: 'app',
    components: {
      ApiSeek
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
