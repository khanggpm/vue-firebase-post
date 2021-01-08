<template>
    <div style="width: 100%">
        <div class="toggle_menu">
            <i class="el-icon-setting" @click="toggleMenu"></i>
        </div>
        <el-row class="tac">
            <el-col :span="12">
                <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        active-text-color="#B3C0D1"
                        :collapse="isCollapse"
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="Group One">
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item one</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-submenu>
                    </el-submenu>

                    <el-menu-item index="2" @click="goPage('Home')">
                        <i class="el-icon-s-home"></i>
                        <span>Manager</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="goPage('Social')">
                        <i class="el-icon-menu"></i>
                        <span>Social</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="goPage('Profile')">
                        <i class="el-icon-setting"></i>
                        <span >Settings</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>

</template>
<script>
    export  default  {
        data() {
            return {
                isCollapse : false
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            goPage(val ="") {
                let currentRoute =this.$router.currentRoute.name;
                if (currentRoute === val) {
                    return;
                }
                this.$router.push({ name: val })
            },
            toggleMenu() {
                console.log(this.isCollapse)
                let self = this;
                setTimeout(function() {
                    self.isCollapse = !self.isCollapse;
                },200)
            }
        }
    }
</script>
<style scoped>
.toggle_menu {
    padding: 10px;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>
