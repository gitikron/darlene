<template>
<div>
  <div class="d-flex justify-content-end pb-2">
    <button class="btn btn-sm btn-primary m-2" @click="load='excel'">Upload with excel</button>
    <button class="btn btn-sm btn-primary m-2" @click="load='table'">
     table
    </button>
    <button class="btn btn-sm btn-primary m-2" @click="load='create'">
      Create OPD
    </button>
  </div>
    <div class="container card p-3 mb-2" v-if="load==='excel'">
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
      {{alert.text}},click heare to close alert.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
      {{alert2.text}},click heare to close alert.
    </div>
        <input type="file" id="input" class="form-control" @change="readfile($event)"/>
          {{newOpd}}
         <table class="table table-hover mt-2" id="datatable2" cellspacing="0" width="100%" v-if="importArrControl===true">
        <thead>
          <tr class="px-0">
            <th class="mx-0 px-0">OPD no.</th>
            <th class="mx-0 px-0">ชื่อจริง</th>
            <th class="mx-0 px-0">นามสกุล</th>
            <th class="mx-0 px-0">ชื่อเล่น</th>
            <th class="mx-0 px-0">เพศ</th>
            <th class="mx-0 px-0">กรุปเลือด</th>
            <th class="mx-0 px-0">โรคประจำตัว</th>
            <th class="mx-0 px-0">เลขประจำตัวประชาชน</th>
            <th class="mx-0 px-0">เบอร์โทร</th>
            <th class="mx-0 px-0">ที่อยู่</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item,index in importArr" :key="index">
            <td class="mx-0 px-0">{{ item.OPDnumber }}</td>
            <td class="mx-0 px-0">{{ item.firstname }}</td>
            <td class="mx-0 x-0">{{ item.lastname }}</td>
            <td class="mx-0 x-0">{{ item.nickname }}</td>
            <td class="mx-0 x-0">{{ item.sex }}</td>
            <td class="mx-0 x-0">{{ item.bloodGroup }}</td>
            <td class="mx-0 px-0">{{ item.Disease }}</td>
            <td class="mx-0 px-0">{{ item.personalID }}</td>
            <td class="mx-0 px-0">{{ item.phone }}</td>
            <td class="mx-0 px-0">{{ item.address }}</td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-end">
        <button class="btn btn-sm btn-success" v-if="importArrControl===true" @click="confirm()">Confirm</button>
      </div>
      </div>
    <ADOPDCREATE class="container card p-3 mb-2" v-if="load==='create'"/>
    <ADOPDTABLE class="container card p-3 mb-2" v-if="load==='table'"/>

    
    
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
import readXlsxFile from 'read-excel-file'
export default {
  name: "DarleneVue3Index",

  data() {
    return {
      excel:true,
      CreateOpd:false,
      load: "table",
      importArr:[],
      importArrControl:false,
      newOpd:0,
      alert:{
        text:'',
        control:false
      },
      alert2:{
        text:'',
        control:false
      },
    }
  },

  mounted() {
    this. getOpdnum()
  },

  methods: {
    getOpdnum(){
      axios.get(`${DB_URL}/OPD.json`).then((result) => {
        if (result.data==null) {
          this.newOpd=1
        }else{
          const newNo =result.data.length
           this.newOpd=newNo
        }
      }).catch((err) => {
      this.alert.text='Connecting DB is worng'
      this.alert.control=true
      this.connect=false
      });
    },
    readfile(e){
      const file = e.target.files[0]
      console.log(file)
      readXlsxFile(file).then((result) => {
        const data=result
        data.splice(0,1)
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          const newOPDNo=this.newOpd+index
          const row= {
            OPDnumber:newOPDNo,
            firstname:element[0],
            lastname:element[1],
            nickname:element[2],
            sex:element[3],
            bloodGroup:element[4],
            Disease:element[5],
            personalID:element[6],
            phone:element[7],
            address:element[8]
            }
          this.importArr.splice(1,0,row)
        }
        this.importArrControl=true
        
      }).catch((err) => {
        console.log(err)
      });
    },
    CreateOpds(){
      if (this.CreateOpd==false) {
        this.CreateOpd=true        
      }else{
        this.CreateOpd=false  
      }
    },
    excelUpload(){
      if (this.excel==false) {
        this.excel=true        
      }else{
        this.excel=false  
      }
    },
    confirm(){
      for (let index = 0; index < this.importArr.length; index++) {
        const DATA = this.importArr[index]
        const OPD = this.importArr[index].OPDnumber;
        axios.patch(`${DB_URL}/OPD/${OPD}.json`,DATA).then((result) => {
          this.alert2.text=`OPD No. ${OPD} update successfully`
          this.alert2.control=true
          this.connect=true
       }).catch((err) => {
          this.alert.text='Connecting DB is worng'
          this.alert.control=true
          this.connect=false
       });
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
