"use strict";(self.webpackChunktav=self.webpackChunktav||[]).push([[98],{6300:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r,a,l=n(7294),i=n(8270),s=n(2337),c=n(3503),o=n(8629),u=n(1450),d=n(9366),f=n(7906),m=n(8496),p=n(1075);!function(e){e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.SetOrientation=1]="SetOrientation",e[e.SetActivation=2]="SetActivation",e[e.RegisterTab=3]="RegisterTab",e[e.UnregisterTab=4]="UnregisterTab",e[e.RegisterPanel=5]="RegisterPanel",e[e.UnregisterPanel=6]="UnregisterPanel",e[e.ForceRerender=7]="ForceRerender"}(a||(a={}));var x=((r={})[a.SetSelectedIndex]=function(e,t){return e.selectedIndex===t.index?e:(0,s.gY)({},e,{selectedIndex:t.index})},r[a.SetOrientation]=function(e,t){return e.orientation===t.orientation?e:(0,s.gY)({},e,{orientation:t.orientation})},r[a.SetActivation]=function(e,t){return e.activation===t.activation?e:(0,s.gY)({},e,{activation:t.activation})},r[a.RegisterTab]=function(e,t){return e.tabs.includes(t.tab)?e:(0,s.gY)({},e,{tabs:[].concat(e.tabs,[t.tab])})},r[a.UnregisterTab]=function(e,t){return(0,s.gY)({},e,{tabs:e.tabs.filter((function(e){return e!==t.tab}))})},r[a.RegisterPanel]=function(e,t){return e.panels.includes(t.panel)?e:(0,s.gY)({},e,{panels:[].concat(e.panels,[t.panel])})},r[a.UnregisterPanel]=function(e,t){return(0,s.gY)({},e,{panels:e.panels.filter((function(e){return e!==t.panel}))})},r[a.ForceRerender]=function(e){return(0,s.gY)({},e)},r),v=(0,l.createContext)(null);function g(e){var t=(0,l.useContext)(v);if(null===t){var n=new Error("<"+e+" /> is missing a parent <Tab.Group /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,g),n}return t}function b(e,t){return(0,c.E)(t.type,x,e,t)}v.displayName="TabsContext";var y=l.Fragment;var h="button";function R(e){var t,n,r,i="headlessui-tabs-tab-"+(0,m.M)(),x=g(R.name),v=x[0],b=v.selectedIndex,y=v.tabs,E=v.panels,w=v.orientation,T=v.activation,O=x[1],I=O.dispatch,P=O.change,N=(0,l.useRef)(null),A=(0,u.T)(N,(function(e){e&&I({type:a.ForceRerender})}));(0,f.e)((function(){return I({type:a.RegisterTab,tab:N}),function(){return I({type:a.UnregisterTab,tab:N})}}),[I,N]);var S=y.indexOf(N),Y=S===b,k=(0,l.useCallback)((function(e){var t=y.map((function(e){return e.current})).filter(Boolean);if(e.key===d.R.Space||e.key===d.R.Enter)return e.preventDefault(),e.stopPropagation(),void P(S);switch(e.key){case d.R.Home:case d.R.PageUp:return e.preventDefault(),e.stopPropagation(),(0,p.jA)(t,p.TO.First);case d.R.End:case d.R.PageDown:return e.preventDefault(),e.stopPropagation(),(0,p.jA)(t,p.TO.Last)}return(0,c.E)(w,{vertical:function(){return e.key===d.R.ArrowUp?(0,p.jA)(t,p.TO.Previous|p.TO.WrapAround):e.key===d.R.ArrowDown?(0,p.jA)(t,p.TO.Next|p.TO.WrapAround):void 0},horizontal:function(){return e.key===d.R.ArrowLeft?(0,p.jA)(t,p.TO.Previous|p.TO.WrapAround):e.key===d.R.ArrowRight?(0,p.jA)(t,p.TO.Next|p.TO.WrapAround):void 0}})}),[y,w,S,P]),C=(0,l.useCallback)((function(){var e;null==(e=N.current)||e.focus()}),[N]),M=(0,l.useCallback)((function(){var e;null==(e=N.current)||e.focus(),P(S)}),[P,S,N]),j=(null!=(t=null==e?void 0:e.type)?t:"button"===(e.as||h))?"button":void 0,L=(0,l.useMemo)((function(){return{selected:Y}}),[Y]),_={ref:A,onKeyDown:k,onFocus:"manual"===T?C:M,onClick:M,id:i,role:"tab",type:j,"aria-controls":null==(n=E[S])||null==(r=n.current)?void 0:r.id,"aria-selected":Y,tabIndex:Y?0:-1},U=e;return(0,o.sY)({props:(0,s.gY)({},U,_),slot:L,defaultTag:h,name:"Tabs.Tab"})}var E=o.AN.RenderStrategy|o.AN.Static;R.Group=function(e){var t=e.defaultIndex,n=void 0===t?0:t,r=e.vertical,i=void 0!==r&&r,c=e.manual,u=void 0!==c&&c,d=e.onChange,f=(0,s.gK)(e,["defaultIndex","vertical","manual","onChange"]),m=i?"vertical":"horizontal",p=u?"manual":"auto",x=(0,l.useReducer)(b,{selectedIndex:null,tabs:[],panels:[],orientation:m,activation:p}),g=x[0],h=x[1],R=(0,l.useMemo)((function(){return{selectedIndex:g.selectedIndex}}),[g.selectedIndex]),E=(0,l.useRef)((function(){}));(0,l.useEffect)((function(){h({type:a.SetOrientation,orientation:m})}),[m]),(0,l.useEffect)((function(){h({type:a.SetActivation,activation:p})}),[p]),(0,l.useEffect)((function(){"function"==typeof d&&(E.current=d)}),[d]),(0,l.useEffect)((function(){if(!(g.tabs.length<=0)&&null===g.selectedIndex){var e=g.tabs.map((function(e){return e.current})).filter(Boolean),t=e.filter((function(e){return!e.hasAttribute("disabled")}));if(n<0)h({type:a.SetSelectedIndex,index:e.indexOf(t[0])});else if(n>g.tabs.length)h({type:a.SetSelectedIndex,index:e.indexOf(t[t.length-1])});else{var r=e.slice(0,n),l=e.slice(n),i=[].concat(l,r).find((function(e){return t.includes(e)}));if(!i)return;h({type:a.SetSelectedIndex,index:e.indexOf(i)})}}}),[n,g.tabs,g.selectedIndex]);var w=(0,l.useRef)(g.selectedIndex),T=(0,l.useMemo)((function(){return[g,{dispatch:h,change:function(e){w.current!==e&&E.current(e),w.current=e,h({type:a.SetSelectedIndex,index:e})}}]}),[g,h]);return l.createElement(v.Provider,{value:T},(0,o.sY)({props:(0,s.gY)({},f),slot:R,defaultTag:y,name:"Tabs"}))},R.List=function e(t){var n=g([R.name,e.name].join("."))[0],r={selectedIndex:n.selectedIndex},a={role:"tablist","aria-orientation":n.orientation},l=t;return(0,o.sY)({props:(0,s.gY)({},l,a),slot:r,defaultTag:"div",name:"Tabs.List"})},R.Panels=function e(t){var n=g([R.name,e.name].join("."))[0].selectedIndex,r=(0,l.useMemo)((function(){return{selectedIndex:n}}),[n]);return(0,o.sY)({props:t,slot:r,defaultTag:"div",name:"Tabs.Panels"})},R.Panel=function e(t){var n,r,i=g([R.name,e.name].join(".")),c=i[0],d=c.selectedIndex,p=c.tabs,x=c.panels,v=i[1].dispatch,b="headlessui-tabs-panel-"+(0,m.M)(),y=(0,l.useRef)(null),h=(0,u.T)(y,(function(e){e&&v({type:a.ForceRerender})}));(0,f.e)((function(){return v({type:a.RegisterPanel,panel:y}),function(){return v({type:a.UnregisterPanel,panel:y})}}),[v,y]);var w=x.indexOf(y),T=w===d,O=(0,l.useMemo)((function(){return{selected:T}}),[T]),I={ref:h,id:b,role:"tabpanel","aria-labelledby":null==(n=p[w])||null==(r=n.current)?void 0:r.id,tabIndex:T?0:-1},P=t;return(0,o.sY)({props:(0,s.gY)({},P,I),slot:O,defaultTag:"div",features:E,visible:T,name:"Tabs.Panel"})};var w=n(9487),T=n(2393),O=function(e){var t=e.pageContext,n=(t.language,t.bibles),r=t.resources,a=t.films,s=(0,i.$)().t,c=[{name:s("bibles.title"),href:"#",count:n?n.length:0,current:!0},{name:s("resources.title"),href:"#",count:r?r.length:0,current:!1},{name:s("films.title"),href:"#",count:a?a.length:0,current:!1}];function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}return l.createElement("div",null,l.createElement(R.Group,null,l.createElement("div",{className:"border-b border-gray-200 mb-8"},l.createElement(R.List,null,l.createElement("nav",{className:"-mb-px flex space-x-8 justify-center","aria-label":"Tabs"},c.map((function(e){return l.createElement(R,{key:e.name,"aria-current":e.current?"page":void 0},(function(t){var n=t.selected;return l.createElement("span",{className:o(n?"border-"+T.COLOR_PRIMARY+"-500 text-"+T.COLOR_PRIMARY+"-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200","whitespace-nowrap flex py-4 px-1 border-b-2 text-sm")},e.name,e.count?l.createElement("span",{className:o(n?"bg-"+T.COLOR_PRIMARY+"-100 text-"+T.COLOR_PRIMARY+"-600":"bg-gray-100 text-gray-900","hidden ml-3 py-0.5 px-2.5 rounded-full text-xs md:inline-block")},e.count):null)}))}))))),l.createElement(R.Panels,null,l.createElement(R.Panel,null,l.createElement("ul",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"},n.map((function(e){return l.createElement("li",{key:e.id,className:"col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 flex flex-col"},l.createElement("div",{className:"w-full flex flex-grow items-center justify-between p-6 space-x-6"},l.createElement("div",{className:"flex-1"},l.createElement("div",{className:"flex space-x-3"},l.createElement("h3",{className:"flex-1 text-gray-900 text-sm"},e.title),l.createElement("span",{className:"flex-shrink-0 inline-block px-2 py-0.5 text-gray-400 text-xs"},e.date)),l.createElement("p",{className:"text-gray-500 text-md"},e.title_vernacular))),l.createElement("div",{className:"flex divide-x divide-gray-200 items-end"},l.createElement("div",{className:"w-0 flex-1 flex"},l.createElement("a",{href:"http://downloads.dbs.org/downloads/pdf/"+e.id+"/"+e.id+".pdf",target:"_blank",rel:"noreferrer",className:"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500"},l.createElement("span",{className:"ml-3"},"PDF"))),l.createElement("div",{className:"-ml-px w-0 flex-1 flex"},l.createElement("a",{href:"http://downloads.dbs.org/downloads/html_zips/"+e.id+".zip",className:"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500"},l.createElement("span",{className:"ml-3"},"HTML"))),l.createElement("div",{className:"-ml-px w-0 flex-1 flex"},l.createElement("a",{href:"/bibles/"+e.id,className:"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500"},l.createElement("span",{className:"ml-3"},"ePub")))))})))),l.createElement(R.Panel,null,l.createElement(w.Z,{data:r,columns:[{accessor:"title",Header:s("fields.title"),Cell:function(e){var t=e.row;return l.createElement("a",{className:"text-"+T.COLOR_PRIMARY+"-600",href:t.values.url},l.createElement("div",{className:"text-"+T.COLOR_PRIMARY+"-600 w-60 overflow-ellipsis overflow-hidden"},t.values.title))}},{accessor:"url",Header:"url",hidden:!0},{accessor:"type",Header:s("fields.type")},{accessor:"author",Header:s("fields.author")}]})),l.createElement(R.Panel,null,l.createElement(w.Z,{data:a,columns:[{accessor:"title",Header:s("fields.title"),Cell:function(e){var t=e.row;return l.createElement("a",{className:"text-"+T.COLOR_PRIMARY+"-600",href:t.values.url},l.createElement("div",{className:"text-"+T.COLOR_PRIMARY+"-600 w-60 overflow-ellipsis overflow-hidden"},t.values.title))}},{accessor:"url",Header:"url",hidden:!0},{accessor:"author",Header:s("fields.author")}]})))))}}}]);
//# sourceMappingURL=component---src-templates-language-jsx-f389d597a65adf0f2110.js.map