System.register(["./_plugin-vue_export-helper-legacy.4cdd190f.js","./main-legacy.721b2d62.js","./index-legacy.f9c16b26.js"],(function(t){"use strict";var e,n,a,s,c,o,r,u,l,i,d,p,m,f,y,h;return{setters:[t=>{e=t.j,n=t.r,a=t.l,s=t.C,c=t.H,o=t.u,r=t.I,u=t.b,l=t.F,i=t.K,d=t.J,p=t._},t=>{m=t.u,f=t.g},t=>{y=t.s,h=t.c}],execute:function(){const{default_headers:v}=h,x=t=>{const{url:e,method:n,params:a,data:s,headersType:c,responseType:o}=t;return y({url:e,method:n,params:a,data:s,responseType:o,headers:{"Content-Type":c||v}})};async function b(t){const e=await x({method:"GET",...t});return e.data||e}async function g(t){const e=await x({method:"POST",...t});return e.data||e}async function T(t){const e=await x({method:"DELETE",...t});return e.data||e}async function _(t){const e=await x({method:"PUT",...t});return e.data||e}const k={get:b,post:g,delete:T,put:_},w={class:"mt-10 text-center space-y-2 space-x-2 flex-col"},C={class:"mx-auto"},j=d("这是文章中心。 "),E={class:"flex-row space-x-5"};t("default",p(e({__name:"Post",setup(t){const{t:e}=f(),{back:d}=m();let p=n([]);function y(){k.get({url:"/posts"}).then((t=>{p.value=t}))}return(t,n)=>(a(),s("section",w,[c("div",C,[j,c("button",{onClick:n[0]||(n[0]=(...t)=>o(d)&&o(d)(...t))},r(o(e)("common.back")),1)]),c("div",E,[c("button",{onClick:y},"加载数据"),c("button",{onClick:n[1]||(n[1]=()=>{u(p)?p.value=[]:p=[]})},"清除数据")]),c("ul",null,[(a(!0),s(l,null,i(o(p),((t,e)=>(a(),s("li",{key:e},r(t.title),1)))),128))])]))}}),[["__file","/home/runner/work/vue-starter/vue-starter/src/views/User/Post.vue"]]))}}}));
