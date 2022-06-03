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
      const token = [command.LINE_STOCK]
      const message = 'test'
      const option = {
      "body":{"message":message},
        "headers": {
          'Content-Type': 'multipart/form-data',
          "Authorization":"Bearer "+token
        }
      }
      axios.post(command.URL_LINE,option,option)
    }
  },
};
</script>

<style lang="scss" scoped>

</style>