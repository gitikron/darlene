<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark navbar-sm bg-dark fixed-bottom ">
      <div class="container-fluid" >
           <!-- ปุ่มสำหรับเปิด เมนูด้านข้าง ( กำหนดให้ ยังไม่แสดงเป็นค่าเริ่มต้น และจะแสดงเมื่อหน้าจอเล็กกว่า หรือเท่ากับ 768 )
            เมื่อกดแล้ว จะไปทำงานที่ function show_side_menu() เพื่อแสดง Side เมนู
          -->
          <button class="btn menu-btn" type="button" style="display:none;" onclick="show_side_menu()" >
              <span class="navbar-toggler-icon"></span>
          </button>

        <a class="navbar-brand" href="#">&nbsp;Manager Dashbord</a>

        <!---- เมนูที่มี ---->
      </div>
    </nav>
   
    <!---- เมนูด้านข้าง ( Side Menu ) ---->
    <div class="d-flex flex-column p-3 text-white bg-dark side-menu " style="width: 280px;height:100vh;position:fixed;left:-280px">
        
        <ul class="nav nav-pills flex-column mb-auto pt-5 side_nav_menu">
        
           
        </ul>
        

    </div>
<div class="container nav-m">
  <MGAdmintbl v-if="load==='admin_tbl'"/>
</div>
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
      load:"admin_tbl",
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
.nav-m{
  margin-top: 67px;
}
</style>
