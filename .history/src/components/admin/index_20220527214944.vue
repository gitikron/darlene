<template>
  <div class="block-0 m-2 p-0">
    <div class="block-center">
      <div class="card block-1">
        <div class="float-sm-start">
        <div class="slider">
          <div v-for="item,index in couse" :key="index" class="btn btn-btn-outline-dark card block-3 m-2 p-1">
          <img :src="item.display" alt="itme display" class="img-card">
          <span v-if="item.couseName.length<=13" class="fw-semibold fs-10 text-center mt-1">{{item.couseName.toUpperCase()}}</span>
          <span v-if="item.couseName.length>=14" class="fw-semibold fs-10 text-center mt-1">{{item.couseName[0]+item.couseName[1]+item.couseName[2]+item.couseName[3]+item.couseName[4]+item.couseName[5]+item.couseName[6]+item.couseName[7]+item.couseName[8]+item.couseName[9]+item.couseName[10]+"..."}}</span>
          <span class="fw-semibold fs-10 text-center mt-1">{{item.price}} บาท / {{item.per}} ครั้ง</span>
          </div>

      
 </div>
        </div>


      </div>
		  <div class="card block-2"></div>
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
      couse:''
    };
  },
  mounted() {
    this.getCouse()
  },
  methods: {
    getCouse(){
        axios.get(`${command.DB_URL}/couse/list.json`).then((result) => {
          console.log(result.data)
          this.couse=result.data
          console.log(this.couse)
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
	width: 80%;
	height: 98%;
  float: left;
}
.block-2 {
	width: 20%;
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
  box-shadow: 2px 2px 4px black;
}

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
html,body{
  display: grid;
  height: 100%;
  place-items: center;
  text-align: center;
  background: #f2f2f2;
}
.slider{
  max-width: 1100px;
  display: flex;
}
.slider .card{
  flex: 1;
  margin: 0 10px;
  background: #fff;
}
.slider .card .img{
  height: 200px;
  width: 100%;
}
.slider .card .img img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.slider .card .content{
  padding: 10px 20px;
}
.card .content .title{
  font-size: 25px;
  font-weight: 600;
}
.card .content .sub-title{
  font-size: 20px;
  font-weight: 600;
  color: #e74c3c;
  line-height: 20px;
}
.card .content p{
  text-align: justify;
  margin: 10px 0;
}
.card .content .btn{
  display: block;
  text-align: left;
  margin: 10px 0;
}
.card .content .btn button{
  background: #e74c3c;
  color: #fff;
  border: none;
  outline: none;
  font-size: 17px;
  padding: 5px 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
}
.card .content .btn button:hover{
  transform: scale(0.9);
}
</style>