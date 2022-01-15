import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (0c10378)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{Image,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,Stack}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const enabledGestures={"XFG_AUcms":{"hover":true}};const cycleOrder=["XFG_AUcms","h70rjap5W","aXD6CoVgI"];const variantClassNames={"XFG_AUcms":"framer-v-kktsyq","h70rjap5W":"framer-v-1ahzgj8","aXD6CoVgI":"framer-v-somio5"};const humanReadableVariantMap={"Variant 1":"XFG_AUcms","Variant 2":"h70rjap5W","Variant 3":"aXD6CoVgI"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,width,height,layoutId,variant:outerVariant="XFG_AUcms",label:KATAjsp0J="Online Ausstellung",title:MDvunIxwy="Erweiterung des Zentrums Deutscher Sinti und Roma",subtitle:uqz0_xeuy="Ein Zusammentreffen in zwei Teilen",text:RAnuXkYcm="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.",image:veU7b2lbM=new URL("assets/tPs6THCX3AC6DXxqa4unewdvwmQ.jpg",import.meta.url).href,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"XFG_AUcms",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const variantProps=React.useMemo(()=>({"h70rjap5W":{"XFG_AUcms":{"gap":0,"data-framer-name":"Variant 2","__contentWrapperStyle":{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"}},"iQnxfipha":{"gap":8,"data-border":false,"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"8px 16px 8px 16px"}},"ekG5yp03w":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Erweiterung des Zentrums Deutscher Sinti und Roma</span><br></span></span>","alignment":"left","fonts":["CUSTOM;Euclid Circular A Semibold"]},"tBr4qEipI":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Ein Zusammentreffen in zwei Teilen</span><br></span></span>","alignment":"left","fonts":["CUSTOM;Euclid Circular A Semibold"]},"f4q86BNRJ":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Online Ausstellung</span><br></span></span>","fonts":["CUSTOM;Euclid Circular A Semibold"]},"tWr8_TUpq":{"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"16px 16px 16px 16px"}},"ODDzOEb1R":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.</span><br></span></span>","fonts":["CUSTOM;Euclid Circular A Semibold"]}},"aXD6CoVgI":{"XFG_AUcms":{"gap":0,"data-framer-name":"Variant 3","__contentWrapperStyle":{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"}},"iQnxfipha":{"gap":0,"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"16px 16px 16px 16px"}},"ekG5yp03w":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Erweiterung des Zentrums Deutscher Sinti und Roma</span><br></span></span>","alignment":"left","fonts":["CUSTOM;Euclid Circular A Semibold"]},"tBr4qEipI":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Ein Zusammentreffen in zwei Teilen</span><br></span></span>","alignment":"left","fonts":["CUSTOM;Euclid Circular A Semibold"]},"fAwqjOowV":{"center":false,"data-border":true,"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"8px 16px 8px 16px"}},"f4q86BNRJ":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Online Ausstellung</span><br></span></span>","fonts":["CUSTOM;Euclid Circular A Semibold"]},"tWr8_TUpq":{"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"9px 16px 16px 16px"}},"ODDzOEb1R":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.</span><br></span></span>","fonts":["CUSTOM;Euclid Circular A Semibold"]}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-NzQeL",classNames),style:{"display":"contents","pointerEvents":"auto"},children:/*#__PURE__*/ _jsxs(Stack,{...restProps,layoutId:"XFG_AUcms",className:cx("framer-kktsyq",className),style:{"borderBottomLeftRadius":4,"borderBottomRightRadius":4,"borderTopRightRadius":4,"borderTopLeftRadius":4,"backgroundColor":"rgb(255, 255, 255)","WebkitFilter":"none","filter":"none","boxShadow":"none",...style},direction:"vertical",distribution:"start",alignment:"start",gap:0,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,"data-framer-name":"Variant 1",variants:{"XFG_AUcms-hover":{"WebkitFilter":"none","filter":"none","boxShadow":"4px 4px 20px 0px rgba(0,0,0,0.25)"},"h70rjap5W":{"WebkitFilter":"none","filter":"none","boxShadow":"none"},"aXD6CoVgI":{"WebkitFilter":"none","filter":"none","boxShadow":"none"}},transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("XFG_AUcms"),children:[/*#__PURE__*/ _jsx(Image,{layoutId:"vjdciVPJO",className:"framer-13wklkv",style:{"WebkitFilter":"grayscale(1)","filter":"grayscale(1)","boxShadow":"none"},background:{"src":veU7b2lbM,"pixelWidth":3992,"pixelHeight":2362,"intrinsicWidth":3992,"intrinsicHeight":2362,"fit":"fill"},"data-framer-name":"Variant 1",variants:{"XFG_AUcms-hover":{"WebkitFilter":"grayscale(0)","filter":"grayscale(0)","boxShadow":"none"},"aXD6CoVgI":{"WebkitFilter":"grayscale(0)","filter":"grayscale(0)","boxShadow":"none"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("vjdciVPJO")}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"iQnxfipha",className:"framer-nnotp0",style:{"--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px","--border-bottom-width":"1px","--border-style":"solid","--border-color":"var(--token-9830f8fb-4e37-4de9-82db-10bcc4b754f2, rgb(143, 143, 143)) /* {\"name\":\"dark-default gray\"} */","backgroundColor":"transparent"},background:null,direction:"vertical",distribution:"start",alignment:"center",gap:8,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"12px 16px 12px 16px"},center:false,"data-framer-name":"Heading","data-border":true,variants:{"h70rjap5W":{"--border-bottom-width":"0px","--border-top-width":"0px","--border-right-width":"0px","--border-left-width":"0px","backgroundColor":"var(--token-b8ba6fc4-6145-4f7f-91cf-8aee60ede4a1, rgb(255, 234, 0))"},"aXD6CoVgI":{"backgroundColor":"var(--token-b8ba6fc4-6145-4f7f-91cf-8aee60ede4a1, rgb(255, 234, 0))"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("iQnxfipha"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Euclid Circular A Semibold\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-36b50157-6052-4b93-817e-5e10bf0a52ce, rgb(64, 64, 64))","--framer-font-size":"18px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"left"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,alignment:"left",fonts:["CUSTOM;Euclid Circular A Semibold"],layoutId:"ekG5yp03w",className:"framer-po5zgb",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Erweiterung des Zentrums Deutscher Sinti und Roma</span><br></span></span>",text:MDvunIxwy,variants:{"h70rjap5W":{"--framer-font-size":"22px"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("ekG5yp03w")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Euclid Circular A Semibold\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-9830f8fb-4e37-4de9-82db-10bcc4b754f2, rgb(143, 143, 143))","--framer-font-size":"18px","--framer-letter-spacing":"0.5px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"left"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,alignment:"left",fonts:["CUSTOM;Euclid Circular A Semibold"],layoutId:"tBr4qEipI",className:"framer-13snhxu",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Ein Zusammentreffen in zwei Teilen</span><br></span></span>",text:uqz0_xeuy,variants:{"h70rjap5W":{"--framer-font-size":"16px"},"aXD6CoVgI":{"--framer-font-family":"\"Euclid Circular A Semibold\", serif","--framer-font-style":"normal","--framer-font-weight":400}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("tBr4qEipI")})]}),/*#__PURE__*/ _jsx(Stack,{layoutId:"fAwqjOowV",className:"framer-1thc0wa",style:{"--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px","--border-bottom-width":"1px","--border-style":"solid","--border-color":"var(--token-9830f8fb-4e37-4de9-82db-10bcc4b754f2, rgb(143, 143, 143)) /* {\"name\":\"dark-default gray\"} */","backgroundColor":"transparent","borderTopLeftRadius":0,"borderTopRightRadius":0,"borderBottomRightRadius":0,"borderBottomLeftRadius":0},background:null,direction:"horizontal",distribution:"space-evenly",alignment:"center",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"100%","padding":"0px 16px 0px 16px"},center:false,"data-framer-name":"Label","data-border":true,variants:{"h70rjap5W":{"backgroundColor":"var(--token-9830f8fb-4e37-4de9-82db-10bcc4b754f2, rgb(120, 120, 120))"},"aXD6CoVgI":{"--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px","--border-bottom-width":"3px","--border-style":"solid","--border-color":"var(--token-9830f8fb-4e37-4de9-82db-10bcc4b754f2, rgb(143, 143, 143)) /* {\"name\":\"dark-default gray\"} */","borderTopLeftRadius":0,"borderTopRightRadius":0,"borderBottomRightRadius":0,"borderBottomLeftRadius":0,"backgroundColor":"var(--token-9830f8fb-4e37-4de9-82db-10bcc4b754f2, rgb(120, 120, 120))"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("fAwqjOowV"),children:/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Euclid Circular A Semibold\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-36b50157-6052-4b93-817e-5e10bf0a52ce, rgb(64, 64, 64))","--framer-font-size":"12px","--framer-letter-spacing":"0.5px","--framer-text-transform":"uppercase","--framer-text-decoration":"none","--framer-line-height":"1.6em","--framer-text-alignment":"start"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["CUSTOM;Euclid Circular A Semibold"],layoutId:"f4q86BNRJ",className:"framer-2amy1n",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Online Ausstellung</span><br></span></span>",text:KATAjsp0J,variants:{"h70rjap5W":{"--framer-font-size":"14px"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("f4q86BNRJ")})}),/*#__PURE__*/ _jsx(Stack,{layoutId:"tWr8_TUpq",className:"framer-2r0vpz",style:{"backgroundColor":"transparent"},background:null,direction:"vertical",distribution:"start",alignment:"start",gap:11,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"8px 16px 16px 16px"},center:false,"data-framer-name":"Text",variants:{"aXD6CoVgI":{"backgroundColor":"rgb(210, 208, 208)"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("tWr8_TUpq"),children:/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Euclid Circular A Regular\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-36b50157-6052-4b93-817e-5e10bf0a52ce, rgb(64, 64, 64))","--framer-font-size":"14px","--framer-letter-spacing":"0.1px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.4em","--framer-text-alignment":"start"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["CUSTOM;Euclid Circular A Regular"],layoutId:"ODDzOEb1R",className:"framer-439eh1",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.</span><br></span></span>",text:RAnuXkYcm,variants:{"h70rjap5W":{"--framer-font-family":"\"Euclid Circular A Semibold\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-line-height":"1.4em"},"aXD6CoVgI":{"--framer-font-family":"\"Euclid Circular A Semibold\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-letter-spacing":"0.3px"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("ODDzOEb1R")})})]})})}));});const css=[".framer-NzQeL [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-NzQeL * { box-sizing: border-box; }",".framer-NzQeL .framer-kktsyq { position: relative; overflow: visible; width: 392px; height: min-content; }",".framer-NzQeL .framer-13wklkv { position: relative; overflow: visible; width: 100%; height: 239px; flex: none; }",".framer-NzQeL .framer-nnotp0, .framer-NzQeL .framer-2r0vpz { position: relative; overflow: visible; width: 100%; height: min-content; flex: none; }",".framer-NzQeL .framer-po5zgb, .framer-NzQeL .framer-13snhxu, .framer-NzQeL .framer-439eh1 { position: relative; overflow: hidden; width: 100%; height: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-NzQeL .framer-1thc0wa { position: relative; overflow: visible; width: 100%; height: 27px; flex: none; }",".framer-NzQeL .framer-2amy1n { position: relative; overflow: hidden; width: 1px; height: auto; flex: 1 0 0px; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-NzQeL.framer-v-kktsyq .framer-kktsyq { cursor: pointer; }",".framer-NzQeL.framer-v-somio5 .framer-1thc0wa { width: 100%; height: min-content; right: auto; bottom: auto; left: auto; top: auto; flex: none; aspect-ratio: unset; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 480
 * @framerIntrinsicWidth 392
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "auto"]}, "pk_ezP1HS": {"layout": ["fixed", "auto"]}, "h70rjap5W": {"layout": ["fixed", "auto"]}, "aXD6CoVgI": {"layout": ["fixed", "auto"]}}}
 * @framerVariables {"KATAjsp0J": "label", "MDvunIxwy": "title", "uqz0_xeuy": "subtitle", "RAnuXkYcm": "text", "veU7b2lbM": "image"}
 */ const FramerV_W0ZV7Sx=withCSS(Component,css);export default FramerV_W0ZV7Sx;FramerV_W0ZV7Sx.displayName="cards/event";FramerV_W0ZV7Sx.defaultProps={"width":392,"height":480};addPropertyControls(FramerV_W0ZV7Sx,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["XFG_AUcms","h70rjap5W","aXD6CoVgI"],"optionTitles":["Variant 1","Variant 2","Variant 3"]},"KATAjsp0J":{"type":ControlType.String,"title":"Label","defaultValue":"Online Ausstellung","displayTextArea":false},"MDvunIxwy":{"type":ControlType.String,"title":"Title","defaultValue":"Erweiterung des Zentrums Deutscher Sinti und Roma","displayTextArea":false},"uqz0_xeuy":{"type":ControlType.String,"title":"Subtitle","defaultValue":"Ein Zusammentreffen in zwei Teilen","displayTextArea":false},"RAnuXkYcm":{"type":ControlType.String,"title":"Text","defaultValue":"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.","displayTextArea":false},"veU7b2lbM":{"type":ControlType.Image,"title":"Image","__defaultAssetReference":"data:framer/asset-reference,tPs6THCX3AC6DXxqa4unewdvwmQ.jpg?originalFilename=mediathek-8.jpg&preferredSize=medium"}});addFonts(FramerV_W0ZV7Sx,[{"url":new URL("assets/AHvDH2HGlkkPi44947XbiayKn1o.otf",import.meta.url).href,"family":"Euclid Circular A Semibold","moduleAsset":{"url":"assets/AHvDH2HGlkkPi44947XbiayKn1o.otf","localModuleIdentifier":"local-module:canvasComponent/V_W0ZV7Sx:default"}},{"url":new URL("assets/a5V4uMPFxEaRVUNSELnluxZoFM4.otf",import.meta.url).href,"family":"Euclid Circular A Regular","moduleAsset":{"url":"assets/a5V4uMPFxEaRVUNSELnluxZoFM4.otf","localModuleIdentifier":"local-module:canvasComponent/V_W0ZV7Sx:default"}}]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerV_W0ZV7Sx","slots":[],"annotations":{"framerIntrinsicHeight":"480","framerIntrinsicWidth":"392","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"auto\"]}, \"pk_ezP1HS\": {\"layout\": [\"fixed\", \"auto\"]}, \"h70rjap5W\": {\"layout\": [\"fixed\", \"auto\"]}, \"aXD6CoVgI\": {\"layout\": [\"fixed\", \"auto\"]}}}","framerVariables":"{\"KATAjsp0J\": \"label\", \"MDvunIxwy\": \"title\", \"uqz0_xeuy\": \"subtitle\", \"RAnuXkYcm\": \"text\", \"veU7b2lbM\": \"image\"}","framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./V_W0ZV7Sx.map