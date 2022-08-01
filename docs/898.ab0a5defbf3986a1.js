"use strict";(self.webpackChunkbookstore_angular=self.webpackChunkbookstore_angular||[]).push([[898],{2898:(U,p,s)=>{s.r(p),s.d(p,{CartModule:()=>J});var u=s(9808),d=s(8604),t=s(4893),m=s(910),i=s(2382),_=s(281),h=s(520),f=s(4004);class C{constructor(n){this.id=n.id,this.title=n.title,this.price=n.price,this.qty=n.qty,this.book_cover=n.book_cover,this.description=n.description}}let v=(()=>{class o{constructor(e,r,c,a,l){this.data=e,this.router=r,this.dialogRef=c,this.cartService=a,this.checkoutService=l,this.items=[]}ngOnInit(){this.handleFillOrder(),this.getOrder()}handleFillOrder(){this.checkoutService.fillOrder().subscribe()}getOrder(){this.checkoutService.getOrder().subscribe(e=>{this.items=e})}routeToMainPage(){this.router.navigate(["main"]),this.dialogRef.close(),this.cartService.clearCart()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.WI),t.Y36(d.F0),t.Y36(_.so),t.Y36(m.N),t.Y36(g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-order-dialogbox"]],decls:5,vars:2,consts:[[1,"orderForm__heading"],[1,"orderForm__goToHomepageButton",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"h1",0),t._uU(1),t.TgZ(2,"h1")(3,"button",1),t.NdJ("click",function(){return r.routeToMainPage()}),t._uU(4),t.qZA()()()),2&e&&(t.xp6(1),t.Oqu(r.data.message),t.xp6(3),t.Oqu(r.data.homepage))},styles:[".orderForm__heading[_ngcontent-%COMP%]{font-size:20px;text-align:center}.orderForm__goToHomepageButton[_ngcontent-%COMP%]{font-size:18px;font-weight:700;width:100%;border:none;padding:10px;color:#fff;background-color:#1f1f1f}"]}),o})(),g=(()=>{class o{constructor(e,r,c,a){this.httpClient=e,this.cartService=r,this.dialog=c,this.formBuilder=a,this.showCheckoutChange=new t.vpe,this.orderItems=this.cartService.getItems(),this.orderUrl="http://localhost:3000/orders",this.httpOptions={headers:new h.WM({"Content-Type":"application/json"})},this.userInfo=this.checkoutOrderForm=this.formBuilder.group({user_email:new i.NI("",[i.kI.required,i.kI.pattern("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.com$")]),confirm_email:new i.NI("",[i.kI.required]),name:new i.NI("",[i.kI.required,i.kI.pattern("^[a-zA-Z]{2,40}(?: +[a-zA-Z]{2,40})+$")])},{validators:this.EmailMatch("user_email","confirm_email")})}getOrder(){return this.httpClient.get(this.orderUrl).pipe((0,f.U)(()=>{let e=[];for(let r of this.orderItems)e.push(new C(r));return e}))}fillOrder(){var e,r;const c=this.orderItems,a=[null===(e=this.userInfo.get(["name"]))||void 0===e?void 0:e.value,null===(r=this.userInfo.get(["user_email"]))||void 0===r?void 0:r.value];return this.httpClient.post(this.orderUrl,{order:c,userInfo:a},this.httpOptions)}EmailMatch(e,r){return c=>{const l=c.controls[r];l.errors&&!l.errors.EmailMatch||l.setErrors(c.controls[e].value!==l.value?{EmailMatch:!0}:null)}}toggleCheckoutForm(){this.showCheckout=!1,this.showCheckoutChange.emit(this.showCheckout)}toggleOrderDialog(){this.dialog.open(v,{data:{message:"Thank you for your order!",homepage:"Homepage"}})}getForm(){return this.checkoutOrderForm}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(h.eN),t.LFG(m.N),t.LFG(_.uw),t.LFG(i.qu))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function x(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"Email required"),t.qZA())}function k(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"Provide valid email address"),t.qZA())}function O(o,n){if(1&o&&(t.TgZ(0,"div",12),t.YNc(1,x,2,0,"div",13),t.YNc(2,k,2,0,"div",13),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.userData.user_email.errors?null:e.userData.user_email.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.userData.user_email.errors?null:e.userData.user_email.errors.pattern)}}function Z(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"Confirmation required"),t.qZA())}function w(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"Provide valid email address "),t.qZA())}function T(o,n){if(1&o&&(t.TgZ(0,"div",12),t.YNc(1,Z,2,0,"div",13),t.YNc(2,w,2,0,"div",13),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.userData.confirm_email.errors?null:e.userData.confirm_email.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.userData.confirm_email.errors?null:e.userData.confirm_email.errors.EmailMatch)}}function y(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"Name is required"),t.qZA())}function M(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"Name is invalid"),t.qZA())}function b(o,n){if(1&o&&(t.TgZ(0,"div",12),t.YNc(1,y,2,0,"div",13),t.YNc(2,M,2,0,"div",13),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.userData.name.errors?null:e.userData.name.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.userData.name.errors?null:e.userData.name.errors.pattern)}}function I(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",1)(1,"form",2)(2,"div",3)(3,"label",4),t._uU(4,"email:"),t.qZA(),t._UZ(5,"input",5),t.qZA(),t.YNc(6,O,3,2,"div",6),t.TgZ(7,"div",3)(8,"label",7),t._uU(9,"confirm email:"),t.qZA(),t._UZ(10,"input",8),t.qZA(),t.YNc(11,T,3,2,"div",6),t.TgZ(12,"div",3)(13,"label",9),t._uU(14,"name/surname:"),t.qZA(),t._UZ(15,"input",10),t.qZA(),t.YNc(16,b,3,2,"div",6),t.qZA(),t.TgZ(17,"button",11),t.NdJ("click",function(){return t.CHM(e),t.oxw().toggleOrderDialog()}),t._uU(18,"Order"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.checkoutOrderForm),t.xp6(5),t.Q6J("ngIf",e.userData.user_email.invalid&&(e.userData.user_email.dirty||e.userData.user_email.touched)),t.xp6(5),t.Q6J("ngIf",e.userData.confirm_email.invalid&&(e.userData.confirm_email.dirty||e.userData.confirm_email.touched)),t.xp6(5),t.Q6J("ngIf",e.userData.name.invalid&&(e.userData.name.dirty||e.userData.name.touched)),t.xp6(1),t.Q6J("disabled",e.userData.name.invalid||e.userData.confirm_email.invalid||e.userData.user_email.invalid)}}let F=(()=>{class o{constructor(e,r){this.dialog=e,this.checkoutService=r,this.showCheckoutChange=new t.vpe,this.checkoutOrderForm=this.checkoutService.getForm()}get userData(){return this.checkoutOrderForm.controls}toggleOrderDialog(){this.checkoutService.toggleOrderDialog()}toggleCheckoutForm(){this.checkoutService.toggleCheckoutForm()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.uw),t.Y36(g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-checkout"]],inputs:{showCheckout:"showCheckout"},outputs:{showCheckoutChange:"showCheckoutChange"},decls:1,vars:1,consts:[["class","checkout_container",4,"ngIf"],[1,"checkout_container"],[3,"formGroup"],[1,"checkout_container__user_information"],[1,"checkout_container__user_information--email"],["type","email","name","user_email","formControlName","user_email"],["class","error",4,"ngIf"],[1,"checkout_container__user_information--confirm_email"],["type","email","name","confirm_email","formControlName","confirm_email"],[1,"checkout_container__user_information--name"],["type","text","formControlName","name"],[1,"checkout_container__orderButton",3,"disabled","click"],[1,"error"],[4,"ngIf"]],template:function(e,r){1&e&&t.YNc(0,I,19,5,"div",0),2&e&&t.Q6J("ngIf",r.showCheckout)},directives:[u.O5,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u],styles:[".checkout_container[_ngcontent-%COMP%]{margin-top:10px;padding:10px;display:flex;flex-direction:column}.checkout_container__user_information[_ngcontent-%COMP%]{display:flex;margin-top:10px}.checkout_container__user_information--confirm_email[_ngcontent-%COMP%]{white-space:nowrap}.checkout_container__user_information[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding:5px 10px;border:1px solid #000;border-right:none;display:inline-block;font-size:12px;background-color:#cacaca}.checkout_container__user_information[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #000;border-left:none;width:100%;outline:none}.checkout_container__orderButton[_ngcontent-%COMP%]{width:100%;font-size:20px;margin-top:15px;padding:10px;border:none;background-color:#e3e3e3}.error[_ngcontent-%COMP%]{flex-grow:2;font-size:10px;color:#d42424;border:solid 1px #d42424;padding:5px;background-color:#ffe2e2}"]}),o})();function q(o,n){1&o&&(t.TgZ(0,"div")(1,"div",2),t._uU(2,"...Cart is Empty..."),t.qZA()())}function A(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",9),t._UZ(2,"img",10),t.TgZ(3,"section",11)(4,"span",12),t._uU(5),t.qZA(),t.TgZ(6,"span",13),t._uU(7),t.ALo(8,"currency"),t.qZA()(),t.TgZ(9,"section",14)(10,"img",15),t.NdJ("click",function(){const a=t.CHM(e).index;return t.oxw(2).removeItem(a)}),t.qZA(),t.TgZ(11,"div",16)(12,"input",17),t.NdJ("ngModelChange",function(c){return t.CHM(e).$implicit.qty=c}),t.qZA()()()()()}if(2&o){const e=n.$implicit,r=t.oxw(2);t.xp6(2),t.s9C("src",e.book_cover,t.LSH),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.Oqu(t.lcZ(8,5,e.price)),t.xp6(3),t.s9C("src",r.closeButton,t.LSH),t.xp6(2),t.Q6J("ngModel",e.qty)}}function P(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.YNc(1,A,13,7,"div",3),t.TgZ(2,"div",4)(3,"div",5)(4,"h1"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"button",6),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return c.showCheckoutForm=!c.showCheckoutForm}),t._uU(8,"Checkout"),t.qZA(),t.TgZ(9,"app-checkout",7),t.NdJ("showCheckoutChange",function(c){return t.CHM(e),t.oxw().showCheckoutForm=c}),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.items),t.xp6(4),t.hij("Total cost: ",t.lcZ(6,3,e.calculateTotalPrice()),""),t.xp6(4),t.Q6J("showCheckout",e.showCheckoutForm)}}const D=[{path:"",component:(()=>{class o{constructor(e){this.cartService=e,this.items=this.cartService.getItems(),this.showCheckoutForm=!1,this.closeButton="assets/svg/xmark-solid.svg"}ngOnInit(){this.getItems()}getItems(){this.items=this.cartService.getItems()}removeItem(e){this.cartService.removeItem(e)}calculateTotalPrice(){let e=0;return this.items.forEach(r=>{e+=r.price*r.qty}),this.totalPrice=e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-cart"]],decls:3,vars:2,consts:[[1,"cart-container"],[4,"ngIf"],[1,"cart_content__empty"],["class","cart_content",4,"ngFor","ngForOf"],[1,"total_cost__container"],[1,"total_cost"],["type","button",3,"click"],[3,"showCheckout","showCheckoutChange"],[1,"cart_content"],[1,"cart_item"],["alt","book",1,"cart_item__book_cover",3,"src"],[1,"cart_item__text"],[1,"cart_item__title"],[1,"cart_item__price"],[1,"cart_item__right"],["alt","close",1,"cart_item__closeButton",3,"src","click"],[1,"cart__book_amount"],["type","number","min","1","max","10","onkeydown","return false",1,"cart__bookAmount",3,"ngModel","ngModelChange"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.YNc(1,q,3,0,"div",1),t.YNc(2,P,10,5,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",!r.items||0===r.items.length),t.xp6(1),t.Q6J("ngIf",r.items&&r.items.length>0))},directives:[u.O5,u.sg,i.qQ,i.Fd,i.wV,i.Fj,i.JJ,i.On,F],pipes:[u.H9],styles:[".cart-container[_ngcontent-%COMP%]{margin-top:55px;display:flex;flex-direction:column;justify-content:center;align-items:center}.cart_content[_ngcontent-%COMP%], .cart_content__empty[_ngcontent-%COMP%]{color:gray;padding:15px}.total_cost__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:auto;padding:15px;justify-content:center;align-items:center}.total_cost[_ngcontent-%COMP%]{width:100%;padding:5px;border-top:2px solid #000;justify-content:center;align-items:center}.total_cost[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:15px}.cart-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:35px;font-size:20px;padding:10px;border:none;background-color:#1f1f1f;color:#fff}.cart_item[_ngcontent-%COMP%]{justify-content:space-between;display:flex;padding:5px;width:auto;height:45%;border:#000 1px solid}.cart_item__text[_ngcontent-%COMP%]{font-size:12px;font-weight:700;flex-grow:2;color:#000;display:flex;flex-direction:column;padding:10px;justify-content:space-between}.cart_item__book_cover[_ngcontent-%COMP%]{width:20%;height:35%}.cart_item__closeButton[_ngcontent-%COMP%]{width:15px;height:20px}.cart__bookAmount[_ngcontent-%COMP%]{width:50px}.cart_item__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end}.cart__book_amount[_ngcontent-%COMP%]{display:flex;font-family:Calibri;font-size:13px;font-weight:700}.cart__book_amount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button{width:15px;height:20px;opacity:1}"]}),o})()}];let N=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(D)],d.Bz]}),o})(),J=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[i.UX,i.u5,u.ez,N]]}),o})()}}]);