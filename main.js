
"use strict"
// poluição evitar
const c = (el) => document
  .querySelector(el)
  
  const insideCart =[];
  const insideCartobj ={};
  
  
  
  //Variaveis globais de Cores
  const Black="Preto";
  const Black_a="Preta"
   const Green = "Verde";
   const Blue= "Azul";
   const white = "Branco";
   const white_a = "Branca";
   const Red = "Vermelho";
   const Red_a = "Vermelha";
   const Gray = "Cinza";
   const Yellow = "Amarelo";
   const Yellow_a = "Amarela";
   //===========================
   //variaveis globais tamanhos 
   const Size_1="M";
   const Size_2="G";
   const Size_3="G-G";
   const Size_4="P";
   const Size_5="XGG";
   //===================
  //spiner
const Spiner =c (".spiner-2");
const Await = c(".Msg_main");
// exibir msg na tela
//===============================
//funçoēs Menu
const btn_Hm =c(".hamburger");//abrir
const btn_Cls =c(".close");//fechar
const btn_body =c(".section-aside"); 
const Aside = c(".section-aside");
// truck delivery
const showCepp=c("#cartdelivery");
const RDS =c(".header-2");
 
showCepp
.addEventListener('click',()=>{
  if(RDS.style.display=="none"){
    RDS.style.display="block"
  }else{
    RDS.style.display="none"
  }
})

btn_Hm.addEventListener('click',()=>{
  Aside. style. display="flex";
});
btn_Cls.addEventListener('click',()=>{
  Aside.style.display="none";
});



/*btn_body//fecha o aside click no body
.addEventListener('click',()=>{
  Aside.style.display="none";
})*/
//==============Navegação==========//
const Navigator =c(".navigation");
const btn_poup_nav=c(".circle");
//.addEventListener('click', () => {
 // alert("")
