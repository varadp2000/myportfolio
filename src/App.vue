<template>
  <v-app>
    <div style="margin-bottom:0px">
      <navbar />
    </div>
    <v-content>
      <div id="home" class="maindiv">
        <v-img style="height: 95vh;" src="./assets/background.jpg">
          <home />
        </v-img>
      </div>
      <div id="services" class="maindiv" style="padding-top:0vh">
        <services />
      </div>
      <div id="skills" class="maindiv" style="padding-top:20vh">
        <skills />
      </div>
      <div id="portfolio" class="maindiv" style="padding-top:20vh">
        <portfolio />
      </div>
      <div id="contact" class="maindiv" style="">
        <v-img src="./assets/contact.jpg">
        <contact />
        </v-img>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import home from "./components/home";
import navbar from "./components/navbar";
import services from "./components/services";
import skills from "./components/skills";
import portfolio from "./components/portfolio";
import contact from "./components/contact";
export default {
  name: "App",

  components: {
    HelloWorld,
    home,
    navbar,
    skills,
    services,
    portfolio,
    contact,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.maindiv {
  height: 95vh;
}
@media only screen and (max-width: 1000px) {
  .maindiv {
    height: auto;
  }
}
</style>
