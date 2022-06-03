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
import line from "../../assets/line";
import querystring from "querystring";



export default {
  name: "DarleneVue3Stock",

  data() {
    return {
      load: "index",
    };
  },
  mounted() {},

  methods: {
    async post() {
      const options = {
      method: 'POST',
      uri: `https://notify-api.line.me/api/notify`,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${command.LINE_STOCK}`
      },
			form: {
        message: 'dd'
      },
      json: true,
		}

    await axios.post(`https://notify-api.line.me/api/notify`,options,options)
    .then(response =>{
       console.log(response.error)
      return response
    })
    .catch(response => {
      console.log(response.error)
    })
    },
  },
};
</script>

<style lang="scss" scoped></style>
