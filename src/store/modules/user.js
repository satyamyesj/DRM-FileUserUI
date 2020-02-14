import axios from "axios";

const actions={
    async registerFileUser(fileUserInstance){
        try{
            axios.post("http://127.0.0.1:3002/api/file_user_registration",fileUserInstance);
            console.log("success");
            window.location.href="/";
        }
        catch(err){
            console.log("Reg-File-User-Err:"+err);
        }
    }
};

export default{
    actions
}
