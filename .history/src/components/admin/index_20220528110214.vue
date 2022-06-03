<template>
  <div class="block-0 m-0 p-0">
    <div class="block-center">
      <div class="card block-1">
        <div>
        <nav class="navbar navbar-expand-lg navbar-primary bg-primary brt-2 mb-3">
          <ul class="navbar-nav mx-auto d-block">
            <button class="btn btn-sm btn-primary m-2" @click="load='opd',getOPD()">OPD</button>
            <button class="btn btn-sm btn-primary m-2" @click="load='couse'">คอร์ส</button>
            <button class="btn btn-sm btn-primary m-2" @click="load='item'">สินค้า</button>
          </ul>

        </nav>

        <div class="float-start" v-if="load==='couse'">
          <div v-for="item,index in couse" :key="index" class="btn btn-outline-dark card block-3 m-1 p-1">
            <div class="d-flex justify-content-center">
                 <img :src="item.display" alt="itme display" class="img-card">
            </div>
          <span v-if="item.couseName.length<=13" class="fw-semibold fs-10 text-center mt-1">{{item.couseName.toUpperCase()}}</span>
          <span v-if="item.couseName.length>=14" class="fw-semibold fs-10 text-center mt-1">{{item.couseName[0].toUpperCase()+item.couseName[1].toUpperCase()+item.couseName[2].toUpperCase()+item.couseName[3].toUpperCase()+item.couseName[4].toUpperCase()+item.couseName[5].toUpperCase()+item.couseName[6].toUpperCase()+item.couseName[7].toUpperCase()+item.couseName[8].toUpperCase()+item.couseName[9].toUpperCase()+item.couseName[10].toUpperCase()+"..."}}</span>
          <span class="fw-semibold fs-10 text-center mt-1">{{Intl.NumberFormat().format(item.price)}} บาท</span>
          <span class="fw-semibold fs-10 text-center mt-1"> {{Intl.NumberFormat().format(item.per)}} ครั้ง</span>
          <button class="btn btn-sm btn-warning">เลือก</button>
          </div>
          </div>

          <div class="float-start" v-if="load==='item'">
          <div v-for="item,index in item" :key="index" class="btn btn-outline-dark card block-3 m-1 p-1">
           <div class="d-flex justify-content-center">
            <img :src="item.display" alt="itme display" class="img-card">
           </div>
          <span v-if="item.ItemName.length<=13" class="fw-semibold fs-10 text-center mt-1">{{item.ItemName.toUpperCase()}}</span>
          <span v-if="item.ItemName.length>=14" class="fw-semibold fs-10 text-center mt-1">{{item.ItemName[0].toUpperCase()+item.ItemName[1].toUpperCase()+item.ItemName[2].toUpperCase()+item.ItemName[3].toUpperCase()+item.ItemName[4].toUpperCase()+item.ItemName[5].toUpperCase()+item.ItemName[6].toUpperCase()+item.ItemName[7].toUpperCase()+item.ItemName[8].toUpperCase()+item.ItemName[9].toUpperCase()+item.ItemName[10].toUpperCase()+"..."}}</span>
          <span class="fw-semibold fs-10 text-center mt-1">{{Intl.NumberFormat().format(item.price)}} บาท</span>
          <span class="fw-semibold fs-10 text-center mt-1"> {{Intl.NumberFormat().format(item.amount)}} {{item.unit}}</span>
          <button class="btn btn-sm btn-warning">เลือก</button>
          </div>
          </div>

           <div class=" p-3" v-if="load==='opd'">
             
            <table class="table table-hover mt-2" id="datatable" cellspacing="0" width="100%">
                  <thead>
                    <tr class="px-0">
                      <th class="fs-res mx-0 px-0">OPD</th>
                      <th class="fs-res mx-0 px-0">ชื่อ-นามสกุล</th>
                      <th class="fs-res mx-0 px-0">ชื่อเล่น</th>
                      <th class="fs-res mx-0 px-0">เพศ</th>
                      <th class="fs-res mx-0 px-0">เบอร์โทร</th>
                      <th class="fs-res mx-0 px-0">9</th>
                      <th class="fs-res mx-0 px-0">Q</th>
                      <th class="fs-res mx-0 px-0">p</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="item,index in OPD" :key="index">
                      <td>{{item.OPDnumber}}</td>
                      <td>{{item.firstname+" "+item.lastname}}</td>
                      <td>{{item.nickname}}</td>
                      <td>{{item.sex}}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
             </div>

      

        </div>
      </div>
      <!--right-->
		  <div class="card block-2">
        <div class="bg-dark brt-3">
          <div class="container d-flex justify-content-start m-1">
            <input type="text" name="" id="">
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
import $ from "jquery";
import sha1 from 'sha1'
import moment from 'moment'
import axios from 'axios';
import command from '../../assets/command'
const _ =require("lodash")
export default {
  name: 'DarleneVue3Index',
  data() {
    return {
      load:'opd',
      couse:'',
      item:'',
      OPD:'',
    };
  },
  mounted() {
    this.getCouse()
    this.getitem()
    this.getOPD()
  },
  methods: {
    getCouse(){
        axios.get(`${command.DB_URL}/couse/list.json`).then((result) => {
          this.couse=result.data
        }).catch((err) => {
          console.log(err)
        });
    },
    getitem(){
        axios.get(`${command.DB_URL}/items/list.json`).then((result) => {
          this.item=result.data
        }).catch((err) => {
          console.log(err)
        });
    },
    getOPD(){
        axios.get(`${command.DB_URL}/OPD.json`).then((result) => {
          console.log(result.data)
          this.OPD=result.data
          this.OPD.splice(0,1)
        //   $(document).ready(function () {
        //   $("#datatable").DataTable({
        //     lengthMenu: [
        //       [ 5,10, 25, 50, -1],
        //       [ 5,10, 25, 50, "All"],
        //     ],
        //     order: [[3, 'desc']],
        //     pagging: true
        //   });
        // });
        }).catch((err) => {
          console.log(err)
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.block-0 {
	width: 100%;
	height: 100%;
  float: left;
}
.block-center{
  width: 100%;
	height: 100%;
  float: center;
}
.block-1 {
	width: 70%;
	height: 98%;
  float: left;
}
.block-2 {
	width: 30%;
	height: 98%;
  float: right;
}
.block-3 {
	width: 100px;
	height: auto;
  float: inherit;
}

.fs-10{
  font-size: 10px;
}

.img-card{
  width: 90px;
  height: 90px;
  border-radius: 3%;
  box-shadow: 2px 2px 2px rgb(193, 193, 193);
}
.brt-2{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.brt-3{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 60%;
}

@media screen and (max-width: 1000px){
.block-1 {
	width: 100%;
	height: 98%;

}
.block-2 {
  margin-top: 5px;
	width: 60%;
	height: 98%;
  margin-left:100%;
  margin-right:20px;
  padding: auto;
  position: absolute;
}
}
</style>