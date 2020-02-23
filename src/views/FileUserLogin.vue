<template>
    <div class="container">
        <div>
            <h1>File User Login</h1>
        </div>
        <form @submit="onSubmit">
            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <form id="registerForm" @submit="doRegister">
            <br><button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name:"fileUserLogin",
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        ...mapActions(["login_file_user"]),
        onSubmit(e){
            e.preventDefault();
            const fileUserInstance={
                email:this.email,
                password:this.password
            }
            this.login_file_user(fileUserInstance);
        },
        doRegister(e){
            e.preventDefault();
            window.location.href = "/#/fileUserRegistration";
        }
    }
}
</script>

<style scoped>
#registerForm{
    margin-top: 2px;
}
</style>