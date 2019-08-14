<template>
    <div>
        <!--<vue-topprogress ref="topProgress"></vue-topprogress>-->
        <div class="container">
            <v-server-table ref="myTable"
                    :columns="columns"
                    :options="options">
            </v-server-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: ['id', 'name', 'email'],
                options: {
                    headings: {
                        id: 'ID',
                        name: 'Student Name',
                        email: 'Email',
                        // action: 'Action'
                    },
                    perPage: 10,
                    perPageValues: [10,20,25,50,100],
                    sortable: ['name', 'email'],
                    filterable: ['name'],
                    requestFunction: function (data) {
                        let self = this;
                        return self.axios.get('http://vue-datatable-backend.codefrontback.com/api/students', { params: data }).catch(function (e) {
                            self.dispatch('error', e);
                        }.bind(this));
                    },
                    responseAdapter: function(resp) {
                        return {
                            data: resp.data.data,
                            count: resp.data.total,
                        }
                    }
                }
            }
        },

        mounted() {

        }

    }
</script>

<style>
    #app {
        width: 95%;
        margin-top: 50px;
    }

    .VuePagination {
        text-align: center;
    }
    .VuePagination nav{
         line-height: 0px !important;
    }

    .vue-title {
        text-align: center;
        margin-bottom: 10px;
    }

    .vue-pagination-ad {
        text-align: center;
    }

    .glyphicon.glyphicon-eye-open {
        width: 16px;
        display: block;
        margin: 0 auto;
    }

    th:nth-child(3) {
        text-align: center;
    }

    .VueTables__child-row-toggler {
        width: 16px;
        height: 16px;
        line-height: 16px;
        display: block;
        margin: auto;
        text-align: center;
    }

    .VueTables {
        margin-top:20px;
    }
    .VueTables__child-row-toggler--closed::before {
        content: "+";
    }

    .VueTables__limit-field{
        margin-top:30px;
    }
    .VueTables__child-row-toggler--open::before {
        content: "-";
    }

    .VuePagination nav{
        background-color: transparent !important;
        color:black;
        box-shadow: none;
        text-align: right;
        padding:0px;
    }
    .VuePagination nav ul{
        float:right;
        margin:0px;
    }
    .VuePagination nav p{
        text-align: right;
        padding:0px;
    }
    .VuePagination__count{
        line-height:28px;
    }
</style>