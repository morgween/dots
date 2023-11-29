"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[1289],{88552:(e,t,i)=>{i.d(t,{h:()=>h});var s=i(59496),a=i(80576),r=i(88618),l=i(30549),n=i(18173),o=i(49594),c=i(40952),u=i(4637);const d=s.memo((function({sortOptions:e,onSort:t}){const{sortState:i,setSortState:a}=(0,s.useContext)(o.Q),r=(0,s.useCallback)((e=>{const i=c.ei[e];t?.(i),a(i)}),[t,a]),l=e.map((e=>c.MY[e])),d=c.MY[i];return(0,u.jsx)(n.A,{options:l,onSelect:r,selected:d})})),g="collection-searchBar-searchBar",h=s.memo((function({canSort:e,canFilter:t,filterPlaceholder:i,sortOptions:n}){const{spec:o,logger:c}=(0,l.fU)(a.createDesktopSearchBarEventFactory,{}),h=(0,s.useCallback)((()=>{c.logInteraction(o.filterFieldFactory().keyStrokeFilter())}),[c,o]),m=(0,s.useCallback)((()=>{c.logInteraction(o.filterFieldFactory().hitClearFilter())}),[c,o]),y=(0,s.useCallback)((()=>{c.logInteraction(o.sortButtonFactory().hitSort())}),[c,o]);return(0,u.jsxs)("div",{className:g,children:[t?(0,u.jsx)(s.Suspense,{fallback:null,children:(0,u.jsx)(r.K,{placeholder:i,onFilter:h,onClear:m})}):null,e?(0,u.jsx)(d,{sortOptions:n,onSort:y}):null]})}))},78570:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ye});var s=i(59496),a=i(12980),r=i(13803),l=i(31929),n=i(57064),o=i(39341),c=i(19805),u=i(83997),d=i(45846),g=i(56067),h=i(40104),m=i(24919),y=i(67674),p=i(52228),x=i(17118),f=i(35567),b=i(88552),P=i(99120),j=i(52525);const C={[j.yW.NAME]:o.hI.TITLE,[j.yW.SHOW_NAME]:o.hI.SHOW,[j.yW.ADDED_AT]:o.hI.ADDED_AT},k=[d.oT.ADDED_AT,d.oT.CREATOR_NAME,d.oT.EPISODE_ALPHABETICAL],E={[d.oT.ADDED_AT]:{field:j.yW.ADDED_AT,order:j.As.DESC},[d.oT.CREATOR_NAME]:{field:j.yW.SHOW_NAME,order:j.As.ASC},[d.oT.EPISODE_ALPHABETICAL]:{field:j.yW.NAME,order:j.As.ASC}};const S=e=>{if(function(e){return k.includes(e)}(e))return E[e]},A=e=>{if(!k.includes(e))return;const t=S(e);if(!t?.field)return;const i=C[t.field];if(!i)return;return o.Vd[i].map((e=>t.order?`${e} ${t.order}`:e)).join(",")};var I=i(6838);const D="m9xwK71Ieq9cySIq4FAP",w="PkEMTu8sGqJeQWJ7HvEs",T="DbH2KkRA8yVWWpXGaNSW";var v=i(4637);const O=({metadata:e,canSort:t,backgroundColor:i,isPlaying:s,isOnline:a,togglePlay:l})=>{const n=(0,P.y)(),{uri:o,name:c}=e,u=e.totalLength>0,d=(0,I.j)();return(0,v.jsx)(x.o,{backgroundColor:i,children:(0,v.jsxs)(x.F,{children:[u&&(0,v.jsx)(f.$,{onClick:()=>l(),isPlaying:s,size:d,uri:o,disabled:!a,ariaPlayLabel:r.ag.get("playlist.a11y.play",c),ariaPauseLabel:r.ag.get("playlist.a11y.pause",c)}),t&&(0,v.jsx)("div",{className:T,children:(0,v.jsx)(b.h,{canSort:n.getCapabilities().canSort,canFilter:n.getCapabilities().canFilter,filterPlaceholder:r.ag.get("playlist.search_in_playlist"),sortOptions:k})})]})})};var N=i(56161),_=i(99714),M=i(12171),R=i(97533),U=i(94564),L=i(84470),F=i(79152),W=i(92329),$=i(38441);const H="p6DKqBcwmVtxmHt8ju43",z="_OxEpxzAgJiTENfolVUN";var B=i(98004),q=i(51009),G=i(27815),V=i(17294),K=i(39314),Q=i(56961),X=i(30408),Y=i(11874),Z=i(76456),J=i(64109),ee=i(26829),te=i(54940);const ie={small:64,standard:300,large:640,xlarge:1024},se=s.memo((function({index:e,contextUri:t,episode:i,onRemove:a,usePlayContextItem:r}){const l=(0,s.useRef)(i.duration.milliseconds-i.timeLeft.milliseconds),n=i.uri,[o,u]=(0,s.useState)(0===i.timeLeft.milliseconds),{filter:d}=(0,s.useContext)(c.fo),h=(0,B.O)(),m=(0,M.jh)(),p=(0,q.o)(),[x]=(0,P.Z)(n,!0),f=(0,ee.k)(i.uri,i.isPlayable),b=(0,g.k)(),j=(0,Q.Y)((e=>{if(e?.item?.uri===i.uri){const t=(0,X.k)(e)??0;return l.current=t,t}return 0})),{isPlaying:C,isActive:k,togglePlay:E}=r({uri:n,index:e}),{isPlaying:S,isActive:A,togglePlay:I}=(0,y.n)({uri:n,pages:[{items:[{type:Y.p.EPISODE,uri:n,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,s.useEffect)((()=>{x||a()}),[x,a]),(0,s.useEffect)((()=>{C||i.duration.milliseconds<=l.current&&u(!0)}),[C,i.duration.milliseconds]);const D=(0,s.useCallback)((e=>{e||(l.current=0),u(e)}),[]),w=e=>{if(e.target!==e.currentTarget)return;let s=`${i.name}`;i.show&&(s+=` • ${i.show.name}`),h(e,[n],s,t)},T=(0,s.useCallback)((()=>{p({type:"click",targetUri:n,intent:"navigate"})}),[n,p]),O=(0,s.useCallback)((()=>{b?(p({type:"click",intent:C?"pause":"play"}),E()):(p({type:"click",intent:S?"pause":"play"}),I())}),[b,C,S,p,E,I]),N=(0,s.useCallback)((e=>(0,v.jsx)(J.o,{searchWords:[d],textToHighlight:e})),[d]),z=i.podcastSubscription?.isPaywalled??!1,se=i.podcastSubscription?.isUserSubscribed??!1,{badges:ae}=(0,Z.r)({isExplicit:i.isExplicit,isMOGEFRestricted:i.is19PlusOnly,isPaywalled:z});let re=!1;(k||!b&&A)&&(re=!0);const le=(0,R.W6)(te.eli,{loadingValue:!1});return x?(0,v.jsxs)(_.ZP,{value:"row",index:e,children:[(0,v.jsx)("hr",{className:H,"aria-hidden":!0}),(0,v.jsx)(G._,{menu:(0,v.jsx)(U.k,{uri:n,showUri:i.show?.uri,isPlayed:o,onMarkAsPlayed:D}),children:le?(0,v.jsx)(F.k,{requestId:i.requestId,index:e,uri:n,uid:n,size:m,images:i.images.map((e=>({url:e.url,width:e.width||(e.label?ie[e.label]:null),height:e.height||(e.label?ie[e.label]:null)}))),isPaywalled:z,isUserSubscribed:se,name:i.name,highlightText:N,showName:i.show?.name,showUri:i.show?.uri,description:i.description,isPlayable:f,fullyPlayed:o,durationMs:i.duration.milliseconds,releaseDate:i.release.date||"",resumePositionMs:l.current,handleDragStart:w,handlePlaybackClick:O,handleClick:T,isCurrentlyPlaying:re,isPlaying:b?C:S,position:re?j:void 0,episodeSharingInfo:null,onMarkAsPlayed:D,badges:(0,v.jsxs)(v.Fragment,{children:[ae.explicit&&(0,v.jsx)(V.N,{}),ae.paid&&(0,v.jsx)($.g,{}),ae.nineteen&&(0,v.jsx)(K.X,{size:16})]}),playButtonWrapper:e=>(0,v.jsx)(W.l,{enabled:z&&!se,showUri:i.show?.uri||void 0,children:e})}):(0,v.jsx)(L.X,{requestId:i.requestId,index:e,uri:n,uid:n,size:m,images:i.images.map((e=>({url:e.url,width:e.width||(e.label?ie[e.label]:null),height:e.height||(e.label?ie[e.label]:null)}))),isPaywalled:z,isUserSubscribed:se,name:i.name,highlightText:N,showName:i.show?.name,showUri:i.show?.uri,description:i.description,isPlayable:f,fullyPlayed:o,durationMs:i.duration.milliseconds,releaseDate:i.release.date||"",resumePositionMs:l.current,handleDragStart:w,handlePlaybackClick:O,handleClick:T,isCurrentlyPlaying:re,isPlaying:b?C:S,position:re?j:void 0,episodeSharingInfo:null,onMarkAsPlayed:D,badges:(0,v.jsxs)(v.Fragment,{children:[ae.explicit&&(0,v.jsx)(V.N,{}),ae.paid&&(0,v.jsx)($.g,{}),ae.nineteen&&(0,v.jsx)(K.X,{size:16})]}),playButtonWrapper:e=>(0,v.jsx)(W.l,{enabled:z&&!se,showUri:i.show?.uri||void 0,children:e})})})]}):null})),ae=s.memo((function({contextUri:e,usePlayContextItem:t}){const i=(0,s.useContext)(m.H),{sortState:a}=(0,s.useContext)(u.Q),[r,l]=(0,s.useState)({totalLength:0,unfilteredTotalLength:0,offset:0,items:[],limit:50}),n=(0,s.useRef)(!1),o=(0,s.useRef)(0),d=(0,s.useRef)(0),{filter:g}=(0,s.useContext)(c.fo),h=(0,s.useCallback)((()=>{d.current++}),[]),{ref:y,breakpoint:p}=(0,M.Db)({[M.Uo.MEDIUM]:0,[M.Uo.LARGE]:600}),x=(0,s.useCallback)(((e=!1)=>{const t=o.current;null!==t&&(n.current||(n.current=!0,(async e=>{const t=await i.getEpisodes({offset:e-d.current,limit:50,sort:S(a),filter:g});return d.current=0,t})(Number(t)).then((i=>{l((s=>{const a=Number(i.offset)+i.items.length,r=e?[]:[...s.items];return r.splice(Number(t),i.items.length,...i.items),o.current=a<i.totalLength?a:null,{...i,items:r}})),n.current=!1}))))}),[g,i,a]);return(0,s.useEffect)((()=>{o.current=0,x(!0)}),[x]),(0,v.jsx)(M.ZU.Provider,{value:p,children:(0,v.jsx)(_.ZP,{value:"track-list",children:(0,v.jsx)("div",{ref:y,children:(0,v.jsx)(N.C,{onReachBottom:x,triggerOnInitialLoad:!0,children:r.items.map(((i,s)=>(0,v.jsx)("div",{className:z,children:(0,v.jsx)(se,{index:s,episode:i,contextUri:e,onRemove:h,usePlayContextItem:t},`${i.uri}/${s}`)},`${s}${i.uri}`)))})})})})}));var re=i(2988),le=i(4533),ne=i(86857),oe=i(92142),ce=i(94717),ue=i(46625);const de=({metadata:e,backgroundColor:t,isPlaying:i,isOnline:a,togglePlay:l})=>{const{uri:n,name:o,images:c,totalLength:u,owner:d}=e,g=(0,s.useMemo)((()=>({id:d.username,uri:d.uri,name:d.username,displayName:d.displayName||void 0,images:d.images||[]})),[d]);return(0,v.jsxs)(le.gF,{backgroundColor:t,children:[(0,v.jsxs)(ne.W,{children:[(0,v.jsx)(f.$,{size:"medium",onClick:()=>l(),isPlaying:i,uri:n,disabled:!a,ariaPlayLabel:r.ag.get("playlist.a11y.play",o),ariaPauseLabel:r.ag.get("playlist.a11y.pause",o)}),(0,v.jsx)(oe.i,{text:o})]}),(0,v.jsx)(le.Oz,{images:c,name:o,shape:ce.K.ROUNDED_CORNERS,renderImage:()=>(0,v.jsx)(ue.$,{})}),(0,v.jsxs)(le.sP,{children:[(0,v.jsx)(re.D,{variant:"mestoBold",children:r.ag.get("playlist")}),(0,v.jsx)(le.xd,{canEdit:!1,onClick:()=>{},children:o}),(0,v.jsx)(le.QS,{creators:[g],totalItems:u,hasEpisodes:!0})]})]})};var ge=i(94190),he=i(24786);const me=({metadata:e,canSort:t})=>{const i=(0,h.Y5)("#006450"),n=(0,g.k)(),{sortState:d}=(0,s.useContext)(u.Q),{filter:m}=(0,s.useContext)(c.fo),{isPlaying:x,togglePlay:f,usePlayContextItem:b}=(0,y.n)({uri:e.uri,metadata:{[p.sb.SORTING_CRITERIA]:A(d),[p.sb.FILTERING_PREDICATE]:(0,o.aK)(m)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});return(0,v.jsxs)("section",{className:w,"data-testid":"your-episodes-page",children:[(0,v.jsx)(ge.$,{children:r.ag.get("sidebar.your_episodes")}),(0,v.jsx)(de,{metadata:e,backgroundColor:i,isPlaying:x,isOnline:n,togglePlay:f}),(0,v.jsxs)("div",{className:D,children:[(0,v.jsx)(O,{metadata:e,backgroundColor:i,isPlaying:x,isOnline:n,togglePlay:f,canSort:t}),(0,v.jsx)("div",{className:"contentSpacing",children:e.totalLength>0?(0,v.jsx)(ae,{contextUri:e.uri,usePlayContextItem:b}):(0,v.jsx)(l.u,{message:r.ag.get("collection.empty-page.episodes-subtitle"),title:r.ag.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:r.ag.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,v.jsx)(a.G,{"aria-hidden":"true"})})})]})]})},ye=(0,s.memo)((function(){const e=(0,s.useContext)(m.H).getCapabilities(),t=(0,he.x)();return t?(0,v.jsx)(u.$,{uri:t.uri,defaultSortOption:d.oT.ADDED_AT,children:(0,v.jsx)(c.hz,{uri:t.uri,children:(0,v.jsx)(me,{metadata:t,canSort:e.canSortTracksAndEpisodes&&t.totalLength>0})})}):(0,v.jsx)(n.h,{hasError:!1,errorMessage:r.ag.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}))}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map