<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}} <button @click.prevent="getLatestData" class="btn btn-warning">Refresh</button>
          </h3>
        </div>

      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th>Year</th>
          <th>Month</th>
          <th>Amount</th>
          <th>Car</th>
          <th>Actions</th>
        </template>

        <template slot-scope="{row}">

          <td scope="year">
            <pre>{{row.year}}</pre>
          </td>

          <td scope="month">
            {{row.month}}
          </td>

          <td class="amount">
            {{row.amount}}
          </td>

          <td class="car">
            {{row.car.modelName}}
          </td>

          <td class="more-actions">
            <base-dropdown class="dropdown"
                           position="left">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>
              <template>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
              </template>
            </base-dropdown>
          </td>


        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
import {mapState} from 'vuex';

  export default {
    beforeCreate () {
      // Tobi Geolcator
      // if(navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(function(position) {
      //       console.log(position);
      //   });
      // } else {
      //     alert("Sorry, your browser does not support HTML5 geolocation.");
      // }
    },
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    created (){
      // fetch all insurance
      if (this.$store.state.car.carMonthlyexpenses.length < 1) {
        this.$store.dispatch('car/fetchCarMonthlyexpenses').then(() =>{
            console.log(this.car.carMonthlyexpenses );
          });
      }
    },
    data() {
      return {
        total: 30,
      }
    },
    computed: {
      ...mapState(['car']),
      tableData(){
        return this.car.carMonthlyexpenses
      },
    },
    methods: {
      getLatestData() {
        this.$store.dispatch('car/fetchCarMonthlyexpenses').then(() =>{
            console.log(this.car.carMonthlyexpenses );
        });
      },
    },
  }
</script>
<style>
</style>
