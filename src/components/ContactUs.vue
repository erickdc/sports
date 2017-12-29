<template>
  <div>
    <b-form inline>
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Jane Doe" />
      <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="inlineFormInputGroupUsername2" placeholder="Username" />
      </b-input-group>
      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
      <b-button variant="primary">Save</b-button>
    </b-form>
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
