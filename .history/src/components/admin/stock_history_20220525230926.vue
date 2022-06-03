<template>
  <div>
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
    {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
    {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>

   <div class="card mt-2" v-for="item,index in arr" :key="index">
     <span v-if="item.action === 'input'" >
       <span class="material-symbols-outlined">download</span>
       {{item.who+" นำเข้า "+item.name+" จำนวน "+item.amount+" "+item.unit+" timestamp : "+item.date }}</span>


     <span v-if="item.action === 'output'" class="text-danger">
       <span class="material-symbols-outlined">logout</span>
       {{item.who+" นำออก "+item.name+" จำนวน "+item.amount+" "+item.unit+" timestamp : "+item.date }}</span>


     <span v-if="item.action === 'delete'" class="text-danger fw-bold">
       <span class="material-symbols-outlined">delete</span>
       {{item.who+" ลบ "+item.name+" คงเหลือในคลังล่าสุด "+item.amount+" "+item.unit+" timestamp : "+item.date}}</span>
   </div>
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
const _ = require("lodash");
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
        console.log(this.arr[0])

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