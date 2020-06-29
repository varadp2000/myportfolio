<template>
  <div style="margin-bottom:0px">
    <v-app-bar app color="dark" dark style="">
      <div class="d-flex align-center">
        <img src="../assets/logo.png" style="">
      </div>

      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <v-btn @click="$vuetify.goTo('#home')" text>
          Home
        </v-btn>
        <v-btn @click="$vuetify.goTo('#services')" text>
          Services
        </v-btn>
        <v-btn @click="$vuetify.goTo('#skills')" text>
          Skills
        </v-btn>
        <v-btn @click="$vuetify.goTo('#portfolio')" text>
          Portfolio
        </v-btn>
        <v-btn @click="$vuetify.goTo('#contact')" text>
          Contact
        </v-btn>
      </div>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="hidden-md-and-up" text light v-bind="attrs" v-on="on">
            <v-icon>
              fas fa-bars
            </v-icon>
          </v-btn>
        </template>
        <div class="hidden-md-and-up">
          <v-list>
            <v-list-item>
              <v-btn @click="$vuetify.goTo('#home')" text text>
                Home
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="$vuetify.goTo('#services')" text text>
                Services
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="$vuetify.goTo('#skills')" text text>
                Skills
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="$vuetify.goTo('#portfolio')" text text>
                Portfolio
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="$vuetify.goTo('#contact')" text text>
                Contact
              </v-btn>
            </v-list-item>
          </v-list>
        </div>
      </v-menu>
    </v-app-bar>
  </div>
</template>
