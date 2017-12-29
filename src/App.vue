<template>
<div>
  <router-view></router-view>
  <landing-footer></landing-footer>
</div>
</template>

<script>
import Footer from './components/Footer.vue';
export default {
  name: 'app',
  components: {
    landingFooter: Footer,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.cristianoText {
  font-size: 1.2em;
}

a {
  color: #42b983;
}
img.card-img {
  opacity: 0.1;
}
.overlay {
    position:absolute;
    top:50%;
    left:30%;
    z-index:1;
}
.videoText {
 color:white; 
 font-size: 2em;
}
.space {
  margin-top: 10%;
}
.titleText {
  font-size: 2em;
}
</style>
