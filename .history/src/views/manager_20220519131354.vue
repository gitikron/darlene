<template>
  <div>
    
  </div>
</template>

<script>
import axios from 'axios';
const DB_URL =  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
export default {
  name: "Manager",

  data() {
    return {
      personal: {
        username: this.$store.getters.getAuth.username,
        name: this.$store.getters.getAuth.name,
        role: this.$store.getters.getAuth.role,
      },
      managerbar: false,
    };
  },

  mounted() {
    if (this.personal.role == "manager") {
      this.managerbar = true;
    }
  },

  methods: {
    manageDock(){this.$router.push("/manager");},
    Validation() {
      if (sessionStorage.getItem("DARLENE")) {
        axios
          .get(`${DB_URL}/auth/${sessionStorage.getItem("DARLENE")}.json`)
          .then((result) => {
            this.preset.username = result.data.username;
            this.preset.name = result.data.name;
            this.preset.role = result.data.role;
            this.personal.username = result.data.username;
            this.personal.name = result.data.name;
            this.personal.role = result.data.role;
            this.$store.commit("SET_AUTH", this.preset);
            this.Checkname();
          })
          .catch((err) => {
            consle.log(err);
            sessionStorage.clear();
            this.$router.push("/login");
          });
      } else {
        sessionStorage.clear();
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
