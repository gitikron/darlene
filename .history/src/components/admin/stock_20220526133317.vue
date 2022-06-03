<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-primary m-2" @click="load='create'">upload with excel</button>
      <button class="btn btn-sm btn-primary m-2" @click="load='index'">stock</button>
      <button class="btn btn-sm btn-primary m-2" @click="load='history'">history</button>
      <button class="btn btn-sm btn-primary m-2" @click="load='type'">type</button>
    </div>
      <ADSTOCKINDEX class="container card p-3 mb-2" v-if="load==='index'"/>
      <ADSTOCKTYPE class="container card p-3 mb-2" v-if="load==='type'"/>
      <ADSTOCKHISTORY class="container card p-3 mb-2" v-if="load==='history'"/>
      <ADSTOCKEXCEL class="container card p-3 mb-2" v-if="load==='create'"/>
      <button @click="post()">ss</button>
  </div>
</template>

<script>
import axios from 'axios';
import command from '../../assets/command'
import line from '../../assets/line'
import querystring from 'querystring'
import { Http2ServerRequest } from 'http2';
export default {
  name: 'DarleneVue3Stock',

  data() {
    return {
      load:'index'
    };
  },
  mounted() {
  },

  methods: {
    post(){
      axios.get(command.URL_LINE)
    }
  },
};
</script>

<style lang="scss" scoped>

</style>