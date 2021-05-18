<template>
  <div style="background-color: white;  margin-bottom:5%; ">
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
    </transition>
    <div style="background-color: white; width: 70%; padding-left:20%; margin-left:15%; ">
    <h1 style="font-family:Impact; color: green; font-size:80px;">PAYMENT FORM</h1>
    <h3 style="font-family:Helvetica; color: #184d47; font-size: 2em;">Shipping Address</h3>
    <input v-model="message" placeholder="First Name" style="width:245px; height: 40px; border: 3px green solid; margin-bottom:1%; margin-right: 10px;">
    <input v-model="message" placeholder="Last Name" style="width:245px; height: 40px; border: 3px green solid; margin-bottom:1%;"><br/>
    <input v-model="message" placeholder="Email" style="width:500px; height: 40px; border: 3px green solid; margin-bottom:1%; "> <br/>
    <input v-model="message" placeholder="Address" style="width:500px; height: 40px; border: 3px green solid; margin-bottom:1%; "><br/>
    <input v-model="message" placeholder="Phone Number" style="width:500px; height: 40px; border: 3px green solid;  ">
    <h3 style="font-family:Helvetica; color: #184d47; font-size: 2em;">Payment Option</h3>
    <select style="border: 3px green solid;   width: 29.5%; height: 45px;">
      <option>Choose an option</option>
      <option>Cash on Delivery Only</option>
    </select><br/><br/>
    <button v-on:click= "showAlert" style="padding: 10px; font-family: Helvetica; margin-left:30%; color: white; background-color:#00994d; border:2px solid darkgreen; text-align: center;">PLACE ORDER</button>
    </div>
 
  
  </div>
  
  
</template>

<script>
export default {
    data (){
        return {
            msg:'Thank you for ordering!'
        }
    },

    methods: {
        showAlert: () => {
            alert('Your Order has been processed and Ready to be delivered.Your receipt will be given by the rider as he delivers your products. Please pay an exact amount. Thank you for Ordering!');
            window.location.href='/home';
        }
    }
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
    
</style>