<template>
 <div class="container" id="container">
        <div class="card" id="card">
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
    <div>        
            <h1>ALL PRODUCTS</h1>
            </div>
            <div class="card-body">
                  <div class="row row-cols-1 row-cols-md-3">
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://5.imimg.com/data5/YR/IJ/MY-30539992/chicken-wings-600x600compressed_grande-500x500.jpg" class="card-img-top" alt="chicken-wings">
                        <div class="card-body">
                            <h4 class="card-title">Chicken Wings<pre>₱112.38</pre></h4>
                            <p class="card-text">Item Code: #ME0001</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://5.imimg.com/data5/VH/QS/MY-28545297/raw-chicken-drumsticks-500x500.jpg" class="card-img-top" alt="drumstick">
                        <div class="card-body">
                            <h4 class="card-title">Drumstick<pre>₱100.00</pre></h4>
                            <p class="card-text">Item Code: #ME0002</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://5.imimg.com/data5/JX/XD/MY-46171336/chicken-skinless-500x500.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Chicken Breast<pre>₱130.00</pre></h4>
                            <p class="card-text">Item Code: #ME0003</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cdn.shopify.com/s/files/1/0336/7501/products/boneless-pork-loin-roast_large.jpg?v=1468603338" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Pork Tenderloin<pre>₱337.00</pre></h4>
                            <p class="card-text">Item Code: #ME0004</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://savannahriverfarms.com/wp-content/uploads/2020/03/baby-back-ribs.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Pork Ribs<pre>₱760.00</pre></h4>
                            <p class="card-text">Item Code: #ME0005</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cdn.shopify.com/s/files/1/0441/6854/4406/products/porkbelly_600x600.jpg?v=1603799037" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Pork Belly<pre>₱269.00</pre></h4>
                            <p class="card-text">Item Code: #ME0006</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cdn.shopify.com/s/files/1/0264/3420/7802/products/raw-pork-leg-isolated-white-background-60619956.jpg?v=1613100678" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Pork Pata<pre>₱462.97</pre></h4>
                            <p class="card-text">Item Code: #ME0007</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://ph-test-11.slatic.net/p/b1e2204030c119e6aa9888c644682ddb.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Beef Brisket<pre>₱330.00</pre></h4>
                            <p class="card-text">Item Code: #ME0008</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://ph-test-11.slatic.net/p/c286f8cacfff1437bc2160fa1ad0326a.jpg_720x720q80.jpg_.webp" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Beef Short Ribs<pre>₱230.00</pre></h4>
                            <p class="card-text">Item Code: #ME0009</p>
                        </div>
                    </div>
                </div>
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
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://images.heb.com/is/image/HEBGrocery/000320625-1?$article%2D235%2Dsquare$" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Apple<pre>₱25.00</pre></h4>
                            <p class="card-text">Item Code: #FR0001</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://d2wwnnx8tks4e8.cloudfront.net/images/app/large/0287810000000_3.JPG" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Banana<pre>₱70.00</pre></h4>
                            <p class="card-text">Item Code: #FR0002</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://www.jessicagavin.com/wp-content/uploads/2019/05/how-to-cook-corn-on-the-cob-8-1200.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Corn<pre>₱50.00</pre></h4>
                            <p class="card-text">Item Code: #FR0003</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://carusos.com.au/wp-content/uploads/2020/06/red-grapes.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Grapes<pre>₱280.00</pre></h4>
                            <p class="card-text">Item Code: #FR0004</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cf.shopee.ph/file/59a7a4ae0935026e4a73c2d84595aadd" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Sweet Potatoes<pre>₱50.00</pre></h4>
                            <p class="card-text">Item Code: #FR0005</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://static.libertyprim.com/files/familles/kiwi-large.jpg?1569271790" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Kiwi<pre>₱25.00</pre></h4>
                            <p class="card-text">Item Code: #FR0006</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://raweliquid.com/wp-content/uploads/2017/05/raweliquid-yellow-mango-min.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Mango<pre>₱110.00</pre></h4>
                            <p class="card-text">Item Code: #FR0007</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://flavourstogo.ca/wp-content/uploads/2018/02/Melon-Food-Flavour-1.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Melon<pre>₱80.00</pre></h4>
                            <p class="card-text">Item Code: #FR0008</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://ph-test-11.slatic.net/p/8f18c257b10f2b8b311c15e47c5e5045.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Ponkan<pre>₱25.00</pre></h4>
                            <p class="card-text">Item Code: #FR0009</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://www.cebugrocery.com/images/detailed/2/8db8c6281ac59f04d9ede7accdb8532e_large.png" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Chicken Ball<pre>₱45.00</pre></h4>
                            <p class="card-text">Item Code: #FF0001</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://www.esclusivoinc.com/wp-content/uploads/sunnyday_black.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Crab Stick<pre>₱110.00</pre></h4>
                            <p class="card-text">Item Code: #FF0002</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="http://etime.ph/wp-content/uploads/2017/04/Fishball-2-600x600.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Fishball<pre>₱40.00</pre></h4>
                            <p class="card-text">Item Code: #FF0003</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://images.heb.com/is/image/HEBGrocery/000293591" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">French Fries<pre>₱100.00</pre></h4>
                            <p class="card-text">Item Code: #FF0004</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://www.bayanmall.com/image/cache/data/UNABLE/hotdog-classic-1k-500x500-700x700_0.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Hotdog<pre>₱120.00</pre></h4>
                            <p class="card-text">Item Code: #FF0005</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cdn.shopify.com/s/files/1/0366/4959/9109/products/Skinlesslongganisa405_2048x2048.jpg?v=1589353741" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Longganisa<pre>₱50.00</pre></h4>
                            <p class="card-text">Item Code: #FF0006</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://www.homeshop.ph/image/cache/catalog/Products/Frozen/Siomai/Holiday-Pork-Siomai-60pcs-960g-500x500-product_popup.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Siomai<pre>₱120.00</pre></h4>
                            <p class="card-text">Item Code: #FF0007</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="http://etime.ph/wp-content/uploads/2017/04/Squidball-3-600x600.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Squid balls<pre>₱40.00</pre></h4>
                            <p class="card-text">Item Code: #FF0008</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://media.karousell.com/media/photos/products/2018/01/30/tocino_original_480gmpack_1517283588_6862dec00" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Tocino<pre>₱129.00</pre></h4>
                            <p class="card-text">Item Code: #FF0009</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://www.alaskamilk.com/wp-content/uploads/2017/07/condensada-feat-3.png" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Alaska Condensada<pre>₱40.00</pre></h4>
                            <p class="card-text">Item Code: #CO0001</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cdn.shopify.com/s/files/1/0338/0694/2253/products/Ajinomoto-Crispy-Fry-Original-60g_FRONT_700x700.jpg?v=1589913904" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Crispy Fry Original<pre>₱25.00</pre></h4>
                            <p class="card-text">Item Code: #CO0002</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://codexmm.us-east-1.linodeobjects.com/Kmart/Product/Images/16099985895ff6a0fd3eb19.png" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Del Monte Ketchup<pre>₱38.00</pre></h4>
                            <p class="card-text">Item Code: #CO0003</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://www.shopmagic.ph/images/detailed/13/MAGGI_MAGIC_SARAP_SEASONING_GRANULES_8G.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Magic Sarap<pre>₱40.00</pre></h4>
                            <p class="card-text">Item Code: #CO0004</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://ph-test-11.slatic.net/p/mdc/4b8dc34540e8926501e775edd6f33994.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Cooking Oil<pre>₱120.00</pre></h4>
                            <p class="card-text">Item Code: #CO0005</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="http://cdn.shopify.com/s/files/1/0060/6067/1058/products/datuputi_1200x1200.jpg?v=1585359849" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Datu Puti Patis<pre>₱70.00</pre></h4>
                            <p class="card-text">Item Code: #CO0006</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://danliz.ph/web/image/product.template/5566/image_1024?unique=6f5c5ec" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Datu Puti Suka<pre>₱38.00</pre></h4>
                            <p class="card-text">Item Code: #CO0007</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="http://cbt-store.com/image/cache/catalog/CSI/Datu-Puti-Soy-Sauce-1000ML-700x700.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Datu Puti Toyo<pre>₱70.00</pre></h4>
                            <p class="card-text">Item Code: #CO0008</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cf.shopee.ph/file/a0ea1b4e6dc2abcfd6dc2911c4f068b4" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Tomato Sauce<pre>₱40.00</pre></h4>
                            <p class="card-text">Item Code: #CO0009</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://aapkabazar.co/wp-content/uploads/2020/06/egg-4.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Eggs<pre>₱170.00</pre></h4>
                            <p class="card-text">Item Code: #OT0001</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://sc04.alicdn.com/kf/UTB8itD5nYnJXKJkSahGq6xhzFXaO.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Banana Leaves<pre>₱50.00</pre></h4>
                            <p class="card-text">Item Code: #OT0002</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://www.cebuflowershop.ph/images/detailed/3/pushcart_grated_coconut_2.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Grated Coconut<pre>₱40.00</pre></h4>
                            <p class="card-text">Item Code: #OT0003</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cdn.shopify.com/s/files/1/0278/8238/9607/products/lumpia_615x.jpg?v=1603177461" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Lumpia Wrapper<pre>₱35.00</pre></h4>
                            <p class="card-text">Item Code: #OT0004</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://nutscrack.com/public/uploads/products/meta/QesXQ1jeiFItaCqFMaDGbwFZCc5mc58jEOn2Gusy.jpeg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Peanuts<pre>₱30.00</pre></h4>
                            <p class="card-text">Item Code: #OT0005</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="http://3.bp.blogspot.com/-Z2u5Y4rNDJE/U_tvP1gmSXI/AAAAAAAAa5o/v6yg8TMw3fA/s1600/saltedeggs1.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Salted Egg<pre>₱10.00</pre></h4>
                            <p class="card-text">Item Code: #OT0006</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://www.thefeta.com/wp-content/uploads/2020/06/8126.png" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Sinandomeng Rice<pre>₱1180.00</pre></h4>
                            <p class="card-text">Item Code: #OT0007</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://upgroc.com/wp-content/uploads/2020/06/tofu-pack.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Tofu<pre>₱40.00</pre></h4>
                            <p class="card-text">Item Code: #OT0008</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card border-success">
                        <img src="https://cdn.shopify.com/s/files/1/0423/3674/7669/products/TuyoSalinas_1600x.jpg?v=1612681491" class="card-img-top" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Tuyo<pre>₱25.00</pre></h4>
                            <p class="card-text">Item Code: #OT0009</p>
                        </div>
                    </div>
                </div>
                </div>
                
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