<template>
<div>
  <div class="d-flex justify-content-center mt-10">
    <div class="card w-300px-login">
      <span class="material-symbols-outlined mt-2 mb-2">person</span>
      <input type="text" class="from-control input-control" placeholder="Username" v-model="auth.username">
      <input type="password" class="from-control input-control" placeholder="Password"  v-model="auth.password">
      <div class="mt-2 mb-3">
      <button class="btn btn-success btn-sm w-95" @click="login()">login</button>
      </div>
    </div>
  </div>
  <div class="alert alert-danger alert-size" role="alert" v-if="snackbar===true">{{text}}</div>
</div>
</template>

<script>
import axios from 'axios'
const sha1 = require("sha1");
const DB_URL =
  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
export default {
  data() {
    return {
      name: "DarleneVue3Login",
      snackbar: false,
      text: "",
      auth: {
        username: "",
        password: "",
      },
      preset: {
        username: "",
        name: "",
        role: "",
      },
    };
  },
  mounted() {
    this.checklogin();
  },
  methods: {
    checklogin() {
      console.log(sessionStorage.getItem("DARLENE"));
      if (sessionStorage.getItem("DARLENE")) {
        axios
          .get(`${DB_URL}/auth/${sessionStorage.getItem("DARLENE")}.json`)
          .then((result) => {
            const ROLE = result.data.role;
            if (ROLE == "admin") {
              this.$router.push("/#/admin");
            }
            if (ROLE == "doctor") {
              this.$router.push("/#/doctor");
            }
            if (ROLE == "sale") {
              this.$router.push("/#/sale");
            }
            if (ROLE == "manager") {
              this.$router.push("/#/manager");
            }
          })
          .catch((err) => {
            consle.log(err);
            sessionStorage.clear();
            this.$router.push("/#/login");
          });
      }
    },
    login() {
      axios
        .get(`${DB_URL}/auth/${this.auth.username}.json`)
        .then((result) => {
          if (result.data != null) {
            if (result.data.password == sha1(this.auth.password)) {
              this.snackbar = true;
              this.text = "login successfuly";
              this.preset.username = result.data.username;
              this.preset.name = result.data.name;
              this.preset.role = result.data.role;
              this.$store.commit("SET_AUTH", this.preset);
              if (result.data.role == "admin") {
                sessionStorage.setItem(process.env.SSKEY, result.data.username);
                this.$router.push("/#/admin");
              } else if (result.data.role == "doctor") {
                sessionStorage.setItem(process.env.SSKEY, result.data.username);
                this.$router.push("/#/doctor");
              } else if (result.data.role == "sale") {
                sessionStorage.setItem(process.env.SSKEY, result.data.username);
                this.$router.push("/#/sale");
              } else if (result.data.role == "manager") {
                sessionStorage.setItem(process.env.SSKEY, result.data.username);
                this.$router.push("/#/manager");
              } else {
                this.snackbar = true;
                this.text = "Contact Dev";
                this.auth.username = "";
                this.auth.password = "";
              }
            } else {
              this.snackbar = true;
              this.text = "wrong password";
              this.auth.password = "";
            }
          } else {
            this.snackbar = true;
            this.text = "not fond username";
            this.auth.username = "";
            this.auth.password = "";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#form_login {
  width: 300px;
  margin: auto;
}

.w-100 {
  width: 100%;
}
.w-95 {
  width: 95%;
}
.w-300px-login {
width: 300px;
}
.mt-10{
  margin-top: 50%;
}
.input-control{
  margin: 5px;
}
.alert-size{
  width: 400px;
}

</style>
