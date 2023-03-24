<template>
    <h1>Welcome to admin role</h1>
</template>
<script>
import { useMenu } from "../../../stores/use-menu.js";
export default {
    setup() {
        useMenu().onSelectedKeys(["admin-roles"]);
    },
};
</script>
