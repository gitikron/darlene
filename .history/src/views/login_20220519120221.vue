<template>
  <div>
    this is login page
  </div>
</template>

<script>
const sha1 = require("sha1");
const DB_URL = "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
export default {
  data() {
    return {
      name: 'DarleneVue3Login',
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 8) || "Min 8 characters",
      ],
      snackbar: false,
      text: "",
      snackbar2: false,
      text2: "",
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
                this.$router.push("/admin");
              } else if (result.data.role == "doctor") {
                sessionStorage.setItem(process.env.SSKEY, result.data.username);
                this.$router.push("/doctor");
              } else if (result.data.role == "sale") {
                sessionStorage.setItem(process.env.SSKEY, result.data.username);
                this.$router.push("/sale");
              } else if (result.data.role == "manager") {
                sessionStorage.setItem(process.env.SSKEY, result.data.username);
                this.$router.push("/manager");
                } else {
                this.snackbar2 = true;
                this.text2 = "Contact Dev";
                this.auth.username = "";
                this.auth.password = "";
              }
            } else {
              this.snackbar2 = true;
              this.text2 = "wrong password";
              this.auth.password = "";
            }
          } else {
            this.snackbar2 = true;
            this.text2 = "not fond username";
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
#parent {
  display: flex;
  width: 100%;
  height: 100%;
  background: #ededed;
}
#form_login {
  width: 300px;
  margin: auto;
}

.w-80 {
  width: 100%;
}
</style>
