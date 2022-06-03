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
<!-- create -->
    <div class="card p-2" v-if="control==true">
      <label for="unit" class="mt-2">ชื่อรายการ</label>
      <input type="text" class="form-control" placeholder="ชื่อรายการ" v-model="create.name">
      <label for="unit" class="mt-2">ประเภท</label>
      {{typeindex}}
      <select  class="form-control mt-2" v-model="typeindex">
        <option value="">เลือก</option>
        <option v-for="item,index in type" :key="index" :value="index">{{item.type}}</option>
      </select>
      <div class="d-flex justify-content-end m-2">
        <button class="btn btn-sm btn-success" @click="createNew()">submit</button>
      </div>
    </div>
<!-- body -->
<div class="mt-2" v-if="control===false">
       <table
        class="table table-hover mt-2"
        id="datatable"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr class="px-0">
            <th class="fs-res mx-0 px-0">list</th>
            <th class="fs-res mx-0 px-0 text-center">ประเภท</th>
            <th class="fs-res mx-0 px-0 text-center">คงเหลือ</th>
            <th class="fs-res mx-0 px-0 text-center">นำเข้า</th>
            <th class="fs-res mx-0 px-0 text-center">นำออก</th>
            <th class="fs-res mx-0 px-0 text-center">
              <span class="material-symbols-outlined text-danger">delete</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item,index in arr" :key="index">
            <td class="fs-res mx-0 px-0">{{item.name}}</td>
            <td class="fs-res mx-0 px-0 text-center">{{item.type}}</td>
            <td class="fs-res mx-0 px-0 text-center">{{Intl.NumberFormat().format(item.amount)+" "+item.unit}}</td>
            <td class="fs-res mx-0 px-0 text-center ">
                 <button class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#input" @click="useIndex=index,reArr=item">เข้า</button>
            </td>
            <td class="fs-res mx-0 px-0 text-center ">
              <button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#output" @click="useIndex=index,reArr=item">ออก</button>
            </td>
            <td class="fs-res mx-0 px-0 text-center">
              <button class="btn btn-sm material-symbols-outlined text-danger" @click="useIndex=index,reArr=item,deleteModal()">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
