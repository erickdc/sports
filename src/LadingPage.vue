<template>
<div>
   <b-navbar sticky="true" toggleable="md" type="light" variant="light">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#"><b-img width="170" height="50" left src="http://clipart.info/images/ccovers/1496248997cr-7-cristiano-ronaldo-logo-png.png" fluid alt="Responsive image" /></b-navbar-brand>
  

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="ml-auto">
      <b-nav-item href="#">OUR PARTNERSHIP</b-nav-item>
      <b-nav-item href="#div-id" v-scroll-to="'#div-id'">MY PROFILE</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
<b-container fluid>

<div align="center" class="embed-responsive embed-responsive-16by9">
    <video autoplay loop class="embed-responsive-item">
        <source src="https://s3-us-west-2.amazonaws.com/doosan-microsite/doosan_hero_video.mp4" type="video/mp4">
    </video>
    <p class="overlay videoText">HERE GOES CRISTIANO RONALDO VIDEO</p>
</div>
<div id="div-id">
  <b-card overlay
          img-src="https://farm8.staticflickr.com/7662/17102968487_d832ecaa4d_b.jpg"
          img-alt="Card Image"
          text-variant="white"
          title="CRISTIANO RONALDO"
          sub-title="Lorem Ipsum">
    <b-card-body>
    <b-row align-h="center" align-v="center">
        <b-col> 
          <b-card-img 
           class="rounded-circle"
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/08/12/cristiano-ronaldo.jpg"
                    alt="Image"
                    bottom></b-card-img>
        </b-col>
        <b-col> 
          <p class="card-text cristianoText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </b-col>
    </b-row>
    </b-card-body>=     
  </b-card>
</div>
</b-container>
</div>
</template>

<script>
export default {
  name: 'app',
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
  opacity: 0.7;
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
</style>
