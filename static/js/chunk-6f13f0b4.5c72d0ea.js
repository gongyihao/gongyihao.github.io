(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f13f0b4"],{"7e31":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"nft-profiler-details"},[e("div",{staticClass:"header"},[e("div",{staticClass:"header-main"},[e("div",{staticClass:"title1"},[e("div",{staticClass:"title-left"},[t._v(" "+t._s(t.text.title)+" "),e("el-tooltip",{attrs:{effect:"light",content:t.text.tips,placement:t.isM?"top":"right"}},[e("i",{staticClass:"el-icon-warning-outline",staticStyle:{"font-size":"16px",padding:"0 5px",color:"var(--main-tips)"}})])],1),e("div",{staticClass:"title-right"})]),e("div",{staticClass:"content"},[e("div",{staticClass:"tabs"},[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.nftIndexesTabs,callback:function(e){t.nftIndexesTabs=e},expression:"nftIndexesTabs"}},[e("el-tab-pane",{attrs:{label:t.text.overview,name:"nft-indexes-overview"}}),e("el-tab-pane",{attrs:{label:t.text.wsc_nft500,name:"nft-indexes-nft-500"}}),e("el-tab-pane",{attrs:{label:t.text.wsc_bluechip10,name:"nft-indexes-bluechip"}}),e("el-tab-pane",{attrs:{label:t.text.wsc_social100,name:"nft-indexes-social"}}),e("el-tab-pane",{attrs:{label:t.text.wsc_game50,name:"nft-indexes-game"}}),e("el-tab-pane",{attrs:{label:t.text.wsc_art20,name:"nft-indexes-art"}}),e("el-tab-pane",{attrs:{label:t.text.wsc_meta20,name:"nft-indexes-meta"}})],1)],1)])]),t.isM?e("div",{staticClass:"line"}):t._e()]),e("div",{staticClass:"body"},[e("router-view")],1)])},s=[],i=(a("b141"),a("7736")),l=a("b0e4"),o={name:"nft-indexes",props:{},data(){return{nftIndexesTabs:"nft-index-overview"}},computed:{...Object(i["b"])("nftSkyline",["collections"]),text(){return this.$t("nft-indexes")}},created(){},mounted(){this.getList();try{let t=document.querySelector(".whkeywords"),e=document.querySelector(".whdescription"),a=document.querySelector(".ogTitle"),n=document.querySelector(".ogDescription");document.title="NFT Indexes | WhatsCoin",a.content="NFT Indexes | WhatsCoin",n.content="WhatsCoin data analytics platform analyzes more than 100 million+ addresses, NFT market, smart contracts, token transactions, perspective of crypto market on Ethereum.",t.content="WhatsCoin, nft, blockchain, smart money, free mint, crypto, labelled address, trade transaction, nft market, nft stats.",e.content="WhatsCoin data analytics platform analyzes more than 100 million+ addresses, NFT market, smart contracts, token transactions, perspective of crypto market on Ethereum."}catch(t){}},watch:{$route:{deep:!0,immediate:!0,handler(t){this.getList()}}},methods:{formatAmount:l["d"],getList(){this.nftIndexesTabs=this.$route.name},handleClick(t,e){this.$router.push({name:t.paneName})}},beforeDestroy(){sessionStorage.clear("user")}},r=o,c=(a("a5ed"),a("e607")),d=Object(c["a"])(r,n,s,!1,null,"2cb1e4ae",null);e["default"]=d.exports},a5ed:function(t,e,a){"use strict";a("c807")},c807:function(t,e,a){}}]);