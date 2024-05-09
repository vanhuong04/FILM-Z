import{h as c}from"./search-E54o_GkR.js";import{h as U}from"./category-BgRmPji-.js";let A;async function Y(){const t=await c.getByGenre("hanh-dong",{params:{page:0,limit:4}}),o=t.data.items,s=document.querySelector(".category__list"),r=document.querySelector(".category__title > p"),y=document.querySelector(".category__desc > p");r.textContent=t.data.titlePage,y.textContent=t.data.seoOnPage.descriptionHead;const e=await o.map(async(d,k)=>{const p=await c.getInfoFilm(d.slug);return`
        <div class="category__item">
        <div class="category__content">
            <div class="category__title">
                <div class="category__name"><p>${d.name}</p></div>
                <div class="category__year"><p>${d.year}</p></div>
            </div>
            <div class="category__button"><button>Xem ngay</button></div>
        </div>
        <img class="category__img" src="${p.movie.poster_url}" alt="" />
    </div>      
    `});(await Promise.all(e)).forEach(d=>{s.innerHTML+=d});const n=document.querySelectorAll(".category__item");n.forEach((d,k)=>{d.addEventListener("click",async()=>{window.location.href="./playFilm.html",localStorage.setItem("slug",o[k].slug||A[k].slug)})});const i=document.querySelector(".category__seenAll"),l=document.querySelectorAll(".category__menu");l[0].classList.add("category__active"),i.dataset.category=l[0].dataset.category;const J=document.querySelectorAll(".category__name"),K=document.querySelectorAll(".category__year"),Q=document.querySelectorAll(".category__img");l.forEach(async(d,k)=>{d.addEventListener("click",async()=>{i.dataset.category=d.dataset.category;const p=await c.getByGenre(d.dataset.category,{params:{page:0,limit:4}});l.forEach(u=>{u.classList.remove("category__active")}),d.classList.add("category__active"),r.textContent=p.data.titlePage,y.textContent=p.data.seoOnPage.descriptionHead,A=p.data.items,A.forEach(async(u,V)=>{const W=await c.getInfoFilm(u.slug);J[V].textContent=u.name,K[V].textContent=u.year,Q[V].src=W.movie.poster_url,console.log(W)})}),n.forEach((p,u)=>{p.addEventListener("click",async()=>{window.location.href="../../../playFilm.html",localStorage.setItem("slug",A[u].slug||o[u].slug)})})}),i.addEventListener("click",()=>{console.log(i.dataset.category),localStorage.setItem("category",i.dataset.category),localStorage.setItem("apiCategory","1"),window.location.href="./category.html"})}let C,E,O,P,g=0,v=0;async function Z(){var e;const t=await c.getByGenre("hanh-dong",{params:{page:0,limit:10}}),o=document.querySelector(".action__body"),s=t.data.items,r=await s.map(async(a,n)=>{var l;const i=await c.getInfoFilm(a.slug);return`
        <div class="action__item">
        <div class="action__content">
            <div class="action__title">
                <div class="action__name"><p>${a.name}</p></div>
                <div class="action__year"><p>${a.year}</p></div>
            </div>
            <div class="action__button"><button>Xem ngay</button></div>
        </div>
        <img class="action__img" src="${(l=i==null?void 0:i.movie)==null?void 0:l.poster_url}" alt="" />
    </div>      
    `});(await Promise.all(r)).forEach(a=>{o.innerHTML+=a}),E=document.querySelectorAll(".action__item"),C=document.querySelector(".action__body"),O=parseFloat(getComputedStyle(C).getPropertyValue("gap")),P=((e=E[0])==null?void 0:e.offsetWidth)+O,E.forEach((a,n)=>{a.addEventListener("click",async()=>{window.location.href="../../../playFilm.html",localStorage.setItem("slug",s[n].slug)})}),tt(),et()}async function tt(){document.querySelector(".action__next").addEventListener("click",()=>{N(1)})}async function et(){document.querySelector(".action__prev").addEventListener("click",()=>{N(-1)})}function N(t){if(t===1){if(v>=E.length-5){v=E.length-5;return}v++,g=g-P,C.style=`transform: translateX(${g}px)`}if(t===-1){if(v<=0){v=0;return}v--,g=g+P,C.style=`transform: translateX(${g}px)`}}let S,T;async function at(){document.addEventListener("DOMContentLoaded",async()=>{var e,a;const o=(await c.getAnime("limit=7")).data.items,s=document.querySelector(".anime__body");console.log(o);const r=await o.map(async(n,i)=>{const l=await c.getInfoFilm(n.slug);return`
        <a href="../../../playFilm.html" class="anime__item">
            <div class="anime__content none">
                <div class="anime__title">
                    <div class="anime__name"><p>${n.name}</p></div>
                    <div class="anime__year"><p>${n.year}</p></div>
                </div>
                <div class="anime__button"><button>Xem ngay</button></div>
            </div>
            <img class="anime__img" src="${l.movie.poster_url}" alt="" />
        </a>       
        `});(await Promise.all(r)).forEach(n=>{s.innerHTML+=n}),S=document.querySelectorAll(".anime__item"),T=document.querySelectorAll(".anime__content"),(e=S[0])==null||e.classList.add("anime__full-with"),(a=T[0])==null||a.classList.remove("none"),S.forEach((n,i)=>{n.addEventListener("mouseover",()=>{S.forEach(l=>{l.classList.remove("anime__full-with")}),T.forEach(l=>{l.classList.add("none")}),n.classList.add("anime__full-with"),T[i].classList.remove("none")})}),S.forEach((n,i)=>{n.addEventListener("click",async()=>{localStorage.setItem("slug",o[i].slug)})})})}let q,x,B,F,m=0,_=0;async function nt(){document.addEventListener("DOMContentLoaded",async()=>{const o=(await c.getNewFilm(1)).items,s=document.querySelector(".slider__body"),r=await o.map(async(e,a)=>{const i=(await c.getInfoFilm(e.slug)).movie;return`
            <div class="slider__item">
            <div class="slider__content">
            <div class="slider__top">
            <div class="slider__header">
            <p>${e.name}</p>
            </div>
                        <div class="slider__sub">
                            <p>Date Release: 21 October 2022</p>
                        </div>
                        <div class="slider__desc">
                            <p>
                            ${i.content}
                            </p>
                            </div>
                    </div>
                    
                    <div class="slider__botton">
                    <button>Thêm thông tin</button>
                    </div>
                    </div>
                    <div class="slider__img">
                    <img src="${e.thumb_url}" alt="" />
                    </div>
            </div>
        `});(await Promise.all(r)).forEach(e=>{s.innerHTML+=e}),x=document.querySelectorAll(".slider__item"),q=document.querySelector(".slider__body"),B=parseFloat(getComputedStyle(q).getPropertyValue("gap")),F=x[0].offsetWidth+B,x.forEach((e,a)=>{e.addEventListener("click",async()=>{window.location.href="./playFilm.html",localStorage.setItem("slug",o[a].slug)})}),ot(),it(),st()})}async function it(){document.querySelector(".slider__next").addEventListener("click",()=>{R(1)})}async function ot(){document.querySelector(".slider__prev").addEventListener("click",()=>{R(-1)})}function R(t){if(t===1){if(_>=x.length-2){_=x.length-2;return}_++,m=m-F,q.style=`transform: translateX(${m}px)`}if(t===-1){if(_<=0){_=0;return}_--,m=m+F,q.style=`transform: translateX(${m}px)`}}function st(){setInterval(()=>{_>=x.length-2&&(_=-1,_!==0&&(m=0+F)),m=m-F,q.style=`transform: translateX(${m}px)`,_++},4e3)}let X,L,D,H,f=0,h=0;async function ct(){const t=await c.getFilms("tv-shows",{params:{page:0,limit:10}}),o=document.querySelector(".TV__body"),s=t.data.items,r=await s.map(async(e,a)=>{const n=await c.getInfoFilm(e.slug);return`
        <div class="TV__item">
        <div class="TV__content">
            <div class="TV__title">
                <div class="TV__name"><p>${e.name}</p></div>
                <div class="TV__year"><p>${e.year}</p></div>
            </div>
            <div class="TV__button"><button>Xem ngay</button></div>
        </div>
        <img class="TV__img" src="${n.movie.poster_url}" alt="" />
    </div>      
    `});(await Promise.all(r)).forEach(e=>{o.innerHTML+=e}),L=document.querySelectorAll(".TV__item"),X=document.querySelector(".TV__body"),D=parseFloat(getComputedStyle(X).getPropertyValue("gap")),H=L[0].offsetWidth+D,L.forEach((e,a)=>{e.addEventListener("click",async()=>{window.location.href="../../../playFilm.html",localStorage.setItem("slug",s[a].slug)})}),lt(),rt()}async function lt(){document.querySelector(".TV__next").addEventListener("click",()=>{j(1)})}async function rt(){document.querySelector(".TV__prev").addEventListener("click",()=>{j(-1)})}function j(t){if(t===1){if(h>=L.length-5){h=L.length-5;return}h++,f=f-H,X.style=`transform: translateX(${f}px)`}if(t===-1){if(h<=0){h=0;return}h--,f=f+H,X.style=`transform: translateX(${f}px)`}}let I,b,G,M,w=0,$=0;async function dt(){var e;const t=await c.getByCountry("viet-nam",{params:{page:0,limit:10}}),o=document.querySelector(".vietnam__body"),s=t.data.items,r=await s.map(async(a,n)=>{const i=await c.getInfoFilm(a.slug);return`
        <div class="vietnam__item">
        <div class="vietnam__content">
            <div class="vietnam__title">
                <div class="vietnam__name"><p>${a.name}</p></div>
                <div class="vietnam__year"><p>${a.year}</p></div>
            </div>
            <div class="vietnam__button"><button>Xem ngay</button></div>
        </div>
        <img class="vietnam__img" src="${i.movie.poster_url}" alt="" />
    </div>      
    `});(await Promise.all(r)).forEach(a=>{o.innerHTML+=a}),b=document.querySelectorAll(".vietnam__item"),I=document.querySelector(".vietnam__body"),G=parseFloat(getComputedStyle(I).getPropertyValue("gap")),M=((e=b[0])==null?void 0:e.offsetWidth)+G,b.forEach((a,n)=>{a.addEventListener("click",async()=>{window.location.href="../../../playFilm.html",localStorage.setItem("slug",s[n].slug)})}),mt(),_t()}async function mt(){document.querySelector(".vietnam__next").addEventListener("click",()=>{z(1)})}async function _t(){document.querySelector(".vietnam__prev").addEventListener("click",()=>{z(-1)})}function z(t){if(t===1){if($>=b.length-5){$=b.length-5;return}$++,w=w-M,I.style=`transform: translateX(${w}px)`}if(t===-1){if($<=0){$=0;return}$--,w=w+M,I.style=`transform: translateX(${w}px)`}}nt(),at(),dt(),Z(),Y(),ct(),U();
