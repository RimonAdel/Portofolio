(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},41:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(1),c=i(17),l=i.n(c),a=(i(28),i(18)),r=i(19),o=i(22),d=i(21),h=[{id:1,title:"Home",URL:"#home",cName:"nav-links"},{title:"About",URL:"#about",cName:"nav-links"},{title:"Skills",URL:"#skills",cName:"nav-links"},{title:"Projects",URL:"#projects",cName:"nav-links"},{title:"Courses",URL:"#courses",cName:"nav-links"}],j=(i(29),function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(a.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={clicked:!1,occupation:"Software Developer",scrolled:!1},e.handleScroll=function(){window.scrollY>100?e.setState({scrolled:!0}):e.setState({scrolled:!1})},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(r.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"navbar-holder",children:[Object(n.jsxs)("nav",{class:"navbar",id:"home",children:[Object(n.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(n.jsx)("i",{className:this.state.clicked?this.state.scrolled?"fas fa-times dim":"fas fa-times":this.state.scrolled?"fas fa-bars dim":"fas fa-bars"})}),Object(n.jsx)("div",{className:this.state.clicked?"nav-menu active":"nav-menu",children:h.map((function(e,t){return Object(n.jsx)("a",{className:e.cName,href:e.URL,children:e.title})}))})]}),Object(n.jsxs)("div",{className:"banner",children:[Object(n.jsxs)("h1",{children:[Object(n.jsx)("span",{class:"wave",children:"\ud83d\ude4b\u200d\u2642\ufe0f "}),"I'm Rimon Adel."]}),Object(n.jsxs)("h3",{children:["I'm an Alexandria based ",Object(n.jsx)("span",{children:"Software Developer"}),"."]})]})]})}}]),i}(s.Component)),m=(i(30),function(e){return Object(n.jsx)("section",{className:"about",id:"about",children:Object(n.jsxs)("div",{className:"about-interests",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"About Me"}),Object(n.jsx)("p",{children:"My name is Rimon, I'm a computer Engineer. Currently I'm working at EJADA Systems Ltd."}),Object(n.jsx)("p",{children:"live in Alexandria, Egypt"}),Object(n.jsxs)("span",{className:"contacts",children:[Object(n.jsx)("h3",{className:"view-cv",children:"Contact Details"}),Object(n.jsx)("p",{children:"+201064957782"}),Object(n.jsx)("p",{children:"+201115481309"}),Object(n.jsx)("p",{children:"Rimon.adel.01@gmail.com"}),Object(n.jsxs)("ul",{className:"contact-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/rimon-adel-782aa8156/",title:"linked inlink",target:"_blank",rel:"noopener noreferrer",class:"fa fa-linkedin"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/RimonAdel",class:"fab fa-github",target:"_blank",rel:"noopener noreferrer",title:"link"})})]})]}),Object(n.jsx)("a",{href:"https://drive.google.com/file/d/1rA9uII1dffOiMG-ElQqXFR9hNJZHmAjA/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"cv-button",children:"View CV"})]}),Object(n.jsxs)("div",{className:"interests",children:[Object(n.jsx)("h3",{children:"Interests"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:"Algorithms & Data Structures"})}),Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:" Full Stack Web Development"})}),Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:"Robotics and Self Driving Dars"})})]}),Object(n.jsx)("h3",{children:"languages"}),Object(n.jsx)("p",{children:"Arabic: Mother Tongue"}),Object(n.jsx)("p",{children:"English: IELTS (6.5)"})]})]})})}),b=i(8),u=(i(15),function(e){var t=e.name,i=e.level,s={width:"".concat(i,"%")};return Object(n.jsxs)("div",{className:"skill-1",children:[Object(n.jsx)("h3",{className:"skill-name",children:t}),Object(n.jsx)("div",{className:"skill",children:Object(n.jsx)("div",{style:s,className:"skill-level"})})]})}),p=[{id:1,name:"Java",level:90,level_name:"intermediat"},{id:2,name:"C++",level:60,level_name:"intermediat"},{id:3,name:"python",level:80,level_name:"intermediat"},{id:4,name:"JavaScript",level:60,level_name:"intermediat"},{id:5,name:"php",level:60,level_name:"intermediat"},{id:6,name:"REACTJS",level:40,level_name:"intermediat"}],f=function(e){return Object(n.jsx)("section",{className:"skills",id:"skills",children:Object(n.jsxs)("div",{className:"content-section ",children:[Object(n.jsx)("h2",{children:"Skills"}),Object(n.jsx)("div",{className:"section-container",children:p.map((function(e){return Object(n.jsx)(u,Object(b.a)({},e),e.id)}))})]})})},g=(i(31),function(e){var t=e.title,i=e.image,s=e.discription,c=e.link,l=i&&i.url;return console.log(l),Object(n.jsxs)("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"card",children:[Object(n.jsx)("img",{src:i,alt:"Denim Jeans"}),Object(n.jsx)("h4",{children:t}),Object(n.jsx)("p",{class:"discription",children:s})]})}),x=[{id:1,title:"Coloring-Machine-from-SVG_image-using-marlin",image:"https://lh3.googleusercontent.com/d/1_sIl8F6xOxA9ZNVLjrLoCya8CReeZXpp=s220?authuser=0",discription:"this project take any SVG image with size 300x300 mm and convert this image to Gcode. the Gcode then you can take the output file and send it serially to marlin firmware using pronterface",link:"https://github.com/RimonAdel/Coloring-Machine-from-SVG_image-using-marlin"},{id:2,title:"Circus-OF-Plates",image:"https://lh3.googleusercontent.com/d/1pyu0ot433NH7f4ZrsCV-wsH3Ub2jOasN=s220?authuser=0",discription:"2D game implementing 10 Design Patterns\u2022The player select levels of hardness from three levels determining the speed of the game and probability of bombs presence in the game",link:"https://github.com/RimonAdel/Circus-OF-Plates"},{id:3,title:"stereo-Matching",image:"https://lh3.googleusercontent.com/d/1Kwn0Psj37yfcyauXBvTYebOYXrJJ19R-=s220?authuser=0",discription:"implements and tests some simple stereo matching algorithms discussed in computer vision for undergradates class. In each case the script will take two images Il and Ir (a left and a right image) and compute the horizontal disparity (ie., shift) of pixels along each scanline. This is the so-called baseline stereo case, where the images are taken with a forward-facing camera, and the translation between cameras is along the horizontal axis.",link:"https://github.com/RimonAdel/stereo-Matching"},{id:4,title:"8 Puzzle Solver",image:"https://drive.google.com/thumbnail?id=1hrTlx2npik1ygILE1plL8CaGw8xnP4KT",discription:"solve the 8-Puzzle game using different search techniques like : Breadth Frist Serach, Depth Frist Serach and A*",link:"https://github.com/RimonAdel/8-Puzzle"},{id:5,title:"IOT-project-using-ESP8266",image:"https://drive.google.com/thumbnail?id=1FKsSE3notWnV6xxAsvUVek01Rd8_tY0d",discription:"About using java to make 2D game implementing 10 Design Patterns\u2022The player select levels of hardness from three levels determining the speed of the game and probability of bombs presence in the game",link:"https://github.com/RimonAdel/Circus-OF-Plates"},{id:6,title:"Human Measurment System",image:"https://drive.google.com/thumbnail?id=1KyNMcuJKakQd1VMynxSOKnUkS8BJWVB8",discription:"Extracting the human body measurements such as hip, waist, chest and shoulders using machine learning and computer vision ",link:"https://github.com/RimonAdel/Human-Measurment-System"}];i(32);function O(){return Object(n.jsxs)("section",{className:"content-section",id:"projects",children:[Object(n.jsx)("h2",{children:"Projects"}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"project-holder",children:x.map((function(e){return console.log(e),Object(n.jsx)(g,Object(b.a)({},e),e.id)}))})})]})}i(33);var v=function(e){var t=e.id,i=e.title,s=e.place;e.url;return Object(n.jsx)("a",{href:"/Portofolio/Certificates/".concat(t),target:"_blank",rel:"noopener noreferrer",className:"course",children:Object(n.jsxs)("div",{className:"course-data",children:[Object(n.jsx)("h4",{children:i}),Object(n.jsxs)("h5",{children:["from: ",s,"."]})]})})},k=[{id:1,title:"Algorithmic Toolbox,University of California San Diego.",place:"Coursera",url:"https://drive.google.com/file/d/14rofaQ5vpB3kTL5kmYvsTxVVshQmzAzL/view?usp=sharing"},{id:2,title:"VMware Students Workshop at DELL Technologies",place:"Cairo, Egypt",url:"https://drive.google.com/file/d/1-CyFQmIrezEuVPqOFgCXLaxm5raEtmYK/view?usp=sharing"},{id:3,title:"API Design and Fundamentals of Google Cloud\u2019s Apigee API Platform.",place:"Coursera",url:"https://drive.google.com/file/d/18FrkITLl4Gug9pd4w9dzW6Uq2_n2P-qW/view?usp=sharing"},{id:4,title:"API Security on Google Cloud\u2019s Apigee API Platform.",place:"Coursera",url:"https://drive.google.com/file/d/1Kr_4Vmi83CUT_I9Cb9PxURPB0aB1bHXM/view?usp=sharing"},{id:5,title:"API Development on Google Cloud\u2019s Apigee API Platform.",place:"Coursera",url:"https://drive.google.com/file/d/11q_qAnYXwXdv2XU1Mr3nC-Qq_pTVc4RY/view?usp=sharing"},{id:6,title:"ROS (Robot Operating System) summer school from FH Aachen",place:"Aachen, Germany",url:"https://drive.google.com/file/d/1k2UyG1NPKKSpvfxCBwkpMYG_x2TmiS1S/view"}],w=function(){return Object(n.jsx)("section",{id:"courses",children:Object(n.jsxs)("div",{className:"content-section",children:[Object(n.jsx)("h3",{children:"Courses"}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"courses-holder",children:k.map((function(e){return Object(n.jsx)(v,Object(b.a)({},e),e.id)}))})})]})})};i(34);var N=function(){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsxs)("div",{className:"footer__content",children:[Object(n.jsxs)("div",{className:"footer__section",children:[Object(n.jsx)("h3",{children:"Rimon Adel"}),Object(n.jsx)("div",{className:"footer__about__content",children:"passionate about Data Structure and Problem Solving. always eager to learn some thing new in my free time. love cars and robotics "}),Object(n.jsx)("h4",{children:"Lives in Alexandria, Egypt"})]}),Object(n.jsxs)("div",{className:"footer__section_links",children:[Object(n.jsx)("h3",{children:"Qucik links"}),h.map((function(e,t){return Object(n.jsx)("ul",{children:Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:e.cName,href:e.URL,children:e.title})})})}))]}),Object(n.jsxs)("div",{className:"footer__section__contacts",children:[Object(n.jsx)("h3",{children:"Contants"}),Object(n.jsx)("p",{children:"+201064957782"}),Object(n.jsx)("p",{children:"+201115481309"}),Object(n.jsx)("p",{children:"Rimon.adel.01@gmail.com"}),Object(n.jsxs)("ul",{className:"contact-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/rimon-adel-782aa8156/",title:"linked inlink",target:"_blank",rel:"noopener noreferrer",class:"fa fa-linkedin"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/RimonAdel",class:"fab fa-github",target:"_blank",rel:"noopener noreferrer",title:"link"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.hackerrank.com/rimonadel01",class:"fab fa-hackerrank",target:"_blank",rel:"noopener noreferrer",title:"link"})})]})]})]})})},_=i(10),A=i(2);i(35);var y=function(e){return e.match.params.id.id,console.log("yess"),Object(n.jsx)("div",{className:"certficate__pdf__viwer",children:Object(n.jsx)("iframe",{id:"pdf-js-viewer",src:"lib/web/viewer.html?file=../../Certificates/Coursera_Algo_California_san_diago.pdf",title:"webviewer",frameBorder:"0",width:"100%",height:"100%"})})};var C=function(){return Object(n.jsx)(_.a,{children:Object(n.jsxs)(A.c,{children:[Object(n.jsx)(A.a,{path:"/Portofolio/Certificates/:id",children:Object(n.jsx)(y,{})}),Object(n.jsxs)(A.a,{path:"/Portofolio",exact:!0,children:[Object(n.jsx)(j,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(m,{}),Object(n.jsx)(f,{}),Object(n.jsx)(O,{}),Object(n.jsx)(w,{})]}),Object(n.jsx)(N,{})]})]})})};l.a.render(Object(n.jsx)(_.a,{children:Object(n.jsx)(C,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.4d1c3e4c.chunk.js.map