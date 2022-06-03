<template>
<div>
  <div class="d-flex justify-content-end pb-2">
    <button class="btn btn-sm btn-primary m-2" @click="excelUpload()">Upload with excel</button>
    <button class="btn btn-sm btn-primary m-2" @click="CreateOpds()" v-if="CreateOpd===false">
      Create OPD
    </button>
        <button class="btn btn-sm btn-danger m-2" @click="CreateOpds()" v-if="CreateOpd===true">
      Create OPD
    </button>
  </div>
    <div class="container card p-3 mb-2" v-if="excel===true">
        <input type="file" id="input" class="form-control" @change="readfile($event)"/>
        {{importArr}}
      </div>
    <ADOPDCREATE class="container card p-3 mb-2" v-if="CreateOpd===true"/>
    <ADOPDTABLE class="container card p-3 mb-2" v-if="CreateOpd===false"/>

    
    
  </div>
</template>

<script>
export default {
  name: "DarleneVue3Index",

  data() {
    return {
      excel:true,
      CreateOpd:false,
      load: "",
      importArr:[]
    }
  },

  mounted() {
  },

  methods: {
    readfile(e){
      const file = e.target.files[0]
      console.log(file)
      readXlsxFile(file).then((result) => {
        const data=result
        data.splice(0,1)
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          const row= {
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
    }
  },
};
</script>

<style lang="scss" scoped></style>
