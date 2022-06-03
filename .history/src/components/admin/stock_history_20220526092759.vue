<template>
  <div>
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
    {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
    {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>

   <table
        class="table table-hover mt-2"
        id="datatable"
        cellspacing="0"
        width="100%"
      >

        <tbody>
          <tr v-for="item,index in arr" :key="index">
            <td class="fs-res mx-0 px-0"> {{item.who}}</td>
            <td class="fs-res mx-0 px-0"> {{item.action}}</td>
            <td class="fs-res mx-0 px-0"> {{item.name}}</td>

          
          </tr>
        </tbody>
      </table>
      {{arr}}
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";
import command from '@/assets/command';
const DB_URL = command.DB_URL
const moment = require('moment')
export default {
  name: 'DarleneVue3StockHistory',
  data() {
    return {
      alert:{
        text:'',
        control:false
      },
      alert2:{
        text:'',
        control:false
      },
      arr:[]
    };
  },
  mounted() {
    this.getArr()
  },
  methods: {
    getArr(){
      axios.get(`${DB_URL}/stock/history.json`).then((result) => {
        this.arr = result.data

      }).catch((err) => {
        this.alert.text='DB connection went wrong'
        this.alert.control=true
      });
    },

  },
};
</script>

<style lang="scss" scoped>

</style>