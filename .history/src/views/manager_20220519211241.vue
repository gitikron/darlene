<template>
  <div>
    <div class="container-fluid nav h-100">
        <div class="row h-100">
            <div class="col-2" id="green">
                <h4>Sidebar</h4>
                <!-- Navigation links in sidebar-->
                <a href="#">Link 1</a>
                <br/>
                <br/>
                <a href="#">Link 2</a>
                <br/>
                <br/>
                <a href="#">Link 3</a>
                <br/>
                <br/>
                <a href="#">Link 4</a>
                <br/>
                <br/>
            </div>
            </div>
            </div>

    <div >
      <MGAdmintbl v-if="load === 'admin_tbl'" />
    </div>

    <nav class="navbar navbar-expand navbar-dark navbar-sm bg-dark fixed-bottom pt-2">
      <div class="container-fluid">
       <button type="button" class="btn btn-outline-light btn-sm" @click="load='admin_tbl'">Account</button>
       <button type="button" class="btn btn-outline-light btn-sm" @click="load='finance_tbl'">Finance</button>
       <button type="button" class="btn btn-outline-light btn-sm" @click="load='finance_tbl'">Commission</button>
       <button type="button" class="btn btn-outline-light btn-sm" @click="load='finance_tbl'">PT-MD</button>
       <button type="button" class="btn btn-outline-light btn-sm" @click="load='finance_tbl'">PAY INDEX</button>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
import base64 from "base-64";
const token = "2k-token";
const DB_URL =
  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
export default {
  name: "manager",
  data() {
    return {
      page: "manager",
      load: "admin_tbl",
      personal: {
        username: this.$store.getters.getAuth.username,
        name: this.$store.getters.getAuth.name,
        role: this.$store.getters.getAuth.role,
      },
      managerbar: false,
    };
  },
  mounted() {
    if (this.personal.role != this.page) {
      const key = sessionStorage.getItem(token);
      if (key) {
        const findKey = base64.decode(key);
        axios
          .get(`${DB_URL}/auth/${findKey}.json`)
          .then((result) => {
            if (result.data.role == this.page) {
              this.$store.dispatch("setAuth", result.data);
              this.personal = {
                username: this.$store.getters.getAuth.username,
                name: this.$store.getters.getAuth.name,
                role: this.$store.getters.getAuth.role,
              };
            } else {
              sessionStorage.clear();
              this.$router.push("/login");
            }
          })
          .catch((err) => {
            this.$store.dispatch("setAuth", {
              username: "",
              name: "",
              role: "",
            });
            sessionStorage.clear();
            this.$router.push("/login");
          });
      } else {
        this.$store.dispatch("setAuth", { username: "", name: "", role: "" });
        sessionStorage.clear();
        this.$router.push("/login");
      }
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
