<template>
  <div id="app">
  <div class="info">
                <div class="info-logo-wrapper"> 
                    <img class="info-logo" src="./assets/supermarket-es-short.svg" alt="Supermercado de El Corte Inglés"/>
                </div>
            <div class="info-body_text">
            Recuerda que para Entrega en el Día solo puede añadir un máximo de 15 productos.
            Si quieres añadir más productos, continua en <b>Supermercado El Corte Inglés</b>, con entrega en 24 horas en función de las disponibilidad.
            Podrás elegir fecha y franja horaria de entrega.
            <p class="info-body_text-warning">Los productos de tu cesta actual se añadiran a tu cesta de Supermercado</p>
            <div class="info-footer">
           
            <button v-if="supermarket_set_cart" @click="goToCart"> Go to Supermarket </button>
             <button v-else @click="saveCart"> Send to Supermarket </button>
            </div>
            </div>
    </div>
    <div class="info-advice">
    <p>Set the url of your browser to: <a href="https://www.ave.elcorteingles.es:8091">https://www.ave.elcorteingles.es:8091</a></p>
    <div>edit your /etc/hosts</div>
    <div>127.0.0.1       www.ave.elcorteingles.es</div>
    <div class="info-buttonset">
     <button @click="dataCart=demo_001;supermarket_set_cart=''"> DEMO-001 </button>
       <button @click="dataCart=demo_002;supermarket_set_cart=''"> DEMO-002 </button>
        </div>
        <p>Actual data: {{dataCart.uuid}}</p>
    <a :href="supermarket_set_cart">{{supermarket_set_cart}}</a>
    <p>{{data_response}}</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import demo_001 from './data/001.json'
import demo_002 from './data/002.json'
export default {
  name: 'App',
   methods:{
        saveCart(){
            // /etc/hosts > 127.0.0.1       supermercado.ave.elcorteingles.es
            // /etc/hosts > 127.0.0.1       www.ave.elcorteingles.es
            const host = 'https://www.nft.elcorteingles.es'
            axios.post(host+'/food/cart/external/',this.dataCart).then(result=>{
               this.data_response = result;
            }).catch(error=>{
                console.log(JSON.stringify(error.response));
                this.data_response = error.response.data;
                this.supermarket_set_cart = error.response.data.url;
            })
        },
        goToCart(){
          window.location = this.supermarket_set_cart;
        }

   },
   data(){
     return{
      // datacart:{"cart_type":"thermomix","uuid":"ad4f51f0-a113-11ec-aa28-976991e9f184","user":{"is_logged":false,"empty_actual_cart":false},"delivery":{"type":"PICKUP","id":"010973"},"delivery_day":{"time_slot":{"start_date":"2022-03-11 10:00","end_date":"2022-03-11 11:00"},"url_delivery_day_callback":["supermercado-entrega-en-el-dia","frescos"]},"cupons":[{"cupon_id":"ABCD1234","info":"info"}],"line_items":[{"id":"0110118820900324___","preparations":true,"measurement":false,"purchase_as":"SALE_TYPE_UNIT","preparation_description":"Describe preparacion","quantity":1,"price":{"f_price":"1,85","o_price":"1,85","discount":0,"currencty":"EUR"},"name":"EL CORTE INGLES SELECTION Sheep's milk pudding 2-pack units 140 g","description":"EL CORTE INGLES SELECTION Sheep's milk pudding 2-pack units 140 g","brand":["EL CORTE INGLES SELECTION"],"url_image":{"url":"//sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202108/09/00118820900324____4__150x150.jpg","id":"m"}},{"id":"0110118389600257___","preparations":true,"measurement":false,"purchase_as":"SALE_TYPE_UNIT","preparation_description":"Describe preparacion","quantity":1,"price":{"f_price":"3,15","o_price":"3,15","discount":0,"currencty":"EUR"},"name":"EL CORTE INGLES SELECTION Semi-mature full-fat blended cheese wedge 250 g","description":"EL CORTE INGLES SELECTION Semi-mature full-fat blended cheese wedge 250 g","brand":["EL CORTE INGLES SELECTION"],"url_image":{"url":"//sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202111/04/00118389600257____9__150x150.jpg","id":"m"}}]}
     demo_001: demo_001,
     demo_002: demo_002,
     dataCart:demo_001,
     v:demo_002,
     data_response:'',
     supermarket_set_cart:''
     }
   },
   mounted(){
   }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display:flex;
  flex-flow:column;
  align-items: center; 
   
}
 button{
          border: none;
          cursor: pointer;
          text-decoration: none;
          outline: none;
          background-color: black;
          color:white;
          padding:1rem;
          border-radius: 0;
          width: 100%;
        }
    .info{
        display:flex;
        flex-flow:column;
        width:550px;
        border:solid;
        padding:1rem;
        margin-bottom:2rem;
       
        &-logo-wrapper{

        }
        &-logo{
            width:250px;
            margin-bottom:2rem;
        }
        &-body_text{
            padding-left:2rem;
            padding-right:2rem;
            text-align:left;
            line-height: 1.5;
            &-warning{
                margin-top:1rem;
                font-weight:600;
            }
        }
        &-advice{
          width:550px;
          display:flex;
          flex-flow:column;
         
          text-align:left;
          p{
            padding:0
          }
        }
        &-buttonset{
          margin-top:1rem;
          display:flex;
          button:last-child{
            margin-left:1rem;
          }
        }
    }
</style>
