(()=>{"use strict";class l{static formatCurrency(l,e){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:null!=e?e:2}).format(l)}}class e{constructor(l,e){this.address=l,this._value=e}hasValue(){return null!==this._value&&this._value.length>0}value(){return this._value}numeric(){return parseFloat(this._value)}formattedNumerical(){return l.formatCurrency(parseFloat(this.value()))}}class t{constructor(l){this.cells=l}getCell(l){const e=this.cells.filter((e=>e.address===l));return 0==e.length?null:e[0]}}class n{get(l){try{return JSON.parse(localStorage.getItem(l))}catch(e){return localStorage.getItem(l)}}set(l,e){localStorage.setItem(l,e.toString())}init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}initPortugal(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("demontage",!1),this.set("windows_installtion",0),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}storageToRequestBody(l){const e={};for(const t in l)"length"!==t&&("true"!==String(l[t])?"false"!==String(l[t])?isFinite(Number(l[t]))?e[t]=Number(l[t]):e[t]=l[t]:e[t]=0:e[t]=1);return JSON.stringify(e)}}class i{static numberToEncodedLetter(l){if(isNaN(l))return;let e,t=(l=Math.abs(Math.floor(l)))%26,n=l/26;return l<=26?this.numToLetter(l):(n>=1&&(0===t&&n--,e=this.numberToEncodedLetter(n)),0===t&&(t=26),e+this.numToLetter(t))}static numToLetter(l){if(!(l>26||l<0))return 0===l?"":this.alphabet.slice(l-1,l)}}i.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ",fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json&gid=1219923480").then((l=>l.text())).then((s=>{var a,o,r,u,c,p,d,v,g,m,C,h,f,k,b,y,L,F,w,_,G,x,T,M,N,S,P,D,B,E,j,z,I,J,O,K,R,q,A,Q,V,U,W,H,X,Y,Z,ll,el,tl,nl,il,sl,al,ol,rl,ul,cl,pl,dl,vl,gl,ml,Cl,$l,hl,fl,kl,bl,yl,Ll,Fl,wl,_l,Gl,xl,Tl,Ml;const Nl=JSON.parse(s.substring(s.length-2,0).replace("/*O_o*/\ngoogle.visualization.Query.setResponse(","")).table.rows,Sl=new t(Nl.map(((l,t)=>l.c.map((function(l,n){var s;if(null!==l&&null!==l.v)return new e(`${i.numberToEncodedLetter(n+1)}${t+1}`,null!=(s=l.v)?s:l.f)})).filter((l=>null!=l)))).reduce(((l,e)=>[...l,...e]))),Pl=new n;let Dl=Pl.get("appliances");const Bl=Sl.getCell("G7").numeric();$("#course").html(l.formatCurrency(Bl));const El=Pl.get("style"),jl=Ke(El);let zl=Boolean(Pl.get("appliances_bool_total")),Il=Boolean(Pl.get("furniture_bool")),Jl=Pl.get("space"),Ol=Boolean(Pl.get("bath")),Kl=Boolean(Pl.get("shower")),Rl=Pl.get("amount_of_rooms"),ql=Pl.get("amount_of_bathrooms"),Al="",Ql="",Vl=Pl.get("ceiling"),Ul=Pl.get("hygienic_shower"),Wl=Pl.get("second_gypsum_layer"),Hl=Pl.get("floor_screed"),Xl=Pl.get("heated_flooring"),Yl=Pl.get("denoising"),Zl=Pl.get("entrance_doors"),le=Pl.get("conditioning"),ee=Pl.get("flooring"),te=0,ne=0,ie=$("#furnitureList");const se=Sl.getCell("T147").numeric(),ae=1+Sl.getCell("S111").numeric()/100;let oe=Jl<=40?3:Jl<=80?4:Jl<=100?5:Jl<=130?6:Jl<=150?7:Jl<=175?8:9;"modern"!=El&&"neoclassic"!=El||(oe+=1),$("#months").html(oe.toString());const re=Sl.getCell("S44").numeric(),ue=Sl.getCell("S42").numeric();"cozy"==El?(Al="I",Ql="A"):"japandi"==El?(Al="K",Ql="B"):"fusion"==El?(Al="M",Ql="C"):"modern"==El?(Al="O",Ql="D"):"neoclassic"==El&&(Al="Q",Ql="E");let ce,pe,de,ve,ge=0,me=0;"laminat"==ee?(ce="60",de="91",me=Jl*(Jl<=70?201.26:198.81)*re):"vynil"==ee?(ce="61",de="92",me=Jl*(Jl<=70?220.33:161.8)*re):"parket"==ee&&(ce="62",de="93",me=Jl*(Jl<=80?369.96:240.31)*re),"stretch ceiling"==Vl?(pe="56",ve=0,ge=Sl.getCell(`${Al}56`).numeric()*Jl):"gapless"==Vl?(pe="57",ve=0,ge=Jl*(Jl<=60?611.64:Jl<=95?548.9:Jl<=1e3?581.94:0)*re*1.65):"gypsum"==Vl&&(pe="58",ve=1,ge=Jl*(Jl<=60?283.08:Jl<=95?281.22:Jl<=125?338.33:362.47)*1.35*re);let Ce=$("#workList"),$e="",he=2523*((Rl>0?6:0)+(Ol?2:0)+(Kl?2:0)+2*ql)*re,fe=1974*((Rl>0?3:0)+(Ol?1:0)+(Kl?1:0)+2*ql)*re,ke=Jl*ql*(Jl<=100?83.2:33.98);const be=Sl.getCell(`${Al}45`).numeric()*Jl;console.log(`inflation: ${re}`),console.log(`rooms: ${Rl}`),console.log(`baths: ${ql}`),console.log(`bath: ${Ol}`),console.log(`shower: ${Kl}`),console.log(`vents: ${ke}`),console.log(`canalisation: ${fe}`),console.log(`water: ${he}`);const ye=[Jl*(Jl<=60?1142.78:Jl<=95?883.87:Jl<=125?819.43:925.61)*re,Jl*(Jl<=60?700.67:Jl<=100?687.36:Jl<=130?341.25:317.36)*re*1.1,Sl.getCell(`${Al}50`).numeric(),Jl*(Jl<=50?1e3:990)*re,140*(Jl<=60?Sl.getCell(`${Al}54`).numeric():Jl<=80?50:Jl<=120?78:Jl<=180?114:162)*("modern"==El||"neoclassic"==El?1:0),Jl*(Jl<=60?418.86:Jl<=100?416.29:Jl<=135?443.73:481.67)*("gypsum"==Vl?1:0)*re,ge,me,Jl*(Jl<=70?114.47:86.84)*re,Jl*(Jl<=70?206.59:170)*re*("japandi"==El||"fusion"==El?1:0)],Le=[1,ql,Rl+ql,1,1,ve,1,1,1,1],Fe=[48,49,50,52,54,53,pe,ce,64,66];te+=he*ue+((Ol?ql*Sl.getCell(`${Al}47`).numeric():0)+(Kl?ql*Sl.getCell(`${Al}46`).numeric():0))*ue-1750*re,$e=Je(Sl.getCell("F42").value(),"",Math.round(he*ue+((Ol?ql*Sl.getCell(`${Al}47`).numeric():0)+(Kl?ql*Sl.getCell(`${Al}46`).numeric():0))*ue-1750*re)+" грн."),$("#workList").append($e),te+=fe*ue,$e=Je(Sl.getCell("F43").value(),"",Math.round(fe*ue)+" грн."),$("#workList").append($e),te+=ke*ue*re,$e=Je(Sl.getCell("F44").value(),"",Math.round(ke*ue*re)+" грн."),$("#workList").append($e),te+=be*ue,$e=Je(Sl.getCell("F45").value(),"",Math.round(be*ue)+" грн."),$("#workList").append($e),Kl&&($e=Je(Sl.getCell("F46").value(),"",Sl.getCell(Ke(El)+46).numeric().toString()+" грн."),$("#workList").append($e)),Ol&&($e=Je(Sl.getCell("F47").value(),"",Sl.getCell(Ke(El)+47).numeric().toString()+" грн."),$("#workList").append($e));for(let l=0;l<Fe.length;l++){const e=ye[l]*Le[l]*ue;0===e||isNaN(e)||(te+=e,$e=Je(Sl.getCell("F"+Fe[l]).value(),"",Math.round(e)+" грн."),$("#workList").append($e))}$e=Je(Sl.getCell("F66").value(),"",Math.round(.022*te*ue)+" грн."),$("#workList").append($e),te+=.022*te*ue,$e=Je(Sl.getCell("F67").value(),"",Math.round((2*oe*1200+3e3+100*Jl+120*Jl)*ue)+" грн."),$("#workList").append($e),te+=(2*oe*1200+3e3+100*Jl)*ue,$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Комплектуючі та чистові матеріали</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>");let we=[Sl.getCell(`${Al}72`).numeric(),Sl.getCell(`${Al}73`).numeric(),Sl.getCell(`${Al}74`).numeric(),Sl.getCell(`${Al}75`).numeric(),Sl.getCell(`${Al}76`).numeric(),Sl.getCell(`${Al}77`).numeric(),Sl.getCell(`${Al}79`).numeric(),Sl.getCell(`${Al}80`).numeric(),Sl.getCell(`${Al}81`).numeric(),Sl.getCell(`${Al}82`).numeric(),Sl.getCell(`${Al}83`).numeric(),Sl.getCell(`${Al}84`).numeric(),Sl.getCell(`${Al}85`).numeric(),Sl.getCell(`${Al}86`).numeric(),Sl.getCell(`${Al}87`).numeric(),Sl.getCell(`${Al}88`).numeric(),Sl.getCell(`${Al}89`).numeric(),Sl.getCell(`${Al+de}`).numeric(),100*Jl*Sl.getCell("S74").numeric()],_e=[ql+Rl,35*ql,.66*Jl,.66*Jl,.59*Jl,Jl<=50?42:Jl<=90?60:Jl<=120?84:90,ql,ql,ql,ql,Number(Ol),Number(Kl),Number(Kl),ql,ql,ql,ql,Jl<100?Jl-7*ql:Jl-10*ql,1],Ge=[72,73,74,75,76,77,79,80,81,82,83,84,85,86,87,88,89,de,94];for(let l=0;l<Ge.length;l++){let e=we[l]*_e[l]*Sl.getCell("S72").numeric()*Sl.getCell("S70").numeric();0===e||isNaN(e)||(te+=e,$e=Je(Sl.getCell("F"+Ge[l]).value(),"",Math.round(e)+" грн."),$("#workList").append($e))}$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${Sl.getCell("F92").value()}</h4><span class='notation amount'>Кількість</span><span class='notation'>Price</span>`),$e=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${Sl.getCell("F93").value()}</span><span class='list-text amount'>${oe} months</span><span class='list-text'> </span></div></div>`,$("#workList").append($e);const xe=[41e3*Math.round((oe+1)/5)*re*ue/1.35/2/1.5*100*Jl,.022*te*re,2*oe*1200+3e3+220*Jl*ue*re],Te=[94,95,96];for(let l=0;l<Te.length;l++){const e=xe[l];te+=e,$e=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${Sl.getCell(`F${Te[l]}`).value()}</span><span class='list-text amount'>${Math.round(e/oe)} грн./місяць</span><span class='list-text'>${Math.round(e)} €</span></div></div>`,$("#workList").append($e)}Il&&($("#furnitureList").append('</div><div class="list-option-container"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Кухня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),De(Sl.getCell("F127").value(),null==(a=Sl.getCell(`${Ql}127`))?void 0:a.value(),1,Sl.getCell(`${Al}127`).numeric(),Sl.getCell("G120").value()),ne+=Math.round(Sl.getCell(`${Al}129`).numeric()*se)+Math.round(Sl.getCell(`${Al}128`).numeric()*se),ie.append('<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'),$("#furnitureList .option-block .list-option-container").last().append(`<span class='name'>${Sl.getCell("F127").value()}\n\t\t\t\t\t\t</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${l.formatCurrency(Sl.getCell(`${Al}128`).numeric()*se)} грн.</span>`),ie.append('<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'),$("#furnitureList .option-block .list-option-container").last().append(`<span class='name'>${Sl.getCell("F128").value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${l.formatCurrency(Sl.getCell(`${Al}129`).numeric()*se)} грн.</span>`),De(Sl.getCell("F130").value(),null==(o=Sl.getCell(`${Ql}130`))?void 0:o.value(),1,null==(r=Sl.getCell(`${Al}130`))?void 0:r.numeric(),null==(u=Sl.getCell("G130"))?void 0:u.value()),De(Sl.getCell("F131").value(),null==(c=Sl.getCell(Ql+"131"))?void 0:c.value(),1,null==(p=Sl.getCell(`${Al}131`))?void 0:p.numeric(),null==(d=Sl.getCell("G131"))?void 0:d.value()),De(Sl.getCell("F132").value(),null==(v=Sl.getCell(Ql+"132"))?void 0:v.value(),1,null==(g=Sl.getCell(`${Al}132`))?void 0:g.numeric(),null==(m=Sl.getCell("G132"))?void 0:m.value()),De(Sl.getCell("F133").value(),null==(C=Sl.getCell(Ql+"133"))?void 0:C.value(),4,null==(h=Sl.getCell(`${Al}133`))?void 0:h.numeric(),null==(f=Sl.getCell("G133"))?void 0:f.value()),De(Sl.getCell("F134").value(),null==(k=Sl.getCell(Ql+"134"))?void 0:k.value(),1,null==(b=Sl.getCell(`${Al}134`))?void 0:b.numeric(),null==(y=Sl.getCell("G134"))?void 0:y.value()),Oe($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),Oe($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Вітальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),De(Sl.getCell("F138").value(),null==(L=Sl.getCell(Ql+"138"))?void 0:L.value(),1,null==(F=Sl.getCell(`${Al}138`))?void 0:F.numeric(),null==(w=Sl.getCell("G138"))?void 0:w.value()),De(Sl.getCell("F139").value(),null==(_=Sl.getCell(Ql+"139"))?void 0:_.value(),1,null==(G=Sl.getCell(`${Al}139`))?void 0:G.numeric(),null==(x=Sl.getCell("G139"))?void 0:x.value()),Oe($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),Oe($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Спальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),De(Sl.getCell("F141").value(),null==(T=Sl.getCell(Ql+"141"))?void 0:T.value(),1,null==(M=Sl.getCell(`${Al}141`))?void 0:M.numeric(),null==(N=Sl.getCell("G141"))?void 0:N.value()),De(Sl.getCell("F142").value(),null==(S=Sl.getCell(Ql+"142"))?void 0:S.value(),1,null==(P=Sl.getCell(`${Al}142`))?void 0:P.numeric(),null==(D=Sl.getCell("G142"))?void 0:D.value()),De(Sl.getCell("F143").value(),null==(B=Sl.getCell(Ql+"143"))?void 0:B.value(),2,null==(E=Sl.getCell(`${Al}143`))?void 0:E.numeric(),null==(j=Sl.getCell("G143"))?void 0:j.value()),De(Sl.getCell("F144").value(),null==(z=Sl.getCell(Ql+"144"))?void 0:z.value(),1,null==(I=Sl.getCell(`${Al}144`))?void 0:I.numeric(),null==(J=Sl.getCell("G144"))?void 0:J.value()),De(Sl.getCell("F145").value(),null==(O=Sl.getCell(Ql+"145"))?void 0:O.value(),1,null==(K=Sl.getCell(`${Al}145`))?void 0:K.numeric(),null==(R=Sl.getCell("G145"))?void 0:R.value()),De(Sl.getCell("F146").value(),null==(q=Sl.getCell(Ql+"146"))?void 0:q.value(),1,null==(A=Sl.getCell(`${Al}146`))?void 0:A.numeric(),null==(Q=Sl.getCell("G146"))?void 0:Q.value()),Oe($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Світильники</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),De(Sl.getCell("F148").value(),null==(V=Sl.getCell(Ql+"148"))?void 0:V.value(),Math.ceil(.48*Jl),null==(U=Sl.getCell(`${Al}148`))?void 0:U.numeric(),null==(W=Sl.getCell("G148"))?void 0:W.value()),De(Sl.getCell("F149").value(),null==(H=Sl.getCell(Ql+"149"))?void 0:H.value(),1,null==(X=Sl.getCell(`${Al}149`))?void 0:X.numeric(),null==(Y=Sl.getCell("G149"))?void 0:Y.value()),De(Sl.getCell("F151").value(),null==(Z=Sl.getCell(Ql+"151"))?void 0:Z.value(),1,null==(ll=Sl.getCell(`${Al}151`))?void 0:ll.numeric(),null==(el=Sl.getCell("G151"))?void 0:el.value()),De(Sl.getCell("F153").value(),null==(tl=Sl.getCell(Ql+"153"))?void 0:tl.value(),1,null==(nl=Sl.getCell(`${Al}153`))?void 0:nl.numeric(),null==(il=Sl.getCell("G153"))?void 0:il.value()),De(Sl.getCell("F154").value(),null==(sl=Sl.getCell(Ql+"154"))?void 0:sl.value(),1,null==(al=Sl.getCell(`${Al}154`))?void 0:al.numeric(),null==(ol=Sl.getCell("G154"))?void 0:ol.value()),De(Sl.getCell("F150").value(),null==(rl=Sl.getCell(Ql+"150"))?void 0:rl.value(),Rl>1?1:0,null==(ul=Sl.getCell(`${Al}150`))?void 0:ul.numeric(),null==(cl=Sl.getCell("G150"))?void 0:cl.value()),De(Sl.getCell("F152").value(),null==(pl=Sl.getCell(Ql+"152"))?void 0:pl.value(),2,null==(dl=Sl.getCell(`${Al}152`))?void 0:dl.numeric(),null==(vl=Sl.getCell("G152"))?void 0:vl.value()),$("#furnitureList").append('</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Декор</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),De(Sl.getCell("F156").value(),null==(gl=Sl.getCell(Ql+"156"))?void 0:gl.value(),Rl,null==(ml=Sl.getCell(`${Al}156`))?void 0:ml.numeric(),null==(Cl=Sl.getCell("G156"))?void 0:Cl.value()),De(Sl.getCell("F157").value(),null==($l=Sl.getCell(Ql+"157"))?void 0:$l.value(),Rl,null==(hl=Sl.getCell(`${Al}157`))?void 0:hl.numeric(),null==(fl=Sl.getCell("G157"))?void 0:fl.value()),De(Sl.getCell("F158").value(),null==(kl=Sl.getCell(Ql+"158"))?void 0:kl.value(),Rl,null==(bl=Sl.getCell(`${Al}158`))?void 0:bl.numeric(),null==(yl=Sl.getCell("G158"))?void 0:yl.value()),De(Sl.getCell("F159").value(),null==(Ll=Sl.getCell(Ql+"159"))?void 0:Ll.value(),1,null==(Fl=Sl.getCell(`${Al}159`))?void 0:Fl.numeric(),null==(wl=Sl.getCell("G159"))?void 0:wl.value()),De(Sl.getCell("F160").value(),null==(_l=Sl.getCell(Ql+"160"))?void 0:_l.value(),Rl-1,null==(Gl=Sl.getCell(`${Al}160`))?void 0:Gl.numeric(),null==(xl=Sl.getCell("G160"))?void 0:xl.value()),Oe($("#furnitureList"),Je(Sl.getCell("F162").value()," ",Math.round(.03*ne*se)+" грн.")),ne+=.03*ne*se,Oe($("#furnitureList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),Oe($("#furnitureList .list-option-container").last(),`<span class='name summary'>Всього по меблях:</span><span class='list-text summary work'>${l.formatCurrency(Math.round(ne))} грн.</span>`)),(Ul||Wl||Hl||Xl||Yl||Zl||le)&&($("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\"> Опції</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>"));const Me=Sl.getCell("T109").numeric();let Ne=[Jl*Sl.getCell(`${Al}109`).numeric()*1.25,+Ul*Sl.getCell(`${Al}110`).numeric()*1.25,1.25*Sl.getCell(`${Al}111`).numeric(),1.25*Jl*(Jl<=60?306.26:Jl<=95?246.43:Jl<=125?221.2:277.29)*Me,(+Yl+ve==2?1:0)*Jl*1.25*(Jl<=60?60.91:Jl<=95?64.57:Jl<=125?63.87:66.24)*Me+(+Yl+ve===1?1:0)*Jl*Sl.getCell(`${Al}114`).numeric()*1.25,+Yl>0?1.25*Jl*(Jl<=60?90.02:Jl<=95?60.78:Jl<=125?58.29:79.01)*Me:0,1.1*Sl.getCell(`${Al}116`).numeric()+1.25*Sl.getCell(`${Al}117`).numeric(),Sl.getCell(`${Al}119`).numeric()*Jl*1.25+Sl.getCell(`${Al}120`).numeric()*ae*1.05],Se=[Hl,Ul?ql:0,Xl,Wl,Yl,Yl,Zl,le],Pe=[109,110,111,112,113,115,116,120];for(let l=0;l<Pe.length;l++){let e=Ne[l]*Number(Se[l]);0===e||isNaN(e)||0==Se[l]||null==Pe[l]||(te+=e,Oe(Ce,Je((null==(Tl=Sl.getCell("F"+Pe[l]))?void 0:Tl.value())+", "+(null==(Ml=Sl.getCell(`${Ql}${Pe[l]}`))?void 0:Ml.value()),"",Math.round(e)+" грн.")))}function De(e,t,n,i,s){Il&&0!=n&&n&&i&&(ne+=i*se*n,Oe(ie,'<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),null!==t?Oe($("#furnitureList .option-block .list-option-container").last(),`<span class='name'>${e}, ${t}</span><span class='list-text amount'>${n} ${s}</span><span class='list-text'>${l.formatCurrency(i*n*Sl.getCell("T147").numeric())} грн.</span>`):Oe($("#materialsList .option-block .list-option-container").last(),`<span class='name'>${e}</span><span class='list-text'>${n} ${s} </span>`))}zl||$(".comfy-section").toggle(!1),Il||$("#furnitureList").toggle(!1),Oe($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),Oe($("#workList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${l.formatCurrency(te)} грн.</span>`),Oe($("#materialsList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),Oe($("#materialsList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${l.formatCurrency(te)} грн.</span>`);let Be,Ee=0,je=$("#appliancesList"),ze=$("#appliancesListTotal");"gorenje"===Dl?Be=[168,9]:"bosch"===Dl?Be=[182,10]:"miele"===Dl&&(Be=[197,9]);let Ie=0;if("undefined"!==Dl){Ie=1;for(let e=0;e<Be[1];e++)je.append('<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'),$("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class='name white'>${Sl.getCell("F"+(Be[0]+e)).value()} ${Sl.getCell("E"+(Be[0]+e)).value()}</span><span class='list-text white'>${l.formatCurrency(Sl.getCell("D"+(Be[0]+e)).numeric())} грн.</span>`),zl&&(ze.append('<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),$("#appliancesListTotal .option-block .list-option-container").last().append(`<span class='name'>${Sl.getCell("F"+(Be[0]+e)).value()} ${Sl.getCell("E"+(Be[0]+e)).value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${l.formatCurrency(Sl.getCell("D"+(Be[0]+e)).numeric())} грн.</span>`)),Ee+=Sl.getCell("D"+(Be[0]+e)).numeric(),Ee+=Sl.getCell("G36").numeric(),Ie++;if(zl){const e=Sl.getCell("G36").numeric();Ee+=e,ze.append('<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),$("#appliancesListTotal .option-block .list-option-container").last().append(`<span class='name'>Доставка техніки</span><span class='list-text amount'></span><span class='list-text'>${Ie*e} грн.</span>`),je.append('<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'),$("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class='name white'>Доставка техніки</span><span class='list-text white'>${Ie*e} грн.</span>`),ze.append('<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),$("#appliancesTotal").html(l.formatCurrency(Ee)),$("#appliancesTotalDiscount").html(l.formatCurrency(.9*Ee)),$("#appliancesListTotal .list-option-container").last().append(`<span class='name summary'>Всього по техніці:</span><span class='list-text summary work'>${l.formatCurrency(Ee)} грн.</span>`),$("#appliancesListTotal .list-option-container").last().append(`<span class='name summary'><b>Всього по техніці, зі знижкою</b>:</span><span class='list-text summary work'>${l.formatCurrency(.9*Ee)} грн.</span>`)}}function Je(l,e,t){return`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${l}</span><span class='list-text amount'>${e}</span><span class='list-text'>${t}</span></div></div>`}function Oe(l,e){l.append(e)}function Ke(l){let e="J";return"cozy"==l?e="J":"japandi"==l?e="L":"fusion"==l?e="N":"modern"==l?e="P":"neoclassic"==l&&(e="R"),e}zl||$("#appliancesListTotal").toggle(!1);const Re=Sl.getCell(`${jl}127`).numeric(),qe=Sl.getCell(`${jl}128`).numeric(),Ae=Sl.getCell(`${jl}129`).numeric(),Qe=qe+Re+Ae;$("#kitchenPrice").html(l.formatCurrency(Re)+" грн."),$("#kitchenMontage").html(l.formatCurrency(qe)+" грн."),$("#kitchenDelivery").html(l.formatCurrency(Ae)+" грн."),$("#kitchenTotal").html(l.formatCurrency(Qe)+" грн"),$("#kitchenTotalPrice").html(l.formatCurrency(Ee)+" грн."),Il&&(ne=0),$("#kitchenTotalPriceDiscount").html(l.formatCurrency(.9*Ee)),$("#discountTotal").html(`<span class='bold-text-7'>${l.formatCurrency(Ee-.9*Ee)} грн.</span>`),Pl.get("summedPrice")*Bl<te?$("#totalPriceTotal").html(l.formatCurrency(te)+" грн. *"):$("#totalPriceTotal").html(l.formatCurrency(Pl.get("summedPrice")*Bl)+" грн. *")}))})();