<template>
  <div>
    <table class="table" id="datatable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
 import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";
const DB_URL =
  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
export default {
  name: "DarleneVue3Admintable",

  data() {
    return {
      data: [],
    };
  },

  mounted() {
    axios.get(`${DB_URL}/auth.json`).then((response) => {
      this.data = response;
      console.log(response)
      $("#datatable").DataTable({
        lengthMenu: [3, 5, 10],
        responsive: true,
        select: true,
        searching: true,
        paging: true,
      });
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
