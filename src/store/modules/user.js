import axios from 'axios'

const state = {
    user_profile: {},
    auth: false,
    pending_request: {},
    file_right: {}
}

const getters = {
    get_user_profile: (state) => state.user_profile,
    get_auth_status: (state) => state.auth,
    get_pending_request: (state) => state.pending_request,
    get_file_right: (state) => state.file_right
}

const actions = {
    async register_file_user({ commit }, user_profile) {
        const response = await axios.post("http://127.0.0.1:3002/api/file_user_registration", user_profile)
        //  var file_user_asset={
        //     "$class": "org.ownershiprecord.network.FileUser",
        //     "id": response.data.user_profile.id,
        //     "firstName": response.data.user_profile.first_name,
        //     "lastName": response.data.user_profile.last_name
        //  }
        console.log(response.data.user_profile);
        //const rep=await axios.post("http://localhost:3000/api/FileUser",file_user_asset);
        //console.log(rep);
        commit('set_user_profile', response.data)
    },
    async login_file_user({ commit }, user_profile) {
        const response = await axios.post("http://127.0.0.1:3002/api/file_user_login", user_profile)
        console.log(response.data.user_profile);
        commit('set_user_profile', response.data)
    },
    async query_pending_request({ commit }) {
        //var id=state.user_profile.id;
        var id = "fu1";
        const response = await axios.get("http://localhost:3000/api/PendingRequest?filter=%7B%22where%22%3A%7B%22fileUser%22%3A%22resource%3Aorg.ownershiprecord.network.FileUser%23" + id + "%22%7D%7D")
        // console.log(response.data);
        // console.log(response.data[0]);
        // console.log(response.data.length);
        commit('set_pending_request', response.data)
    },
    async query_file_right({ commit }) {
        //var id=state.user_profile.id;
        var id = "fu1";
        const response = await axios.get("http://localhost:3000/api/FileRight?filter=%7B%22where%22%3A%7B%22fileUser%22%3A%22resource%3Aorg.ownershiprecord.network.FileUser%23" + id + "%22%7D%7D")
        // console.log(response.data);
        // console.log(response.data[0]);
        // console.log(response.data.length);
        commit('set_file_right', response.data)
    },
    async query_request_access(state,request_access_instance) {
        var r_id = "r5";
        var user_id = "fu2";
        var request_access = {
            "$class": "org.ownershiprecord.network.RequestAccess",
            "requestId": r_id,
            "accessType": request_access_instance.accessType,
            "fileAsset": request_access_instance.fileAsset,
            "fileUser": user_id
        }
        console.log(request_access);
        const response=await axios.post("http://localhost:3000/api/RequestAccess",request_access);
        console.log(response.body);
    }
}

const mutations = {
    set_user_profile: (state, user_profile) => {
        state.user_profile = user_profile;
        state.auth = true;
        window.location.href = "/#/home";
    },
    set_pending_request: (state, pending_request) => {
        state.pending_request = pending_request;
    },
    set_file_right: (state, file_right) => {
        state.file_right = file_right;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}