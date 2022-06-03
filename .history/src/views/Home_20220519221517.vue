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
export default {
  name: "DarleneVue3Home",

  data() {
    return {
      pre: {
        username: "champsalea",
        password: "9bef72321da00d04cd3e868262f7a7ff1e396b72",
        name: "champtest",
        role: "sale",
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
