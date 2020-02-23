<template>
  <div id="home">
    <form @submit="onSubmit">
      <div class="form-group">
        <label>File Asset Name</label>
        <input type="text" v-model="file_asset_name" class="form-control" required />
      </div>
      <div class="form-group">
        <label>Access type</label>
        <input type="text" v-model="access_type" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="row">
      <div class="col-md-6">
        <ul>
          <li v-for="item in get_pending_request" v-bind:key="item.fileAsset">{{ item.fileAsset }}</li>
        </ul>
      </div>
      <div class="col-md-6">
        <ul>
          <li v-for="item in get_file_right" v-bind:key="item.fileAsset">{{ item.fileAsset }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      file_asset_name: "",
      access_type: ""
    };
  },
  methods: {
    ...mapActions([
      "query_pending_request",
      "query_file_right",
      "query_request_access"
    ]),
    onSubmit(e) {
      e.preventDefault();
      const request_access_instance = {
        fileAsset: this.file_asset_name,
        accessType: this.access_type
      };
      console.log(request_access_instance);
      console.log(request_access_instance.fileAsset);
      console.log(request_access_instance.accessType);
      this.query_request_access(request_access_instance);
    }
  },
  computed: mapGetters(["get_pending_request", "get_file_right"]),
  mounted() {
    this.query_pending_request();
    this.query_file_right();
  }
  // computed:mapGetters(["get_auth_status"]),
  // mounted(){
  //     console.log("auth="+this.get_auth_status);
  //     if(this.get_auth_status==false){
  //         window.location.href="/#/fileUserLogin";
  //     }
  // }
};
</script>

<style scoped>
</style>