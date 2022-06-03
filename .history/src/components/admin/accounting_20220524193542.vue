<template>
<div>
  <div class="d-flex justify-content-end"><button class="btn btn-sm btn-primary m-2" @click="change()">create</button></div>
  <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
      {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
      {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>

    <!--create-->

  <div class="container card p-3 mb-2" v-if="create===true">
    <label for="typename" class="mt-2">วิธีการชำระ</label>
    <input type="text" class="form-control mt-2" name="typename" placeholder="Name" v-model="createData.PayTypeName">
    <label for="typename" class="mt-2">วิธีหักยอด</label>
    <select  class="form-control mt-2" v-model="createData.PayDeduct">
       <option value="">เลือก</option>
        <option value="percent">percent</option>
        <option value="cash">cash</option>
    </select>
    
    <label for="typename" class="mt-2">จำนวนที่หัก</label>
    <input type="number" class="form-control mt-2" placeholder="หักจำนวน(ก่อนคิดค่าคอม)" v-model="createData.PayDeductHow">
    {{createData}}
    <button class="btn btn-sm btn-success mt-2" @click="createType()">submit</button>
  </div>
  <!--table-->
</div>
</template>

<script>
import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";
import { DB_URL } from '@/assets/command';
export default {
  name: 'DarleneVue3Acc',
  data() {
    return {
      create:false,
      createData:{
        PayTypeName:'',
        PayDeduct:'',
        PayDeductHow:''
      },
      edit:{
        index:'',
        arr:{}
      },
      alert:{
        text:'',
        control:false
      },
      alert2:{
        text:'',
        control:false
      }
    };
  },
  mounted() {

  },
  methods: {
    change(){
      if(this.create==true){
        this.create=false
        }else{
      this.create=true
        }
    },
    validation(){
      if (this.createData.PayTypeName=='') {
        this.alert.text='กรุณาใส่วิธีการชำระ'
        this.alert.control=true
        return false
      }
      if (this.createData.PayDeduct=='') {
        this.alert.text='กรุณาเลือกวิธีหักยอด'
        this.alert.control=true
        return false
      }
      if (this.createData.PayDeductHow<=-1) {
        this.alert.text='กรุณากรอกจำนวนที่หัก'
        this.alert.control=true
        return false
      }
        return true
    },
    validationEdit(){
      if (this.edit.arr.PayTypeName=='') {
        alert('กรุณาใส่วิธีการชำระ')
        return false
      }
      if (this.edit.arr.PayDeduct=='') {
        alert('กรุณาเลือกวิธีหักยอด')
        return false
      }
      if (this.edit.arr.PayDeductHow<=-1) {
        alert('กรุณากรอกจำนวนที่หัก')
        return false
      }
        return true
    },
    createType(){
      if (this.validation()) {
        axios.post(`${DB_URL}/finance/type.json`,this.createData).then((result) => {
          this.alert2.text=`เพิ่มวิธีการชำระเงินสำเร็จ`
          this.alert2.control=true
        }).catch((err) => {
          this.alert.text=`การเชื่อต่อผิดพลาด : ${err.status}`
          this.alert.control=true
        });
      }
    },
    patchEdit(){
      if (this.validationEdit()) {
        axios.post(`${DB_URL}/finance/type/${this.edit.index}.json`,this.edit.arr).then((result) => {
          this.alert2.text=`แก้ไขวิธีการชำระเงินสำเร็จ`
          this.alert2.control=true
          this.createData={PayTypeName:'',PayDeduct:'',PayDeductHow:''}
          this.create=false
        }).catch((err) => {
          this.alert.text=`การเชื่อต่อผิดพลาด : ${err.status}`
          this.alert.control=true
        });
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
