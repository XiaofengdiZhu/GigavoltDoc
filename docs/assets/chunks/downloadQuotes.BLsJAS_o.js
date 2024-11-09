import{d as D,a0 as N,p as B,z as G,v as $,F as X}from"./framework.C-GLQy3h.js";/*!
 * qrcode.vue v3.6.0
 * A Vue.js component to generate QRCode. Both support Vue 2 and Vue 3
 * © 2017-PRESENT @scopewu(https://github.com/scopewu)
 * MIT License.
 */var S=function(){return S=Object.assign||function(f){for(var l,u=1,d=arguments.length;u<d;u++){l=arguments[u];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(f[c]=l[c])}return f},S.apply(this,arguments)};var z;(function(o){var f=function(){function n(e,r,t,a){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(a<-1||a>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var i=[],s=0;s<this.size;s++)i.push(!1);for(var s=0;s<this.size;s++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();var h=this.addEccAndInterleave(t);if(this.drawCodewords(h),a==-1)for(var g=1e9,s=0;s<8;s++){this.applyMask(s),this.drawFormatBits(s);var M=this.getPenaltyScore();M<g&&(a=s,g=M),this.applyMask(s)}d(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}return n.encodeText=function(e,r){var t=o.QrSegment.makeSegments(e);return n.encodeSegments(t,r)},n.encodeBinary=function(e,r){var t=o.QrSegment.makeBytes(e);return n.encodeSegments([t],r)},n.encodeSegments=function(e,r,t,a,i,s){if(t===void 0&&(t=1),a===void 0&&(a=40),i===void 0&&(i=-1),s===void 0&&(s=!0),!(n.MIN_VERSION<=t&&t<=a&&a<=n.MAX_VERSION)||i<-1||i>7)throw new RangeError("Invalid value");var h,g;for(h=t;;h++){var M=n.getNumDataCodewords(h,r)*8,m=c.getTotalBits(e,h);if(m<=M){g=m;break}if(h>=a)throw new RangeError("Data too long")}for(var C=0,p=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];C<p.length;C++){var E=p[C];s&&g<=n.getNumDataCodewords(h,E)*8&&(r=E)}for(var v=[],w=0,P=e;w<P.length;w++){var R=P[w];l(R.mode.modeBits,4,v),l(R.numChars,R.mode.numCharCountBits(h),v);for(var y=0,A=R.getData();y<A.length;y++){var L=A[y];v.push(L)}}d(v.length==g);var T=n.getNumDataCodewords(h,r)*8;d(v.length<=T),l(0,Math.min(4,T-v.length),v),l(0,(8-v.length%8)%8,v),d(v.length%8==0);for(var I=236;v.length<T;I^=253)l(I,8,v);for(var b=[];b.length*8<v.length;)b.push(0);return v.forEach(function(F,_){return b[_>>>3]|=F<<7-(_&7)}),new n(h,r,b,i)},n.prototype.getModule=function(e,r){return 0<=e&&e<this.size&&0<=r&&r<this.size&&this.modules[r][e]},n.prototype.getModules=function(){return this.modules},n.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var r=this.getAlignmentPatternPositions(),t=r.length,e=0;e<t;e++)for(var a=0;a<t;a++)e==0&&a==0||e==0&&a==t-1||e==t-1&&a==0||this.drawAlignmentPattern(r[e],r[a]);this.drawFormatBits(0),this.drawVersion()},n.prototype.drawFormatBits=function(e){for(var r=this.errorCorrectionLevel.formatBits<<3|e,t=r,a=0;a<10;a++)t=t<<1^(t>>>9)*1335;var i=(r<<10|t)^21522;d(i>>>15==0);for(var a=0;a<=5;a++)this.setFunctionModule(8,a,u(i,a));this.setFunctionModule(8,7,u(i,6)),this.setFunctionModule(8,8,u(i,7)),this.setFunctionModule(7,8,u(i,8));for(var a=9;a<15;a++)this.setFunctionModule(14-a,8,u(i,a));for(var a=0;a<8;a++)this.setFunctionModule(this.size-1-a,8,u(i,a));for(var a=8;a<15;a++)this.setFunctionModule(8,this.size-15+a,u(i,a));this.setFunctionModule(8,this.size-8,!0)},n.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,r=0;r<12;r++)e=e<<1^(e>>>11)*7973;var t=this.version<<12|e;d(t>>>18==0);for(var r=0;r<18;r++){var a=u(t,r),i=this.size-11+r%3,s=Math.floor(r/3);this.setFunctionModule(i,s,a),this.setFunctionModule(s,i,a)}}},n.prototype.drawFinderPattern=function(e,r){for(var t=-4;t<=4;t++)for(var a=-4;a<=4;a++){var i=Math.max(Math.abs(a),Math.abs(t)),s=e+a,h=r+t;0<=s&&s<this.size&&0<=h&&h<this.size&&this.setFunctionModule(s,h,i!=2&&i!=4)}},n.prototype.drawAlignmentPattern=function(e,r){for(var t=-2;t<=2;t++)for(var a=-2;a<=2;a++)this.setFunctionModule(e+a,r+t,Math.max(Math.abs(a),Math.abs(t))!=1)},n.prototype.setFunctionModule=function(e,r,t){this.modules[r][e]=t,this.isFunction[r][e]=!0},n.prototype.addEccAndInterleave=function(e){var r=this.version,t=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(r,t))throw new RangeError("Invalid argument");for(var a=n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][r],i=n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][r],s=Math.floor(n.getNumRawDataModules(r)/8),h=a-s%a,g=Math.floor(s/a),M=[],m=n.reedSolomonComputeDivisor(i),C=0,p=0;C<a;C++){var E=e.slice(p,p+g-i+(C<h?0:1));p+=E.length;var v=n.reedSolomonComputeRemainder(E,m);C<h&&E.push(0),M.push(E.concat(v))}for(var w=[],P=function(R){M.forEach(function(y,A){(R!=g-i||A>=h)&&w.push(y[R])})},C=0;C<M[0].length;C++)P(C);return d(w.length==s),w},n.prototype.drawCodewords=function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var r=0,t=this.size-1;t>=1;t-=2){t==6&&(t=5);for(var a=0;a<this.size;a++)for(var i=0;i<2;i++){var s=t-i,h=(t+1&2)==0,g=h?this.size-1-a:a;!this.isFunction[g][s]&&r<e.length*8&&(this.modules[g][s]=u(e[r>>>3],7-(r&7)),r++)}}d(r==e.length*8)},n.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var r=0;r<this.size;r++)for(var t=0;t<this.size;t++){var a=void 0;switch(e){case 0:a=(t+r)%2==0;break;case 1:a=r%2==0;break;case 2:a=t%3==0;break;case 3:a=(t+r)%3==0;break;case 4:a=(Math.floor(t/3)+Math.floor(r/2))%2==0;break;case 5:a=t*r%2+t*r%3==0;break;case 6:a=(t*r%2+t*r%3)%2==0;break;case 7:a=((t+r)%2+t*r%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[r][t]&&a&&(this.modules[r][t]=!this.modules[r][t])}},n.prototype.getPenaltyScore=function(){for(var e=0,r=0;r<this.size;r++){for(var t=!1,a=0,i=[0,0,0,0,0,0,0],s=0;s<this.size;s++)this.modules[r][s]==t?(a++,a==5?e+=n.PENALTY_N1:a>5&&e++):(this.finderPenaltyAddHistory(a,i),t||(e+=this.finderPenaltyCountPatterns(i)*n.PENALTY_N3),t=this.modules[r][s],a=1);e+=this.finderPenaltyTerminateAndCount(t,a,i)*n.PENALTY_N3}for(var s=0;s<this.size;s++){for(var t=!1,h=0,i=[0,0,0,0,0,0,0],r=0;r<this.size;r++)this.modules[r][s]==t?(h++,h==5?e+=n.PENALTY_N1:h>5&&e++):(this.finderPenaltyAddHistory(h,i),t||(e+=this.finderPenaltyCountPatterns(i)*n.PENALTY_N3),t=this.modules[r][s],h=1);e+=this.finderPenaltyTerminateAndCount(t,h,i)*n.PENALTY_N3}for(var r=0;r<this.size-1;r++)for(var s=0;s<this.size-1;s++){var g=this.modules[r][s];g==this.modules[r][s+1]&&g==this.modules[r+1][s]&&g==this.modules[r+1][s+1]&&(e+=n.PENALTY_N2)}for(var M=0,m=0,C=this.modules;m<C.length;m++){var p=C[m];M=p.reduce(function(w,P){return w+(P?1:0)},M)}var E=this.size*this.size,v=Math.ceil(Math.abs(M*20-E*10)/E)-1;return d(0<=v&&v<=9),e+=v*n.PENALTY_N4,d(0<=e&&e<=2568888),e},n.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,r=Math.floor((this.version*8+e*3+5)/(e*4-4))*2,t=[6],a=this.size-7;t.length<e;a-=r)t.splice(1,0,a);return t},n.getNumRawDataModules=function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var r=(16*e+128)*e+64;if(e>=2){var t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return d(208<=r&&r<=29648),r},n.getNumDataCodewords=function(e,r){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]},n.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var r=[],t=0;t<e-1;t++)r.push(0);r.push(1);for(var a=1,t=0;t<e;t++){for(var i=0;i<r.length;i++)r[i]=n.reedSolomonMultiply(r[i],a),i+1<r.length&&(r[i]^=r[i+1]);a=n.reedSolomonMultiply(a,2)}return r},n.reedSolomonComputeRemainder=function(e,r){for(var t=r.map(function(g){return 0}),a=function(g){var M=g^t.shift();t.push(0),r.forEach(function(m,C){return t[C]^=n.reedSolomonMultiply(m,M)})},i=0,s=e;i<s.length;i++){var h=s[i];a(h)}return t},n.reedSolomonMultiply=function(e,r){if(e>>>8||r>>>8)throw new RangeError("Byte out of range");for(var t=0,a=7;a>=0;a--)t=t<<1^(t>>>7)*285,t^=(r>>>a&1)*e;return d(t>>>8==0),t},n.prototype.finderPenaltyCountPatterns=function(e){var r=e[1];d(r<=this.size*3);var t=r>0&&e[2]==r&&e[3]==r*3&&e[4]==r&&e[5]==r;return(t&&e[0]>=r*4&&e[6]>=r?1:0)+(t&&e[6]>=r*4&&e[0]>=r?1:0)},n.prototype.finderPenaltyTerminateAndCount=function(e,r,t){return e&&(this.finderPenaltyAddHistory(r,t),r=0),r+=this.size,this.finderPenaltyAddHistory(r,t),this.finderPenaltyCountPatterns(t)},n.prototype.finderPenaltyAddHistory=function(e,r){r[0]==0&&(e+=this.size),r.pop(),r.unshift(e)},n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n}();o.QrCode=f;function l(n,e,r){if(e<0||e>31||n>>>e)throw new RangeError("Value out of range");for(var t=e-1;t>=0;t--)r.push(n>>>t&1)}function u(n,e){return(n>>>e&1)!=0}function d(n){if(!n)throw new Error("Assertion error")}var c=function(){function n(e,r,t){if(this.mode=e,this.numChars=r,this.bitData=t,r<0)throw new RangeError("Invalid argument");this.bitData=t.slice()}return n.makeBytes=function(e){for(var r=[],t=0,a=e;t<a.length;t++){var i=a[t];l(i,8,r)}return new n(n.Mode.BYTE,e.length,r)},n.makeNumeric=function(e){if(!n.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var r=[],t=0;t<e.length;){var a=Math.min(e.length-t,3);l(parseInt(e.substring(t,t+a),10),a*3+1,r),t+=a}return new n(n.Mode.NUMERIC,e.length,r)},n.makeAlphanumeric=function(e){if(!n.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var r=[],t;for(t=0;t+2<=e.length;t+=2){var a=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t))*45;a+=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),l(a,11,r)}return t<e.length&&l(n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,r),new n(n.Mode.ALPHANUMERIC,e.length,r)},n.makeSegments=function(e){return e==""?[]:n.isNumeric(e)?[n.makeNumeric(e)]:n.isAlphanumeric(e)?[n.makeAlphanumeric(e)]:[n.makeBytes(n.toUtf8ByteArray(e))]},n.makeEci=function(e){var r=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)l(e,8,r);else if(e<16384)l(2,2,r),l(e,14,r);else if(e<1e6)l(6,3,r),l(e,21,r);else throw new RangeError("ECI assignment value out of range");return new n(n.Mode.ECI,0,r)},n.isNumeric=function(e){return n.NUMERIC_REGEX.test(e)},n.isAlphanumeric=function(e){return n.ALPHANUMERIC_REGEX.test(e)},n.prototype.getData=function(){return this.bitData.slice()},n.getTotalBits=function(e,r){for(var t=0,a=0,i=e;a<i.length;a++){var s=i[a],h=s.mode.numCharCountBits(r);if(s.numChars>=1<<h)return 1/0;t+=4+h+s.bitData.length}return t},n.toUtf8ByteArray=function(e){e=encodeURI(e);for(var r=[],t=0;t<e.length;t++)e.charAt(t)!="%"?r.push(e.charCodeAt(t)):(r.push(parseInt(e.substring(t+1,t+3),16)),t+=2);return r},n.NUMERIC_REGEX=/^[0-9]*$/,n.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,n.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",n}();o.QrSegment=c})(z||(z={}));(function(o){(function(f){var l=function(){function u(d,c){this.ordinal=d,this.formatBits=c}return u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),u}();f.Ecc=l})(o.QrCode||(o.QrCode={}))})(z||(z={}));(function(o){(function(f){var l=function(){function u(d,c){this.modeBits=d,this.numBitsCharCount=c}return u.prototype.numCharCountBits=function(d){return this.numBitsCharCount[Math.floor((d+7)/17)]},u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),u}();f.Mode=l})(o.QrSegment||(o.QrSegment={}))})(z||(z={}));var O=z,Q="L",U={L:O.QrCode.Ecc.LOW,M:O.QrCode.Ecc.MEDIUM,Q:O.QrCode.Ecc.QUARTILE,H:O.QrCode.Ecc.HIGH},J=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function k(o){return o in U}function Y(o,f){f===void 0&&(f=0);var l=[];return o.forEach(function(u,d){var c=null;u.forEach(function(n,e){if(!n&&c!==null){l.push("M".concat(c+f," ").concat(d+f,"h").concat(e-c,"v1H").concat(c+f,"z")),c=null;return}if(e===u.length-1){if(!n)return;c===null?l.push("M".concat(e+f,",").concat(d+f," h1v1H").concat(e+f,"z")):l.push("M".concat(c+f,",").concat(d+f," h").concat(e+1-c,"v1H").concat(c+f,"z"));return}n&&c===null&&(c=e)})}),l.join("")}function K(o,f,l,u){var d=u.width,c=u.height,n=u.x,e=u.y,r=o.length+l*2,t=Math.floor(f*.1),a=r/f,i=(d||t)*a,s=(c||t)*a,h=n==null?o.length/2-i/2:n*a,g=e==null?o.length/2-s/2:e*a,M=null;if(u.excavate){var m=Math.floor(h),C=Math.floor(g),p=Math.ceil(i+h-m),E=Math.ceil(s+g-C);M={x:m,y:C,w:p,h:E}}return{x:h,y:g,h:s,w:i,excavation:M}}function W(o,f){return o.slice().map(function(l,u){return u<f.y||u>=f.y+f.h?l:l.map(function(d,c){return c<f.x||c>=f.x+f.w?d:!1})})}var H={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:Q,validator:function(o){return k(o)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0},imageSettings:{type:Object,required:!1,default:function(){return{}}},gradient:{type:Boolean,required:!1,default:!1},gradientType:{type:String,required:!1,default:"linear",validator:function(o){return["linear","radial"].indexOf(o)>-1}},gradientStartColor:{type:String,required:!1,default:"#000"},gradientEndColor:{type:String,required:!1,default:"#fff"}},V=S(S({},H),{renderAs:{type:String,required:!1,default:"canvas",validator:function(o){return["canvas","svg"].indexOf(o)>-1}}}),Z=D({name:"QRCodeSvg",props:H,setup:function(o){var f=B(0),l=B(""),u,d=function(){var n=o.value,e=o.level,r=o.margin,t=r>>>0,a=k(e)?e:Q,i=O.QrCode.encodeText(n,U[a]).getModules();if(f.value=i.length+t*2,o.imageSettings.src){var s=K(i,o.size,t,o.imageSettings);u={x:s.x+t,y:s.y+t,width:s.w,height:s.h},s.excavation&&(i=W(i,s.excavation))}l.value=Y(i,t)},c=function(){if(!o.gradient)return null;var n=o.gradientType==="linear"?{x1:"0%",y1:"0%",x2:"100%",y2:"100%"}:{cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"};return N(o.gradientType==="linear"?"linearGradient":"radialGradient",S({id:"qr-gradient"},n),[N("stop",{offset:"0%",style:{stopColor:o.gradientStartColor}}),N("stop",{offset:"100%",style:{stopColor:o.gradientEndColor}})])};return d(),G(d),function(){return N("svg",{width:o.size,height:o.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f.value," ").concat(f.value)},[N("defs",{},[c()]),N("rect",{width:"100%",height:"100%",fill:o.background}),N("path",{fill:o.gradient?"url(#qr-gradient)":o.foreground,d:l.value}),o.imageSettings.src&&N("image",S({href:o.imageSettings.src},u))])}}}),x=D({name:"QRCodeCanvas",props:H,setup:function(o,f){var l=B(null),u=B(null),d=function(){var n=o.value,e=o.level,r=o.size,t=o.margin,a=o.background,i=o.foreground,s=o.gradient,h=o.gradientType,g=o.gradientStartColor,M=o.gradientEndColor,m=t>>>0,C=k(e)?e:Q,p=l.value;if(p){var E=p.getContext("2d");if(E){var v=O.QrCode.encodeText(n,U[C]).getModules(),w=v.length+m*2,P=u.value,R={x:0,y:0,width:0,height:0},y=o.imageSettings.src&&P!=null&&P.naturalWidth!==0&&P.naturalHeight!==0;if(y){var A=K(v,o.size,m,o.imageSettings);R={x:A.x+m,y:A.y+m,width:A.w,height:A.h},A.excavation&&(v=W(v,A.excavation))}var L=window.devicePixelRatio||1,T=r/w*L;if(p.height=p.width=r*L,E.scale(T,T),E.fillStyle=a,E.fillRect(0,0,w,w),s){var I=void 0;h==="linear"?I=E.createLinearGradient(0,0,w,w):I=E.createRadialGradient(w/2,w/2,0,w/2,w/2,w/2),I.addColorStop(0,g),I.addColorStop(1,M),E.fillStyle=I}else E.fillStyle=i;J?E.fill(new Path2D(Y(v,m))):v.forEach(function(b,F){b.forEach(function(_,q){_&&E.fillRect(q+m,F+m,1,1)})}),y&&E.drawImage(P,R.x,R.y,R.width,R.height)}}};$(d),G(d);var c=f.attrs.style;return function(){return N(X,[N("canvas",S(S({},f.attrs),{ref:l,style:S(S({},c),{width:"".concat(o.size,"px"),height:"".concat(o.size,"px")})})),o.imageSettings.src&&N("img",{ref:u,src:o.imageSettings.src,style:{display:"none"},onLoad:d})])}}}),te=D({name:"Qrcode",render:function(){var o=this.$props,f=o.renderAs,l=o.value,u=o.size,d=o.margin,c=o.level,n=o.background,e=o.foreground,r=o.imageSettings,t=o.gradient,a=o.gradientType,i=o.gradientStartColor,s=o.gradientEndColor;return N(f==="svg"?Z:x,{value:l,size:u,margin:d,level:c,background:n,foreground:e,imageSettings:r,gradient:t,gradientType:a,gradientStartColor:i,gradientEndColor:s})},props:V});const j=["千磨万击还坚劲，任尔东西南北风","问渠那得清如许？为有源头活水来","欲穷千里目，更上一层楼","山不厌高，水不厌深","纸上得来终觉浅，绝知此事要躬行","路漫漫其修远兮，吾将上下而求索","积土成山，风雨兴焉；积水成渊，蛟龙生焉","博观而约取，厚积而薄发","大鹏一日同风起，扶摇直上九万里","天将降大任于斯人也","千里之行，始于足下","锲而不舍，金石可镂","工欲善其事，必先利其器","积土而为山，积水而为海","有志者事竟成","长风破浪会有时，直挂云帆济沧海","世上无难事，只要肯登攀","会当凌绝顶，一览众山小","江山代有才人出，各领风骚数百年","博学之，审问之，慎思之，明辨之，笃行之","莫听穿林打叶声，何妨吟啸且徐行","天行健，君子以自强不息"],ee=["Thanks for your downloading"],ne={zh:j,en:ee};export{te as Q,ne as d};