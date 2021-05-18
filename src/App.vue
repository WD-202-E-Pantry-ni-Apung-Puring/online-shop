<template>
  <div id="app" class="container" >
    <nav class="navbar navbar-expand-sm " style="background-color:#00994d;">
        <p style="margin-left:5%; margin-top:1.5%; color:white; font-family:Helvetica; font-size:1.5em;"><b>E-PANTRY NI APUNG PURING</b></p>
      <ul style=" margin-left:35%; color:white" class="navbar-nav">
          <li style=" margin-right:10%;" class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link" style="color:white;font-family:helvetica; font-size:1.2em;">Home</router-link>
          </li>
          <li style=" margin-right:10%;" class="nav-item">
            <router-link :to="{ name: 'Products' }" class="nav-link " style="color:white;font-family:helvetica; font-size:1.2em;">Products</router-link>
          </li>
          <li  style=" margin-right:10%;" class="nav-item">
            <router-link :to="{ name: 'Index' }" class="nav-link " style="color:white;font-family:helvetica; font-size:1.2em;">Basket</router-link>
          </li>
          <li  style=" margin-right:10%;" class="nav-item">
            <router-link :to="{ name: 'Payment' }" class="nav-link " style="color:white;font-family:helvetica; font-size:1.2em;">Payment</router-link>
          </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }


    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }

    navbar-nav {
      margin-left: 50px;
    }
</style>