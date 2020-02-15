import axios from 'axios'

const state={
    user_profile:{}
}

const getters={
   get_user_profile:(state)=>state.user_profile
}

const actions={
 async register_file_user({commit}, user_profile){
     const response=await axios.post("http://127.0.0.1:3002/api/file_user_registration", user_profile)
     var file_user_asset={
        "$class": "org.ownershiprecord.network.FileUser",
        "id": response.data.user_profile.id,
        "firstName": response.data.user_profile.first_name,
        "lastName": response.data.user_profile.last_name
     }
     const rep=await axios.post("http://localhost:3000/api/FileUser",file_user_asset);
     console.log(rep);
     commit('set_user_profile', response.data)
 }
}

const mutations={
set_user_profile:(state, user_profile)=>{
    state.user_profile=user_profile;
    //window.location.href="/";
}
}

export default{
    state,
    getters,
    actions,
    mutations
}