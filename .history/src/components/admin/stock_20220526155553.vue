<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-primary m-2" @click="load = 'create'">
        upload with excel
      </button>
      <button class="btn btn-sm btn-primary m-2" @click="load = 'index'">
        stock
      </button>
      <button class="btn btn-sm btn-primary m-2" @click="load = 'history'">
        history
      </button>
      <button class="btn btn-sm btn-primary m-2" @click="load = 'type'">
        type
      </button>
    </div>
    <ADSTOCKINDEX class="container card p-3 mb-2" v-if="load === 'index'" />
    <ADSTOCKTYPE class="container card p-3 mb-2" v-if="load === 'type'" />
    <ADSTOCKHISTORY class="container card p-3 mb-2" v-if="load === 'history'" />
    <ADSTOCKEXCEL class="container card p-3 mb-2" v-if="load === 'create'" />
    <button @click="post()">ss</button>
  </div>
</template>

<script>
import axios from "axios";
import command from "../../assets/command";
const querystring = require('querystring');

export default {
  name: "DarleneVue3Stock",

  data() {
    return {
      load: "index",
    };
  },
  mounted() {},

  methods: {
   post() {
const url = 'https://notify-bot.line.me/oauth/authorize?response_type=code&client_id='+command.Client_ID+'&redirect_uri=https://theduckcreator.in.th/notifyredirect&scope=notify&state='+command.Users
     axios.get(url)
// axios({
//     method: 'post',
//     url: 'https://notify-api.line.me/api/notify',
//     header: {
//       'Authorization': 'Bearer ' + command.LINE_STOCK,
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Access-Control-Allow-Origin': '*'
//     },
//     'Authorization': 'Bearer ' + command.LINE_STOCK,
//     data: querystring.stringify({
//       'Authorization': 'Bearer ' + command.LINE_STOCK,
//       message: 'something you would like to push',
//     })
//   })
    }
  },
};
</script>

<style lang="scss" scoped></style>
