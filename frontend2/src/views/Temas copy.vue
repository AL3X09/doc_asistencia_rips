<template>
  <div>
    <Header />
    <div>
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
//import axios from "axios";
import TemaService from "../services/tema.service";


export default {
  name: "Tema",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      fields: ["id", "nombre", "is_active", "opciones"],
      items:[],
      data: [],
      
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
<style lang="stylus" scoped></style>