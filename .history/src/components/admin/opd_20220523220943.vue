<template>
<div>
  <div class="d-flex justify-content-end pb-2">
    <button class="btn btn-sm btn-primary m-2" @click="load='excel'">Upload with excel</button>
    <button class="btn btn-sm btn-primary m-2" @click="load='table'" v-if="CreateOpd===false">
     table
    </button>
    <button class="btn btn-sm btn-danger m-2" @click="load='create'" v-if="CreateOpd===true">
      Create OPD
    </button>
  </div>
    <div class="container card p-3 mb-2" v-if="load==='excel'">
        <input type="file" id="input" class="form-control" @change="readfile($event)"/>
         <table
        class="table table-hover mt-2"
        id="datatable2"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr class="px-0">
            <th class="fs-res mx-0 px-0">ชื่อ</th>
            <th class="fs-res mx-0 px-0">ชื่อเล่น</th>
            <th class="fs-res mx-0 px-0">เบอร์โทร</th>
            <th class="fs-res mx-0 px-0">
              <span class="material-symbols-outlined text-black-50">edit</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item,index in importArr" :key="index">
            <td class="fs-res mx-0 px-0">{{ item.firstname+" "+item.lastname}}</td>
            <td class="fs-res mx-0 x-0">{{ item.nickname }}</td>
            <td class="fs-res mx-0 px-0">{{ item.phone }}</td>
            <td class="fs-res mx-0 px-0">
              <button class="btn btn-outline-dark btn-sm material-symbols-outlined" data-bs-toggle="modal" data-bs-target="#editModal" @click="editModel(index)">edit</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    <ADOPDCREATE class="container card p-3 mb-2" v-if="CreateOpd==='create'"/>
    <ADOPDTABLE class="container card p-3 mb-2" v-if="CreateOpd==='table'"/>

    
    
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
