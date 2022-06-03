<template>
  <div>
    <button @click="test()">post</button>
    <button @click="recive()">recive</button>
  </div>
</template>

<script>
const DB_url =
  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
const SSKEY = "DARLENE";
import axios from "axios";
import moment from "moment";
import sha1 from "sha1";

export default {
  name: "DarleneVue3Home",

  data() {
    return {
      pre: {
        username: "goldpagass",
        password: sha1("475288615"),
        name: "champtest",
        role: "user",
        create: moment(Date.now()).format("DD/MM/YYYY"),
      },
      recive: {
        //couse --> user_id-->token-->
        //finance --> recive --> year --> month --> date -->token-->
        token: "goldpagass" + moment(Date.now()).format("DD/MM/YYYY"),
        username: "goldpagass",
        name: "champtest",
        couse: "made collagen x10",
        used: "0",
        max: "10",
        paytype: "creditcard",
        createYear: moment(Date.now()).format("YYYY"),
        createMonth: moment(Date.now()).format("MM"),
        createDate: moment(Date.now()).format("DD"),
      },
      used: {
        //couse --> user_id -->token-->
        token: "goldpagass" + moment(Date.now()).format("DD/MM/YYYY"),
        username: "goldpagass",
        name: "champtest",
        couse: "made collagen x10",
        used: "1",
        max: "10",
        paytype: "creditcard",
      },
    };
  },

  mounted() {
  },
  methods: {
    async test() {
      await axios
        .patch(`${DB_url}/auth/${this.pre.username}.json`, this.pre)
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    test2() {},
  },
};
</script>

<style lang="scss" scoped></style>
