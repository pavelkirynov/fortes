(()=>{"use strict";class e{static formatCurrency(e,t){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:null!=t?t:2}).format(e)}}class t{constructor(e,t){this.address=e,this._value=t}hasValue(){return null!==this._value&&this._value.length>0}value(){return this._value}numeric(){return parseFloat(this._value)}formattedNumerical(){return e.formatCurrency(parseFloat(this.value()))}}class l{constructor(e){this.cells=e}getCell(e){const t=this.cells.filter((t=>t.address===e));return 0==t.length?null:t[0]}}class n{get(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return localStorage.getItem(e)}}set(e,t){localStorage.setItem(e,t.toString())}init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}storageToRequestBody(e){const t={};for(const l in e)"length"!==l&&("true"!==String(e[l])?"false"!==String(e[l])?isFinite(Number(e[l]))?t[l]=Number(e[l]):t[l]=e[l]:t[l]=0:t[l]=1);return JSON.stringify(t)}}class i{static numberToEncodedLetter(e){if(isNaN(e))return;let t,l=(e=Math.abs(Math.floor(e)))%26,n=e/26;return e<=26?this.numToLetter(e):(n>=1&&(0===l&&n--,t=this.numberToEncodedLetter(n)),0===l&&(l=26),t+this.numToLetter(l))}static numToLetter(e){if(!(e>26||e<0))return 0===e?"":this.alphabet.slice(e-1,e)}}i.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ",fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json").then((e=>e.text())).then((s=>{const a=JSON.parse(s.substring(s.length-2,0).replace("/*O_o*/\ngoogle.visualization.Query.setResponse(","")).table.rows,o=new l(a.map(((e,l)=>e.c.map((function(e,n){if(null!==e&&null!==e.v)return new t(`${i.numberToEncodedLetter(n+1)}${l+1}`,e.v)})).filter((e=>null!=e)))).reduce(((e,t)=>[...e,...t]))),r=new n;let c=r.get("appliances");const u=o.getCell("G7").numeric();$("#course").html(e.formatCurrency(u));const p=r.get("style");let g=Boolean(r.get("appliancesBoolTotal")),m=Boolean(r.get("furnitureBool")),d=r.get("space"),C=Boolean(r.get("appliancesBoolTotal")),v=Boolean(r.get("appliancesBoolTotal")),h=r.get("amountOfRooms"),f=r.get("amountOfBathrooms"),k="",L="",b=r.get("ceiling"),y=r.get("hygienicShower"),F=r.get("secondGypsumLayer"),w=r.get("floorScreed"),G=r.get("heatedFlooring"),x=r.get("denoising"),T=r.get("entranceDoors"),M=r.get("conditioning"),S=r.get("flooring"),N=0,_=0,B=$("#furnitureList");const D=1+o.getCell("S164").numeric()/100,P=1+o.getCell("S120").numeric()/100;let E=d<=40?3:d<=80?4:d<=100?5:d<=130?6:d<=150?7:d<=175?8:9;"modern"!=p&&"neoclassic"!=p||(E+=1),$("#months").html(E.toString());const O=o.getCell("S44").numeric(),I=o.getCell("S42").numeric();"cozy"==p?(k="I",L="A"):"japandi"==p?(k="K",L="B"):"fusion"==p?(k="M",L="C"):"modern"==p?(k="O",L="D"):"neoclassic"==p&&(k="Q",L="E");let j,z,J,R,K=0,q=0;"laminat"==S?(j="60",J="91",q=d*(d<=70?201.26:198.81)*O):"vynil"==S?(j="61",J="92",q=d*(d<=70?220.33:161.8)*O):"parket"==S&&(j="62",J="93",q=d*(d<=80?369.96:240.31)*O),"stretch ceiling"==b?(z="56",R=0,K=o.getCell(`${k}56`).numeric()*d):"gapless"==b?(z="57",R=0,K=d*(d<=60?611.64:d<=95?548.9:d<=1e3?581.94:0)*O*1.65):"gypsum"==b&&(z="58",R=1,K=d*(d<=60?283.08:d<=95?281.22:d<=125?338.33:362.47)*1.35*O);let A=$("#workList"),Q="",V=2523*((h>0?6:0)+(C?2:0)+(v?2:0)+2*f)*O,U=1974*((h>0?3:0)+(C?1:0)+(v?1:0)+2*f)*O,W=d*f*(d<=100?83.2:33.98);const H=o.getCell(`${k}45`).numeric()*d;console.log(`vents: ${W}`),console.log(`canalisation: ${U}`),console.log(`water: ${V}`);const X=[d*(d<=60?1142.78:d<=95?883.87:d<=125?819.43:925.61)*O,d*(d<=60?700.67:d<=100?687.36:d<=130?341.25:317.36)*O*1.1,o.getCell(`${k}50`).numeric(),d*(d<=50?1e3:990)*O,140*(d<=60?o.getCell(`${k}54`).numeric():d<=80?50:d<=120?78:d<=180?114:162)*("modern"==p||"neoclassic"==p?1:0),d*(d<=60?418.86:d<=100?416.29:d<=135?443.73:481.67)*("gypsum"==b?1:0)*O,K,q,d*(d<=70?114.47:86.84)*O,d*(d<=70?206.59:170)*O*("japandi"==p||"fusion"==p?1:0)],Y=[1,f,h+f,1,1,R,1,1,1,1],Z=[48,49,50,52,54,53,z,j,64,66];N+=V*I+((C?f*o.getCell(`${k}47`).numeric():0)+(v?f*o.getCell(`${k}46`).numeric():0))*I-1750*O,Q=$e(o.getCell("F42").value(),"",Math.round(V*I+((C?f*o.getCell(`${k}47`).numeric():0)+(v?f*o.getCell(`${k}46`).numeric():0))*I-1750*O)+" грн."),console.log(Math.round(V*I+((C?f*o.getCell(`${k}47`).numeric():0)+(v?f*o.getCell(`${k}46`).numeric():0))*I-1750*O)+" грн."),$("#workList").append(Q),N+=U*I,Q=$e(o.getCell("F43").value(),"",Math.round(U*I)+" грн."),$("#workList").append(Q),console.log(Math.round(U*I)+" грн."),N+=W*I*O,Q=$e(o.getCell("F44").value(),"",Math.round(W*I*O)+" грн."),console.log(Math.round(W*I*O)+" грн."),$("#workList").append(Q),N+=H*I,Q=$e(o.getCell("F45").value(),"",Math.round(H*I)+" грн."),$("#workList").append(Q),v&&(Q=$e(o.getCell("F46").value(),"",o.getCell(fe(p)+46).numeric().toString()+" грн."),$("#workList").append(Q)),C&&(Q=$e(o.getCell("F47").value(),"",o.getCell(fe(p)+47).numeric().toString()+" грн."),$("#workList").append(Q));for(let e=0;e<Z.length;e++){const t=X[e]*Y[e]*I;0===t||isNaN(t)||(N+=t,Q=$e(o.getCell("F"+Z[e]).value(),"",Math.round(t)+" грн."),$("#workList").append(Q))}Q=$e(o.getCell("F66").value(),"",Math.round(.022*N*I)+" грн."),$("#workList").append(Q),N+=.022*N*I,Q=$e(o.getCell("F67").value(),"",Math.round((2*E*1200+3e3+100*d+120*d)*I)+" грн."),$("#workList").append(Q),N+=(2*E*1200+3e3+100*d)*I,$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Комплектуючі та чистові матеріали</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>");let ee=[o.getCell(`${k}72`).numeric(),o.getCell(`${k}73`).numeric(),o.getCell(`${k}74`).numeric(),o.getCell(`${k}75`).numeric(),o.getCell(`${k}76`).numeric(),o.getCell(`${k}77`).numeric(),o.getCell(`${k}79`).numeric(),o.getCell(`${k}80`).numeric(),o.getCell(`${k}81`).numeric(),o.getCell(`${k}82`).numeric(),o.getCell(`${k}83`).numeric(),o.getCell(`${k}84`).numeric(),o.getCell(`${k}85`).numeric(),o.getCell(`${k}86`).numeric(),o.getCell(`${k}87`).numeric(),o.getCell(`${k}88`).numeric(),o.getCell(`${k}89`).numeric(),o.getCell(`${k+J}`).numeric(),100*d*o.getCell("S74").numeric()],te=[f+h,35*f,.66*d,.66*d,.59*d,d<=50?42:d<=90?60:d<=120?84:90,f,f,f,f,Number(C),Number(v),Number(v),f,f,f,f,d<100?d-7*f:d-10*f,1],le=[72,73,74,75,76,77,79,80,81,82,83,84,85,86,87,88,89,J,94];for(let e=0;e<le.length;e++){let t=ee[e]*te[e]*o.getCell("S72").numeric();0===t||isNaN(t)||(N+=t,Q=$e(o.getCell("F"+le[e]).value(),"",Math.round(t)+" грн."),$("#workList").append(Q))}$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Витрати компанії</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Q=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${o.getCell("F100").value()}</span><span class='list-text amount'>${E} міс.</span><span class='list-text'> </span></div></div>`,$("#workList").append(Q);const ne=[o.getCell(`${k}101`).numeric(),o.getCell(`${k}102`).numeric()],ie=[E,E],se=[101,102];for(let e=0;e<se.length;e++){let t=ne[e]*ie[e];N+=t,Q=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${o.getCell(`F${se[e]}`).value()}</span><span class='list-text amount'>${Math.round(t/E)} грн./місяць</span><span class='list-text'>${Math.round(t)} грн.</span></div></div>`,$("#workList").append(Q)}N+=u*d*o.getCell("G37").numeric()+E*o.getCell(`${k}214`).numeric(),Q=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>\n\t\t${o.getCell("F212").value()}\n\t\t\t</span><span class='list-text amount'></span><span class='list-text'>${e.formatCurrency(u*o.getCell("G37").numeric()*d)} грн.</span></div></div>`,$("#workList").append(Q),Q=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${o.getCell("F214").value()}</span><span class='list-text amount'>${o.getCell(`${k}214`).numeric()} грн./місяць</span><span class='list-text'>${Math.round(E*o.getCell(`${k}214`).numeric())} грн.</span></div></div>`,$("#workList").append(Q),m&&($("#furnitureList").append('</div><div class="list-option-container"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Кухня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),ue(o.getCell("F127").value(),o.getCell(`${L}127`),1,o.getCell(`${L}127`).numeric(),o.getCell("G120").value()),_+=Math.round(o.getCell(`${k}129`).numeric()*D)+Math.round(o.getCell(`${k}128`).numeric()*D),B.append('<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'),$("#furnitureList .option-block .list-option-container").last().append(`<span class='name'>${o.getCell("F127").value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${e.formatCurrency(o.getCell(`${k}128`).numeric()*D)} грн.</span>`),B.append('<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'),$("#furnitureList .option-block .list-option-container").last().append(`<span class='name'>${o.getCell("F128").value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${e.formatCurrency(o.getCell(`${k}129`).numeric()*D)} грн.</span>`),ue(o.getCell("F130").value(),o.getCell(L+"130").numeric(),1,o.getCell(`${k}130`).numeric(),o.getCell("G130").value()),ue(o.getCell("F131").value(),o.getCell(L+"131").numeric(),1,o.getCell(`${k}131`).numeric(),o.getCell("G131").value()),ue(o.getCell("F132").value(),o.getCell(L+"132").numeric(),1,o.getCell(`${k}132`).numeric(),o.getCell("G132").value()),ue(o.getCell("F133").value(),o.getCell(L+"133").numeric(),4,o.getCell(`${k}133`).numeric(),o.getCell("G133").value()),ue(o.getCell("F134").value(),o.getCell(L+"134").numeric(),1,o.getCell(`${k}134`).numeric(),o.getCell("G134").value()),he($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),he($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Вітальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),ue(o.getCell("F138").value(),o.getCell(L+"138").numeric(),1,o.getCell(`${k}138`).numeric(),o.getCell("G138").value()),ue(o.getCell("F139").value(),o.getCell(L+"139").numeric(),1,o.getCell(`${k}139`).numeric(),o.getCell("G139").value()),he($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),he($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Спальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),ue(o.getCell("F141").value(),o.getCell(L+"141").numeric(),1,o.getCell(`${k}141`).numeric(),o.getCell("G141").value()),ue(o.getCell("F142").value(),o.getCell(L+"142").numeric(),1,o.getCell(`${k}142`).numeric(),o.getCell("G142").value()),ue(o.getCell("F143").value(),o.getCell(L+"143").numeric(),2,o.getCell(`${k}143`).numeric(),o.getCell("G143").value()),ue(o.getCell("F144").value(),o.getCell(L+"144").numeric(),1,o.getCell(`${k}144`).numeric(),o.getCell("G144").value()),ue(o.getCell("F145").value(),o.getCell(L+"145").numeric(),1,o.getCell(`${k}145`).numeric(),o.getCell("G145").value()),ue(o.getCell("F146").value(),o.getCell(L+"146").numeric(),1,o.getCell(`${k}146`).numeric(),o.getCell("G146").value()),he($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Світильники</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),ue(o.getCell("F148").value(),o.getCell(L+"148").numeric(),Math.ceil(.48*d),o.getCell(`${k}148`).numeric(),o.getCell("G148").value()),ue(o.getCell("F149").value(),o.getCell(L+"149").numeric(),1,o.getCell(`${k}149`).numeric(),o.getCell("G149").value()),ue(o.getCell("F151").value(),o.getCell(L+"151").numeric(),1,o.getCell(`${k}151`).numeric(),o.getCell("G151").value()),ue(o.getCell("F153").value(),o.getCell(L+"153").numeric(),1,o.getCell(`${k}153`).numeric(),o.getCell("G153").value()),ue(o.getCell("F154").value(),o.getCell(L+"154").numeric(),1,o.getCell(`${k}154`).numeric(),o.getCell("G154").value()),ue(o.getCell("F150").value(),o.getCell(L+"150").numeric(),h>1?1:0,o.getCell(`${k}150`).numeric(),o.getCell("G150").value()),ue(o.getCell("F152").value(),o.getCell(L+"152").numeric(),2,o.getCell(`${k}152`).numeric(),o.getCell("G152").value()),$("#furnitureList").append('</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Декор</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),ue(o.getCell("F156").value(),o.getCell(L+"156").numeric(),h,o.getCell(`${k}156`).numeric(),o.getCell("G156").value()),ue(o.getCell("F157").value(),o.getCell(L+"157").numeric(),h,o.getCell(`${k}157`).numeric(),o.getCell("G157").value()),ue(o.getCell("F158").value(),o.getCell(L+"158").numeric(),h,o.getCell(`${k}158`).numeric(),o.getCell("G158").value()),ue(o.getCell("F159").value(),o.getCell(L+"159").numeric(),1,o.getCell(`${k}159`).numeric(),o.getCell("G159").value()),ue(o.getCell("F160").value(),o.getCell(L+"160").numeric(),h-1,o.getCell(`${k}160`).numeric(),o.getCell("G160").value()),he($("#furnitureList"),$e(o.getCell("F162").value()," ",Math.round(.03*_*D)+" грн.")),_+=.03*_*D,he($("#furnitureList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),he($("#furnitureList .list-option-container").last(),`<span class='name summary'>Всього по меблях:</span><span class='list-text summary work'>${e.formatCurrency(Math.round(_))} грн.</span>`)),(y||F||w||G||x||T||M)&&($("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\"> Опції</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>"));const ae=o.getCell("T109").numeric();let oe=[d*o.getCell(`${k}109`).numeric()*1.25,+y*o.getCell(`${k}110`).numeric()*1.25,1.25*o.getCell(`${k}111`).numeric(),1.25*d*(d<=60?306.26:d<=95?246.43:d<=125?221.2:277.29)*ae,(+x+R==2?1:0)*d*1.25*(d<=60?60.91:d<=95?64.57:d<=125?63.87:66.24)*ae+(+x+R===1?1:0)*d*o.getCell(`${k}114`).numeric()*1.25,+x>0?1.25*d*(d<=60?90.02:d<=95?60.78:d<=125?58.29:79.01)*ae:0,1.1*o.getCell(`${k}116`).numeric()+1.25*o.getCell(`${k}117`).numeric(),o.getCell(`${k}119`).numeric()*d*1.25+o.getCell(`${k}120`).numeric()*P*1.05],re=[w,y?f:0,G,F,x,x,T,M],ce=[109,110,111,112,113,115,116,120];for(let e=0;e<ce.length;e++){let t=oe[e]*Number(re[e]);0===t||isNaN(t)||0==re[e]||null==ce[e]||(N+=t,he(A,$e(o.getCell("F"+ce[e]).value()+", "+o.getCell(L+ce[e]).value(),"",Math.round(t)+" грн.")))}function ue(t,l,n,i,s){m&&0!=n&&n&&i&&(_+=i*D*n,he(B,'<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),l?he($("#furnitureList .option-block .list-option-container").last(),`<span class='name'>${t}, ${l}</span><span class='list-text amount'>${n} ${s}</span><span class='list-text'>${e.formatCurrency(i*n*(1+o.getCell("S164").numeric()/100))} грн.</span>`):he($("#materialsList .option-block .list-option-container").last(),`<span class='name'>${t}</span><span class='list-text'>${n} ${s} </span>`))}g||$(".comfy-section").toggle(!1),m||$("#furnitureList").toggle(!1),he($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),he($("#workList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${e.formatCurrency(N)} грн.</span>`),he($("#materialsList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),he($("#materialsList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${e.formatCurrency(N)} грн.</span>`);let pe,ge=0,me=$("#appliancesList"),de=$("#appliancesListTotal");"gorenje"===c?pe=[168,9]:"bosch"===c?pe=[182,10]:"miele"===c&&(pe=[197,9]);let Ce=0;if("undefined"!==c){Ce=1;for(let t=0;t<pe[1];t++)me.append('<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'),$("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class='name white'>${o.getCell("F"+(pe[0]+t)).value()} ${o.getCell("E"+(pe[0]+t)).value()}</span><span class='list-text white'>${e.formatCurrency(o.getCell("D"+(pe[0]+t)).numeric())} грн.</span>`),g&&(de.append('<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),$("#appliancesListTotal .option-block .list-option-container").last().append(`<span class='name'>${o.getCell("F"+(pe[0]+t)).value()} ${o.getCell("E"+(pe[0]+t)).value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${e.formatCurrency(o.getCell("D"+(pe[0]+t)).numeric())} грн.</span>`)),ge+=o.getCell("D"+(pe[0]+t)).numeric(),ge+=o.getCell("G37").numeric(),Ce++;if(g){const t=o.getCell("G37").numeric();ge+=t,de.append('<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),$("#appliancesListTotal .option-block .list-option-container").last().append(`<span class='name'>Доставка техніки</span><span class='list-text amount'></span><span class='list-text'>${Ce*t} грн.</span>`),me.append('<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'),$("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class='name white'>Доставка техніки</span><span class='list-text white'>${Ce*t} грн.</span>`),de.append('<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),$("#appliancesTotal").html(e.formatCurrency(ge)),$("#appliancesTotalDiscount").html(e.formatCurrency(.9*ge)),$("#appliancesListTotal .list-option-container").last().append(`<span class='name summary'>Всього по техніці:</span><span class='list-text summary work'>${e.formatCurrency(ge)} грн.</span>`),$("#appliancesListTotal .list-option-container").last().append(`<span class='name summary'><b>Всього по техніці, зі знижкою</b>:</span><span class='list-text summary work'>${e.formatCurrency(.9*ge)} грн.</span>`)}}g||$("#appliancesListTotal").toggle(!1);const ve=fe(p);function $e(e,t,l){return`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${e}</span><span class='list-text amount'>${t}</span><span class='list-text'>${l}</span></div></div>`}function he(e,t){e.append(t)}function fe(e){let t="J";return"cozy"==e?t="J":"japandi"==e?t="L":"fusion"==e?t="N":"modern"==e?t="P":"neoclassic"==e&&(t="R"),t}const ke=o.getCell(`${ve}127`).numeric(),Le=o.getCell(`${ve}128`).numeric(),be=o.getCell(`${ve}129`).numeric(),ye=Le+ke+be;$("#kitchenPrice").html(e.formatCurrency(ke)+" грн."),$("#kitchenMontage").html(e.formatCurrency(Le)+" грн."),$("#kitchenDelivery").html(e.formatCurrency(be)+" грн."),$("#kitchenTotal").html(e.formatCurrency(ye)+" грн"),$("#kitchenTotalPrice").html(e.formatCurrency(ge)+" грн."),m&&(_=0),$("#kitchenTotalPriceDiscount").html(e.formatCurrency(.9*ge)),$("#discountTotal").html(`<span class='bold-text-7'>${e.formatCurrency(ge-.9*ge)} грн.</span>`),r.get("summedPrice")*u<N?$("#totalPriceTotal").html(e.formatCurrency(N)+" грн. *"):$("#totalPriceTotal").html(e.formatCurrency(r.get("summedPrice")*u)+" грн. *")}))})();