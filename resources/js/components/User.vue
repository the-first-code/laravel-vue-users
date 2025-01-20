<template>    
    <tr>
        <td class="text-td">
            <span>{{ id }}</span>
        </td>
        <td class="text-td">
            <span @dblclick="update">{{ name }}</span>
            <input type="text" style="display: none;" :value="name" @change="updateAx(e, 'name', this.id)">
        </td>
        <td class="text-td">
            <span @dblclick="update">{{ last_name }}</span>
            <input type="text" style="display: none;" :value="last_name" @change="updateAxProf(e, 'last_name', this.id)">
        </td>
        <td class="text-td">
            <span @dblclick="update">{{ surname }}</span>
            <input type="text" style="display: none;" :value="surname" @change="updateAxProf(e, 'surname', this.id)">
        </td>
        <td class="text-td">
            <span @dblclick="update">{{ email }}</span>
            <input type="text" style="display: none;" :value="email" @change="updateAx(e, 'email', this.id)">
        </td>
        <td class="text-td">
            <span @dblclick="update">{{ phone }}</span>
            <input type="text" style="display: none;" :value="phone" @change="updateAxProf(e, 'phone', this.id)">
        </td>
        <td class="text-td">
            <v-btn color="red" @click="del(this.id)">Delete</v-btn>
        </td>
    </tr>
</template>

<script>
    export default {
        data: function() {
            return {
                showSpan: 'input',
                showInp: 'none'
            }
        },
        props: ['id', 'name', 'last_name', 'surname', 'email', 'phone'],
        methods: {
            update(e) {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'inline-block';
                e.target.nextElementSibling.focus();
            },
            del(id) {
                let pageNumb;
                pageNumb = this.$store.state.getUser.links.find(link => link.url != null && link.label != '...' && link.active === true).label;
                //pageNumb = 1;
                this.$emit('del', id, pageNumb);
            },
            updateAx(e, paramName, id) {
                e = event || window.event;
                let pageNumb, param;
                param = e.target.value;
                //perPage = this.$store.state.getSup.perPage;
                pageNumb = this.$store.state.getUser.links.find(link => link.url != null && link.label != '...' && link.active === true);
                this.$emit('update', id, pageNumb, paramName, param);
                e.target.style.display = 'none';
                e.target.previousElementSibling.style.display = 'inline-block';
            },
            updateAxProf(e, paramName, id) {
                e = event || window.event;
                let pageNumb, param;
                param = e.target.value;
                //perPage = this.$store.state.getSup.perPage;
                pageNumb = this.$store.state.getUser.links.find(link => link.url != null && link.label != '...' && link.active === true);
                this.$emit('updateProfile', id, pageNumb, paramName, param);
                e.target.style.display = 'none';
                e.target.previousElementSibling.style.display = 'inline-block';
            }
        }
    }
</script>