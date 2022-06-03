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
      <label for="itemName" class="mt-2">ชื่อสินค้า</label>
      <input type="text" class="form-control mt-2" placeholder="Item Name" v-model="create.itemName">

      <label for="price" class="mt-2">ราคา</label>
      <input type="number" class="form-control mt-2" placeholder="Price" v-model="create.price" @change="calCu()">

      <label for="amount" class="mt-2">จำนวน</label><span class="text-danger">{{textspan}}</span>
      <input type="number" class="form-control mt-2" placeholder="amount" v-model="create.amount" @change="calCu()">
        
      <label for="unit" class="mt-2">หน่วย</label>
      <select  class="form-control mt-2" v-model="create.unit">
        <option value="">เลือก</option>
        <option v-for="item,index in unit" :key="index" :value="item.units">{{item.units}}</option>
      </select>

      <label for="amount" class="mt-2">ราคา:หน่วย</label>
      <input type="text" class="form-control mt-2" placeholder="ประมวลผลอัตโนมัติ" v-model="PricePerUnit" disabled>

      
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
      textspan:'',
      PricePerUnit:0,
      create:{
        display:'',
        ItemName:'',
        price:0,
        amount:1,
        PricePerUnit:'',
        unit:''
      },
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
    this.getUnit()
  },

  methods: {
    calCu(){
        if(this.create.Price<=-1){
        this.PricePerUnit=0
        return false
        }
        if(this.create.amount<=-0){
          this.PricePerUnit=0
          this.textspan=' (ต้องมากกว่า 0)'
          return false
        }
        this.textspan=''
        const PricePerUnit=parseInt(this.create.price)/parseInt(this.create.amount)
        this.PricePerUnit=PricePerUnit
    },
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