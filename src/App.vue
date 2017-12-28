<template>
<div>
   <b-navbar sticky="true" toggleable="md" type="light" variant="light">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#"><b-img width="170" height="50" left src="http://clipart.info/images/ccovers/1496248997cr-7-cristiano-ronaldo-logo-png.png" fluid alt="Responsive image" /></b-navbar-brand>
  

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="ml-auto">
      <b-nav-item v-scroll-to="'#our-partnership'">OUR PARTNERSHIP</b-nav-item>
      <b-nav-item v-scroll-to="'#our-profile'">MY PROFILE</b-nav-item>
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
<div id="our-partnership">
  <b-card overlay
          img-src="https://farm8.staticflickr.com/7662/17102968487_d832ecaa4d_b.jpg"
          img-alt="Card Image"
          title="CRISTIANO RONALDO"
          sub-title="Lorem Ipsum">
    <b-card-body>
    <b-row align-h="center" align-v="center">
       <b-col> 
          <p class="card-text cristianoText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </b-col>
        <b-col> 
          <b-card-img 
           class="rounded-circle"
            src="http://clipart.info/images/ccovers/1496248997cr-7-cristiano-ronaldo-logo-png.png"
                    alt="Image"
                    bottom></b-card-img>
        </b-col>
    </b-row>
    </b-card-body>    
  </b-card>
</div>
 <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
>
<b-carousel-slide caption="Lorem ipsum"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="http://celebrityinsider.org/wp-content/uploads/2017/11/cristiano-ronaldo.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
<b-carousel-slide img-src="https://www.pazimbabwe.com/wp-content/uploads/2017/10/cristiano-ronaldo-real-madrid-granada-la-liga-ballon-dor_15fszo66dk5op1rygrakkp8g8z.jpg">
        <h1>Lorem ipsum!</h1>

</b-carousel-slide>
 </b-carousel>
  <div>
    <b-card>
      <b-row align-h="center" align-v="center" class="space">
      <p class="titleText">Lorem ipsum</p>
      </b-row>
    <b-row align-h="center" align-v="center" class="space">
    <div>
      <b-img rounded="circle" blank width="150" height="150" blank-color="#777" alt="img" class="m-1" />
      <b-img rounded="circle" blank width="150" height="150" blank-color="#777" alt="img" class="m-1" />
      <b-img rounded="circle" blank width="150" height="150" blank-color="#777" alt="img" class="m-1" />
      <b-img rounded="circle" blank width="150" height="150" blank-color="#777" alt="img" class="m-1" />
    </div>
    </b-row>
    </b-card>
</div>
<div id="our-profile">
  <b-card overlay
          img-src="https://farm8.staticflickr.com/7662/17102968487_d832ecaa4d_b.jpg"
          img-alt="Card Image"
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
    </b-card-body> 
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
