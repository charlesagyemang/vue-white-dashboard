<template>

  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">

          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
             {{title}}   <router-link to="/dashboard/add-an-owner" class="btn btn-primary">ADD A NEW OWNER</router-link>
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
          <th>Actions</th>
          <th>Full Name</th>
          <th>email</th>
          <th>phoneNumber</th>
          <th>address</th>
          <th>status</th>
          <th>Cars</th>
        </template>

        <template slot-scope="{row}">

          <td class="more-actions">
            <base-dropdown class="dropdown"
                           position="left">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <button @click.prevent="handleOwnerActions(row.id, `/dashboard/view-owner-details/${row.id}`)" class="dropdown-item">View Full Details</button>
                <button @click.prevent="handleOwnerActions(row.id, `/dashboard/edit-single-owner/${row.id}`)" class="dropdown-item">Edit Owner</button>
                <button @click="modals.modal3 = true" class="dropdown-item" href="#">Attach A Car</button>
                <button @click="handleOpenChangeOwnerStatusModal(row.id)" class="dropdown-item" href="#">Update Owner Status</button>
              </template>
            </base-dropdown>
          </td>

          <th scope="username">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Car Image" :src="row.imageUrl">
              </a>
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.fullName}}</span>
              </div>
            </div>
          </th>

          <td class="email">
            {{row.email}}
          </td>

          <td class="phone-number">
            {{row.phoneNumber}}
          </td>

          <td class="address">
            {{row.address}}
          </td>

          <td class="status">
            <badge :type="row.statusColor">{{row.status}}</badge>
          </td>

          <td class="cars">
            {{row.cars.length}}
          </td>

        </template>

      </base-table>
    </div>

    <div class="row">
        <div class="col-md-4">
            <modal :show.sync="modals.modal3"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <h5>Select A Car To Attach To Name Here</h5>
                        </div>
                        <form role="form">
                           <multiselect
                                 v-model="selectedCarToAttach"
                                 deselect-label="Currently Selected"
                                 track-by="modelName"
                                 label="modelName"
                                 placeholder="Select One"
                                 :options="allCars">
                            </multiselect>
                            <div class="text-center">
                                <base-button @click="handleAttachCarToOwner" type="primary" class="my-4">Submit</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>
        <div class="col-md-4">
            <modal :show.sync="modals.modal2"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <h2>Update Owner Status</h2>
                        </div>
                        <form role="form">
                           <multiselect v-model="selectedOwnerStatus" :options="updateOwnerStatusList"></multiselect>
                            <div class="text-center">
                                <base-button @click="handleUpdateOwnerStatus" type="success" class="my-4">Submit</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>
    </div>

  </div>
</template>
<script>
import Modal from '@/components/Modal'
import { mapState } from 'vuex'
import store from '@/store/store'

  export default {
    created() {
      if (store.state.owner.owners.length < 1) {
        store.dispatch('owner/fetchOwners').then(() =>{
            console.log(this.owner.owner );
          });
      }
    },
    computed: {
      ...mapState(['owner']),
      tableData(){
        return this.owner.owners
      },
      tableDataIsEmpty(){
        return this.tableData.length < 1
      },
    },
    components: {
        Modal,
    },
    props: {
      type: {
        type: String
      },
      title: String
    },
    methods: {
      handleAttachCarToOwner() {
        // UpdateOwnerInfo By Adding A New Car
        alert(JSON.stringify(this.selectedCarToAttach));
      },
      handleUpdateOwnerStatus() {
        let currentOwner = this.owner.owner;
        delete currentOwner.status;
        delete currentOwner.statusColor;
        let statusColor = "danger";
        if (this.selectedOwnerStatus === "active") {
          statusColor = "success"
        }
        currentOwner = {
          ...currentOwner,
          status: this.selectedOwnerStatus,
          statusColor
        };
        store.dispatch('owner/editOwner', {
          ownerId: currentOwner.id,
          ownerDataToUpdate: currentOwner
        })
        .then((owner) =>{
          // notify
          this.modals.modal2 = false;
          this.$notify({
            type: 'success',
            title: `Status Updated Successfully. Changed To ${owner.status}`,
          });
        }).catch((error) => {
          // this.owner.status = currentOwner.status;
          this.modals.modal2 = false;
          this.$notify({
            type: 'danger',
            title: `Status Failed To Update: Error => ${error.message}`,
          });
        });
      },
      handleOwnerActions(id, route){
        store.dispatch('owner/fetchOwnerById', id).then((owner) =>{
          console.log("==== fetched ====", owner);
          this.$notify({
            type: 'success',
            title: `Full Details For ${owner.fullName}`,
          });
          this.$router.push({
            path: route,
          });
        });
      },
      handleOpenChangeOwnerStatusModal(id){
        this.modals.modal2 = true
        store.dispatch('owner/fetchOwnerById', id)
        .then((owner) =>{
          console.log("==== fetched ====", owner);
          this.selectedOwnerStatus = this.owner.owner.status;
        })
      },
    },
    data() {
      return {
        selectedCarToAttach: {},
        selectedOwnerStatus: '',
        allCars: [
          {
            id: 'carIdOne',
            modelName: 'KIA Morning Lx 2008',
            modelYearL: '2008',
            carNumber: 'GS 1234-20',
          },
          {
            id: 'carIdTwo',
            modelName: 'KIA Morning Lx 2009',
            modelYearL: '2008',
            carNumber: 'GS 1234-20',
          },
          {
            id: 'carIdThree',
            modelName: 'KIA Morning Lx 2010',
            modelYearL: '2008',
            carNumber: 'GS 1234-20',
          },
          {
            id: 'carIdFour',
            modelName: 'KIA Morning Lx 2011',
            modelYearL: '2008',
            carNumber: 'GS 1234-20',
          },

        ],
        modals:{
          modal1: false,
          modal2: false,
          modal3: false,
        },
        carForm: {
          currentDriver: ''
        },
        allDriversList: [
          'Driver 1',
          'Driver 2',
          'Driver 3',
        ],
        updateOwnerStatusList: [
          'active',
          'inactive',
        ],
        total: 30,
      }
    },
  }
</script>
<style>
</style>
