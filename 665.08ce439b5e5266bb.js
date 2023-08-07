"use strict";(self.webpackChunkmy_ng_2=self.webpackChunkmy_ng_2||[]).push([[665],{665:(b,_,m)=>{function h(n,o,e,a,i,c,s){try{var r=n[c](s),u=r.value}catch(T){return void e(T)}r.done?o(u):Promise.resolve(u).then(a,i)}function d(n){return function(){var o=this,e=arguments;return new Promise(function(a,i){var c=n.apply(o,e);function s(u){h(c,a,i,s,r,"next",u)}function r(u){h(c,a,i,s,r,"throw",u)}s(void 0)})}}m.r(_),m.d(_,{routes:()=>S});var t=m(946),p=m(814);const g="example-data";let f=(()=>{class n{getData(){return d(function*(){return JSON.parse(localStorage.getItem(g)??"[[0]]").map(a=>a.map(i=>({value:i})))})()}setData(e){return d(function*(){const a=e.map(i=>i.map(c=>c.value));localStorage.setItem(g,JSON.stringify(a))})()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function C(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"label")(2,"b"),t._uU(3),t.qZA(),t.TgZ(4,"input",2,3),t.NdJ("change",function(){const c=t.CHM(e).index,s=t.MAs(5),r=t.oxw();return t.KtG(r.onChange(c,s.valueAsNumber))}),t.qZA()(),t.TgZ(6,"button",0),t.NdJ("click",function(){const c=t.CHM(e).index,s=t.oxw();return t.KtG(s.delete(c))}),t._uU(7,"Delete"),t.qZA(),t._UZ(8,"br"),t.qZA()}if(2&n){const e=o.$implicit,a=o.index;t.xp6(3),t.hij("Number ",a+1," ::"),t.xp6(1),t.Q6J("value",e.value)}}let v=(()=>{class n{constructor(){this.nonDeleteable=!1,this.deleteSelf=new t.vpe,this.dataChange=new t.vpe}onChange(e,a){this.items[e].value=a,this.dataChange.emit()}add(){this.items.push({value:0}),this.dataChange.emit()}delete(e){this.items.splice(e,1),this.dataChange.emit()}getResult(){return this.items.reduce((e,a)=>e+a.value,0).toLocaleString()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dynamic-input"]],inputs:{items:"items",nonDeleteable:"nonDeleteable"},outputs:{deleteSelf:"deleteSelf",dataChange:"dataChange"},standalone:!0,features:[t.jDz],decls:10,vars:2,consts:[["type","button",3,"click"],[4,"ngFor","ngForOf"],["type","number",3,"value","change"],["elem",""]],template:function(e,a){1&e&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return a.add()}),t._uU(1,"add Input"),t.qZA(),t.YNc(2,C,9,2,"div",1),t.TgZ(3,"label")(4,"b"),t._uU(5,"Result ::"),t.qZA(),t.TgZ(6,"output"),t._uU(7),t.qZA()(),t._UZ(8,"br")(9,"br")),2&e&&(t.xp6(2),t.Q6J("ngForOf",a.items),t.xp6(5),t.Oqu(a.getResult()))},dependencies:[p.ez,p.sg]}),n})();function y(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"button",1),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addSection())}),t._uU(2," Add Section"),t.qZA(),t.TgZ(3,"b"),t._uU(4),t.qZA(),t.TgZ(5,"button",2),t._uU(6," Delete Section"),t.qZA(),t._UZ(7,"hr",3),t.TgZ(8,"app-dynamic-input",4),t.NdJ("dataChange",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.save())}),t.qZA()()}if(2&n){const e=o.$implicit,a=o.index;t.xp6(4),t.hij("Section ",a+1,""),t.xp6(4),t.Q6J("items",e)}}let x=(()=>{class n{constructor(){this.dataChange=new t.vpe}addSection(){this.items.push([{value:0}]),this.dataChange.emit(this.items)}deleteSection(e){this.items.splice(e,1),this.dataChange.emit(this.items)}save(){this.dataChange.emit(this.items)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dynamic-section"]],inputs:{items:"items"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["type","button",3,"click"],["type","button"],["size","3","color","black"],[3,"items","dataChange"]],template:function(e,a){1&e&&t.YNc(0,y,9,2,"div",0),2&e&&t.Q6J("ngForOf",a.items)},dependencies:[p.ez,p.sg,v]}),n})();function D(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-dynamic-section",1),t.NdJ("dataChange",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.onDataChange(i))}),t.qZA()}2&n&&t.Q6J("items",o.ngIf)}let Z=(()=>{class n{constructor(){this.dataService=(0,t.f3M)(f),this.data$=this.dataService.getData()}onDataChange(e){var a=this;return d(function*(){yield a.dataService.setData(e)})()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-example-input"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[3,"items","dataChange",4,"ngIf"],[3,"items","dataChange"]],template:function(e,a){1&e&&(t.YNc(0,D,1,1,"app-dynamic-section",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,a.data$))},dependencies:[p.ez,p.O5,p.Ov,x]}),n})();var l=m(225);const S=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-example"]],standalone:!0,features:[t.jDz],decls:7,vars:0,consts:[["routerLink","input","routerLinkActive","st-active"],["routerLink","display","routerLinkActive","st-active"]],template:function(e,a){1&e&&(t.TgZ(0,"nav")(1,"a",0),t._uU(2,"Input"),t.qZA(),t._UZ(3,"br"),t.TgZ(4,"a",1),t._uU(5,"Display"),t.qZA()(),t._UZ(6,"router-outlet"))},dependencies:[p.ez,l.Bz,l.lC,l.rH,l.Od]}),n})(),children:[{path:"",redirectTo:"input",pathMatch:"full"},{path:"input",component:Z}]}]}}]);