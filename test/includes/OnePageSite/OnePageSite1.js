menus_jQuery(document).ready(function () {

	duration = 1000;

	swing = 'easeInOutQuart';

	var lastId,anchors,scrollItems;function targetIsSamePage(a){return!a||"_self"==a}function getHash(a){if(!a)return!1;var c=a.indexOf("#");if(-1<c){if(0==c)return a.replace("#","");var c=a.substring(c+1),b="";-1<a.indexOf("?")&&(b=a.substring(indexOf("?")));var d=/(https?|file):\/\//,e=window.location.pathname,b=a.replace("#","").replace(c,"").replace(b,"").replace(d,"");a.match(d)?e=window.location.host+e:b=e.substring(0,e.lastIndexOf("/"))+"/"+b;if(e==b)return c}return!1}

function linkClick(a,c){try{c.data("onepage-hash")?c.data("onepage-hash"):getHash(c.attr("href"));var b=c.data("onepage-section")?c.data("onepage-section"):!1;if(b){a.preventDefault();var d=c.parent().parent(),e=d.attr("class"),g=0;e&&-1<e.indexOf("FM2_")&&d.parent().hasClass("stick-to-top-menu")&&(g=-d.parent().outerHeight(!0,!0),d.parent().hasClass("stick")||d.parent().css("position","fixed"));var f=b.offset().top+g;0>f&&(f=0);d.parent().hasClass("stick")||d.parent().css("position","");menus_jQuery("html, body").animate({scrollTop:f},

duration,swing)}}catch(h){alert("error in xtd one page site script "+h)}}function bubbleSortByTop(a){var c;do{c=!1;for(var b=0;b<a.length-1;b++){var d=a[b+1];a[b].offset().top>d.offset().top&&(c=a[b],a[b]=a[b+1],a[b+1]=c,c=!0)}}while(c)}

function getAnchors(){scrollItems=[];anchors=menus_jQuery("a").filter(function(){var c=menus_jQuery(this),b=c.attr("href"),a=c.attr("target");return(b=getHash(b))&&targetIsSamePage(a)&&(a=menus_jQuery("#"+b),0<a.length&&a.hasClass("site-section"))?(c.data("onepage-section",a),a.data("onepage-anchor",c),scrollItems.push(a),!0):!1}).unbind("click.onePage").bind("click.onePage",function(a){linkClick(a,menus_jQuery(this));a.stopPropagation()});anchors.each(function(){if("LI"==menus_jQuery(this).parent()[0].tagName){var a=

this;menus_jQuery(this).unbind("click.onePage");menus_jQuery(this).parent().unbind("click").bind("click.onePage",function(b){linkClick(b,menus_jQuery(a))})}});try{bubbleSortByTop(scrollItems)}catch(a){}}var scrollTimeout,is_touch_device="ontouchstart"in document.documentElement;is_touch_device||menus_jQuery(window).scroll(function(){clearTimeout(scrollTimeout);scrollTimeout=setTimeout(doneScrolling,20)});

function doneScrolling(){for(var a=menus_jQuery(window),c=a.scrollTop()+200,b=[],d=0;d<scrollItems.length;d++)scrollItems[d].offset().top<c&&b.push(scrollItems[d]);c=scrollItems[scrollItems.length-1];a.scrollTop()+a.height()+50>=menus_jQuery(document).height()&&b.push(c);a=(b=b[b.length-1])&&b.length?b[0].id:"";if(lastId!==a){lastId=a;try{anchors.filter(".sel").each(function(){menus_jQuery(this).parent().andSelf().removeClass("sel")}),b.data("onepage-anchor").parent().andSelf().addClass("sel")}catch(e){}}}

var id;menus_jQuery(window).bind("resize orientationchange",function(){clearTimeout(id);id=setTimeout(doneResizing,100)});function doneResizing(){getAnchors()}setTimeout(function(){getAnchors();"ontouchstart"in document.documentElement||doneScrolling()},100);



});