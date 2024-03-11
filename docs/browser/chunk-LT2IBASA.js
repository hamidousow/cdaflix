import{a as O,b as q,c as z,d as W,e as H}from"./chunk-M257MILO.js";import{a as N}from"./chunk-MANOJRP7.js";import{a as V,b as U}from"./chunk-K3KLNYV6.js";import{j as x,k as j,l as I}from"./chunk-CI2UBPFS.js";import{$a as o,Fa as c,Ga as w,Ka as S,Qa as p,Ua as E,Va as D,Wa as T,Ya as F,Za as R,Zb as B,_ as s,_a as r,_b as u,aa as l,ab as m,bb as C,eb as g,fa as h,fb as $,ga as f,jb as _,kb as v,qb as d,rb as M,vb as b,wb as y}from"./chunk-QR7DLDQS.js";var G=(()=>{let e=class e{constructor(){this.movieService=s(O),this.router=s(x),this.emitter=new S,this.args=new S,this.resultsSearchMovies$=this.movieService.searchResults,this.nbrPage=1}handleSearch(i){this.router.navigate(["search"],{queryParams:{query:i}}),i=i.trim(),i.length>0&&i!==void 0?this.movieService.searchMovie(i,1):this.router.navigateByUrl("yourflix")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-search-bar"]],inputs:{args:"args"},outputs:{emitter:"emitter"},standalone:!0,features:[d],decls:3,vars:0,consts:[[1,"container-search-bar"],["type","search","name","search-movie","id","searchbar","results","3","placeholder","\u{1F50D} rechercher un film","required","",3,"input"],["args",""]],template:function(t,a){if(t&1){let A=C();r(0,"div",0)(1,"input",1,2),g("input",function(){h(A);let K=_(2);return f(a.handleSearch(K.value))}),o()()}},dependencies:[u],styles:[".container-search-bar[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.container-search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:100%;width:125px;max-width:650px;border-radius:5px;background-color:var(--clr-blue-navigation)}.container-search-bar[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]{border:transparent;padding:10px;-webkit-transition:width .4s ease-in-out;transition:width .4s ease-in-out}.container-search-bar[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]::placeholder{color:var(--clr-white)}.container-search-bar[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]:focus-visible{outline:transparent;width:100%;background:var(--clr-blue-night);border:transparent;color:var(--clr-white)}.search-btn[_ngcontent-%COMP%]{background-color:transparent;border:transparent}.search-btn[_ngcontent-%COMP%]   .bi-search[_ngcontent-%COMP%]{color:var(--clr-white)}"],changeDetection:0});let n=e;return n})();var L=()=>({exact:!0});function Q(n,e){n&1&&(r(0,"li",5)(1,"a",10),v(2," Ma liste "),o()()),n&2&&(c(1),p("routerLinkActiveOptions",M(1,L)))}var Ce=(()=>{let e=class e{constructor(i,t){this.localService=i,this.router=t,this.tmdbAuthService=s(N),this.searchbarActived=!1,this.userLogged=this.localService.getData("user")}handleLogin(){this.tmdbAuthService.reqToken()}disconnectUser(){this.localService.removeData("user"),window.location.reload()}toogleSearchBar(){this.searchbarActived=!this.searchbarActived}};e.\u0275fac=function(t){return new(t||e)(w(U),w(x))},e.\u0275cmp=l({type:e,selectors:[["app-navigation"]],inputs:{userLogged:"userLogged"},standalone:!0,features:[d],decls:11,vars:5,consts:[["id","nav",1,"navigation"],["routerLink","/yourflix","routerLinkActive","active-link","ariaCurrentWhenActive","page",1,"nav_logo",3,"routerLinkActiveOptions"],["src","assets/images/youflix-logo-red-white.png","alt","logo youflix","height","20px"],[1,"nav_menu","first-menu"],[1,"me-5"],[1,""],["routerLink","/","routerLinkActive","active-link","ariaCurrentWhenActive","page",3,"routerLinkActiveOptions"],[1,"nav_menu","secondary-menu"],[3,"click"],["class",""],["routerLink","/user/:id/mylist","routerLinkActive","active-link","ariaCurrentWhenActive","page",3,"routerLinkActiveOptions"]],template:function(t,a){t&1&&(r(0,"nav",0)(1,"a",1),m(2,"img",2),o(),r(3,"ul",3),m(4,"li",4),r(5,"li",5)(6,"a",6),v(7," Home "),o()()(),r(8,"ul",7)(9,"app-search-bar",8),g("click",function(){return a.toogleSearchBar()}),o(),E(10,Q,3,2,"li",9),o()()),t&2&&(c(1),p("routerLinkActiveOptions",M(3,L)),c(5),p("routerLinkActiveOptions",M(4,L)),c(4),D(10,a.userLogged?10:-1))},dependencies:[u,j,I,G],styles:[".navigation[_ngcontent-%COMP%]{background-color:var(--clr-blue-navigation);display:flex;flex-direction:row;justify-content:space-between;position:fixed;top:0;right:0;left:0;z-index:999}.nav_logo[_ngcontent-%COMP%]{display:flex;align-items:center}@media screen and (min-width: 320px){.navigation[_ngcontent-%COMP%]{padding:15px}.first-menu[_ngcontent-%COMP%]{display:none}.first-menu.active[_ngcontent-%COMP%], .secondary-menu[_ngcontent-%COMP%]{display:flex;flex-direction:row;column-gap:12px;align-items:center;padding:0 5px}.first-menu.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .secondary-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:var(--small-font-size);color:var(--clr-grey-light);font-weight:600;text-decoration:none;text-wrap:nowrap;display:block}.active-link[_ngcontent-%COMP%]{color:var(--clr-red)!important;border-radius:5px}.nav_wrap-user-menu[_ngcontent-%COMP%]{display:flex;flex-direction:row}.nav_user-container-img[_ngcontent-%COMP%]{height:60px;width:60px;border-radius:30px;overflow:hidden;display:flex;align-content:center}.nav_user-container-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}.nav_user-infos[_ngcontent-%COMP%]{color:#fff;margin:10px}.nav_user-infos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600;margin-bottom:5px}.nav_user-infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:13px}.nav_btn-login[_ngcontent-%COMP%]{background-color:transparent;height:30px}.nav_btn-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--clr-white);text-decoration:none}.secondary-menu[_ngcontent-%COMP%]{justify-content:end;flex:1}}@media screen and (min-width: 992px){.navigation[_ngcontent-%COMP%]{padding:15px 60px!important}}"]});let n=e;return n})();function X(n,e){if(n&1){let P=C();r(0,"app-card",2,3),g("click",function(){h(P);let t=_(1),a=$();return f(a.openModal(t))}),o()}if(n&2){let P=e.$implicit;p("movie",P)}}var J=(()=>{let e=class e{constructor(){this.modalService=s(H)}openModal(i){this.modalService.openModal(i.movie.id)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-carousel"]],inputs:{movies:"movies"},standalone:!0,features:[d],decls:4,vars:0,consts:[[1,"carousel"],[1,"carousel_inner"],[3,"movie","click"],["cardElement",""],[3,"movie"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1),F(2,X,2,1,"app-card",4,T),o()()),t&2&&(c(2),R(a.movies))},dependencies:[u,W],styles:["[_ngcontent-%COMP%]::-webkit-scrollbar{height:5px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--clr-blue-dark)}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--clr-blue-light)}@media screen and (min-width: 320px){.carousel[_ngcontent-%COMP%]{height:15rem;margin:10px 0}.carousel_inner[_ngcontent-%COMP%]{position:relative;overflow:auto;width:100%;height:100%;display:inline-flex;flex-direction:row;column-gap:1rem;top:0;left:0}}"]});let n=e;return n})();var He=(()=>{let e=class e{constructor(){this.movieService=s(O),this.ngConfig=s(q),this.nowPlayingMovies$=this.movieService.nowPlayingMovies$,this.popularMovies$=this.movieService.popularMovies$,this.topRatedMovies$=this.movieService.topRatedMovies$,this.upcomingMovies$=this.movieService.upcomingMovies$,this.imgBaseUrl=V.imageBaseUrl,this.ngConfig.interval=3e3,this.ngConfig.wrap=!1,this.ngConfig.keyboard=!1,this.ngConfig.pauseOnHover=!0}ngOnInit(){this.movieService.getPopularMovies(),this.movieService.getTopRatedMovies(),this.movieService.getUpcomingMovies(),this.movieService.getNowPlayingMovies()}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-home"]],inputs:{args:"args"},standalone:!0,features:[d],decls:17,vars:9,consts:[["id","homepage"],[1,"hero","mb-5"],["id","popular-movies",1,"section-movie"],[1,"title"],[3,"movies"],["id","to-rated-movies",1,"section-movie"],["id","upcoming-movies",1,"section-movie"]],template:function(t,a){t&1&&(r(0,"div",0),m(1,"div",1),r(2,"section",2)(3,"h2",3),v(4,"Popular movies"),o(),m(5,"app-carousel",4),b(6,"async"),o(),r(7,"section",5)(8,"h2",3),v(9,"Les mieux not\xE9s"),o(),m(10,"app-carousel",4),b(11,"async"),o(),r(12,"section",6)(13,"h2",3),v(14,"Prochaines sorties"),o(),m(15,"app-carousel",4),b(16,"async"),o()()),t&2&&(c(5),p("movies",y(6,3,a.popularMovies$)),c(5),p("movies",y(11,5,a.topRatedMovies$)),c(5),p("movies",y(16,7,a.upcomingMovies$)))},dependencies:[u,B,J,z],styles:[".main-content[_ngcontent-%COMP%]{min-height:100dvh}.slide-backdrop[_ngcontent-%COMP%]{height:25rem}.slide-backdrop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media screen and (min-width: 320px){.section-movie[_ngcontent-%COMP%]{margin:1.5rem 0}}@media screen and (min-width: 992px){.section-movie[_ngcontent-%COMP%]{margin:3rem 0 0}}"]});let n=e;return n})();export{Ce as a,He as b};
