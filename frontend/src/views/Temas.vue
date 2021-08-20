<template>
  <div>
    <Header />
    <div class="row">
      
      <div class="col-lg-12 col-md-12">
        <h1>Temas</h1>
      </div>
    </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    <div>
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
    <datasource
    :languaje="es"
    :table-data="information.data"
    :columns="columns"
    :actions="actions"
    >

    </datasource>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
//import axios from "axios";
import TemaService from "../services/tema.service";
//import Datasource from "vue-datasource";


export default {
  name: "Tema",
  components: {
    Header,
    Footer,
    //Datasource
  },
  data() {
    return {
      fields: ["id", "nombre", "is_active", "opciones"],
      items:[],
      information:{
        data:[
          {
            'id':0,
            'name':'marcas'
          }
        ]
      },
      columns:[
        {
          key: 'name',
          name:'Name'
        }
      ]
      
    };
  },
  mounted: function () {
    TemaService.load_datos_t().then(response=>{
    //this.items = [{"id":"vcv","nombre":"nombre","is_active":true},{"id":"vcv","nombre":"nombre","is_active":true}];
    this.items = JSON.parse(response);
    this.items.push(
    {opciones:'<div><b-button>I am a Button</b-button><b-button href="#">I am a Link</b-button></div>'}
    );
    console.log(this.items);
    
  });
  },

};
</script>