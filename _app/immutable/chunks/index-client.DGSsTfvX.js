var Hn=Array.isArray,tn=Array.prototype.indexOf,jn=Array.from,Bn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,Un=Object.prototype,Vn=Array.prototype,rn=Object.getPrototypeOf;function Gn(t){return typeof t=="function"}const Kn=()=>{};function $n(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Tt=4,H=8,ot=16,m=32,W=64,rt=128,S=256,G=512,E=1024,D=2048,X=4096,b=8192,q=16384,en=32768,mt=65536,Zn=1<<17,ln=1<<19,At=1<<20,ht=Symbol("$state"),zn=Symbol("legacy props"),Jn=Symbol("");function gt(t){return t===this.v}function sn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function It(t){return!sn(t,this.v)}function an(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Wn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Xn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Qn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function tr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let j=!1;function nr(){j=!0}const rr=1,er=2,lr=4,sr=8,ar=16,ur=1,or=2,ir=4,fr=8,_r=16,cr=4,vr=1,pr=2,vn="[",pn="[!",hn="]",kt={},hr=Symbol();function it(t,n){var r={f:0,v:t,reactions:null,equals:gt,rv:0,wv:0};return r}function dr(t){return Dt(it(t))}function dn(t,n=!1){var e;const r=it(t);return n||(r.equals=It),j&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function Er(t,n=!1){return Dt(dn(t,n))}function Dt(t){return o!==null&&o.f&y&&(T===null?xn([t]):T.push(t)),t}function yr(t,n){return o!==null&&ct()&&o.f&(y|ot)&&(T===null||!T.includes(t))&&cn(),En(t,n)}function En(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=$t(),Rt(t,D),ct()&&u!==null&&u.f&E&&!(u.f&m)&&(h!==null&&h.includes(t)?(A(u,D),nt(u)):g===null?Nn([t]):g.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=ct(),l=r.length,s=0;s<l;s++){var a=r[s],f=a.f;f&D||!e&&a===u||(A(a,n),f&(E|S)&&(f&y?Rt(a,X):nt(a)))}}function Ot(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let R=!1;function wr(t){R=t}let w;function F(t){if(t===null)throw Ot(),kt;return w=t}function Tr(){return F(x(w))}function mr(t){if(R){if(x(w)!==null)throw Ot(),kt;w=t}}function Ar(t=1){if(R){for(var n=t,r=w;n--;)r=x(r);w=r}}function gr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=x(n);n.remove(),n=e}}var dt,St,xt;function Ir(){if(dt===void 0){dt=window;var t=Element.prototype,n=Node.prototype;St=pt(n,"firstChild").get,xt=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function et(t=""){return document.createTextNode(t)}function lt(t){return St.call(t)}function x(t){return xt.call(t)}function kr(t,n){if(!R)return lt(t);var r=lt(w);if(r===null)r=w.appendChild(et());else if(n&&r.nodeType!==3){var e=et();return r==null||r.before(e),F(e),e}return F(r),r}function Dr(t,n){if(!R){var r=lt(t);return r instanceof Comment&&r.data===""?x(r):r}return w}function Rr(t,n=1,r=!1){let e=R?w:t;for(var l;n--;)l=e,e=x(e);if(!R)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=et();return e===null?l==null||l.after(a):e.before(a),F(a),a}return F(e),e}function Or(t){t.textContent=""}function yn(t){var n=y|D;u===null?n|=S:u.f|=At;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:i,deps:null,equals:gt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Sr(t){const n=yn(t);return n.equals=It,n}function Nt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ft(e):O(e)}}}function wn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ct(t){var n,r=u;z(wn(t));try{Nt(t),n=Zt(t)}finally{z(r)}return n}function bt(t){var n=Ct(t),r=(k||t.f&S)&&t.deps!==null?X:E;A(t,r),t.equals(n)||(t.v=n,t.wv=$t())}function ft(t){Nt(t),Y(t,0),A(t,q),t.v=t.children=t.deps=t.ctx=t.reactions=null}function qt(t){u===null&&o===null&&on(),o!==null&&o.f&S&&un(),_t&&an()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var l=(t&W)!==0,s=u,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var f=N;try{Et(!0),tt(a),a.f|=en}catch(c){throw O(a),c}finally{Et(f)}}else n!==null&&nt(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&At)===0;if(!_&&!l&&e&&(s!==null&&Tn(a,s),o!==null&&o.f&y)){var p=o;(p.children??(p.children=[])).push(a)}return a}function xr(t){const n=P(H,null,!1);return A(n,E),n.teardown=t,n}function mn(t){qt();var n=u!==null&&(u.f&m)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Pt(t);return e}}function Nr(t){return qt(),An(t)}function Cr(t){const n=P(W,t,!0);return(r={})=>new Promise(e=>{r.outro?kn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Pt(t){return P(Tt,t,!1)}function An(t){return P(H,t,!0)}function br(t){return gn(t)}function gn(t,n=0){return P(H|ot|n,t,!0)}function qr(t,n=!0){return P(H|m,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=_t,e=o;yt(!0),Z(null);try{n.call(null)}finally{yt(r),Z(e)}}}function Lt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ft(n[r])}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function In(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&ln)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:x(e);e.remove(),e=s}r=!0}Mt(t,n&&!r),Lt(t),Y(t,0),A(t,q);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Ft(t);var f=t.parent;f!==null&&f.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function kn(t,n){var r=[];Ht(t,r,!0),Dn(r,()=>{O(t),n&&n()})}function Dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ht(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&mt)!==0||(e.f&m)!==0;Ht(e,n,s?r:!1),e=l}}}function Pr(t){jt(t,!0)}function jt(t,n){if(t.f&b){B(t)&&tt(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&mt)!==0||(r.f&m)!==0;jt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const Rn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let K=!1,$=!1,st=[],at=[];function Bt(){K=!1;const t=st.slice();st=[],wt(t)}function Ut(){$=!1;const t=at.slice();at=[],wt(t)}function Fr(t){K||(K=!0,queueMicrotask(Bt)),st.push(t)}function Lr(t){$||($=!0,Rn(Ut)),at.push(t)}function On(){K&&Bt(),$&&Ut()}function Vt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Gt=0,Sn=1;let U=!1,V=Gt,L=!1,M=null,N=!1,_t=!1;function Et(t){N=t}function yt(t){_t=t}let I=[],C=0;let o=null;function Z(t){o=t}let u=null;function z(t){u=t}let T=null;function xn(t){T=t}let h=null,d=0,g=null;function Nn(t){g=t}let Kt=1,J=0,k=!1,i=null;function $t(){return++Kt}function ct(){return!j||i!==null&&i.l===null}function B(t){var p;var n=t.f;if(n&D)return!0;if(n&X){var r=t.deps,e=(n&S)!==0;if(r!==null){var l,s,a=(n&G)!==0,f=e&&u!==null&&!k,_=r.length;if(a||f){for(l=0;l<_;l++)s=r[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=G)}for(l=0;l<_;l++)if(s=r[l],B(s)&&bt(s),s.wv>t.wv)return!0}(!e||u!==null&&!k)&&A(t,E)}return!1}function Cn(t,n){for(var r=n;r!==null;){if(r.f&rt)try{r.fn(t);return}catch{r.f^=rt}r=r.parent}throw U=!1,t}function bn(t){return(t.f&q)===0&&(t.parent===null||(t.parent.f&rt)===0)}function Q(t,n,r,e){if(U){if(r===null&&(U=!1),bn(n))throw t;return}r!==null&&(U=!0);{Cn(t,n);return}}function Zt(t){var vt;var n=h,r=d,e=g,l=o,s=k,a=T,f=i,_=t.f;h=null,d=0,g=null,o=_&(m|W)?null:t,k=!N&&(_&S)!==0,T=null,i=t.ctx,J++;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(Y(t,d),c!==null&&d>0)for(c.length=d+h.length,v=0;v<h.length;v++)c[d+v]=h[v];else t.deps=c=h;if(!k)for(v=d;v<c.length;v++)((vt=c[v]).reactions??(vt.reactions=[])).push(t)}else c!==null&&d<c.length&&(Y(t,d),c.length=d);return l!==null&&J++,p}finally{h=n,d=r,g=e,o=l,k=s,T=a,i=f}}function qn(t,n){let r=n.reactions;if(r!==null){var e=tn.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(A(n,X),n.f&(S|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)qn(t,r[e])}function tt(t){var n=t.f;if(!(n&q)){A(t,E);var r=u,e=i;u=t;try{n&ot?In(t):Mt(t),Lt(t),Ft(t);var l=Zt(t);t.teardown=typeof l=="function"?l:null,t.wv=Kt;var s=t.deps,a}catch(f){Q(f,t,r,e||t.ctx)}finally{u=r}}}function zt(){if(C>1e3){C=0;try{fn()}catch(t){if(M!==null)Q(t,M,null);else throw t}}C++}function Jt(t){var n=t.length;if(n!==0){zt();var r=N;N=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&E||(l.f^=E);var s=[];Wt(l,s),Pn(s)}}finally{N=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(q|b)))try{B(e)&&(tt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yt(e):e.fn=null))}catch(l){Q(l,e,null,e.ctx)}}}function Fn(){if(L=!1,C>1001)return;const t=I;I=[],Jt(t),L||(C=0,M=null)}function nt(t){V===Gt&&(L||(L=!0,queueMicrotask(Fn))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|m)){if(!(r&E))return;n.f^=E}}I.push(n)}function Wt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&m)!==0,a=s&&(l&E)!==0,f=r.next;if(!a&&!(l&b))if(l&H){if(s)r.f^=E;else try{B(r)&&tt(r)}catch(v){Q(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&Tt&&e.push(r);if(f===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=f}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Wt(_,n)}function Xt(t){var n=V,r=I;try{zt();const l=[];V=Sn,I=l,L=!1,Jt(r);var e=t==null?void 0:t();return On(),(I.length>0||l.length>0)&&Xt(),C=0,M=null,e}finally{V=n,I=r}}async function Mr(){await Promise.resolve(),Xt()}function Yr(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&q){var e=Ct(t);return ft(t),e}if(o!==null){T!==null&&T.includes(t)&&_n();var l=o.deps;t.rv<J&&(t.rv=J,h===null&&l!==null&&l[d]===t?d++:h===null?h=[t]:h.push(t),g!==null&&u!==null&&u.f&E&&!(u.f&m)&&g.includes(t)&&(A(u,D),nt(u)))}else if(r&&t.deps===null)for(var s=t,a=s.parent,f=s;a!==null;)if(a.f&y){var _=a;f=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(f)||(p.deriveds??(p.deriveds=[])).push(f);break}return r&&(s=t,B(s)&&bt(s)),t.v}function Qt(t){const n=o;try{return o=null,t()}finally{o=n}}const Ln=-7169;function A(t,n){t.f=t.f&Ln|n}function Hr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},j&&!n&&(i.l={s:null,u:null,r1:[],r2:it(!1)})}function jr(t){const n=i;if(n!==null){t!==void 0&&(n.x=t);const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];z(s.effect),Z(s.reaction),Pt(s.fn)}}finally{z(r),Z(e)}}i=n.p,n.m=!0}return t||{}}function Br(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=rn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}function Mn(t){i===null&&Vt(),j&&i.l!==null?Yn(i).m.push(t):mn(()=>{const n=Qt(t);if(typeof n=="function")return n})}function Ur(t){i===null&&Vt(),Mn(()=>()=>Qt(t))}function Yn(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{It as $,pr as A,Tr as B,F as C,Un as D,mt as E,Vn as F,it as G,Qn as H,yr as I,pt as J,tr as K,rn as L,Hn as M,pn as N,gr as O,wr as P,Pr as Q,kn as R,ht as S,vr as T,hr as U,Pt as V,An as W,Fr as X,Xn as Y,Zn as Z,ir as _,qr as a,m as a0,W as a1,z as a2,ur as a3,j as a4,or as a5,fr as a6,zn as a7,Sr as a8,dn as a9,lr as aA,sr as aB,ar as aC,Lr as aD,Jn as aE,nn as aF,ot as aG,en as aH,Gn as aI,cr as aJ,ct as aK,Ur as aL,Er as aM,Ar as aN,sn as aO,_r as aa,Z as ab,o as ac,xr as ad,Bn as ae,ln as af,vn as ag,x as ah,Ir as ai,kt as aj,hn as ak,Ot as al,Wn as am,Or as an,jn as ao,Cr as ap,Xt as aq,Mn as ar,Mr as as,dr as at,b as au,rr as av,En as aw,er as ax,Ht as ay,Dn as az,gn as b,w as c,O as d,nr as e,mn as f,i as g,R as h,Qt as i,Yr as j,$n as k,Br as l,yn as m,Kn as n,Dr as o,Hr as p,jr as q,wt as r,kr as s,br as t,Nr as u,mr as v,Rr as w,et as x,lt as y,u as z};