//})
btn_poup_nav
.addEventListener('click',()=>{
 Navigator.style.display="none"
});
//Acessar localização 
const Box=c(".box");
const close_btn_location
=c("#btn_location")
const open_btn_location2
=c("#btn_location2")
const Info_area = c("strong");
const aces_location =c("#Loca_tion");
aces_location
.addEventListener('click',()=>{
  //.....
 if(aces_location){
  Box.style.display = "flex";
  Info_area
    .innerHTML = access_your_location;
    close_btn_location
    .addEventListener('click',()=>{
    Box.style.display = "none";
    });
    open_btn_location2
    .addEventListener('click',()=>{
      Box.style.display = "none";
      Await.innerHTML=pleaseWait;
       Spiner. style. display="flex";
        setTimeout(()=>{
        Await.innerHTML="";
          Spiner.style.display="none";
        },5000);
      });
      };
   });//....
  
  
  
  
      //lista de produtos from 
   // items page . import
   import {items}
   from './store_list.js';

    const show_storage =(a)=>{
   const ItemsImport = items;
   ItemsImport.map((val)=>{
     //----
           //encontra um item no array
     /* var r = ItemsImport.find((i) => {
        return i.id == 1;
      }) 

      console.log(r);
      */
   
     //---
     
    const div=document
       .createElement("div")
        div.className="store_list";
   div.innerHTML=`<div>
<a href="#">
<img id="store_img" src="`+val.img+`">
</a>
    </div>`
       document.body.append(div);
  //---
  
  //--
  const name_product = document
    .createElement("h4");
  name_product.className = "desc_h4";
  name_product.innerHTML = `
 <h4>`+val.name+`</h4>`
  document.body
    .append(name_product);
    //--
  
  //--
  const description = document
    .createElement("h5");
  description.className = "desc_h5";
  description.innerHTML = `
     <h5>` + val.description +`</h5>`
  document.body
    .append(description);
  //--
  const P=document.
  createElement("p");
  P.className="p_price";
  P.innerHTML=`
  <p>`+val.price+`</p>`
  
   document.body.appendChild(P);
   //---
   
   //--
   const qty = document
     .createElement("input");
   const quant ="Quantidade";
   qty.id = "Qty";
   qty.type="Number";
   qty.placeholder=`${quant}`;
   qty.innerHTML = `<div>
 <input>`+val.qty+`</input>
           </div>`
   
  const show_quant = (q)=>{
  q.addEventListener('input',(e)=>{
   let y_z = e.target.value;  
   let y =y_z;
   y=parseFloat(y_z);
  
 // console.log(typeof y);
  
 
  const resetAdd=c("#cartbuy")
  .value=0;
  
  
  
  //condicional ternary operation! 
   const 
   resetNumberCart=y<=100 ?
   'resetAdd' : '';
   const setAdd=c("#cartbuy").value=y
   //=========targt=Alvo.=======//
 })
}     
  show_quant(qty);//call this function up 
 document.body.appendChild(qty)
   //========================//
  
const color = document
  .createElement("select");
const Color = "Cor";
color.id = "Co_lor"
color.placeholder=`${Color}`;
color.innerHTML =`<select>
<option value="opts">${Color}</option>
 <option value="Vermelha">${Red_a}</option>
     <option value="Verde">${Green}</option>
    <option value="Cinza">${Gray}</option>
      <option value="Preto">${Black}</option>
      <option value="Vermelho">${Red}</option>
   </select>`
   const show_Color = (clr)=>{
    // clr = color. 
clr.addEventListener('input',(evt)=>{
   const C = evt.target.value;
   console.log(C);
   //======targt = Alvo.=====//
 })
}     
show_Color(color);//call thisfunction up
document.body.appendChild(color);
//==============≠==============//

const add=document
.createElement("select");
const Siz_e="Tamanho";
add.id="si_ze";
add.innerHTML =`<select>
<option value="">${Siz_e}</option>
<option value="M">${Size_1}</option>
<option value="G">${Size_2}</option>
<option value="G-G">${Size_3}</option>
<option value="P">${Size_4}</option>
<option value="XGG">${Size_5}</option>
  </select>`
  
  const show_Add = (A)=>{
  // A = add. 
A.addEventListener('input',(ent)=>{
   const AD = ent.target.value;
   console.log(AD);
   //targt = Alvo.
 })
}     
 show_Add(add);//call this function up
document.body.appendChild(add)

//================================//
//--Adiciona Items No  Carrinho
//butão Principal
   const Butto_n=document
   .createElement("button");
   Butto_n.id="Bt_n";
  const f="Adicionar"
   Butto_n.innerHTML=`<div>
   <button>
   ${f}
   </button>  
   </div>`
/*   <button id="btn-inside" style="font-size:25px;color:#000000;">-</button>
     <input type="number" style="width:50px;border:none;outline:none;text-align:center;color:#000000;font-size:20px;">
  <button style="font-size:25px;color:#000000;">+</button> */
 
Butto_n
.addEventListener('click',()=>{
  insideCart.push();
  console.log(insideCart)
  
    
 //----
if(qty.value&&add.value&&color.value){
  //bloco que verifica se os campos tamanho , quantidade, cor se estão prenchidos ou não. 
   
  }else{
    Box.style.display="flex"
    Info_area.innerHTML=field;
    c("#cartbuy").value=0;
    
    setTimeout(()=>{
 //timer para ocultar Caixa de alerta
 // em 3s
      Box.style.display="none";
    },3000)
    close_btn_location
   .addEventListener('click',()=>{
        Box.style.display = "none";
        open_btn_location2.addEventListener('click',()=>{
          Box.style.display = "none";
        })
      });
     }
   }) 
  document.body.appendChild(Butto_n);
  //---------------------
   //--Ver Carrinho
   const addCart = document
     .createElement("button");
     const viewCart="Ver Carrinho"
   addCart.id = "Add_cart";
   addCart.innerHTML = `<div>
      <button>${viewCart}</button>
      </div>`
  addCart.addEventListener('click',() => {
    
  })
  
   document.body.appendChild(addCart);
   //--
     
     const avaliable = document
    .createElement("h6");
  avaliable.className = "desc_h6";
  avaliable.innerHTML = `
 <h6>`+val.available+`</h6>`
 
  document.body
    .appendChild(avaliable);
    //--
    });
   };
    show_storage(items);
   
  
   
   //IMAGENS PAGE LIST
   /*function InsertImagem(url) {
     let img = document.createElement("img");
     img.id="m";// cria id para css
     img.src = url;//add img for src
  document.body.appendChild(img);
   }
   
 for (var i = 0; i < 1; i++) {
  const img = document.createElement("img");
  img.id='Img';
   img.src ="./acests/";
 document.body.appendChild(img);
 }*/
