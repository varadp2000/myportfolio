<template>
  <div>
    <v-container class="topcontainer">
      <v-row justify="center" style="margin-top:5px">
        <v-col>
          <v-list>
            <v-subheader style="font-size:50px;font-weight:bold;">
              Front End
            </v-subheader>
            <v-divider style="margin-top:20px;margin-bottom:20px" />
            <v-list-item
              class="listitem"
              v-for="item in frontend"
              :key="item.id"
              @click=""
            >
              <v-list-item-avtar>
                <img :src="item.icon" width="30" style="margin-right:10px" />
              </v-list-item-avtar>
              <v-list-item-content>
                <v-list-item-title style="font-size:30px">{{
                  item.name
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list>
            <v-subheader style="font-size:50px;font-weight:bold">
              Back End
            </v-subheader>
            <v-divider style="margin-top:20px;margin-bottom:20px" />
            <v-list-item
              class="listitem"
              v-for="item in backend"
              :key="item.id"
              @click=""
            >
              <v-list-item-avtar>
                <img :src="item.icon" width="30" style="margin-right:10px" />
              </v-list-item-avtar>
              <v-list-item-content>
                <v-list-item-title style="font-size:30px">{{
                  item.name
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list>
            <v-subheader style="font-size:50px;font-weight:bold">
              Database
            </v-subheader>
            <v-divider style="margin-top:20px;margin-bottom:20px" />
            <v-list-item
              class="listitem"
              v-for="item in database"
              :key="item.id"
              @click=""
            >
              <v-list-item-avtar>
                <img :src="item.icon" width="30" style="margin-right:10px" />
              </v-list-item-avtar>
              <v-list-item-content>
                <v-list-item-title style="font-size:30px">{{
                  item.name
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list>
            <v-subheader style="font-size:50px;font-weight:bold">
              Server
            </v-subheader>
            <v-divider style="margin-top:20px;margin-bottom:20px" />
            <v-list-item
              class="listitem"
              v-for="item in server"
              :key="item.id"
              @click=""
            >
              <v-list-item-avtar>
                <img :src="item.icon" width="30" style="margin-right:10px" />
              </v-list-item-avtar>
              <v-list-item-content>
                <v-list-item-title style="font-size:30px">{{
                  item.name
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list>
            <v-subheader style="font-size:50px;font-weight:bold">
              Apps
            </v-subheader>
            <v-divider style="margin-top:20px;margin-bottom:20px" />
            <v-list-item
              class="listitem"
              v-for="item in app"
              :key="item.id"
              @click=""
            >
              <v-list-item-avtar>
                <img :src="item.icon" width="30" style="margin-right:10px" />
              </v-list-item-avtar>
              <v-list-item-content>
                <v-list-item-title style="font-size:30px">{{
                  item.name
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      frontend: [
        {
          id: 0,
          name: "HTML5",
          icon: "https://cdn.worldvectorlogo.com/logos/html5.svg",
        },
        {
          id: 1,
          name: "JavaScript",
          icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
        },
        {
          id: 2,
          name: "CSS3",
          icon: "https://cdn.worldvectorlogo.com/logos/css-5.svg",
        },
        {
          id: 3,
          name: "BootStrap",
          icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg",
        },
        {
          id: 4,
          name: "ReactJS",
          icon: "https://cdn.worldvectorlogo.com/logos/react.svg",
        },
        {
          id: 5,
          name: "VueJS",
          icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
      ],
      backend: [
        {
          id: 0,
          name: "PHP",
          icon: "https://cdn.worldvectorlogo.com/logos/php.svg",
        },
        {
          id: 1,
          name: "Laravel",
          icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
        },
        {
          id: 2,
          name: "NodeJS",
          icon: "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg",
        },
        {
          id: 3,
          name: "ExpressJS",
          icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
        },
        {
          id: 4,
          name: "Java Spring",
          icon: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
        },
        {
          id: 5,
          name: "Django",
          icon: "https://cdn.worldvectorlogo.com/logos/django.svg",
        },
      ],
      database: [
        {
          id: 0,
          name: "MySQL",
          icon: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
        },
        {
          id: 1,
          name: "SQLite",
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/1200px-Sqlite-square-icon.svg.png",
        },
        {
          id: 2,
          name: "PostgreSQL",
          icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        },
        {
          id: 3,
          name: "MongoDB",
          icon: "https://cdn.worldvectorlogo.com/logos/mongodb.svg",
        },
        {
          id: 4,
          name: "Firebase",
          icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
        },
      ],
      server: [
        {
          id: 0,
          name: "Apache",
          icon: "https://cdn.worldvectorlogo.com/logos/apache.svg",
        },
        {
          id: 1,
          name: "AWS",
          icon: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
        },
        {
          id: 2,
          name: "DigitalOcean",
          icon: "https://cdn.worldvectorlogo.com/logos/digitalocean.svg",
        },
        {
          id: 3,
          name: "Heroku",
          icon: "https://cdn.worldvectorlogo.com/logos/heroku.svg",
        },
        {
          id: 4,
          name: "Netlify",
          icon: "https://cdn.worldvectorlogo.com/logos/netlify.svg",
        },
      ],
      app: [
        {
          id: 0,
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter-logo.svg",
        },
        {
          id: 1,
          name: "Quasar",
          icon: "https://cdn.quasar.dev/logo/512/quasar-logo.png",
        },
        {
          id: 2,
          name: "Java",
          icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        },
        {
          id: 3,
          name: "Android Studio",
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/1200px-Android_Studio_icon.svg.png",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
.topcontainer {
  text-align: left;
  font-family: "Times New Roman", Times, serif;
}
.listitem :hover {
  background-color: lightgrey;
}
</style>
