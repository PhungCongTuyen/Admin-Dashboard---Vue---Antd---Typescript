<template>
  <a-layout class="layout-dashboard" id="layout-dashboard">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible width="230">
      <div class="logo"/>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1" v-on:click="() => this.$router.history.push('/')">
          <a-icon type="home"/>
          <span>Home</span>
        </a-menu-item>
        <a-menu-item key="2" v-on:click="() => this.$router.history.push('/images-management')">
          <a-icon type="picture"/>
          <span>Images Management</span>
        </a-menu-item>
        <a-menu-item key="3" v-on:click="() => this.$router.history.push('/images-management')">
          <a-icon type="gift"/>
          <span>Awards Management</span>
        </a-menu-item>
        <a-menu-item key="4" v-on:click="() => this.$router.history.push('/images-management')">
          <a-icon type="setting"/>
          <span>Award Settings</span>
        </a-menu-item>
        <a-menu-item key="5" v-on:click="() => this.$router.history.push('/images-management')">
          <a-icon type="user"/>
          <span>Account Management</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-dashboard-header">
        <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
        />
        <a-dropdown :trigger="['click']">
          <a>
            <span>{{ userName }}</span>
            <a-icon type="user"/>
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a @click="handleLogOut()">
                <span>Log Out</span>
                <a-icon type="logout" :style="{paddingLeft: '10px'}"/>
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content class="layout-dashboard-content">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>

export default ({
  data() {
    return {
      userName: this.$store.getters.userInfo.username,
      collapsed: false,
    };
  },
  methods: {
    handleLogOut() {
      localStorage.removeItem('token')
      this.$router.history.push('/sign-in')
    }
  }
})

</script>

<style lang="scss">
.layout-dashboard {
  height: 100vh;

  .layout-dashboard-log-out {
    padding-right: 10px !important ;
  }

  .layout-dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 0 20px 0 0;
  }

  .layout-dashboard-content {
    background-color: white;
    margin: 24px 16px;
    padding: 24px;
  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }


}

</style>
