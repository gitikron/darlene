<template>
  <div>
    <div class="d-flex justify-content-end"><button class="btn btn-sm btn-primary" @click="swift()">create</button></div>
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
    {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
    {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <!--body-->
    <div v-if="createControl===true">
      <label for="typename">ประเภท</label>
      <input type="text" class="form-control" placeholder="ชื่อประเภท" v-model="data.type">
      <div class="d-flex justify-content-end m-2">
        <button class="btn btn-sm btn-success" @click="this.createData()">Submit</button>
      </div>
      {{data}}
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
  name: 'DarleneVue3StockType',
  data() {
    return {
      createControl:true,
      data:{
        type:''
      },
      alert:{
        text:'',
        control:false
      },
      alert2:{
        text:'',
        control:false
      },
    };
  },

  mounted() {
    
  },

  methods: {
    swift(){
      if (this.createControl==true) {
        this.createControl=false
      }else{
        this.createControl=true
      }
    },
    Validation(){
      if(this.data.type=''){
        this.alert.text='กรุณากรอกข้อมูล'
        this.alert.control=true
        return false
      }
      return true
    }
  },
  createData(){
    if (this.Validation()) {
      axios.post(`${DB_URL}/stock/type.json`,this.data).then((result) => {
        this.alert2.text='กรุณากรอกข้อมูล'
        this.alert2.control=true
        this.createControl=false
        this.data.type=''
      }).catch((err) => {
        this.alert.text='การเชื่อต่อผิดพลาด'
        this.alert.control=true
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>