<template>
  <header id="topBarWrapper" class="top-bar-wrapper">
    <div class="top-bar">
      <div class="hamburger-icon-wrapper">
        <a id="openMobileMenu" href="javascript:;" class="hamburger-icon" @click="changeModeMobileMenu">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </a>
      </div>

      <ul class="nav-bar" v-show="!isLoading">
        <li class="sub-nav-bar-wrapper">
          <router-link :to="{ name: 'about'}"><h2>About Us</h2></router-link>
        </li>
        <li class="sub-nav-bar-wrapper">
          <router-link :to="{ name: 'contact'}"><h2>Contact</h2></router-link>
        </li>
        <li class="sub-nav-bar-wrapper">
          <router-link :to="{ name: 'login'}" v-if="!isLogin"><h2>Sign in/Sign up</h2></router-link>
          <a href="javascript:;" v-if="isLogin"><h2>Nguyen Van A</h2></a>
          <ul class="sub-nav-bar" v-if="isLogin">
            <li>
              <router-link :to="{ name: 'user-profile'}" v-if="isLogin">Profile</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'login'}" class="log-out">Log out</router-link>
            </li>
          </ul>
        </li>
      </ul>

      <div class="logo-wrapper">
        <router-link :to="{ name: 'home'}"><img src="../../../public/imgs/logo.png" alt="Vue logo" class="logo"></router-link>
      </div>
    </div>

    <div ref="mobileMenuContainer" class="mobile-menu-container">
      <a id="closeMobileMenu" href="javascript:;" class="close-icon" @click="changeModeMobileMenu"></a>

      <div class="logo-wrapper" @click="changeModeMobileMenu">
        <router-link :to="{ name: 'home'}"><img src="../../../public/imgs/logo.png" alt="WS logo" class="logo"></router-link>
      </div>

      <div class="mobile-menu-wrapper">
        <ul class="mobile-menu">
          <li @click="changeModeMobileMenu">
            <router-link :to="{ name: 'about'}"><h2>About Us</h2></router-link>
          </li>
          <li @click="changeModeMobileMenu">
            <router-link :to="{ name: 'contact'}"><h2>Contact</h2></router-link>
          </li>
          <li @click="changeModeMobileMenu">
            <router-link :to="{ name: 'login'}" v-if="!isLogin"><h2>Sign In/Sign up</h2></router-link>
            <router-link :to="{ name: 'user-profile'}" v-if="isLogin"><h2>Nguyen Van A</h2></router-link>
            <router-link :to="{ name: 'login'}" v-if="isLogin">Log out</router-link>
          </li>
        </ul>
      </div>
    </div>
    <span id="globalNotification" class="global-notification-container">Notification!</span>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      isLoading: false,
      isLogin: false
    }
  },
  mounted () {
    window.addEventListener('scroll', function (e) {
      if (window.scrollY > 64) {
        document.querySelector('#topBarWrapper').classList.add('fixed')
      } else {
        document.querySelector('#topBarWrapper').classList.remove('fixed')
      }
    })
  },
  methods: {
    changeModeMobileMenu () {
      const element = this.$refs.mobileMenuContainer
      if (element.className.indexOf('active') > -1) {
        element.classList.remove('active')
      } else {
        element.classList.add('active')
      }
    }
  }
}
</script>
