<template> 
<div>
 <div >
  <img style=
  "width:100%; 
  height:90%;   
  margin-top: -2%;
  margin-bottom:1%;
  box-shadow:25px 0px 35px #4a503d, -25px 0px 35px #4a503d;"
  src="../assets/main.png">
  <button style="
    text-align:center;
    margin-top:3%;
    padding-left:43%;
    padding-right:43%;
    padding-bottom:2%;
    padding-top:2%; 
    font-size:2.5em;
    color:green;
    font-family:Impact;
    background-color: #00994d;
    border: none;">
<a href="http://localhost:8080/products" style="text-decoration:none;color:white;">SHOP NOW</a></button>
  <div>
  </div>
  </div>
  <div>
  <h1 style="
  text-align:center; 
  margin-top:2%;
  font-family: impact;">AVAILABLE PRODUCTS</h1> 

  <div style="float:left;position: relative;width:50%;color: white;font-size: 16px;border: none;cursor: pointer;border-radius: 5px;">
  <img style="  width: 100%;height: auto;" src="../assets/me1.png">
  <button style="position: absolute;  position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);
  background-color:#00994d;font-family:impact;color: white;font-size:50px;padding: 15px 30px;border: none;
  cursor: pointer;border-radius: 5px;"><a href="http://localhost:8080/meat" style="text-decoration:none;color:white;">MEAT</a></button></div>

  <div style="float:left; position: relative;width:50%;color: white;font-size: 16px;border: none;cursor: pointer;border-radius: 5px;">
  <img style="  width: 100%;height: auto;" src="../assets/v1.png">
  <button style="position: absolute;  position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);
  background-color:#00994d;font-family:impact;color: white;font-size:50px;padding: 15px 30px;border: none;
  cursor: pointer;border-radius: 5px;"><a href="http://localhost:8080/vegetables" style="text-decoration:none;color:white;"> VEGETABLES</a></button></div>

  <div style="float:left; position: relative;width:50%;color: white;font-size: 16px;border: none;cursor: pointer;border-radius: 5px;">
  <img style="  width: 100%;height: auto;" src="../assets/f1.png">
  <button style="position: absolute;  position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);
  background-color:#00994d;font-family:impact;color: white;font-size:50px;padding: 15px 30px;border: none;
  cursor: pointer;border-radius: 5px;" ><a href="http://localhost:8080/fruit" style="text-decoration:none;color:white;"> FRUITS</a></button></div>

  <div style="float:left; position: relative;width:50%;color: white;font-size: 16px;border: none;cursor: pointer;border-radius: 5px;">
  <img style="  width: 100%;height: auto;" src="../assets/f2.png">
  <button style="position: absolute;  position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);
  background-color:#00994d;font-family:impact;color: white;font-size:50px;padding: 15px 30px;border: none;
  cursor: pointer;border-radius: 5px;"><a href="http://localhost:8080/frozen" style="text-decoration:none;color:white;">FROZEN </a></button></div>  

  <div style="float:left; position: relative;width:50%;color: white;font-size: 16px;border: none;cursor: pointer;border-radius: 5px;">
  <img style="  width: 100%;height: auto;" src="../assets/c1.png">
  <button style="position: absolute;  position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);
  background-color:#00994d;font-family:impact;color: white;font-size:50px;padding: 15px 30px;border: none;
  cursor: pointer;border-radius: 5px;"><a href="http://localhost:8080/condiments" style="text-decoration:none;color:white;"> CONDIMENTS</a></button></div>

  <div style="float:left; position: relative;width:50%;color: white;font-size: 16px;border: none;cursor: pointer;border-radius: 5px;">
  <img style="  width: 100%;height: auto;" src="../assets/o2.png">
  <button style="position: absolute;  position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);
  background-color:#00994d;font-family:impact;color: white;font-size:50px;padding: 15px 30px;border: none;
  cursor: pointer;border-radius: 5px;"><a href="http://localhost:8080/others" style="text-decoration:none;color:white;"> OTHERS</a></button>
  </div>  
  </div>

 <!--Footer--> 
 <div style="font-family: Helvetica; background-color:#00994d; width: 100%; margin-top:100%; color:white;">
      <div style="padding-top:10%; width: 20%;  padding-bottom: 8%; padding-left:5%; float:left;">
        <p>STORE</p>
        <p>Shop All <br/> Shipping and Returns <br/> Store Policy <br/> FAQ</p>
      </div>
      <div style="padding-top:10%; width: 20%;padding-bottom: 8%; padding-left:5%; float:left;">
        <p>OPENING HOURS</p>
        <p>Mon - Fri: 7am - 10pm <br/> Saturday: 8am - 10pm <br/> Sunday: 8am - 11pm <br/> FAQ</p>
      </div>
      <div style="padding-top:10%; width: 80%;padding-bottom: 9%; padding-left:10%;">
        <p>GET IT FRESH</p>
        <p>Email* <br/> <input v-model="message" style="background-color:#00994d; border: 2px white solid; color: white; width: 30%;"> <br/> <button style="width: 30%; border: 2px white solid; margin-top:1%; color: green;">SUBSCRIBE NOW</button></p>
      </div>
      <div style=" margin-left:5%; padding-bottom: 5%;">
        <p>© 2023 by E-Pantry ni Aling Puring</p>
      </div>
    </div>
</div>
</template>

<style scoped>
h1 {
    text-align: center;
    color: #28a745;
    font-size: 100px;
    font-family: Impact;
}

</style>

<script>
export default {
  name: 'Home',
}
</script>
