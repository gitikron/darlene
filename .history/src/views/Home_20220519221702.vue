<template>
   <div>
    <button @click="test()">
      post
    </button>
        <button @click="pay()">
      pay
    </button>
  </div>
</template>

<script>
const DB_url ="https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
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
        create: moment(Date.now()).format(),
      },
      pay:{

      }
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
  },
};
</script>

<style lang="scss" scoped></style>
