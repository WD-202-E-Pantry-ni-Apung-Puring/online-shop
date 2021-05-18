// Index.vue
<template>
<form>
     <h1>E-BASKET</h1>
    <div>
        <table class="table table-hover">
            <thead>
            <tr>
                <td>Item ID</td>
                <td>Item Name</td>
                <td>Item Quantity</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item._id">
                    <td>{{ item._id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{item.price}}</td>
                    <td><router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-primary" style="background-color:#184d47; border: none;">Edit</router-link></td>
                    <td><button class="btn btn-danger" style="background-color:#3a6351; border: none;"  v-on:click="deleteItem(item._id) ">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <!--<a href="http://localhost:8080/payment"><button class="but1">E-PAYMENT</button></a>-->
  <button style="padding: 10px; font-family: Helvetica; margin-left:45%; font-family: Helvetica; color: white; background-color:#00994d; border:2px solid darkgreen; text-align: center;"><a href="http://localhost:8080/payment" style=" text-decoration:none; color:white;">PROCEED TO E-PAYMENT</a></button>

</form>
   
</template>

<script>
    export default {
        data(){
            return{
                items: [] 
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
              let uri = 'http://localhost:4000/items';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id)
            {
              let uri = 'http://localhost:4000/items/delete/'+id;
              this.items.splice(id, 1);
              this.axios.get(uri);
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

td {
    font-family: helvetica;
    text-align: center;
}
.but1 {
    margin-left:43.5%;
    background-color:#00994d;
    text-align: center;
    color: white;
    font-size: 1em;
    font-family: helvetica;   
}

form {
    border: green;
}

</style>