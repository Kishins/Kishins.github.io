function y(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function M(){return Object.create(null)}function x(t){t.forEach(L)}function S(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function st(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function R(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(G(e,n))}function ft(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function dt(t,e,n,i,r,o){if(r){const c=O(e,n,i,o);t.p(c,r)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ht(t){return t&&S(t.destroy)?t.destroy:y}const mt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let E=!1;function I(){E=!0}function J(){E=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:K(1,r,b=>e[n[b]].claim_order,u))-1;i[l]=n[a]+1;const f=a+1;n[f]=l,r=Math.max(f,r)}const o=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[l],a)}}function W(t,e){if(E){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){E&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function gt(){return j(" ")}function xt(){return j("")}function bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,i,r=!1){Y(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Z(t,e,n,i){return q(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function wt(t,e,n){return Z(t,e,n,V)}function tt(t,e){return q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function Et(t){return tt(t," ")}function vt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Nt(t,e){t.value=e??""}function At(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Tt(t,e){return new t(e)}let g;function p(t){g=t}function B(){if(!g)throw new Error("Function called outside component initialization");return g}function Ct(t){B().$$.on_mount.push(t)}function Mt(t){B().$$.after_update.push(t)}const h=[],k=[];let m=[];const D=[],H=Promise.resolve();let N=!1;function P(){N||(N=!0,H.then(z))}function kt(){return P(),H}function A(t){m.push(t)}const v=new Set;let _=0;function z(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const e=h[_];_++,p(e),et(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;k.length;)k.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;D.length;)D.pop()();N=!1,v.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function nt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const w=new Set;let d;function Dt(){d={r:0,c:[],p:d}}function Lt(){d.r||x(d.c),d=d.p}function it(t,e){t&&t.i&&(w.delete(t),t.i(e))}function Ot(t,e,n,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function qt(t){t&&t.c()}function Bt(t,e){t&&t.l(e)}function rt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(L).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(A)}function ct(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,i,r,o,c,s=[-1]){const l=g;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};c&&c(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,b,...T)=>{const C=T.length?T[0]:b;return u.ctx&&r(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),a&&lt(t,f)),b}):[],u.update(),a=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){I();const f=X(e.target);u.fragment&&u.fragment.l(f),f.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&it(t.$$.fragment),rt(t,e.target,e.anchor,e.customElement),J(),z()}p(l)}class Pt{$destroy(){ct(this,1),this.$destroy=y}$on(e,n){if(!S(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{rt as A,ct as B,ft as C,W as D,dt as E,_t as F,at as G,y as H,ot as I,st as J,jt as K,ht as L,bt as M,yt as N,x as O,mt as P,St as Q,Nt as R,Pt as S,gt as a,pt as b,Et as c,Ot as d,xt as e,Lt as f,it as g,U as h,Ht as i,Mt as j,V as k,wt as l,X as m,$t as n,Ct as o,At as p,j as q,tt as r,ut as s,kt as t,vt as u,Dt as v,k as w,Tt as x,qt as y,Bt as z};
