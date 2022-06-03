<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-success m-2" @click="swift()">create</button>
    </div>
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
    {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
    {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>

    <div>
      <input type="text" class="form-control" placeholder="ชื่อรายการ" v-model="create.name">
      <label for="unit" class="mt-2">หน่วย</label>
      {{typeindex}}
      <select  class="form-control mt-2" v-model="typeindex">
        <option value="">เลือก</option>
        <option v-for="item,index in type" :key="index" :value="index">{{item.type}}</option>
      </select>
      <div class="d-flex justify-content-end m-2">
        <button class="btn btn-sm btn-success" @click="createNew()">submit</button>
      </div>
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
  name: 'DarleneVue3StockIndex',

  data() {
    return {
      control:false,
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
      typeindex:'',
      type:[],
      create:{
        name:'',
        type:'',
        amount:0,
        unit:''
      }
    };
  },

  mounted() {
    this.getType()
  },

  methods: {
    swift(){
      if (this.control==false) {
        this.control=true
      }else{
        this.control=false
      }
    },
    getType(){
      axios.get(`${DB_URL}/stock/type.json`).then((result) => {
        this.type=result.data
      }).catch((err) => {
        this.alert.text='การเชื่อมต่อผิดพลาด'
        this.alert.control=true
      });
    },
    createNew(){
      axios.post(`${DB_URL}/stock/list.json`)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>