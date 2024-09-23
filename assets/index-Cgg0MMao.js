var G=Object.defineProperty;var H=(e,t,n)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var j=(e,t,n)=>H(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function k(){}function X(e){return e()}function F(){return Object.create(null)}function A(e){e.forEach(X)}function Y(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function I(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function C(){return S(" ")}function R(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function T(e,t){t=""+t,e.data!==t&&(e.data=t)}function U(e,t){e.value=t??""}function $(e,t,n,o){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}let D;function N(e){D=e}const O=[],K=[];let v=[];const V=[],te=Promise.resolve();let x=!1;function ne(){x||(x=!0,te.then(Z))}function z(e){v.push(e)}const q=new Set;let E=0;function Z(){if(E!==0)return;const e=D;do{try{for(;E<O.length;){const t=O[E];E++,N(t),re(t.$$)}}catch(t){throw O.length=0,E=0,t}for(N(null),O.length=0,E=0;K.length;)K.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];q.has(n)||(q.add(n),n())}v.length=0}while(O.length);for(;V.length;)V.pop()();x=!1,q.clear(),N(e)}function re(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}function oe(e){const t=[],n=[];v.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),v=t}const se=new Set;function le(e,t){e&&e.i&&(se.delete(e),e.i(t))}function ie(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),z(()=>{const s=e.$$.on_mount.map(X).filter(Y);e.$$.on_destroy?e.$$.on_destroy.push(...s):A(s),e.$$.on_mount=[]}),r.forEach(z)}function ue(e,t){const n=e.$$;n.fragment!==null&&(oe(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&(O.push(e),ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ce(e,t,n,o,r,s,a=null,u=[-1]){const i=D;N(e);const l=e.$$={fragment:null,ctx:[],props:s,update:k,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:F(),dirty:u,skip_bound:!1,root:t.target||i.$$.root};a&&a(l.root);let m=!1;if(l.ctx=n?n(e,t.props||{},(c,h,...p)=>{const _=p.length?p[0]:h;return l.ctx&&r(l.ctx[c],l.ctx[c]=_)&&(!l.skip_bound&&l.bound[c]&&l.bound[c](_),m&&fe(e,c)),h}):[],l.update(),m=!0,A(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const c=ee(t.target);l.fragment&&l.fragment.l(c),c.forEach(b)}else l.fragment&&l.fragment.c();t.intro&&le(e.$$.fragment),ie(e,t.target,t.anchor),Z()}N(i)}class de{constructor(){j(this,"$$");j(this,"$$set")}$destroy(){ue(this,1),this.$destroy=k}$on(t,n){if(!Y(n))return k;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ae="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ae);function W(){let e="WASD".split(""),t="ZXC".split(""),n="";function o(r,s){return r=Math.ceil(r),s=Math.floor(s),Math.floor(Math.random()*(s-r+1))+r}for(let r=0;r<o(1,4);r++)n+=e[o(0,e.length-1)];return n+=t[o(0,t.length-1)],n}function pe(e){let t,n,o,r,s,a,u,i,l,m,c,h,p,_,P,L,B;return{c(){t=I("p"),n=S(e[2]),o=C(),r=I("div"),s=I("div"),a=C(),u=I("input"),i=C(),l=I("p"),m=S("Score: "),c=S(e[1]),h=C(),p=I("p"),_=S("Personal Best: "),P=S(e[0]),g(t,"id","requestedKeys"),g(s,"id","timerBar"),$(s,"width",e[6]+"%"),g(s,"class","svelte-ayczbw"),g(u,"id","attempt"),g(u,"type","text"),u.autofocus=!0,g(r,"class","input-wrapper svelte-ayczbw"),g(l,"id","score"),g(p,"id","score")},m(f,d){w(f,t,d),y(t,n),e[8](t),w(f,o,d),w(f,r,d),y(r,s),e[9](s),y(r,a),y(r,u),U(u,e[3]),w(f,i,d),w(f,l,d),y(l,m),y(l,c),w(f,h,d),w(f,p,d),y(p,_),y(p,P),u.focus(),L||(B=[R(u,"input",e[10]),R(u,"input",e[7])],L=!0)},p(f,[d]){d&4&&T(n,f[2]),d&64&&$(s,"width",f[6]+"%"),d&8&&u.value!==f[3]&&U(u,f[3]),d&2&&T(c,f[1]),d&1&&T(P,f[0])},i:k,o:k,d(f){f&&(b(t),b(o),b(r),b(i),b(l),b(h),b(p)),e[8](null),e[9](null),L=!1,A(B)}}}let he=3e3;function me(e,t,n){let o=parseInt(localStorage.getItem("personal_best")||"0"),r=0,s=0,a=W(),u="",i,l=1,m,c=null,h=100,p=0;function _(){n(6,h=100),p=100/(he/16)*l,clearInterval(c),c=setInterval(()=>{n(6,h-=p),h<=0&&(clearInterval(c),P())},16)}function P(){n(3,u=""),r===3?(alert("You failed! Want to retry?"),r=0,n(1,s=0),l=1):r+=1,n(4,i.style.color="red",i),setTimeout(()=>{n(4,i.style.color="white",i),n(2,a=W()),_()},250)}function L(){u.toUpperCase()===a&&(n(1,s+=1),l=Math.min(l+.25,2.5),s>o&&(n(0,o=s),localStorage.setItem("personal_best",o.toString())),n(3,u=""),n(4,i.style.color="green",i),n(4,i.style.animation="correct 0.3s",i),clearInterval(c),setTimeout(()=>{n(2,a=W()),n(4,i.style.color="white",i),n(4,i.style.animation="",i),_()},250))}_();function B(M){K[M?"unshift":"push"](()=>{i=M,n(4,i)})}function f(M){K[M?"unshift":"push"](()=>{m=M,n(5,m)})}function d(){u=this.value,n(3,u)}return[o,s,a,u,i,m,h,L,B,f,d]}class _e extends de{constructor(t){super(),ce(this,t,me,pe,J,{})}}new _e({target:document.getElementById("app")});
