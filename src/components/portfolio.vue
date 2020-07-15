<template>
  <div>
    <v-container>
      <v-row>
        <v-hover
          v-for="work in works"
          :key="work.id"
          v-slot:default="{ hover }"
        >
          <v-card
            width="400"
            height="300"
            class="mx-auto my-10"
            :color="work.color"
          >
            <v-card-title
              style="justify-content:center;color:white;font-size:50px;margin-top:35%"
              >{{ work.name }}
            </v-card-title>
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                <v-btn
                  color="white"
                  style="border-radius:100%;width:60px;height:60px"
                  outlined
                  @click="goto(work.link)"
                  ><v-icon>fas fa-angle-right</v-icon></v-btn
                >
              </div>
            </v-expand-transition>
          </v-card>
        </v-hover>
      </v-row>
      <br />
      <div style="margin-top:20px; text-align:center">
        <p style="color:red;font-size:30px">
          More Awesome Projects Coming Soon...
        </p>
        <v-progress-linear
          indeterminate
          color="blue darken-2"
        ></v-progress-linear>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      works: [
        {
          id: 0,
          name: "Tid.nu",
          link: "https://tid.nu",
          color: "orange",
        },
        {
          id: 1,
          name: "Sugarpot",
          link: "https://virtualkerala.com",
          color: "#AD5594",
        },
        {
          id: 2,
          name: "Hungerstay",
          link: "https://hungerstay.com",
          color: "green",
        },
        {
          id: 3,
          name: "Mango Web",
          link: "https://github.com/varadp2000/mangoo-web",
          color: "red",
        },
        {
          id: 4,
          name: "Drailnet",
          link: "http://drailnet.com",
          color: "#16A7E5",
        },
      ],
    };
  },
  methods: {
    goto(link) {
      window.location.href = link;
    },
  },
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
