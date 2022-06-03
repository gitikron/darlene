<template>
  <div>
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><span class="fa fa-cloud-upload fa-fw"></span>&nbsp; GitUp</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="index.html"><span class="fa fa-arrow-left fa-fw"></span>&nbsp; Selección de idioma</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <code><span class="fa fa-code"></span></code> por Federico Damián <span class="fa fa-caret-down"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a href="https://feskyde.github.io"><span class="fa fa-home fa-fw"></span>&nbsp; <strike>Mi casa</strike></a></li>
            <li class="dropdown-header">Contacto</li>
            <li><a href="https://github.com/feskyde"><span class="fa fa-github fa-fw"></span>&nbsp; GitHub</a></li>
            <li><a href="https://twitter.com/feskyde"><span class="fa fa-twitter fa-fw"></span>&nbsp; Twitter</a></li>
            <li><a href="https://facebook.com/fedeedamianschonborn2"><span class="fa fa-facebook-official fa-fw"></span>&nbsp; Facebook</a></li>
            <li><a href="https://plus.google.com/116581300175876868268"><span class="fa fa-google-plus-square fa-fw"></span>&nbsp; Google+</a></li>
            <li class="dropdown-header">Mis proyectos</li>
            <li><a href="https://feskyde.github.io/gitup"><span class="fa fa-cloud-upload fa-fw"></span>&nbsp; GitUp</a></li>
            <li><a href="https://feskyde.github.io/ashblock"><span class="fa fa-shield fa-fw"></span>&nbsp; A Shell Blocker</a></li>
            <li><a href="https://feskyde.github.io/rosespine"><span class="fa fa-arrow-circle-down fa-fw"></span>&nbsp; RoseSpine</a></li>
            <li><a href="https://feskyde.github.io/kawaiicode"><span class="fa fa-code fa-fw"></span>&nbsp; KawaiiCode</a></li>
            <li class="dropdown-header">Otros</li>
            <li><a href="https://getbootstrap.com"><span class="fa fa-file-code-o fa-fw"></span>&nbsp; Bootstrap</a></li>
            <li><a href="https://fortawesome.github.io/Font-Awesome/"><span class="fa fa-fort-awesome fa-fw"></span>&nbsp; Font Awesome</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <MGAdmintbl v-if="load==='admin_tbl'"/>
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
.navbar-inverse {
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
}
@media screen and (max-width: 767px){
  .navbar-inverse{bottom: 0; top:auto;}
}</style>