// CODIGO FIXAR BARRA NO TOPO
//page home
const Fxtop = c('.section-square');
const squareTopo = Fxtop.offsetTop;
window.onscroll = () => fixtop();
const fixtop = () => {
 if(window.pageYOffset >= squareTopo){
   Fxtop.classList.add("fix-top");
  c(".input-search"). 
   style.marginTop="17%";
   c(".square")
   .style.backgroundColor="#DDD";
   } 
    else{
   Fxtop.classList.remove("fix-top");
  c(".input-search")
    .style.marginTop = "auto"
    c(".square")
    .style.backgroundColor = "#CCC"
   }
};
//Acessar localização


// pegando variaveis globais
//e destruture
import {data_db} from './data_base.js'
const dataDb = data_db;
const {
  cancel,//cancelar
  ok,//ok
  invalid_zip_code, //cep invalido
  search,//procurar
  comment,//comentarios
    pleaseWait, //aguarde
    searchLabel,//"O que você procura?
     report, //reportar
      map, //mapa
       network,// Sem Coneção Com a Internet Tente Novamente Mas Tarde", 
       onGps, //Para continuar Ative a localização Do Dispositivo
        erroNetwork, //erro na coneção
          list, //lista
          empty_field, //campo vazio
       send, //emviar
     placeholder,//digite sua mensagem
    newMsg, //nova mensagem
   options, //opçoes
  empty, //vazio
    more, //mas
    field, 
      back, //voltar
       refreshing, //atualizando
         pullToRefresh,//puxe para atualizar
         access_your_location//deseja que acesse sua localização
   } = dataDb;
     //console.log();
    // variavel botão chamada
    
   //AREA CEP
    
  const p=c("#Submit");
  // chamada principal cep
  p.addEventListener('click',
  async   ()=>{
  const cep = c("#Data-cep").value;
   if(cep == ""){
   c(".Data-cep")
     .style.borderColor = "red"
    inputCepValidation(empty_field) 
   }
   else if(
   cep.length <= 7 || cep !== Number){
     c(".Data-cep")
     .style.borderColor="red"
  inputCepValidation(invalid_zip_code)
   }
   // tratamento try catch geral
    try{
      //Api cep
  const dataCep = await 
      fetch(`https://viacep.com.br/ws/${cep}/json/`) 
    const json = await dataCep.json()
   // tratamento de erro cep
      if(json){
        c(".Data-cep")
     .style.borderColor="#fff"
   inputCepValidation(pleaseWait)
  //tempo para a execução api 5seg
     await setTimeout(()=>{
             showDataCep({
          cep:json.cep, 
          logradouro:json.logradouro, 
          bairro:json.bairro, 
          localidade:json.localidade, 
          uf:json.uf, 
          ddd:json.ddd
       })
     },5000) 
       }
    }catch(erro){
      //trata o erro no bloco try
   //alert("Erro na requisição",erro)
    }
   }) 
   //validação de entrada
   function inputCepValidation(msg) {
     // c(".infoCep")
      Await.innerHTML=msg;
      Spiner. style. display="flex"
      //.innerHTML = msg;
      setTimeout(() => {
          //c(".infoCep")
       Await.innerHTML = "";
       Spiner. style. display="none"
      }, 3000)
    }
    //mostrar cep
    function showDataCep(res){
   c(".a").innerHTML=`Cep ${res.cep}`
   c(".b")
   .innerHTML=`${res.logradouro}`
   c(".c").innerHTML=`Bairro ${res.bairro}`
   c(".d")
   .innerHTML=`Cidade ${res.localidade}`
   c(".e").innerHTML=`Estado ${res.uf}`
   c(".f").innerHTML=`Ddd ${res.ddd}`
    };
    
    
 //texto = texto.replace("." , ","); // substitui a vírgula por ponto 
