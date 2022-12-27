(()=>{"use strict";class e{static formatCurrency(e,l){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:null!=l?l:2}).format(e)}}class l{constructor(e,l){this.address=e,this._value=l}hasValue(){return null!==this._value&&this._value.length>0}value(){return this._value}numeric(){return parseFloat(this._value)}formattedNumerical(){return e.formatCurrency(parseFloat(this.value()))}}class t{constructor(e){this.cells=e}getCell(e){const l=this.cells.filter((l=>l.address===e));return 0==l.length?null:l[0]}}class n{get(e){try{return JSON.parse(localStorage.getItem(e))}catch(l){return localStorage.getItem(e)}}set(e,l){localStorage.setItem(e,l.toString())}init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}initPortugal(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("demontage",!1),this.set("windows_installtion",0),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}storageToRequestBody(e){const l={};for(const t in e)"length"!==t&&("true"!==String(e[t])?"false"!==String(e[t])?isFinite(Number(e[t]))?l[t]=Number(e[t]):l[t]=e[t]:l[t]=0:l[t]=1);return JSON.stringify(l)}}class i{static numberToEncodedLetter(e){if(isNaN(e))return;let l,t=(e=Math.abs(Math.floor(e)))%26,n=e/26;return e<=26?this.numToLetter(e):(n>=1&&(0===t&&n--,l=this.numberToEncodedLetter(n)),0===t&&(t=26),l+this.numToLetter(t))}static numToLetter(e){if(!(e>26||e<0))return 0===e?"":this.alphabet.slice(e-1,e)}}i.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ",fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json&gid=1219923480").then((e=>e.text())).then((s=>{var a,o,r,c,u,p,d,v,g,m,C,h,f,k,b,y,L,w,F,_,x,G,T,N,M,S,P,D,B,E,j,z,I,J,O,K,R,q,A,Q,V,U,W,H,X,Y,Z,ee,le,te,ne,ie,se,ae,oe,re,ce,ue,pe,de;const ve=JSON.parse(s.substring(s.length-2,0).replace("/*O_o*/\ngoogle.visualization.Query.setResponse(","")).table.rows,ge=new t(ve.map(((e,t)=>e.c.map((function(e,n){var s;if(null!==e&&null!==e.v)return new l(`${i.numberToEncodedLetter(n+1)}${t+1}`,null!=(s=e.v)?s:e.f)})).filter((e=>null!=e)))).reduce(((e,l)=>[...e,...l]))),me=new n;let Ce=me.get("appliances");const $e=ge.getCell("G7").numeric();$("#course").html(e.formatCurrency($e));const he=me.get("style"),fe=yl(he);let ke=Boolean(me.get("appliances_bool_total")),be=Boolean(me.get("furniture_bool")),ye=me.get("space"),Le=Boolean(me.get("bath")),we=Boolean(me.get("shower")),Fe=me.get("amount_of_rooms"),_e=me.get("amount_of_bathrooms"),xe="",Ge="",Te=me.get("ceiling"),Ne=me.get("hygienic_shower"),Me=me.get("second_gypsum_layer"),Se=me.get("demontage"),Pe=(me.get("windows_installtion"),me.get("heated_flooring")),De=me.get("denoising"),Be=me.get("entrance_doors"),Ee=me.get("conditioning"),je=me.get("flooring"),ze=0,Ie=0,Je=$("#furnitureList");const Oe=ge.getCell("T147").numeric(),Ke=1+ge.getCell("S111").numeric()/100;let Re=ye<=40?3:ye<=80?4:ye<=100?5:ye<=130?6:ye<=150?7:ye<=175?8:9;"modern"!=he&&"neoclassic"!=he||(Re+=1),$("#months").html(Re.toString());const qe=ge.getCell("S44").numeric(),Ae=ge.getCell("S42").numeric();"cozy"==he?(xe="I",Ge="A"):"japandi"==he?(xe="K",Ge="B"):"fusion"==he?(xe="M",Ge="C"):"modern"==he?(xe="O",Ge="D"):"neoclassic"==he&&(xe="Q",Ge="E");let Qe,Ve,Ue,We=0;"laminat"==je?(Qe="61",Ve="87",We=ye*(ye<=70?201.26:198.81)*qe):"vynil"==je?(Qe="61",Ve="87",We=ye*(ye<=70?220.33:161.8)*qe):"parket"==je&&(Qe="62",Ve="87",We=ye*(ye<=80?369.96:240.31)*qe);let He=$("#workList"),Xe="",Ye=2523*((Fe>0?6:0)+(Le?2:0)+(we?2:0)+2*_e)*qe,Ze=1974*((Fe>0?3:0)+(Le?1:0)+(we?1:0)+2*_e)*qe,el=ye*_e*(ye<=100?83.2:33.98);const ll=ge.getCell(`${xe}45`).numeric()*ye,tl=[ye*(ye<=60?1142.78:ye<=95?883.87:ye<=125?819.43:925.61)*qe,ye*(ye<=60?700.67:ye<=100?687.36:ye<=130?341.25:317.36)*qe*1.1,ge.getCell(`${xe}50`).numeric(),ye*(ye<=50?1e3:990)*qe,140*(ye<=60?ge.getCell(`${xe}54`).numeric():ye<=80?50:ye<=120?78:ye<=180?114:162)*("modern"==he||"neoclassic"==he?1:0),ye*(ye<=60?418.86:ye<=100?416.29:ye<=135?443.73:481.67)*("gypsum"==Te?1:0)*qe,We,ye*(ye<=70?114.47:86.84)*qe,ye*(ye<=70?206.59:170)*qe*("japandi"==he||"fusion"==he?1:0)],nl=[1,_e,Fe+_e,1,1,Ue,1,1,1],il=[48,49,50,52,54,53,Qe,60,60];ze+=Ye*Ae+((Le?_e*ge.getCell(`${xe}47`).numeric():0)+(we?_e*ge.getCell(`${xe}46`).numeric():0))*Ae-1750*qe,Xe=kl(ge.getCell("F42").value(),"",Math.round(Ye*Ae+((Le?_e*ge.getCell(`${xe}47`).numeric():0)+(we?_e*ge.getCell(`${xe}46`).numeric():0))*Ae-1750*qe)+" грн."),$("#workList").append(Xe),ze+=Ze*Ae,Xe=kl(ge.getCell("F43").value(),"",Math.round(Ze*Ae)+" грн."),$("#workList").append(Xe),ze+=el*Ae*qe,Xe=kl(ge.getCell("F44").value(),"",Math.round(el*Ae*qe)+" грн."),$("#workList").append(Xe),ze+=ll*Ae,Xe=kl(ge.getCell("F45").value(),"",Math.round(ll*Ae)+" грн."),$("#workList").append(Xe),we&&(Xe=kl(ge.getCell("F46").value(),"",ge.getCell(yl(he)+46).numeric().toString()+" грн."),$("#workList").append(Xe)),Le&&(Xe=kl(ge.getCell("F47").value(),"",ge.getCell(yl(he)+47).numeric().toString()+" грн."),$("#workList").append(Xe));for(let e=0;e<il.length;e++){const l=tl[e]*nl[e]*Ae;0===l||isNaN(l)||(ze+=l,Xe=kl(ge.getCell("F"+il[e]).value(),"",Math.round(l)+" грн."),$("#workList").append(Xe))}$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Комплектуючі та чистові матеріали</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>");let sl=[ge.getCell(`${xe}72`).numeric(),ge.getCell(`${xe}73`).numeric(),ge.getCell(`${xe}74`).numeric(),ge.getCell(`${xe}75`).numeric(),ge.getCell(`${xe}77`).numeric(),ge.getCell(`${xe}77`).numeric(),ge.getCell(`${xe}79`).numeric(),ge.getCell(`${xe}80`).numeric(),ge.getCell(`${xe}81`).numeric(),ge.getCell(`${xe}82`).numeric(),ge.getCell(`${xe}85`).numeric(),ge.getCell(`${xe}85`).numeric(),ge.getCell(`${xe}85`).numeric(),ge.getCell(`${xe}86`).numeric(),ge.getCell(`${xe}87`).numeric(),ge.getCell(`${xe}87`).numeric(),ge.getCell(`${xe}87`).numeric(),ge.getCell(`${xe+Ve}`).numeric(),100*ye*ge.getCell("S72").numeric()],al=[_e+Fe,35*_e,.66*ye,.66*ye,.59*ye,ye<=50?42:ye<=90?60:ye<=120?84:90,_e,_e,_e,_e,Number(Le),Number(we),Number(we),_e,_e,_e,_e,ye<100?ye-7*_e:ye-10*_e,1],ol=[72,73,74,75,75,77,79,80,81,82,85,84,85,86,87,88,89,Ve,94];for(let e=0;e<ol.length;e++){let l=sl[e]*al[e]*ge.getCell("S72").numeric()*ge.getCell("S70").numeric();0===l||isNaN(l)||(ze+=l,Xe=kl(ge.getCell("F"+ol[e]).value(),"",Math.round(l)+" грн."),$("#workList").append(Xe))}$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${ge.getCell("F92").value()}</h4><span class='notation amount'>Кількість</span><span class='notation'>Price</span>`),Xe=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${ge.getCell("F93").value()}</span><span class='list-text amount'>${Re} months</span><span class='list-text'> </span></div></div>`,$("#workList").append(Xe);const rl=[41e3*Math.round((Re+1)/5)*qe*Ae/1.35/2/1.5*100*ye,.022*ze*qe,2*Re*1200+3e3+220*ye*Ae*qe],cl=[94,95,96];for(let e=0;e<cl.length;e++){const l=rl[e];ze+=l,Xe=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${ge.getCell(`F${cl[e]}`).value()}</span><span class='list-text amount'>${Math.round(l/Re)} грн./місяць</span><span class='list-text'>${Math.round(l)} €</span></div></div>`,$("#workList").append(Xe)}be&&($("#furnitureList").append('</div><div class="list-option-container"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Кухня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),gl(ge.getCell("F118").value(),null==(a=ge.getCell(`${Ge}118`))?void 0:a.value(),1,ge.getCell(`${xe}118`).numeric(),ge.getCell("G118").value()),Ie+=Math.round(ge.getCell(`${xe}120`).numeric()*Oe)+Math.round(ge.getCell(`${xe}119`).numeric()*Oe),Je.append('<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'),$("#furnitureList .option-block .list-option-container").last().append(`<span class='name'>${ge.getCell("F118").value()}\n\t\t\t\t\t\t</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${e.formatCurrency(ge.getCell(`${xe}119`).numeric()*Oe)} грн.</span>`),Je.append('<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'),$("#furnitureList .option-block .list-option-container").last().append(`<span class='name'>${ge.getCell("F119").value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${e.formatCurrency(ge.getCell(`${xe}120`).numeric()*Oe)} грн.</span>`),bl($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),bl($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Вітальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),gl(ge.getCell("F122").value(),null==(o=ge.getCell(Ge+"122"))?void 0:o.value(),1,null==(r=ge.getCell(`${xe}122`))?void 0:r.numeric(),null==(c=ge.getCell("G122"))?void 0:c.value()),gl(ge.getCell("F123").value(),null==(u=ge.getCell(Ge+"123"))?void 0:u.value(),1,null==(p=ge.getCell(`${xe}123`))?void 0:p.numeric(),null==(d=ge.getCell("G123"))?void 0:d.value()),bl($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),bl($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Спальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),gl(ge.getCell("F125").value(),null==(v=ge.getCell(Ge+"125"))?void 0:v.value(),1,null==(g=ge.getCell(`${xe}125`))?void 0:g.numeric(),null==(m=ge.getCell("G125"))?void 0:m.value()),gl(ge.getCell("F126").value(),null==(C=ge.getCell(Ge+"126"))?void 0:C.value(),1,null==(h=ge.getCell(`${xe}126`))?void 0:h.numeric(),null==(f=ge.getCell("G126"))?void 0:f.value()),gl(ge.getCell("F127").value(),null==(k=ge.getCell(Ge+"127"))?void 0:k.value(),2,null==(b=ge.getCell(`${xe}127`))?void 0:b.numeric(),null==(y=ge.getCell("G127"))?void 0:y.value()),gl(ge.getCell("F128").value(),null==(L=ge.getCell(Ge+"128"))?void 0:L.value(),1,null==(w=ge.getCell(`${xe}128`))?void 0:w.numeric(),null==(F=ge.getCell("G128"))?void 0:F.value()),gl(ge.getCell("F129").value(),null==(_=ge.getCell(Ge+"129"))?void 0:_.value(),1,null==(x=ge.getCell(`${xe}129`))?void 0:x.numeric(),null==(G=ge.getCell("G129"))?void 0:G.value()),bl($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Світильники</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),gl(ge.getCell("F131").value(),null==(T=ge.getCell(Ge+"131"))?void 0:T.value(),Math.ceil(.48*ye),null==(N=ge.getCell(`${xe}131`))?void 0:N.numeric(),null==(M=ge.getCell("G131"))?void 0:M.value()),gl(ge.getCell("F132").value(),null==(S=ge.getCell(Ge+"132"))?void 0:S.value(),1,null==(P=ge.getCell(`${xe}132`))?void 0:P.numeric(),null==(D=ge.getCell("G132"))?void 0:D.value()),gl(ge.getCell("F134").value(),null==(B=ge.getCell(Ge+"134"))?void 0:B.value(),1,null==(E=ge.getCell(`${xe}134`))?void 0:E.numeric(),null==(j=ge.getCell("G134"))?void 0:j.value()),gl(ge.getCell("F136").value(),null==(z=ge.getCell(Ge+"136"))?void 0:z.value(),1,null==(I=ge.getCell(`${xe}136`))?void 0:I.numeric(),null==(J=ge.getCell("G136"))?void 0:J.value()),gl(ge.getCell("F137").value(),null==(O=ge.getCell(Ge+"137"))?void 0:O.value(),1,null==(K=ge.getCell(`${xe}137`))?void 0:K.numeric(),null==(R=ge.getCell("G137"))?void 0:R.value()),gl(ge.getCell("F133").value(),null==(q=ge.getCell(Ge+"133"))?void 0:q.value(),Fe>1?1:0,null==(A=ge.getCell(`${xe}133`))?void 0:A.numeric(),null==(Q=ge.getCell("G133"))?void 0:Q.value()),gl(ge.getCell("F135").value(),null==(V=ge.getCell(Ge+"135"))?void 0:V.value(),2,null==(U=ge.getCell(`${xe}135`))?void 0:U.numeric(),null==(W=ge.getCell("G135"))?void 0:W.value()),$("#furnitureList").append('</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Декор</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),gl(ge.getCell("F139").value(),null==(H=ge.getCell(Ge+"139"))?void 0:H.value(),Fe,null==(X=ge.getCell(`${xe}139`))?void 0:X.numeric(),null==(Y=ge.getCell("G139"))?void 0:Y.value()),gl(ge.getCell("F140").value(),null==(Z=ge.getCell(Ge+"140"))?void 0:Z.value(),Fe,null==(ee=ge.getCell(`${xe}140`))?void 0:ee.numeric(),null==(le=ge.getCell("G140"))?void 0:le.value()),gl(ge.getCell("F141").value(),null==(te=ge.getCell(Ge+"141"))?void 0:te.value(),Fe,null==(ne=ge.getCell(`${xe}141`))?void 0:ne.numeric(),null==(ie=ge.getCell("G141"))?void 0:ie.value()),gl(ge.getCell("F142").value(),null==(se=ge.getCell(Ge+"142"))?void 0:se.value(),1,null==(ae=ge.getCell(`${xe}142`))?void 0:ae.numeric(),null==(oe=ge.getCell("G142"))?void 0:oe.value()),gl(ge.getCell("F143").value(),null==(re=ge.getCell(Ge+"143"))?void 0:re.value(),Fe-1,null==(ce=ge.getCell(`${xe}143`))?void 0:ce.numeric(),null==(ue=ge.getCell("G143"))?void 0:ue.value()),bl($("#furnitureList"),kl(ge.getCell("F144").value()," ",Math.round(.03*Ie*Oe)+" грн.")),Ie+=.03*Ie*Oe,bl($("#furnitureList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),bl($("#furnitureList .list-option-container").last(),`<span class='name summary'>Всього по меблях:</span><span class='list-text summary work'>${e.formatCurrency(Math.round(Ie))} грн.</span>`)),(Ne||Me||Se||Pe||De||Be||Ee)&&($("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\"> Опції</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>"));const ul=ge.getCell("T109").numeric();let pl=[ye*ge.getCell(`${xe}103`).numeric()*1.25,+Ne*ge.getCell(`${xe}104`).numeric()*1.25,1.25*ge.getCell(`${xe}105`).numeric(),1.25*ye*(ye<=60?306.26:ye<=95?246.43:ye<=125?221.2:277.29)*ul,(+De+Ue==2?1:0)*ye*1.25*(ye<=60?60.91:ye<=95?64.57:ye<=125?63.87:66.24)*ul+(+De+Ue===1?1:0)*ye*ge.getCell(`${xe}105`).numeric()*1.25,+De>0?1.25*ye*(ye<=60?90.02:ye<=95?60.78:ye<=125?58.29:79.01)*ul:0,1.1*ge.getCell(`${xe}104`).numeric()+1.25*ge.getCell(`${xe}104`).numeric(),ge.getCell(`${xe}104`).numeric()*ye*1.25+ge.getCell(`${xe}104`).numeric()*Ke*1.05],dl=[1,Ne?_e:0,Pe,Me,De,De,Be,Ee],vl=[103,104,105,106,107,108,110,111];for(let e=0;e<vl.length;e++){let l=pl[e]*Number(dl[e]);0===l||isNaN(l)||0==dl[e]||null==vl[e]||(ze+=l,bl(He,kl((null==(pe=ge.getCell("F"+vl[e]))?void 0:pe.value())+", "+(null==(de=ge.getCell(`${Ge}${vl[e]}`))?void 0:de.value()),"",Math.round(l)+" грн.")))}function gl(l,t,n,i,s){be&&0!=n&&n&&i&&(Ie+=i*Oe*n,bl(Je,'<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),null!==t?bl($("#furnitureList .option-block .list-option-container").last(),`<span class='name'>${l}, ${t}</span><span class='list-text amount'>${n} ${s}</span><span class='list-text'>${e.formatCurrency(i*n*ge.getCell("T147").numeric())} грн.</span>`):bl($("#materialsList .option-block .list-option-container").last(),`<span class='name'>${l}</span><span class='list-text'>${n} ${s} </span>`))}ke||$(".comfy-section").toggle(!1),be||$("#furnitureList").toggle(!1),bl($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),bl($("#workList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${e.formatCurrency(ze)} грн.</span>`),bl($("#materialsList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),bl($("#materialsList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${e.formatCurrency(ze)} грн.</span>`);let ml,Cl=0,$l=$("#appliancesList"),hl=$("#appliancesListTotal");"gorenje"===Ce?ml=[168,9]:"bosch"===Ce?ml=[182,10]:"miele"===Ce&&(ml=[197,9]);let fl=0;if("undefined"!==Ce){fl=1;for(let l=0;l<ml[1];l++)$l.append('<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'),$("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class='name white'>${ge.getCell("F"+(ml[0]+l)).value()} ${ge.getCell("E"+(ml[0]+l)).value()}</span><span class='list-text white'>${e.formatCurrency(ge.getCell("D"+(ml[0]+l)).numeric())} грн.</span>`),ke&&(hl.append('<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),$("#appliancesListTotal .option-block .list-option-container").last().append(`<span class='name'>${ge.getCell("F"+(ml[0]+l)).value()} ${ge.getCell("E"+(ml[0]+l)).value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${e.formatCurrency(ge.getCell("D"+(ml[0]+l)).numeric())} грн.</span>`)),Cl+=ge.getCell("D"+(ml[0]+l)).numeric(),Cl+=ge.getCell("G36").numeric(),fl++;if(ke){const l=ge.getCell("G36").numeric();Cl+=l,hl.append('<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),$("#appliancesListTotal .option-block .list-option-container").last().append(`<span class='name'>Доставка техніки</span><span class='list-text amount'></span><span class='list-text'>${fl*l} грн.</span>`),$l.append('<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'),$("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class='name white'>Доставка техніки</span><span class='list-text white'>${fl*l} грн.</span>`),hl.append('<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),$("#appliancesTotal").html(e.formatCurrency(Cl)),$("#appliancesTotalDiscount").html(e.formatCurrency(.9*Cl)),$("#appliancesListTotal .list-option-container").last().append(`<span class='name summary'>Всього по техніці:</span><span class='list-text summary work'>${e.formatCurrency(Cl)} грн.</span>`),$("#appliancesListTotal .list-option-container").last().append(`<span class='name summary'><b>Всього по техніці, зі знижкою</b>:</span><span class='list-text summary work'>${e.formatCurrency(.9*Cl)} грн.</span>`)}}function kl(e,l,t){return`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${e}</span><span class='list-text amount'>${l}</span><span class='list-text'>${t}</span></div></div>`}function bl(e,l){e.append(l)}function yl(e){let l="J";return"cozy"==e?l="J":"japandi"==e?l="L":"fusion"==e?l="N":"modern"==e?l="P":"neoclassic"==e&&(l="R"),l}ke||$("#appliancesListTotal").toggle(!1);const Ll=ge.getCell(`${fe}118`).numeric(),wl=ge.getCell(`${fe}119`).numeric(),Fl=ge.getCell(`${fe}120`).numeric(),_l=wl+Ll+Fl;$("#kitchenPrice").html(e.formatCurrency(Ll)+" грн."),$("#kitchenMontage").html(e.formatCurrency(wl)+" грн."),$("#kitchenDelivery").html(e.formatCurrency(Fl)+" грн."),$("#kitchenTotal").html(e.formatCurrency(_l)+" грн"),$("#kitchenTotalPrice").html(e.formatCurrency(Cl)+" грн."),be&&(Ie=0),$("#kitchenTotalPriceDiscount").html(e.formatCurrency(.9*Cl)),$("#discountTotal").html(`<span class='bold-text-7'>${e.formatCurrency(Cl-.9*Cl)} грн.</span>`),me.get("summedPrice")*$e<ze?$("#totalPriceTotal").html(e.formatCurrency(ze)+" грн. *"):$("#totalPriceTotal").html(e.formatCurrency(me.get("summedPrice")*$e)+" грн. *")}))})();