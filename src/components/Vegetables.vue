<template>
<!-- PRODUCTS -->
    <div class="container">
            <div class="card-header" style="background-color:white; border:none; margin-left:25%;">
            <nav class="navbar navbar-expand-sm">
                <div class="navbar-header" ></div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <router-link :to="{ name: 'Meat' }" class="nav-link" style="color:green;font-size:1.2em;">Meat | </router-link>
                        </li>
                        <li class="nav-item">
                        <router-link :to="{ name: 'Vegetables' }" class="nav-link" style="color:green;font-size:1.2em;">Vegetable |</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link :to="{ name: 'Fruit' }" class="nav-link" style="color:green;font-size:1.2em;">Fruit |</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link :to="{ name: 'Frozen' }" class="nav-link" style="color:green;font-size:1.2em;">Frozen Food |</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link :to="{ name: 'Condiments' }" class="nav-link" style="color:green;font-size:1.2em;">Condiments |</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link :to="{ name: 'Others' }" class="nav-link" style="color:green;font-size:1.2em;">Others |</router-link>
                        </li>
                    </ul>
            </nav>
            </div>
            <h1>VEGETABLE SECTION</h1>
        <div class="card-body">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cdn.shopify.com/s/files/1/0423/3674/7669/products/Alugbati_530x@2x.jpg?v=1612357785" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Alugbati<pre>₱28.00</pre></h4>
                            <p class="card-text">Item Code: #VE0001</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cf.shopee.ph/file/5a09a0e223e6ed1c94aa42fda0f157cd" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Ampalaya<pre>₱25.00</pre></h4>
                            <p class="card-text">Item Code: #VE0002</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="http://cdn.shopify.com/s/files/1/0284/2450/products/BASILCLASSICITALIAN_1024x.jpg?v=1594988944" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Basil<pre>₱130.00</pre></h4>
                            <p class="card-text">Item Code: #VE0003</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://www.mr-fruity.co.uk/wp-content/uploads/2019/04/pepper2g.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Bell Pepper<pre>₱25.00</pre></h4>
                            <p class="card-text">Item Code: #VE0004</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cdn.shopify.com/s/files/1/0277/7097/8377/products/Green-Cabbage_530x@2x.jpg?v=1589193029" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Cabbage<pre>₱25.00</pre></h4>
                            <p class="card-text">Item Code: #VE0005</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://www.producemarketguide.com/sites/default/files/carrots_commodity-page.png" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Carrots<pre>₱15.00</pre></h4>
                            <p class="card-text">Item Code: #VE0006</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/815kv1Ns16L.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Onion<pre>₱20.00</pre></h4>
                            <p class="card-text">Item Code: #VE0007</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cf.shopee.ph/file/133d862f7f95f2d0d635f37c03c9ae1f" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Pechay<pre>₱10.00</pre></h4>
                            <p class="card-text">Item Code: #VE0008</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://sc04.alicdn.com/kf/U4ea7941bf8c84039b446c8e103ee34242.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Potatoes<pre>₱20.00</pre></h4>
                            <p class="card-text">Item Code: #VE0009</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ORDER FORM -->
              <div class="container">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="order-form">ORDER FORM</h2>
                        </div>
                        <div class="card-body">
                            <form v-on:submit.prevent="addItem">
                                <div class="form-group">
                                <input style="margin-bottom:2%;" type="text" class="form-control" v-model="item.name" placeholder="ITEM CODE"/>
                                </div>

                                <div class="form-group">
                                <input type="text" class="form-control" v-model="item.price" placeholder="QUANTITY"/>
                                </div>
                                <pre></pre>
                                <div class="form-group">
                                    <input style="margin-left:43.5%; background-color:#00994d;"  type="submit" class="btn btn-primary" value="ADD TO E-BASKET"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
            </div>
            <!-- FOOTER -->
            <div style="font-family: Helvetica; background-color:#00994d; width: 100%; ; color:white;">
                <div style="padding-top:10%; width: 20%;  padding-bottom: 8%; padding-left:5%; float:left;">
                    <p>STORE</p>
                    <p>Shop All <br/> Shipping and Returns <br/> Store Policy <br/> FAQ</p>
                </div>
                <div style="padding-top:10%; width: 20%;padding-bottom: 8%; padding-left:3%; float:left;">
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

<script>
export default {
  Components: {
      name: 'AddItem'
  },
  data() {
      return {
          item: {}
      }
  },
  methods: {
      addItem() {
           let uri = 'http://localhost:4000/items/add';
            this.axios.post(uri, this.item).then((response) => {
                console.log(response.data)
            });
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    color: #28a745;
    font-size: 100px;
    font-family: Impact;
}

h2 {
    text-align: center;
    font-family: impact;
    font-size:2.5em;
    color: #28a745;
}

.form-control, .btn-success {
    text-align: center;
    padding:1.5%;
    width: 50%;
    justify-content: center;
    margin-left: 25%;
    border:2px solid green;
}

.button {
    align-content: center;
}

col mb-4 {
    max-width: 500px;
    max-height: 500px;
}

.card-header {
    font-size: large;
}

.order-form {
    font-style: inherit;
}

.card {
    border:3.5px solid green;
}
</style>
