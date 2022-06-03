<template>
  <div>
      <div>
        <MGAdmintbl v-if="load === 'admin_tbl'" />
      </div>

      <nav class="navbar navbar-expand navbar-primary navbar-sm bg-warning fixed-bottom pt-2">
      <div  class="container d-flex justify-content-center">
               <button type="button" class="btn btn-warning btn-sm mx-auto" @click="load='finance_tbl'">
         <span class="material-symbols-outlined mx-0 px-0">payments</span><br>
         <span class="fs-custom">รอจ่าย</span>
         </button>
        <button type="button" class="btn btn-warning btn-sm mx-auto" @click="load='admin_tbl'">
         <span class="material-symbols-outlined mx-0 px-0">manage_accounts</span><br>
         <span class="fs-custom">user</span>
         </button>
        <button type="button" class="btn btn-warning btn-sm mx-auto" @click="load='finance_tbl'">
         <span class="material-symbols-outlined mx-0 px-0">receipt</span><br>
         <span class="fs-custom">คชจ.ล่าสุด</span>
         </button>
       <button type="button" class="btn btn-warning btn-sm mx-auto" @click="load='finance_tbl'">
         <span class="material-symbols-outlined mx-0 px-0">receipt</span><br>
         <span class="fs-custom">รายวัน</span>
         </button>
        <button type="button" class="btn btn-warning btn-sm mx-auto" @click="load='finance_tbl'">
         <span class="material-symbols-outlined mx-0 px-0">receipt</span><br>
         <span class="fs-custom">รายเดือน</span>
         </button>
       <button type="button" class="btn btn-warning btn-sm mx-auto" @click="logout()">
         <span class="material-symbols-outlined mx-0 px-0">logout</span><br>
         <span class="fs-custom">logout</span>
         </button>
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
  methods: {
    logout(){
      sessionStorage.clear();
        this.$router.push("/login");
    }
  },
};
</script>

<style lang="scss" scoped>
.fs-custom{
  font-size: 10px;
}</style>
