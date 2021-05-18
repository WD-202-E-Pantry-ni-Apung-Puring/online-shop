<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h1>EDIT ITEM</h1>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Item Name" v-model="item.name"/>
                    </div>
                    <div class="form-group">
                        <input style= "margin-top: 10px;" type="text" class="form-control" placeholder="Item Price" v-model="item.price" />
                    </div>
                    <div class="form-group">
                    <input style="border: none; padding: 10px; font-family: Helvetica; margin-left:43.5%; background-color:#00994d; margin-top: 40px;"  placeholder="Item Price" type="submit" class="btn btn-primary" value="UPDATE E-BASKET" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                item:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
              let uri = 'http://localhost:4000/items/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem()
            {
              let uri = 'http://localhost:4000/items/update/' + this.$route.params.id;
                this.axios.post(uri, this.item).then(() => {
                  this.$router.push({name: 'Index'});
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