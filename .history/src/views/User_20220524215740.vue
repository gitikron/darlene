<template>
  <div>user page</div>
</template>

<script>
import command from '../assets/command'
import axios from "axios";
import base64 from "base-64";
const token = "2k-token";
const DB_URL =command.DB_URL
export default {
  name: "user",

  data() {
    return {
      page: "user",
      personal: {
        username: this.$store.getters.getAuth.username,
        name: this.$store.getters.getAuth.name,
        role: this.$store.getters.getAuth.role,
        position: this.$store.getters.getAuth.position,
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
                 position: this.$store.getters.getAuth.position,
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

  },
};
</script>

<style lang="scss" scoped></style>
