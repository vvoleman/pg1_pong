var Co=Object.defineProperty;var Lo=(r,e,t)=>e in r?Co(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Q=(r,e,t)=>(Lo(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ut=(r,e,t)=>{r.keydown=e,r.keyup=t};var Mn=(r=>(r.PAUSE="pause",r.BALL_LEFT="ball-left",r.BALL_RIGHT="ball-right",r.BALL_UP="left-player-up",r.BALL_DOWN="left-player-down",r.STOP_BALL="stop-ball",r))(Mn||{});const Po={pause:{name:"Pozastavit",default:"p",keydown:()=>{},keyup:()=>{}},["ball-left"]:{name:"Pozastavit",default:"4",keydown:()=>{},keyup:()=>{}},["ball-right"]:{name:"Pozastavit",default:"6",keydown:()=>{},keyup:()=>{}},["left-player-up"]:{name:"Pozastavit",default:"8",keydown:()=>{},keyup:()=>{}},["left-player-down"]:{name:"Pozastavit",default:"2",keydown:()=>{},keyup:()=>{}},["stop-ball"]:{name:"STOP",default:"5",keydown:()=>{},keyup:()=>{}}};var bn=(r=>(r.UP="keyup",r.DOWN="keydown",r.PRESS="keypress",r))(bn||{});const Mr=class{constructor(){Q(this,"keyEvents");this.keyEvents={keyup:{},keydown:{},keypress:{}},this.setupListeners()}setupListeners(){const e=["keyup","keydown","keypress"];for(const t of e)document.addEventListener(t,n=>{const i=n.key;if(this.keyEvents[t][i]!==void 0)for(const s of this.keyEvents[t][i])s(n)})}addListener(e,t,n){if(this.keyEvents[t]===void 0)throw new Error("Event not supported");return this.keyEvents[t][e]===void 0&&(this.keyEvents[t][e]=[]),this.keyEvents[t][e].push(n),this}removeListener(e,t,n){if(this.keyEvents[t]===void 0)throw new Error("Event not supported");if(this.keyEvents[t][e]===void 0)return this;const i=this.keyEvents[t][e].indexOf(n);return i>-1&&this.keyEvents[t][e].splice(i,1),this}static getInstance(){return this.instance===void 0&&(this.instance=new Mr),this.instance}};let ts=Mr;Q(ts,"instance");const $n=class{constructor(){Q(this,"controls",{});Q(this,"_manager",ts.getInstance())}static getInstance(){return $n.instance||($n.instance=new $n),$n.instance}add(e,t){this.controls[e]=t,this._manager.addListener(t.default,bn.DOWN,t.keydown),this._manager.addListener(t.default,bn.UP,t.keyup),t.keypress&&this._manager.addListener(t.default,bn.PRESS,t.keypress)}remove(e){const t=this.controls[e];this._manager.removeListener(t.default,bn.DOWN,t.keydown),this._manager.removeListener(t.default,bn.UP,t.keyup),this.controls[e].keypress!==void 0&&this._manager.removeListener(t.default,bn.PRESS,t.keypress),delete this.controls[e]}clearAll(){for(const e in this.controls)this.remove(e)}};let yi=$n;Q(yi,"instance");const fr="147",Ro=0,Er=1,Do=2,Xa=1,Io=2,_i=3,si=0,Tt=1,an=2,ln=0,ei=1,Cr=2,Lr=3,Pr=4,Fo=5,Zn=100,No=101,Uo=102,Rr=103,Dr=104,Oo=200,zo=201,Bo=202,Vo=203,ja=204,Ya=205,Go=206,ko=207,Ho=208,Wo=209,qo=210,Xo=0,jo=1,Yo=2,ir=3,Zo=4,Jo=5,$o=6,Ko=7,Za=0,Qo=1,el=2,$t=0,tl=1,nl=2,il=3,sl=4,rl=5,Ja=300,ri=301,ai=302,sr=303,rr=304,ls=306,ar=1e3,Nt=1001,or=1002,ct=1003,Ir=1004,Fr=1005,wt=1006,al=1007,cs=1008,Pn=1009,ol=1010,ll=1011,$a=1012,cl=1013,Tn=1014,En=1015,Ai=1016,ul=1017,hl=1018,ti=1020,dl=1021,fl=1022,Ut=1023,pl=1024,ml=1025,Cn=1026,oi=1027,gl=1028,_l=1029,xl=1030,vl=1031,yl=1033,vs=33776,ys=33777,Ms=33778,bs=33779,Nr=35840,Ur=35841,Or=35842,zr=35843,Ml=36196,Br=37492,Vr=37496,Gr=37808,kr=37809,Hr=37810,Wr=37811,qr=37812,Xr=37813,jr=37814,Yr=37815,Zr=37816,Jr=37817,$r=37818,Kr=37819,Qr=37820,ea=37821,ta=36492,Rn=3e3,Be=3001,bl=3200,Sl=3201,Al=0,wl=1,zt="srgb",wi="srgb-linear",Ss=7680,Tl=519,na=35044,ia="300 es",lr=1035;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],As=Math.PI/180,sa=180/Math.PI;function Ei(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(et[r&255]+et[r>>8&255]+et[r>>16&255]+et[r>>24&255]+"-"+et[e&255]+et[e>>8&255]+"-"+et[e>>16&15|64]+et[e>>24&255]+"-"+et[t&63|128]+et[t>>8&255]+"-"+et[t>>16&255]+et[t>>24&255]+et[n&255]+et[n>>8&255]+et[n>>16&255]+et[n>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function El(r,e){return(r%e+e)%e}function ws(r,e,t){return(1-t)*r+t*e}function ra(r){return(r&r-1)===0&&r!==0}function cr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Pi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,u,l){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=u,c[6]=n,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],u=n[6],l=n[1],c=n[4],h=n[7],f=n[2],m=n[5],x=n[8],p=i[0],d=i[3],g=i[6],w=i[1],S=i[4],A=i[7],M=i[2],C=i[5],F=i[8];return s[0]=o*p+a*w+u*M,s[3]=o*d+a*S+u*C,s[6]=o*g+a*A+u*F,s[1]=l*p+c*w+h*M,s[4]=l*d+c*S+h*C,s[7]=l*g+c*A+h*F,s[2]=f*p+m*w+x*M,s[5]=f*d+m*S+x*C,s[8]=f*g+m*A+x*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],c=e[8];return t*o*c-t*a*l-n*s*c+n*a*u+i*s*l-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],c=e[8],h=c*o-a*l,f=a*u-c*s,m=l*s-o*u,x=t*h+n*f+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=h*p,e[1]=(i*l-c*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(c*t-i*u)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*u-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const u=Math.cos(s),l=Math.sin(s);return this.set(n*u,n*l,-n*(u*o+l*a)+o+e,-i*l,i*u,-i*(-l*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ts.makeScale(e,t)),this}rotate(e){return this.premultiply(Ts.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ts.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ts=new vt;function Ka(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function as(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ln(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ns(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Es={[zt]:{[wi]:Ln},[wi]:{[zt]:ns}},ot={legacyMode:!0,get workingColorSpace(){return wi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Es[e]&&Es[e][t]!==void 0){const n=Es[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Qa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},We={r:0,g:0,b:0},Rt={h:0,s:0,l:0},Ri={h:0,s:0,l:0};function Cs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Di(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=El(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Cs(o,s,e+1/3),this.g=Cs(o,s,e),this.b=Cs(o,s,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ot.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ot.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const u=parseFloat(s[1])/360,l=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return n(s[4]),this.setHSL(u,l,c,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ot.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ot.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=zt){const n=Qa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ot.fromWorkingColorSpace(Di(this,We),e),_t(We.r*255,0,255)<<16^_t(We.g*255,0,255)<<8^_t(We.b*255,0,255)<<0}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Di(this,We),t);const n=We.r,i=We.g,s=We.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let u,l;const c=(a+o)/2;if(a===o)u=0,l=0;else{const h=o-a;switch(l=c<=.5?h/(o+a):h/(2-o-a),o){case n:u=(i-s)/h+(i<s?6:0);break;case i:u=(s-n)/h+2;break;case s:u=(n-i)/h+4;break}u/=6}return e.h=u,e.s=l,e.l=c,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Di(this,We),t),e.r=We.r,e.g=We.g,e.b=We.b,e}getStyle(e=zt){return ot.fromWorkingColorSpace(Di(this,We),e),e!==zt?`color(${e} ${We.r} ${We.g} ${We.b})`:`rgb(${We.r*255|0},${We.g*255|0},${We.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Rt),Rt.h+=e,Rt.s+=t,Rt.l+=n,this.setHSL(Rt.h,Rt.s,Rt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rt),e.getHSL(Ri);const n=ws(Rt.h,Ri.h,t),i=ws(Rt.s,Ri.s,t),s=ws(Rt.l,Ri.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ze.NAMES=Qa;let Nn;class eo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Nn===void 0&&(Nn=as("canvas")),Nn.width=e.width,Nn.height=e.height;const n=Nn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Nn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ln(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class to{constructor(e=null){this.isSource=!0,this.uuid=Ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ls(i[o].image)):s.push(Ls(i[o]))}else s=Ls(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ls(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?eo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cl=0;class Mt extends ci{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Nt,i=Nt,s=wt,o=cs,a=Ut,u=Pn,l=Mt.DEFAULT_ANISOTROPY,c=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=Ei(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ja)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Ja;Mt.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,l=u[0],c=u[4],h=u[8],f=u[1],m=u[5],x=u[9],p=u[2],d=u[6],g=u[10];if(Math.abs(c-f)<.01&&Math.abs(h-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+p)<.1&&Math.abs(x+d)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,A=(m+1)/2,M=(g+1)/2,C=(c+f)/4,F=(h+p)/4,_=(x+d)/4;return S>A&&S>M?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=C/n,s=F/n):A>M?A<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(A),n=C/i,s=_/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=F/s,i=_/s),this.set(n,i,s,t),this}let w=Math.sqrt((d-x)*(d-x)+(h-p)*(h-p)+(f-c)*(f-c));return Math.abs(w)<.001&&(w=1),this.x=(d-x)/w,this.y=(h-p)/w,this.z=(f-c)/w,this.w=Math.acos((l+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dn extends ci{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new to(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class no extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let u=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],x=s[o+2],p=s[o+3];if(a===0){e[t+0]=u,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(h!==p||u!==f||l!==m||c!==x){let d=1-a;const g=u*f+l*m+c*x+h*p,w=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){const M=Math.sqrt(S),C=Math.atan2(M,g*w);d=Math.sin(d*C)/M,a=Math.sin(a*C)/M}const A=a*w;if(u=u*d+f*A,l=l*d+m*A,c=c*d+x*A,h=h*d+p*A,d===1-a){const M=1/Math.sqrt(u*u+l*l+c*c+h*h);u*=M,l*=M,c*=M,h*=M}}e[t]=u,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],u=n[i+1],l=n[i+2],c=n[i+3],h=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+c*h+u*m-l*f,e[t+1]=u*x+c*f+l*h-a*m,e[t+2]=l*x+c*m+a*f-u*h,e[t+3]=c*x-a*h-u*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,u=Math.sin,l=a(n/2),c=a(i/2),h=a(s/2),f=u(n/2),m=u(i/2),x=u(s/2);switch(o){case"XYZ":this._x=f*c*h+l*m*x,this._y=l*m*h-f*c*x,this._z=l*c*x+f*m*h,this._w=l*c*h-f*m*x;break;case"YXZ":this._x=f*c*h+l*m*x,this._y=l*m*h-f*c*x,this._z=l*c*x-f*m*h,this._w=l*c*h+f*m*x;break;case"ZXY":this._x=f*c*h-l*m*x,this._y=l*m*h+f*c*x,this._z=l*c*x+f*m*h,this._w=l*c*h-f*m*x;break;case"ZYX":this._x=f*c*h-l*m*x,this._y=l*m*h+f*c*x,this._z=l*c*x-f*m*h,this._w=l*c*h+f*m*x;break;case"YZX":this._x=f*c*h+l*m*x,this._y=l*m*h+f*c*x,this._z=l*c*x-f*m*h,this._w=l*c*h-f*m*x;break;case"XZY":this._x=f*c*h-l*m*x,this._y=l*m*h-f*c*x,this._z=l*c*x+f*m*h,this._w=l*c*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],u=t[9],l=t[2],c=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-u)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(c-u)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(u+c)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(u+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,u=t._y,l=t._z,c=t._w;return this._x=n*c+o*a+i*l-s*u,this._y=i*c+o*u+s*a-n*l,this._z=s*c+o*l+n*u-i*a,this._w=o*c-n*a-i*u-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(u),c=Math.atan2(l,a),h=Math.sin((1-t)*c)/l,f=Math.sin(t*c)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,u=e.w,l=u*t+o*i-a*n,c=u*n+a*t-s*i,h=u*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=l*u+f*-s+c*-a-h*-o,this.y=c*u+f*-o+h*-s-l*-a,this.z=h*u+f*-a+l*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,u=t.z;return this.x=i*u-s*a,this.y=s*o-n*u,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ps.copy(this).projectOnVector(e),this.sub(Ps)}reflect(e){return this.sub(Ps.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ps=new P,aa=new ui;class Vt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let u=0,l=e.length;u<l;u+=3){const c=e[u],h=e[u+1],f=e[u+2];c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let u=0,l=e.count;u<l;u++){const c=e.getX(u),h=e.getY(u),f=e.getZ(u);c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)gn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(gn)}else n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox),Rs.applyMatrix4(e.matrixWorld),this.union(Rs);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fi),Ii.subVectors(this.max,fi),Un.subVectors(e.a,fi),On.subVectors(e.b,fi),zn.subVectors(e.c,fi),Kt.subVectors(On,Un),Qt.subVectors(zn,On),_n.subVectors(Un,zn);let t=[0,-Kt.z,Kt.y,0,-Qt.z,Qt.y,0,-_n.z,_n.y,Kt.z,0,-Kt.x,Qt.z,0,-Qt.x,_n.z,0,-_n.x,-Kt.y,Kt.x,0,-Qt.y,Qt.x,0,-_n.y,_n.x,0];return!Ds(t,Un,On,zn,Ii)||(t=[1,0,0,0,1,0,0,0,1],!Ds(t,Un,On,zn,Ii))?!1:(Fi.crossVectors(Kt,Qt),t=[Fi.x,Fi.y,Fi.z],Ds(t,Un,On,zn,Ii))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return gn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wt=[new P,new P,new P,new P,new P,new P,new P,new P],gn=new P,Rs=new Vt,Un=new P,On=new P,zn=new P,Kt=new P,Qt=new P,_n=new P,fi=new P,Ii=new P,Fi=new P,xn=new P;function Ds(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){xn.fromArray(r,s);const a=i.x*Math.abs(xn.x)+i.y*Math.abs(xn.y)+i.z*Math.abs(xn.z),u=e.dot(xn),l=t.dot(xn),c=n.dot(xn);if(Math.max(-Math.max(u,l,c),Math.min(u,l,c))>a)return!1}return!0}const Pl=new Vt,pi=new P,Is=new P;let us=class{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pi.subVectors(e,this.center);const t=pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(pi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Is.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pi.copy(e.center).add(Is)),this.expandByPoint(pi.copy(e.center).sub(Is))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const qt=new P,Fs=new P,Ni=new P,en=new P,Ns=new P,Ui=new P,Us=new P;class io{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qt.copy(this.direction).multiplyScalar(t).add(this.origin),qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fs.copy(e).add(t).multiplyScalar(.5),Ni.copy(t).sub(e).normalize(),en.copy(this.origin).sub(Fs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ni),a=en.dot(this.direction),u=-en.dot(Ni),l=en.lengthSq(),c=Math.abs(1-o*o);let h,f,m,x;if(c>0)if(h=o*u-a,f=o*a-u,x=s*c,h>=0)if(f>=-x)if(f<=x){const p=1/c;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*u)+l}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*u)+l;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*u)+l;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-u),s),m=-h*h+f*(f+2*u)+l):f<=x?(h=0,f=Math.min(Math.max(-s,-u),s),m=f*(f+2*u)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-u),s),m=-h*h+f*(f+2*u)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*u)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Ni).multiplyScalar(f).add(Fs),m}intersectSphere(e,t){qt.subVectors(e.center,this.origin);const n=qt.dot(this.direction),i=qt.dot(qt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,u=n+o;return a<0&&u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,u;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,u=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,u=(e.min.z-f.z)*h),n>u||a>i)||((a>n||n!==n)&&(n=a),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qt)!==null}intersectTriangle(e,t,n,i,s){Ns.subVectors(t,e),Ui.subVectors(n,e),Us.crossVectors(Ns,Ui);let o=this.direction.dot(Us),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;en.subVectors(this.origin,e);const u=a*this.direction.dot(Ui.crossVectors(en,Ui));if(u<0)return null;const l=a*this.direction.dot(Ns.cross(en));if(l<0||u+l>o)return null;const c=-a*en.dot(Us);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,u,l,c,h,f,m,x,p,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=u,g[2]=l,g[6]=c,g[10]=h,g[14]=f,g[3]=m,g[7]=x,g[11]=p,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Bn.setFromMatrixColumn(e,0).length(),s=1/Bn.setFromMatrixColumn(e,1).length(),o=1/Bn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,m=o*h,x=a*c,p=a*h;t[0]=u*c,t[4]=-u*h,t[8]=l,t[1]=m+x*l,t[5]=f-p*l,t[9]=-a*u,t[2]=p-f*l,t[6]=x+m*l,t[10]=o*u}else if(e.order==="YXZ"){const f=u*c,m=u*h,x=l*c,p=l*h;t[0]=f+p*a,t[4]=x*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=m*a-x,t[6]=p+f*a,t[10]=o*u}else if(e.order==="ZXY"){const f=u*c,m=u*h,x=l*c,p=l*h;t[0]=f-p*a,t[4]=-o*h,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*c,t[9]=p-f*a,t[2]=-o*l,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const f=o*c,m=o*h,x=a*c,p=a*h;t[0]=u*c,t[4]=x*l-m,t[8]=f*l+p,t[1]=u*h,t[5]=p*l+f,t[9]=m*l-x,t[2]=-l,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const f=o*u,m=o*l,x=a*u,p=a*l;t[0]=u*c,t[4]=p-f*h,t[8]=x*h+m,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-l*c,t[6]=m*h+x,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*u,m=o*l,x=a*u,p=a*l;t[0]=u*c,t[4]=-h,t[8]=l*c,t[1]=f*h+p,t[5]=o*c,t[9]=m*h-x,t[2]=x*h-m,t[6]=a*c,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rl,e,Dl)}lookAt(e,t,n){const i=this.elements;return mt.subVectors(e,t),mt.lengthSq()===0&&(mt.z=1),mt.normalize(),tn.crossVectors(n,mt),tn.lengthSq()===0&&(Math.abs(n.z)===1?mt.x+=1e-4:mt.z+=1e-4,mt.normalize(),tn.crossVectors(n,mt)),tn.normalize(),Oi.crossVectors(mt,tn),i[0]=tn.x,i[4]=Oi.x,i[8]=mt.x,i[1]=tn.y,i[5]=Oi.y,i[9]=mt.y,i[2]=tn.z,i[6]=Oi.z,i[10]=mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],u=n[8],l=n[12],c=n[1],h=n[5],f=n[9],m=n[13],x=n[2],p=n[6],d=n[10],g=n[14],w=n[3],S=n[7],A=n[11],M=n[15],C=i[0],F=i[4],_=i[8],T=i[12],I=i[1],X=i[5],le=i[9],N=i[13],D=i[2],q=i[6],J=i[10],Y=i[14],W=i[3],ee=i[7],$=i[11],U=i[15];return s[0]=o*C+a*I+u*D+l*W,s[4]=o*F+a*X+u*q+l*ee,s[8]=o*_+a*le+u*J+l*$,s[12]=o*T+a*N+u*Y+l*U,s[1]=c*C+h*I+f*D+m*W,s[5]=c*F+h*X+f*q+m*ee,s[9]=c*_+h*le+f*J+m*$,s[13]=c*T+h*N+f*Y+m*U,s[2]=x*C+p*I+d*D+g*W,s[6]=x*F+p*X+d*q+g*ee,s[10]=x*_+p*le+d*J+g*$,s[14]=x*T+p*N+d*Y+g*U,s[3]=w*C+S*I+A*D+M*W,s[7]=w*F+S*X+A*q+M*ee,s[11]=w*_+S*le+A*J+M*$,s[15]=w*T+S*N+A*Y+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],u=e[9],l=e[13],c=e[2],h=e[6],f=e[10],m=e[14],x=e[3],p=e[7],d=e[11],g=e[15];return x*(+s*u*h-i*l*h-s*a*f+n*l*f+i*a*m-n*u*m)+p*(+t*u*m-t*l*f+s*o*f-i*o*m+i*l*c-s*u*c)+d*(+t*l*h-t*a*m-s*o*h+n*o*m+s*a*c-n*l*c)+g*(-i*a*c-t*u*h+t*a*f+i*o*h-n*o*f+n*u*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],c=e[8],h=e[9],f=e[10],m=e[11],x=e[12],p=e[13],d=e[14],g=e[15],w=h*d*l-p*f*l+p*u*m-a*d*m-h*u*g+a*f*g,S=x*f*l-c*d*l-x*u*m+o*d*m+c*u*g-o*f*g,A=c*p*l-x*h*l+x*a*m-o*p*m-c*a*g+o*h*g,M=x*h*u-c*p*u-x*a*f+o*p*f+c*a*d-o*h*d,C=t*w+n*S+i*A+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/C;return e[0]=w*F,e[1]=(p*f*s-h*d*s-p*i*m+n*d*m+h*i*g-n*f*g)*F,e[2]=(a*d*s-p*u*s+p*i*l-n*d*l-a*i*g+n*u*g)*F,e[3]=(h*u*s-a*f*s-h*i*l+n*f*l+a*i*m-n*u*m)*F,e[4]=S*F,e[5]=(c*d*s-x*f*s+x*i*m-t*d*m-c*i*g+t*f*g)*F,e[6]=(x*u*s-o*d*s-x*i*l+t*d*l+o*i*g-t*u*g)*F,e[7]=(o*f*s-c*u*s+c*i*l-t*f*l-o*i*m+t*u*m)*F,e[8]=A*F,e[9]=(x*h*s-c*p*s-x*n*m+t*p*m+c*n*g-t*h*g)*F,e[10]=(o*p*s-x*a*s+x*n*l-t*p*l-o*n*g+t*a*g)*F,e[11]=(c*a*s-o*h*s-c*n*l+t*h*l+o*n*m-t*a*m)*F,e[12]=M*F,e[13]=(c*p*i-x*h*i+x*n*f-t*p*f-c*n*d+t*h*d)*F,e[14]=(x*a*i-o*p*i-x*n*u+t*p*u+o*n*d-t*a*d)*F,e[15]=(o*h*i-c*a*i+c*n*u-t*h*u-o*n*f+t*a*f)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,u=e.z,l=s*o,c=s*a;return this.set(l*o+n,l*a-i*u,l*u+i*a,0,l*a+i*u,c*a+n,c*u-i*o,0,l*u-i*a,c*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,u=t._w,l=s+s,c=o+o,h=a+a,f=s*l,m=s*c,x=s*h,p=o*c,d=o*h,g=a*h,w=u*l,S=u*c,A=u*h,M=n.x,C=n.y,F=n.z;return i[0]=(1-(p+g))*M,i[1]=(m+A)*M,i[2]=(x-S)*M,i[3]=0,i[4]=(m-A)*C,i[5]=(1-(f+g))*C,i[6]=(d+w)*C,i[7]=0,i[8]=(x+S)*F,i[9]=(d-w)*F,i[10]=(1-(f+p))*F,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Bn.set(i[0],i[1],i[2]).length();const o=Bn.set(i[4],i[5],i[6]).length(),a=Bn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Dt.copy(this);const l=1/s,c=1/o,h=1/a;return Dt.elements[0]*=l,Dt.elements[1]*=l,Dt.elements[2]*=l,Dt.elements[4]*=c,Dt.elements[5]*=c,Dt.elements[6]*=c,Dt.elements[8]*=h,Dt.elements[9]*=h,Dt.elements[10]*=h,t.setFromRotationMatrix(Dt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,u=2*s/(t-e),l=2*s/(n-i),c=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=u,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,u=1/(t-e),l=1/(n-i),c=1/(o-s),h=(t+e)*u,f=(n+i)*l,m=(o+s)*c;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bn=new P,Dt=new $e,Rl=new P(0,0,0),Dl=new P(1,1,1),tn=new P,Oi=new P,mt=new P,oa=new $e,la=new ui;class Ci{constructor(e=0,t=0,n=0,i=Ci.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],u=i[1],l=i[5],c=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return la.setFromEuler(this),this.setFromQuaternion(la,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ci.DefaultOrder="XYZ";Ci.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class so{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Il=0;const ca=new P,Vn=new ui,Xt=new $e,zi=new P,mi=new P,Fl=new P,Nl=new ui,ua=new P(1,0,0),ha=new P(0,1,0),da=new P(0,0,1),Ul={type:"added"},fa={type:"removed"};class nt extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DefaultUp.clone();const e=new P,t=new Ci,n=new ui,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new vt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nt.DefaultMatrixWorldAutoUpdate,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(ua,e)}rotateY(e){return this.rotateOnAxis(ha,e)}rotateZ(e){return this.rotateOnAxis(da,e)}translateOnAxis(e,t){return ca.copy(e).applyQuaternion(this.quaternion),this.position.add(ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ua,e)}translateY(e){return this.translateOnAxis(ha,e)}translateZ(e){return this.translateOnAxis(da,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zi.copy(e):zi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(mi,zi,this.up):Xt.lookAt(zi,mi,this.up),this.quaternion.setFromRotationMatrix(Xt),i&&(Xt.extractRotation(i.matrixWorld),Vn.setFromRotationMatrix(Xt),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ul)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(fa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,e,Fl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,Nl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let l=0,c=u.length;l<c;l++){const h=u[l];s(e.shapes,h)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,l=this.material.length;u<l;u++)a.push(s(e.materials,this.material[u]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];i.animations.push(s(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),l=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const u=[];for(const l in a){const c=a[l];delete c.metadata,u.push(c)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nt.DefaultUp=new P(0,1,0);nt.DefaultMatrixAutoUpdate=!0;nt.DefaultMatrixWorldAutoUpdate=!0;const It=new P,jt=new P,Os=new P,Yt=new P,Gn=new P,kn=new P,pa=new P,zs=new P,Bs=new P,Vs=new P;class Jt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),It.subVectors(e,t),i.cross(It);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){It.subVectors(i,t),jt.subVectors(n,t),Os.subVectors(e,t);const o=It.dot(It),a=It.dot(jt),u=It.dot(Os),l=jt.dot(jt),c=jt.dot(Os),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(l*u-a*c)*f,x=(o*c-a*u)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yt),Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getUV(e,t,n,i,s,o,a,u){return this.getBarycoord(e,t,n,i,Yt),u.set(0,0),u.addScaledVector(s,Yt.x),u.addScaledVector(o,Yt.y),u.addScaledVector(a,Yt.z),u}static isFrontFacing(e,t,n,i){return It.subVectors(n,t),jt.subVectors(e,t),It.cross(jt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return It.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),It.cross(jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Jt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Gn.subVectors(i,n),kn.subVectors(s,n),zs.subVectors(e,n);const u=Gn.dot(zs),l=kn.dot(zs);if(u<=0&&l<=0)return t.copy(n);Bs.subVectors(e,i);const c=Gn.dot(Bs),h=kn.dot(Bs);if(c>=0&&h<=c)return t.copy(i);const f=u*h-c*l;if(f<=0&&u>=0&&c<=0)return o=u/(u-c),t.copy(n).addScaledVector(Gn,o);Vs.subVectors(e,s);const m=Gn.dot(Vs),x=kn.dot(Vs);if(x>=0&&m<=x)return t.copy(s);const p=m*l-u*x;if(p<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(kn,a);const d=c*x-m*h;if(d<=0&&h-c>=0&&m-x>=0)return pa.subVectors(s,i),a=(h-c)/(h-c+(m-x)),t.copy(i).addScaledVector(pa,a);const g=1/(d+p+f);return o=p*g,a=f*g,t.copy(n).addScaledVector(Gn,o).addScaledVector(kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ol=0;class Li extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=ei,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ja,this.blendDst=Ya,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ti extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ke=new P,Bi=new Ne;class Et{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=na,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bi.fromBufferAttribute(this,t),Bi.applyMatrix3(e),this.setXY(t,Bi.x,Bi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ke.fromBufferAttribute(this,t),ke.applyMatrix3(e),this.setXYZ(t,ke.x,ke.y,ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ke.fromBufferAttribute(this,t),ke.applyMatrix4(e),this.setXYZ(t,ke.x,ke.y,ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ke.fromBufferAttribute(this,t),ke.applyNormalMatrix(e),this.setXYZ(t,ke.x,ke.y,ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ke.fromBufferAttribute(this,t),ke.transformDirection(e),this.setXYZ(t,ke.x,ke.y,ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==na&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ro extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ao extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zl=0;const At=new $e,Gs=new nt,Hn=new P,gt=new Vt,gi=new Vt,Je=new P;class Lt extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ka(e)?ao:ro)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new vt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return At.makeRotationFromQuaternion(e),this.applyMatrix4(At),this}rotateX(e){return At.makeRotationX(e),this.applyMatrix4(At),this}rotateY(e){return At.makeRotationY(e),this.applyMatrix4(At),this}rotateZ(e){return At.makeRotationZ(e),this.applyMatrix4(At),this}translate(e,t,n){return At.makeTranslation(e,t,n),this.applyMatrix4(At),this}scale(e,t,n){return At.makeScale(e,t,n),this.applyMatrix4(At),this}lookAt(e){return Gs.lookAt(e),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,gt.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,gt.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(gt.min),this.boundingBox.expandByPoint(gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];gi.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(gt.min,gi.min),gt.expandByPoint(Je),Je.addVectors(gt.max,gi.max),gt.expandByPoint(Je)):(gt.expandByPoint(gi.min),gt.expandByPoint(gi.max))}gt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Je.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Je));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],u=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Je.fromBufferAttribute(a,l),u&&(Hn.fromBufferAttribute(e,l),Je.add(Hn)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,l=[],c=[];for(let I=0;I<a;I++)l[I]=new P,c[I]=new P;const h=new P,f=new P,m=new P,x=new Ne,p=new Ne,d=new Ne,g=new P,w=new P;function S(I,X,le){h.fromArray(i,I*3),f.fromArray(i,X*3),m.fromArray(i,le*3),x.fromArray(o,I*2),p.fromArray(o,X*2),d.fromArray(o,le*2),f.sub(h),m.sub(h),p.sub(x),d.sub(x);const N=1/(p.x*d.y-d.x*p.y);isFinite(N)&&(g.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(N),w.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(N),l[I].add(g),l[X].add(g),l[le].add(g),c[I].add(w),c[X].add(w),c[le].add(w))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let I=0,X=A.length;I<X;++I){const le=A[I],N=le.start,D=le.count;for(let q=N,J=N+D;q<J;q+=3)S(n[q+0],n[q+1],n[q+2])}const M=new P,C=new P,F=new P,_=new P;function T(I){F.fromArray(s,I*3),_.copy(F);const X=l[I];M.copy(X),M.sub(F.multiplyScalar(F.dot(X))).normalize(),C.crossVectors(_,X);const N=C.dot(c[I])<0?-1:1;u[I*4]=M.x,u[I*4+1]=M.y,u[I*4+2]=M.z,u[I*4+3]=N}for(let I=0,X=A.length;I<X;++I){const le=A[I],N=le.start,D=le.count;for(let q=N,J=N+D;q<J;q+=3)T(n[q+0]),T(n[q+1]),T(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,o=new P,a=new P,u=new P,l=new P,c=new P,h=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),c.subVectors(o,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,x),u.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(c),u.add(c),l.add(c),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(p,u.x,u.y,u.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(i,s),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Je.fromBufferAttribute(e,t),Je.normalize(),e.setXYZ(t,Je.x,Je.y,Je.z)}toNonIndexed(){function e(a,u){const l=a.array,c=a.itemSize,h=a.normalized,f=new l.constructor(u.length*c);let m=0,x=0;for(let p=0,d=u.length;p<d;p++){a.isInterleavedBufferAttribute?m=u[p]*a.data.stride+a.offset:m=u[p]*c;for(let g=0;g<c;g++)f[x++]=l[m++]}return new Et(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const a in i){const u=i[a],l=e(u,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const u=[],l=s[a];for(let c=0,h=l.length;c<h;c++){const f=l[c],m=e(f,n);u.push(m)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],c=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];c.push(m.toJSON(e.data))}c.length>0&&(i[u]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(t))}const s=e.morphAttributes;for(const l in s){const c=[],h=s[l];for(let f=0,m=h.length;f<m;f++)c.push(h[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,c=o.length;l<c;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ma=new $e,Wn=new io,ks=new us,nn=new P,sn=new P,rn=new P,Hs=new P,Ws=new P,qs=new P,Vi=new P,Gi=new P,ki=new P,Hi=new Ne,Wi=new Ne,qi=new Ne,Xs=new P,Xi=new P;class Ot extends nt{constructor(e=new Lt,t=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),e.ray.intersectsSphere(ks)===!1)||(ma.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(ma),n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,u=n.attributes.position,l=n.morphAttributes.position,c=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,x=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const g=m[p],w=i[g.materialIndex],S=Math.max(g.start,x.start),A=Math.min(a.count,Math.min(g.start+g.count,x.start+x.count));for(let M=S,C=A;M<C;M+=3){const F=a.getX(M),_=a.getX(M+1),T=a.getX(M+2);o=ji(this,w,e,Wn,u,l,c,h,f,F,_,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),d=Math.min(a.count,x.start+x.count);for(let g=p,w=d;g<w;g+=3){const S=a.getX(g),A=a.getX(g+1),M=a.getX(g+2);o=ji(this,i,e,Wn,u,l,c,h,f,S,A,M),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const g=m[p],w=i[g.materialIndex],S=Math.max(g.start,x.start),A=Math.min(u.count,Math.min(g.start+g.count,x.start+x.count));for(let M=S,C=A;M<C;M+=3){const F=M,_=M+1,T=M+2;o=ji(this,w,e,Wn,u,l,c,h,f,F,_,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),d=Math.min(u.count,x.start+x.count);for(let g=p,w=d;g<w;g+=3){const S=g,A=g+1,M=g+2;o=ji(this,i,e,Wn,u,l,c,h,f,S,A,M),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function Bl(r,e,t,n,i,s,o,a){let u;if(e.side===Tt?u=n.intersectTriangle(o,s,i,!0,a):u=n.intersectTriangle(i,s,o,e.side!==an,a),u===null)return null;Xi.copy(a),Xi.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Xi);return l<t.near||l>t.far?null:{distance:l,point:Xi.clone(),object:r}}function ji(r,e,t,n,i,s,o,a,u,l,c,h){nn.fromBufferAttribute(i,l),sn.fromBufferAttribute(i,c),rn.fromBufferAttribute(i,h);const f=r.morphTargetInfluences;if(s&&f){Vi.set(0,0,0),Gi.set(0,0,0),ki.set(0,0,0);for(let x=0,p=s.length;x<p;x++){const d=f[x],g=s[x];d!==0&&(Hs.fromBufferAttribute(g,l),Ws.fromBufferAttribute(g,c),qs.fromBufferAttribute(g,h),o?(Vi.addScaledVector(Hs,d),Gi.addScaledVector(Ws,d),ki.addScaledVector(qs,d)):(Vi.addScaledVector(Hs.sub(nn),d),Gi.addScaledVector(Ws.sub(sn),d),ki.addScaledVector(qs.sub(rn),d)))}nn.add(Vi),sn.add(Gi),rn.add(ki)}r.isSkinnedMesh&&(r.boneTransform(l,nn),r.boneTransform(c,sn),r.boneTransform(h,rn));const m=Bl(r,e,t,n,nn,sn,rn,Xs);if(m){a&&(Hi.fromBufferAttribute(a,l),Wi.fromBufferAttribute(a,c),qi.fromBufferAttribute(a,h),m.uv=Jt.getUV(Xs,nn,sn,rn,Hi,Wi,qi,new Ne)),u&&(Hi.fromBufferAttribute(u,l),Wi.fromBufferAttribute(u,c),qi.fromBufferAttribute(u,h),m.uv2=Jt.getUV(Xs,nn,sn,rn,Hi,Wi,qi,new Ne));const x={a:l,b:c,c:h,normal:new P,materialIndex:0};Jt.getNormal(nn,sn,rn,x.normal),m.face=x}return m}class hn extends Lt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],l=[],c=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(h,2));function x(p,d,g,w,S,A,M,C,F,_,T){const I=A/F,X=M/_,le=A/2,N=M/2,D=C/2,q=F+1,J=_+1;let Y=0,W=0;const ee=new P;for(let $=0;$<J;$++){const U=$*X-N;for(let V=0;V<q;V++){const Z=V*I-le;ee[p]=Z*w,ee[d]=U*S,ee[g]=D,l.push(ee.x,ee.y,ee.z),ee[p]=0,ee[d]=0,ee[g]=C>0?1:-1,c.push(ee.x,ee.y,ee.z),h.push(V/F),h.push(1-$/_),Y+=1}}for(let $=0;$<_;$++)for(let U=0;U<F;U++){const V=f+U+q*$,Z=f+U+q*($+1),te=f+(U+1)+q*($+1),se=f+(U+1)+q*$;u.push(V,Z,se),u.push(Z,te,se),W+=6}a.addGroup(m,W,T),m+=W,f+=Y}}static fromJSON(e){return new hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function li(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function lt(r){const e={};for(let t=0;t<r.length;t++){const n=li(r[t]);for(const i in n)e[i]=n[i]}return e}function Vl(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function oo(r){return r.getRenderTarget()===null&&r.outputEncoding===Be?zt:wi}const Gl={clone:li,merge:lt};var kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kl,this.fragmentShader=Hl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=Vl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lo extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends lo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(As*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/l,i*=o.width/u,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qn=-90,Xn=1;class Wl extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ft(qn,Xn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ft(qn,Xn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ft(qn,Xn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ft(qn,Xn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const u=new Ft(qn,Xn,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const l=new Ft(qn,Xn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,u,l]=this.children,c=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=$t,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class co extends Mt{constructor(e,t,n,i,s,o,a,u,l,c){e=e!==void 0?e:[],t=t!==void 0?t:ri,super(e,t,n,i,s,o,a,u,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ql extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new co(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hn(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:ln});s.uniforms.tEquirect.value=t;const o=new Ot(i,s),a=t.minFilter;return t.minFilter===cs&&(t.minFilter=wt),new Wl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const js=new P,Xl=new P,jl=new vt;class Sn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=js.subVectors(n,t).cross(Xl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(js),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jl.getNormalMatrix(e),i=this.coplanarPoint(js).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new us,Yi=new P;class uo{constructor(e=new Sn,t=new Sn,n=new Sn,i=new Sn,s=new Sn,o=new Sn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],u=n[4],l=n[5],c=n[6],h=n[7],f=n[8],m=n[9],x=n[10],p=n[11],d=n[12],g=n[13],w=n[14],S=n[15];return t[0].setComponents(a-i,h-u,p-f,S-d).normalize(),t[1].setComponents(a+i,h+u,p+f,S+d).normalize(),t[2].setComponents(a+s,h+l,p+m,S+g).normalize(),t[3].setComponents(a-s,h-l,p-m,S-g).normalize(),t[4].setComponents(a-o,h-c,p-x,S-w).normalize(),t[5].setComponents(a+o,h+c,p+x,S+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSprite(e){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Yi.x=i.normal.x>0?e.max.x:e.min.x,Yi.y=i.normal.y>0?e.max.y:e.min.y,Yi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ho(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Yl(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,c){const h=l.array,f=l.usage,m=r.createBuffer();r.bindBuffer(c,m),r.bufferData(c,h,f),l.onUploadCallback();let x;if(h instanceof Float32Array)x=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(h instanceof Int16Array)x=5122;else if(h instanceof Uint32Array)x=5125;else if(h instanceof Int32Array)x=5124;else if(h instanceof Int8Array)x=5120;else if(h instanceof Uint8Array)x=5121;else if(h instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,c,h){const f=c.array,m=c.updateRange;r.bindBuffer(h,l),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=n.get(l);c&&(r.deleteBuffer(c.buffer),n.delete(l))}function u(l,c){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,c)):h.version<l.version&&(s(h.buffer,l,c),h.version=l.version)}return{get:o,remove:a,update:u}}class pr extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),u=Math.floor(i),l=a+1,c=u+1,h=e/a,f=t/u,m=[],x=[],p=[],d=[];for(let g=0;g<c;g++){const w=g*f-o;for(let S=0;S<l;S++){const A=S*h-s;x.push(A,-w,0),p.push(0,0,1),d.push(S/a),d.push(1-g/u)}}for(let g=0;g<u;g++)for(let w=0;w<a;w++){const S=w+l*g,A=w+l*(g+1),M=w+1+l*(g+1),C=w+1+l*g;m.push(S,A,C),m.push(A,M,C)}this.setIndex(m),this.setAttribute("position",new Ct(x,3)),this.setAttribute("normal",new Ct(p,3)),this.setAttribute("uv",new Ct(d,2))}static fromJSON(e){return new pr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Jl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$l=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ql=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ec=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tc="vec3 transformed = vec3( position );",nc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ic=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,sc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ac=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,oc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,mc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_c=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mc="gl_FragColor = linearToOutputTexel( gl_FragColor );",bc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ac=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ec=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ic=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Bc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Wc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Yc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$c=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,su=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,au=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ou=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,cu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,du=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,pu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,_u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Su=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tu=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Eu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Lu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ru=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Du=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ou=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Bu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Vu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Gu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ku=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Hu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Wu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,qu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Xu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ku=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,th=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ah=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ch=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ph=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_h=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ah=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Th=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:Zl,alphamap_pars_fragment:Jl,alphatest_fragment:$l,alphatest_pars_fragment:Kl,aomap_fragment:Ql,aomap_pars_fragment:ec,begin_vertex:tc,beginnormal_vertex:nc,bsdfs:ic,iridescence_fragment:sc,bumpmap_pars_fragment:rc,clipping_planes_fragment:ac,clipping_planes_pars_fragment:oc,clipping_planes_pars_vertex:lc,clipping_planes_vertex:cc,color_fragment:uc,color_pars_fragment:hc,color_pars_vertex:dc,color_vertex:fc,common:pc,cube_uv_reflection_fragment:mc,defaultnormal_vertex:gc,displacementmap_pars_vertex:_c,displacementmap_vertex:xc,emissivemap_fragment:vc,emissivemap_pars_fragment:yc,encodings_fragment:Mc,encodings_pars_fragment:bc,envmap_fragment:Sc,envmap_common_pars_fragment:Ac,envmap_pars_fragment:wc,envmap_pars_vertex:Tc,envmap_physical_pars_fragment:zc,envmap_vertex:Ec,fog_vertex:Cc,fog_pars_vertex:Lc,fog_fragment:Pc,fog_pars_fragment:Rc,gradientmap_pars_fragment:Dc,lightmap_fragment:Ic,lightmap_pars_fragment:Fc,lights_lambert_fragment:Nc,lights_lambert_pars_fragment:Uc,lights_pars_begin:Oc,lights_toon_fragment:Bc,lights_toon_pars_fragment:Vc,lights_phong_fragment:Gc,lights_phong_pars_fragment:kc,lights_physical_fragment:Hc,lights_physical_pars_fragment:Wc,lights_fragment_begin:qc,lights_fragment_maps:Xc,lights_fragment_end:jc,logdepthbuf_fragment:Yc,logdepthbuf_pars_fragment:Zc,logdepthbuf_pars_vertex:Jc,logdepthbuf_vertex:$c,map_fragment:Kc,map_pars_fragment:Qc,map_particle_fragment:eu,map_particle_pars_fragment:tu,metalnessmap_fragment:nu,metalnessmap_pars_fragment:iu,morphcolor_vertex:su,morphnormal_vertex:ru,morphtarget_pars_vertex:au,morphtarget_vertex:ou,normal_fragment_begin:lu,normal_fragment_maps:cu,normal_pars_fragment:uu,normal_pars_vertex:hu,normal_vertex:du,normalmap_pars_fragment:fu,clearcoat_normal_fragment_begin:pu,clearcoat_normal_fragment_maps:mu,clearcoat_pars_fragment:gu,iridescence_pars_fragment:_u,output_fragment:xu,packing:vu,premultiplied_alpha_fragment:yu,project_vertex:Mu,dithering_fragment:bu,dithering_pars_fragment:Su,roughnessmap_fragment:Au,roughnessmap_pars_fragment:wu,shadowmap_pars_fragment:Tu,shadowmap_pars_vertex:Eu,shadowmap_vertex:Cu,shadowmask_pars_fragment:Lu,skinbase_vertex:Pu,skinning_pars_vertex:Ru,skinning_vertex:Du,skinnormal_vertex:Iu,specularmap_fragment:Fu,specularmap_pars_fragment:Nu,tonemapping_fragment:Uu,tonemapping_pars_fragment:Ou,transmission_fragment:zu,transmission_pars_fragment:Bu,uv_pars_fragment:Vu,uv_pars_vertex:Gu,uv_vertex:ku,uv2_pars_fragment:Hu,uv2_pars_vertex:Wu,uv2_vertex:qu,worldpos_vertex:Xu,background_vert:ju,background_frag:Yu,backgroundCube_vert:Zu,backgroundCube_frag:Ju,cube_vert:$u,cube_frag:Ku,depth_vert:Qu,depth_frag:eh,distanceRGBA_vert:th,distanceRGBA_frag:nh,equirect_vert:ih,equirect_frag:sh,linedashed_vert:rh,linedashed_frag:ah,meshbasic_vert:oh,meshbasic_frag:lh,meshlambert_vert:ch,meshlambert_frag:uh,meshmatcap_vert:hh,meshmatcap_frag:dh,meshnormal_vert:fh,meshnormal_frag:ph,meshphong_vert:mh,meshphong_frag:gh,meshphysical_vert:_h,meshphysical_frag:xh,meshtoon_vert:vh,meshtoon_frag:yh,points_vert:Mh,points_frag:bh,shadow_vert:Sh,shadow_frag:Ah,sprite_vert:wh,sprite_frag:Th},ie={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vt},uv2Transform:{value:new vt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vt}}},Bt={basic:{uniforms:lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:lt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:lt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:lt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:lt([ie.points,ie.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:lt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:lt([ie.common,ie.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:lt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:lt([ie.sprite,ie.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:lt([ie.common,ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:lt([ie.lights,ie.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Bt.physical={uniforms:lt([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Zi={r:0,b:0,g:0};function Eh(r,e,t,n,i,s,o){const a=new ze(0);let u=s===!0?0:1,l,c,h=null,f=0,m=null;function x(d,g){let w=!1,S=g.isScene===!0?g.background:null;S&&S.isTexture&&(S=(g.backgroundBlurriness>0?t:e).get(S));const A=r.xr,M=A.getSession&&A.getSession();M&&M.environmentBlendMode==="additive"&&(S=null),S===null?p(a,u):S&&S.isColor&&(p(S,1),w=!0),(r.autoClear||w)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ls)?(c===void 0&&(c=new Ot(new hn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:li(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,F,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,(h!==S||f!==S.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,m=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ot(new pr(2,2),new In({name:"BackgroundMaterial",uniforms:li(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,m=r.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,g){d.getRGB(Zi,oo(r)),n.buffers.color.setClear(Zi.r,Zi.g,Zi.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(d,g=1){a.set(d),u=g,p(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(d){u=d,p(a,u)},render:x}}function Ch(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},u=d(null);let l=u,c=!1;function h(D,q,J,Y,W){let ee=!1;if(o){const $=p(Y,J,q);l!==$&&(l=$,m(l.object)),ee=g(D,Y,J,W),ee&&w(D,Y,J,W)}else{const $=q.wireframe===!0;(l.geometry!==Y.id||l.program!==J.id||l.wireframe!==$)&&(l.geometry=Y.id,l.program=J.id,l.wireframe=$,ee=!0)}W!==null&&t.update(W,34963),(ee||c)&&(c=!1,_(D,q,J,Y),W!==null&&r.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function x(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,q,J){const Y=J.wireframe===!0;let W=a[D.id];W===void 0&&(W={},a[D.id]=W);let ee=W[q.id];ee===void 0&&(ee={},W[q.id]=ee);let $=ee[Y];return $===void 0&&($=d(f()),ee[Y]=$),$}function d(D){const q=[],J=[],Y=[];for(let W=0;W<i;W++)q[W]=0,J[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:J,attributeDivisors:Y,object:D,attributes:{},index:null}}function g(D,q,J,Y){const W=l.attributes,ee=q.attributes;let $=0;const U=J.getAttributes();for(const V in U)if(U[V].location>=0){const te=W[V];let se=ee[V];if(se===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),te===void 0||te.attribute!==se||se&&te.data!==se.data)return!0;$++}return l.attributesNum!==$||l.index!==Y}function w(D,q,J,Y){const W={},ee=q.attributes;let $=0;const U=J.getAttributes();for(const V in U)if(U[V].location>=0){let te=ee[V];te===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const se={};se.attribute=te,te&&te.data&&(se.data=te.data),W[V]=se,$++}l.attributes=W,l.attributesNum=$,l.index=Y}function S(){const D=l.newAttributes;for(let q=0,J=D.length;q<J;q++)D[q]=0}function A(D){M(D,0)}function M(D,q){const J=l.newAttributes,Y=l.enabledAttributes,W=l.attributeDivisors;J[D]=1,Y[D]===0&&(r.enableVertexAttribArray(D),Y[D]=1),W[D]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,q),W[D]=q)}function C(){const D=l.newAttributes,q=l.enabledAttributes;for(let J=0,Y=q.length;J<Y;J++)q[J]!==D[J]&&(r.disableVertexAttribArray(J),q[J]=0)}function F(D,q,J,Y,W,ee){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(D,q,J,W,ee):r.vertexAttribPointer(D,q,J,Y,W,ee)}function _(D,q,J,Y){if(n.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const W=Y.attributes,ee=J.getAttributes(),$=q.defaultAttributeValues;for(const U in ee){const V=ee[U];if(V.location>=0){let Z=W[U];if(Z===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const te=Z.normalized,se=Z.itemSize,k=t.get(Z);if(k===void 0)continue;const Le=k.buffer,ue=k.type,ve=k.bytesPerElement;if(Z.isInterleavedBufferAttribute){const ce=Z.data,Ie=ce.stride,Se=Z.offset;if(ce.isInstancedInterleavedBuffer){for(let xe=0;xe<V.locationSize;xe++)M(V.location+xe,ce.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<V.locationSize;xe++)A(V.location+xe);r.bindBuffer(34962,Le);for(let xe=0;xe<V.locationSize;xe++)F(V.location+xe,se/V.locationSize,ue,te,Ie*ve,(Se+se/V.locationSize*xe)*ve)}else{if(Z.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)M(V.location+ce,Z.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ce=0;ce<V.locationSize;ce++)A(V.location+ce);r.bindBuffer(34962,Le);for(let ce=0;ce<V.locationSize;ce++)F(V.location+ce,se/V.locationSize,ue,te,se*ve,se/V.locationSize*ce*ve)}}else if($!==void 0){const te=$[U];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(V.location,te);break;case 3:r.vertexAttrib3fv(V.location,te);break;case 4:r.vertexAttrib4fv(V.location,te);break;default:r.vertexAttrib1fv(V.location,te)}}}}C()}function T(){le();for(const D in a){const q=a[D];for(const J in q){const Y=q[J];for(const W in Y)x(Y[W].object),delete Y[W];delete q[J]}delete a[D]}}function I(D){if(a[D.id]===void 0)return;const q=a[D.id];for(const J in q){const Y=q[J];for(const W in Y)x(Y[W].object),delete Y[W];delete q[J]}delete a[D.id]}function X(D){for(const q in a){const J=a[q];if(J[D.id]===void 0)continue;const Y=J[D.id];for(const W in Y)x(Y[W].object),delete Y[W];delete J[D.id]}}function le(){N(),c=!0,l!==u&&(l=u,m(l.object))}function N(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:le,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:X,initAttributes:S,enableAttribute:A,disableUnusedAttributes:C}}function Lh(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,c){r.drawArrays(s,l,c),t.update(c,s,1)}function u(l,c,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,c,h),t.update(c,s,h)}this.setMode=o,this.render=a,this.renderInstances=u}function Ph(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const u=s(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const l=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),x=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),g=r.getParameter(36348),w=r.getParameter(36349),S=f>0,A=o||e.has("OES_texture_float"),M=S&&A,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:w,vertexTextures:S,floatFragmentTextures:A,floatVertexTextures:M,maxSamples:C}}function Rh(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Sn,a=new vt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const x=h.length!==0||f||n!==0||i;return i=f,t=c(h,m,0),n=h.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,f,m){const x=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,g=r.get(h);if(!i||x===null||x.length===0||s&&!d)s?c(null):l();else{const w=s?0:n,S=w*4;let A=g.clippingState||null;u.value=A,A=c(x,f,S,m);for(let M=0;M!==S;++M)A[M]=t[M];g.clippingState=A,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,m,x){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=u.value,x!==!0||d===null){const g=m+p*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(d===null||d.length<g)&&(d=new Float32Array(g));for(let S=0,A=m;S!==p;++S,A+=4)o.copy(h[S]).applyMatrix4(w,a),o.normal.toArray(d,A),d[A+3]=o.constant}u.value=d,u.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Dh(r){let e=new WeakMap;function t(o,a){return a===sr?o.mapping=ri:a===rr&&(o.mapping=ai),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===sr||a===rr)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const l=new ql(u.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class fo extends lo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=c*this.view.offsetY,u=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jn=4,ga=[.125,.215,.35,.446,.526,.582],wn=20,Ys=new fo,_a=new ze;let Zs=null;const An=(1+Math.sqrt(5))/2,Yn=1/An,xa=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,An,Yn),new P(0,An,-Yn),new P(Yn,0,An),new P(-Yn,0,An),new P(An,Yn,0),new P(-An,Yn,0)];class va{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Zs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zs),e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Ai,format:Ut,encoding:Rn,depthBuffer:!1},i=ya(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ya(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ih(s)),this._blurMaterial=Fh(s,e,t)}return i}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,Ys)}_sceneToCubeUV(e,t,n,i){const a=new Ft(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(_a),c.toneMapping=$t,c.autoClear=!1;const m=new Ti({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),x=new Ot(new hn,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(_a),p=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(a.up.set(0,u[g],0),a.lookAt(l[g],0,0)):w===1?(a.up.set(0,0,u[g]),a.lookAt(0,l[g],0)):(a.up.set(0,u[g],0),a.lookAt(0,0,l[g]));const S=this._cubeSize;Ji(i,w*S,g>2?S:0,S,S),c.setRenderTarget(i),p&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ri||e.mapping===ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const u=this._cubeSize;Ji(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Ys)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=xa[(i-1)%xa.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const u=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Ot(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wn-1),p=s/x,d=isFinite(s)?1+Math.floor(c*p):wn;d>wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${wn}`);const g=[];let w=0;for(let F=0;F<wn;++F){const _=F/p,T=Math.exp(-_*_/2);g.push(T),F===0?w+=T:F<d&&(w+=2*T)}for(let F=0;F<g.length;F++)g[F]=g[F]/w;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=x,f.mipInt.value=S-n;const A=this._sizeLods[i],M=3*A*(i>S-Jn?i-S+Jn:0),C=4*(this._cubeSize-A);Ji(t,M,C,3*A,2*A),u.setRenderTarget(t),u.render(h,Ys)}}function Ih(r){const e=[],t=[],n=[];let i=r;const s=r-Jn+1+ga.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let u=1/a;o>r-Jn?u=ga[o-r+Jn-1]:o===0&&(u=0),n.push(u);const l=1/(a-2),c=-l,h=1+l,f=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,x=6,p=3,d=2,g=1,w=new Float32Array(p*x*m),S=new Float32Array(d*x*m),A=new Float32Array(g*x*m);for(let C=0;C<m;C++){const F=C%3*2/3-1,_=C>2?0:-1,T=[F,_,0,F+2/3,_,0,F+2/3,_+1,0,F,_,0,F+2/3,_+1,0,F,_+1,0];w.set(T,p*x*C),S.set(f,d*x*C);const I=[C,C,C,C,C,C];A.set(I,g*x*C)}const M=new Lt;M.setAttribute("position",new Et(w,p)),M.setAttribute("uv",new Et(S,d)),M.setAttribute("faceIndex",new Et(A,g)),e.push(M),i>Jn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ya(r,e,t){const n=new Dn(r,e,t);return n.texture.mapping=ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Fh(r,e,t){const n=new Float32Array(wn),i=new P(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Ma(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function ba(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function mr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nh(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,l=u===sr||u===rr,c=u===ri||u===ai;if(l||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new va(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||c&&h&&i(h)){t===null&&(t=new va(r));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let u=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&u++;return u===l}function s(a){const u=a.target;u.removeEventListener("dispose",s);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Uh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Oh(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function u(h){const f=h.attributes;for(const x in f)e.update(f[x],34962);const m=h.morphAttributes;for(const x in m){const p=m[x];for(let d=0,g=p.length;d<g;d++)e.update(p[d],34962)}}function l(h){const f=[],m=h.index,x=h.attributes.position;let p=0;if(m!==null){const w=m.array;p=m.version;for(let S=0,A=w.length;S<A;S+=3){const M=w[S+0],C=w[S+1],F=w[S+2];f.push(M,C,C,F,F,M)}}else{const w=x.array;p=x.version;for(let S=0,A=w.length/3-1;S<A;S+=3){const M=S+0,C=S+1,F=S+2;f.push(M,C,C,F,F,M)}}const d=new(Ka(f)?ao:ro)(f,1);d.version=p;const g=s.get(h);g&&e.remove(g),s.set(h,d)}function c(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:u,getWireframeAttribute:c}}function zh(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,u;function l(f){a=f.type,u=f.bytesPerElement}function c(f,m){r.drawElements(s,m,a,f*u),t.update(m,s,1)}function h(f,m,x){if(x===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,f*u,x),t.update(m,s,x)}this.setMode=o,this.setIndex=l,this.render=c,this.renderInstances=h}function Bh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vh(r,e){return r[0]-e[0]}function Gh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function kh(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ke,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function u(l,c,h,f){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=p!==void 0?p.length:0;let g=s.get(c);if(g===void 0||g.count!==d){let J=function(){D.dispose(),s.delete(c),c.removeEventListener("dispose",J)};var x=J;g!==void 0&&g.texture.dispose();const A=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,F=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let I=0;A===!0&&(I=1),M===!0&&(I=2),C===!0&&(I=3);let X=c.attributes.position.count*I,le=1;X>e.maxTextureSize&&(le=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const N=new Float32Array(X*le*4*d),D=new no(N,X,le,d);D.type=En,D.needsUpdate=!0;const q=I*4;for(let Y=0;Y<d;Y++){const W=F[Y],ee=_[Y],$=T[Y],U=X*le*4*Y;for(let V=0;V<W.count;V++){const Z=V*q;A===!0&&(o.fromBufferAttribute(W,V),N[U+Z+0]=o.x,N[U+Z+1]=o.y,N[U+Z+2]=o.z,N[U+Z+3]=0),M===!0&&(o.fromBufferAttribute(ee,V),N[U+Z+4]=o.x,N[U+Z+5]=o.y,N[U+Z+6]=o.z,N[U+Z+7]=0),C===!0&&(o.fromBufferAttribute($,V),N[U+Z+8]=o.x,N[U+Z+9]=o.y,N[U+Z+10]=o.z,N[U+Z+11]=$.itemSize===4?o.w:1)}}g={count:d,texture:D,size:new Ne(X,le)},s.set(c,g),c.addEventListener("dispose",J)}let w=0;for(let A=0;A<m.length;A++)w+=m[A];const S=c.morphTargetsRelative?1:1-w;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let d=n[c.id];if(d===void 0||d.length!==p){d=[];for(let M=0;M<p;M++)d[M]=[M,0];n[c.id]=d}for(let M=0;M<p;M++){const C=d[M];C[0]=M,C[1]=m[M]}d.sort(Gh);for(let M=0;M<8;M++)M<p&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Vh);const g=c.morphAttributes.position,w=c.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const C=a[M],F=C[0],_=C[1];F!==Number.MAX_SAFE_INTEGER&&_?(g&&c.getAttribute("morphTarget"+M)!==g[F]&&c.setAttribute("morphTarget"+M,g[F]),w&&c.getAttribute("morphNormal"+M)!==w[F]&&c.setAttribute("morphNormal"+M,w[F]),i[M]=_,S+=_):(g&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),w&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),i[M]=0)}const A=c.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",A),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:u}}function Hh(r,e,t,n){let i=new WeakMap;function s(u){const l=n.render.frame,c=u.geometry,h=e.get(u,c);return i.get(h)!==l&&(e.update(h),i.set(h,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),h}function o(){i=new WeakMap}function a(u){const l=u.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const po=new Mt,mo=new no,go=new Ll,_o=new co,Sa=[],Aa=[],wa=new Float32Array(16),Ta=new Float32Array(9),Ea=new Float32Array(4);function hi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Sa[i];if(s===void 0&&(s=new Float32Array(i),Sa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function qe(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Xe(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function hs(r,e){let t=Aa[e];t===void 0&&(t=new Int32Array(e),Aa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Wh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qe(t,e))return;r.uniform2fv(this.addr,e),Xe(t,e)}}function Xh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qe(t,e))return;r.uniform3fv(this.addr,e),Xe(t,e)}}function jh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qe(t,e))return;r.uniform4fv(this.addr,e),Xe(t,e)}}function Yh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qe(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Xe(t,e)}else{if(qe(t,n))return;Ea.set(n),r.uniformMatrix2fv(this.addr,!1,Ea),Xe(t,n)}}function Zh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qe(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Xe(t,e)}else{if(qe(t,n))return;Ta.set(n),r.uniformMatrix3fv(this.addr,!1,Ta),Xe(t,n)}}function Jh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qe(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Xe(t,e)}else{if(qe(t,n))return;wa.set(n),r.uniformMatrix4fv(this.addr,!1,wa),Xe(t,n)}}function $h(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Kh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qe(t,e))return;r.uniform2iv(this.addr,e),Xe(t,e)}}function Qh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qe(t,e))return;r.uniform3iv(this.addr,e),Xe(t,e)}}function ed(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qe(t,e))return;r.uniform4iv(this.addr,e),Xe(t,e)}}function td(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function nd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qe(t,e))return;r.uniform2uiv(this.addr,e),Xe(t,e)}}function id(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qe(t,e))return;r.uniform3uiv(this.addr,e),Xe(t,e)}}function sd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qe(t,e))return;r.uniform4uiv(this.addr,e),Xe(t,e)}}function rd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||po,i)}function ad(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||go,i)}function od(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_o,i)}function ld(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mo,i)}function cd(r){switch(r){case 5126:return Wh;case 35664:return qh;case 35665:return Xh;case 35666:return jh;case 35674:return Yh;case 35675:return Zh;case 35676:return Jh;case 5124:case 35670:return $h;case 35667:case 35671:return Kh;case 35668:case 35672:return Qh;case 35669:case 35673:return ed;case 5125:return td;case 36294:return nd;case 36295:return id;case 36296:return sd;case 35678:case 36198:case 36298:case 36306:case 35682:return rd;case 35679:case 36299:case 36307:return ad;case 35680:case 36300:case 36308:case 36293:return od;case 36289:case 36303:case 36311:case 36292:return ld}}function ud(r,e){r.uniform1fv(this.addr,e)}function hd(r,e){const t=hi(e,this.size,2);r.uniform2fv(this.addr,t)}function dd(r,e){const t=hi(e,this.size,3);r.uniform3fv(this.addr,t)}function fd(r,e){const t=hi(e,this.size,4);r.uniform4fv(this.addr,t)}function pd(r,e){const t=hi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function md(r,e){const t=hi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gd(r,e){const t=hi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _d(r,e){r.uniform1iv(this.addr,e)}function xd(r,e){r.uniform2iv(this.addr,e)}function vd(r,e){r.uniform3iv(this.addr,e)}function yd(r,e){r.uniform4iv(this.addr,e)}function Md(r,e){r.uniform1uiv(this.addr,e)}function bd(r,e){r.uniform2uiv(this.addr,e)}function Sd(r,e){r.uniform3uiv(this.addr,e)}function Ad(r,e){r.uniform4uiv(this.addr,e)}function wd(r,e,t){const n=this.cache,i=e.length,s=hs(t,i);qe(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||po,s[o])}function Td(r,e,t){const n=this.cache,i=e.length,s=hs(t,i);qe(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||go,s[o])}function Ed(r,e,t){const n=this.cache,i=e.length,s=hs(t,i);qe(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||_o,s[o])}function Cd(r,e,t){const n=this.cache,i=e.length,s=hs(t,i);qe(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||mo,s[o])}function Ld(r){switch(r){case 5126:return ud;case 35664:return hd;case 35665:return dd;case 35666:return fd;case 35674:return pd;case 35675:return md;case 35676:return gd;case 5124:case 35670:return _d;case 35667:case 35671:return xd;case 35668:case 35672:return vd;case 35669:case 35673:return yd;case 5125:return Md;case 36294:return bd;case 36295:return Sd;case 36296:return Ad;case 35678:case 36198:case 36298:case 36306:case 35682:return wd;case 35679:case 36299:case 36307:return Td;case 35680:case 36300:case 36308:case 36293:return Ed;case 36289:case 36303:case 36311:case 36292:return Cd}}class Pd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=cd(t.type)}}class Rd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ld(t.type)}}class Dd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Js=/(\w+)(\])?(\[|\.)?/g;function Ca(r,e){r.seq.push(e),r.map[e.id]=e}function Id(r,e,t){const n=r.name,i=n.length;for(Js.lastIndex=0;;){const s=Js.exec(n),o=Js.lastIndex;let a=s[1];const u=s[2]==="]",l=s[3];if(u&&(a=a|0),l===void 0||l==="["&&o+2===i){Ca(t,l===void 0?new Pd(a,r,e):new Rd(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Dd(a),Ca(t,h)),t=h}}}class is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Id(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function La(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Fd=0;function Nd(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ud(r){switch(r){case Rn:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Pa(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Nd(r.getShaderSource(e),o)}else return i}function Od(r,e){const t=Ud(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function zd(r,e){let t;switch(e){case tl:t="Linear";break;case nl:t="Reinhard";break;case il:t="OptimizedCineon";break;case sl:t="ACESFilmic";break;case rl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bd(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xi).join(`
`)}function Vd(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gd(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function xi(r){return r!==""}function Ra(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Da(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ur(r){return r.replace(kd,Hd)}function Hd(r,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ur(t)}const Wd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ia(r){return r.replace(Wd,qd)}function qd(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Fa(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xd(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xa?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Io?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function jd(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ri:case ai:e="ENVMAP_TYPE_CUBE";break;case ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yd(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Zd(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Za:e="ENVMAP_BLENDING_MULTIPLY";break;case Qo:e="ENVMAP_BLENDING_MIX";break;case el:e="ENVMAP_BLENDING_ADD";break}return e}function Jd(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $d(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=Xd(t),l=jd(t),c=Yd(t),h=Zd(t),f=Jd(t),m=t.isWebGL2?"":Bd(t),x=Vd(s),p=i.createProgram();let d,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(xi).join(`
`),d.length>0&&(d+=`
`),g=[m,x].filter(xi).join(`
`),g.length>0&&(g+=`
`)):(d=[Fa(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xi).join(`
`),g=[m,Fa(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$t?"#define TONE_MAPPING":"",t.toneMapping!==$t?be.tonemapping_pars_fragment:"",t.toneMapping!==$t?zd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,Od("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xi).join(`
`)),o=ur(o),o=Ra(o,t),o=Da(o,t),a=ur(a),a=Ra(a,t),a=Da(a,t),o=Ia(o),a=Ia(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",t.glslVersion===ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=w+d+o,A=w+g+a,M=La(i,35633,S),C=La(i,35632,A);if(i.attachShader(p,M),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(M).trim(),X=i.getShaderInfoLog(C).trim();let le=!0,N=!0;if(i.getProgramParameter(p,35714)===!1){le=!1;const D=Pa(i,M,"vertex"),q=Pa(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+D+`
`+q)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||X==="")&&(N=!1);N&&(this.diagnostics={runnable:le,programLog:T,vertexShader:{log:I,prefix:d},fragmentShader:{log:X,prefix:g}})}i.deleteShader(M),i.deleteShader(C);let F;this.getUniforms=function(){return F===void 0&&(F=new is(i,p)),F};let _;return this.getAttributes=function(){return _===void 0&&(_=Gd(i,p)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Fd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=C,this}let Kd=0;class Qd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ef(e),t.set(e,n)),n}}class ef{constructor(e){this.id=Kd++,this.code=e,this.usedTimes=0}}function tf(r,e,t,n,i,s,o){const a=new so,u=new Qd,l=[],c=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,T,I,X,le){const N=X.fog,D=le.geometry,q=_.isMeshStandardMaterial?X.environment:null,J=(_.isMeshStandardMaterial?t:e).get(_.envMap||q),Y=J&&J.mapping===ls?J.image.height:null,W=x[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,$=ee!==void 0?ee.length:0;let U=0;D.morphAttributes.position!==void 0&&(U=1),D.morphAttributes.normal!==void 0&&(U=2),D.morphAttributes.color!==void 0&&(U=3);let V,Z,te,se;if(W){const Ie=Bt[W];V=Ie.vertexShader,Z=Ie.fragmentShader}else V=_.vertexShader,Z=_.fragmentShader,u.update(_),te=u.getVertexShaderID(_),se=u.getFragmentShaderID(_);const k=r.getRenderTarget(),Le=_.alphaTest>0,ue=_.clearcoat>0,ve=_.iridescence>0;return{isWebGL2:c,shaderID:W,shaderName:_.type,vertexShader:V,fragmentShader:Z,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:le.isInstancedMesh===!0,instancingColor:le.isInstancedMesh===!0&&le.instanceColor!==null,supportsVertexTextures:f,outputEncoding:k===null?r.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:Rn,map:!!_.map,matcap:!!_.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Y,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===wl,tangentSpaceNormalMap:_.normalMapType===Al,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Be,clearcoat:ue,clearcoatMap:ue&&!!_.clearcoatMap,clearcoatRoughnessMap:ue&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!_.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!_.iridescenceMap,iridescenceThicknessMap:ve&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===ei,alphaMap:!!_.alphaMap,alphaTest:Le,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!D.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!N,useFog:_.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:h,skinning:le.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:U,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:_.toneMapped?r.toneMapping:$t,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===an,flipSided:_.side===Tt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function d(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(g(T,_),w(T,_),T.push(r.outputEncoding)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputEncoding),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.combine),_.push(T.vertexUvs),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),_.push(a.mask)}function S(_){const T=x[_.type];let I;if(T){const X=Bt[T];I=Gl.clone(X.uniforms)}else I=_.uniforms;return I}function A(_,T){let I;for(let X=0,le=l.length;X<le;X++){const N=l[X];if(N.cacheKey===T){I=N,++I.usedTimes;break}}return I===void 0&&(I=new $d(r,T,_,s),l.push(I)),I}function M(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),_.destroy()}}function C(_){u.remove(_)}function F(){u.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:A,releaseProgram:M,releaseShaderCache:C,programs:l,dispose:F}}function nf(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function sf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Na(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ua(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,x,p,d){let g=r[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:p,group:d},r[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=x,g.renderOrder=h.renderOrder,g.z=p,g.group=d),e++,g}function a(h,f,m,x,p,d){const g=o(h,f,m,x,p,d);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function u(h,f,m,x,p,d){const g=o(h,f,m,x,p,d);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function l(h,f){t.length>1&&t.sort(h||sf),n.length>1&&n.sort(f||Na),i.length>1&&i.sort(f||Na)}function c(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:u,finish:c,sort:l}}function rf(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ua,r.set(n,[o])):i>=s.length?(o=new Ua,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function af(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function of(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let lf=0;function cf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function uf(r,e){const t=new af,n=of(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,o=new $e,a=new $e;function u(c,h){let f=0,m=0,x=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let p=0,d=0,g=0,w=0,S=0,A=0,M=0,C=0,F=0,_=0;c.sort(cf);const T=h!==!0?Math.PI:1;for(let X=0,le=c.length;X<le;X++){const N=c[X],D=N.color,q=N.intensity,J=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=D.r*q*T,m+=D.g*q*T,x+=D.b*q*T;else if(N.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(N.sh.coefficients[W],q);else if(N.isDirectionalLight){const W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const ee=N.shadow,$=n.get(N);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=N.shadow.matrix,A++}i.directional[p]=W,p++}else if(N.isSpotLight){const W=t.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(D).multiplyScalar(q*T),W.distance=J,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,i.spot[g]=W;const ee=N.shadow;if(N.map&&(i.spotLightMap[F]=N.map,F++,ee.updateMatrices(N),N.castShadow&&_++),i.spotLightMatrix[g]=ee.matrix,N.castShadow){const $=n.get(N);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,i.spotShadow[g]=$,i.spotShadowMap[g]=Y,C++}g++}else if(N.isRectAreaLight){const W=t.get(N);W.color.copy(D).multiplyScalar(q),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=W,w++}else if(N.isPointLight){const W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity*T),W.distance=N.distance,W.decay=N.decay,N.castShadow){const ee=N.shadow,$=n.get(N);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,$.shadowCameraNear=ee.camera.near,$.shadowCameraFar=ee.camera.far,i.pointShadow[d]=$,i.pointShadowMap[d]=Y,i.pointShadowMatrix[d]=N.shadow.matrix,M++}i.point[d]=W,d++}else if(N.isHemisphereLight){const W=t.get(N);W.skyColor.copy(N.color).multiplyScalar(q*T),W.groundColor.copy(N.groundColor).multiplyScalar(q*T),i.hemi[S]=W,S++}}w>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=x;const I=i.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==g||I.rectAreaLength!==w||I.hemiLength!==S||I.numDirectionalShadows!==A||I.numPointShadows!==M||I.numSpotShadows!==C||I.numSpotMaps!==F)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=w,i.point.length=d,i.hemi.length=S,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=C+F-_,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=_,I.directionalLength=p,I.pointLength=d,I.spotLength=g,I.rectAreaLength=w,I.hemiLength=S,I.numDirectionalShadows=A,I.numPointShadows=M,I.numSpotShadows=C,I.numSpotMaps=F,i.version=lf++)}function l(c,h){let f=0,m=0,x=0,p=0,d=0;const g=h.matrixWorldInverse;for(let w=0,S=c.length;w<S;w++){const A=c[w];if(A.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(A.isSpotLight){const M=i.spot[x];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),x++}else if(A.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(A.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(A.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(g),m++}else if(A.isHemisphereLight){const M=i.hemi[d];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(g),d++}}}return{setup:u,setupView:l,state:i}}function Oa(r,e){const t=new uf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function u(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:l,pushLight:o,pushShadow:a}}function hf(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let u;return a===void 0?(u=new Oa(r,e),t.set(s,[u])):o>=a.length?(u=new Oa(r,e),a.push(u)):u=a[o],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class df extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ff extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gf(r,e,t){let n=new uo;const i=new Ne,s=new Ne,o=new Ke,a=new df({depthPacking:Sl}),u=new ff,l={},c=t.maxTextureSize,h={0:Tt,1:si,2:an},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:pf,fragmentShader:mf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Lt;x.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ot(x,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa,this.render=function(A,M,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const F=r.getRenderTarget(),_=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),I=r.state;I.setBlending(ln),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let X=0,le=A.length;X<le;X++){const N=A[X],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const q=D.getFrameExtents();if(i.multiply(q),s.copy(D.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/q.x),i.x=s.x*q.x,D.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/q.y),i.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null){const Y=this.type!==_i?{minFilter:ct,magFilter:ct}:{};D.map=new Dn(i.x,i.y,Y),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const J=D.getViewportCount();for(let Y=0;Y<J;Y++){const W=D.getViewport(Y);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),I.viewport(o),D.updateMatrices(N,Y),n=D.getFrustum(),S(M,C,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===_i&&g(D,C),D.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(F,_,T)};function g(A,M){const C=e.update(p);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(M,null,C,f,p,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(M,null,C,m,p,null)}function w(A,M,C,F,_,T){let I=null;const X=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(X!==void 0?I=X:I=C.isPointLight===!0?u:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const le=I.uuid,N=M.uuid;let D=l[le];D===void 0&&(D={},l[le]=D);let q=D[N];q===void 0&&(q=I.clone(),D[N]=q),I=q}return I.visible=M.visible,I.wireframe=M.wireframe,T===_i?I.side=M.shadowSide!==null?M.shadowSide:M.side:I.side=M.shadowSide!==null?M.shadowSide:h[M.side],I.alphaMap=M.alphaMap,I.alphaTest=M.alphaTest,I.map=M.map,I.clipShadows=M.clipShadows,I.clippingPlanes=M.clippingPlanes,I.clipIntersection=M.clipIntersection,I.displacementMap=M.displacementMap,I.displacementScale=M.displacementScale,I.displacementBias=M.displacementBias,I.wireframeLinewidth=M.wireframeLinewidth,I.linewidth=M.linewidth,C.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(C.matrixWorld),I.nearDistance=F,I.farDistance=_),I}function S(A,M,C,F,_){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===_i)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const X=e.update(A),le=A.material;if(Array.isArray(le)){const N=X.groups;for(let D=0,q=N.length;D<q;D++){const J=N[D],Y=le[J.materialIndex];if(Y&&Y.visible){const W=w(A,Y,F,C.near,C.far,_);r.renderBufferDirect(C,null,X,W,A,J)}}}else if(le.visible){const N=w(A,le,F,C.near,C.far,_);r.renderBufferDirect(C,null,X,N,A,null)}}const I=A.children;for(let X=0,le=I.length;X<le;X++)S(I[X],M,C,F,_)}}function _f(r,e,t){const n=t.isWebGL2;function i(){let E=!1;const B=new Ke;let j=null;const oe=new Ke(0,0,0,0);return{setMask:function(de){j!==de&&!E&&(r.colorMask(de,de,de,de),j=de)},setLocked:function(de){E=de},setClear:function(de,De,Ye,Qe,dn){dn===!0&&(de*=Qe,De*=Qe,Ye*=Qe),B.set(de,De,Ye,Qe),oe.equals(B)===!1&&(r.clearColor(de,De,Ye,Qe),oe.copy(B))},reset:function(){E=!1,j=null,oe.set(-1,0,0,0)}}}function s(){let E=!1,B=null,j=null,oe=null;return{setTest:function(de){de?Le(2929):ue(2929)},setMask:function(de){B!==de&&!E&&(r.depthMask(de),B=de)},setFunc:function(de){if(j!==de){switch(de){case Xo:r.depthFunc(512);break;case jo:r.depthFunc(519);break;case Yo:r.depthFunc(513);break;case ir:r.depthFunc(515);break;case Zo:r.depthFunc(514);break;case Jo:r.depthFunc(518);break;case $o:r.depthFunc(516);break;case Ko:r.depthFunc(517);break;default:r.depthFunc(515)}j=de}},setLocked:function(de){E=de},setClear:function(de){oe!==de&&(r.clearDepth(de),oe=de)},reset:function(){E=!1,B=null,j=null,oe=null}}}function o(){let E=!1,B=null,j=null,oe=null,de=null,De=null,Ye=null,Qe=null,dn=null;return{setTest:function(Oe){E||(Oe?Le(2960):ue(2960))},setMask:function(Oe){B!==Oe&&!E&&(r.stencilMask(Oe),B=Oe)},setFunc:function(Oe,kt,St){(j!==Oe||oe!==kt||de!==St)&&(r.stencilFunc(Oe,kt,St),j=Oe,oe=kt,de=St)},setOp:function(Oe,kt,St){(De!==Oe||Ye!==kt||Qe!==St)&&(r.stencilOp(Oe,kt,St),De=Oe,Ye=kt,Qe=St)},setLocked:function(Oe){E=Oe},setClear:function(Oe){dn!==Oe&&(r.clearStencil(Oe),dn=Oe)},reset:function(){E=!1,B=null,j=null,oe=null,de=null,De=null,Ye=null,Qe=null,dn=null}}}const a=new i,u=new s,l=new o,c=new WeakMap,h=new WeakMap;let f={},m={},x=new WeakMap,p=[],d=null,g=!1,w=null,S=null,A=null,M=null,C=null,F=null,_=null,T=!1,I=null,X=null,le=null,N=null,D=null;const q=r.getParameter(35661);let J=!1,Y=0;const W=r.getParameter(7938);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=Y>=2);let ee=null,$={};const U=r.getParameter(3088),V=r.getParameter(2978),Z=new Ke().fromArray(U),te=new Ke().fromArray(V);function se(E,B,j){const oe=new Uint8Array(4),de=r.createTexture();r.bindTexture(E,de),r.texParameteri(E,10241,9728),r.texParameteri(E,10240,9728);for(let De=0;De<j;De++)r.texImage2D(B+De,0,6408,1,1,0,6408,5121,oe);return de}const k={};k[3553]=se(3553,3553,1),k[34067]=se(34067,34069,6),a.setClear(0,0,0,1),u.setClear(1),l.setClear(0),Le(2929),u.setFunc(ir),rt(!1),bt(Er),Le(2884),it(ln);function Le(E){f[E]!==!0&&(r.enable(E),f[E]=!0)}function ue(E){f[E]!==!1&&(r.disable(E),f[E]=!1)}function ve(E,B){return m[E]!==B?(r.bindFramebuffer(E,B),m[E]=B,n&&(E===36009&&(m[36160]=B),E===36160&&(m[36009]=B)),!0):!1}function ce(E,B){let j=p,oe=!1;if(E)if(j=x.get(B),j===void 0&&(j=[],x.set(B,j)),E.isWebGLMultipleRenderTargets){const de=E.texture;if(j.length!==de.length||j[0]!==36064){for(let De=0,Ye=de.length;De<Ye;De++)j[De]=36064+De;j.length=de.length,oe=!0}}else j[0]!==36064&&(j[0]=36064,oe=!0);else j[0]!==1029&&(j[0]=1029,oe=!0);oe&&(t.isWebGL2?r.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function Ie(E){return d!==E?(r.useProgram(E),d=E,!0):!1}const Se={[Zn]:32774,[No]:32778,[Uo]:32779};if(n)Se[Rr]=32775,Se[Dr]=32776;else{const E=e.get("EXT_blend_minmax");E!==null&&(Se[Rr]=E.MIN_EXT,Se[Dr]=E.MAX_EXT)}const xe={[Oo]:0,[zo]:1,[Bo]:768,[ja]:770,[qo]:776,[Ho]:774,[Go]:772,[Vo]:769,[Ya]:771,[Wo]:775,[ko]:773};function it(E,B,j,oe,de,De,Ye,Qe){if(E===ln){g===!0&&(ue(3042),g=!1);return}if(g===!1&&(Le(3042),g=!0),E!==Fo){if(E!==w||Qe!==T){if((S!==Zn||C!==Zn)&&(r.blendEquation(32774),S=Zn,C=Zn),Qe)switch(E){case ei:r.blendFuncSeparate(1,771,1,771);break;case Cr:r.blendFunc(1,1);break;case Lr:r.blendFuncSeparate(0,769,0,1);break;case Pr:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case ei:r.blendFuncSeparate(770,771,1,771);break;case Cr:r.blendFunc(770,1);break;case Lr:r.blendFuncSeparate(0,769,0,1);break;case Pr:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}A=null,M=null,F=null,_=null,w=E,T=Qe}return}de=de||B,De=De||j,Ye=Ye||oe,(B!==S||de!==C)&&(r.blendEquationSeparate(Se[B],Se[de]),S=B,C=de),(j!==A||oe!==M||De!==F||Ye!==_)&&(r.blendFuncSeparate(xe[j],xe[oe],xe[De],xe[Ye]),A=j,M=oe,F=De,_=Ye),w=E,T=!1}function st(E,B){E.side===an?ue(2884):Le(2884);let j=E.side===Tt;B&&(j=!j),rt(j),E.blending===ei&&E.transparent===!1?it(ln):it(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),u.setFunc(E.depthFunc),u.setTest(E.depthTest),u.setMask(E.depthWrite),a.setMask(E.colorWrite);const oe=E.stencilWrite;l.setTest(oe),oe&&(l.setMask(E.stencilWriteMask),l.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),l.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Fe(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?Le(32926):ue(32926)}function rt(E){I!==E&&(E?r.frontFace(2304):r.frontFace(2305),I=E)}function bt(E){E!==Ro?(Le(2884),E!==X&&(E===Er?r.cullFace(1029):E===Do?r.cullFace(1028):r.cullFace(1032))):ue(2884),X=E}function He(E){E!==le&&(J&&r.lineWidth(E),le=E)}function Fe(E,B,j){E?(Le(32823),(N!==B||D!==j)&&(r.polygonOffset(B,j),N=B,D=j)):ue(32823)}function Gt(E){E?Le(3089):ue(3089)}function Pt(E){E===void 0&&(E=33984+q-1),ee!==E&&(r.activeTexture(E),ee=E)}function b(E,B,j){j===void 0&&(ee===null?j=33984+q-1:j=ee);let oe=$[j];oe===void 0&&(oe={type:void 0,texture:void 0},$[j]=oe),(oe.type!==E||oe.texture!==B)&&(ee!==j&&(r.activeTexture(j),ee=j),r.bindTexture(E,B||k[E]),oe.type=E,oe.texture=B)}function v(){const E=$[ee];E!==void 0&&E.type!==void 0&&(r.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function re(){try{r.texSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ye(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ae(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function H(){try{r.texStorage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function me(){try{r.texStorage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function _e(){try{r.texImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function he(){try{r.texImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ge(E){Z.equals(E)===!1&&(r.scissor(E.x,E.y,E.z,E.w),Z.copy(E))}function fe(E){te.equals(E)===!1&&(r.viewport(E.x,E.y,E.z,E.w),te.copy(E))}function Pe(E,B){let j=h.get(B);j===void 0&&(j=new WeakMap,h.set(B,j));let oe=j.get(E);oe===void 0&&(oe=r.getUniformBlockIndex(B,E.name),j.set(E,oe))}function Ue(E,B){const oe=h.get(B).get(E);c.get(E)!==oe&&(r.uniformBlockBinding(B,oe,E.__bindingPointIndex),c.set(E,oe))}function je(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},ee=null,$={},m={},x=new WeakMap,p=[],d=null,g=!1,w=null,S=null,A=null,M=null,C=null,F=null,_=null,T=!1,I=null,X=null,le=null,N=null,D=null,Z.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),a.reset(),u.reset(),l.reset()}return{buffers:{color:a,depth:u,stencil:l},enable:Le,disable:ue,bindFramebuffer:ve,drawBuffers:ce,useProgram:Ie,setBlending:it,setMaterial:st,setFlipSided:rt,setCullFace:bt,setLineWidth:He,setPolygonOffset:Fe,setScissorTest:Gt,activeTexture:Pt,bindTexture:b,unbindTexture:v,compressedTexImage2D:z,compressedTexImage3D:K,texImage2D:_e,texImage3D:he,updateUBOMapping:Pe,uniformBlockBinding:Ue,texStorage2D:H,texStorage3D:me,texSubImage2D:ne,texSubImage3D:re,compressedTexSubImage2D:ye,compressedTexSubImage3D:ae,scissor:ge,viewport:fe,reset:je}}function xf(r,e,t,n,i,s,o){const a=i.isWebGL2,u=i.maxTextures,l=i.maxCubemapSize,c=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,v){return g?new OffscreenCanvas(b,v):as("canvas")}function S(b,v,z,K){let ne=1;if((b.width>K||b.height>K)&&(ne=K/Math.max(b.width,b.height)),ne<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=v?cr:Math.floor,ye=re(ne*b.width),ae=re(ne*b.height);p===void 0&&(p=w(ye,ae));const H=z?w(ye,ae):p;return H.width=ye,H.height=ae,H.getContext("2d").drawImage(b,0,0,ye,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ye+"x"+ae+")."),H}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function A(b){return ra(b.width)&&ra(b.height)}function M(b){return a?!1:b.wrapS!==Nt||b.wrapT!==Nt||b.minFilter!==ct&&b.minFilter!==wt}function C(b,v){return b.generateMipmaps&&v&&b.minFilter!==ct&&b.minFilter!==wt}function F(b){r.generateMipmap(b)}function _(b,v,z,K,ne=!1){if(a===!1)return v;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=v;return v===6403&&(z===5126&&(re=33326),z===5131&&(re=33325),z===5121&&(re=33321)),v===33319&&(z===5126&&(re=33328),z===5131&&(re=33327),z===5121&&(re=33323)),v===6408&&(z===5126&&(re=34836),z===5131&&(re=34842),z===5121&&(re=K===Be&&ne===!1?35907:32856),z===32819&&(re=32854),z===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function T(b,v,z){return C(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==ct&&b.minFilter!==wt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function I(b){return b===ct||b===Ir||b===Fr?9728:9729}function X(b){const v=b.target;v.removeEventListener("dispose",X),N(v),v.isVideoTexture&&x.delete(v)}function le(b){const v=b.target;v.removeEventListener("dispose",le),q(v)}function N(b){const v=n.get(b);if(v.__webglInit===void 0)return;const z=b.source,K=d.get(z);if(K){const ne=K[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(b),Object.keys(K).length===0&&d.delete(z)}n.remove(b)}function D(b){const v=n.get(b);r.deleteTexture(v.__webglTexture);const z=b.source,K=d.get(z);delete K[v.__cacheKey],o.memory.textures--}function q(b){const v=b.texture,z=n.get(b),K=n.get(v);if(K.__webglTexture!==void 0&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(z.__webglFramebuffer[ne]),z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ne=0;ne<z.__webglColorRenderbuffer.length;ne++)z.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[ne]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ne=0,re=v.length;ne<re;ne++){const ye=n.get(v[ne]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(v[ne])}n.remove(v),n.remove(b)}let J=0;function Y(){J=0}function W(){const b=J;return b>=u&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+u),J+=1,b}function ee(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.encoding),v.join()}function $(b,v){const z=n.get(b);if(b.isVideoTexture&&Gt(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,b,v);return}}t.bindTexture(3553,z.__webglTexture,33984+v)}function U(b,v){const z=n.get(b);if(b.version>0&&z.__version!==b.version){ue(z,b,v);return}t.bindTexture(35866,z.__webglTexture,33984+v)}function V(b,v){const z=n.get(b);if(b.version>0&&z.__version!==b.version){ue(z,b,v);return}t.bindTexture(32879,z.__webglTexture,33984+v)}function Z(b,v){const z=n.get(b);if(b.version>0&&z.__version!==b.version){ve(z,b,v);return}t.bindTexture(34067,z.__webglTexture,33984+v)}const te={[ar]:10497,[Nt]:33071,[or]:33648},se={[ct]:9728,[Ir]:9984,[Fr]:9986,[wt]:9729,[al]:9985,[cs]:9987};function k(b,v,z){if(z?(r.texParameteri(b,10242,te[v.wrapS]),r.texParameteri(b,10243,te[v.wrapT]),(b===32879||b===35866)&&r.texParameteri(b,32882,te[v.wrapR]),r.texParameteri(b,10240,se[v.magFilter]),r.texParameteri(b,10241,se[v.minFilter])):(r.texParameteri(b,10242,33071),r.texParameteri(b,10243,33071),(b===32879||b===35866)&&r.texParameteri(b,32882,33071),(v.wrapS!==Nt||v.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,10240,I(v.magFilter)),r.texParameteri(b,10241,I(v.minFilter)),v.minFilter!==ct&&v.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(v.type===En&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Ai&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(b,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Le(b,v){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",X));const K=v.source;let ne=d.get(K);ne===void 0&&(ne={},d.set(K,ne));const re=ee(v);if(re!==b.__cacheKey){ne[re]===void 0&&(ne[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[re].usedTimes++;const ye=ne[b.__cacheKey];ye!==void 0&&(ne[b.__cacheKey].usedTimes--,ye.usedTimes===0&&D(v)),b.__cacheKey=re,b.__webglTexture=ne[re].texture}return z}function ue(b,v,z){let K=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=35866),v.isData3DTexture&&(K=32879);const ne=Le(b,v),re=v.source;t.bindTexture(K,b.__webglTexture,33984+z);const ye=n.get(re);if(re.version!==ye.__version||ne===!0){t.activeTexture(33984+z),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const ae=M(v)&&A(v.image)===!1;let H=S(v.image,ae,!1,c);H=Pt(v,H);const me=A(H)||a,_e=s.convert(v.format,v.encoding);let he=s.convert(v.type),ge=_(v.internalFormat,_e,he,v.encoding,v.isVideoTexture);k(K,v,me);let fe;const Pe=v.mipmaps,Ue=a&&v.isVideoTexture!==!0,je=ye.__version===void 0||ne===!0,E=T(v,H,me);if(v.isDepthTexture)ge=6402,a?v.type===En?ge=36012:v.type===Tn?ge=33190:v.type===ti?ge=35056:ge=33189:v.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Cn&&ge===6402&&v.type!==$a&&v.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Tn,he=s.convert(v.type)),v.format===oi&&ge===6402&&(ge=34041,v.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ti,he=s.convert(v.type))),je&&(Ue?t.texStorage2D(3553,1,ge,H.width,H.height):t.texImage2D(3553,0,ge,H.width,H.height,0,_e,he,null));else if(v.isDataTexture)if(Pe.length>0&&me){Ue&&je&&t.texStorage2D(3553,E,ge,Pe[0].width,Pe[0].height);for(let B=0,j=Pe.length;B<j;B++)fe=Pe[B],Ue?t.texSubImage2D(3553,B,0,0,fe.width,fe.height,_e,he,fe.data):t.texImage2D(3553,B,ge,fe.width,fe.height,0,_e,he,fe.data);v.generateMipmaps=!1}else Ue?(je&&t.texStorage2D(3553,E,ge,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,_e,he,H.data)):t.texImage2D(3553,0,ge,H.width,H.height,0,_e,he,H.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ue&&je&&t.texStorage3D(35866,E,ge,Pe[0].width,Pe[0].height,H.depth);for(let B=0,j=Pe.length;B<j;B++)fe=Pe[B],v.format!==Ut?_e!==null?Ue?t.compressedTexSubImage3D(35866,B,0,0,0,fe.width,fe.height,H.depth,_e,fe.data,0,0):t.compressedTexImage3D(35866,B,ge,fe.width,fe.height,H.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(35866,B,0,0,0,fe.width,fe.height,H.depth,_e,he,fe.data):t.texImage3D(35866,B,ge,fe.width,fe.height,H.depth,0,_e,he,fe.data)}else{Ue&&je&&t.texStorage2D(3553,E,ge,Pe[0].width,Pe[0].height);for(let B=0,j=Pe.length;B<j;B++)fe=Pe[B],v.format!==Ut?_e!==null?Ue?t.compressedTexSubImage2D(3553,B,0,0,fe.width,fe.height,_e,fe.data):t.compressedTexImage2D(3553,B,ge,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,B,0,0,fe.width,fe.height,_e,he,fe.data):t.texImage2D(3553,B,ge,fe.width,fe.height,0,_e,he,fe.data)}else if(v.isDataArrayTexture)Ue?(je&&t.texStorage3D(35866,E,ge,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,_e,he,H.data)):t.texImage3D(35866,0,ge,H.width,H.height,H.depth,0,_e,he,H.data);else if(v.isData3DTexture)Ue?(je&&t.texStorage3D(32879,E,ge,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,_e,he,H.data)):t.texImage3D(32879,0,ge,H.width,H.height,H.depth,0,_e,he,H.data);else if(v.isFramebufferTexture){if(je)if(Ue)t.texStorage2D(3553,E,ge,H.width,H.height);else{let B=H.width,j=H.height;for(let oe=0;oe<E;oe++)t.texImage2D(3553,oe,ge,B,j,0,_e,he,null),B>>=1,j>>=1}}else if(Pe.length>0&&me){Ue&&je&&t.texStorage2D(3553,E,ge,Pe[0].width,Pe[0].height);for(let B=0,j=Pe.length;B<j;B++)fe=Pe[B],Ue?t.texSubImage2D(3553,B,0,0,_e,he,fe):t.texImage2D(3553,B,ge,_e,he,fe);v.generateMipmaps=!1}else Ue?(je&&t.texStorage2D(3553,E,ge,H.width,H.height),t.texSubImage2D(3553,0,0,0,_e,he,H)):t.texImage2D(3553,0,ge,_e,he,H);C(v,me)&&F(K),ye.__version=re.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ve(b,v,z){if(v.image.length!==6)return;const K=Le(b,v),ne=v.source;t.bindTexture(34067,b.__webglTexture,33984+z);const re=n.get(ne);if(ne.version!==re.__version||K===!0){t.activeTexture(33984+z),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,H=[];for(let B=0;B<6;B++)!ye&&!ae?H[B]=S(v.image[B],!1,!0,l):H[B]=ae?v.image[B].image:v.image[B],H[B]=Pt(v,H[B]);const me=H[0],_e=A(me)||a,he=s.convert(v.format,v.encoding),ge=s.convert(v.type),fe=_(v.internalFormat,he,ge,v.encoding),Pe=a&&v.isVideoTexture!==!0,Ue=re.__version===void 0||K===!0;let je=T(v,me,_e);k(34067,v,_e);let E;if(ye){Pe&&Ue&&t.texStorage2D(34067,je,fe,me.width,me.height);for(let B=0;B<6;B++){E=H[B].mipmaps;for(let j=0;j<E.length;j++){const oe=E[j];v.format!==Ut?he!==null?Pe?t.compressedTexSubImage2D(34069+B,j,0,0,oe.width,oe.height,he,oe.data):t.compressedTexImage2D(34069+B,j,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+B,j,0,0,oe.width,oe.height,he,ge,oe.data):t.texImage2D(34069+B,j,fe,oe.width,oe.height,0,he,ge,oe.data)}}}else{E=v.mipmaps,Pe&&Ue&&(E.length>0&&je++,t.texStorage2D(34067,je,fe,H[0].width,H[0].height));for(let B=0;B<6;B++)if(ae){Pe?t.texSubImage2D(34069+B,0,0,0,H[B].width,H[B].height,he,ge,H[B].data):t.texImage2D(34069+B,0,fe,H[B].width,H[B].height,0,he,ge,H[B].data);for(let j=0;j<E.length;j++){const de=E[j].image[B].image;Pe?t.texSubImage2D(34069+B,j+1,0,0,de.width,de.height,he,ge,de.data):t.texImage2D(34069+B,j+1,fe,de.width,de.height,0,he,ge,de.data)}}else{Pe?t.texSubImage2D(34069+B,0,0,0,he,ge,H[B]):t.texImage2D(34069+B,0,fe,he,ge,H[B]);for(let j=0;j<E.length;j++){const oe=E[j];Pe?t.texSubImage2D(34069+B,j+1,0,0,he,ge,oe.image[B]):t.texImage2D(34069+B,j+1,fe,he,ge,oe.image[B])}}}C(v,_e)&&F(34067),re.__version=ne.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ce(b,v,z,K,ne){const re=s.convert(z.format,z.encoding),ye=s.convert(z.type),ae=_(z.internalFormat,re,ye,z.encoding);n.get(v).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,ae,v.width,v.height,v.depth,0,re,ye,null):t.texImage2D(ne,0,ae,v.width,v.height,0,re,ye,null)),t.bindFramebuffer(36160,b),Fe(v)?f.framebufferTexture2DMultisampleEXT(36160,K,ne,n.get(z).__webglTexture,0,He(v)):(ne===3553||ne>=34069&&ne<=34074)&&r.framebufferTexture2D(36160,K,ne,n.get(z).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(b,v,z){if(r.bindRenderbuffer(36161,b),v.depthBuffer&&!v.stencilBuffer){let K=33189;if(z||Fe(v)){const ne=v.depthTexture;ne&&ne.isDepthTexture&&(ne.type===En?K=36012:ne.type===Tn&&(K=33190));const re=He(v);Fe(v)?f.renderbufferStorageMultisampleEXT(36161,re,K,v.width,v.height):r.renderbufferStorageMultisample(36161,re,K,v.width,v.height)}else r.renderbufferStorage(36161,K,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,b)}else if(v.depthBuffer&&v.stencilBuffer){const K=He(v);z&&Fe(v)===!1?r.renderbufferStorageMultisample(36161,K,35056,v.width,v.height):Fe(v)?f.renderbufferStorageMultisampleEXT(36161,K,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,b)}else{const K=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ne=0;ne<K.length;ne++){const re=K[ne],ye=s.convert(re.format,re.encoding),ae=s.convert(re.type),H=_(re.internalFormat,ye,ae,re.encoding),me=He(v);z&&Fe(v)===!1?r.renderbufferStorageMultisample(36161,me,H,v.width,v.height):Fe(v)?f.renderbufferStorageMultisampleEXT(36161,me,H,v.width,v.height):r.renderbufferStorage(36161,H,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function Se(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const K=n.get(v.depthTexture).__webglTexture,ne=He(v);if(v.depthTexture.format===Cn)Fe(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,ne):r.framebufferTexture2D(36160,36096,3553,K,0);else if(v.depthTexture.format===oi)Fe(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,ne):r.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function xe(b){const v=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Se(v.__webglFramebuffer,b)}else if(z){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=r.createRenderbuffer(),Ie(v.__webglDepthbuffer[K],b,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),Ie(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function it(b,v,z){const K=n.get(b);v!==void 0&&ce(K.__webglFramebuffer,b,b.texture,36064,3553),z!==void 0&&xe(b)}function st(b){const v=b.texture,z=n.get(b),K=n.get(v);b.addEventListener("dispose",le),b.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=v.version,o.memory.textures++);const ne=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,ye=A(b)||a;if(ne){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)z.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(z.__webglFramebuffer=r.createFramebuffer(),re)if(i.drawBuffers){const ae=b.texture;for(let H=0,me=ae.length;H<me;H++){const _e=n.get(ae[H]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Fe(b)===!1){const ae=re?v:[v];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let H=0;H<ae.length;H++){const me=ae[H];z.__webglColorRenderbuffer[H]=r.createRenderbuffer(),r.bindRenderbuffer(36161,z.__webglColorRenderbuffer[H]);const _e=s.convert(me.format,me.encoding),he=s.convert(me.type),ge=_(me.internalFormat,_e,he,me.encoding,b.isXRRenderTarget===!0),fe=He(b);r.renderbufferStorageMultisample(36161,fe,ge,b.width,b.height),r.framebufferRenderbuffer(36160,36064+H,36161,z.__webglColorRenderbuffer[H])}r.bindRenderbuffer(36161,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,K.__webglTexture),k(34067,v,ye);for(let ae=0;ae<6;ae++)ce(z.__webglFramebuffer[ae],b,v,36064,34069+ae);C(v,ye)&&F(34067),t.unbindTexture()}else if(re){const ae=b.texture;for(let H=0,me=ae.length;H<me;H++){const _e=ae[H],he=n.get(_e);t.bindTexture(3553,he.__webglTexture),k(3553,_e,ye),ce(z.__webglFramebuffer,b,_e,36064+H,3553),C(_e,ye)&&F(3553)}t.unbindTexture()}else{let ae=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ae=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,K.__webglTexture),k(ae,v,ye),ce(z.__webglFramebuffer,b,v,36064,ae),C(v,ye)&&F(ae),t.unbindTexture()}b.depthBuffer&&xe(b)}function rt(b){const v=A(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let K=0,ne=z.length;K<ne;K++){const re=z[K];if(C(re,v)){const ye=b.isWebGLCubeRenderTarget?34067:3553,ae=n.get(re).__webglTexture;t.bindTexture(ye,ae),F(ye),t.unbindTexture()}}}function bt(b){if(a&&b.samples>0&&Fe(b)===!1){const v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,K=b.height;let ne=16384;const re=[],ye=b.stencilBuffer?33306:36096,ae=n.get(b),H=b.isWebGLMultipleRenderTargets===!0;if(H)for(let me=0;me<v.length;me++)t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,ae.__webglFramebuffer),r.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ae.__webglFramebuffer);for(let me=0;me<v.length;me++){re.push(36064+me),b.depthBuffer&&re.push(ye);const _e=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(_e===!1&&(b.depthBuffer&&(ne|=256),b.stencilBuffer&&(ne|=1024)),H&&r.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[me]),_e===!0&&(r.invalidateFramebuffer(36008,[ye]),r.invalidateFramebuffer(36009,[ye])),H){const he=n.get(v[me]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,he,0)}r.blitFramebuffer(0,0,z,K,0,0,z,K,ne,9728),m&&r.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),H)for(let me=0;me<v.length;me++){t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+me,36161,ae.__webglColorRenderbuffer[me]);const _e=n.get(v[me]).__webglTexture;t.bindFramebuffer(36160,ae.__webglFramebuffer),r.framebufferTexture2D(36009,36064+me,3553,_e,0)}t.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function He(b){return Math.min(h,b.samples)}function Fe(b){const v=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Gt(b){const v=o.render.frame;x.get(b)!==v&&(x.set(b,v),b.update())}function Pt(b,v){const z=b.encoding,K=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===lr||z!==Rn&&(z===Be?a===!1?e.has("EXT_sRGB")===!0&&K===Ut?(b.format=lr,b.minFilter=wt,b.generateMipmaps=!1):v=eo.sRGBToLinear(v):(K!==Ut||ne!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),v}this.allocateTextureUnit=W,this.resetTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=U,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=it,this.setupRenderTarget=st,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Fe}function vf(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Pn)return 5121;if(s===ul)return 32819;if(s===hl)return 32820;if(s===ol)return 5120;if(s===ll)return 5122;if(s===$a)return 5123;if(s===cl)return 5124;if(s===Tn)return 5125;if(s===En)return 5126;if(s===Ai)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===dl)return 6406;if(s===Ut)return 6408;if(s===pl)return 6409;if(s===ml)return 6410;if(s===Cn)return 6402;if(s===oi)return 34041;if(s===fl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===lr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===gl)return 6403;if(s===_l)return 36244;if(s===xl)return 33319;if(s===vl)return 33320;if(s===yl)return 36249;if(s===vs||s===ys||s===Ms||s===bs)if(o===Be)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===vs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===vs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ys)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ms)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nr||s===Ur||s===Or||s===zr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Nr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ur)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Or)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ml)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Br||s===Vr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Br)return o===Be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gr||s===kr||s===Hr||s===Wr||s===qr||s===Xr||s===jr||s===Yr||s===Zr||s===Jr||s===$r||s===Kr||s===Qr||s===ea)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Gr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$r)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ea)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ta)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ta)return o===Be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ti?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class yf extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $i extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mf={type:"move"};class $s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),g=this._getHandJoint(l,p);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=d.radius),g.visible=d!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=c.position.distanceTo(h.position),m=.02,x=.005;l.inputState.pinching&&f>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mf)))}return a!==null&&(a.visible=i!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bf extends Mt{constructor(e,t,n,i,s,o,a,u,l,c){if(c=c!==void 0?c:Cn,c!==Cn&&c!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Cn&&(n=Tn),n===void 0&&c===oi&&(n=ti),super(null,i,s,o,a,u,c,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ct,this.minFilter=u!==void 0?u:ct,this.flipY=!1,this.generateMipmaps=!1}}class Sf extends ci{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",u=null,l=null,c=null,h=null,f=null,m=null;const x=t.getContextAttributes();let p=null,d=null;const g=[],w=[],S=new Set,A=new Map,M=new Ft;M.layers.enable(1),M.viewport=new Ke;const C=new Ft;C.layers.enable(2),C.viewport=new Ke;const F=[M,C],_=new yf;_.layers.enable(1),_.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let V=g[U];return V===void 0&&(V=new $s,g[U]=V),V.getTargetRaySpace()},this.getControllerGrip=function(U){let V=g[U];return V===void 0&&(V=new $s,g[U]=V),V.getGripSpace()},this.getHand=function(U){let V=g[U];return V===void 0&&(V=new $s,g[U]=V),V.getHandSpace()};function X(U){const V=w.indexOf(U.inputSource);if(V===-1)return;const Z=g[V];Z!==void 0&&Z.dispatchEvent({type:U.type,data:U.inputSource})}function le(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",le),i.removeEventListener("inputsourceschange",N);for(let U=0;U<g.length;U++){const V=w[U];V!==null&&(w[U]=null,g[U].disconnect(V))}T=null,I=null,e.setRenderTarget(p),f=null,h=null,c=null,i=null,d=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",le),i.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),d=new Dn(f.framebufferWidth,f.framebufferHeight,{format:Ut,type:Pn,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let V=null,Z=null,te=null;x.depth&&(te=x.stencil?35056:33190,V=x.stencil?oi:Cn,Z=x.stencil?ti:Tn);const se={colorFormat:32856,depthFormat:te,scaleFactor:s};c=new XRWebGLBinding(i,t),h=c.createProjectionLayer(se),i.updateRenderState({layers:[h]}),d=new Dn(h.textureWidth,h.textureHeight,{format:Ut,type:Pn,depthTexture:new bf(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const k=e.properties.get(d);k.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),u=null,o=await i.requestReferenceSpace(a),$.setContext(i),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(U){for(let V=0;V<U.removed.length;V++){const Z=U.removed[V],te=w.indexOf(Z);te>=0&&(w[te]=null,g[te].disconnect(Z))}for(let V=0;V<U.added.length;V++){const Z=U.added[V];let te=w.indexOf(Z);if(te===-1){for(let k=0;k<g.length;k++)if(k>=w.length){w.push(Z),te=k;break}else if(w[k]===null){w[k]=Z,te=k;break}if(te===-1)break}const se=g[te];se&&se.connect(Z)}}const D=new P,q=new P;function J(U,V,Z){D.setFromMatrixPosition(V.matrixWorld),q.setFromMatrixPosition(Z.matrixWorld);const te=D.distanceTo(q),se=V.projectionMatrix.elements,k=Z.projectionMatrix.elements,Le=se[14]/(se[10]-1),ue=se[14]/(se[10]+1),ve=(se[9]+1)/se[5],ce=(se[9]-1)/se[5],Ie=(se[8]-1)/se[0],Se=(k[8]+1)/k[0],xe=Le*Ie,it=Le*Se,st=te/(-Ie+Se),rt=st*-Ie;V.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(rt),U.translateZ(st),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const bt=Le+st,He=ue+st,Fe=xe-rt,Gt=it+(te-rt),Pt=ve*ue/He*bt,b=ce*ue/He*bt;U.projectionMatrix.makePerspective(Fe,Gt,Pt,b,bt,He)}function Y(U,V){V===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(V.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;_.near=C.near=M.near=U.near,_.far=C.far=M.far=U.far,(T!==_.near||I!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,I=_.far);const V=U.parent,Z=_.cameras;Y(_,V);for(let se=0;se<Z.length;se++)Y(Z[se],V);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),U.matrix.copy(_.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const te=U.children;for(let se=0,k=te.length;se<k;se++)te[se].updateMatrixWorld(!0);Z.length===2?J(_,M,C):_.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(U){h!==null&&(h.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.getPlanes=function(){return S};let W=null;function ee(U,V){if(l=V.getViewerPose(u||o),m=V,l!==null){const Z=l.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let te=!1;Z.length!==_.cameras.length&&(_.cameras.length=0,te=!0);for(let se=0;se<Z.length;se++){const k=Z[se];let Le=null;if(f!==null)Le=f.getViewport(k);else{const ve=c.getViewSubImage(h,k);Le=ve.viewport,se===0&&(e.setRenderTargetTextures(d,ve.colorTexture,h.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(d))}let ue=F[se];ue===void 0&&(ue=new Ft,ue.layers.enable(se),ue.viewport=new Ke,F[se]=ue),ue.matrix.fromArray(k.transform.matrix),ue.projectionMatrix.fromArray(k.projectionMatrix),ue.viewport.set(Le.x,Le.y,Le.width,Le.height),se===0&&_.matrix.copy(ue.matrix),te===!0&&_.cameras.push(ue)}}for(let Z=0;Z<g.length;Z++){const te=w[Z],se=g[Z];te!==null&&se!==void 0&&se.update(te,V,u||o)}if(W&&W(U,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let Z=null;for(const te of S)V.detectedPlanes.has(te)||(Z===null&&(Z=[]),Z.push(te));if(Z!==null)for(const te of Z)S.delete(te),A.delete(te),n.dispatchEvent({type:"planeremoved",data:te});for(const te of V.detectedPlanes)if(!S.has(te))S.add(te),A.set(te,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:te});else{const se=A.get(te);te.lastChangedTime>se&&(A.set(te,te.lastChangedTime),n.dispatchEvent({type:"planechanged",data:te}))}}m=null}const $=new ho;$.setAnimationLoop(ee),this.setAnimationLoop=function(U){W=U},this.dispose=function(){}}}function Af(r,e){function t(p,d){d.color.getRGB(p.fogColor.value,oo(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,g,w,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),c(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,S)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),x(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,g,w):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Tt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Tt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const A=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*A}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let w;d.map?w=d.map:d.specularMap?w=d.specularMap:d.displacementMap?w=d.displacementMap:d.normalMap?w=d.normalMap:d.bumpMap?w=d.bumpMap:d.roughnessMap?w=d.roughnessMap:d.metalnessMap?w=d.metalnessMap:d.alphaMap?w=d.alphaMap:d.emissiveMap?w=d.emissiveMap:d.clearcoatMap?w=d.clearcoatMap:d.clearcoatNormalMap?w=d.clearcoatNormalMap:d.clearcoatRoughnessMap?w=d.clearcoatRoughnessMap:d.iridescenceMap?w=d.iridescenceMap:d.iridescenceThicknessMap?w=d.iridescenceThicknessMap:d.specularIntensityMap?w=d.specularIntensityMap:d.specularColorMap?w=d.specularColorMap:d.transmissionMap?w=d.transmissionMap:d.thicknessMap?w=d.thicknessMap:d.sheenColorMap?w=d.sheenColorMap:d.sheenRoughnessMap&&(w=d.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let S;d.aoMap?S=d.aoMap:d.lightMap&&(S=d.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uv2Transform.value.copy(S.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,g,w){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=w*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let S;d.map?S=d.map:d.alphaMap&&(S=d.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function c(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Tt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function wf(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function u(w,S){const A=S.program;n.uniformBlockBinding(w,A)}function l(w,S){let A=i[w.id];A===void 0&&(x(w),A=c(w),i[w.id]=A,w.addEventListener("dispose",d));const M=S.program;n.updateUBOMapping(w,M);const C=e.render.frame;s[w.id]!==C&&(f(w),s[w.id]=C)}function c(w){const S=h();w.__bindingPointIndex=S;const A=r.createBuffer(),M=w.__size,C=w.usage;return r.bindBuffer(35345,A),r.bufferData(35345,M,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,S,A),A}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const S=i[w.id],A=w.uniforms,M=w.__cache;r.bindBuffer(35345,S);for(let C=0,F=A.length;C<F;C++){const _=A[C];if(m(_,C,M)===!0){const T=_.value,I=_.__offset;typeof T=="number"?(_.__data[0]=T,r.bufferSubData(35345,I,_.__data)):(_.value.isMatrix3?(_.__data[0]=_.value.elements[0],_.__data[1]=_.value.elements[1],_.__data[2]=_.value.elements[2],_.__data[3]=_.value.elements[0],_.__data[4]=_.value.elements[3],_.__data[5]=_.value.elements[4],_.__data[6]=_.value.elements[5],_.__data[7]=_.value.elements[0],_.__data[8]=_.value.elements[6],_.__data[9]=_.value.elements[7],_.__data[10]=_.value.elements[8],_.__data[11]=_.value.elements[0]):T.toArray(_.__data),r.bufferSubData(35345,I,_.__data))}}r.bindBuffer(35345,null)}function m(w,S,A){const M=w.value;if(A[S]===void 0)return typeof M=="number"?A[S]=M:A[S]=M.clone(),!0;if(typeof M=="number"){if(A[S]!==M)return A[S]=M,!0}else{const C=A[S];if(C.equals(M)===!1)return C.copy(M),!0}return!1}function x(w){const S=w.uniforms;let A=0;const M=16;let C=0;for(let F=0,_=S.length;F<_;F++){const T=S[F],I=p(T);if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=A,F>0){C=A%M;const X=M-C;C!==0&&X-I.boundary<0&&(A+=M-C,T.__offset=A)}A+=I.storage}return C=A%M,C>0&&(A+=M-C),w.__size=A,w.__cache={},this}function p(w){const S=w.value,A={boundary:0,storage:0};return typeof S=="number"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),A}function d(w){const S=w.target;S.removeEventListener("dispose",d);const A=o.indexOf(S.__bindingPointIndex);o.splice(A,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function g(){for(const w in i)r.deleteBuffer(i[w]);o=[],i={},s={}}return{bind:u,update:l,dispose:g}}function Tf(){const r=as("canvas");return r.style.display="block",r}function xo(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Tf(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,u=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Rn,this.physicallyCorrectLights=!1,this.toneMapping=$t,this.toneMappingExposure=1;const p=this;let d=!1,g=0,w=0,S=null,A=-1,M=null;const C=new Ke,F=new Ke;let _=null,T=e.width,I=e.height,X=1,le=null,N=null;const D=new Ke(0,0,T,I),q=new Ke(0,0,T,I);let J=!1;const Y=new uo;let W=!1,ee=!1,$=null;const U=new $e,V=new Ne,Z=new P,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return S===null?X:1}let k=t;function Le(y,R){for(let O=0;O<y.length;O++){const L=y[O],G=e.getContext(L,R);if(G!==null)return G}return null}try{const y={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fr}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Pe,!1),k===null){const R=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&R.shift(),k=Le(R,y),k===null)throw Le(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ue,ve,ce,Ie,Se,xe,it,st,rt,bt,He,Fe,Gt,Pt,b,v,z,K,ne,re,ye,ae,H,me;function _e(){ue=new Uh(k),ve=new Ph(k,ue,r),ue.init(ve),ae=new vf(k,ue,ve),ce=new _f(k,ue,ve),Ie=new Bh,Se=new nf,xe=new xf(k,ue,ce,Se,ve,ae,Ie),it=new Dh(p),st=new Nh(p),rt=new Yl(k,ve),H=new Ch(k,ue,rt,ve),bt=new Oh(k,rt,Ie,H),He=new Hh(k,bt,rt,Ie),ne=new kh(k,ve,xe),v=new Rh(Se),Fe=new tf(p,it,st,ue,ve,H,v),Gt=new Af(p,Se),Pt=new rf,b=new hf(ue,ve),K=new Eh(p,it,st,ce,He,c,o),z=new gf(p,He,ve),me=new wf(k,Ie,ve,ce),re=new Lh(k,ue,Ie,ve),ye=new zh(k,ue,Ie,ve),Ie.programs=Fe.programs,p.capabilities=ve,p.extensions=ue,p.properties=Se,p.renderLists=Pt,p.shadowMap=z,p.state=ce,p.info=Ie}_e();const he=new Sf(p,k);this.xr=he,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const y=ue.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ue.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(T,I,!1))},this.getSize=function(y){return y.set(T,I)},this.setSize=function(y,R,O){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=y,I=R,e.width=Math.floor(y*X),e.height=Math.floor(R*X),O!==!1&&(e.style.width=y+"px",e.style.height=R+"px"),this.setViewport(0,0,y,R)},this.getDrawingBufferSize=function(y){return y.set(T*X,I*X).floor()},this.setDrawingBufferSize=function(y,R,O){T=y,I=R,X=O,e.width=Math.floor(y*O),e.height=Math.floor(R*O),this.setViewport(0,0,y,R)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(D)},this.setViewport=function(y,R,O,L){y.isVector4?D.set(y.x,y.y,y.z,y.w):D.set(y,R,O,L),ce.viewport(C.copy(D).multiplyScalar(X).floor())},this.getScissor=function(y){return y.copy(q)},this.setScissor=function(y,R,O,L){y.isVector4?q.set(y.x,y.y,y.z,y.w):q.set(y,R,O,L),ce.scissor(F.copy(q).multiplyScalar(X).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(y){ce.setScissorTest(J=y)},this.setOpaqueSort=function(y){le=y},this.setTransparentSort=function(y){N=y},this.getClearColor=function(y){return y.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(y=!0,R=!0,O=!0){let L=0;y&&(L|=16384),R&&(L|=256),O&&(L|=1024),k.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Pe,!1),Pt.dispose(),b.dispose(),Se.dispose(),it.dispose(),st.dispose(),He.dispose(),H.dispose(),me.dispose(),Fe.dispose(),he.dispose(),he.removeEventListener("sessionstart",oe),he.removeEventListener("sessionend",de),$&&($.dispose(),$=null),De.stop()};function ge(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const y=Ie.autoReset,R=z.enabled,O=z.autoUpdate,L=z.needsUpdate,G=z.type;_e(),Ie.autoReset=y,z.enabled=R,z.autoUpdate=O,z.needsUpdate=L,z.type=G}function Pe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ue(y){const R=y.target;R.removeEventListener("dispose",Ue),je(R)}function je(y){E(y),Se.remove(y)}function E(y){const R=Se.get(y).programs;R!==void 0&&(R.forEach(function(O){Fe.releaseProgram(O)}),y.isShaderMaterial&&Fe.releaseShaderCache(y))}this.renderBufferDirect=function(y,R,O,L,G,pe){R===null&&(R=te);const Me=G.isMesh&&G.matrixWorld.determinant()<0,Ae=Ao(y,R,O,L,G);ce.setMaterial(L,Me);let we=O.index,Re=1;L.wireframe===!0&&(we=bt.getWireframeAttribute(O),Re=2);const Te=O.drawRange,Ee=O.attributes.position;let Ve=Te.start*Re,dt=(Te.start+Te.count)*Re;pe!==null&&(Ve=Math.max(Ve,pe.start*Re),dt=Math.min(dt,(pe.start+pe.count)*Re)),we!==null?(Ve=Math.max(Ve,0),dt=Math.min(dt,we.count)):Ee!=null&&(Ve=Math.max(Ve,0),dt=Math.min(dt,Ee.count));const Ht=dt-Ve;if(Ht<0||Ht===1/0)return;H.setup(G,L,Ae,O,we);let fn,Ge=re;if(we!==null&&(fn=rt.get(we),Ge=ye,Ge.setIndex(fn)),G.isMesh)L.wireframe===!0?(ce.setLineWidth(L.wireframeLinewidth*se()),Ge.setMode(1)):Ge.setMode(4);else if(G.isLine){let Ce=L.linewidth;Ce===void 0&&(Ce=1),ce.setLineWidth(Ce*se()),G.isLineSegments?Ge.setMode(1):G.isLineLoop?Ge.setMode(2):Ge.setMode(3)}else G.isPoints?Ge.setMode(0):G.isSprite&&Ge.setMode(4);if(G.isInstancedMesh)Ge.renderInstances(Ve,Ht,G.count);else if(O.isInstancedBufferGeometry){const Ce=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ms=Math.min(O.instanceCount,Ce);Ge.renderInstances(Ve,Ht,ms)}else Ge.render(Ve,Ht)},this.compile=function(y,R){function O(L,G,pe){L.transparent===!0&&L.side===an?(L.side=Tt,L.needsUpdate=!0,St(L,G,pe),L.side=si,L.needsUpdate=!0,St(L,G,pe),L.side=an):St(L,G,pe)}f=b.get(y),f.init(),x.push(f),y.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights(p.physicallyCorrectLights),y.traverse(function(L){const G=L.material;if(G)if(Array.isArray(G))for(let pe=0;pe<G.length;pe++){const Me=G[pe];O(Me,y,L)}else O(G,y,L)}),x.pop(),f=null};let B=null;function j(y){B&&B(y)}function oe(){De.stop()}function de(){De.start()}const De=new ho;De.setAnimationLoop(j),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(y){B=y,he.setAnimationLoop(y),y===null?De.stop():De.start()},he.addEventListener("sessionstart",oe),he.addEventListener("sessionend",de),this.render=function(y,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(R),R=he.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,R,S),f=b.get(y,x.length),f.init(),x.push(f),U.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Y.setFromProjectionMatrix(U),ee=this.localClippingEnabled,W=v.init(this.clippingPlanes,ee,R),h=Pt.get(y,m.length),h.init(),m.push(h),Ye(y,R,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(le,N),W===!0&&v.beginShadows();const O=f.state.shadowsArray;if(z.render(O,y,R),W===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(h,y),f.setupLights(p.physicallyCorrectLights),R.isArrayCamera){const L=R.cameras;for(let G=0,pe=L.length;G<pe;G++){const Me=L[G];Qe(h,y,Me,Me.viewport)}}else Qe(h,y,R);S!==null&&(xe.updateMultisampleRenderTarget(S),xe.updateRenderTargetMipmap(S)),y.isScene===!0&&y.onAfterRender(p,y,R),H.resetDefaultState(),A=-1,M=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Ye(y,R,O,L){if(y.visible===!1)return;if(y.layers.test(R.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(R);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){L&&Z.setFromMatrixPosition(y.matrixWorld).applyMatrix4(U);const Me=He.update(y),Ae=y.material;Ae.visible&&h.push(y,Me,Ae,O,Z.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Ie.render.frame&&(y.skeleton.update(),y.skeleton.frame=Ie.render.frame),!y.frustumCulled||Y.intersectsObject(y))){L&&Z.setFromMatrixPosition(y.matrixWorld).applyMatrix4(U);const Me=He.update(y),Ae=y.material;if(Array.isArray(Ae)){const we=Me.groups;for(let Re=0,Te=we.length;Re<Te;Re++){const Ee=we[Re],Ve=Ae[Ee.materialIndex];Ve&&Ve.visible&&h.push(y,Me,Ve,O,Z.z,Ee)}}else Ae.visible&&h.push(y,Me,Ae,O,Z.z,null)}}const pe=y.children;for(let Me=0,Ae=pe.length;Me<Ae;Me++)Ye(pe[Me],R,O,L)}function Qe(y,R,O,L){const G=y.opaque,pe=y.transmissive,Me=y.transparent;f.setupLightsView(O),pe.length>0&&dn(G,R,O),L&&ce.viewport(C.copy(L)),G.length>0&&Oe(G,R,O),pe.length>0&&Oe(pe,R,O),Me.length>0&&Oe(Me,R,O),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function dn(y,R,O){const L=ve.isWebGL2;$===null&&($=new Dn(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Ai:Pn,minFilter:cs,samples:L&&s===!0?4:0})),p.getDrawingBufferSize(V),L?$.setSize(V.x,V.y):$.setSize(cr(V.x),cr(V.y));const G=p.getRenderTarget();p.setRenderTarget($),p.clear();const pe=p.toneMapping;p.toneMapping=$t,Oe(y,R,O),p.toneMapping=pe,xe.updateMultisampleRenderTarget($),xe.updateRenderTargetMipmap($),p.setRenderTarget(G)}function Oe(y,R,O){const L=R.isScene===!0?R.overrideMaterial:null;for(let G=0,pe=y.length;G<pe;G++){const Me=y[G],Ae=Me.object,we=Me.geometry,Re=L===null?Me.material:L,Te=Me.group;Ae.layers.test(O.layers)&&kt(Ae,R,O,we,Re,Te)}}function kt(y,R,O,L,G,pe){y.onBeforeRender(p,R,O,L,G,pe),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(p,R,O,L,y,pe),G.transparent===!0&&G.side===an?(G.side=Tt,G.needsUpdate=!0,p.renderBufferDirect(O,R,L,G,y,pe),G.side=si,G.needsUpdate=!0,p.renderBufferDirect(O,R,L,G,y,pe),G.side=an):p.renderBufferDirect(O,R,L,G,y,pe),y.onAfterRender(p,R,O,L,G,pe)}function St(y,R,O){R.isScene!==!0&&(R=te);const L=Se.get(y),G=f.state.lights,pe=f.state.shadowsArray,Me=G.state.version,Ae=Fe.getParameters(y,G.state,pe,R,O),we=Fe.getProgramCacheKey(Ae);let Re=L.programs;L.environment=y.isMeshStandardMaterial?R.environment:null,L.fog=R.fog,L.envMap=(y.isMeshStandardMaterial?st:it).get(y.envMap||L.environment),Re===void 0&&(y.addEventListener("dispose",Ue),Re=new Map,L.programs=Re);let Te=Re.get(we);if(Te!==void 0){if(L.currentProgram===Te&&L.lightsStateVersion===Me)return Ar(y,Ae),Te}else Ae.uniforms=Fe.getUniforms(y),y.onBuild(O,Ae,p),y.onBeforeCompile(Ae,p),Te=Fe.acquireProgram(Ae,we),Re.set(we,Te),L.uniforms=Ae.uniforms;const Ee=L.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=v.uniform),Ar(y,Ae),L.needsLights=To(y),L.lightsStateVersion=Me,L.needsLights&&(Ee.ambientLightColor.value=G.state.ambient,Ee.lightProbe.value=G.state.probe,Ee.directionalLights.value=G.state.directional,Ee.directionalLightShadows.value=G.state.directionalShadow,Ee.spotLights.value=G.state.spot,Ee.spotLightShadows.value=G.state.spotShadow,Ee.rectAreaLights.value=G.state.rectArea,Ee.ltc_1.value=G.state.rectAreaLTC1,Ee.ltc_2.value=G.state.rectAreaLTC2,Ee.pointLights.value=G.state.point,Ee.pointLightShadows.value=G.state.pointShadow,Ee.hemisphereLights.value=G.state.hemi,Ee.directionalShadowMap.value=G.state.directionalShadowMap,Ee.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ee.spotShadowMap.value=G.state.spotShadowMap,Ee.spotLightMatrix.value=G.state.spotLightMatrix,Ee.spotLightMap.value=G.state.spotLightMap,Ee.pointShadowMap.value=G.state.pointShadowMap,Ee.pointShadowMatrix.value=G.state.pointShadowMatrix);const Ve=Te.getUniforms(),dt=is.seqWithValue(Ve.seq,Ee);return L.currentProgram=Te,L.uniformsList=dt,Te}function Ar(y,R){const O=Se.get(y);O.outputEncoding=R.outputEncoding,O.instancing=R.instancing,O.skinning=R.skinning,O.morphTargets=R.morphTargets,O.morphNormals=R.morphNormals,O.morphColors=R.morphColors,O.morphTargetsCount=R.morphTargetsCount,O.numClippingPlanes=R.numClippingPlanes,O.numIntersection=R.numClipIntersection,O.vertexAlphas=R.vertexAlphas,O.vertexTangents=R.vertexTangents,O.toneMapping=R.toneMapping}function Ao(y,R,O,L,G){R.isScene!==!0&&(R=te),xe.resetTextureUnits();const pe=R.fog,Me=L.isMeshStandardMaterial?R.environment:null,Ae=S===null?p.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Rn,we=(L.isMeshStandardMaterial?st:it).get(L.envMap||Me),Re=L.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Te=!!L.normalMap&&!!O.attributes.tangent,Ee=!!O.morphAttributes.position,Ve=!!O.morphAttributes.normal,dt=!!O.morphAttributes.color,Ht=L.toneMapped?p.toneMapping:$t,fn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ge=fn!==void 0?fn.length:0,Ce=Se.get(L),ms=f.state.lights;if(W===!0&&(ee===!0||y!==M)){const ft=y===M&&L.id===A;v.setState(L,y,ft)}let Ze=!1;L.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==ms.state.version||Ce.outputEncoding!==Ae||G.isInstancedMesh&&Ce.instancing===!1||!G.isInstancedMesh&&Ce.instancing===!0||G.isSkinnedMesh&&Ce.skinning===!1||!G.isSkinnedMesh&&Ce.skinning===!0||Ce.envMap!==we||L.fog===!0&&Ce.fog!==pe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==v.numPlanes||Ce.numIntersection!==v.numIntersection)||Ce.vertexAlphas!==Re||Ce.vertexTangents!==Te||Ce.morphTargets!==Ee||Ce.morphNormals!==Ve||Ce.morphColors!==dt||Ce.toneMapping!==Ht||ve.isWebGL2===!0&&Ce.morphTargetsCount!==Ge)&&(Ze=!0):(Ze=!0,Ce.__version=L.version);let pn=Ce.currentProgram;Ze===!0&&(pn=St(L,R,G));let wr=!1,di=!1,gs=!1;const at=pn.getUniforms(),mn=Ce.uniforms;if(ce.useProgram(pn.program)&&(wr=!0,di=!0,gs=!0),L.id!==A&&(A=L.id,di=!0),wr||M!==y){if(at.setValue(k,"projectionMatrix",y.projectionMatrix),ve.logarithmicDepthBuffer&&at.setValue(k,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),M!==y&&(M=y,di=!0,gs=!0),L.isShaderMaterial||L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshStandardMaterial||L.envMap){const ft=at.map.cameraPosition;ft!==void 0&&ft.setValue(k,Z.setFromMatrixPosition(y.matrixWorld))}(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&at.setValue(k,"isOrthographic",y.isOrthographicCamera===!0),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial||L.isShadowMaterial||G.isSkinnedMesh)&&at.setValue(k,"viewMatrix",y.matrixWorldInverse)}if(G.isSkinnedMesh){at.setOptional(k,G,"bindMatrix"),at.setOptional(k,G,"bindMatrixInverse");const ft=G.skeleton;ft&&(ve.floatVertexTextures?(ft.boneTexture===null&&ft.computeBoneTexture(),at.setValue(k,"boneTexture",ft.boneTexture,xe),at.setValue(k,"boneTextureSize",ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _s=O.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0&&ve.isWebGL2===!0)&&ne.update(G,O,L,pn),(di||Ce.receiveShadow!==G.receiveShadow)&&(Ce.receiveShadow=G.receiveShadow,at.setValue(k,"receiveShadow",G.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(mn.envMap.value=we,mn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),di&&(at.setValue(k,"toneMappingExposure",p.toneMappingExposure),Ce.needsLights&&wo(mn,gs),pe&&L.fog===!0&&Gt.refreshFogUniforms(mn,pe),Gt.refreshMaterialUniforms(mn,L,X,I,$),is.upload(k,Ce.uniformsList,mn,xe)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(is.upload(k,Ce.uniformsList,mn,xe),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&at.setValue(k,"center",G.center),at.setValue(k,"modelViewMatrix",G.modelViewMatrix),at.setValue(k,"normalMatrix",G.normalMatrix),at.setValue(k,"modelMatrix",G.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const ft=L.uniformsGroups;for(let xs=0,Eo=ft.length;xs<Eo;xs++)if(ve.isWebGL2){const Tr=ft[xs];me.update(Tr,pn),me.bind(Tr,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function wo(y,R){y.ambientLightColor.needsUpdate=R,y.lightProbe.needsUpdate=R,y.directionalLights.needsUpdate=R,y.directionalLightShadows.needsUpdate=R,y.pointLights.needsUpdate=R,y.pointLightShadows.needsUpdate=R,y.spotLights.needsUpdate=R,y.spotLightShadows.needsUpdate=R,y.rectAreaLights.needsUpdate=R,y.hemisphereLights.needsUpdate=R}function To(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(y,R,O){Se.get(y.texture).__webglTexture=R,Se.get(y.depthTexture).__webglTexture=O;const L=Se.get(y);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=O===void 0,L.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,R){const O=Se.get(y);O.__webglFramebuffer=R,O.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(y,R=0,O=0){S=y,g=R,w=O;let L=!0,G=null,pe=!1,Me=!1;if(y){const we=Se.get(y);we.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),L=!1):we.__webglFramebuffer===void 0?xe.setupRenderTarget(y):we.__hasExternalTextures&&xe.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);const Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Me=!0);const Te=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(G=Te[R],pe=!0):ve.isWebGL2&&y.samples>0&&xe.useMultisampledRTT(y)===!1?G=Se.get(y).__webglMultisampledFramebuffer:G=Te,C.copy(y.viewport),F.copy(y.scissor),_=y.scissorTest}else C.copy(D).multiplyScalar(X).floor(),F.copy(q).multiplyScalar(X).floor(),_=J;if(ce.bindFramebuffer(36160,G)&&ve.drawBuffers&&L&&ce.drawBuffers(y,G),ce.viewport(C),ce.scissor(F),ce.setScissorTest(_),pe){const we=Se.get(y.texture);k.framebufferTexture2D(36160,36064,34069+R,we.__webglTexture,O)}else if(Me){const we=Se.get(y.texture),Re=R||0;k.framebufferTextureLayer(36160,36064,we.__webglTexture,O||0,Re)}A=-1},this.readRenderTargetPixels=function(y,R,O,L,G,pe,Me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){ce.bindFramebuffer(36160,Ae);try{const we=y.texture,Re=we.format,Te=we.type;if(Re!==Ut&&ae.convert(Re)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ee=Te===Ai&&(ue.has("EXT_color_buffer_half_float")||ve.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Te!==Pn&&ae.convert(Te)!==k.getParameter(35738)&&!(Te===En&&(ve.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ee){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=y.width-L&&O>=0&&O<=y.height-G&&k.readPixels(R,O,L,G,ae.convert(Re),ae.convert(Te),pe)}finally{const we=S!==null?Se.get(S).__webglFramebuffer:null;ce.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(y,R,O=0){const L=Math.pow(2,-O),G=Math.floor(R.image.width*L),pe=Math.floor(R.image.height*L);xe.setTexture2D(R,0),k.copyTexSubImage2D(3553,O,0,0,y.x,y.y,G,pe),ce.unbindTexture()},this.copyTextureToTexture=function(y,R,O,L=0){const G=R.image.width,pe=R.image.height,Me=ae.convert(O.format),Ae=ae.convert(O.type);xe.setTexture2D(O,0),k.pixelStorei(37440,O.flipY),k.pixelStorei(37441,O.premultiplyAlpha),k.pixelStorei(3317,O.unpackAlignment),R.isDataTexture?k.texSubImage2D(3553,L,y.x,y.y,G,pe,Me,Ae,R.image.data):R.isCompressedTexture?k.compressedTexSubImage2D(3553,L,y.x,y.y,R.mipmaps[0].width,R.mipmaps[0].height,Me,R.mipmaps[0].data):k.texSubImage2D(3553,L,y.x,y.y,Me,Ae,R.image),L===0&&O.generateMipmaps&&k.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(y,R,O,L,G=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=y.max.x-y.min.x+1,Me=y.max.y-y.min.y+1,Ae=y.max.z-y.min.z+1,we=ae.convert(L.format),Re=ae.convert(L.type);let Te;if(L.isData3DTexture)xe.setTexture3D(L,0),Te=32879;else if(L.isDataArrayTexture)xe.setTexture2DArray(L,0),Te=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,L.flipY),k.pixelStorei(37441,L.premultiplyAlpha),k.pixelStorei(3317,L.unpackAlignment);const Ee=k.getParameter(3314),Ve=k.getParameter(32878),dt=k.getParameter(3316),Ht=k.getParameter(3315),fn=k.getParameter(32877),Ge=O.isCompressedTexture?O.mipmaps[0]:O.image;k.pixelStorei(3314,Ge.width),k.pixelStorei(32878,Ge.height),k.pixelStorei(3316,y.min.x),k.pixelStorei(3315,y.min.y),k.pixelStorei(32877,y.min.z),O.isDataTexture||O.isData3DTexture?k.texSubImage3D(Te,G,R.x,R.y,R.z,pe,Me,Ae,we,Re,Ge.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Te,G,R.x,R.y,R.z,pe,Me,Ae,we,Ge.data)):k.texSubImage3D(Te,G,R.x,R.y,R.z,pe,Me,Ae,we,Re,Ge),k.pixelStorei(3314,Ee),k.pixelStorei(32878,Ve),k.pixelStorei(3316,dt),k.pixelStorei(3315,Ht),k.pixelStorei(32877,fn),G===0&&L.generateMipmaps&&k.generateMipmap(Te),ce.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?xe.setTextureCube(y,0):y.isData3DTexture?xe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?xe.setTexture2DArray(y,0):xe.setTexture2D(y,0),ce.unbindTexture()},this.resetState=function(){g=0,w=0,S=null,ce.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ef extends xo{}Ef.prototype.isWebGL1Renderer=!0;class Cf extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ds extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const za=new P,Ba=new P,Va=new $e,Ks=new io,Ki=new us;class gr extends nt{constructor(e=new Lt,t=new ds){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)za.fromBufferAttribute(t,i-1),Ba.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=za.distanceTo(Ba);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(i),Ki.radius+=s,e.ray.intersectsSphere(Ki)===!1)return;Va.copy(i).invert(),Ks.copy(e.ray).applyMatrix4(Va);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,l=new P,c=new P,h=new P,f=new P,m=this.isLineSegments?2:1,x=n.index,d=n.attributes.position;if(x!==null){const g=Math.max(0,o.start),w=Math.min(x.count,o.start+o.count);for(let S=g,A=w-1;S<A;S+=m){const M=x.getX(S),C=x.getX(S+1);if(l.fromBufferAttribute(d,M),c.fromBufferAttribute(d,C),Ks.distanceSqToSegment(l,c,f,h)>u)continue;f.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(f);_<e.near||_>e.far||t.push({distance:_,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),w=Math.min(d.count,o.start+o.count);for(let S=g,A=w-1;S<A;S+=m){if(l.fromBufferAttribute(d,S),c.fromBufferAttribute(d,S+1),Ks.distanceSqToSegment(l,c,f,h)>u)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ga=new P,ka=new P;class Lf extends gr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ga.fromBufferAttribute(t,i),ka.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ga.distanceTo(ka);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class os extends Lt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+a,Math.PI);let l=0;const c=[],h=new P,f=new P,m=[],x=[],p=[],d=[];for(let g=0;g<=n;g++){const w=[],S=g/n;let A=0;g==0&&o==0?A=.5/t:g==n&&u==Math.PI&&(A=-.5/t);for(let M=0;M<=t;M++){const C=M/t;h.x=-e*Math.cos(i+C*s)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(i+C*s)*Math.sin(o+S*a),x.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(C+A,1-S),w.push(l++)}c.push(w)}for(let g=0;g<n;g++)for(let w=0;w<t;w++){const S=c[g][w+1],A=c[g][w],M=c[g+1][w],C=c[g+1][w+1];(g!==0||o>0)&&m.push(S,A,C),(g!==n-1||u<Math.PI)&&m.push(A,M,C)}this.setIndex(m),this.setAttribute("position",new Ct(x,3)),this.setAttribute("normal",new Ct(p,3)),this.setAttribute("uv",new Ct(d,2))}static fromJSON(e){return new os(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Ha={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Pf{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,u;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,s===!1&&i.onStart!==void 0&&i.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return u?u(c):c},this.setURLModifier=function(c){return u=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){const h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],x=l[h+1];if(m.global&&(m.lastIndex=0),m.test(c))return x}return null}}}const Rf=new Pf;class vo{constructor(e){this.manager=e!==void 0?e:Rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Zt={};class Df extends Error{constructor(e,t){super(e),this.response=t}}class If extends vo{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ha.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zt[e]!==void 0){Zt[e].push({onLoad:t,onProgress:n,onError:i});return}Zt[e]=[],Zt[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,u=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=Zt[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=f?parseInt(f):0,x=m!==0;let p=0;const d=new ReadableStream({start(g){w();function w(){h.read().then(({done:S,value:A})=>{if(S)g.close();else{p+=A.byteLength;const M=new ProgressEvent("progress",{lengthComputable:x,loaded:p,total:m});for(let C=0,F=c.length;C<F;C++){const _=c[C];_.onProgress&&_.onProgress(M)}g.enqueue(A),w()}})}}});return new Response(d)}else throw new Df(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(u){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(x=>m.decode(x))}}}).then(l=>{Ha.add(e,l);const c=Zt[e];delete Zt[e];for(let h=0,f=c.length;h<f;h++){const m=c[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const c=Zt[e];if(c===void 0)throw this.manager.itemError(e),l;delete Zt[e];for(let h=0,f=c.length;h<f;h++){const m=c[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}let Qi;class yo{static getContext(){return Qi===void 0&&(Qi=new(window.AudioContext||window.webkitAudioContext)),Qi}static setContext(e){Qi=e}}class Ff extends vo{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new If(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const u=a.slice(0);yo.getContext().decodeAudioData(u,function(c){t(c)})}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}}class Nf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wa(){return(typeof performance>"u"?Date:performance).now()}const vn=new P,qa=new ui,Uf=new P,yn=new P;class Of extends nt{constructor(){super(),this.type="AudioListener",this.context=yo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Nf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(vn,qa,Uf),yn.set(0,0,-1).applyQuaternion(qa),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(vn.x,i),t.positionY.linearRampToValueAtTime(vn.y,i),t.positionZ.linearRampToValueAtTime(vn.z,i),t.forwardX.linearRampToValueAtTime(yn.x,i),t.forwardY.linearRampToValueAtTime(yn.y,i),t.forwardZ.linearRampToValueAtTime(yn.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(vn.x,vn.y,vn.z),t.setOrientation(yn.x,yn.y,yn.z,n.x,n.y,n.z)}}class zf extends nt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const es=new Vt;class Bf extends Lf{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new Lt;s.setIndex(new Et(n,1)),s.setAttribute("position",new Et(i,3)),super(s,new ds({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&es.setFromObject(this.object),es.isEmpty())return;const t=es.min,n=es.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fr);var Mi=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(c){c.preventDefault(),n(++r%e.children.length)},!1);function t(c){return e.appendChild(c.dom),c}function n(c){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===c?"block":"none";r=c}var i=(performance||Date).now(),s=i,o=0,a=t(new Mi.Panel("FPS","#0ff","#002")),u=t(new Mi.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new Mi.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var c=(performance||Date).now();if(u.update(c-i,200),c>=s+1e3&&(a.update(o*1e3/(c-s),100),s=c,o=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return c},update:function(){i=this.end()},domElement:e,setMode:n}};Mi.Panel=function(r,e,t){var n=1/0,i=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,u=48*o,l=3*o,c=2*o,h=3*o,f=15*o,m=74*o,x=30*o,p=document.createElement("canvas");p.width=a,p.height=u,p.style.cssText="width:80px;height:48px";var d=p.getContext("2d");return d.font="bold "+9*o+"px Helvetica,Arial,sans-serif",d.textBaseline="top",d.fillStyle=t,d.fillRect(0,0,a,u),d.fillStyle=e,d.fillText(r,l,c),d.fillRect(h,f,m,x),d.fillStyle=t,d.globalAlpha=.9,d.fillRect(h,f,m,x),{dom:p,update:function(g,w){n=Math.min(n,g),i=Math.max(i,g),d.fillStyle=t,d.globalAlpha=1,d.fillRect(0,0,a,f),d.fillStyle=e,d.fillText(s(g)+" "+r+" ("+s(n)+"-"+s(i)+")",l,c),d.drawImage(p,h+o,f,m-o,x,h,f,m-o,x),d.fillRect(h+m-o,f,o,x),d.fillStyle=t,d.globalAlpha=.9,d.fillRect(h+m-o,f,o,s((1-g/w)*x))}}};const Vf=Mi;class Gf{constructor(e,t,n,i){Q(this,"object1");Q(this,"object2");Q(this,"id");Q(this,"callback");this.object1=t,this.object2=n,this.callback=i,this.id=e}getId(){return this.id}doesCollide(){const e=new Vt().setFromObject(this.object1.getObject()),t=new Vt().setFromObject(this.object2.getObject());return e.intersectsBox(t)}execute(){this.callback(this.object1,this.object2)}}const Kn=class{constructor(){Q(this,"pairs",[])}static getInstance(){return Kn.instance||(Kn.instance=new Kn),Kn.instance}addPair(e,t,n,i){this.pairs.push(new Gf(e,t,n,i))}removePair(e){this.pairs=this.pairs.filter(t=>t.getId()!==e)}clear(){this.pairs=[]}update(){for(let e of this.pairs)e.doesCollide()&&e.execute()}};let bi=Kn;Q(bi,"instance");const br=class{constructor(e){Q(this,"players");Q(this,"leftElement");Q(this,"rightElement");const t=document.getElementById("scoreboard");this.leftElement=t.querySelector("#left"),this.rightElement=t.querySelector("#right"),this.players=e}update(){this.leftElement.innerText=this.players.left.getScore().toString(),this.rightElement.innerText=this.players.right.getScore().toString()}reset(){this.leftElement.innerText="0",this.rightElement.innerText="0"}static setup(e){return this._instance||(this._instance=new br(e)),this._instance}static getInstance(){return this._instance}static removeInstance(){this._instance=void 0}};let ni=br;Q(ni,"_instance");const kf="data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAF6ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWenp6enp6enp6enp6enp6enp6enp6enp6e5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5/////////////////////////////////8AAAA5TEFNRTMuOThyAqUAAAAALlkAABRGJAZJQgAARgAABej4F2XlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uAxAAAC1yrXFTDABPzoC53P+QCAAIDBkQwBwDiPGsPDMzMzM/fxYsAYDAYWTvmEAGAwGTJ3sEAGAwGTJp2xABgMLJkyd0QAYDCyZMmnpgDAZMmTJp7BMmTJkyd6x5NOwfD5cHwfB+D4Pg+fX+sP4CoUDQdDseDMViMFgAGISEk5pTTeBdMABAA740AEmGjAlJgVoCsnjQQvzDUBYowrUGJVmsQ09hiRirGAmFlirf9CezacZjXmtGTeYyUAJXHpe76h3liimLudkYvISRsOp/A4ASV3jAAABgXfxoyvy5jEpIKMbl1Y1eQejE1FSUBsgEBNaF7L5TZ8wZ0VjL7B1MFcIIwPT4DE+EmMDQCZO5GPSqRMAJZuUf9nfMB8dAyPhJDA+AVMEcUQyHApDAzA/MA0O5+1D8pSilRWcab+zP+GDeGEiECYEwRxglBGGC8AqCQIleggAtLYgAOh6qsqf/VH81e+53//6t0r7H/+3DEAAOQRPVUXaeAEg4vJsmTDjgAAMZcxIEgjBpDv9jmiF9M2h6rLaWdZmZJCCkrEZa+fPpS6gxQFIJUrnqti0VwwgBUdbqR9G3l6O0AJHSxbzX+U9AHYuLLr2xZFI8W5Co3zXNSYj+Yde2LWhDlDlixa6zWsEcwdTNG37boogzQ6WXWLbtYnxYrW///gxf/uqnBm3cLhIHnLAs4edqLJmssybm48JdqNyyBn9j0Tlchl10YPCSgMmpItBaJwk+CRsJkTjSZlPS1AwGeYt2dE4SBnLd7k4DEmXNuyQksx0WeaLEwtTF97UigVgORekQXyxDkO8FZs6waiRhjB1jE18YyUl6TwTaasd1V2B6Gb6Qj8i6JPDFP7BRaAGAASGZ61tpcXiER1ObxjmG5VQzU+cSDJDZEplci//twxA8AEfmfLLWjAAqGrmNDNPABEhnPEEVTo1qQFJ44aA3KUGGDT1JHRIkQkQSjELLxwpIoWXQGU5gEc2EzuYB20lml4gzaleoymeWkkTMRYmxv3mww/dWPUUEoN7/TPZC5nI+O7akuuU+AZ9PF3qbRLpEbq7YqmaotPP42ZPQNRNPoiNmU9NYDJUBLXP8BIyYcz99f8eCqLSaNf48RN2KH+CBCTEZph9/xOxRDMJcpWGJG//QwN4Shkg2bQW6FG//5PjGKwesIcDGYYOJc1///jXDUtaXLQueMWg1xn///mkzSK2K3vzJJjnWPvOfn////uRgCllqRw/oy7OA9Cx1w2waX9YVt/////8xEaP5CBwrYyDpZCmQRUFvgkqxbLdCzJi0GCJi1TEFNRTMuOTguNFVVVVVVVf/7EMQIA8AAAaQcAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",Hf="data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAF6ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWenp6enp6enp6enp6enp6enp6enp6enp6e5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5/////////////////////////////////8AAAA5TEFNRTMuOThyAqUAAAAALkcAABRGJAS6QgAARgAABeiRS6JYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uAxAAACzi5WFSUgBPsHW+3PeYCAAIEYrAOBsnSCgYYpAgFAoFBJEjBAEAwxi6NG2xloyMVo9UFYrFaNvaUQCsnbpRAgY8ECBAgQQtGKBQgY85znDLmjRt7BGjRtz3wg3M+CAIFAQBDBB3lwfieoWCwaDUfDwai0OgAAA8vGHzwTJ7HAKm2ZE8hvPuYmdktMYBADgXAKjtQwOi0TA6OxKwAQsAVftmxARIbdRsLFhYAv7RiiGHGr0PWazRlhIAhBIkA3c7gZnsOBm2HSGKxRIYkZHRCAoRAaCQBQWAC1zezUheiM6t3A2JFQzZpRKMUoTlWmDHUYjBm/5lo05hgzHrM9MswqUyqDHDAmSTMJoLFUKHGLKApOvP+v7vzEhHgMDMR0x8QfjGTB/MC0Owx8Q3TDZGPTJXLDSTrHVZFHdfz/x2YPQMRgRAKhgHIiAAAwNBgSAHAUBNUCHyrBGAQqgixQxSc3eG8uHUgAAT/+3DEAYMN3PtifYQAEh4rZkGkjqnR3mPGrYRlltlhRbZp0t4yJXVrOZZTAtEg6ABMtg6CwszB0H4QrioCJtSgdD/KD6/DkRa5Dkd5QfX5R3yKpcqa17OKtbEm/AdL5QffIc2uSaLXyHQ/5r/xb2JVgFq96HkXLMKeSBoDG1A5/9QLrkQwMBFqS+yf7GFF1sKLLBtcbeBaOK4Z4Y2bVLTRGJQW+Mcvzjbj6dW5aMiFIqWCxGwjdtyOp/ZMyVSVKlDtMdua1YoytGSFYtNBJ02Uk00lVl6lKuIFCYDBCyLrH7O51YSmhNLXBbhGNDhhqia2HlIVI8NwpekZCZLatj0U79kTDfVVEleKBeZzV7xiLhHOxoTD6JAKyx8sjamwgPTC6kNEMWFLFyRRGRLNJwRE1sL+DCaGMW1V//twxBgDUo2jKg0xIIJQs2VFlJo50JAlrMVReS6NC5pAM5RDPka5o2sgYWc1JSGztAQCifMYr83Ngkjmv6Wem0m58ISk5ZXGm2aRNqPDK8Kjqkerk+9zE0U603csmvaaS2YskXWtbch9vuu5NJZia6UP2YrVu/TV0yQDxFACaj+Pk/0NwuVSCIwHT0k3DFM7NPOSqkPmZztkhafGOKi0oDiNWSAZFJC+DL6RiXXyOIh+GUc7lFUclNkobgugjKbN0wjaixk8OxCgvNGoZPjCJsxTz2k8wlhFEsafjUiiSl/XKqlYxaJNKC76LGX6jWtGboypR1Ji8OakbzlLpnS8kijztS0MXrPNlJY5Hi6qAAW9+7QAUQGFUyK5XM2awiWkSJFFiRFHCSRyUySJPMzOMaiDBRZEok4qoP/7EMQVg8zhHyknmGnAAAA0gAAABK1X6sFUT8CqGAhYCjYY1CjBjvVDDhV2aGJBARhQGKomARr/+1Umz4d+f/+y7MzOFOiWIvK/az8qVGPt60xBTUUzLjk4LjSqqqqqqqqqqqqqqqqq",Wf="/assets/score-fb16db27.mp3";var ss=(r=>(r[r.BOUNCE1=kf]="BOUNCE1",r[r.BOUNCE2=Hf]="BOUNCE2",r[r.SCORE=Wf]="SCORE",r))(ss||{});const Sr=class{constructor(){Q(this,"listener",new Of);Q(this,"sound");Q(this,"audioLoader",new Ff);this.sound=new zf(this.listener)}play(e){this.audioLoader.load(`${e}`,t=>{this.sound.setBuffer(t),this.sound.setLoop(!1),this.sound.setVolume(.5),this.sound.play()})}getListener(){return this.listener}static getInstance(){return this._instance||(this._instance=new Sr),this._instance}};let ii=Sr;Q(ii,"_instance");class qf{constructor(){Q(this,"scene");Q(this,"renderer");Q(this,"camera");Q(this,"gui");Q(this,"stats");Q(this,"play",!1);Q(this,"collision",bi.getInstance());Q(this,"updatableObjects",{});this.setupScene(),this.setupPlugins()}setPlay(e){this.play=e}isPlaying(){return this.play}reset(){this.scene.clear();const e=document.getElementById("app"),t=document.getElementById("stats"),n=document.getElementById("debug");e&&(e.innerHTML=""),t&&(t.innerHTML=""),n&&(n.innerHTML="")}addUpdatableObject(e,t){if(this.hasDrawable(t)){const n=t.getObject();n.name=e,this.scene.add(n)}this.updatableObjects[e]=t}hasDrawable(e){return"getObject"in e}removeUpdatableObject(e){if(!this.updatableObjects[e])throw new Error(`Object ${e} not found`);this.scene.remove(this.updatableObjects[e]),delete this.updatableObjects[e]}getScene(){return this.scene}getGui(){return this.gui}setupScene(){var i;const e=new Cf,t=new fo(window.innerWidth/-50,window.innerWidth/50,window.innerHeight/50,window.innerHeight/-50,-500,1e3),n=new xo;n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n.setSize(window.innerWidth,window.innerHeight),(i=document.getElementById("app"))==null||i.appendChild(n.domElement),t.add(ii.getInstance().getListener()),this.scene=e,this.renderer=n,this.camera=t}setupPlugins(){var e;this.stats=Vf(),(e=document.getElementById("stats"))==null||e.appendChild(this.stats.dom)}getWindowSize(){return{width:window.innerWidth,height:window.innerHeight}}animate(){if(this.stats.begin(),requestAnimationFrame(()=>this.animate()),this.play){for(const t in this.updatableObjects)this.updatableObjects[t].update();this.collision.update();const e=ni.getInstance();e&&e.update()}this.renderer.render(this.scene,this.camera),this.stats.end()}}class Mo extends P{}class yt extends P{}class fs{constructor(){Q(this,"observers");this.observers={}}observe(e,t){return this.observers[e]===void 0&&(this.observers[e]=[]),this.observers[e].push(t),this}unobserve(e,t){return this.observers[e]===void 0?this:(this.observers[e]=this.observers[e].filter(n=>n!==t),this)}notify(e,t){if(this.observers[e]===void 0)return this;for(const n of this.observers[e])n(t);return this}}class on extends fs{constructor(t){super();Q(this,"object");Q(this,"material");Q(this,"velocity",new Mo(0,0,0));Q(this,"position",new yt(0,0,0));this.material=t,this.object=this.setupObject()}getObject(){return this.object}getVelocity(){return this.velocity}getPosition(){return this.position}setVelocity(t){return this.velocity=t,this}setPosition(t){return this.position=t,this.object.position.set(t.x,t.y,t.z),this}setMaterial(t){return this.object.material=t,this}static getMovementUnit(){return 1}getDistanceTo(t){const n=this.getPosition(),i=t.getPosition();return on.getDistanceBetweenPos(n,i)}static getDistanceBetweenPos(t,n){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}}class bo extends on{constructor(t){super(new Ti({color:t}));Q(this,"color");this.color=t}setColor(t){return this.color=t,this.setMaterial(new Ti({color:t})),this}getColor(){return this.color}}var tt=(r=>(r.LEFT="left",r.RIGHT="right",r.TOP="top",r.BOTTOM="bottom",r))(tt||{});const Si=class{constructor(){Q(this,"width",50);Q(this,"height",20);Q(this,"depth",1)}setDept(e){this.depth=e}getObject(){const e=new hn(this.width,this.height,this.depth);return new Bf(new Ot(e,new Ti({color:"red"})))}getTouchedSide(e){const t=new Vt().setFromObject(this.getObject()),n=new Vt().setFromObject(e.getObject());if(t.containsBox(n))return null;const s=e.getPosition();return Si.getClosesBorder(s)}static getSidePosition(e,t){const n=Si.getInstance();switch(e){case"left":return new yt(-n.width/2,t.y,0);case"right":return new yt(n.width/2,t.y,0);case"top":return new yt(t.x,n.height/2,0);case"bottom":return new yt(t.x,-n.height/2,0)}}static getClosesBorder(e){const t=on.getDistanceBetweenPos(e,this.getSidePosition("left",e)),n=on.getDistanceBetweenPos(e,this.getSidePosition("right",e)),i=on.getDistanceBetweenPos(e,this.getSidePosition("top",e)),s=on.getDistanceBetweenPos(e,this.getSidePosition("bottom",e)),o={[t]:"left",[n]:"right",[i]:"top",[s]:"bottom"},a=Math.min(t,n,i,s);return o[a]}static getInstance(){return this._instance===void 0&&(this._instance=new Si),this._instance}};let cn=Si;Q(cn,"_instance");class ps extends bo{constructor(){super(...arguments);Q(this,"borders",cn.getInstance());Q(this,"_dummy")}getRadius(){return 1}setRadius(t){return this.object.geometry=new os(t,32,32),this}getPaddleTouchSpeed(t){const n=t.getObject().geometry,i=t.getPosition(),s=this.getDistanceTo(t),o=this.getRadius()+n.parameters.width/2,a=new yt(i.x+n.parameters.width/2,i.y+n.parameters.height/2,i.z),u=this.getRadius()+on.getDistanceBetweenPos(i,a),l=Math.min(Math.max(s,o),u),c=1.3,h=.9;return Math.round(((l-o)/(u-o)*(c-h)+h)*100)/100}setupObject(){const t=new os(this.getRadius(),32,32),n=this.material,i=new Ot(t,n);return i.name="sphere",i}bounceY(){const t=this.getVelocity();t.y=-t.y}bounceX(){const t=this.getVelocity();t.x=-t.x}reset(){this.setPosition(new yt(0,0,0)),this.setVelocity(new yt(-.1,.3,0))}update(){const t=this.getPosition(),n=this.getVelocity(),i=new yt(t.x+n.x,t.y+n.y,t.z+n.z),s=this.getDummy().setPosition(i.clone()),o=this.borders.getTouchedSide(s);o?(this.notify("collision",{side:o}),o==tt.TOP||o==tt.BOTTOM?this.bounceY():(o==tt.LEFT||o==tt.RIGHT)&&this.bounceX()):(this.setPosition(i),this.object.position.set(i.x,i.y,i.z))}getDummy(){return this._dummy||(this._dummy=new ps("black")),this._dummy}}const Qn=class{constructor(){}static getInstance(){return Qn.instance||(Qn.instance=new Qn),Qn.instance}remove(e){const t=document.getElementById(e);t&&t.remove()}exists(e){return!!document.getElementById(e)}debug(e,t){const n=this.createDebugTable(e,t);let i=document.getElementById(e);i||(i=document.createElement("div"),i.id=e,document.getElementById("debug").appendChild(i)),i.innerHTML=n}createDebugTable(e,t){let n=`<div><b>${e}<br></b>`;for(let i in t)n+=`${i}: ${t[i]}<br>`;return n}};let rs=Qn;Q(rs,"instance");var So=(r=>(r.COLLISION="collision",r))(So||{}),hr=(r=>(r.GAME_OVER="game-over",r.EXIT="exit",r))(hr||{});class Xf extends fs{constructor(t){super();Q(this,"gameMode");Q(this,"screen");Q(this,"ball");Q(this,"borders");this.gameMode=t,this.setupScreen(),this.setupBall(),this.setupBorders(),this.gameMode.onSetup(this),this.setControls()}togglePause(){const t=this.screen.isPlaying();this.screen.setPlay(!t),rs.getInstance().debug("Game",{isRunning:!t}),this.gameMode.onPause()}exit(t){this.notify("game-over",{message:t}),this.screen.setPlay(!1)}start(){this.togglePause(),this.screen.animate(),this.gameMode.onStart()}reset(){this.gameMode.onReset(),yi.getInstance().clearAll(),this.screen.reset()}setControls(){const t=this.getGameControls(),n=this.gameMode.getGameControls(),i=yi.getInstance();for(const s in t)i.add(s,t[s]);for(const s in n)i.add(s,n[s])}getBall(){return this.ball}getScreen(){return this.screen}getBorders(){return this.borders}getGameControls(){const t=Po;return t[Mn.PAUSE].keypress=()=>this.togglePause(),ut(t[Mn.BALL_LEFT],()=>this.ball.getVelocity().x=-1,()=>this.ball.getVelocity().x=0),ut(t[Mn.BALL_RIGHT],()=>this.ball.getVelocity().x=1,()=>this.ball.getVelocity().x=0),ut(t[Mn.BALL_UP],()=>this.ball.getVelocity().y=1,()=>this.ball.getVelocity().y=0),ut(t[Mn.BALL_DOWN],()=>this.ball.getVelocity().y=-1,()=>this.ball.getVelocity().y=0),t[Mn.STOP_BALL].keypress=()=>this.ball.getVelocity().set(0,0,0),t}setupScreen(){this.screen=new qf}setupBorders(){this.borders=cn.getInstance(),this.borders.setDept(this.ball.getRadius()*2),this.screen.getScene().add(this.borders.getObject())}setupBall(){this.ball=new ps("white"),this.ball.observe("collision",t=>{this.gameMode.onBallBorderCollision(t.side)}),this.screen.addUpdatableObject("ball",this.ball)}}class jf{constructor(){Q(this,"game")}onSetup(e){this.game=e}onPause(){}onResume(){}onStart(){}onReset(){}}var vi=(r=>(r.LEFT="left",r.RIGHT="right",r))(vi||{});class Yf extends fs{constructor(t,n){super();Q(this,"object");Q(this,"score");Q(this,"speed");Q(this,"side");this.score=0,this.object=t,this.side=n,this.speed=.1}setSpeed(t){this.speed=t}getSpeed(){return this.speed}addPoint(){this.score++}setScore(t){this.score=t}getScore(){return this.score}getSide(){return this.side}getObject(){return this.object}moveUp(t=!0){const n=this.object.getVelocity();n.y=t?this.speed:0}moveDown(t=!0){const n=this.object.getVelocity();n.y=t?-this.speed:0}}var xt=(r=>(r.LEFT_PLAYER_UP="left_player_up",r.LEFT_PLAYER_DOWN="left_player_down",r.RIGHT_PLAYER_UP="right_player_up",r.RIGHT_PLAYER_DOWN="right_player_down",r.EXIT="exit",r.DEBUG="debug",r))(xt||{});const Zf={left_player_up:{name:"Levý hráč nahoru",default:"w",keydown:()=>{},keyup:()=>{}},left_player_down:{name:"Levý hráč dolů",default:"s",keydown:()=>{},keyup:()=>{}},right_player_up:{name:"Pravý hráč nahoru",default:"ArrowUp",keydown:()=>{},keyup:()=>{}},right_player_down:{name:"Pravý hráč dolů",default:"ArrowDown",keydown:()=>{},keyup:()=>{}},debug:{name:"Debug",default:";",keydown:()=>{},keyup:()=>{}},exit:{name:"Exit",default:"Escape",keydown:()=>{},keyup:()=>{}}};class _r extends bo{constructor(t,n){super(n);Q(this,"borders");Q(this,"_dummy");this.setSize(t)}setupObject(){const t=new hn(1,1,1),n=this.material;return new Ot(t,n)}setBorders(t){return this.borders=t,this}setSize(t){return this.object.geometry=new hn(t.width,t.height,1),this}getSize(){const t=this.object.geometry.parameters.width,n=this.object.geometry.parameters.height;return{width:t,height:n}}getDummy(){return this._dummy===void 0&&(this._dummy=new _r({width:1,height:1},this.color)),this._dummy}update(){const t=this.getPosition(),n=this.getVelocity(),i=new yt(t.x+n.x,t.y+n.y,t.z+n.z),s=this.getDummy();s.setSize(this.getSize());const o=s.getSize().width,a=s.getSize().height;s.setPosition(i);const u=this.borders.getTouchedSide(s);if(u!==null)switch(u){case tt.LEFT:i.x=-this.borders.width/2+o/2;break;case tt.RIGHT:i.x=this.borders.width/2-o/2;break;case tt.TOP:i.y=this.borders.height/2-a/2;break;case tt.BOTTOM:i.y=-this.borders.height/2+a/2;break}else this.setPosition(i),this.object.position.set(i.x,i.y,i.z)}}var xr=(r=>(r.PLAYER_COLLISION="player-collision",r.NEW_SLOPE="new-slope",r))(xr||{});class Jf extends fs{constructor(t,n){super();Q(this,"players",[]);Q(this,"ball");Q(this,"path",[]);Q(this,"borders");this.players=t,this.ball=n,this.borders=cn.getInstance(),this.setupPlayerListeners()}setupPlayerListeners(){this.players.forEach(t=>{bi.getInstance().addPair(`${t.getSide().toString()}-ball`,t.getObject(),this.ball,()=>{this.handlePlayerCollision(t)})}),this.ball.observe(So.COLLISION,t=>{const n=t.side;n===tt.LEFT||n===tt.RIGHT||this.path.length!==0&&this.path.shift()})}handlePlayerCollision(t){this.notify("player-collision",t);const n=t.getObject(),i=n.getObject().geometry;let s=this.ball.getPaddleTouchSpeed(n);const o=this.ball.getVelocity(),a=this.ball.getPosition(),u=o.x>0?1:-1;o.x=-s*o.x,a.x=n.getPosition().x+-u*(i.parameters.width/2+1),this.refreshPath()}refreshPath(){this.path=this.calculatePath()}calculatePath(){const t=this.ball.getPosition(),n=this.ball.getVelocity().clone(),i=this.borders.height,s=new ps("black"),o=this.ball.getRadius();let a=null,u=new yt(t.x,t.y,t.z);const l=[t];for(;a!==tt.LEFT&&a!==tt.RIGHT&&l.length<50;){const c=Math.sign(n.x);let h=c*n.y/n.x,f=u.y;const m=Math.sign(h);let x=m*i/2+-m*o,p=u.x+c*(x-f)/h;const d=new P(p,x,0);s.setPosition(d).setVelocity(n);const g=this.isEndPosition(d,o,h,c);if(g!==null)return l.push(g),l;u.set(p,x,0),l.push(d),n.y=-n.y,a=this.borders.getTouchedSide(s)}return l}getPath(){return this.path}isEndPosition(t,n,i,s){const o=this.borders.width/2,a=-o+n,u=o-n,l=t.x<=a,c=t.x>=u;if(!l&&!c)return null;const h=l?a:u,f=t.y+i/s*(h-t.x);return new P(h,f,0)}}class $f{constructor(e){Q(this,"line");Q(this,"movement");Q(this,"running",!1);this.line=this.setupObject(),this.movement=e}setRunning(e){return this.running=e,this.getObject().visible=e,this}getRunning(){return this.running}getObject(){return this.line}setupObject(){const e=new Lt().setFromPoints([]),t=new ds({color:"green"});return new gr(e,t)}update(){if(!this.running)return;const e=this.getVertices();this.line.geometry.setFromPoints(e),this.line.geometry.attributes.position.needsUpdate=!0}getVertices(){return this.movement.getPath()}}class Kf{constructor(e){Q(this,"debugObject");Q(this,"line");Q(this,"running",!1);this.debugObject=e,this.line=this.setupObject()}getObject(){return this.line}setDebugObject(e){return this.debugObject=e,this}setRunning(e){return this.running=e,this.getObject().visible=e,this}getRunning(){return this.running}setupObject(){const e=this.getPositions(),t=new Lt().setFromPoints([e.start,e.end]),n=new ds({color:16711680});return new gr(t,n)}update(){if(!this.running)return;const e=this.getPositions();this.line.geometry.setFromPoints([e.start,e.end]),this.line.geometry.attributes.position.needsUpdate=!0}getPositions(){const e=this.debugObject.getPosition(),t=cn.getClosesBorder(e),n=cn.getSidePosition(t,e);return{start:e,end:n}}}class vr extends jf{constructor(t=5){super();Q(this,"players",[]);Q(this,"movement");Q(this,"maxPoints");Q(this,"borders");Q(this,"debugMode",!1);Q(this,"trajectory");Q(this,"closest");this.maxPoints=t}onSetup(t){super.onSetup(t),this.borders=t.getBorders(),this.setupPlayers(),this.setupCollision()}onStart(){super.onStart(),this.refreshBallSpeed()}onReset(){super.onReset(),ni.removeInstance(),this.game.getBall().getVelocity().set(0,0,0)}getDescription(){return"Výchozí hra. Hráč vs Hráč."}getName(){return"Normální hra"}getGameControls(){const t=Zf;return t[xt.DEBUG].keypress=()=>this.toggleDebugMode(),ut(t[xt.LEFT_PLAYER_UP],()=>this.players[0].moveUp(!0),()=>this.players[0].moveUp(!1)),ut(t[xt.LEFT_PLAYER_DOWN],()=>this.players[0].moveDown(!0),()=>this.players[0].moveDown(!1)),ut(t[xt.RIGHT_PLAYER_UP],()=>this.players[1].moveUp(!0),()=>this.players[1].moveUp(!1)),ut(t[xt.RIGHT_PLAYER_DOWN],()=>this.players[1].moveDown(!0),()=>this.players[1].moveDown(!1)),t[xt.EXIT].keyup=()=>this.game.exit("Hra byla ukončena uživatelem."),t}onBallBorderCollision(t){if(t===tt.TOP||t===tt.BOTTOM)return;this.game.togglePause();const n=t===tt.LEFT?this.players[1]:this.players[0];this.scorePoint(n)}scorePoint(t){const n=this.game.getBall();if(ii.getInstance().play(ss.SCORE),t.addPoint(),n.setPosition(new yt(0,0,0)),t.getScore()>=this.maxPoints){this.game.exit(`Hráč v${t.getSide()==="left"?"levo":"pravo"} vyhrál!`);return}this.movePlayers(0),this.refreshBallSpeed(t.getSide()===vi.LEFT)}toggleDebugMode(){this.debugMode=!this.debugMode,this.trajectory.setRunning(this.debugMode),this.closest.setRunning(this.debugMode)}setupCollision(){this.movement=new Jf(this.players,this.game.getBall()),this.trajectory=new $f(this.movement),this.game.getScreen().addUpdatableObject("trajectory",this.trajectory),this.closest=new Kf(this.game.getBall()),this.game.getScreen().addUpdatableObject("closest",this.closest),this.movement.observe(xr.PLAYER_COLLISION,t=>{const n=t.getSide()===vi.LEFT?ss.BOUNCE1:ss.BOUNCE2;ii.getInstance().play(n)}),this.toggleDebugMode(),this.toggleDebugMode()}movePlayers(t){for(const n of this.players)n.getObject().getPosition().y=t}refreshBallSpeed(t=!1){const n=t?1:-1;this.game.getBall().setVelocity(new Mo(n*.3,.3,0)),this.movement.refreshPath()}setupPlayers(){const t=["blue","red"],n=[vi.LEFT,vi.RIGHT],i=this.borders.width/2;for(let s=0;s<2;s++){const o=new _r({width:1,height:3},t[s]);o.setBorders(this.borders);const a=new Yf(o,n[s]);a.setSpeed(.5);const u=s===0?-1:1,l=u*i+-u*2;o.setPosition(new yt(l,0,0)),this.game.getScreen().addUpdatableObject(n[s],o),this.players.push(a)}ni.setup({left:this.players[0],right:this.players[1]})}}var Fn=(r=>(r[r.EASY=2]="EASY",r[r.MEDIUM=3]="MEDIUM",r[r.HARD=100]="HARD",r))(Fn||{});class dr{constructor(e,t,n,i=100){Q(this,"_player");Q(this,"_movement");Q(this,"_ball");Q(this,"running",!1);Q(this,"_difficulty");Q(this,"_requiredY",null);this._movement=n,this._player=e,this._ball=t,this._difficulty=i,n.observe(xr.PLAYER_COLLISION,s=>{s.getSide()===this._player.getSide()&&(this._requiredY=null)})}setRunning(e){return this.running=e,this}isRunning(){return this.running}update(){if(this.running){if(!this.isMyDirection()){this.moveToY(-this._ball.getPosition().y);return}this.isMyDifficulty()&&(this._requiredY=this.getRequiredY(),this.moveToY(this._requiredY))}}isMyDirection(){const e=this._player.getSide()==="left"?-1:1,t=Math.sign(this._ball.getVelocity().x);return e===t}moveToY(e){const t=-this.getPlayerPosition().y;if(this.isPrepared(t,e)){this.getPlayerVelocity().y=0;return}const n=-Math.sign(e-t),i=this.getPlayerVelocity().y;n!==Math.sign(i)&&(t>e?this._player.moveUp():this._player.moveDown())}isPrepared(e,t){const n=this._player.getSpeed();return e+n>=t&&e-n<=t}isMyDifficulty(){return this._movement.getPath().length<=this._difficulty}getRequiredY(){const e=this._movement.getPath(),t=e[e.length-1];if(!t)return Math.floor(Math.random()*48-24);const i=this._player.getObject().getObject().geometry.parameters.height,s=this._player.getObject().getPosition(),o=-t.y;return o>s.y?o-i/2:o+i/2}getPlayerPosition(){return this._player.getObject().getPosition()}getPlayerVelocity(){return this._player.getObject().getVelocity()}}class Qf extends vr{constructor(t=5,n=Fn.HARD){super(t);Q(this,"computer");Q(this,"_difficulty");this._difficulty=n}onSetup(t){super.onSetup(t),this.computer=new dr(this.players[1],this.game.getBall(),this.movement,this._difficulty),this.game.getScreen().addUpdatableObject("computer",this.computer)}onStart(){super.onStart(),this.computer.setRunning(!0)}getGameControls(){const t=super.getGameControls();return ut(t[xt.RIGHT_PLAYER_UP],()=>{},()=>{}),ut(t[xt.RIGHT_PLAYER_DOWN],()=>{},()=>{}),t}}class ep extends vr{constructor(t=5,n=Fn.HARD,i=Fn.HARD){super(t);Q(this,"computerLeft");Q(this,"computerRight");Q(this,"_difficultyLeft");Q(this,"_difficultyRight");this._difficultyLeft=n,this._difficultyRight=i}onSetup(t){super.onSetup(t),this.computerLeft=new dr(this.players[0],this.game.getBall(),this.movement,this._difficultyLeft),this.computerRight=new dr(this.players[1],this.game.getBall(),this.movement,this._difficultyRight),this.game.getScreen().addUpdatableObject("computer-left",this.computerLeft),this.game.getScreen().addUpdatableObject("computer-right",this.computerRight)}onStart(){super.onStart(),this.computerLeft.setRunning(!0),this.computerRight.setRunning(!0)}getGameControls(){const t=super.getGameControls();return ut(t[xt.LEFT_PLAYER_UP],()=>{},()=>{}),ut(t[xt.LEFT_PLAYER_DOWN],()=>{},()=>{}),ut(t[xt.RIGHT_PLAYER_DOWN],()=>{},()=>{}),ut(t[xt.RIGHT_PLAYER_DOWN],()=>{},()=>{}),t}}const ht=document.getElementById("menu"),un=document.getElementById("result");if(ht===null||un===null)throw new Error("Menu or result not found.");const Qs=ht==null?void 0:ht.querySelector("[data-type=pvp]"),er=ht==null?void 0:ht.querySelector("[data-type=pve]"),tr=ht==null?void 0:ht.querySelector("[data-type=eve]"),nr=un==null?void 0:un.querySelector("[data-type=restart]");nr==null||nr.addEventListener("click",()=>{un.style.display="none",ht.style.display="flex"});Qs==null||Qs.addEventListener("click",()=>{yr(ht,un,new vr(5))});er==null||er.addEventListener("click",()=>{yr(ht,un,new Qf(5,Fn.HARD))});tr==null||tr.addEventListener("click",()=>{yr(ht,un,new ep(5,Fn.HARD,Fn.HARD))});function yr(r,e,t){r.style.display="none";const n=document.querySelector("#game");if(n===null)throw new Error("Game element not found.");const i=new Xf(t);n.style.display="block",i.start(),i.observe(hr.GAME_OVER,s=>{i.reset(),n.style.display="none",e.querySelector("#message").innerHTML=s.message,e.style.display="flex"}),i.observe(hr.EXIT,()=>{console.log("EXIT Z VENKU"),i.reset(),n.style.display="none",e.querySelector("#message").innerHTML="Hra byla ukončena",e.style.display="flex"})}
