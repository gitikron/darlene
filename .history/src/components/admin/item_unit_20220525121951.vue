<template>
  <div>
<div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
{{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
</div>
<div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
{{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
</div>
    <div class="d-flex justify-content-end mt-2">
      <button class="btn btn-sm btn-primary" @click="swiftUnit()">create</button>
    </div>

    <label for="unit" v-if="unitControl===true"> หน่วย
      <input type="text" name="unit" id="unit" class="form-control" placeholder="หน่วย" v-model="unit.units">
      <div class="d-flex justify-content-end mt-2">
        <button class="btn btn-sm btn-success" @click="createUnit()">Submit</button>
      </div>
    </label>
{{unit}}


      <table class="table table-hover mt-2" id="datatable" cellspacing="0" width="100%">
        <thead>
          <tr class="px-0">
            <th class="col-10 fs-res mx-0 px-0">ชื่อ</th>
            <th class="col-1 fs-res mx-0 px-0">
              <span class="material-symbols-outlined text-warning">edit</span>
            </th>
            <th class="col-1 fs-res mx-0 px-0">
              <span class="material-symbols-outlined text-danger">delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item,index in arr" :key="index">
            <td class="fs-res mx-0 px-0">{{item.type}}</td>
            <td class="fs-res mx-0 px-0">
              <button class="btn btn-sm material-symbols-outlined text-warning" data-bs-toggle="modal" data-bs-target="#editModal" @click="edit.index=index">edit</button>
            </td>
            <td class="fs-res mx-0 px-0">
              <button class="btn btn-sm material-symbols-outlined text-danger" @click="delType(index)">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
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
  name: 'DarleneVue3ItemUnit',

  data() {
    return {
      load:false,
      unitControl:true,
      unit:{units:''},
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
    swiftUnit(){
      if(this.unitControl==false){
        this.unitControl=true
      }else{
        this.unitControl=false
      }
    },
    validation(){
      if (this.unit.units=='') {
        this.alert.text='กรุณากรอกหน่วย'
        this.alert.control=true
        return false
      }
      return true
    },
    createUnit(){
      if (this.validation()) {
        axios.post(`${DB_URL}/items/unit.json`,this.unit).then((result) => {
          this.alert2.text='บันทึกสำเร็จ'
          this.alert2.control=true
          this.unit.units=''
          this.unitControl=false
        }).catch((err) => {
          this.alert.text='การเชื่อต่อผิดพลาด'
          this.alert.control=true
        });
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>