import{u as s,j as e,N as g,F as j,c as y,R as f}from"./global-c7e3b424.js";import{S as h,P as v}from"./PorQueElegirnos-312c4148.js";import{D as _}from"./Direccion-d7c4724e.js";const N="_fondo_hqsqv_1",z="_botones_hqsqv_51",S="_contenido_hqsqv_57",q="_contenedor_hqsqv_63",m={fondo:N,botones:z,contenido:S,contenedor:q},B=()=>{let i=s({small:"displaySmall",medium:"displayMedium",large:"displayLarge"}),t=s({small:"bodySmall",medium:"bodyMedium",large:"bodyLarge"}),o=s({small:"labelSmall",medium:"labelMedium",large:"labelLarge"}),n=s({small:"botonBorder",medium:"botonBorderMedium",large:"botonBorderLarge"}),d=s({small:"botonFull",medium:"botonFullMedium",large:"botonFullLarge"});const u={dots:!0,arrows:s({small:!1,medium:!0,large:!0}),infinite:!0,speed:1500,slidesToShow:1,autoplay:!0,autoplaySpeed:4e3,fade:!1,cssEase:"cubic-bezier(0.23, 1, 0.32, 1)",transform:"translate3d(0, 0, 0)"},b=({cards:x})=>e.jsx(h,{...u,children:x.map(a=>e.jsx("div",{children:e.jsx("div",{className:m.contenedor,children:e.jsxs("div",{className:m.contenido,children:[e.jsxs("h1",{className:i,children:[e.jsx("span",{children:a.title.split(" ")[0]})," ",a.title.split(" ").slice(1).join(" ")]}),e.jsx("div",{className:t,children:a.body}),e.jsxs("div",{className:m.botones,children:[e.jsx("button",{className:n+" "+o,children:e.jsx("a",{href:a.href1,children:a.firstButton})}),e.jsx("button",{className:d+" "+o,children:e.jsx("a",{href:a.href2,children:a.secondButton})})]})]})})},a.title))});let r=[{title:"Alonso TimberCraft",body:"Expertos en madera para soluciones confiables y duraderas.",firstButton:"Sobre Nosotros",href1:"/nosotros",href2:"/contacto",secondButton:"Contáctenos"},{title:"Nuestros Servicios",body:"Soluciones personalizadas en tratamiento, aserrado y fabricación de pallets para transporte y almacenamiento eficiente, con enfoque en la calidad y el cuidado del medio ambiente.",firstButton:"Servicios",href1:"/servicios",href2:"/contacto",secondButton:"Contáctenos"}];return e.jsx("div",{className:m.fondo,children:e.jsx(b,{cards:r})})},M="_sobreNosotros_hztm7_1",A="_izquierda_hztm7_39",C="_texto_hztm7_53",L="_imagenes_hztm7_65",I="_imagen1_hztm7_95",E="_imagen2_hztm7_113",l={sobreNosotros:M,izquierda:A,texto:C,imagenes:L,imagen1:I,imagen2:E},w=()=>{let i=s({small:"bodySmall",medium:"bodyMedium",large:"bodyLarge"}),t=s({small:"labelSmall",medium:"labelMedium",large:"labelLarge"}),o=s({small:"headlineSmall",medium:"headlineMedium",large:"headlineLarge"}),n=s({small:" bordeIzq",medium:" bordeIzq",large:" bordeIzq"}),d=s({small:"botonBorder ",medium:"botonBorderMedium ",large:"botonBorderLarge "});return e.jsxs("div",{className:l.sobreNosotros,children:[e.jsxs("div",{className:l.izquierda,children:[e.jsxs("div",{className:l.texto,children:[e.jsxs("h2",{className:o+n,children:[e.jsx("span",{children:"Sobre"}),"  Nosotros"]}),e.jsx("p",{className:i,children:"Somos un aserradero familiar con más de 20 años de experiencia en el rubro. Nos enorgullece ofrecer una amplia gama de servicios, desde el aserrado de madera y la construcción de pallets, hasta el cepillado de tablas y el tratamiento fitosanitario. Nuestro compromiso con la calidad y la atención meticulosa nos ha convertido en referentes en la industria. Valoramos las relaciones duraderas con nuestros clientes y nos esforzamos por superar sus expectativas en cada proyecto. Confíe en nuestro conocimiento y experiencia para brindar soluciones a medida para sus necesidades de madera."})]}),e.jsx("button",{className:d+t,style:{maxWidth:"100px"},children:e.jsx("a",{href:"/contacto",children:"Contáctenos"})})]}),e.jsxs("div",{className:l.imagenes,children:[e.jsx("picture",{children:e.jsx("img",{src:"https://rdzgil.com/wp-content/uploads/2021/07/Que-son-los-pallets.jpg",alt:""})}),e.jsx("div",{className:l.imagen1}),e.jsx("div",{className:l.imagen2})]})]})},F="_servicios_2lla5_7",R="_servicio_2lla5_7",T="_carrusel_2lla5_35",U="_mitexto_2lla5_77",$="_botones_2lla5_97",c={servicios:F,servicio:R,carrusel:T,mitexto:U,botones:$},k=()=>{let i=s({small:"headlineSmall",medium:"headlineMedium",large:"headlineLarge"}),t=s({small:"bodySmall",medium:"bodyMedium",large:"bodyLarge"}),o=s({small:"labelSmall",medium:"labelMedium",large:"labelLarge"}),n=s({small:" bordeIzq",medium:" bordeIzq",large:" bordeIzq"});const d={dots:!0,arrows:!0,infinite:!0,speed:1500,slidesToShow:1,autoplay:!0,autoplaySpeed:4e3,fade:!1,cssEase:"cubic-bezier(0.23, 1, 0.32, 1)",transform:"translate3d(0, 0, 0)"},p=({cards:b})=>e.jsx(h,{...d,children:b.map(r=>e.jsx("div",{children:e.jsxs("div",{className:c.carrusel,children:[e.jsxs("picture",{children:[e.jsx("source",{}),e.jsx("source",{}),e.jsx("img",{src:r.img,loading:"lazy"})]}),e.jsxs("div",{className:c.mitexto,children:[e.jsxs("h2",{className:i,children:[e.jsx("span",{children:r.servicio.split(" ")[0]})," ",r.servicio.split(" ").slice(1).join(" ")]}),e.jsx("p",{className:t,children:r.body}),e.jsxs("div",{className:c.botones,children:[e.jsx("button",{className:"botonBorder "+o,children:e.jsx("a",{href:"/servicios",children:"Más"})}),e.jsx("button",{className:"botonFull "+o,children:e.jsx("a",{href:"/contacto",children:"Contáctenos"})})]})]})]})},r.servicio))});let u=[{servicio:"Tratamiento fitosanitario",body:"El tratamiento fitosanitario es un conjunto de técnicas utilizadas en la agricultura para proteger las plantas y cultivos de plagas, enfermedades y malezas. Involucra la aplicación de productos químicos, biológicos o métodos de control integrado para mantener la salud de las plantas y garantizar una producción agrícola eficiente y sostenible.",img:"ServiciosInicio.png"},{servicio:"Construcción de pallets",body:"La construcción de pallets implica la fabricación de estructuras de madera diseñadas para facilitar el transporte y almacenamiento de mercancías. Los pallets se construyen con madera resistente y se diseñan para ser fácilmente manipulables con montacargas. Son ampliamente utilizados en la industria logística y de almacenamiento para optimizar el manejo de productos y mejorar la eficiencia en la cadena de suministro.",img:"https://rotom.es/media/mageplaza/blog/post/import/blog/es/2021/03/palets-de-madera-de-un-solo-uso-pueden-utilizarse-mas-de-una-vez/palets-de-madera-de-un-solo-uso-pueden-utilizarse-mas-de-una-vez-2.jpg"},{servicio:"Aserrado de madera",body:"El aserrado de madera es un proceso mediante el cual los troncos de árboles se cortan en tablas, vigas o piezas de madera de diferentes tamaños y formas. Se utiliza maquinaria especializada, como sierras, para realizar cortes precisos y obtener productos de madera utilizados en la construcción, fabricación de muebles y otros fines.",img:"https://3.bp.blogspot.com/-aYNky1cYCmg/W3ENGc9KmvI/AAAAAAAAWzU/UU2mAddfVGwJXRRrSqtK-YMM55kDEbnzACLcBGAs/s1200/madera%2Baserrada.jpg"}];return e.jsxs("div",{className:c.servicios,children:[e.jsx("div",{className:c.servicio,children:e.jsxs("h2",{className:n+" "+i,children:[e.jsx("span",{children:"Nuestros"})," Servicios"]})}),e.jsx(p,{cards:u})]})},D="_main_1q4ik_1",G={main:D},W=()=>e.jsxs("div",{className:G.main,children:[e.jsx(g,{}),e.jsx(B,{}),e.jsx(w,{}),e.jsx(v,{}),e.jsx(k,{}),e.jsx(_,{}),e.jsx(j,{})]}),Y=()=>e.jsx(W,{});y.createRoot(document.getElementById("root")).render(e.jsx(f.StrictMode,{children:e.jsx(Y,{})}));
