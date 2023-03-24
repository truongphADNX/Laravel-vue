<template>
    <div style="background: #ececec; padding: 30px">
        <a-card title="User" :bordered="false" style="width: 100%">
            <div class="row">
                <div class="col-12">
                    <a-table
                        :dataSource="users"
                        :columns="columns"
                        :scroll="{ x: 574 }"
                    >
                        <template #bodyCell="{ column, index, record }">
                            <template v-if="column.key === 'index'">
                                <span>{{ index + 1 }}</span>
                            </template>
                            <template v-if="column.key === 'status'">
                                <span
                                    v-if="record.status_id == 1"
                                    class="text-primary"
                                    >{{ record.status }}</span
                                >
                                <span
                                    v-if="record.status_id == 2"
                                    class="text-danger"
                                    >{{ record.status }}</span
                                >
                            </template>
                        </template>
                    </a-table>
                </div>
            </div>
        </a-card>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useMenu } from "../../../stores/use-menu.js";
export default defineComponent({
    setup() {
        useMenu().onSelectedKeys(["admin-users"]);
        const users = ref([]);
        const columns = [
            {
                title: "#",
                dataIndex: "#",
                key: "index",
            },
            {
                title: "Avatar",
                dataIndex: "avatar",
                key: "name",
            },
            {
                title: "User name",
                dataIndex: "username",
                key: "username",
            },
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "Department",
                dataIndex: "department",
                key: "Department",
            },
            {
                title: "Role",
                dataIndex: "role",
                key: "role",
            },
            {
                title: "Status",
                dataIndex: "status",
                key: "status",
            },
            {
                title: "Actions",
                dataIndex: "actions",
                key: "actions",
            },
        ];
        const getUsers = () => {
            axios
                .get("http://127.0.0.1:8000/api/users")
                .then((response) => {
                    users.value = response.data;
                    // console.log(response);
                })
                .catch(function (error) {
                    // xử trí khi bị lỗi
                    console.log(error);
                });
        };
        getUsers();
        return {
            users,
            columns,
        };
    },
});
</script>
