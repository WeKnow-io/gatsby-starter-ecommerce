(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{268:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(7)),n=i(a(36)),l=i(a(84)),o=i(a(58)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+i+"<img "+l+o+a+r+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,d=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:r},u,{onLoad:n,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:s,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,l=void 0===n?{}:n,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,v=e.Tag,S=e.itemProp,w="boolean"==typeof y?"lightgray":y,N=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),E=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),j={title:t,alt:this.state.isVisible?"":a,style:N,className:p};if(h){var O=h;return c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),O.base64&&c.default.createElement(g,(0,o.default)({src:O.base64},j)),O.tracedSVG&&c.default.createElement(g,(0,o.default)({src:O.tracedSVG},j)),w&&c.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(g,{alt:a,title:t,sizes:O.sizes,src:O.src,srcSet:O.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,o.default)({alt:a,title:t},O))}}))}if(m){var L=m,k=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},s);return"inherit"===s.display&&delete k.display,c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&c.default.createElement(g,(0,o.default)({src:L.base64},j)),L.tracedSVG&&c.default.createElement(g,(0,o.default)({src:L.tracedSVG},j)),w&&c.default.createElement(v,{title:t,style:{backgroundColor:w,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement(g,{alt:a,title:t,width:L.width,height:L.height,sizes:L.sizes,src:L.src,srcSet:L.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,o.default)({alt:a,title:t,width:L.width,height:L.height},L))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=y;t.default=w},566:function(e,t,a){"use strict";var i=a(58),r=a.n(i),s=a(172),n=a.n(s),l=a(173),o=a.n(l),c=a(174),d=a.n(c),u=a(171),f=a.n(u),p=a(175),h=a.n(p),m=a(36),b=a.n(m),g=a(35),y=a.n(g),v=a(168),S=a.n(v),w=(a(4),a(0)),N=a.n(w),E=a(204),j=a(359),O=a(360),L=a(167),k=a(559),R=(a(180),a(363));function x(e){var t=e.children,a=e.className,i=e.content,s=e.textAlign,n=S()(Object(E.d)(s),"description",a),l=Object(j.a)(x,e),o=Object(O.a)(x,e);return N.a.createElement(o,r()({},l,{className:n}),L.b.isNil(t)?i:t)}x.handledProps=["as","children","className","content","textAlign"],x.propTypes={};var I=x;function C(e){var t=e.children,a=e.className,i=e.content,s=e.textAlign,n=S()(Object(E.d)(s),"header",a),l=Object(j.a)(C,e),o=Object(O.a)(C,e);return N.a.createElement(o,r()({},l,{className:n}),L.b.isNil(t)?i:t)}C.handledProps=["as","children","className","content","textAlign"],C.propTypes={};var z=C;function T(e){var t=e.children,a=e.className,i=e.content,s=e.textAlign,n=S()(Object(E.d)(s),"meta",a),l=Object(j.a)(T,e),o=Object(O.a)(T,e);return N.a.createElement(o,r()({},l,{className:n}),L.b.isNil(t)?i:t)}T.handledProps=["as","children","className","content","textAlign"],T.propTypes={};var P=T;function V(e){var t=e.children,a=e.className,i=e.content,s=e.description,n=e.extra,l=e.header,o=e.meta,c=e.textAlign,d=S()(Object(E.a)(n,"extra"),Object(E.d)(c),"content",a),u=Object(j.a)(V,e),f=Object(O.a)(V,e);return L.b.isNil(t)?L.b.isNil(i)?N.a.createElement(f,r()({},u,{className:d}),Object(R.d)(z,function(e){return{content:e}},l,{autoGenerateKey:!1}),Object(R.d)(P,function(e){return{content:e}},o,{autoGenerateKey:!1}),Object(R.d)(I,function(e){return{content:e}},s,{autoGenerateKey:!1})):N.a.createElement(f,r()({},u,{className:d}),i):N.a.createElement(f,r()({},u,{className:d}),t)}V.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],V.propTypes={};var A=V,G=a(184),W=a.n(G);function q(e){var t=e.centered,a=e.children,i=e.className,s=e.content,n=e.doubling,l=e.items,o=e.itemsPerRow,c=e.stackable,d=e.textAlign,u=S()("ui",Object(E.a)(t,"centered"),Object(E.a)(n,"doubling"),Object(E.a)(c,"stackable"),Object(E.d)(d),Object(E.g)(o),"cards",i),f=Object(j.a)(q,e),p=Object(O.a)(q,e);if(!L.b.isNil(a))return N.a.createElement(p,r()({},f,{className:u}),a);if(!L.b.isNil(s))return N.a.createElement(p,r()({},f,{className:u}),s);var h=W()(l,function(e){var t=e.key||[e.header,e.description].join("-");return N.a.createElement(M,r()({key:t},e))});return N.a.createElement(p,r()({},f,{className:u}),h)}q.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],q.propTypes={};var D=q;a.d(t,"a",function(){return M});var M=function(e){function t(){var e,a;n()(this,t);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return a=d()(this,(e=f()(t)).call.apply(e,[this].concat(r))),y()(b()(b()(a)),"handleClick",function(e){var t=a.props.onClick;t&&t(e,a.props)}),a}return h()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,a=e.centered,i=e.children,s=e.className,n=e.color,l=e.content,o=e.description,c=e.extra,d=e.fluid,u=e.header,f=e.href,p=e.image,h=e.link,m=e.meta,b=e.onClick,g=e.raised,y=S()("ui",n,Object(E.a)(a,"centered"),Object(E.a)(d,"fluid"),Object(E.a)(h,"link"),Object(E.a)(g,"raised"),"card",s),v=Object(j.a)(t,this.props),w=Object(O.a)(t,this.props,function(){if(b)return"a"});return L.b.isNil(i)?L.b.isNil(l)?N.a.createElement(w,r()({},v,{className:y,href:f,onClick:this.handleClick}),k.a.create(p,{autoGenerateKey:!1}),(o||u||m)&&N.a.createElement(A,{description:o,header:u,meta:m}),c&&N.a.createElement(A,{extra:!0},c)):N.a.createElement(w,r()({},v,{className:y,href:f,onClick:this.handleClick}),l):N.a.createElement(w,r()({},v,{className:y,href:f,onClick:this.handleClick}),i)}}]),t}(w.Component);y()(M,"Content",A),y()(M,"Description",I),y()(M,"Group",D),y()(M,"Header",z),y()(M,"Meta",P),y()(M,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]),M.propTypes={}}}]);
//# sourceMappingURL=17-341027a03cf5d213e80c.js.map