<template>
  <div class="topdiv" id="home">
    <v-container class="topcontainer">
      <p class="text fade-in">Varad Patil</p>
      <p class="text fade-in ml-10">Full Stack Web Developer</p>
      <v-btn outlined color="white" @click="$vuetify.goTo('#services')" outlined style="border-radius:100%;width:60px;height:60px;margin-top:40px"
        ><v-icon style="font-size:40px">fas fa-angle-down</v-icon></v-btn
      >
      <!--
      <v-row>
        <v-list>
          <v-list-item>
            <v-list-item-action-text>
              Front End Development
            </v-list-item-action-text>
          </v-list-item>
          <v-list-item>
            <v-list-item-action-text>
              Front End Development
            </v-list-item-action-text>
          </v-list-item>
          <v-list-item>
            <v-list-item-action-text>
              Front End Development
            </v-list-item-action-text>
          </v-list-item>
          <v-list-item>
            <v-list-item-action-text>
              Front End Development
            </v-list-item-action-text>
          </v-list-item>
        </v-list>
      </v-row>
      -->
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.topcontainer {
  text-align: left;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.topdiv {
  height: 100%;
  padding: auto;
}
.text {
  font-size: 70px;
  font-weight: bold;
}

.fade-in {
  animation: fadeIn ease 5s;
  -webkit-animation: fadeIn ease 5s;
  -moz-animation: fadeIn ease 5s;
  -o-animation: fadeIn ease 5s;
  -ms-animation: fadeIn ease 5s;
  color: white;
  text-shadow: 5px 5px 0px black;
}
@media only screen and (max-width: 600px) {
  .text {
    font-size: 30px;
    font-weight: bold;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
