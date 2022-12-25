(()=>{"use strict";class l{static formatCurrency(l,e){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:null!=e?e:2}).format(l)}}class e{constructor(l,e){this.address=l,this._value=e}hasValue(){return null!==this._value&&this._value.length>0}value(){return this._value}numeric(){return parseFloat(this._value)}formattedNumerical(){return l.formatCurrency(parseFloat(this.value()))}}class t{constructor(l){this.cells=l}getCell(l){const e=this.cells.filter((e=>e.address===l));return 0==e.length?null:e[0]}}class n{get(l){try{return JSON.parse(localStorage.getItem(l))}catch(e){return localStorage.getItem(l)}}set(l,e){localStorage.setItem(l,e.toString())}init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}storageToRequestBody(l){const e={};for(const t in l)"length"!==t&&("true"!==String(l[t])?"false"!==String(l[t])?isFinite(Number(l[t]))?e[t]=Number(l[t]):e[t]=l[t]:e[t]=0:e[t]=1);return JSON.stringify(e)}}class i{static numberToEncodedLetter(l){if(isNaN(l))return;let e,t=(l=Math.abs(Math.floor(l)))%26,n=l/26;return l<=26?this.numToLetter(l):(n>=1&&(0===t&&n--,e=this.numberToEncodedLetter(n)),0===t&&(t=26),e+this.numToLetter(t))}static numToLetter(l){if(!(l>26||l<0))return 0===l?"":this.alphabet.slice(l-1,l)}}i.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ",fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json?tq=SELECT *").then((l=>l.text())).then((s=>{var a,o,r,c,u,p,d,v,g,m,C,h,f,k,b,L,y,F,w,G,x,_,T,M,S,N,E,P,D,B,I,j,z,J,O,q,K,R,A,Q,V,U,W,H,X,Y,Z,ll,el,tl,nl,il,sl,al,ol,rl,cl,ul,pl,dl,vl,gl,ml,Cl,$l,hl,fl,kl,bl,Ll,yl,Fl,wl,Gl,xl,_l,Tl,Ml;const Sl=JSON.parse(s.substring(s.length-2,0).replace("/*O_o*/\ngoogle.visualization.Query.setResponse(","")).table.rows,Nl=new t(Sl.map(((l,t)=>l.c.map((function(l,n){var s;if(null!==l&&null!==l.v)return new e(`${i.numberToEncodedLetter(n+1)}${t+1}`,null!=(s=l.v)?s:l.f)})).filter((l=>null!=l)))).reduce(((l,e)=>[...l,...e]))),El=new n;let Pl=El.get("appliances");const Dl=Nl.getCell("G7").numeric();$("#course").html(l.formatCurrency(Dl));const Bl=El.get("style");let Il=Boolean(El.get("appliances_bool_total")),jl=Boolean(El.get("furniture_bool")),zl=El.get("space"),Jl=Boolean(El.get("bath")),Ol=Boolean(El.get("shower")),ql=El.get("amount_of_rooms"),Kl=El.get("amount_of_bathrooms"),Rl="",Al="",Ql=El.get("ceiling"),Vl=El.get("hygienic_shower"),Ul=El.get("second_gypsum_layer"),Wl=El.get("floor_screed"),Hl=El.get("heated_flooring"),Xl=El.get("denoising"),Yl=El.get("entrance_doors"),Zl=El.get("conditioning"),le=El.get("flooring"),ee=0,te=0,ne=$("#furnitureList");const ie=1+Nl.getCell("S164").numeric()/100,se=1+Nl.getCell("S120").numeric()/100;let ae=zl<=40?3:zl<=80?4:zl<=100?5:zl<=130?6:zl<=150?7:zl<=175?8:9;"modern"!=Bl&&"neoclassic"!=Bl||(ae+=1),$("#months").html(ae.toString());const oe=Nl.getCell("S44").numeric(),re=Nl.getCell("S42").numeric();"cozy"==Bl?(Rl="I",Al="A"):"japandi"==Bl?(Rl="K",Al="B"):"fusion"==Bl?(Rl="M",Al="C"):"modern"==Bl?(Rl="O",Al="D"):"neoclassic"==Bl&&(Rl="Q",Al="E");let ce,ue,pe,de,ve=0,ge=0;"laminat"==le?(ce="60",pe="91",ge=zl*(zl<=70?201.26:198.81)*oe):"vynil"==le?(ce="61",pe="92",ge=zl*(zl<=70?220.33:161.8)*oe):"parket"==le&&(ce="62",pe="93",ge=zl*(zl<=80?369.96:240.31)*oe),"stretch ceiling"==Ql?(ue="56",de=0,ve=Nl.getCell(`${Rl}56`).numeric()*zl):"gapless"==Ql?(ue="57",de=0,ve=zl*(zl<=60?611.64:zl<=95?548.9:zl<=1e3?581.94:0)*oe*1.65):"gypsum"==Ql&&(ue="58",de=1,ve=zl*(zl<=60?283.08:zl<=95?281.22:zl<=125?338.33:362.47)*1.35*oe);let me=$("#workList"),Ce="",$e=2523*((ql>0?6:0)+(Jl?2:0)+(Ol?2:0)+2*Kl)*oe,he=1974*((ql>0?3:0)+(Jl?1:0)+(Ol?1:0)+2*Kl)*oe,fe=zl*Kl*(zl<=100?83.2:33.98);const ke=Nl.getCell(`${Rl}45`).numeric()*zl;console.log(`inflation: ${oe}`),console.log(`rooms: ${ql}`),console.log(`baths: ${Kl}`),console.log(`bath: ${Jl}`),console.log(`shower: ${Ol}`),console.log(`vents: ${fe}`),console.log(`canalisation: ${he}`),console.log(`water: ${$e}`);const be=[zl*(zl<=60?1142.78:zl<=95?883.87:zl<=125?819.43:925.61)*oe,zl*(zl<=60?700.67:zl<=100?687.36:zl<=130?341.25:317.36)*oe*1.1,Nl.getCell(`${Rl}50`).numeric(),zl*(zl<=50?1e3:990)*oe,140*(zl<=60?Nl.getCell(`${Rl}54`).numeric():zl<=80?50:zl<=120?78:zl<=180?114:162)*("modern"==Bl||"neoclassic"==Bl?1:0),zl*(zl<=60?418.86:zl<=100?416.29:zl<=135?443.73:481.67)*("gypsum"==Ql?1:0)*oe,ve,ge,zl*(zl<=70?114.47:86.84)*oe,zl*(zl<=70?206.59:170)*oe*("japandi"==Bl||"fusion"==Bl?1:0)],Le=[1,Kl,ql+Kl,1,1,de,1,1,1,1],ye=[48,49,50,52,54,53,ue,ce,64,66];ee+=$e*re+((Jl?Kl*Nl.getCell(`${Rl}47`).numeric():0)+(Ol?Kl*Nl.getCell(`${Rl}46`).numeric():0))*re-1750*oe,Ce=Oe(Nl.getCell("F42").value(),"",Math.round($e*re+((Jl?Kl*Nl.getCell(`${Rl}47`).numeric():0)+(Ol?Kl*Nl.getCell(`${Rl}46`).numeric():0))*re-1750*oe)+" грн."),$("#workList").append(Ce),ee+=he*re,Ce=Oe(Nl.getCell("F43").value(),"",Math.round(he*re)+" грн."),$("#workList").append(Ce),ee+=fe*re*oe,Ce=Oe(Nl.getCell("F44").value(),"",Math.round(fe*re*oe)+" грн."),$("#workList").append(Ce),ee+=ke*re,Ce=Oe(Nl.getCell("F45").value(),"",Math.round(ke*re)+" грн."),$("#workList").append(Ce),Ol&&(Ce=Oe(Nl.getCell("F46").value(),"",Nl.getCell(Ke(Bl)+46).numeric().toString()+" грн."),$("#workList").append(Ce)),Jl&&(Ce=Oe(Nl.getCell("F47").value(),"",Nl.getCell(Ke(Bl)+47).numeric().toString()+" грн."),$("#workList").append(Ce));for(let l=0;l<ye.length;l++){const e=be[l]*Le[l]*re;0===e||isNaN(e)||(ee+=e,Ce=Oe(Nl.getCell("F"+ye[l]).value(),"",Math.round(e)+" грн."),$("#workList").append(Ce))}Ce=Oe(Nl.getCell("F66").value(),"",Math.round(.022*ee*re)+" грн."),$("#workList").append(Ce),ee+=.022*ee*re,Ce=Oe(Nl.getCell("F67").value(),"",Math.round((2*ae*1200+3e3+100*zl+120*zl)*re)+" грн."),$("#workList").append(Ce),ee+=(2*ae*1200+3e3+100*zl)*re,$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Комплектуючі та чистові матеріали</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>");let Fe=[Nl.getCell(`${Rl}72`).numeric(),Nl.getCell(`${Rl}73`).numeric(),Nl.getCell(`${Rl}74`).numeric(),Nl.getCell(`${Rl}75`).numeric(),Nl.getCell(`${Rl}76`).numeric(),Nl.getCell(`${Rl}77`).numeric(),Nl.getCell(`${Rl}79`).numeric(),Nl.getCell(`${Rl}80`).numeric(),Nl.getCell(`${Rl}81`).numeric(),Nl.getCell(`${Rl}82`).numeric(),Nl.getCell(`${Rl}83`).numeric(),Nl.getCell(`${Rl}84`).numeric(),Nl.getCell(`${Rl}85`).numeric(),Nl.getCell(`${Rl}86`).numeric(),Nl.getCell(`${Rl}87`).numeric(),Nl.getCell(`${Rl}88`).numeric(),Nl.getCell(`${Rl}89`).numeric(),Nl.getCell(`${Rl+pe}`).numeric(),100*zl*Nl.getCell("S74").numeric()],we=[Kl+ql,35*Kl,.66*zl,.66*zl,.59*zl,zl<=50?42:zl<=90?60:zl<=120?84:90,Kl,Kl,Kl,Kl,Number(Jl),Number(Ol),Number(Ol),Kl,Kl,Kl,Kl,zl<100?zl-7*Kl:zl-10*Kl,1],Ge=[72,73,74,75,76,77,79,80,81,82,83,84,85,86,87,88,89,pe,94];for(let l=0;l<Ge.length;l++){let e=Fe[l]*we[l]*Nl.getCell("S72").numeric();0===e||isNaN(e)||(ee+=e,Ce=Oe(Nl.getCell("F"+Ge[l]).value(),"",Math.round(e)+" грн."),$("#workList").append(Ce))}$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Витрати компанії</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Ce=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${Nl.getCell("F100").value()}</span><span class='list-text amount'>${ae} міс.</span><span class='list-text'> </span></div></div>`,$("#workList").append(Ce);const xe=[Nl.getCell(`${Rl}101`).numeric(),Nl.getCell(`${Rl}102`).numeric()],_e=[ae,ae],Te=[101,102];for(let l=0;l<Te.length;l++){let e=xe[l]*_e[l];ee+=e,Ce=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${Nl.getCell(`F${Te[l]}`).value()}</span><span class='list-text amount'>${Math.round(e/ae)} грн./місяць</span><span class='list-text'>${Math.round(e)} грн.</span></div></div>`,$("#workList").append(Ce)}ee+=Dl*zl*Nl.getCell("G37").numeric()+ae*Nl.getCell(`${Rl}214`).numeric(),Ce=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>\n\t\t${Nl.getCell("F212").value()}\n\t\t\t</span><span class='list-text amount'></span><span class='list-text'>${l.formatCurrency(Dl*Nl.getCell("G37").numeric()*zl)} грн.</span></div></div>`,$("#workList").append(Ce),Ce=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${Nl.getCell("F214").value()}</span><span class='list-text amount'>${Nl.getCell(`${Rl}214`).numeric()} грн./місяць</span><span class='list-text'>${Math.round(ae*Nl.getCell(`${Rl}214`).numeric())} грн.</span></div></div>`,$("#workList").append(Ce),jl&&($("#furnitureList").append('</div><div class="list-option-container"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Кухня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Pe(Nl.getCell("F127").value(),null==(a=Nl.getCell(`${Al}127`))?void 0:a.value(),1,Nl.getCell(`${Rl}127`).numeric(),Nl.getCell("G120").value()),te+=Math.round(Nl.getCell(`${Rl}129`).numeric()*ie)+Math.round(Nl.getCell(`${Rl}128`).numeric()*ie),ne.append('<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'),$("#furnitureList .option-block .list-option-container").last().append(`<span class='name'>${Nl.getCell("F127").value()}\n\t\t\t\t\t\t</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${l.formatCurrency(Nl.getCell(`${Rl}128`).numeric()*ie)} грн.</span>`),ne.append('<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'),$("#furnitureList .option-block .list-option-container").last().append(`<span class='name'>${Nl.getCell("F128").value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${l.formatCurrency(Nl.getCell(`${Rl}129`).numeric()*ie)} грн.</span>`),Pe(Nl.getCell("F130").value(),null==(o=Nl.getCell(`${Al}130`))?void 0:o.value(),1,null==(r=Nl.getCell(`${Rl}130`))?void 0:r.numeric(),null==(c=Nl.getCell("G130"))?void 0:c.value()),Pe(Nl.getCell("F131").value(),null==(u=Nl.getCell(Al+"131"))?void 0:u.value(),1,null==(p=Nl.getCell(`${Rl}131`))?void 0:p.numeric(),null==(d=Nl.getCell("G131"))?void 0:d.value()),Pe(Nl.getCell("F132").value(),null==(v=Nl.getCell(Al+"132"))?void 0:v.value(),1,null==(g=Nl.getCell(`${Rl}132`))?void 0:g.numeric(),null==(m=Nl.getCell("G132"))?void 0:m.value()),Pe(Nl.getCell("F133").value(),null==(C=Nl.getCell(Al+"133"))?void 0:C.value(),4,null==(h=Nl.getCell(`${Rl}133`))?void 0:h.numeric(),null==(f=Nl.getCell("G133"))?void 0:f.value()),Pe(Nl.getCell("F134").value(),null==(k=Nl.getCell(Al+"134"))?void 0:k.value(),1,null==(b=Nl.getCell(`${Rl}134`))?void 0:b.numeric(),null==(L=Nl.getCell("G134"))?void 0:L.value()),qe($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),qe($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Вітальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Pe(Nl.getCell("F138").value(),null==(y=Nl.getCell(Al+"138"))?void 0:y.value(),1,null==(F=Nl.getCell(`${Rl}138`))?void 0:F.numeric(),null==(w=Nl.getCell("G138"))?void 0:w.value()),Pe(Nl.getCell("F139").value(),null==(G=Nl.getCell(Al+"139"))?void 0:G.value(),1,null==(x=Nl.getCell(`${Rl}139`))?void 0:x.numeric(),null==(_=Nl.getCell("G139"))?void 0:_.value()),qe($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),qe($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Спальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Pe(Nl.getCell("F141").value(),null==(T=Nl.getCell(Al+"141"))?void 0:T.value(),1,null==(M=Nl.getCell(`${Rl}141`))?void 0:M.numeric(),null==(S=Nl.getCell("G141"))?void 0:S.value()),Pe(Nl.getCell("F142").value(),null==(N=Nl.getCell(Al+"142"))?void 0:N.value(),1,null==(E=Nl.getCell(`${Rl}142`))?void 0:E.numeric(),null==(P=Nl.getCell("G142"))?void 0:P.value()),Pe(Nl.getCell("F143").value(),null==(D=Nl.getCell(Al+"143"))?void 0:D.value(),2,null==(B=Nl.getCell(`${Rl}143`))?void 0:B.numeric(),null==(I=Nl.getCell("G143"))?void 0:I.value()),Pe(Nl.getCell("F144").value(),null==(j=Nl.getCell(Al+"144"))?void 0:j.value(),1,null==(z=Nl.getCell(`${Rl}144`))?void 0:z.numeric(),null==(J=Nl.getCell("G144"))?void 0:J.value()),Pe(Nl.getCell("F145").value(),null==(O=Nl.getCell(Al+"145"))?void 0:O.value(),1,null==(q=Nl.getCell(`${Rl}145`))?void 0:q.numeric(),null==(K=Nl.getCell("G145"))?void 0:K.value()),Pe(Nl.getCell("F146").value(),null==(R=Nl.getCell(Al+"146"))?void 0:R.value(),1,null==(A=Nl.getCell(`${Rl}146`))?void 0:A.numeric(),null==(Q=Nl.getCell("G146"))?void 0:Q.value()),qe($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Світильники</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Pe(Nl.getCell("F148").value(),null==(V=Nl.getCell(Al+"148"))?void 0:V.value(),Math.ceil(.48*zl),null==(U=Nl.getCell(`${Rl}148`))?void 0:U.numeric(),null==(W=Nl.getCell("G148"))?void 0:W.value()),Pe(Nl.getCell("F149").value(),null==(H=Nl.getCell(Al+"149"))?void 0:H.value(),1,null==(X=Nl.getCell(`${Rl}149`))?void 0:X.numeric(),null==(Y=Nl.getCell("G149"))?void 0:Y.value()),Pe(Nl.getCell("F151").value(),null==(Z=Nl.getCell(Al+"151"))?void 0:Z.value(),1,null==(ll=Nl.getCell(`${Rl}151`))?void 0:ll.numeric(),null==(el=Nl.getCell("G151"))?void 0:el.value()),Pe(Nl.getCell("F153").value(),null==(tl=Nl.getCell(Al+"153"))?void 0:tl.value(),1,null==(nl=Nl.getCell(`${Rl}153`))?void 0:nl.numeric(),null==(il=Nl.getCell("G153"))?void 0:il.value()),Pe(Nl.getCell("F154").value(),null==(sl=Nl.getCell(Al+"154"))?void 0:sl.value(),1,null==(al=Nl.getCell(`${Rl}154`))?void 0:al.numeric(),null==(ol=Nl.getCell("G154"))?void 0:ol.value()),Pe(Nl.getCell("F150").value(),null==(rl=Nl.getCell(Al+"150"))?void 0:rl.value(),ql>1?1:0,null==(cl=Nl.getCell(`${Rl}150`))?void 0:cl.numeric(),null==(ul=Nl.getCell("G150"))?void 0:ul.value()),Pe(Nl.getCell("F152").value(),null==(pl=Nl.getCell(Al+"152"))?void 0:pl.value(),2,null==(dl=Nl.getCell(`${Rl}152`))?void 0:dl.numeric(),null==(vl=Nl.getCell("G152"))?void 0:vl.value()),$("#furnitureList").append('</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Декор</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Pe(Nl.getCell("F156").value(),null==(gl=Nl.getCell(Al+"156"))?void 0:gl.value(),ql,null==(ml=Nl.getCell(`${Rl}156`))?void 0:ml.numeric(),null==(Cl=Nl.getCell("G156"))?void 0:Cl.value()),Pe(Nl.getCell("F157").value(),null==($l=Nl.getCell(Al+"157"))?void 0:$l.value(),ql,null==(hl=Nl.getCell(`${Rl}157`))?void 0:hl.numeric(),null==(fl=Nl.getCell("G157"))?void 0:fl.value()),Pe(Nl.getCell("F158").value(),null==(kl=Nl.getCell(Al+"158"))?void 0:kl.value(),ql,null==(bl=Nl.getCell(`${Rl}158`))?void 0:bl.numeric(),null==(Ll=Nl.getCell("G158"))?void 0:Ll.value()),Pe(Nl.getCell("F159").value(),null==(yl=Nl.getCell(Al+"159"))?void 0:yl.value(),1,null==(Fl=Nl.getCell(`${Rl}159`))?void 0:Fl.numeric(),null==(wl=Nl.getCell("G159"))?void 0:wl.value()),Pe(Nl.getCell("F160").value(),null==(Gl=Nl.getCell(Al+"160"))?void 0:Gl.value(),ql-1,null==(xl=Nl.getCell(`${Rl}160`))?void 0:xl.numeric(),null==(_l=Nl.getCell("G160"))?void 0:_l.value()),qe($("#furnitureList"),Oe(Nl.getCell("F162").value()," ",Math.round(.03*te*ie)+" грн.")),te+=.03*te*ie,qe($("#furnitureList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),qe($("#furnitureList .list-option-container").last(),`<span class='name summary'>Всього по меблях:</span><span class='list-text summary work'>${l.formatCurrency(Math.round(te))} грн.</span>`)),(Vl||Ul||Wl||Hl||Xl||Yl||Zl)&&($("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\"> Опції</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>"));const Me=Nl.getCell("T109").numeric();let Se=[zl*Nl.getCell(`${Rl}109`).numeric()*1.25,+Vl*Nl.getCell(`${Rl}110`).numeric()*1.25,1.25*Nl.getCell(`${Rl}111`).numeric(),1.25*zl*(zl<=60?306.26:zl<=95?246.43:zl<=125?221.2:277.29)*Me,(+Xl+de==2?1:0)*zl*1.25*(zl<=60?60.91:zl<=95?64.57:zl<=125?63.87:66.24)*Me+(+Xl+de===1?1:0)*zl*Nl.getCell(`${Rl}114`).numeric()*1.25,+Xl>0?1.25*zl*(zl<=60?90.02:zl<=95?60.78:zl<=125?58.29:79.01)*Me:0,1.1*Nl.getCell(`${Rl}116`).numeric()+1.25*Nl.getCell(`${Rl}117`).numeric(),Nl.getCell(`${Rl}119`).numeric()*zl*1.25+Nl.getCell(`${Rl}120`).numeric()*se*1.05],Ne=[Wl,Vl?Kl:0,Hl,Ul,Xl,Xl,Yl,Zl],Ee=[109,110,111,112,113,115,116,120];for(let l=0;l<Ee.length;l++){let e=Se[l]*Number(Ne[l]);0===e||isNaN(e)||0==Ne[l]||null==Ee[l]||(ee+=e,qe(me,Oe((null==(Tl=Nl.getCell("F"+Ee[l]))?void 0:Tl.value())+", "+(null==(Ml=Nl.getCell(`${Al}${Ee[l]}`))?void 0:Ml.value()),"",Math.round(e)+" грн.")))}function Pe(e,t,n,i,s){jl&&0!=n&&n&&i&&(te+=i*ie*n,qe(ne,'<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),null!==t?qe($("#furnitureList .option-block .list-option-container").last(),`<span class='name'>${e}, ${t}</span><span class='list-text amount'>${n} ${s}</span><span class='list-text'>${l.formatCurrency(i*n*(1+Nl.getCell("S164").numeric()/100))} грн.</span>`):qe($("#materialsList .option-block .list-option-container").last(),`<span class='name'>${e}</span><span class='list-text'>${n} ${s} </span>`))}Il||$(".comfy-section").toggle(!1),jl||$("#furnitureList").toggle(!1),qe($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),qe($("#workList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${l.formatCurrency(ee)} грн.</span>`),qe($("#materialsList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),qe($("#materialsList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${l.formatCurrency(ee)} грн.</span>`);let De,Be=0,Ie=$("#appliancesList"),je=$("#appliancesListTotal");"gorenje"===Pl?De=[168,9]:"bosch"===Pl?De=[182,10]:"miele"===Pl&&(De=[197,9]);let ze=0;if("undefined"!==Pl){ze=1;for(let e=0;e<De[1];e++)Ie.append('<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'),$("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class='name white'>${Nl.getCell("F"+(De[0]+e)).value()} ${Nl.getCell("E"+(De[0]+e)).value()}</span><span class='list-text white'>${l.formatCurrency(Nl.getCell("D"+(De[0]+e)).numeric())} грн.</span>`),Il&&(je.append('<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),$("#appliancesListTotal .option-block .list-option-container").last().append(`<span class='name'>${Nl.getCell("F"+(De[0]+e)).value()} ${Nl.getCell("E"+(De[0]+e)).value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${l.formatCurrency(Nl.getCell("D"+(De[0]+e)).numeric())} грн.</span>`)),Be+=Nl.getCell("D"+(De[0]+e)).numeric(),Be+=Nl.getCell("G36").numeric(),ze++;if(Il){const e=Nl.getCell("G36").numeric();Be+=e,je.append('<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),$("#appliancesListTotal .option-block .list-option-container").last().append(`<span class='name'>Доставка техніки</span><span class='list-text amount'></span><span class='list-text'>${ze*e} грн.</span>`),Ie.append('<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'),$("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class='name white'>Доставка техніки</span><span class='list-text white'>${ze*e} грн.</span>`),je.append('<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),$("#appliancesTotal").html(l.formatCurrency(Be)),$("#appliancesTotalDiscount").html(l.formatCurrency(.9*Be)),$("#appliancesListTotal .list-option-container").last().append(`<span class='name summary'>Всього по техніці:</span><span class='list-text summary work'>${l.formatCurrency(Be)} грн.</span>`),$("#appliancesListTotal .list-option-container").last().append(`<span class='name summary'><b>Всього по техніці, зі знижкою</b>:</span><span class='list-text summary work'>${l.formatCurrency(.9*Be)} грн.</span>`)}}Il||$("#appliancesListTotal").toggle(!1);const Je=Ke(Bl);function Oe(l,e,t){return`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${l}</span><span class='list-text amount'>${e}</span><span class='list-text'>${t}</span></div></div>`}function qe(l,e){l.append(e)}function Ke(l){let e="J";return"cozy"==l?e="J":"japandi"==l?e="L":"fusion"==l?e="N":"modern"==l?e="P":"neoclassic"==l&&(e="R"),e}const Re=Nl.getCell(`${Je}127`).numeric(),Ae=Nl.getCell(`${Je}128`).numeric(),Qe=Nl.getCell(`${Je}129`).numeric(),Ve=Ae+Re+Qe;$("#kitchenPrice").html(l.formatCurrency(Re)+" грн."),$("#kitchenMontage").html(l.formatCurrency(Ae)+" грн."),$("#kitchenDelivery").html(l.formatCurrency(Qe)+" грн."),$("#kitchenTotal").html(l.formatCurrency(Ve)+" грн"),$("#kitchenTotalPrice").html(l.formatCurrency(Be)+" грн."),jl&&(te=0),$("#kitchenTotalPriceDiscount").html(l.formatCurrency(.9*Be)),$("#discountTotal").html(`<span class='bold-text-7'>${l.formatCurrency(Be-.9*Be)} грн.</span>`),El.get("summedPrice")*Dl<ee?$("#totalPriceTotal").html(l.formatCurrency(ee)+" грн. *"):$("#totalPriceTotal").html(l.formatCurrency(El.get("summedPrice")*Dl)+" грн. *")}))})();