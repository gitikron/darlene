<template>
  <div>
    <table class="table" id="datatable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
           <th>role</th>
           <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.username">
          <td v-if="item.role='admin'">{{ item.name }}</td>
          <td v-if="item.role='admin'">{{ item.username }}</td>
          <td v-if="item.role='admin'">{{ item.role }}</td>
          <td v-if="item.role='admin'">
            <button class="btn">del</button>
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
  name: "DarleneVue3Admintable",

  data: function () {
    return {
      data: [],
    };
  },

  mounted() {
    axios.get(`${DB_URL}/auth.json`).then((response) => {
      this.data = response.data;
      $(document).ready(function () {
        $("#datatable").DataTable({
          lengthMenu: [
            [5,10, 25, 50, -1],
            [5,10, 25, 50, 'All'],
        ],
          paging:true,

        });
      });
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
