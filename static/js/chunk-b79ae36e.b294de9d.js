(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b79ae36e"],{b9be:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"nft-profiler-details"},[e("div",{staticClass:"header"},[e("div",{staticClass:"header-main"},[e("div",{staticClass:"title1"},[e("div",{staticClass:"title-left"},[t._v(" "+t._s(t.text.headline)+" "),e("el-tooltip",{attrs:{effect:"light",content:t.text.headlineTips,placement:t.isM?"top":"right"}},[e("i",{staticClass:"el-icon-warning-outline",staticStyle:{"font-size":"16px",padding:"0 5px",color:"var(--main-tips)"}})])],1),e("div",{staticClass:"title-right"})]),e("div",{staticClass:"description"},[e("p",[t._v(" "+t._s(t.$t("login.description5"))+" "),e("span",[t._v(t._s(t.collectionCount?t.formatAmount(t.collectionCount):"--")+" ")]),t._v(" "+t._s(t.$t("login.description6"))+" ")])]),e("div",{staticClass:"content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"infoItem"},[e("span",[t._v(t._s(t.text.totalMarketCap))]),e("div",[t._v(t._s(t.formatAmount(t.totalMarketCap))+"ETH")])]),e("div",{staticClass:"infoItem"},[e("span",[t._v(t._s(t.text.totalVolume))]),e("div",[t._v(t._s(t.formatAmount(t.totalVolume))+"ETH")])])]),e("div",{staticClass:"tabs"},[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.nftSkylineTabs,callback:function(e){t.nftSkylineTabs=e},expression:"nftSkylineTabs"}},[e("el-tab-pane",{attrs:{label:t.text.overview,name:"nft-skyline-overview"}}),e("el-tab-pane",{attrs:{label:t.text.mint,name:"nft-skyline-mint"}}),e("el-tab-pane",{attrs:{label:t.text.trends,name:"nft-skyline-trends"}})],1)],1)])]),t.isM?e("div",{staticClass:"line"}):t._e()]),e("div",{staticClass:"body"},[e("router-view")],1)])},i=[],s=(n("b141"),n("b0e4")),o={name:"nft-skyline",props:{},data(){return{nftSkylineTabs:"nft-skyline-overview",collectionCount:0,totalMarketCap:0,totalVolume:0}},computed:{text(){return this.$t("nft-skyline.marketOverview")}},created(){},mounted(){this.getList(),this.getData(),gtag("event","menu_nftskyline_load",{event_name:"whatscion"});try{let t=document.querySelector(".whkeywords"),e=document.querySelector(".whdescription");document.title="NFT Skyline  | WhatsCoin";let n=document.querySelector(".ogTitle"),a=document.querySelector(".ogDescription");n.content="NFT Skyline  | WhatsCoin",a.content="WhatsCoin analyses the whole NFT market from the perspective of the minting market, secondary transaction market, free mint projects and market trends.",t.content="WhatsCoin, nft data, nft trade, top nft collection, floor price, volume, nft tool, nft stats.",e.content="WhatsCoin analyses the whole NFT market from the perspective of the minting market, secondary transaction market, free mint projects and market trends."}catch(t){}},watch:{$route:{deep:!0,immediate:!0,handler(t){this.getList()}}},methods:{formatAmount:s["d"],getList(){this.nftSkylineTabs=this.$route.name},handleClick(t,e){this.$router.push({name:t.paneName}),"nft-skyline-overview"==t.paneName&&gtag("event","menu_nftskyline_market_overview_click",{event_name:"whatscion"}),"nft-skyline-mint"==t.paneName&&gtag("event","menu_nftskyline_mint_master_click",{event_name:"whatscion"}),"nft-skyline-trends"==t.paneName&&gtag("event","menu_nftskyline_trends_click",{event_name:"whatscion"}),"nft-skyline-free-mint"==t.paneName&&gtag("event","menu_nftskyline_free_mint_click",{event_name:"whatscion"})},async getData(){const{success:t,data:e}=await this.$api.dgg.getNFTSkylineHeader({chainId:this.chainId||1});t&&(this.collectionCount=e.collectionCount,this.totalMarketCap=e.totalMarketCap,this.totalVolume=e.totalVolume)}},beforeDestroy(){sessionStorage.clear("user")}},l=o,r=(n("bedf"),n("e607")),c=Object(r["a"])(l,a,i,!1,null,"427ded6f",null);e["default"]=c.exports},baa61:function(t,e,n){},bedf:function(t,e,n){"use strict";n("baa61")}}]);