import{b as t,E as d,a as n,n as v,d as h,h as _,c as p,g,q as u,f as l,L as y}from"./index-client.U3jKW-_o.js";import{a as A}from"./disclose-version.CFN2gQIv.js";function T(r,s,...a){var o=r,e=v,f;t(()=>{e!==(e=s())&&(f&&(h(f),f=null),f=n(()=>e(o,...a)))},d),_&&(o=p)}function L(r){if(_){var s=!1,a=()=>{if(!s){if(s=!0,r.hasAttribute("value")){var o=r.value;i(r,"value",null),r.value=o}if(r.hasAttribute("checked")){var e=r.checked;i(r,"checked",null),r.checked=e}}};r.__on_r=a,u(a),A()}}function i(r,s,a,o){var e=r.__attributes??(r.__attributes={});_&&(e[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||e[s]!==(e[s]=a)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[y]=a),a==null?r.removeAttribute(s):typeof a!="string"&&N(r).includes(s)?r[s]=a:r.setAttribute(s,a))}var c=new Map;function N(r){var s=c.get(r.nodeName);if(s)return s;c.set(r.nodeName,s=[]);for(var a,o=r,e=Element.prototype;e!==o;){a=l(o);for(var f in a)a[f].set&&s.push(f);o=g(o)}return s}export{i as a,L as r,T as s};
