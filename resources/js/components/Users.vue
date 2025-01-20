<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 btn-center">
                <v-btn color="green" @click="excel">Download XLS</v-btn>
                <div class="table-cont">
                    <table class="user-table">
                        <thead>
                            <tr>
                                <td class="bold-text">ID</td>
                                <td class="bold-text">Имя</td>
                                <td class="bold-text">Фамилия</td>
                                <td class="bold-text">Отчество</td>
                                <td class="bold-text">Email</td>
                                <td class="bold-text">Телефон</td>
                                <td class="bold-text">
                                    <!--<v-btn color="red">Delete</v-btn>-->
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <User v-for="user in users"
                                  :key="user.id"
                                  v-bind="user"
                                  @update="updateUser"
                                  @updateProfile="updateProfile"
                                  @del="delUser"
                            ></User>
                        </tbody>
                    </table>
                    <linksPaginate @paging="paging"></linksPaginate>
                </div>
            </div>
        </div>
    </div>

    <div id="mute" :class="{'on-mute': this.$store.state.getUser.muteDiv}"></div>
</template>

<script>
    import { mapActions } from 'vuex';
    import axios from 'axios';
    import User from '@/components/User.vue';
    import linksPaginate from '@/components/linksPaginate.vue';

export default {
    components: {
        'User': User,
        'linksPaginate': linksPaginate
    },
    data(){
        return {
            muteVal: false,
            objVal: {
                id: null,
                pageNumb: null,
                paramName: null,
                param: null
            },
            objValProf: {
                id: null,
                pageNumb: null,
                paramName: null,
                param: null
            }
        }
    },
    computed: {
        users() {
            let arr = [];
            for (var i = 0; i < 20; i++) {
                if (this.$store.state.getUser.users[i] != null || this.$store.state.getUser.profiles[i] != null)
                arr.push(Object.assign({}, this.$store.state.getUser.users[i], this.$store.state.getUser.profiles[i]));
            }

            return arr;
        }
        /*mute() {
            return this.$store.state.getSup.mute;
        }*/
    },
    methods: {
        ...mapActions('getUser', {
            read: 'read',
           //readProf: 'readProf',
            update: 'update',
            updateProfiler: 'updateProfiler',
            del: 'del'
        }),
        /*...mapMutations('getSup', {
            mute: 'mute'
        }),*/
        paging(obj) {
            this.read(obj);
            //this.readProf(obj);
        },
        updateUser(id, pageNumb, paramName, param) {
            this.objVal.id = id;
            this.objVal.pageNumb = pageNumb;
            this.objVal.paramName = paramName;
            this.objVal.param = param;
            this.update(this.objVal);
        },
        updateProfile(id, pageNumb, paramName, param) {
            this.objValProf.id = id;
            this.objValProf.pageNumb = pageNumb;
            this.objValProf.paramName = paramName;
            this.objValProf.param = param;
            this.updateProfiler(this.objValProf);
        },
        delUser(id, pageNumb) {
            let obj = {
                id,
                pageNumb
            }
            this.del(obj);
        },
        excel() {
            window.location = '/export-users';
        }
    },
    mounted() {
        let obj = {
            pageNumb: 1
        }
        this.paging(obj);
    }
}
</script>
