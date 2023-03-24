<template>
    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
    >
        <a-menu-item key="admin-users">
            <router-link :to="{ name: 'admin-users' }"></router-link>
            <span><user-outlined class="ml-1" />Account</span>
        </a-menu-item>
        <a-menu-item key="admin-settings">
            <router-link :to="{ name: 'admin-settings' }"></router-link>
            <span><SettingOutlined class="ml-1" />Settings</span>
        </a-menu-item>
        <a-menu-item key="admin-roles">
            <router-link :to="{ name: 'admin-roles' }"></router-link>
            <span><TagsOutlined class="ml-1" />Roles</span>
        </a-menu-item>
    </a-menu>
</template>

<script>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useMenu } from "../stores/use-menu.js";
import { UserOutlined } from "@ant-design/icons-vue";
import { SettingOutlined } from "@ant-design/icons-vue";
import { TagsOutlined } from "@ant-design/icons-vue";
export default defineComponent({
    components: {
        UserOutlined,
        SettingOutlined,
        TagsOutlined,
    },
    setup() {
        const store = useMenu();
        return {
            ...storeToRefs(store),
        };
    },
});
</script>
