import{an as a,ao as d,aO as l,am as f,d as C,ac as s,aq as N,bP as A,aw as P,aa as W,bQ as U,r as y,b as p,ap as x,aS as V,aR as _,bR as X,aT as q,bS as H,av as D,az as K,bm as Q,bT as G,aX as m,bU as J}from"./index-c84c64f4.js";const Z=a("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[d("bordered",[l("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),l("left-placement",[d("bordered",[l("border",`
 right: 0;
 `)])]),d("right-placement",`
 justify-content: flex-start;
 `,[d("bordered",[l("border",`
 left: 0;
 `)]),d("collapsed",[a("layout-toggle-button",[a("base-icon",`
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",[f("&:hover",[l("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),l("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),a("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[a("base-icon",`
 transform: rotate(0);
 `)]),a("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[f("&:hover",[l("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),l("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),d("collapsed",[a("layout-toggle-bar",[f("&:hover",[l("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),l("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),a("layout-toggle-button",[a("base-icon",`
 transform: rotate(0);
 `)])]),a("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[a("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[l("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),l("bottom",`
 position: absolute;
 top: 34px;
 `),f("&:hover",[l("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),l("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),l("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),f("&:hover",[l("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),l("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),a("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),d("show-content",[a("layout-sider-scroll-container",{opacity:1})]),d("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ee=C({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},s(N,{clsPrefix:e},{default:()=>s(A,null)}))}}),oe=C({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},s("div",{class:`${e}-layout-toggle-bar__top`}),s("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),te={position:G,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},le=C({name:"LayoutSider",props:Object.assign(Object.assign({},P.props),te),setup(e){const n=W(U),i=y(null),b=y(null),$=p(()=>x(h.value?e.collapsedWidth:e.width)),j=p(()=>e.collapseMode!=="transform"?{}:{minWidth:x(e.width)}),I=p(()=>n?n.siderPlacement:"left"),S=y(e.defaultCollapsed),h=V(_(e,"collapsed"),S);function O(r,o){if(e.nativeScrollbar){const{value:t}=i;t&&(o===void 0?t.scrollTo(r):t.scrollTo(r,o))}else{const{value:t}=b;t&&t.scrollTo(r,o)}}function E(){const{"onUpdate:collapsed":r,onUpdateCollapsed:o,onExpand:t,onCollapse:v}=e,{value:u}=h;o&&m(o,!u),r&&m(r,!u),S.value=!u,u?t&&m(t):v&&m(v)}let T=0,z=0;const Y=r=>{var o;const t=r.target;T=t.scrollLeft,z=t.scrollTop,(o=e.onScroll)===null||o===void 0||o.call(e,r)};X(()=>{if(e.nativeScrollbar){const r=i.value;r&&(r.scrollTop=z,r.scrollLeft=T)}}),q(H,{collapsedRef:h,collapseModeRef:_(e,"collapseMode")});const{mergedClsPrefixRef:w,inlineThemeDisabled:k}=D(e),B=P("Layout","-layout-sider",Z,J,e,w);function L(r){var o,t;r.propertyName==="max-width"&&(h.value?(o=e.onAfterLeave)===null||o===void 0||o.call(e):(t=e.onAfterEnter)===null||t===void 0||t.call(e))}const M={scrollTo:O},R=p(()=>{const{common:{cubicBezierEaseInOut:r},self:o}=B.value,{siderToggleButtonColor:t,siderToggleButtonBorder:v,siderToggleBarColor:u,siderToggleBarColorHover:F}=o,c={"--n-bezier":r,"--n-toggle-button-color":t,"--n-toggle-button-border":v,"--n-toggle-bar-color":u,"--n-toggle-bar-color-hover":F};return e.inverted?(c["--n-color"]=o.siderColorInverted,c["--n-text-color"]=o.textColorInverted,c["--n-border-color"]=o.siderBorderColorInverted,c["--n-toggle-button-icon-color"]=o.siderToggleButtonIconColorInverted,c.__invertScrollbar=o.__invertScrollbar):(c["--n-color"]=o.siderColor,c["--n-text-color"]=o.textColor,c["--n-border-color"]=o.siderBorderColor,c["--n-toggle-button-icon-color"]=o.siderToggleButtonIconColor),c}),g=k?K("layout-sider",p(()=>e.inverted?"a":"b"),R,e):void 0;return Object.assign({scrollableElRef:i,scrollbarInstRef:b,mergedClsPrefix:w,mergedTheme:B,styleMaxWidth:$,mergedCollapsed:h,scrollContainerStyle:j,siderPlacement:I,handleNativeElScroll:Y,handleTransitionend:L,handleTriggerClick:E,inlineThemeDisabled:k,cssVars:R,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},M)},render(){var e;const{mergedClsPrefix:n,mergedCollapsed:i,showTrigger:b}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("aside",{class:[`${n}-layout-sider`,this.themeClass,`${n}-layout-sider--${this.position}-positioned`,`${n}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${n}-layout-sider--bordered`,i&&`${n}-layout-sider--collapsed`,(!i||this.showCollapsedContent)&&`${n}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:x(this.width)}]},this.nativeScrollbar?s("div",{class:[`${n}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):s(Q,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),b?b==="bar"?s(oe,{clsPrefix:n,class:i?this.collapsedTriggerClass:this.triggerClass,style:i?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):s(ee,{clsPrefix:n,class:i?this.collapsedTriggerClass:this.triggerClass,style:i?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?s("div",{class:`${n}-layout-sider__border`}):null)}});export{le as N};
