
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as ye}from"./index-7349637d.js";import{A as C}from"./chatgpt-e709c26a.js";import{u as ke}from"./utcformatTime-e76e5157.js";import{M as ce,b as ge,c as _e,Q as be}from"./index-d342e869.js";import{d as ve,r as k,Q as L,B as J,x as we,h as d,R as xe,o as c,c as R,e as l,f as t,S as q,U as $,b as i,l as n,a as K,w as I,I as x,t as f,V as W,E as V,X as Ve,q as Z}from"./index-7a00c1dd.js";const Te={style:{float:"right"}},Ue={class:"flex justify-end mr-5"},Ce={class:"flex justify-end mr-5"},Me=ve({__name:"list",setup(he){const N=k(),O=k(),j=k(0),_=k(!1),M=k(!1),Y=k(!1),v=k(!1),E=k(["gpt-4","gpt-4-0613","gpt-4-32k","gpt-4-32k-0613","gpt-3.5-turbo","gpt-3.5-turbo-0613","gpt-3.5-turbo-16k-0613","gpt-3.5-turbo-16k","code-davinci-002","ada","davinci"]),h=L({keyList:""}),y=L({key:"",model:"",status:"",page:1,size:10}),D=k(),w=k(0),s=L({key:"",model:"",maxModelTokens:null,maxResponseTokens:null,openaiProxyUrl:"",openaiTimeoutMs:null,weight:1,status:1}),ee=L({key:[{required:!0,message:"请填写您的chatgpt key",trigger:"blur"}],model:[{required:!0,message:"请选择当前key需要绑定的模型",trigger:"change"}],weight:[{required:!1,message:"请填写key的权重值",trigger:"blur"}],status:[{required:!0,message:"请选择key的启用状态",trigger:"change"}],maxModelTokens:[{required:!1,message:"请填写模型最大token数",trigger:"blur"}],maxResponseTokens:[{required:!1,message:"请填写最大回复token数",trigger:"blur"}],openaiProxyUrl:[{required:!1,message:"请填写指定代理地址",trigger:"blur"}]});function G(o){w.value=0,o==null||o.resetFields()}const le=J(()=>w.value?"更新秘钥":"新增秘钥"),Q=J(()=>w.value?"确认更新":"确认新增"),F=k([]);async function X(){}async function g(){try{M.value=!0;const o=await C.queryKeyList(y);M.value=!1;const{rows:a,count:m}=o.data;j.value=m,F.value=a}catch{M.value=!1}}async function te(o){const{id:a}=o;await C.deleteGptKey({id:a}),V({type:"success",message:"删除秘钥成功！"}),g()}function ae(o){w.value=o.id;const{key:a,model:m,weight:r,status:b,type:T,maxModelTokens:u,maxResponseTokens:P,openaiProxyUrl:A,openaiTimeoutMs:U}=o;Ve(()=>{Object.assign(s,{key:a,model:m,weight:r,status:b,type:T,maxModelTokens:u,maxResponseTokens:P,openaiProxyUrl:A,openaiTimeoutMs:U})}),_.value=!0}function oe(o){o==null||o.resetFields(),g()}async function ne(o){o==null||o.validate(async a=>{a&&(w.value?(await C.updateGptKey({id:w.value,...s}),V({type:"success",message:"更新秘钥成功！"})):(await C.addGptKey(s),V({type:"success",message:"添加秘钥成功！"})),_.value=!1,g())})}function se(o){o==null||o.validate(async a=>{if(a){const{keyList:m}=h,r=m.split(`
`);if(r.length>100)return V.error("批量添加key不能超过100个");if(!r.length)return V.error("请按要求填写您的key秘钥");const b=await C.builCreateGptKey({keyList:r});h.keyList="",V({type:"success",message:b.data}),v.value=!1,g()}})}return we(()=>{g()}),(o,a)=>{const m=d("el-input"),r=d("el-form-item"),b=d("el-option"),T=d("el-select"),u=d("el-button"),P=d("Plus"),A=d("el-icon"),U=d("el-form"),S=ye,ue=d("el-alert"),p=d("el-table-column"),z=d("el-tag"),re=d("el-popconfirm"),ie=d("el-table"),de=d("el-pagination"),pe=d("el-row"),me=d("el-switch"),H=d("el-dialog"),B=xe("loading");return c(),R("div",null,[l(S,null,{default:t(()=>[l(U,{ref_key:"formRef",ref:O,inline:!0,model:y},{default:t(()=>[l(r,{label:"key",prop:"key"},{default:t(()=>[l(m,{modelValue:y.key,"onUpdate:modelValue":a[0]||(a[0]=e=>y.key=e),placeholder:"sk-*** [模糊搜索]"},null,8,["modelValue"])]),_:1}),l(r,{label:"使用模型",prop:"model"},{default:t(()=>[l(T,{modelValue:y.model,"onUpdate:modelValue":a[1]||(a[1]=e=>y.model=e),placeholder:"请选择绑定的模型",clearable:""},{default:t(()=>[(c(!0),R(q,null,$(i(ce),e=>(c(),x(b,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"启用状态",prop:"status"},{default:t(()=>[l(T,{modelValue:y.status,"onUpdate:modelValue":a[2]||(a[2]=e=>y.status=e),placeholder:"请选择key启用状态",clearable:""},{default:t(()=>[(c(!0),R(q,null,$(i(ge),e=>(c(),x(b,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(r,null,{default:t(()=>[l(u,{type:"primary",onClick:g},{default:t(()=>[n(" 查询 ")]),_:1}),l(u,{onClick:a[3]||(a[3]=e=>oe(i(O)))},{default:t(()=>[n(" 重置 ")]),_:1})]),_:1}),K("span",Te,[l(u,{type:"success",onClick:a[4]||(a[4]=e=>v.value=!0)},{default:t(()=>[n(" 批量添加Key "),l(A,{class:"ml-3"},{default:t(()=>[l(P)]),_:1})]),_:1}),l(u,{type:"success",onClick:a[5]||(a[5]=e=>_.value=!0)},{default:t(()=>[n(" 添加Key "),l(A,{class:"ml-3"},{default:t(()=>[l(P)]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1}),l(S,null,{default:t(()=>[l(ue,{"show-icon":"",title:"模块已废弃",description:"当前版本会在2.0之后废弃、本次保留是为了让你查询历史key、后续此模块会直接移除、新的key池在下方『模型池设置』中、详细配置可以查看提示或参考官方文档！",type:"error"})]),_:1}),l(S,{style:{width:"100%"}},{default:t(()=>[I((c(),x(ie,{border:"",data:i(F),style:{width:"100%"},size:"large"},{default:t(()=>[l(p,{prop:"key",label:"key秘钥",width:"470"}),l(p,{prop:"model",align:"center",label:"绑定模型",width:"160"},{default:t(e=>[l(z,{type:e.row.model.includes("gpt-4")?"success":""},{default:t(()=>[n(f(e.row.model),1)]),_:2},1032,["type"])]),_:1}),l(p,{prop:"status",align:"center",label:"启用状态",width:"90"},{default:t(e=>[l(z,{type:i(_e)[e.row.status]},{default:t(()=>[n(f(i(be)[e.row.status]),1)]),_:2},1032,["type"])]),_:1}),l(p,{prop:"keyDetail.totalAmount",align:"center",label:"账户总额",width:"90"},{default:t(e=>[l(u,{type:"info",text:""},{default:t(()=>[n(f(e.row.keyDetail.totalAmount||"-"),1)]),_:2},1024)]),_:1}),l(p,{prop:"keyDetail.useAmount",align:"center",label:"已用额度",width:"90"},{default:t(e=>[l(u,{type:"danger",text:""},{default:t(()=>[n(f(e.row.keyDetail.useAmount||"-"),1)]),_:2},1024)]),_:1}),l(p,{prop:"keyDetail.balance",align:"center",label:"剩余额度",width:"90"},{default:t(e=>[l(u,{type:"success",text:""},{default:t(()=>[n(f(e.row.keyDetail.balance||"-"),1)]),_:2},1024)]),_:1}),l(p,{prop:"keyDetail.expirDate",align:"center",label:"过期时间",width:"130"},{default:t(e=>[l(u,{type:"danger",text:""},{default:t(()=>[n(f(e.row.keyDetail.expirDate||"-"),1)]),_:2},1024)]),_:1}),l(p,{prop:"weight",align:"center",label:"秘钥权重",width:"90"}),l(p,{prop:"useCount",align:"center",label:"调用次数",width:"90"}),l(p,{prop:"keyStatus",align:"center",label:"key状态",width:"90"},{default:t(e=>[l(z,{type:e.row.keyDetail.status===1?"success":"danger"},{default:t(()=>[n(f(e.row.keyDetail.status===1?"正常工作":e.row.keyDetail.status===-1?"查询失败":"已被封禁"),1)]),_:2},1032,["type"])]),_:1}),l(p,{prop:"maxModelTokens",align:"center",label:"模型最大上下文",width:"140"},{default:t(e=>[l(u,{type:"info",text:""},{default:t(()=>[n(f(e.row.maxModelTokens||"-"),1)]),_:2},1024)]),_:1}),l(p,{prop:"maxResponseTokens",align:"center",label:"最大回复支持Token",width:"160"},{default:t(e=>[l(u,{type:"info",text:""},{default:t(()=>[n(f(e.row.maxResponseTokens||"-"),1)]),_:2},1024)]),_:1}),l(p,{prop:"openaiProxyUrl",align:"center",label:"绑定的代理地址",width:"230"},{default:t(e=>[l(u,{type:"info",text:""},{default:t(()=>[n(f(e.row.openaiProxyUrl||"-"),1)]),_:2},1024)]),_:1}),l(p,{prop:"createdAt",align:"center",label:"添加时间",width:"120"},{default:t(e=>[n(f(i(ke)(e.row.createdAt,"YYYY-MM-DD")),1)]),_:1}),l(p,{fixed:"right",label:"操作",width:"200"},{default:t(e=>[l(u,{link:"",type:"primary",size:"small",onClick:fe=>ae(e.row)},{default:t(()=>[n(" 变更 ")]),_:2},1032,["onClick"]),l(re,{title:"确认删除此秘钥么?",width:"180","icon-color":"red",onConfirm:fe=>te(e.row)},{reference:t(()=>[l(u,{link:"",type:"danger",size:"small"},{default:t(()=>[n(" 删除秘钥 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[B,i(M)]]),l(pe,{class:"flex justify-end mt-5"},{default:t(()=>[l(de,{"current-page":y.page,"onUpdate:currentPage":a[6]||(a[6]=e=>y.page=e),"page-size":y.size,"onUpdate:pageSize":a[7]||(a[7]=e=>y.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:i(j),onSizeChange:g,onCurrentChange:g},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),l(H,{modelValue:i(_),"onUpdate:modelValue":a[18]||(a[18]=e=>W(_)?_.value=e:null),"close-on-click-modal":!1,title:"批量添加秘钥",width:"670",onClose:a[19]||(a[19]=e=>G(i(D)))},{footer:t(()=>[K("span",Ue,[l(u,{onClick:a[16]||(a[16]=e=>_.value=!1)},{default:t(()=>[n("取消")]),_:1}),l(u,{type:"primary",onClick:a[17]||(a[17]=e=>ne(i(D)))},{default:t(()=>[n(f(Q.value),1)]),_:1})])]),default:t(()=>[I((c(),x(U,{ref_key:"formPackageRef",ref:D,"label-position":"right","label-width":"120px",model:s,rules:ee},{default:t(()=>[l(r,{label:"key卡账号",prop:"key"},{default:t(()=>[l(m,{modelValue:s.key,"onUpdate:modelValue":a[8]||(a[8]=e=>s.key=e),placeholder:"请填写chatgpt key",onBlur:X},null,8,["modelValue"])]),_:1}),l(r,{label:"启用状态",prop:"status"},{default:t(()=>[l(me,{modelValue:s.status,"onUpdate:modelValue":a[9]||(a[9]=e=>s.status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),l(r,{label:"绑定模型",prop:"model"},{default:t(()=>[l(T,{modelValue:s.model,"onUpdate:modelValue":a[10]||(a[10]=e=>s.model=e),filterable:"",clearable:"",placeholder:"请选用当前key绑定的模型"},{default:t(()=>[(c(!0),R(q,null,$(i(E),e=>(c(),x(b,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),l(u,{type:"primary",class:"ml-5",onClick:X},{default:t(()=>[n(" 请指定当前key调用的模型 ")]),_:1})]),_:1}),l(r,{label:"轮询权重",prop:"weight"},{default:t(()=>[l(m,{modelValue:s.weight,"onUpdate:modelValue":a[11]||(a[11]=e=>s.weight=e),modelModifiers:{number:!0},placeholder:"请填写key的权重、数字越大使用评率越高！"},null,8,["modelValue"])]),_:1}),l(r,{label:"模型最大Token",prop:"maxModelTokens"},{default:t(()=>[l(m,{modelValue:s.maxModelTokens,"onUpdate:modelValue":a[12]||(a[12]=e=>s.maxModelTokens=e),modelModifiers:{number:!0},placeholder:"请填写模型最大Token、不填写默认使用默认！"},null,8,["modelValue"])]),_:1}),l(r,{label:"最大回复Token",prop:"maxResponseTokens"},{default:t(()=>[l(m,{modelValue:s.maxResponseTokens,"onUpdate:modelValue":a[13]||(a[13]=e=>s.maxResponseTokens=e),modelModifiers:{number:!0},placeholder:"请填写最大回复Token、不填写使用默认！"},null,8,["modelValue"])]),_:1}),l(r,{label:"指定代理",prop:"openaiProxyUrl"},{default:t(()=>[l(m,{modelValue:s.openaiProxyUrl,"onUpdate:modelValue":a[14]||(a[14]=e=>s.openaiProxyUrl=e),modelModifiers:{number:!0},placeholder:"请填写key的指定代理、不填写默认使用全局配置！"},null,8,["modelValue"])]),_:1}),l(r,{label:"超时时间",prop:"openaiTimeoutMs"},{default:t(()=>[l(m,{modelValue:s.openaiTimeoutMs,"onUpdate:modelValue":a[15]||(a[15]=e=>s.openaiTimeoutMs=e),modelModifiers:{number:!0},placeholder:"请填写key的超时时间单位（ms）、不填写默认使用全局配置！"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[B,i(Y)]])]),_:1},8,["modelValue"]),l(H,{modelValue:i(v),"onUpdate:modelValue":a[23]||(a[23]=e=>W(v)?v.value=e:null),"close-on-click-modal":!1,title:le.value,width:"670",onClose:a[24]||(a[24]=e=>G(i(D)))},{footer:t(()=>[K("span",Ce,[l(u,{onClick:a[21]||(a[21]=e=>v.value=!1)},{default:t(()=>[n("取消")]),_:1}),l(u,{type:"primary",onClick:a[22]||(a[22]=e=>se(i(N)))},{default:t(()=>[n(f(Q.value),1)]),_:1})])]),default:t(()=>[I((c(),x(U,{ref_key:"formBlukRef",ref:N,"label-position":"right","label-width":"120px",model:s},{default:t(()=>[l(r,{label:"key卡账号列表",prop:"keyList"},{default:t(()=>[l(m,{modelValue:h.keyList,"onUpdate:modelValue":a[20]||(a[20]=e=>h.keyList=e),type:"textarea",rows:8,placeholder:"请粘贴您的key秘钥列表、一行一个、批量添加的情况下我们将默认为您使用gpt-3.5-turbo模型、并且不会检测秘钥的有效期、请您自行校验！"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[B,i(Y)]])]),_:1},8,["modelValue","title"])])}}});typeof Z=="function"&&Z(Me);export{Me as default};