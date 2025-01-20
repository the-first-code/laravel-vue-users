function User({
                id,
                first_name,
                last_name,
                surname,
                email,
                phone
}) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.surname = last_name;
    this.phone = phone;
    this.email = email;
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
        /*async create (state, pageNumb) {
            state.muteDiv = true;
            const { data } = await axios.get(`/api/create?page=${pageNumb}`);
            if (state.supliers.length < 5) state.supliers.push(new Suplier(data.data.at(-1)));
            state.links = [];
            data.links.forEach(link => state.links.push(new Link(link)));
            state.muteDiv = false;
        },*/
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
            let pageNumb = obj.pageNumb, perPage = obj.perPage;
            const { data } = await axios.get(`/api/users/?page=${pageNumb}`, {
                perPage
            });
            state.users = [];
            state.links = [];
            data.data.forEach(user => state.users.push(new User(user)));
            data.links.forEach(link => state.links.push(new Link(link)));
            state.muteDiv = false;
        }
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
        /*create ({commit}, pageNumb) {
            commit('create', pageNumb);
        },*/
        update ({commit}, obj) {
            commit('update', obj);
        },
        del ({commit}, obj) {
            commit('del', obj);
        },
        read ({commit}, obj) {
            commit('read', obj);
        }
        /*filter ({commit}, perPage) {
            commit('filter', perPage);
        }*/
    }
}
