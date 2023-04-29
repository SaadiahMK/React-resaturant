;/*FB_PKG_DELIM*/

__d("CometFocusTableContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({FocusCell:null,FocusRow:null,FocusTable:null});g["default"]=b}),98);
__d("BaseToasterStateManagerContext.react",["BaseToasterStateManager","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("BaseToasterStateManager").getInstance());g["default"]=b}),98);
__d("useToasterStateManager",["BaseToasterStateManagerContext.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){return h(c("BaseToasterStateManagerContext.react"))}g["default"]=a}),98);
__d("useSetAttributeRef",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a,b){return h(function(c){c!=null&&c.setAttribute(a,b)},[a,b])}g["default"]=a}),98);
__d("getCometBadgeColorStyle",["unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h={blue:{backgroundColor:"xwnonoy",$$css:!0},darkGray:{backgroundColor:"xhazfnh",$$css:!0},gray:{backgroundColor:"x1d2osyd",$$css:!0},green:{backgroundColor:"xv9rvxn",$$css:!0},lightBlue:{backgroundColor:"xfmpgtx",$$css:!0},red:{backgroundColor:"x1cdvf7c",$$css:!0},yellow:{backgroundColor:"xacajkf",$$css:!0}};function a(a){switch(a){case"blue":return h.blue;case"gray":return h.gray;case"darkGray":return h.darkGray;case"green":return h.green;case"lightBlue":return h.lightBlue;case"red":return h.red;case"yellow":return h.yellow;default:a;throw c("unrecoverableViolation")(" Invalid color in getCometBadgeColorStyle","comet_ui")}}g["default"]=a}),98);
__d("useServerTime",["JSScheduler","ServerTime","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useState,j=6e4,k=new Set(),l=null,m=!1;function n(){k.forEach(function(a){return a()}),m=!1}function o(a){a===void 0&&(a=j),l=window.setInterval(function(){m||(m=!0,d("JSScheduler").scheduleSpeculativeCallback(n))},a)}function p(){k.size===0&&(window.clearInterval(l),l=null)}function q(a,b){b===void 0&&(b=j);k.add(a);l==null&&o(b);return function(){k["delete"](a),p()}}function r(){return new Date(d("ServerTime").getMillis())}function a(a){a===void 0&&(a=j);var b=i(function(){return r()}),c=b[0],d=b[1],e=function(){return d(r())};h(function(){return q(e,a)},[a]);return c}g["default"]=a}),98);
__d("CometRelativeTimestamp.react",["fbt","react","useServerTime"],(function(a,b,c,d,e,f,g,h){"use strict";e=d("react");function i(a,b){if(b==="minimized")return h._("1m");else if(b==="shortened")return h._("Just now");return h._("a few seconds ago")}function j(a,b){return b==="minimized"?h._("1m"):h._("in a few seconds")}function k(a,b){if(b==="minimized")return h._({"*":"{minutes}m"},[h._param("minutes",a,[0])]);else if(b==="shortened")return h._({"*":"{number} mins","_1":"1 min"},[h._plural(a,"number")]);return h._({"*":"{number} minutes ago","_1":"about a minute ago"},[h._plural(a,"number")])}function l(a,b){if(b==="minimized")return h._({"*":"in {minutes}m"},[h._param("minutes",a,[0])]);else if(b==="shortened")return h._({"*":"in {number} mins","_1":"in 1 min"},[h._plural(a,"number")]);return h._({"*":"in {number} minutes","_1":"in about a minute"},[h._plural(a,"number")])}function m(a,b){if(b==="minimized")return h._("{hours}h",[h._param("hours",a)]);else if(b==="shortened")return h._({"*":"{number} hrs","_1":"1 hr"},[h._plural(a,"number")]);return h._({"*":"{number} hours ago","_1":"about an hour ago"},[h._plural(a,"number")])}function n(a,b){if(b==="minimized")return h._("in {hours}h",[h._param("hours",a)]);else if(b==="shortened")return h._({"*":"in {number} hrs","_1":"in 1 hr"},[h._plural(a,"number")]);return h._({"*":"in {number} hours","_1":"in about an hour"},[h._plural(a,"number")])}function o(a,b){if(b==="minimized")return h._("{days}d",[h._param("days",a)]);else if(b==="shortened")return h._({"*":"{number} days","_1":"1 day"},[h._plural(a,"number")]);return h._({"*":"{number} days ago","_1":"a day ago"},[h._plural(a,"number")])}function p(a,b){if(b==="minimized")return h._("in {days}d",[h._param("days",a)]);else if(b==="shortened")return h._({"*":"in {number} days","_1":"in 1 day"},[h._plural(a,"number")]);return h._({"*":"in {number} days","_1":"in a day"},[h._plural(a,"number")])}function q(a,b){if(b==="minimized")return h._("{weeks}w",[h._param("weeks",a)]);else if(b==="shortened")return h._({"*":"{number} wks","_1":"1 wk"},[h._plural(a,"number")]);return h._({"*":"{number} weeks ago","_1":"a week ago"},[h._plural(a,"number")])}function r(a,b){if(b==="minimized")return h._("in {weeks}w",[h._param("weeks",a)]);else if(b==="shortened")return h._({"*":"in {number} wks","_1":"in 1 wk"},[h._plural(a,"number")]);return h._({"*":"in {number} weeks","_1":"in a week"},[h._plural(a,"number")])}function s(a,b){if(b==="minimized")return h._("{years}y",[h._param("years",a)]);else if(b==="shortened")return h._({"*":"{number} yrs","_1":"1 yr"},[h._plural(a,"number")]);return h._({"*":"{number} years ago","_1":"a year ago"},[h._plural(a,"number")])}function t(a,b){if(b==="minimized")return h._("in {years}y",[h._param("years",a)]);else if(b==="shortened")return h._({"*":"in {number} yrs","_1":"in 1 yr"},[h._plural(a,"number")]);return h._({"*":"in {number} years","_1":"in a year"},[h._plural(a,"number")])}var u=60,v=60,w=24,x=7,y=365;function z(a,b,c){c===void 0&&(c="normal");a=(a.valueOf()-b.valueOf())/1e3;if(a<u)return i(a,c);b=a/u;a=Math.floor(b);if(a<v)return k(a,c);a=b/v;b=Math.floor(a);if(b<w)return m(b,c);b=a/w;a=Math.floor(b);if(a<x)return o(a,c);else if(b<y){a=Math.floor(b/x);return q(a,c)}a=Math.floor(b/y);return s(a,c)}function a(a,b,c){c===void 0&&(c="normal");b=(b.valueOf()-a.valueOf())/1e3;if(b<u)return j(b,c);a=b/u;b=Math.floor(a);if(b<v)return l(b,c);b=a/v;a=Math.floor(a/v);if(a<w)return n(a,c);a=b/w;b=Math.floor(a);if(b<x)return p(b,c);else if(a<y){b=Math.floor(a/x);return r(b,c)}b=Math.floor(a/y);return t(b,c)}function b(a){var b=a.date;a=a.format;var d=c("useServerTime")();d=z(d,b,a);return d}b.displayName=b.name+" [from "+f.id+"]";b.getRelativeTimestamp=z;b.getRelativeTimestampInFuture=a;g["default"]=b}),98);
__d("TetraProfilePhoto.react",["CometProfilePhoto.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){return h.jsx(c("CometProfilePhoto.react"),babelHelpers["extends"]({},a,{ref:b}))}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("TetraButtonGroup.react",["CometFocusTableContext","CometRow.react","CometRowItem.react","TetraButton.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j={hiddenButton:{height:"xqtp20y",overflowX:"x6ikm8r",overflowY:"x10wlt62",visibility:"xlshs6z",$$css:!0},resetFlexBasis:{flexBasis:"xdl72j9",$$css:!0}},k="secondary";function l(a){var b=i(c("CometFocusTableContext"));b=b.FocusCell;a=a.children;return b!=null?h.jsx(b,{children:a}):a}l.displayName=l.name+" [from "+f.id+"]";function a(a){var b=a.align,d=b===void 0?"justify":b;b=a.direction;b=b===void 0?"forward":b;var e=a.expanding;e=e===void 0?!1:e;var f=a.paddingHorizontal,g=a.paddingTop,i=a.paddingVertical,m=a.primary,n=a.secondary,o=a.size,p=a.verticalAlign,q=a.wrap;q=q===void 0?"none":q;var r=[],s=[],t=null;if(m!=null){var u=m.ref,v=m.testid;v=babelHelpers.objectWithoutPropertiesLoose(m,["ref","testid"]);t=h.jsx(l,{children:h.jsx(c("TetraButton.react"),babelHelpers["extends"]({},v,{ref:u,size:o,testid:void 0}))});r.push({hidden:h.jsx(c("TetraButton.react"),babelHelpers["extends"]({},v,{disabled:!0,padding:"normal",size:o})),visible:t})}if(n!=null){m=n.ref;u=n.testid;v=babelHelpers.objectWithoutPropertiesLoose(n,["ref","testid"]);r.push({hidden:h.jsx(c("TetraButton.react"),babelHelpers["extends"]({},v,{disabled:!0,padding:"normal",size:o,type:"secondary"})),visible:h.jsx(l,{children:h.jsx(c("TetraButton.react"),babelHelpers["extends"]({},v,{ref:m,size:o,testid:void 0,type:"secondary"}))})})}else if(a.secondaryIcon!=null){s.push(h.jsx(c("CometRowItem.react"),{children:h.jsx(l,{children:h.jsx(c("TetraButton.react"),babelHelpers["extends"]({},a.secondaryIcon,{labelIsHidden:!0,size:o,type:(u=a.secondaryIcon.type)!=null?u:k}))})},"secondary-icon"))}else if(a.secondaryIconGroup!=null){n=a.secondaryIconGroup;v=n.primaryIcon;m=n.secondaryIcon;s.push(h.jsx(c("CometRowItem.react"),{children:h.jsx(l,{children:h.jsx(c("TetraButton.react"),babelHelpers["extends"]({},v,{labelIsHidden:!0,size:o,type:(u=v.type)!=null?u:k}))})},"secondary-icon-1"),h.jsx(c("CometRowItem.react"),{children:h.jsx(l,{children:h.jsx(c("TetraButton.react"),babelHelpers["extends"]({},m,{labelIsHidden:!0,size:o,type:(a=m.type)!=null?a:k}))})},"secondary-icon-2"))}n=r.map(function(a,b){return h.jsx(c("CometRowItem.react"),{expanding:d==="justify",xstyle:j.resetFlexBasis,children:r.map(function(a,c){return h.jsx(h.Fragment,{children:b!==c?h.jsx("div",{"aria-hidden":!0,className:"xqtp20y x6ikm8r x10wlt62 xlshs6z",children:a.hidden}):a.visible},c)})},b)});v=t!=null?h.jsx(c("CometRowItem.react"),{expanding:d==="justify",xstyle:j.resetFlexBasis,children:t},"primary"):null;u=[v].concat(s);o=r.length===2;m=o||t==null?n:u;a=b==="forward"?m:m.reverse();return h.jsx(c("CometRow.react"),{align:d,expanding:e,paddingHorizontal:f,paddingTop:g,paddingVertical:i,spacing:8,verticalAlign:p,wrap:q,children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MAWTTRCSafe",["cr:4783"],(function(a,b,c,d,e,f,g){"use strict";function a(a){b("cr:4783")==null?void 0:b("cr:4783").fail(a)}function c(a,c){b("cr:4783")==null?void 0:b("cr:4783").markEvent(a,c)}function d(a,c){b("cr:4783")==null?void 0:b("cr:4783").addBoolAnnotation(a,c)}function e(a,c){b("cr:4783")==null?void 0:b("cr:4783").addIntAnnotation(a,c)}function f(a,c){b("cr:4783")==null?void 0:b("cr:4783").addStringAnnotation(a,c)}g.fail=a;g.markEvent=c;g.addBoolAnnotation=d;g.addIntAnnotation=e;g.addStringAnnotation=f}),98);
__d("PolarisBackgroundFeedDataFetchEager",["CometRelay","PolarisFeedActionInitFeed","PolarisFeedActionLoadFeedPageExtras","PolarisFeedTimelineRootQuery.graphql","PolarisPanavisionQEHelpers"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e){if(d("PolarisPanavisionQEHelpers").hasPolarisFeedRevamp()){d("CometRelay").fetchQuery(e,c("PolarisFeedTimelineRootQuery.graphql"),{data:{}}).subscribe({});a.dispatch(d("PolarisFeedActionLoadFeedPageExtras").loadFeedPageExtras(null));return}if(b.count()>0){e=b.getViewInfo();b.clear();a.dispatch(d("PolarisFeedActionInitFeed").initFeed({backgroundFetch:!0,feedViewInfo:e}))}else a.dispatch(d("PolarisFeedActionInitFeed").initFeed({backgroundFetch:!0}))}g.runBackgroundFeedDataFetch=a}),98);
__d("WebPixelRatio",["SiteData"],(function(a,b,c,d,e,f,g){function a(){return c("SiteData").pr!=null&&c("SiteData").pr>0?c("SiteData").pr:window.devicePixelRatio||1}g.get=a}),98);
__d("BotDetection_SignalFlags",[],(function(a,b,c,d,e,f){a=Object.freeze({ACTIVE:1,DYNAMIC:2,BIOMETRIC:4,DEPRECATED:8,WEB:16,IOS_NATIVE:32,ANDROID_NATIVE:64,EQUAL_BY_VALUE:128,EQUAL_BY_CONTEXT:256,EQUAL_BY_TIMESTAMP:512,SUSPICIOUS_TIER:1024,PARANOID_TIER:2048,RANDOM_SAMPLE_TIER_DEPRECATED:4096,BENIGN_TIER:262144,EMPLOYEES_TIER:524288,BUNDLE:8192,ONSITE:16384,OFFSITE:32768,OFFSITE_SENSITIVE:65536,SENSITIVE:131072});f["default"]=a}),66);