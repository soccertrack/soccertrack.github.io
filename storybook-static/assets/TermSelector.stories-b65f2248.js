import{r as x}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var d={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=x,g=Symbol.for("react.element"),v=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,O=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function f(t,r,m){var e,o={},a=null,c=null;m!==void 0&&(a=""+m),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(c=r.ref);for(e in r)E.call(r,e)&&!P.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:g,type:t,key:a,ref:c,props:o,_owner:O.current}}n.Fragment=v;n.jsx=f;n.jsxs=f;d.exports=n;var u=d.exports;const R=u.Fragment,p=u.jsx,y=({text:t})=>p(R,{children:p("h1",{children:t})});y.__docgenInfo={description:"",methods:[],displayName:"TermSelector"};const j={title:"TermSelector",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},s={args:{text:"Primary"}};var i,l,_;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: 'Primary'
  }
}`,...(_=(l=s.parameters)==null?void 0:l.docs)==null?void 0:_.source}}};const k=["Primary"];export{s as Primary,k as __namedExportsOrder,j as default};
//# sourceMappingURL=TermSelector.stories-b65f2248.js.map
