<template>
<div>
  <b-container class="space">
     <b-row>
       <b-col>
         © 2017 SPORT, Inc
       </b-col>
       <b-col>
          <p><a target="_self" href="#">Contact
                            Us</a></p>
       </b-col>
       <b-col>
         <p> | </p>
       </b-col>
       <b-col>
           <p><a target="_self" href="#">Terms of Use</a></p>
       </b-col>
    </b-row>
</b-container>
</div>  
</template>

<script>
export default {
  name: 'footer',
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
</style>
