import{X as K,Y as M,D as O,S as U,i as Z,s as x,e as k,k as A,t as P,c as m,a as y,d as i,m as w,h as H,b as u,L as C,g as S,J as o,n as $,o as B,p as ee,q as F,Q as G,j as te,N as Q,W as T,R as j,V as W}from"./vendor-600b8a1e.js";import{b as X}from"./paths-28a87002.js";const se=()=>{const _=K("__svelte__");return{page:{subscribe:_.page.subscribe},navigating:{subscribe:_.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:_.navigating.subscribe}},session:_.session}},ae={subscribe(_){return se().page.subscribe(_)}};let ue=M(500),re=O(null);function le(_){let e,c,z,b,r,p,a,h,E,n,l,t,d,g,V="< back",q,D,I,f;return{c(){e=k("div"),c=k("div"),z=P("work"),b=A(),r=k("div"),p=P("/"),a=A(),h=k("div"),E=P(_[2]),t=A(),d=k("div"),g=k("a"),q=P(V),this.h()},l(s){e=m(s,"DIV",{class:!0});var v=y(e);c=m(v,"DIV",{class:!0});var N=y(c);z=H(N,"work"),N.forEach(i),b=w(v),r=m(v,"DIV",{class:!0});var R=y(r);p=H(R,"/"),R.forEach(i),a=w(v),h=m(v,"DIV",{class:!0});var J=y(h);E=H(J,_[2]),J.forEach(i),v.forEach(i),t=w(s),d=m(s,"DIV",{class:!0});var L=y(d);g=m(L,"A",{class:!0,href:!0});var Y=y(g);q=H(Y,V),Y.forEach(i),L.forEach(i),this.h()},h(){u(c,"class","svelte-1bkcyfz"),u(r,"class","svelte-1bkcyfz"),u(h,"class","selected project-title svelte-1bkcyfz"),u(e,"class","nav-left svelte-1bkcyfz"),u(g,"class","btn-back svelte-1bkcyfz"),u(g,"href",X+"/"),u(d,"class","nav-right")},m(s,v){S(s,e,v),o(e,c),o(c,z),o(e,b),o(e,r),o(r,p),o(e,a),o(e,h),o(h,E),S(s,t,v),S(s,d,v),o(d,g),o(g,q),f=!0},p(s,v){(!f||v&4)&&te(E,s[2])},i(s){f||(Q(()=>{l&&l.end(1),n=T(e,j,{duration:300,delay:200}),n.start()}),Q(()=>{I&&I.end(1),D=T(d,j,{duration:300,delay:200}),D.start()}),f=!0)},o(s){n&&n.invalidate(),l=W(e,j,{duration:150}),D&&D.invalidate(),I=W(d,j,{duration:150}),f=!1},d(s){s&&i(e),s&&l&&l.end(),s&&i(t),s&&i(d),s&&I&&I.end()}}}function ie(_){let e,c,z,b,r,p,a,h,E,n,l;return{c(){e=k("a"),c=k("span"),z=P("work"),p=A(),a=k("a"),h=P("about"),this.h()},l(t){e=m(t,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var d=y(e);c=m(d,"SPAN",{});var g=y(c);z=H(g,"work"),g.forEach(i),d.forEach(i),p=w(t),a=m(t,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var V=y(a);h=H(V,"about"),V.forEach(i),this.h()},h(){u(e,"sveltekit:prefetch",""),u(e,"href",X+"/"),u(e,"class","nav-item work svelte-1bkcyfz"),C(e,"selected",!_[0]),u(a,"sveltekit:prefetch",""),u(a,"href",X+"/about"),u(a,"class","nav-item about svelte-1bkcyfz"),C(a,"selected",_[0])},m(t,d){S(t,e,d),o(e,c),o(c,z),S(t,p,d),S(t,a,d),o(a,h),l=!0},p(t,d){d&1&&C(e,"selected",!t[0]),d&1&&C(a,"selected",t[0])},i(t){l||(Q(()=>{r&&r.end(1),b=T(e,j,{duration:300,delay:200}),b.start()}),Q(()=>{n&&n.end(1),E=T(a,j,{duration:300,delay:200}),E.start()}),l=!0)},o(t){b&&b.invalidate(),r=W(e,j,{duration:150}),E&&E.invalidate(),n=W(a,j,{duration:150}),l=!1},d(t){t&&i(e),t&&r&&r.end(),t&&i(p),t&&i(a),t&&n&&n.end()}}}function oe(_){let e,c,z,b,r,p,a,h,E,n,l,t,d,g,V;const q=[ie,le],D=[];function I(f,s){return f[1]?1:0}return l=I(_),t=D[l]=q[l](_),{c(){e=k("header"),c=k("div"),z=A(),b=k("div"),r=k("div"),p=k("div"),a=k("a"),h=P("omar nema"),E=A(),n=k("div"),t.c(),d=A(),g=k("div"),this.h()},l(f){e=m(f,"HEADER",{class:!0});var s=y(e);c=m(s,"DIV",{class:!0}),y(c).forEach(i),z=w(s),b=m(s,"DIV",{class:!0});var v=y(b);r=m(v,"DIV",{class:!0});var N=y(r);p=m(N,"DIV",{class:!0});var R=y(p);a=m(R,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var J=y(a);h=H(J,"omar nema"),J.forEach(i),R.forEach(i),N.forEach(i),E=w(v),n=m(v,"DIV",{class:!0});var L=y(n);t.l(L),L.forEach(i),v.forEach(i),d=w(s),g=m(s,"DIV",{class:!0}),y(g).forEach(i),s.forEach(i),this.h()},h(){u(c,"class","header-padding left svelte-1bkcyfz"),u(a,"sveltekit:prefetch",""),u(a,"href",X+"/"),u(a,"class","svelte-1bkcyfz"),u(p,"class","header-name svelte-1bkcyfz"),u(r,"class","name-holder svelte-1bkcyfz"),u(n,"class","header-nav svelte-1bkcyfz"),C(n,"split",_[1]),u(b,"class","inner-header svelte-1bkcyfz"),u(g,"class","header-padding right svelte-1bkcyfz"),u(e,"class","svelte-1bkcyfz")},m(f,s){S(f,e,s),o(e,c),o(e,z),o(e,b),o(b,r),o(r,p),o(p,a),o(a,h),o(b,E),o(b,n),D[l].m(n,null),o(e,d),o(e,g),V=!0},p(f,[s]){let v=l;l=I(f),l===v?D[l].p(f,s):($(),B(D[v],1,1,()=>{D[v]=null}),ee(),t=D[l],t?t.p(f,s):(t=D[l]=q[l](f),t.c()),F(t,1),t.m(n,null)),s&2&&C(n,"split",f[1])},i(f){V||(F(t),V=!0)},o(f){B(t),V=!1},d(f){f&&i(e),D[l].d()}}}function ce(_,e,c){let z,b,r,p;G(_,ae,h=>c(3,r=h)),G(_,re,h=>c(2,p=h));function a(h){var E,n;try{return((n=(E=r==null?void 0:r.url)==null?void 0:E.pathname)==null?void 0:n.includes(h))||!1}catch{return!1}}return c(1,z=a("project")),c(0,b=a("about")),[b,z,p]}class fe extends U{constructor(e){super();Z(this,e,ce,oe,x,{})}}export{fe as H,re as s,ue as t};
