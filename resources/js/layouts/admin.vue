<template>
    <TheHeader />
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-sm-3 d-sm-flex d-none">
                <a-list bordered style="width: 100%;">
                    <TheMenu />
                    <template #header>
                        <div>Bảng điều kiển</div>
                    </template>
                </a-list>
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
// console.log(1);
import TheHeader from "../components/TheHeader.vue";
import TheMenu from "../components/TheMenu.vue";
export default {
    components: { TheHeader, TheMenu },
};
</script>
