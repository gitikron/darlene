<template>
  <div>
    <div class="d-flex justify-content-center mt-10">
      <div class="card w-300px-login">
        <div class="row">
          <div class="col-1 d-flex">
            <span class="material-symbols-outlined m-2">person</span>
          </div>
          <div class="col-11">
            <input
              type="text"
              class="from-control input-control w-95"
              placeholder="Username"
              required
              v-model="auth.username"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-1 d-flex">
            <span class="material-symbols-outlined m-2">lock</span>
          </div>
          <div class="col-11">
            <input
              type="password"
              required
              class="from-control input-control w-95"
              placeholder="Password"
              v-model="auth.password"
            />
          </div>
        </div>
        <div class="mt-2 mb-3">
          <button
            type="submit"
            class="btn btn-success btn-sm w-95"
            @click="login()"
          >
            login
          </button>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div
        class="alert alert-danger alert-size"
        role="alert"
        v-if="snackbar === true"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const sha1 = require("sha1");
const SSKEY = "DARLENE";
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
    console.log(this.$store.getters.getAuth.username);
  },
  methods: {
    login() {
      if (this.auth.username != "") {
        if (this.auth.username.length >= 8) {
          if (this.auth.password != "") {
            if (this.auth.password.length >= 8) {
              this.CheckDB();
            } else {
              this.text = "password mininium is 8 character";
              this.snackbar = true;
            }
          } else {
            this.text = "password is empty";
            this.snackbar = true;
          }
        } else {
          this.text = "username mininium is 8 character";
          this.snackbar = true;
        }
      } else {
        this.text = "username is empty";
        this.snackbar = true;
      }
    },
    CheckDB() {
      axios
        .get(`${DB_URL}/auth/${this.auth.username}.json`)
        .then((result) => {
          console.log(result); ///del
          if (result.status == 200) {
            const data = result.data;
            if (data == null) {
              this.text = "Worng Username";
              this.snackbar = true;
              return false
            }
            if (sha1(this.auth.password) != result.data.password) {
              this.text = "Worng Password";
              this.snackbar = true;
              return false
            }
            this.preset.username=result.data.username
            this.preset.name=result.data.name
            this.preset.role=result.data.role
            this.$store.dispatch("setAuth", this.preset)
            this.$router.push('/manager')
            return true
          } else {
            this.text = "Connection error,Contract Dev";
            this.snackbar = true;
            return false
          }
        })
        .catch((err) => {
          console.log(err);
        });
      //this.$store.dispatch("setAuth", this.auth)
      //console.log(this.$store.getters.getAuth.username)
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
.mt-10 {
  margin-top: 50%;
  padding: 0;
}
.input-control {
  margin: 5px;
}
.alert-size {
  width: 300px;
  padding: 0;
  margin-top: 10px;
}
</style>
