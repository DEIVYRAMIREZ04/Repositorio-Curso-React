const products = [
   
     {
        id : 1,        
        name :"perfume dama beijo",
        description : "Olores intensos y duraderos para mujeres que quieren sentirce sexis",
        size:"100ml",
        price : "85.000",
        stock : 8,
        note : "con nuestras fragancias podras despertar sensaciones irresistibles",
        img : "/img/natura-beijo-bicolor-mujer.png",
        category : "perfumes"

    },
    {
        id : 2,        
        name :"perfume dama meu primero",
        description : "Olores intensos y duraderos para mujeres que quieren sentirce sexis",
        size:"15 onz",
        price : "85.000",
        stock : 5,
        note : "con nuestras fragancias podras despertar sensaciones irresistibles",
        img : "/img/rojo.png",
        category : "perfumes"

    },
    {
        id : 3,        
        name :"perfume dama proprio",
        description : "Olores intensos y duraderos para mujeres que quieren sentirce sexis",
        size:"100ml",
        price : "85.000",
        stock : 4,
        note : "con nuestras fragancias podras despertar sensaciones irresistibles",
        img : "/img/NATCOL-64749_1.png",
        category : "perfumes"

    },
    {
        id : 4,        
        name :"perfume dama   Kaiak clasica",
        description : "Olores intensos y duraderos para mujeres que quieren sentirce sexis",
        size:"100ml",
        price : "120.000",
        stock : 5,
        note : "con nuestras fragancias podras despertar sensaciones irresistibles",
        img : "/img/kaiak-clasica.png",
        category : "perfumes"

    },
     {
        id : 5,        
        name :"perfume dama Kaiak aventura",
        description : "Olores intensos y duraderos para mujeres que quieren sentirce sexis",
        size:"100ml",
        price : "120.000",
        stock : 10,
        note : "con nuestras fragancias podras despertar sensaciones irresistibles",
        img :"/img/kaiak-aventura-m.png",
        category : "perfumes"

    },
    {
        id : 6,        
        name :"perfume dama Kaiak sonar",
        description : "Olores intensos y duraderos para mujeres que quieren sentirce sexis",
        size:"100ml",
        price : "120.000",
        stock : 9,
        note : "con nuestras fragancias podras despertar sensaciones irresistibles",
        img : "/img/kaiak-sonar-m.png",
        category : "perfumes"

    },
     {
        id : 7,        
        name :"cremas cereza-avellana",
        description : "crema hidratante a base de cerezas y avellanas",
        size:"80ml",
        price : "45.000",
        stock : 3,
        note : "crema hidratante de uso diario",
        img : "/img/cereza-avellana-m.png",
        category : "cremas"

    },
    {
        id : 8,        
        name :"cremas ciruela y flor de vainilla",
        description : "crema hidratante a base de ciruela y un toque de flor de vainilla",
        size:"80ml",
        price : "55.000",
        stock : 12,
        note : "crema hidratante de uso diario",
        img : "/img/ciru-vaini.jpg",
        category : "cremas"

    },
    {
        id : 9,        
        name :"cremasuva rosa",
        description : "crema hidratante a base de celectas uvas rosas",
        size:"80ml",
        price : "48.000",
        stock : 9,
        note : "crema hidratante de uso diario",
        img : "/img/uva-rosa-m.png",
        category : "cremas"

    },
    {
        id : 10,        
        name :"shampoo anticaida y crecimiento",
        description : "prevencion de caida y estimulacion para q tu cabello cresca sano y resistente",
        size:"400ml",
        price : "50.000",
        stock : 7,
        note : "tratamiento efectivo para el cuidado del cabello",
        img : "/img/anticaida-crecimiento.png",
        category : "cabello"

    },
    {
        id : 11,        
        name :"shampoo kit lumina",
        description : "para cabello sedoso y radiante",
        size:"400ml",
        price : "35.000",
        stock : 13,
        note : "tratamiento efectivo para el cuidado del cabello",
        img : "/img/kit-lumina.png",
        category : "cabello"

    },
    {
        id : 12,        
        name :"shampoo 2 en 1 pataua",
        description : "estimula el crecimiento",
        size:"400ml",
        price : "30.000",
        stock : 6,
        note : "limpia y acondiciona en un solo paso",
        img : "/img/shampoo-acondicionador.png",
        category : "cabello"

    },
     {
        id : 13,        
        name :"Todo dia hidratante",
        description : "hidratacion de la piel",
        size:"200ml",
        price : "30.000 con descuento",
        stock : 6,
        note : "regenera e hidrata tu piel al mismo tiempo",
        img : "/img/crema-descuento.png",
        category : "oferta-mes"

    },
     {
        id : 14,        
        name :"KIT PARA EL CABELLO LUMINA ",
        description : "Cuidado paso a paso del cabello , cuida y restaura en 3 semanas",
        size:"Todo el tratamiento completo",
        price : "115.000 con descuento",
        stock : 6,
        note : "Descuento solo aplica por la compra de todos los productos",
        img : "/img/kit-descuento.png",
        category : "oferta-mes"

    },
     {
        id : 15,        
        name :"DESCUENTO PERFUMERIA",
        description : "Gran descuento en todos nuestros perfumes",
        size:"Todas las presentaciones",
        price : "Original Menos El 20% de descuento",
        stock : 6,
        note : "Recuerda que este descuento solo aplica para compras superiores a $200.000 pesos",
        img : "/img/perfumeria-descuento.png",
        category : "oferta-mes"

    },
];
const getProducts = ()=>{
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            resolve(products);
            reject("ERROR")
        },3000);
    })
};
const getProductById = (productId)=>{
    
    return new Promise((resolve, reject) => {
        setTimeout (()=>{
        const product = products.find((product)=>product.id === Number(productId));
            resolve(product);
            reject("ERROR")
        },3000);
    })
}
export {getProducts, getProductById};