;/*FB_PKG_DELIM*/

__d("PolarisNewUserActivatorsStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("Getting Started");b=h._("Share Photos");c=h._("When you share photos, they will appear on your profile.");d=h._("Share your first photo");e=h._("You choose which friends to follow. We'll never post to Facebook without your permission.");f=h._("Connected to Facebook");var i=h._("Connect to Facebook"),j=h._("Find Facebook Friends"),k=h._("Add a profile photo so your friends know it's you."),l=h._("Add Profile Photo"),m=h._("Add Profile Photo"),n=h._("Add your phone number so you can reset your password, find friends and more."),o=h._("Add phone number"),p=h._("Add phone number"),q=h._("Add your name and bio so friends can find you."),r=h._("Edit profile");h=h._("Complete Profile");g.GETTING_STARTED=a;g.FIRST_PHOTO_HEADER=b;g.FIRST_PHOTO_BODY=c;g.FIRST_PHOTO_CTA=d;g.FACEBOOK_BODY=e;g.FACEBOOK_COMPLETED=f;g.FACEBOOK_CTA=i;g.FACEBOOK_HEADER=j;g.PROFILE_PHOTO_BODY=k;g.PROFILE_PHOTO_CTA=l;g.PROFILE_PHOTO_HEADER=m;g.PHONE_BODY=n;g.PHONE_CTA=o;g.PHONE_HEADER=p;g.EDIT_PROFILE_BODY=q;g.EDIT_PROFILE_CTA=r;g.EDIT_PROFILE_HEADER=h}),98);
__d("PolarisFacebookConnectUserListItem.react",["fbt","IGDSListItem.react","PolarisAssetManagerGlyphMapping","PolarisFBConnectHelpers","PolarisIGCoreBorderedIcon","PolarisIGCoreButton","PolarisIGCoreConstants","PolarisIGCoreToast","PolarisNewUserActivatorsStrings","PolarisQueryParams","PolarisReactRedux","browserHistory","polarisSuggestedUserSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useState,l="connect_to_facebook",m=h._("Connect to Facebook"),n=h._("Follow your friends"),o=h._("Connect");function a(a){var b=d("PolarisReactRedux").useSelector(j(function(a){return{canFBConnect:d("polarisSuggestedUserSelectors").shouldDisplayFacebookConnect(a),isLoading:d("polarisSuggestedUserSelectors").isInitialLoad(a)}},[]),d("PolarisReactRedux").shallowEqual),e=b.canFBConnect;b=b.isLoading;var f=k(!1),g=f[0],h=f[1];f=d("PolarisQueryParams").parseQueryParams();f[l]!=null&&f[l].length>0&&(d("browserHistory").browserHistory.replace(d("browserHistory").browserHistory.location.pathname),h(!0));return g?i.jsx(c("PolarisIGCoreToast"),{duration:1500,onClose:function(){return h(!1)},children:d("PolarisNewUserActivatorsStrings").FACEBOOK_COMPLETED}):e&&i.jsx(c("IGDSListItem.react"),{addOnEnd:i.jsx(c("PolarisIGCoreButton"),{disabled:b,loading:b,onClick:function(){return d("PolarisFBConnectHelpers").redirectToFBOAuth(d("browserHistory").browserHistory.location.pathname+"?"+l+"=true",a.analyticsContext)},children:o}),addOnStart:i.jsx(c("PolarisIGCoreBorderedIcon"),{alt:m,color:"facebook",icon:d("PolarisAssetManagerGlyphMapping").ICONS.FACEBOOK_CIRCLE_FILLED_24,size:c("PolarisIGCoreConstants").AVATAR_SIZES.medium}),overlayDisabled:!1,subtitle:n,title:m})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisIGCoreCard",["PolarisIGCoreBox","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.button,d=a.children,e=a.context,f=a.dangerouslySetClassName,g=a.icon,i=a.onClick,j=a.padding;a=a.width;return h.jsx("div",{onClick:i,role:"button",tabIndex:"-1",children:h.jsxs(c("PolarisIGCoreBox"),{alignItems:"center",border:!0,color:"ig-primary-background",dangerouslySetClassName:f,padding:j,shape:"rounded",width:a,children:[g,d,b,e]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisIGCoreActivatorCard",["IGDSBox.react","IGDSText.react","PolarisIGCoreBorderedIcon","PolarisIGCoreButton","PolarisIGCoreCard","PolarisIGCoreConstants","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.bodyText,d=a.buttonText,e=a.headerText,f=a.icon,g=a.iconAlt,i=a.loading,j=a.onClick;a=a.width;return h.jsxs(c("PolarisIGCoreCard"),{button:h.jsx(c("PolarisIGCoreButton"),{loading:i,onClick:j,children:d}),icon:h.jsx(c("PolarisIGCoreBorderedIcon"),{alt:g,icon:f,size:c("PolarisIGCoreConstants").AVATAR_SIZES.large}),padding:3,width:a,children:[h.jsx(c("IGDSBox.react"),{marginTop:4,position:"relative",children:h.jsx(c("IGDSText.react").BodyEmphasized,{children:e})}),h.jsx(c("IGDSBox.react"),{height:65,marginBottom:4,marginTop:4,position:"relative",children:h.jsx(c("IGDSText.react").Body2,{color:"secondaryText",children:b})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisIGCorePeopleCard",["cx","fbt","IGDSBox.react","IGDSText.react","PolarisAssetManagerGlyphMapping","PolarisGenericStrings","PolarisIGCoreBorderedIcon","PolarisIGCoreCard","PolarisIGCoreConstants","PolarisIGCoreSVGIconButton","PolarisIGCoreText","PolarisIGCoreXPanoFilledIcon","PolarisUA","PolarisUserAvatar.react","PolarisUserLink.react","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("PolarisUA").isMobile()?76:86;function l(a){a=a.children;return j.jsx(c("IGDSText.react").Body2,{color:"secondaryText",textAlign:"center",children:a})}l.displayName=l.name+" [from "+f.id+"]";function m(a){var b=a.context,d=a.icon;a=a.title;return j.jsxs(c("IGDSBox.react"),{direction:"row",height:k,justifyContent:"center",paddingY:2,position:"relative",width:"100%",children:[j.jsx(c("IGDSBox.react"),{marginEnd:2,position:"relative",children:d}),j.jsxs(c("IGDSBox.react"),{flex:"grow",position:"relative",children:[j.jsx(c("IGDSBox.react"),{marginBottom:3,position:"relative",children:j.jsx(c("IGDSText.react").BodyEmphasized,{children:a})}),j.jsx(c("IGDSBox.react"),{position:"relative",children:j.jsx(c("IGDSText.react").Body2,{color:"secondaryText",children:b})})]})]})}m.displayName=m.name+" [from "+f.id+"]";function n(a){var b=a.children,e=a.isPrivate;a=a.username;var f=0;b=j.Children.map(b,function(a){if(typeof a==="boolean")return null;f++;return j.cloneElement(a,{dimension:k})});var g=k*f+(f-1);switch(!0){case e:return j.jsx(m,{context:i._("Follow this account to see their photos and videos"),icon:j.jsx(c("PolarisIGCoreBorderedIcon"),{alt:i._("Private account"),icon:d("PolarisAssetManagerGlyphMapping").ICONS.LOCK_OUTLINE_24_GREY9}),title:i._("The Account is Private")});case f===0:return j.jsx(m,{context:i._("When {Username of current user} posts, you'll see their photos and videos here.",[i._param("Username of current user",a)]),icon:j.jsx(c("PolarisIGCoreBorderedIcon"),{alt:i._("Private account"),icon:d("PolarisAssetManagerGlyphMapping").ICONS.CAMERA_OUTLINE_24_GREY9}),title:i._("No Posts Yet")});default:return j.jsx(c("IGDSBox.react"),{direction:"row",flex:"grow",justifyContent:"between",marginTop:d("PolarisUA").isMobile()?0:1,position:"relative",width:g,children:b})}}function a(a){var b=a.button,e=a.children,f=a.context,g=a.isPrivate,h=a.onClick,i=a.onDismissClick,k=a.onUsernameClick,m=a.src,o=a.subtitle,p=a.username;a=a.width;var q=d("PolarisUA").isMobile()?"_aau5":"_aau6";return j.jsxs(c("PolarisIGCoreCard"),{button:b,context:d("PolarisUA").isMobile()?null:j.jsx(c("IGDSBox.react"),{marginTop:4,position:"relative",children:j.jsx(l,{children:f})}),dangerouslySetClassName:{__className:q},icon:j.jsx(c("IGDSBox.react"),{marginBottom:d("PolarisUA").isMobile()?2:4,marginTop:d("PolarisUA").isMobile()?0:1,position:"relative",children:j.jsx(c("PolarisUserAvatar.react"),{isLink:!1,profilePictureUrl:m,size:c("PolarisIGCoreConstants").AVATAR_SIZES.XL,username:p})}),onClick:h,padding:4,width:a,children:[j.jsx(c("PolarisUserLink.react"),{onClick:k,username:p,children:j.jsx(c("PolarisIGCoreText").BodyEmphasized,{display:"truncated",textAlign:"center",zeroMargin:!0,children:p})}),i!=null&&j.jsx(c("IGDSBox.react"),{padding:1,position:"absolute",right:!0,children:j.jsx(c("PolarisIGCoreSVGIconButton"),{onClick:i,children:j.jsx(c("PolarisIGCoreXPanoFilledIcon"),{alt:d("PolarisGenericStrings").DISMISS_TEXT,color:"ig-secondary-text",size:11})})}),j.jsx(c("IGDSBox.react"),{marginBottom:o!==null?2:5,paddingY:2,position:"relative",children:j.jsx(c("IGDSText.react").Body,{color:"secondaryText",textAlign:"center",children:o})}),j.jsxs(c("IGDSBox.react"),{alignItems:"center",flex:"grow",justifyContent:"center",position:"relative",children:[j.jsx(n,{isPrivate:g,username:p,children:e}),d("PolarisUA").isMobile()&&f!=null&&j.jsx(c("IGDSBox.react"),{alignItems:"center",flex:"grow",justifyContent:"center",marginBottom:1,position:"relative",children:j.jsx(l,{children:f})})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisIGCoreUserCard",["IGDSBox.react","PolarisIGCoreCard","PolarisIGCoreConstants","PolarisIGCoreText","PolarisIGCoreVerifiedBadge","PolarisUserAvatar.react","PolarisUserLink.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function i(a){var b=33;return a.length<b?a:a.substr(0,b-3)+"\u2026"}function a(a){var b=a.button,d=a.isVerified;d=d===void 0?!1:d;var e=a.onClick,f=a.onUsernameClick,g=a.src,j=a.subtitle,k=a.username;a=a.width;return h.jsxs(c("PolarisIGCoreCard"),{button:b,icon:h.jsx(c("PolarisUserAvatar.react"),{canTabFocus:!1,profilePictureUrl:g,size:c("PolarisIGCoreConstants").AVATAR_SIZES.large,username:k}),onClick:e,padding:4,width:a,children:[h.jsx(c("IGDSBox.react"),{marginBottom:2,marginTop:4,position:"relative",width:"100%",children:h.jsx(c("PolarisUserLink.react"),{onClick:f,username:k,children:h.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",justifyContent:"center",position:"relative",width:"100%",children:[h.jsx(c("IGDSBox.react"),{flex:"shrink",overflow:"hidden",position:"relative",children:h.jsx(c("PolarisIGCoreText").BodyEmphasized,{display:"truncated",zeroMargin:!0,children:k})}),d&&h.jsx(c("IGDSBox.react"),{marginStart:1,position:"relative",children:h.jsx(c("PolarisIGCoreVerifiedBadge"),{})})]})})}),h.jsx(c("IGDSBox.react"),{height:28,marginBottom:2,position:"relative",children:h.jsx(c("PolarisIGCoreText").Body2,{color:"ig-secondary-text",display:"preserve-wrap",textAlign:"center",children:i(j)})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisIGCoreDeck",["cx","IGDSBox.react","IGDSText.react","PolarisIGCoreActivatorCard","PolarisIGCoreBox","PolarisIGCoreConstants","PolarisIGCorePeopleCard","PolarisIGCoreUserCard","PolarisUA","PolarisVirtualHSnapScrollCollapsibleList.react","clamp","polarisWithForwardRef","react","useWindowSize"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useImperativeHandle,k=b.useRef;function l(a){switch(a.type){case c("PolarisIGCoreActivatorCard"):return"ACTIVATOR";case c("PolarisIGCorePeopleCard"):return"PEOPLE";case c("PolarisIGCoreUserCard"):return"USER"}return"USER"}var m=d("PolarisUA").isMobile()?"MOBILE":"DESKTOP",n;function a(a){var b=a.cardBoxDirection,e=b===void 0?"column":b,f=a.cardType;b=a.children;var g=a.color;g=g===void 0?"ig-secondary-background":g;var h=a.forwardedRef,o=a.hasBlur,p=a.headerText,q=a.onVisibilityChange,r=a.pagerDisabled;r=r===void 0?!1:r;a=a.suffix;var s=k(null);j(h,function(){return{scrollToNext:function(){var a=s.current;a!=null&&a.snapToNext()}}});h=c("useWindowSize")();h=h.innerWidth;var t=k({first:null,last:null});if(i.Children.count(b)===0)return null;var u=i.Children.map(b,function(b){n=f||l(b);var a=c("PolarisIGCoreConstants").CARD_SIZES[n][m];return i.jsx(c("IGDSBox.react"),{alignItems:"center",direction:e,position:"relative",width:a.CARD_WIDTH+a.GAP_WIDTH,children:i.jsx(c("PolarisIGCoreBox"),{dangerouslySetClassName:{__className:d("PolarisUA").isMobile()&&n==="PEOPLE"?"_aale":""},height:a.HEIGHT,justifyContent:"center",width:a.CARD_WIDTH,children:i.cloneElement(b,{width:a.CARD_WIDTH})})},b.key)});b=function(a){var b=a.endPct;a=a.startPct;if(q==null)return;var d=u.length;a=c("clamp")(Math.floor(a),0,d-1);b=c("clamp")(Math.floor(b),0,d-1);d=t.current;(d.first!==a||d.last!==b)&&(t.current={first:a,last:b},q(a,b))};var v=c("PolarisIGCoreConstants").CARD_SIZES[n][m],w=d("PolarisUA").isMobile()&&n==="PEOPLE";w=w?(h-v.CARD_WIDTH)/2:v.GUTTER_WIDTH;return i.jsxs(c("IGDSBox.react"),{color:g,position:"relative",children:[p!=null&&i.jsxs(c("IGDSBox.react"),{direction:"row",marginTop:3,paddingX:4,position:"relative",children:[i.jsx(c("IGDSBox.react"),{justifyContent:"around",position:"relative",children:i.jsx(c("IGDSText.react").BodyEmphasized,{children:p})}),a!=null&&i.jsx(c("IGDSBox.react"),{alignItems:"end",flex:"grow",position:"relative",children:a})]}),i.jsx("div",{className:o?"_aalf":"",children:i.jsx(c("IGDSBox.react"),{height:v.HEIGHT,marginBottom:4,marginTop:4,position:"relative",children:i.jsx(c("PolarisVirtualHSnapScrollCollapsibleList.react"),{gutterWidth:Math.max(0,w-v.GAP_WIDTH/2),itemWidth:v.CARD_WIDTH+v.GAP_WIDTH,onVisibilityChange:b,pagerDisabled:r,scrollRef:s,children:u})})})]})}a.displayName=a.name+" [from "+f.id+"]";e=c("polarisWithForwardRef")(a);g["default"]=e}),98);
__d("PolarisUserGridItem.react",["PolarisFollowButtonContainer.react","PolarisIGCoreUserCard","PolarisReactRedux","polarisRelationshipSelectors","polarisUserSelectors","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=a.analyticsContext,e=a.id,f=a.onFollowClick,g=a.position,j=d("PolarisReactRedux").useSelector(i(function(b){return{relationship:d("polarisRelationshipSelectors").getRelationship(b.relationships,a.id),user:d("polarisUserSelectors").getUserById(b,a.id)}},[a.id]),d("PolarisReactRedux").shallowEqual),k=j.relationship;j=j.user;var l=function(){f!=null&&k&&f({index:g,userId:e,followedByViewer:d("polarisRelationshipSelectors").followedByViewer(k)})},m=function(){a.onUsernameClick({index:g,userId:e})},n=j.profilePictureUrl,o=j.suggestionDescription,p=j.username;return n==null||o==null||p==null?null:h.jsx(c("PolarisIGCoreUserCard"),{button:h.jsx(c("PolarisFollowButtonContainer.react"),{analyticsContext:(b=b)!=null?b:"UNKNOWN__POLARIS_USER_GRID_ITEM",onClick:l,userId:j.id,username:p}),isVerified:j.isVerified,onUsernameClick:m,src:n,subtitle:o,username:p})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserGrid.react",["IGDSBox.react","IGDSSpinner.react","PolarisIGCoreDeck","PolarisUserGridItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.isLoading,d=a.onFollowClick,e=a.onUsernameClick,f=a.onVisibilityChange,g=a.subHeader,i=a.suffix;a=a.userIds;var j=function(a){d&&d(a)},k=function(a,b){f&&f(a,b)},l=function(a){e&&e(a)};return b?h.jsx(c("IGDSBox.react"),{alignItems:"center",marginTop:4,position:"relative",width:"100%",children:h.jsx(c("IGDSSpinner.react"),{})}):h.jsx(c("PolarisIGCoreDeck"),{cardType:"USER",hasBlur:!0,headerText:g,onVisibilityChange:k,suffix:i,children:a.map(function(a,b){return h.jsx(c("PolarisUserGridItem.react"),{id:a,onFollowClick:j,onUsernameClick:l,position:b},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSuggestedUserList.react",["fbt","IGDSBox.react","IGDSDivider.react","IGDSText.react","PolarisConnectionsLogger","PolarisFBConnectHelpers","PolarisFacebookConnectUserListItem.react","PolarisReactRedux","PolarisRoutes","PolarisSeeAllLink.react","PolarisUserActionLoadSULV2","PolarisUserGrid.react","PolarisUserList.react","polarisSuggestedUserSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useCallback;b=h._("Suggested for you");e=h._("Suggested for you");var k=h._("See All");h=h._("See all");function a(a){var b=a.analyticsContext,e=a.avatarSize;e=e===void 0?"large":e;var f=a.borderlessFollowButton;f=f===void 0?!1:f;a.children;var g=a.footer,h=a.hideName;h=h===void 0?!1:h;var k=a.hideStoryRings;k=k===void 0?!1:k;var l=a.hideUpsells;l=l===void 0?!1:l;var m=a.initialRenderCount;m=m===void 0?d("PolarisUserActionLoadSULV2").SUL_FETCH_SUGGESTED_COUNT_DEFAULT:m;var n=a.isLoading,o=a.onDismiss,p=a.subHeader,q=a.userIds,r=a.variant;r=r===void 0?"LIST":r;var s=a.viewModule,t={};a=d("PolarisReactRedux").useSelector(j(function(a){return{canFBConnect:d("polarisSuggestedUserSelectors").shouldDisplayFacebookConnect(a)}},[]),d("PolarisReactRedux").shallowEqual);a=a.canFBConnect;var u=function(a){var b=a.followedByViewer,c=a.index;a=a.userId;if(b)return;y("recommended_follow_button_tapped",a,c)},v=function(a){var b=a.index;a=a.userId;y("recommended_username_tapped",a,b)},w=function(a,b){if(q==null)return;for(a=a;a<=b-1;++a){var c=q[a];t[c]||(y("recommended_user_impression",c,a),t[c]=!0)}},x=function(a){var b=a.index;a=a.userId;t[a]||(y("recommended_user_impression",a,b),t[a]=!0)},y=function(a,c,e){d("PolarisConnectionsLogger").logConnectionAction({eventName:a,position:e,targetId:c,containerModule:b,viewModule:s})};return r==="GRID"?i.jsx(c("PolarisUserGrid.react"),{avatarSize:e,isLoading:n,onFollowClick:u,onUsernameClick:v,onVisibilityChange:w,subHeader:p,suffix:i.jsx(c("PolarisSeeAllLink.react"),{href:d("PolarisRoutes").DISCOVER_PEOPLE_PATH}),userIds:q||[]}):i.jsxs(i.Fragment,{children:[p!=null&&i.jsx(c("IGDSBox.react"),{alignItems:"start",marginBottom:3,marginTop:4,paddingX:3,children:i.jsx(c("IGDSText.react").Section,{children:p})}),i.jsxs(c("IGDSBox.react"),{paddingY:2,children:[!l&&i.jsxs(i.Fragment,{children:[d("PolarisFBConnectHelpers").checkGraphDifferentiationQE()&&i.jsx(c("PolarisFacebookConnectUserListItem.react"),{analyticsContext:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.discover_people}),a&&d("PolarisFBConnectHelpers").checkGraphDifferentiationQE()&&i.jsx(c("IGDSBox.react"),{paddingY:2,children:i.jsx(c("IGDSDivider.react"),{})})]}),i.jsx(c("PolarisUserList.react"),{avatarSize:e,avatarTriggerAnalyticsContext:"suggested_user_avatar",borderlessFollowButton:f,"data-testid":void 0,hideName:h,hideStoryRings:k,hoverPositionType:"fixed",initialRenderCount:m,isLoading:Boolean(n),onDismiss:o,onFollowClick:u,onScrollChange:x,onUsernameClick:v,userIds:q||[],usernameTriggerAnalyticsContext:"suggested_user"}),g]})]})}a.displayName=a.name+" [from "+f.id+"]";g.HEADER_TEXT=b;g.HEADER_TEXT_V2=e;g.SEE_ALL_TEXT=k;g.SEE_ALL_TEXT_V2=h;g.SuggestedUserList=a}),98);
__d("PolarisFetchingSuggestedUserList.react",["fbt","IGDSBox.react","IGDSButton.react","PolarisReactRedux","PolarisRoutes","PolarisSuggestedUserList.react","PolarisUserActionLoadSULV2","hero-tracing-placeholder","polarisSuggestedUserSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useEffect,l=b.useRef;function m(){return i.jsx(c("IGDSBox.react"),{paddingX:4,paddingY:3,position:"relative",children:i.jsx(c("IGDSButton.react"),{display:"block",href:d("PolarisRoutes").DISCOVER_PEOPLE_PATH,label:h._("See All Suggestions"),variant:"primary_link"})})}m.displayName=m.name+" [from "+f.id+"]";function a(a){var b=a.analyticsContext,c=a.avatarSize;c=c===void 0?"medium":c;var e=a.borderlessFollowButton;e=e===void 0?!1:e;var f=a.count,g=a.footer,h=a.header,n=a.hideName;n=n===void 0?!1:n;var o=a.hideUpsells;o=o===void 0?!1:o;var p=a.initialRenderCount,q=p===void 0?d("PolarisUserActionLoadSULV2").SUL_FETCH_SUGGESTED_COUNT_DEFAULT:p;p=a.variant;p=p===void 0?"LIST":p;var r=a.viewModule,s=a.onLoadFailed;a=d("PolarisReactRedux").useSelector(j(function(a){return{isLoading:a.suggestedUsers.isLoadingSuggestions,suggestedUserIds:d("polarisSuggestedUserSelectors").getSuggestions(a)}},[]),d("PolarisReactRedux").shallowEqual);var t=a.isLoading,u=a.suggestedUserIds,v=l(!1),w=d("PolarisReactRedux").useDispatch(),x=j(function(a){return w(d("PolarisUserActionLoadSULV2").loadSULV2({maxNumberToDisplay:a}))},[w]);k(function(){v.current&&u.length===0&&!t&&(s==null?void 0:s())},[t,s,u.length]);k(function(){u.length===0&&!v.current&&(x(q),v.current=!0)},[q,x,u.length]);return i.jsxs(i.Fragment,{children:[i.jsx(d("PolarisSuggestedUserList.react").SuggestedUserList,{analyticsContext:b,avatarSize:c,borderlessFollowButton:e,hideName:n,hideUpsells:o,initialRenderCount:q,isLoading:t,subHeader:h!==void 0?h:d("PolarisSuggestedUserList.react").HEADER_TEXT,userIds:isNaN(f)?u.slice(0,q):u.slice(0,f),variant:p,viewModule:r}),p==="LIST"&&(g!==void 0?g:i.jsx(m,{})),i.jsx(d("hero-tracing-placeholder").HeroHoldTrigger,{description:"FetchingSuggestedUserList",hold:t})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);