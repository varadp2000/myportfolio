<template>
  <div style="height:100%">
    <v-container class="topcontainer" justify="center">
      <div class="servcard">
        <v-row justify="center">
          <v-card
            style="height:350px;width:350px;margin-bottom:30px;text-align:center;padding:50px;margin:20px;border-radius:100%;border:solid;"
            v-for="service in services"
            :key="service.id"
            class="Servcard"
          >
            <v-card-title
              class="element"
              style="width:auto;text-align:center;margin-top:30px;"
              ><img
                :src="service.icon"
                width="70px;"
                style="margin-left: auto;margin-right: auto;"
              />
              <p style="margin-top:5px;text-align:center">
                <br/>
                {{ service.name }}<br />
                {{ service.name1 }}
              </p>
            </v-card-title>
          </v-card>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import frontend from "../assets/frontend.jpg";
export default {
  data: function() {
    return {
      services: [
        {
          id: 0,
          name: "Frontend Development",
          icon:
            "https://ya-webdesign.com/transparent250_/website-design-icon-png-4.png",
        },
        {
          id: 1,
          name: "Back End Development",
          icon:
            "https://cdn.iconscout.com/icon/premium/png-512-thumb/backend-developer-1-478025.png",
        },
        {
          id: 2,
          name: "Database Design and",
          name1:"Management",
          icon:
            "http://www.myiconfinder.com/uploads/iconsets/b100d7840c43e1782d60b71983f7f4da.png",
        },
        {
          id: 3,
          name: "Server Hosting and ",
          name1: "Management",
          icon:
            "https://www.freepnglogos.com/uploads/server-png/server-icon-download-icons-17.png",
        },
        {
          id: 4,
          name: "Native Apps ",
          name1: "Development",
          icon:
            "https://cdn2.iconfinder.com/data/icons/material-line/1024/mobile_development-512.png",
        },
      ],
    };
  },
};
</script>

<style>
.element {
  word-break: keep-all;
}
.topcontainer {
  text-align: left;
  margin: 0 auto;
  text-align: center;
}
.servcard :hover {
  color: red;
  display: flex;
}
</style>
