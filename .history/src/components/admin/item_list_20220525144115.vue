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
      <div class="d-flex justify-content-center">
        <img :src="create.display" alt="demoDisplay" class="display-100" v-if="create.display!=''">
      </div>
      <div>
        <label for="upload">Display (PNG/JPEG/GIF size:100*100px)</label>
      <input accept="image/*" class="mt-10 w-100 form-control" type="file"  @change="onFileSelected($event)"/>
      </div>
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

      <div class="d-flex justify-content-end m-2">
        <button class="btn btn-sm btn-success" @click="createItems()">submit</button>
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
    validation(){
      if (this.create.display=='') {
        this.alert.text="กรุณาเลือกรูป"
        this.alert.control=true
        return false
      }
      if (this.create.price=='') {
        this.alert.text="กรุณากรอกราคา"
        this.alert.control=true
        return false
      }
      if (this.create.amount='') {
        this.alert.text="กรุณากรอกจำนวน"
        this.alert.control=true
        return false
      }
      if (this.create.ItemName=='') {
        this.alert.text="กรุณากรอกชื่อรายการ"
        this.alert.control=true
        return false
      }
      if (this.create.unit='') {
        this.alert.text="กรุณาเลือกหน่วย"
        this.alert.control=true
        return false
      }
      return true
    },
    createItems(){
      if(this.validation()){
        this.create.PricePerUnit=this.PricePerUnit
        axios.post(`${DB_URL}/items/list.json`,this.create).then((result) => {
          this.alert2.text="บันทึกสำเร็จ"
          this.alert2.control=true
        }).catch((err) => {
          this.alert.text="การเชื่อมต่อล้มเหลว"
          this.alert.control=true
        });
      }

    },
    onFileSelected(event,index){
     //Recive file
      const file = event.target.files[0]
      //convert to base64
      const reader = new FileReader()
      reader.addEventListener('load', () => {
      this.create.display=reader.result
      })
      reader.readAsDataURL(file)
    },
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
.display-100{
  width: 60px;
  height: 60px;
}
.fs-res {
    font-size: 14px;
  }
/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 992px) {
  .fs-res {
    font-size: 10px;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  .fs-res {
    font-size: 8px;
  }
}
</style>