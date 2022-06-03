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
      recives: {
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

  mounted() {},
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
    async recive() {
      await axios
        .post(
          `${DB_url}/couse/${this.recives.username}/${this.recives.token}.json`,
          this.recives
        )
        .then((result) => {
          console.log(result.data)
          await axios
        .patch(
          `${DB_url}/finance/${this.recives.createYear}/${this.recives.createMonth}/${this.recives.createDate}.json`,
          this.recives
        )
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
        })
        .catch((err) => {
          console.log(err);
        });

    },
  },
};
</script>

<style lang="scss" scoped></style>
