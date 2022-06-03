<template>
<div >
  <table
        class="table table-hover mt-2"
        id="datatable"
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
          <tr v-for="item,index in arr" :key="index">
            <td class="fs-res mx-0 px-0">{{ item.firstname+" "+item.lastname}}</td>
            <td class="fs-res mx-0 x-0">{{ item.nickname }}</td>
            <td class="fs-res mx-0 px-0">{{ item.phone }}</td>
            <td class="fs-res mx-0 px-0">
              <button class="btn btn-outline-dark btn-sm material-symbols-outlined" data-bs-toggle="modal" data-bs-target="#editModal" @click="editModel(index,item)">edit</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal -->
      <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {{edit}}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- end Modal -->
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";
const DB_URL =
  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
export default {
  
  name: 'DarleneVue3OpdTable',

  data() {
    return {
      arr:[],
      edit:{
        index:"",
        item:[]
      }
    };
  },

  mounted() {
    this.GetTable()
  },

  methods: {
    GetTable(){
      axios.get(`${DB_URL}/OPD.json`).then((result) => {
        this.arr=result.data
        this.arr.splice(0,1)
        $(document).ready(function () {
          $("#datatable").DataTable({
            lengthMenu: [
              [ 5,10, 25, 50, -1],
              [ 5,10, 25, 50, "All"],
            ],
            order: [[3, 'desc']],
            pagging: true
          });
        });
      }).catch((err) => {
        console.log(err)
      });
    },
    editModel(index){
      this.edit.index=index
    }
  },
};
</script>

<style lang="scss" scoped>
fs-res {
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