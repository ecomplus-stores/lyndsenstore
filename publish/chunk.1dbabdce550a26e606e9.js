(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{206:function(t,e,s){"use strict";s.r(e);var o=s(29),i=s(75),a=s(84),c=s(4),r=s(7),d=s(56),n=s(174),u=s(177);const h="object"==typeof window&&window.storefront||{};var l={name:"BuyTogether",components:{APrices:n.a,ProductCard:u.a},props:{baseProduct:{type:Object,default:()=>h.context&&h.context.body||{}},ecomCart:{type:Object,default:()=>r.a},productCardProps:{type:Object,default:()=>({isSmall:!0})},fallbackMatchType:{type:String,default:"object"==typeof window&&window.ecomRecommendationsType||"recommended"}},data:()=>({ecomSearch:(new d.a).mergeFilter({range:{quantity:{gt:0}}}).mergeFilter({term:{available:!0}}),hasLoadedIds:!1,hasLoadedItems:!1,productQnts:{},recommendedItems:[],discount:0,discountType:"fixed",discountValue:0}),computed:{i19buyTogether:()=>"Compre junto",i19buyTogetherWith:()=>"Compre junto com",items(){return[this.baseProduct,...this.recommendedItems]},productIds(){return Object.keys(this.productQnts)},relatedProducts(){const t=this.baseProduct.related_products&&this.baseProduct.related_products[0];return t&&t.product_ids.length?t.product_ids:[]},subtotal(){return this.items.reduce(((t,e)=>t+(this.productQnts[e._id]||1)*Object(o.a)(e)),0)},canAddToCart(){return!this.items.find((t=>t.variations||t.customizations||t.kit_composition))}},methods:{formatMoney:i.a,buy(){const t=(this.subtotal-this.discount)/this.subtotal;this.items.forEach((e=>{const s=this.ecomCart.parseProduct({...e,base_price:Object(o.a)(e),price:Object(o.a)(e)*t,price_effective_date:{}});s.quantity=this.productQnts[e._id]||1,s.keep_item_quantity=!0,this.ecomCart.addItem(s)}))},calcDiscount(){"fixed"===this.discountType?this.discount=this.discountValue:this.discount=this.subtotal*this.discountValue/100},setProductQnts(t){if(t.length){const e={};t.slice(0,3).forEach((t=>{e[t]=1})),this.productQnts=e}},fetchItems(){this.productIds.length?(this.ecomSearch.setProductIds(this.productIds),delete this.ecomSearch.dsl.aggs,this.ecomSearch.fetch().then((()=>{this.recommendedItems=this.recommendedItems.concat(this.ecomSearch.getItems())})).finally((()=>{this.hasLoadedItems=!0}))):this.hasLoadedItems=!0}},watch:{subtotal:{handler(t,e){t!==e&&this.calcDiscount()},immediate:!0}},created(){if(this.baseProduct&&this.baseProduct._id){const t=r.a.parseProduct((t=>{const e=Object.assign({},t);return delete e.body_html,delete e.body_text,delete e.specifications,delete e.inventory_records,delete e.price_change_records,e})(this.baseProduct)),e=Object(o.a)(t)*t.quantity;Object(c.c)({url:"/apply_discount.json",method:"POST",data:{amount:{subtotal:e,total:e,discount:0},items:[t]}}).then((t=>{let{data:e}=t;for(let t=0;t<e.result.length;t++){const{validated:s,error:o,response:i}=e.result[t];if(s&&!o&&i.buy_together){const t=i.buy_together.sort(((t,e)=>t.products&&t.products.length?e.products&&e.products.length?t.products.length<=e.products.length&&t.discount.value>=e.discount.value?-1:0:-1:1));if(t[0]){const{products:e,discount:s}=t[0];this.productQnts=e||[],this.discountType=s.type,this.discountValue=s.value,this.$nextTick((()=>{this.calcDiscount()}))}}}})).finally((()=>{this.hasLoadedIds=!0,this.$nextTick((()=>{this.productIds.length?this.fetchItems():this.relatedProducts.length?(this.setProductQnts(this.relatedProducts),this.fetchItems()):this.fallbackMatchType&&Object(c.b)({url:`/products/${this.baseProduct._id}/${this.fallbackMatchType}.json`}).then((t=>{let{data:e}=t;this.setProductQnts(Object(a.a)(e)),this.$nextTick((()=>{this.fetchItems()}))}))}))}))}}},m=(s(338),s(46)),p=Object(m.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"buy-together"},[s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.hasLoadedItems&&t.recommendedItems.length?s("div",[s("div",{staticClass:"buy-together__title"},[s("div",{staticClass:"buy-together__discount lead mb-3"},[t._v(" "+t._s(t.i19buyTogether)+" "),t.discount?s("span",{staticClass:"badge badge-success"},[t._v(" "+t._s(t.formatMoney(t.discount))+" "),s("span",[t._v("OFF")])]):t._e()])]),s("div",{staticClass:"buy-together__row row"},[s("div",{staticClass:"col-12",class:t.productIds.length>1?"col-md":"col-md-6 col-lg-4"},[s("div",{staticClass:"row"},t._l(t.items,(function(e){return t.items.length?s("div",{key:e._id,staticClass:"buy-together__item col-12",class:"col-md-"+12/t.items.length},[s("product-card",t._b({attrs:{product:e,productId:e._id,"is-loaded":!0}},"product-card",t.productCardProps,!1))],1):t._e()})),0)]),s("div",{staticClass:"buy-together__cta col-auto"},[s("a-prices",{attrs:{product:{price:t.subtotal-t.discount,base_price:t.subtotal},"is-literal":!0,"is-big":!0}}),t.canAddToCart?s("button",{staticClass:"btn btn-lg btn-primary mt-3",on:{click:t.buy}},[s("i",{staticClass:"i-shopping-basket mr-1"}),t._v(" "+t._s(t.i19buyTogether)+" ")]):t._e()],1)])]):t._e()]),s("transition",{attrs:{"leave-active-class":"animated fadeOut"}},[t.hasLoadedItems?t._e():t._t("default")],2)],1)}),[],!1,null,null,null);e.default=p.exports},274:function(t,e,s){var o=s(339);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,s(160).default)("718c747a",o,!0,{})},338:function(t,e,s){"use strict";s(274)},339:function(t,e,s){(e=s(159)(!0)).push([t.i,'.buy-together__title{text-align:center}.buy-together__row{align-items:center;justify-content:center}.buy-together__item{margin:0 auto;max-width:275px;padding-bottom:2rem!important}.buy-together__item:after{content:"+";font-size:1.5rem;position:absolute;right:50%}.buy-together__item:last-child:after{content:"="}@media(min-width:767px){.buy-together__item{max-width:none;padding-left:var(--spacer-2);padding-right:var(--spacer-2)}.buy-together__item:after{right:0;top:50%}}',"",{version:3,sources:["BuyTogether.scss"],names:[],mappings:"AAAA,qBAAqB,iBAAiB,CAAC,mBAAmB,kBAAkB,CAAC,sBAAsB,CAAC,oBAAoB,aAAa,CAAC,eAAe,CAAC,6BAA6B,CAAC,0BAA0B,WAAW,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,SAAS,CAAC,qCAAqC,WAAW,CAAC,wBAAwB,oBAAoB,cAAc,CAAC,4BAA4B,CAAC,6BAA6B,CAAC,0BAA0B,OAAO,CAAC,OAAO,CAAC",file:"BuyTogether.scss",sourcesContent:['.buy-together__title{text-align:center}.buy-together__row{align-items:center;justify-content:center}.buy-together__item{margin:0 auto;max-width:275px;padding-bottom:2rem!important}.buy-together__item:after{content:"+";font-size:1.5rem;position:absolute;right:50%}.buy-together__item:last-child:after{content:"="}@media(min-width:767px){.buy-together__item{max-width:none;padding-left:var(--spacer-2);padding-right:var(--spacer-2)}.buy-together__item:after{right:0;top:50%}}']}]),t.exports=e}}]);