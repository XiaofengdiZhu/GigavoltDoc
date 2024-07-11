import{d as z,a2 as R,s as b,B as L,y as G,u as W,o as O,c as k,k as F,I as X,e as K}from"./chunks/framework.IyV-bm8r.js";/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var S=function(){return S=Object.assign||function(d){for(var u,s=1,f=arguments.length;s<f;s++){u=arguments[s];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(d[c]=u[c])}return d},S.apply(this,arguments)};var U;(function(l){var d=function(){function n(e,t,r,a){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(a<-1||a>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var o=[],i=0;i<this.size;i++)o.push(!1);for(var i=0;i<this.size;i++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();var h=this.addEccAndInterleave(r);if(this.drawCodewords(h),a==-1)for(var v=1e9,i=0;i<8;i++){this.applyMask(i),this.drawFormatBits(i);var m=this.getPenaltyScore();m<v&&(a=i,v=m),this.applyMask(i)}f(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}return n.encodeText=function(e,t){var r=l.QrSegment.makeSegments(e);return n.encodeSegments(r,t)},n.encodeBinary=function(e,t){var r=l.QrSegment.makeBytes(e);return n.encodeSegments([r],t)},n.encodeSegments=function(e,t,r,a,o,i){if(r===void 0&&(r=1),a===void 0&&(a=40),o===void 0&&(o=-1),i===void 0&&(i=!0),!(n.MIN_VERSION<=r&&r<=a&&a<=n.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");var h,v;for(h=r;;h++){var m=n.getNumDataCodewords(h,t)*8,E=c.getTotalBits(e,h);if(E<=m){v=E;break}if(h>=a)throw new RangeError("Data too long")}for(var g=0,J=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];g<J.length;g++){var C=J[g];i&&v<=n.getNumDataCodewords(h,C)*8&&(t=C)}for(var M=[],T=0,w=e;T<w.length;T++){var p=w[T];u(p.mode.modeBits,4,M),u(p.numChars,p.mode.numCharCountBits(h),M);for(var y=0,N=p.getData();y<N.length;y++){var Y=N[y];M.push(Y)}}f(M.length==v);var P=n.getNumDataCodewords(h,t)*8;f(M.length<=P),u(0,Math.min(4,P-M.length),M),u(0,(8-M.length%8)%8,M),f(M.length%8==0);for(var D=236;M.length<P;D^=253)u(D,8,M);for(var A=[];A.length*8<M.length;)A.push(0);return M.forEach(function(Z,B){return A[B>>>3]|=Z<<7-(B&7)}),new n(h,t,A,o)},n.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},n.prototype.getModules=function(){return this.modules},n.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var a=0;a<r;a++)e==0&&a==0||e==0&&a==r-1||e==r-1&&a==0||this.drawAlignmentPattern(t[e],t[a]);this.drawFormatBits(0),this.drawVersion()},n.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,a=0;a<10;a++)r=r<<1^(r>>>9)*1335;var o=(t<<10|r)^21522;f(o>>>15==0);for(var a=0;a<=5;a++)this.setFunctionModule(8,a,s(o,a));this.setFunctionModule(8,7,s(o,6)),this.setFunctionModule(8,8,s(o,7)),this.setFunctionModule(7,8,s(o,8));for(var a=9;a<15;a++)this.setFunctionModule(14-a,8,s(o,a));for(var a=0;a<8;a++)this.setFunctionModule(this.size-1-a,8,s(o,a));for(var a=8;a<15;a++)this.setFunctionModule(8,this.size-15+a,s(o,a));this.setFunctionModule(8,this.size-8,!0)},n.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;f(r>>>18==0);for(var t=0;t<18;t++){var a=s(r,t),o=this.size-11+t%3,i=Math.floor(t/3);this.setFunctionModule(o,i,a),this.setFunctionModule(i,o,a)}}},n.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var a=-4;a<=4;a++){var o=Math.max(Math.abs(a),Math.abs(r)),i=e+a,h=t+r;0<=i&&i<this.size&&0<=h&&h<this.size&&this.setFunctionModule(i,h,o!=2&&o!=4)}},n.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var a=-2;a<=2;a++)this.setFunctionModule(e+a,t+r,Math.max(Math.abs(a),Math.abs(r))!=1)},n.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},n.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var a=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],o=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],i=Math.floor(n.getNumRawDataModules(t)/8),h=a-i%a,v=Math.floor(i/a),m=[],E=n.reedSolomonComputeDivisor(o),g=0,J=0;g<a;g++){var C=e.slice(J,J+v-o+(g<h?0:1));J+=C.length;var M=n.reedSolomonComputeRemainder(C,E);g<h&&C.push(0),m.push(C.concat(M))}for(var T=[],w=function(p){m.forEach(function(y,N){(p!=v-o||N>=h)&&T.push(y[p])})},g=0;g<m[0].length;g++)w(g);return f(T.length==i),T},n.prototype.drawCodewords=function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var a=0;a<this.size;a++)for(var o=0;o<2;o++){var i=r-o,h=(r+1&2)==0,v=h?this.size-1-a:a;!this.isFunction[v][i]&&t<e.length*8&&(this.modules[v][i]=s(e[t>>>3],7-(t&7)),t++)}}f(t==e.length*8)},n.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var a=void 0;switch(e){case 0:a=(r+t)%2==0;break;case 1:a=t%2==0;break;case 2:a=r%3==0;break;case 3:a=(r+t)%3==0;break;case 4:a=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:a=r*t%2+r*t%3==0;break;case 6:a=(r*t%2+r*t%3)%2==0;break;case 7:a=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&a&&(this.modules[t][r]=!this.modules[t][r])}},n.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,a=0,o=[0,0,0,0,0,0,0],i=0;i<this.size;i++)this.modules[t][i]==r?(a++,a==5?e+=n.PENALTY_N1:a>5&&e++):(this.finderPenaltyAddHistory(a,o),r||(e+=this.finderPenaltyCountPatterns(o)*n.PENALTY_N3),r=this.modules[t][i],a=1);e+=this.finderPenaltyTerminateAndCount(r,a,o)*n.PENALTY_N3}for(var i=0;i<this.size;i++){for(var r=!1,h=0,o=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][i]==r?(h++,h==5?e+=n.PENALTY_N1:h>5&&e++):(this.finderPenaltyAddHistory(h,o),r||(e+=this.finderPenaltyCountPatterns(o)*n.PENALTY_N3),r=this.modules[t][i],h=1);e+=this.finderPenaltyTerminateAndCount(r,h,o)*n.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var i=0;i<this.size-1;i++){var v=this.modules[t][i];v==this.modules[t][i+1]&&v==this.modules[t+1][i]&&v==this.modules[t+1][i+1]&&(e+=n.PENALTY_N2)}for(var m=0,E=0,g=this.modules;E<g.length;E++){var J=g[E];m=J.reduce(function(T,w){return T+(w?1:0)},m)}var C=this.size*this.size,M=Math.ceil(Math.abs(m*20-C*10)/C)-1;return f(0<=M&&M<=9),e+=M*n.PENALTY_N4,f(0<=e&&e<=2568888),e},n.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],a=this.size-7;r.length<e;a-=t)r.splice(1,0,a);return r},n.getNumRawDataModules=function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return f(208<=t&&t<=29648),t},n.getNumDataCodewords=function(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},n.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var a=1,r=0;r<e;r++){for(var o=0;o<t.length;o++)t[o]=n.reedSolomonMultiply(t[o],a),o+1<t.length&&(t[o]^=t[o+1]);a=n.reedSolomonMultiply(a,2)}return t},n.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(v){return 0}),a=function(v){var m=v^r.shift();r.push(0),t.forEach(function(E,g){return r[g]^=n.reedSolomonMultiply(E,m)})},o=0,i=e;o<i.length;o++){var h=i[o];a(h)}return r},n.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,a=7;a>=0;a--)r=r<<1^(r>>>7)*285,r^=(t>>>a&1)*e;return f(r>>>8==0),r},n.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];f(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},n.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},n.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n}();l.QrCode=d;function u(n,e,t){if(e<0||e>31||n>>>e)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(n>>>r&1)}function s(n,e){return(n>>>e&1)!=0}function f(n){if(!n)throw new Error("Assertion error")}var c=function(){function n(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return n.makeBytes=function(e){for(var t=[],r=0,a=e;r<a.length;r++){var o=a[r];u(o,8,t)}return new n(n.Mode.BYTE,e.length,t)},n.makeNumeric=function(e){if(!n.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var a=Math.min(e.length-r,3);u(parseInt(e.substring(r,r+a),10),a*3+1,t),r+=a}return new n(n.Mode.NUMERIC,e.length,t)},n.makeAlphanumeric=function(e){if(!n.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var a=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;a+=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),u(a,11,t)}return r<e.length&&u(n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new n(n.Mode.ALPHANUMERIC,e.length,t)},n.makeSegments=function(e){return e==""?[]:n.isNumeric(e)?[n.makeNumeric(e)]:n.isAlphanumeric(e)?[n.makeAlphanumeric(e)]:[n.makeBytes(n.toUtf8ByteArray(e))]},n.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)u(e,8,t);else if(e<16384)u(2,2,t),u(e,14,t);else if(e<1e6)u(6,3,t),u(e,21,t);else throw new RangeError("ECI assignment value out of range");return new n(n.Mode.ECI,0,t)},n.isNumeric=function(e){return n.NUMERIC_REGEX.test(e)},n.isAlphanumeric=function(e){return n.ALPHANUMERIC_REGEX.test(e)},n.prototype.getData=function(){return this.bitData.slice()},n.getTotalBits=function(e,t){for(var r=0,a=0,o=e;a<o.length;a++){var i=o[a],h=i.mode.numCharCountBits(t);if(i.numChars>=1<<h)return 1/0;r+=4+h+i.bitData.length}return r},n.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},n.NUMERIC_REGEX=/^[0-9]*$/,n.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,n.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",n}();l.QrSegment=c})(U||(U={}));(function(l){(function(d){var u=function(){function s(f,c){this.ordinal=f,this.formatBits=c}return s.LOW=new s(0,1),s.MEDIUM=new s(1,0),s.QUARTILE=new s(2,3),s.HIGH=new s(3,2),s}();d.Ecc=u})(l.QrCode||(l.QrCode={}))})(U||(U={}));(function(l){(function(d){var u=function(){function s(f,c){this.modeBits=f,this.numBitsCharCount=c}return s.prototype.numCharCountBits=function(f){return this.numBitsCharCount[Math.floor((f+7)/17)]},s.NUMERIC=new s(1,[10,12,14]),s.ALPHANUMERIC=new s(2,[9,11,13]),s.BYTE=new s(4,[8,16,16]),s.KANJI=new s(8,[8,10,12]),s.ECI=new s(7,[0,0,0]),s}();d.Mode=u})(l.QrSegment||(l.QrSegment={}))})(U||(U={}));var I=U,H="H",Q={L:I.QrCode.Ecc.LOW,M:I.QrCode.Ecc.MEDIUM,Q:I.QrCode.Ecc.QUARTILE,H:I.QrCode.Ecc.HIGH},$=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function V(l){return l in Q}function j(l,d){d===void 0&&(d=0);var u=[];return l.forEach(function(s,f){var c=null;s.forEach(function(n,e){if(!n&&c!==null){u.push("M".concat(c+d," ").concat(f+d,"h").concat(e-c,"v1H").concat(c+d,"z")),c=null;return}if(e===s.length-1){if(!n)return;c===null?u.push("M".concat(e+d,",").concat(f+d," h1v1H").concat(e+d,"z")):u.push("M".concat(c+d,",").concat(f+d," h").concat(e+1-c,"v1H").concat(c+d,"z"));return}n&&c===null&&(c=e)})}),u.join("")}var _={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:H,validator:function(l){return V(l)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},q=S(S({},_),{renderAs:{type:String,required:!1,default:"canvas",validator:function(l){return["canvas","svg"].indexOf(l)>-1}}}),x=z({name:"QRCodeSvg",props:_,setup:function(l){var d=b(0),u=b(""),s=function(){var f=l.value,c=l.level,n=l.margin,e=I.QrCode.encodeText(f,Q[c]).getModules();d.value=e.length+n*2,u.value=j(e,n)};return s(),L(s),function(){return R("svg",{width:l.size,height:l.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d.value," ").concat(d.value)},[R("path",{fill:l.background,d:"M0,0 h".concat(d.value,"v").concat(d.value,"H0z")}),R("path",{fill:l.foreground,d:u.value})])}}}),ee=z({name:"QRCodeCanvas",props:_,setup:function(l){var d=b(null),u=function(){var s=l.value,f=l.level,c=l.size,n=l.margin,e=l.background,t=l.foreground,r=d.value;if(r){var a=r.getContext("2d");if(a){var o=I.QrCode.encodeText(s,Q[f]).getModules(),i=o.length+n*2,h=window.devicePixelRatio||1,v=c/i*h;r.height=r.width=c*h,a.scale(v,v),a.fillStyle=e,a.fillRect(0,0,i,i),a.fillStyle=t,$?a.fill(new Path2D(j(o,n))):o.forEach(function(m,E){m.forEach(function(g,J){g&&a.fillRect(J+n,E+n,1,1)})})}}};return G(u),L(u),function(){return R("canvas",{ref:d,style:{width:"".concat(l.size,"px"),height:"".concat(l.size,"px")}})}}}),te=z({name:"Qrcode",render:function(){var l=this.$props,d=l.renderAs,u=l.value,s=l.size,f=l.margin,c=l.level,n=l.background,e=l.foreground,t=s>>>0,r=f>>>0,a=V(c)?c:H;return R(d==="svg"?x:ee,{value:u,size:t,margin:r,level:a,background:n,foreground:e})},props:q});const re=["千磨万击还坚劲，任尔东西南北风","问渠那得清如许？为有源头活水来","欲穷千里目，更上一层楼","山不厌高，水不厌深","纸上得来终觉浅，绝知此事要躬行","路漫漫其修远兮，吾将上下而求索","积土成山，风雨兴焉；积水成渊，蛟龙生焉","博观而约取，厚积而薄发","大鹏一日同风起，扶摇直上九万里","天将降大任于斯人也","千里之行，始于足下","锲而不舍，金石可镂","工欲善其事，必先利其器","积土而为山，积水而为海","有志者事竟成","长风破浪会有时，直挂云帆济沧海","世上无难事，只要肯登攀","会当凌绝顶，一览众山小","江山代有才人出，各领风骚数百年","博学之，审问之，慎思之，明辨之，笃行之","莫听穿林打叶声，何妨吟啸且徐行","天行健，君子以自强不息"],ne=["Thanks for your downloading"],ae={zh:re,en:ne},oe={key:0,style:{display:"flex","justify-content":"center","max-width":"480px"}},le=JSON.parse('{"title":"MOD下载","description":"","frontmatter":{"title":"MOD下载","layout":"home","hero":{"name":"MOD 下载","text":" ","tagline":" ","actions":[{"theme":"brand","text":"十亿伏特"},{"theme":"brand","text":"十亿伏特 · 扩展"},{"theme":"alt","text":"历史版本","link":"https://github.com/XiaofengdiZhu/Gigavolt/releases"},{"theme":"alt","text":"查看文档","link":"/zh/before_start"}]}},"headers":[],"relativePath":"zh/download.md","filePath":"zh/download.md"}'),ie={name:"zh/download.md"},ue=Object.assign(ie,{setup(l){var f;const d=W(),u=((f=globalThis.document)==null?void 0:f.location.href)??"",s=256;return G(()=>{let c=ae[d.lang.value];document.getElementsByClassName("tagline")[0].textContent=c[Math.floor(Math.random()*c.length)],document.getElementsByClassName("clip")[0].classList.add("download")}),(c,n)=>(O(),k("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjJNT0QlRTQlQjglOEIlRTglQkQlQkQlMjIlMkMlMjJsYXlvdXQlMjIlM0ElMjJob21lJTIyJTJDJTIyaGVybyUyMiUzQSU3QiUyMm5hbWUlMjIlM0ElMjJNT0QlMjAlRTQlQjglOEIlRTglQkQlQkQlMjIlMkMlMjJ0ZXh0JTIyJTNBJTIyJTIwJTIyJTJDJTIydGFnbGluZSUyMiUzQSUyMiUyMCUyMiUyQyUyMmFjdGlvbnMlMjIlM0ElNUIlN0IlMjJ0aGVtZSUyMiUzQSUyMmJyYW5kJTIyJTJDJTIydGV4dCUyMiUzQSUyMiVFNSU4RCU4MSVFNCVCQSVCRiVFNCVCQyU4RiVFNyU4OSVCOSUyMiU3RCUyQyU3QiUyMnRoZW1lJTIyJTNBJTIyYnJhbmQlMjIlMkMlMjJ0ZXh0JTIyJTNBJTIyJUU1JThEJTgxJUU0JUJBJUJGJUU0JUJDJThGJUU3JTg5JUI5JTIwJUMyJUI3JTIwJUU2JTg5JUE5JUU1JUIxJTk1JTIyJTdEJTJDJTdCJTIydGhlbWUlMjIlM0ElMjJhbHQlMjIlMkMlMjJ0ZXh0JTIyJTNBJTIyJUU1JThFJTg2JUU1JThGJUIyJUU3JTg5JTg4JUU2JTlDJUFDJTIyJTJDJTIybGluayUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRlhpYW9mZW5nZGlaaHUlMkZHaWdhdm9sdCUyRnJlbGVhc2VzJTIyJTdEJTJDJTdCJTIydGhlbWUlMjIlM0ElMjJhbHQlMjIlMkMlMjJ0ZXh0JTIyJTNBJTIyJUU2JTlGJUE1JUU3JTlDJThCJUU2JTk2JTg3JUU2JUExJUEzJTIyJTJDJTIybGluayUyMiUzQSUyMiUyRnpoJTJGYmVmb3JlX3N0YXJ0JTIyJTdEJTVEJTdEJTJDJTIyZGF0ZSUyMiUzQTE3MjA3MTAyMDY3NTElN0Q="},[F(u).length>0?(O(),k("div",oe,[X(te,{value:F(u),level:"M","render-as":"svg",size:s,style:{padding:"16px","background-color":"white"}},null,8,["value"])])):K("",!0)]))}});export{le as __pageData,ue as default};