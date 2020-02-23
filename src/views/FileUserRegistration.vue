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
        ...mapActions(["register_file_user"]),
        onSubmit(e){
            e.preventDefault();
            const fileUserInstance={
                email:this.email,
                first_name:this.first_name,
                last_name:this.last_name,
                password:this.password
            }
            this.register_file_user(fileUserInstance);
        }
    }
}
</script>

<style scoped>

</style>
