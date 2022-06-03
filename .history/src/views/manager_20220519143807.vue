<template>
  <div>
    
  </div>
</template>

<script>
import axios from 'axios';
const SSKEY = "DARLENE";
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
    console.log(this.personal)
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped></style>
