<template>
  <div></div>
</template>

<script>
import axios from "axios";
import base64 from "base-64";
const token = "2k-token";
const DB_URL =
  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
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
    if (this.personal.role != "manager") {
      const key = base64.decode(sessionStorage.getItem(token));
      if (key!=null) {
        console.log(utfข8(key));
      }else{
       sessionStorage.clear()
      this.$router.push("/login");
      }
      
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