</div>
<!-- modal -->
<!-- in -->
<div class="modal fade" id="input" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">นำเข้า</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- body -->
          <div class="alert alert-danger" role="alert" v-if="alert3.control===true" @click="alert3.control=false,alert3.text=''">
          {{alert3.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
          </div>
          <div class="alert alert-success" role="alert" v-if="alert4.control===true" @click="alert4.control=false,alert4.text=''">
          {{alert4.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
          </div>
          <label>รายการ</label>
          <input type="text" class="form-control" v-model="reArr.name" disabled>

          <label>คงเหลือ</label>
          <input type="number" class="form-control" min="0" v-model="reArr.amount" disabled>

          <label>นำเข้า</label>
          <input type="number" class="form-control" min="0" v-model="input" @change="calcu(reArr.amount,input)">
          
          <label>สรุป</label>
          <input type="number" class="form-control" placeholder="สรุปยอด" v-model="outter" disabled>


          </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
          <button type="button" class="btn btn-primary" @click="saveInput()">Save changes</button>
        </div>
      </div>
    </div>
</div>

<!-- out -->
<div class="modal fade" id="output" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">นำออก</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- body -->
          <div class="alert alert-danger" role="alert" v-if="alert5.control===true" @click="alert5.control=false,alert5.text=''">
          {{alert5.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
          </div>
          <div class="alert alert-success" role="alert" v-if="alert6.control===true" @click="alert6.control=false,alert6.text=''">
          {{alert6.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
          </div>
            <label>รายการ</label>
          <input type="text" class="form-control" v-model="reArr.name" disabled>

          <label>คงเหลือ</label>
          <input type="number" class="form-control" min="0" v-model="reArr.amount" disabled>

          <label>นำเข้า</label>
          <input type="number" class="form-control" min="0" v-model="input" @change="calcuOutput(reArr.amount,input)">
          
          <label>สรุป</label>
          <input type="number" class="form-control" placeholder="สรุปยอด" v-model="outter" disabled>


          </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
          <button type="button" class="btn btn-primary" @click="saveOutput()">Save changes</button>
        </div>
      </div>
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
const moment = require('moment')
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
      alert5:{
        text:'',
        control:false
      },
      alert6:{
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
      },
      arr:[],
      useIndex:'',
      reArr:'',
      input:0,
      outter:'',
      history:{
        name:'',
        type:'',
        amount:0,
        unit:'',
        action:'',
        who:this.$store.getters.getAuth.name,
        date:''
      }
    };
  },

  mounted() {
    this.getType()
    this.getArr()
    axios.post(`${command.URL_LINE}/${command.LINE_STOCK}`,'ss')
  },

  methods: {
    deleteModal(){
      if(confirm('คุณต้องการลบรายการในสต็อก ใช่ หรือ ไม่')){
        this.history.name=this.reArr.name
        this.history.type=this.reArr.type
        this.history.amount=this.reArr.amount
        this.history.unit=this.reArr.unit
        this.history.action='delete'
        this.history.date=moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        axios.delete(`${DB_URL}/stock/list/${this.useIndex}.json`).then((result) => {
          this.alert2.text='ลบรายการสำเร็จ'
          this.alert2.control=true
          this.getArr2()
          
          axios.post(`${DB_URL}/stock/history.json`,this.history).catch((err) => {
            this.alert.text='การเชื่อมต่อผิดพลาด'
            this.alert.control=true
            });
        }).catch((err) => {
          this.alert.text='การเชื่อมต่อผิดพลาด'
          this.alert.control=true
        });
      }
    },
    saveOutput(){
      if (this.outputvalidation()) {
        this.reArr.amount=this.outter
        this.history.name=this.reArr.name
        this.history.type=this.reArr.type
        this.history.amount=this.reArr.amount
        this.history.unit=this.reArr.unit
        this.history.action='output'
        this.history.date=moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        axios.patch(`${DB_URL}/stock/list/${this.useIndex}.json`,this.reArr).then((result) => {
          this.input=0
          this.alert6.text='บันทึกสำเร็จ'
          this.alert6.control=true
          this.getArr2()
          axios.post(`${DB_URL}/stock/history.json`,this.history).catch((err) => {
            this.alert5.text='การเชื่อมต่อผิดพลาด'
            this.alert5.control=true
            });
        }).catch((err) => {
        this.alert5.text='การเชื่อมต่อผิดพลาด'
          this.alert5.control=true
        });
        
      }
      
    },
    outputvalidation(){
      if (this.input==0) {
        this.alert5.text='กรุณากรอกจำนวน'
        this.alert5.control=true
        return false
      }
      return true
    },
    inputvalidation(){
      if (this.input==0) {
        this.alert3.text='กรุณากรอกจำนวน'
        this.alert3.control=true
        return false
      }
      return true
    },
    saveInput(){
      if (this.inputvalidation()) {
        this.reArr.amount=this.outter
      this.history.name=this.reArr.name
      this.history.type=this.reArr.type
      this.history.amount=this.reArr.amount
      this.history.unit=this.reArr.unit
      this.history.date=moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      this.history.action='input'
      axios.patch(`${DB_URL}/stock/list/${this.useIndex}.json`,this.reArr).then((result) => {
        this.input=0
        this.alert4.text='บันทึกสำเร็จ'
        this.alert4.control=true
         axios.post(`${DB_URL}/stock/history.json`,this.history).catch((err) => {
          this.alert3.text='การเชื่อมต่อผิดพลาด'
          this.alert3.control=true
          });
      }).catch((err) => {
       this.alert3.text='การเชื่อมต่อผิดพลาด'
        this.alert3.control=true
      });
      }
      
    },
    calcu(amount,input){
      const outter =(amount+input);
      this.outter=outter
    },
    calcuOutput(amount,input){
      const outter =(amount-input);
      this.outter=outter
    },
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
    validation(){
      if(this.create.name==''){
        this.alert.text='กรุณากรอกชื่อรายการ'
        this.alert.control=true
        return false
      }
      if(this.typeindex==''){
        this.alert.text='กรุณาเลือกประเภท'
        this.alert.control=true
        return false
      }
      return true
    },
    createNew(){
      if (this.validation()) {
        this.create.type=this.type[this.typeindex].type
        this.create.unit=this.type[this.typeindex].unit
        axios.post(`${DB_URL}/stock/list.json`,this.create).then((result) => {
          this.alert2.text='บันทึกสำเร็จ'
          this.alert2.control=true
          this.create={name:'',type:'',amount:0,unit:''}
          this.typeindex=''
          this.control=false
          this.getArr()
        }).catch((err) => {
          this.alert.text='การเชื่อต่อผิดพลาด'
          this.alert.control=true
        });
      }
    },
    getArr(){
      axios.get(`${DB_URL}/stock/list.json`).then((result) => {
          this.arr=result.data
        }).catch((err) => {
          this.alert.text='การเชื่อต่อผิดพลาด'
          this.alert.control=true
        });
    },
    getArr2(){
      axios.get(`${DB_URL}/stock/list.json`).then((result) => {
          this.arr=result.data
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