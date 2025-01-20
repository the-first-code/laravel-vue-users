function User({
                id,
                name,
                email
}) {
    this.id = id;
    this.name = name;
    this.email = email;
}

function Profile({
    id,
    last_name,
    surname,
    phone
}) {
    this.id = id;
    this.last_name = last_name;
    this.surname = surname;
    this.phone = phone;
}

function Link({url, label, active}) {
    this.url = url;
    this.label = label;
    this.active = active;
}

import axios from 'axios';

export default {
    namespaced: true,
    state:{
        users: [],
        profiles: [],
        links: [],
        muteDiv: false
    },
    mutations:{
        async update (state, obj) {
            state.muteDiv = true;
            let paramName = obj.paramName, param = obj.param, id = obj.id, pageNumb = obj.pageNumb;
            await axios.put(`/api/update/${id}?page=${pageNumb}`, {
                param,
                paramName
            });
            state.users.find(user => user.id === id)[paramName] = param;
            state.muteDiv = false;
        },
        async updateProfiler (state, obj) {
            state.muteDiv = true;
            let paramName = obj.paramName, param = obj.param, id = obj.id, pageNumb = obj.pageNumb;
            await axios.put(`/api/updateProfile/${id}?page=${pageNumb}`, {
                param,
                paramName
            });
            state.profiles.find(profile => profile.id === id)[paramName] = param;
            state.muteDiv = false;
        },
        async del (state, obj) {
            state.muteDiv = true;
            let id = obj.id, pageNumb = obj.pageNumb;
            const { data } = await axios.get(`/api/delete/${id}?page=${pageNumb}`);
            const dataProf = await axios.get(`/api/deleteProf/${id}?page=${pageNumb}`);
            state.users = [];
            state.profiles = [];
            state.links = [];
            data.data.forEach(user => state.users.push(new User(user)));
            dataProf.data.data.forEach(profile => state.profiles.push(new Profile(profile)));
            data.links.forEach(link => state.links.push(new Link(link)));
            state.muteDiv = false;
        },
        async read(state, obj) {
            state.muteDiv = true;
            let pageNumb = obj;
            const dataProfile = await axios.get(`/api/usersProfile/?page=${pageNumb}`);
            const { data } = await axios.get(`/api/users/?page=${pageNumb}`);
            state.profiles = [];
            state.users = [];
            state.links = [];
            data.data.forEach(user => state.users.push(new User(user)));
            dataProfile.data.data.forEach(profile => state.profiles.push(new Profile(profile)));
            data.links.forEach(link => state.links.push(new Link(link)));
            state.muteDiv = false;
        }
        /*async readProf(state, obj) {
            state.muteDiv = true;
            let pageNumb = obj.pageNumb;
            const { data } = await axios.get(`/api/usersProfile/?page=${pageNumb}`);
            state.profiles = [];
            data.data.forEach(profile => state.profiles.push(new Profile(profile)));
            state.muteDiv = false;
        }*/
        /*async filter(state, perPage) {
            state.muteDiv = true;
            const { data } = await axios.get('/api/search', {
                perPage,
                paramName,
                search
            });
            state.users = [];
            state.links = [];
            data.data.forEach(user => state.users.push(new User(user)));
            data.links.forEach(link => state.links.push(new Link(link)));
            state.muteDiv = false;
        }*/
    },
    actions:{
        update ({commit}, obj) {
            commit('update', obj);
        },
        updateProfiler ({commit}, obj) {
            commit('updateProfiler', obj);
        },
        del ({commit}, obj) {
            commit('del', obj);
        },
        read ({commit}, obj) {
            commit('read', obj);
        }
        /*readProf ({commit}, obj) {
            commit('readProf', obj);
        }*/
        /*filter ({commit}, perPage) {
            commit('filter', perPage);
        }*/
    }
}
