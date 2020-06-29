<template>
  <div style="margin-top:10vh">
    <v-container class="maincontainer">
      <div class="leftdiv">
        <h1 style="text-align:center">Drop a Message</h1>
        <v-form ref="form">
          <v-text-field
            :rules="[(v) => !!v || 'Name is required']"
            v-model="name"
            label="Name"
          />
          <v-text-field
            :rules="[(v) => !!v || 'Location is required']"
            v-model="location"
            label="Location"
          />
          <v-text-field
            :rules="[(v) => v.length == 10 || 'Enter Valid Phone Number']"
            v-model="phone"
            label="Contact No."
          />
          <v-text-field
            :rules="[
              (v) => !!v || 'E-mail is required',
              (v) => /.+@.+/.test(v) || 'E-mail must be valid',
            ]"
            v-model="email"
            label="Email"
          />
          <v-textarea
            :rules="[(v) => !!v || 'Name is required']"
            v-model="message"
            label="Message"
          />
          <v-btn color="dark" @click="showDialog" outlined>Submit </v-btn>
        </v-form>
      </div>
      <div class="rightdiv">
        <p>
          <v-icon style="margin-right:10px">fas fa-envelope</v-icon
          >varadrpatil27@gmail.com
        </p>
        <p>
          <v-icon style="margin-right:10px;margin-top:5px">fas fa-phone</v-icon
          >+91 93709 58807
        </p>
        <p>
          <v-icon style="margin-right:10px;margin-top:5px"
            >fas fa-graduation-cap
          </v-icon>
          Fr Conceicao Rodrigues College of Engineering
        </p>
        <div style="width:auto">
          <h1 class="socialtitle">
            &nbsp;&nbsp;&nbsp;Find Me On:&nbsp;&nbsp;&nbsp;
          </h1>
          <a target="_blank" v-for="site in socialsites" :key="site.id" :href="site.link">
            <img :src="site.logo" width="40px" style="margin:10px" />
          </a>
        </div>
      </div>
    </v-container>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title
          class="headline lighten-2"
          :class="dialogueclass"
          primary-title
        >
          <img
            height="70px"
            style="margin-top:5px;margin-bottom:5px;margin-left:auto;margin-right:auto;"
            :src="dialogimg"
          />
        </v-card-title>

        <v-card-text>
          <br />
          {{ dialoguemsg }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            {{ dialoguebtn }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from "../plugins/firebaseInit";
export default {
  data: function() {
    return {
      socialsites: [
        {
          id: 0,
          name: "facebook",
          logo: "https://image.flaticon.com/icons/svg/174/174848.svg",
          link: "https://www.facebook.com/varad.patil.526",
        },
        {
          id: 1,
          name: "twitter",
          logo: "https://image.flaticon.com/icons/svg/174/174876.svg",
          link: "https://twitter.com/VaradPa60067729",
        },
        {
          id: 2,
          name: "github",
          logo: "https://cdn.worldvectorlogo.com/logos/github-1.svg",
          link: "https://github.com/varadp2000",
        },
        {
          id: 3,
          name: "linkedin",
          logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
          link: "https://www.linkedin.com/in/varad-patil-0a3b4b169/",
        },
        {
          id: 4,
          name: "instagram",
          logo: "https://cdn.worldvectorlogo.com/logos/instagram-2016.svg",
          link: "https://instagram.com/varad.r.p",
        },
        {
          id: 5,
          name: "whatsapp",
          logo: "https://cdn.worldvectorlogo.com/logos/whatsapp-symbol.svg",
          link: "https://wa.me/919370958807",
        },
      ],
      dialog: false,
      name: "",
      email: "",
      phone: "",
      message: "",
      location: "",
      dialoguemsg: "",
      dialoguetitle: "",
      dialogueclass: "success",
      dialoguebtn: "Okay",
      dialogimg:
        "https://thumbs.gfycat.com/ShyCautiousAfricanpiedkingfisher-size_restricted.gif",
    };
  },
  methods: {
    async showDialog() {
      if (this.$refs.form.validate()) {
        try {
          await db.collection("messages").add({
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message,
            location: this.location,
          });
          this.dialoguemsg =
            "Thank You!Your response is submitted successfully. We will contact you soon.";
          this.dialoguetitle = "Success";
          this.dialoguebtn = "Okay";
          this.dialogueclass = "success";
          this.dialogimg =
            "https://thumbs.gfycat.com/ShyCautiousAfricanpiedkingfisher-size_restricted.gif";
          this.$vuetify.goTo("#home");
        } catch (err) {
          console.log(err);
          this.dialoguemsg = "Sorry! Something went wrong. Please try again.";
          this.dialoguetitle = "Error";
          this.dialogueclass = "error";
          this.dialoguebtn = "Try Again";
          this.dialogimg =
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc70c43b-aeca-448a-a158-0f8e7c281a0d/dceqwb1-a75b8ac9-8340-45bb-8049-4883b81baa3c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYmM3MGM0M2ItYWVjYS00NDhhLWExNTgtMGY4ZTdjMjgxYTBkXC9kY2Vxd2IxLWE3NWI4YWM5LTgzNDAtNDViYi04MDQ5LTQ4ODNiODFiYWEzYy5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vb22ieb2ozkCYf4rYIihVZXu1zqC943b9kBTrrL069I";
        }
        this.dialog = true;
      }
    },
  },
};
</script>

<style scoped>
.socialtitle {
  opacity: 1;
  border-bottom: solid;
  width: 200px;
  text-align: center;
  margin-bottom: 10px;
  font-family: "Times New Roman", Times, serif;
}

.maincontainer {
  background-color: darkgrey;
  padding: 30px;
  opacity: 0.9;
  display: flex;
}

.leftdiv {
  margin-bottom: 20px;
  width: 40%;
  margin-right: 5%;
}

rightdiv {
  margin-top: 20px;
  width: 40%;
  margin-left: 5%;
}

@media only screen and (max-width: 760px) {
  .maincontainer {
    background-color: darkgrey;
    padding: 30px;
    opacity: 0.9;
    display: block;
  }
  .leftdiv {
    margin-bottom: 20px;
    width: 100%;
  }
  .rightdiv {
    margin-top: 20px;
    width: 100%;
  }
}
</style>
