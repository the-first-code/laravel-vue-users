function User({
                id,
                name,
                email,
                last_name,
                surname,
                phone
}) {
    this.id = id;
    this.name = name;
    this.email = email;
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
        async del (state, obj) {
            state.muteDiv = true;
            let id = obj.id, pageNumb = obj.pageNumb;
            const { data } = await axios.get(`/api/delete/${id}?page=${pageNumb}`);
            state.users = [];
            state.links = [];
            data.data.forEach(user => state.users.push(new User(user)));
            data.links.forEach(link => state.links.push(new Link(link)));
            state.muteDiv = false;
        },
        async read(state, obj) {
            state.muteDiv = true;
            let pageNumb = obj;
            const { data } = await axios.get(`/api/users/?page=${pageNumb}`);
            state.users = [];
            state.links = [];
            data.data.forEach(user => state.users.push(new User(user)));
            data.links.forEach(link => state.links.push(new Link(link)));
            state.muteDiv = false;
        }
    },
    actions:{
        update ({commit}, obj) {
            commit('update', obj);
        },
        del ({commit}, obj) {
            commit('del', obj);
        },
        read ({commit}, obj) {
            commit('read', obj);
        }
    }
}
