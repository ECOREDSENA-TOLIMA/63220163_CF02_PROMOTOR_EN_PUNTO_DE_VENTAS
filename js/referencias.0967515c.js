(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-3913883c"],{"13aa":function(n,t,a){"use strict";a.r(t);var e=function(){var n=this,t=n._self._c;return t("div",{staticClass:"container-fluid banner-interno"},[t("div",{staticClass:"banner-interno__fondo",style:{"background-image":`url(${n.globalData.fondoBannerPrincipal})`}}),t("div",{staticClass:"container"},[t("div",{staticClass:"banner-interno__titulo py-5"},[n.icono.length?t("div",{staticClass:"banner-interno__titulo__icono me-3"},[t("i",{class:n.icono})]):n._e(),t("h2",{staticClass:"mb-0",domProps:{innerHTML:n._s(n.titulo)}})])])])},i=[],s={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:()=>({}),computed:{globalData(){return this.$config.global}}},r=s,o=(a("196e"),a("2877")),c=Object(o["a"])(r,e,i,!1,null,null,null);t["default"]=c.exports},"196e":function(n,t,a){"use strict";a("a377")},"64ef":function(n,t,a){"use strict";a.r(t);var e=function(){var n=this,t=n._self._c;return t("div",{staticClass:"curso-main-container referencias"},[t("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},n._l(n.orderedData,(function(a){return t("div",{key:a.link,staticClass:"referencias__item"},[t("span",{domProps:{innerHTML:n._s(a.referencia)}}),a.link?t("a",{staticClass:"ms-1",attrs:{href:a.link,target:"_blank"}},[t("span",{domProps:{innerHTML:n._s(a.link)}}),t("i",{staticClass:"ms-1 fas fa-external-link-alt"})]):n._e(),t("hr",{staticClass:"my-3"})])})),0)],1)},i=[],s=a("13aa"),r=a("ecc5"),o={name:"Referencias",components:{BannerInterno:s["default"]},mixins:[r["a"]],computed:{referenciasData(){return this.$config.referencias},orderedData(){const n=[...this.referenciasData].sort((n,t)=>{const a=this.quitarAcentos(n.referencia.split(" ")[0].toLowerCase()),e=this.quitarAcentos(t.referencia.split(" ")[0].toLowerCase());return a<e?-1:a>e?1:0});return n}}},c=o,l=(a("6fa0"),a("2877")),u=Object(l["a"])(c,e,i,!1,null,null,null);t["default"]=u.exports},"6fa0":function(n,t,a){"use strict";a("ea10")},a377:function(n,t,a){},ea10:function(n,t,a){}}]);
//# sourceMappingURL=referencias.0967515c.js.map