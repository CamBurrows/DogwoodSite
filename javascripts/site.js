function navHideShow(){dogwoodPageContent.currentScrollPos=window.pageYOffset,window.scrollY>70&&allowScroll&&(dogwoodPageContent.prevScrollpos>=dogwoodPageContent.currentScrollPos?($(".navbar-wrap").removeClass("compress-nav"),$("#dogwood-menu-toggle").removeClass("compressed")):($(".navbar-wrap").addClass("compress-nav"),$("#dogwood-menu-toggle").addClass("compressed"))),dogwoodPageContent.prevScrollpos=dogwoodPageContent.currentScrollPos}window.cyclerDefaultFadeOutTime=0,window.imageCyclerInterval=5e3;var allowScroll=!0,dogwoodPageContent={};dogwoodPageContent.prevScrollpos=window.pageYOffset,dogwoodPageContentcurrentScrollPos=window.pageYOffset,dogwoodPageContent.prevScrollposFilter=window.pageYOffset,$(document).ready(function(){}),$(document).scroll(function(){navHideShow()}),$(document).on("click","#dogwood-menu-toggle",function(o){o.preventDefault(),$("body").toggleClass("fixed-body"),$(this).toggleClass("open"),$(".mobile-nav-slideout").toggleClass("open")}),$(document).ready(function(){$(".question").on("click",function(){block=$(this).attr("id"),$(this).toggleClass("open"),$("."+block).toggleClass("open")}),$(".close-faq").on("click",function(){block=$(this).attr("class").split(" ")[0],$(".answer."+block).toggleClass("open"),$("#"+block).toggleClass("open")}),$(".jump-to").on("click",function(){block=$(this).attr("class").split(" ")[1],$("html, body").animate({scrollTop:$("#"+block).offset().top-100},2e3)})}),$(document).ready(function(){function o(){$("#general-contact").addClass("success"),setTimeout(function(){$("#contact-modal").modal("hide")},2e3)}function e(){}function t(){$("#application").addClass("success"),setTimeout(function(){$("#apply-modal").modal("hide")},2e3)}function n(){}function a(o,e,t,n,a){var s=new XMLHttpRequest;s.open(o,e),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?n(s.response,s.responseType):a(s.status,s.response,s.responseType))},s.send(t)}var s=$("#general-contact").get(0);$("#general-contact").on("submit",function(t){t.preventDefault();var n=new FormData(s);a(s.method,s.action,n,o,e)});var l=$("#application").get(0);$("#application").on("submit",function(o){o.preventDefault();var e=new FormData(l);a(l.method,l.action,e,t,n)})});