'use strict';function e(d){var c=0;return function(){return c<d.length?{done:!1,value:d[c++]}:{done:!0}}};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function f(d,c,a){var b=null;try{b=a.getSelection()}catch(n){return null}if(b&&b.toString()!==""&&b.rangeCount>0)return a=b.getRangeAt(0).getBoundingClientRect(),JSON.stringify({selectedText:b.toString(),selectionRect:{x:a.x+d,y:a.y+c,width:a.width,height:a.height}});b=a.document.getElementsByTagName("iframe");if(a=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator])b=a.call(b);else if(typeof b.length=="number")b={next:e(b)};else throw Error(String(b)+" is not an iterable or ArrayLike");
for(a=b.next();!a.done;a=b.next())if(a=a.value,a.contentWindow){var g=a.getBoundingClientRect();if(a=f(d+g.x,c+g.y,a.contentWindow))return a}return null}function h(){var d=f(0,0,window),c=window,a=c.webkit;delete c.webkit;c=window.top;var b,g;(b=c.webkit)==null||(g=b.messageHandlers)==null||g.editMenuWebSelection.postMessage(d);c.webkit=a}
for(var k=["experiencekit","WebviewSelection","getSelectedText"],l=this||self,m;k.length&&(m=k.shift());)k.length||h===void 0?l[m]&&l[m]!==Object.prototype[m]?l=l[m]:l=l[m]={}:l[m]=h;
