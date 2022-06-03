<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">

    <button class="btn btn-sm btn-dark" @click="login()">login</button>
  </div>
    </nav>    
    <div class="container">
      <button class="btn btn-sm btn-dark mx-auto" @click="test()">post</button>
      <button class="btn btn-sm btn-dark mx-auto" @click="recive()">recive</button>
    </div>
    
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
        opd: "1",
        name: "นาย กฤติกร กาญจมาภร์กุล",
        couse: "made collagen x10",
        used: "0",
        max: "10",
        amount: 1000,
        paytype: "creditcard",
        createYear: moment(Date.now()).format("YYYY"),
        createMonth: moment(Date.now()).format("MM"),
        createDate: moment(Date.now()).format("DD"),
      },
      used: {
        //couse --> user_id -->token-->
        opd: "1",
        couse: "made collagen x10",
        used: "1",
        max: "10",
        paytype: "creditcard",
      },
    };
  },

  mounted() {},
  methods: {
    login(){this.$router.push("/admin");},
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
          `${DB_url}/couse/opd-${this.recives.opd}.json`,
          this.recives
        )
        .then((result) => {
          console.log(result.data);
          this.recive2()
        })
        .catch((err) => {
          console.log(err);
        });
    },
     async recive2() {
          await axios
        .post(
          `${DB_url}/finance/${this.recives.createYear}/${this.recives.createMonth}/${this.recives.createDate}/bill.json`,
         {opd:this.recives.opd,name:this.recives.name,couse:this.recives.couse,amount:this.recives.amount}
        )
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
         await axios
        .post(
          `${DB_url}/finance/${this.recives.createYear}/${this.recives.createMonth}/bill.json`,
          {opd:this.recives.opd,name:this.recives.name,couse:this.recives.couse,amount:this.recives.amount}
        )
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
         await axios
        .post(
          `${DB_url}/finance/${this.recives.createYear}/bill.json`,
          {opd:this.recives.opd,name:this.recives.name,couse:this.recives.couse,amount:this.recives.amount}
        )
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
     }   
  },
};
</script>

<style lang="scss" scoped></style>
