<template>
<div >
  <table
        class="table table-hover mt-2"
        id="datatable"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th class="fs-res mx-0">ชื่อ</th>
            <th class="fs-res mx-0">ชื่อเล่น</th>
            <th class="fs-res mx-0">เบอร์โทร</th>
            <th class="fs-res mx-0">
              <span class="material-symbols-outlined text-black-50">sync_lock</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in arr" :key="item.username">
            <td class="fs-res mx-0">{{ item.firstname+" "+item.lastname}}</td>
            <td class="fs-res mx-0">{{ item.nickname }}</td>
            <td class="fs-res mx-0">{{ item.phone }}</td>
            <td class="fs-res mx-0">
              <span class="material-symbols-outlined text-black-50">sync_lock</span>
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
const DB_URL =
  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
export default {
  
  name: 'DarleneVue3OpdTable',

  data() {
    return {
      arr:[]
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
            pagging: true
          });
        });
      }).catch((err) => {
        console.log(err)
      });
    }
  },
};
</script>

<style lang="scss" scoped>
fs-res {
    font-size: 20px;
  }
/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 992px) {
  .fs-res {
    font-size: 15px;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  .fs-res {
    font-size: 10px;
  }
}
</style>