var TestView=CLASS({preset:function(){"use strict";return VIEW},init:function(e,t,n){"use strict";var o,i;console.log("View Opened!"),n.onChangeParams=o=function(e){console.log(e)},n.close=i=function(){console.log("View Closed!")}}}),div=DIV({style:{position:"fixed",left:40,top:40,backgroundColor:"red",padding:20,margin:0},children:[A({style:{textDecoration:"underline"},children:["test"],on:{tap:function(){GO("test")}}}),BR(),A({style:{textDecoration:"underline"},children:["test/1"],on:{tap:function(){GO("test/1")}}})]}).appendTo(BODY);MATCH_VIEW({uris:["test","test/{id}"],target:TestView}),DELAY(5,function(){div.remove()});