<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-success mx-2" @click="swiftUnit()">create</button>
    </div>
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
    {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
    {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div>
      <label for="itemName" class="mt-2">Item name</label>
      <input type="text" class="form-control mt-2" placeholder="Item Name">

      <label for="price" class="mt-2"> Price</label>
      <input type="number" class="form-control mt-2" placeholder="Price">

      <label for="amount" class="mt-2">จำนวน</label>
      <input type="number" class="form-control mt-2" placeholder="amount">
      {{unit}}
      <label for="unit" class="mt-2">หน่วย</label>
      <select  class="form-control mt-2">
        <option v-for="item,index in unit" :key="index"></option>
        <option :value="item.unit">{{item.unit}}</option>
      </select>

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
export default {
  name: 'DarleneVue3ItemList',

  data() {
    return {
      unitControl:false,
      unit:[],
      alert:{
        text:'',
        control:false
      },
      alert2:{
        text:'',
        control:false
      },
      alert3:{
        text:'',
        control:false
      },
      alert4:{
        text:'',
        control:false
      },
    };
  },

  mounted() {
    this. getUnit()
  },

  methods: {
    swiftUnit(){
      if(this.unitControl==false){
        this.unitControl=true
      }else{
        this.unitControl=false
      }
    },
    getUnit(){
       axios.get(`${DB_URL}/items/unit.json`).then((result) => {
        this.unit=result.data
      }).catch((err) => {
        this.alert.text='การเชื่อต่อผิดพลาด'
        this.alert.control=true
      });
    }
  },
};
</script>

<style lang="scss" scoped>

</style>