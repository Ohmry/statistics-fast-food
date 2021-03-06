(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7151bf6d"],{"3d2f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-container",{attrs:{fluid:""}},[i("ViewTitle",{attrs:{title:"Material",description:"you can see and manage all materials"}}),i("v-toolbar",{attrs:{flat:""}},[i("v-spacer"),i("AppButton",{attrs:{text:"New",icon:"add",outlined:""},on:{click:function(e){return e.stopPropagation(),t.openMaterial("new")}}}),i("AppButton",{staticClass:"ml-3",attrs:{text:"Edit",icon:"edit",outlined:""},on:{click:function(e){return e.stopPropagation(),t.openMaterial("update")}}}),i("AppButton",{staticClass:"ml-3",attrs:{text:"Delete",icon:"remove",outlined:""},on:{click:function(e){return e.stopPropagation(),t.deleteMaterial.apply(null,arguments)}}})],1),i("v-data-table",{staticStyle:{"user-select":"none"},attrs:{headers:t.table.headers,items:t.table.data},scopedSlots:t._u([{key:"body",fn:function(e){var a=e.items;return[i("tbody",t._l(a,(function(e){return i("tr",{key:e.id,class:{"v-data-table-row__selected":e.isSelected,"v-data-table-row":!e.isSelected},on:{click:function(i){return t.selectRow(e)}}},[i("td",[t._v(t._s(e.name))]),i("td",{staticClass:"text-right"},[t._v(t._s(e.purchaseUnit))]),i("td",{staticClass:"text-right"},[t._v(t._s(t.displayFormat(e.purchasePrice,"numeric")))]),i("td",{staticClass:"text-right"},[t._v(t._s(t.displayFormat(e.supplyPrice,"numeric")))]),i("td",{staticClass:"text-right"},[t._v(t._s(t.displayFormat(e.valueAddedTax,"numeric")))]),i("td",{staticClass:"text-right"},[t._v(t._s(e.stockUnit))]),i("td",{staticClass:"text-right"},[t._v(t._s(t.displayFormat(e.stockConversionQuantity,"numeric")))]),i("td",{staticClass:"text-right"},[t._v(t._s(t.displayFormat(e.stockUnitPrice,"decimal")))])])})),0)]}}])})],1),i("MaterialInfoDialog",{attrs:{mode:t.dialog.mode,value:t.dialog.visible,material:t.dialog.material},on:{input:function(e){t.dialog.visible=e},close:t.onCloseDialog}})],1)},r=[],s=(i("a630"),i("3ca3"),i("d81d"),i("b0c0"),i("7db0"),i("d3b7"),i("e9c4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{value:t.visible,"max-width":"600px",persistent:""},on:{input:function(e){t.visible=e}}},[i("v-card",[i("v-card-title",{staticClass:"text-h5 px-9 pt-5",staticStyle:{color:"#9d84bf"}},[t._v(t._s(t.title))]),i("v-card-subtitle",{staticClass:"py-1 px-9"},[t._v(t._s(t.description))]),i("v-card-text",[i("v-form",{ref:"form"},[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{required:"",label:"Name",clearable:"",rules:t.rules.name,type:"text"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-select",{attrs:{items:t.select.purchaseUnit,required:"",label:"Purchas Unit"},model:{value:t.form.purchaseUnit,callback:function(e){t.$set(t.form,"purchaseUnit",e)},expression:"form.purchaseUnit"}}),i("v-select",{attrs:{items:t.select.stockUnit,required:"",label:"Stock Unit"},model:{value:t.form.stockUnit,callback:function(e){t.$set(t.form,"stockUnit",e)},expression:"form.stockUnit"}})],1),i("v-col",{attrs:{cols:"12",md:"8"}},[i("v-text-field",{attrs:{required:"",type:"number","hide-spin-buttons":"",rules:t.rules.purchasePrice,label:"Purchase Price"},on:{change:t.updatePurchasePrice},model:{value:t.form.purchasePrice,callback:function(e){t.$set(t.form,"purchasePrice",e)},expression:"form.purchasePrice"}}),i("v-text-field",{attrs:{required:"",type:"number","hide-spin-buttons":"",rules:t.rules.stockConversionQuantity,label:"Stock Conversion Quantity"},on:{change:t.updateStockConversionQuantity},model:{value:t.form.stockConversionQuantity,callback:function(e){t.$set(t.form,"stockConversionQuantity",e)},expression:"form.stockConversionQuantity"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",md:"12"}},[i("AppCurrencyField",{attrs:{disabled:"",label:"Supply Price"},model:{value:t.form.supplyPrice,callback:function(e){t.$set(t.form,"supplyPrice",t._n(e))},expression:"form.supplyPrice"}}),i("AppCurrencyField",{attrs:{disabled:"",label:"Value Added Tax"},model:{value:t.form.valueAddedTax,callback:function(e){t.$set(t.form,"valueAddedTax",t._n(e))},expression:"form.valueAddedTax"}}),i("v-text-field",{attrs:{disabled:"",type:"number",label:"Stock Unit Price"},model:{value:t.form.stockUnitPrice,callback:function(e){t.$set(t.form,"stockUnitPrice",e)},expression:"form.stockUnitPrice"}})],1)],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),"new"==t.mode?i("AppButton",{attrs:{text:"Save",icon:"done",depressed:"",color:"white"},on:{click:function(e){return e.stopPropagation(),t.onSave.apply(null,arguments)}}}):t._e(),"update"==t.mode?i("AppButton",{attrs:{text:"Update",icon:"done",depressed:"",color:"white"},on:{click:function(e){return e.stopPropagation(),t.onUpdate.apply(null,arguments)}}}):t._e(),i("AppButton",{attrs:{text:"Close",icon:"close",depressed:"",color:"white"},on:{click:function(e){return e.stopPropagation(),t.onClose(!1)}}})],1)],1)],1)}),n=[],o=(i("8ba4"),i("a9e3"),i("c35a"),i("b680"),i("9fb0")),l={props:{value:{type:Boolean,required:!0},mode:{required:!0},material:void 0},watch:{visible:function(t){t&&"update"==this.mode&&(this.form=JSON.parse(JSON.stringify(this.material)))}},computed:{title:{get:function(){switch(this.mode){case"new":return"New Material";case"update":return"Material Info";default:return"Material Info"}}},description:{get:function(){switch(this.mode){case"new":return"you can create new material item";case"update":return"you can modify the material item";default:return"you can see material info"}}},visible:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},data:function(){return{form:{name:void 0,purchaseUnit:void 0,purchasePrice:void 0,stockUnit:void 0,stockConversionQuantity:void 0,supplyPrice:void 0,valueAddedTax:void 0,stockUnitPrice:void 0},rules:{name:[function(t){return(t||"").length>0||"This field is required"}],purchasePrice:[function(t){return t>0||"Purchase price should be over than 0"}],stockConversionQuantity:[function(t){return t>0||"Quantity should be over than 0"}]},select:{purchaseUnit:["Box","Kg","Pack","L"],stockUnit:["Each","g","ml"]}}},methods:{onSave:function(){var t=this.$refs.form.validate();t&&(this.$store.dispatch(o["d"],JSON.parse(JSON.stringify(this.form))),this.onClose(!0))},onUpdate:function(){var t=this.$refs.form.validate();t&&(this.$store.dispatch(o["f"],JSON.parse(JSON.stringify(this.form))),this.onClose(!0))},onClose:function(t){this.visible=!1,this.$refs.form.reset(),this.$emit("close",t)},updatePurchasePrice:function(t){if(Number.isInteger(Number(t))){var e=Math.round(Number(t)/1.1),i=t-e;this.form.supplyPrice=e,this.form.valueAddedTax=i}else this.form.supplyPrice=void 0,this.form.valueAddedTax=void 0;this.updateStockConversionQuantity(this.form.stockConversionQuantity)},updateStockConversionQuantity:function(t){if(Number.isInteger(Number(t))&&Number.isInteger(this.form.supplyPrice)){var e=Number.parseFloat(this.form.supplyPrice/t);this.form.stockUnitPrice=e.toFixed(3)}else this.form.stockUnitPrice=void 0}}},c=l,u=i("2877"),d=i("6544"),h=i.n(d),p=i("b0af"),f=i("99d9"),m=i("62ad"),v=i("a523"),b=i("169a"),g=i("4bd4"),x=i("0fd9"),y=i("b974"),k=i("2fa4"),P=i("8654"),C=Object(u["a"])(c,s,n,!1,null,null,null),w=C.exports;h()(C,{VCard:p["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VCol:m["a"],VContainer:v["a"],VDialog:b["a"],VForm:g["a"],VRow:x["a"],VSelect:y["a"],VSpacer:k["a"],VTextField:P["a"]});var _=i("dc35"),S={components:{MaterialInfoDialog:w},mixins:[_["a"]],data:function(){return{dialog:{mode:void 0,visible:!1,material:void 0},confirm:{visible:!1,text:"",title:""},snackbar:{visible:!1,text:void 0},table:{headers:[{text:"Name",value:"name"},{text:"Purchase Unit",value:"purchaseUnit",width:"160px",align:"end",sortable:!1},{text:"Purchase Price",value:"purchasePrice",width:"200px",align:"end",sortable:!1},{text:"Supply Price",value:"supplyPrice",width:"200px",align:"end",sortable:!1},{text:"Value Added Tax",value:"valueAddedTax",width:"200px",align:"end",sortable:!1},{text:"Stock Unit",value:"stockUnit",width:"160px",align:"end",sortable:!1},{text:"Stock Conversion Quantity",width:"200px",value:"stockConversionQuantity",align:"end",sortable:!1},{text:"Stock Unit Price",width:"200px",value:"stockUnitPrice",align:"end",sortable:!1}],data:[]}}},methods:{selectMaterials:function(){this.table.data=Array.from(this.$store.state.materials.map((function(t){return{isSelected:!1,id:t.id,name:t.name,purchaseUnit:t.purchaseUnit,purchasePrice:t.purchasePrice,supplyPrice:t.supplyPrice,valueAddedTax:t.valueAddedTax,stockUnit:t.stockUnit,stockConversionQuantity:t.stockConversionQuantity,stockUnitPrice:t.stockUnitPrice}})))},selectRow:function(t){this.table.data.map((function(e){return e.isSelected=e.id==t.id}))},openMaterial:function(t){switch(t){case"new":this.dialog.mode="new",this.dialog.visible=!0;break;case"update":var e=this.table.data.find((function(t){return 1==t.isSelected}));void 0==e?this.$snackbar("Please select material item you want to edit"):(this.dialog.mode="update",this.dialog.material=e,this.dialog.visible=!0);break;default:break}},deleteMaterial:function(){var t=this,e=this.table.data.find((function(t){return 1==t.isSelected}));void 0==e?this.$snackbar("Please select material item you want to delete"):this.$confirm({title:"Delete Material Info",message:"Are you sure to delete material info?",callback:function(i){i&&(t.$store.dispatch(o["b"],JSON.parse(JSON.stringify(e))),t.selectMaterials())}})},onCloseDialog:function(t){t&&(this.$snackbar("Done"),this.selectMaterials())}},mounted:function(){this.selectMaterials()}},$=S,U=i("7496"),B=i("8fea"),O=i("71d9"),V=Object(u["a"])($,a,r,!1,null,null,null);e["default"]=V.exports;h()(V,{VApp:U["a"],VContainer:v["a"],VDataTable:B["a"],VSpacer:k["a"],VToolbar:O["a"]})},"4bd4":function(t,e,i){"use strict";var a=i("5530"),r=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("d3b7"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),n=i("3206");e["a"]=Object(r["a"])(s["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"5e23":function(t,e,i){},"71d9":function(t,e,i){"use strict";var a=i("3835"),r=i("5530"),s=(i("a9e3"),i("0481"),i("4069"),i("d3b7"),i("5e23"),i("8dd9")),n=i("adda"),o=i("80d2"),l=i("d9bd");e["a"]=s["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(r["a"])(Object(r["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(r["a"])(Object(r["a"])({},this.measurableStyles),{},{height:Object(o["h"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(a["a"])(e,2),r=i[0],s=i[1];t.$attrs.hasOwnProperty(r)&&Object(l["a"])(r,s,t)}))},methods:{genBackground:function(){var t={height:Object(o["h"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(o["h"])(this.computedContentHeight)}},Object(o["s"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(o["h"])(this.extensionHeight)}},Object(o["s"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"7e12":function(t,e,i){var a=i("da84"),r=i("d039"),s=i("e330"),n=i("577e"),o=i("58a8").trim,l=i("5899"),c=s("".charAt),u=a.parseFloat,d=a.Symbol,h=d&&d.iterator,p=1/u(l+"-0")!==-1/0||h&&!r((function(){u(Object(h))}));t.exports=p?function(t){var e=o(n(t)),i=u(e);return 0===i&&"-"==c(e,0)?-0:i}:u},"8ba4":function(t,e,i){var a=i("23e7"),r=i("eac5");a({target:"Number",stat:!0},{isInteger:r})},c35a:function(t,e,i){var a=i("23e7"),r=i("7e12");a({target:"Number",stat:!0,forced:Number.parseFloat!=r},{parseFloat:r})},dc35:function(t,e,i){"use strict";var a=i("2047");i.d(e,"a",(function(){return a["a"]}))},eac5:function(t,e,i){var a=i("861d"),r=Math.floor;t.exports=Number.isInteger||function(t){return!a(t)&&isFinite(t)&&r(t)===t}}}]);
//# sourceMappingURL=chunk-7151bf6d.af5ec457.js.map