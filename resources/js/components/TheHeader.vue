<template>
    <div class="col-12">
        <div
            class="row text-white"
            style="background-color: #0c713d; padding: 1rem"
        >
            <div
                class="col-1 d-flex d-sm-none align-items-center justify-content-center"
            >
                <span @click="showDrawer()">
                    <font-awesome-icon icon="align-left" />
                </span>
            </div>
            <div
                class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start"
            >
                <div class="justify-content-center justify-content-sm-start">
                    <img
                        src="../../assets/imgs/dog.png"
                        alt="Logo"
                        height="32px"
                        width="32px"
                        class="ms-3 me-3"
                    />
                </div>
                <span class="d-none d-sm-flex">QUAN TRI</span>
            </div>

            <div
                class="col-sm-3 d-none d-sm-flex justify-content-sm-end align-items-center"
            >
                <span>ADMIN</span>
            </div>

            <div
                class="col-1 d-flex d-sm-none align-items-center justify-content-center"
            >
                <span @click="showDrawerUser()">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </span>
            </div>
        </div>
    </div>

    <a-drawer v-model:visible="visible" title="DANH MUC" placement="left">
        <TheMenu />
    </a-drawer>

    <a-drawer v-model:visible="visible_user" title="ADMIN" placement="right">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-drawer>
</template>
<script>
import { defineComponent, ref } from "vue";
import TheMenu from "./TheMenu.vue";
export default defineComponent({
    components: {
        TheMenu,
    },
    setup() {
        const visible = ref(false);
        const visible_user = ref(false);

        const showDrawer = () => {
            visible.value = true;
        };
        const showDrawerUser = () => {
            visible_user.value = true;
        };
        return {
            visible,
            showDrawer,
            visible_user,
            showDrawerUser,
        };
    },
});
</script>
