import{z as V,j as w,r as f,o,D as p,s as d,L as m,c as h,O as C,u as g,P as _,Q as x,_ as l,F as v}from"./_plugin-vue_export-helper.850f2025.js";import{m as y,q as A,t as L}from"./main.48acf434.js";import{v as b}from"./variables.module.a965d773.js";const k=()=>{const e=b;return{variables:e,getPrefixCls:t=>`${e.namespace}-${t}`}},c=(e,i)=>{if(e.findIndex)return e.findIndex(i);let t=-1;return e.some((s,a,r)=>{const n=i(s,a,r);if(n)return t=a,n}),t},S=y({id:"tagsView",state:()=>({visitedViews:[],cachedViews:new Set}),getters:{getVisitedViews(){return this.visitedViews},getCachedViews(){return Array.from(this.cachedViews)}},actions:{addView(e){this.addVisitedView(e),this.addCachedView()},addVisitedView(e){var i,t;this.visitedViews.some(s=>s.path===e.path)||(i=e.meta)!=null&&i.noTagsView||this.visitedViews.push(Object.assign({},e,{title:((t=e.meta)==null?void 0:t.title)||"no-name"}))},addCachedView(){var i;const e=new Set;for(const t of this.visitedViews){const s=A(t);if(!!((i=s.meta)!=null&&i.noCache))continue;const r=s.name;e.add(r)}Array.from(this.cachedViews).sort().toString()!==Array.from(e).sort().toString()&&(this.cachedViews=e)},delView(e){this.delVisitedView(e),this.addCachedView()},delVisitedView(e){for(const[i,t]of this.visitedViews.entries())if(t.path===e.path){this.visitedViews.splice(i,1);break}},delCachedView(){const e=L.currentRoute.value,i=c(this.getCachedViews,t=>t===e.name);i>-1&&this.cachedViews.delete(this.getCachedViews[i])},delAllViews(){this.delAllVisitedViews(),this.addCachedView()},delAllVisitedViews(){this.visitedViews=[]},delOthersViews(e){this.delOthersVisitedViews(e),this.addCachedView()},delOthersVisitedViews(e){this.visitedViews=this.visitedViews.filter(i=>{var t;return((t=i==null?void 0:i.meta)==null?void 0:t.affix)||i.path===e.path})},delLeftViews(e){const i=c(this.visitedViews,t=>t.path===e.path);i>-1&&(this.visitedViews=this.visitedViews.filter((t,s)=>{var a;return((a=t==null?void 0:t.meta)==null?void 0:a.affix)||t.path===e.path||s>i}),this.addCachedView())},delRightViews(e){const i=c(this.visitedViews,t=>t.path===e.path);i>-1&&(this.visitedViews=this.visitedViews.filter((t,s)=>{var a;return((a=t==null?void 0:t.meta)==null?void 0:a.affix)||t.path===e.path||s<i}),this.addCachedView())},updateVisitedView(e){for(let i of this.visitedViews)if(i.path===e.path){i=Object.assign(i,e);break}}}}),O=V({__name:"AppView",setup(e){const i=S(),t=w(()=>i.getCachedViews);return(s,a)=>{const r=f("router-view");return o(),p("section",{class:x(["w-[100%] h-[100%] bg-[var(--bg-color)]"])},[d(r,null,{default:m(({Component:n,route:u})=>[(o(),h(_,{include:g(t)},[(o(),h(C(n),{key:u.fullPath}))],1032,["include"]))]),_:1})],2)}}}),P=l(O,[["__file","/home/runner/work/vue-starter/vue-starter/src/layout/components/AppView.vue"]]),R=()=>({renderLayout:()=>d(v,null,[d(P,null,null)])}),{getPrefixCls:j}=k(),B=j("layout"),D=()=>{const{renderLayout:e}=R();return e()},I=V({name:"Layout",setup(){return()=>d("section",{class:[B,"w-[100%] h-[100%] relative"]},[D()])}}),T=l(I,[["__file","/home/runner/work/vue-starter/vue-starter/src/layout/Layout.vue"]]);export{T as default};
