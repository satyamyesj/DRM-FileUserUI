<template>
    <div class="container">
        <div>
            <h1>File User Registration</h1>
        </div>
        <form @submit="onSubmit">
            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control" required>
            </div>
            <div class="form-group">
                <label>First name</label>
                <input type="text" v-model="first_name" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Last name</label>
                <input type="text" v-model="last_name" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
//import store from "../store";
import axios from "axios";

export default {
    name:"fileUserRegistration",
    data(){
        return{
            email:"",
            first_name:"",
            last_name:"",
            password:""
        }
    },
    methods:{
        ...mapActions(["registerFileUser"]),
        onSubmit(e){
            e.preventDefault();
            const fileUserInstance={
                email:this.email,
                first_name:this.first_name,
                last_name:this.last_name,
                password:this.password
            }
            //this.registerFileUser(fileUserInstance);
            try{
                axios.post("http://127.0.0.1:3002/api/file_user_registration",fileUserInstance);
                console.log("success");
                window.location.href="/";
            }
            catch(err){
                console.log("Reg-File-User-Err:"+err);
            }
        }
    }
}
</script>

<style scoped>

</style>