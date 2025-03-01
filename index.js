import{i as d,S as C,a as y}from"./assets/vendor-ZlulHAcp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();const u="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_104673_20)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89915%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89915%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80621C16.3037%206.76847%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76847%2016.7874%206.80621C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12151%2017.1938%207.21262C17.2315%207.30373%2017.2509%207.40138%2017.2509%207.5C17.2509%207.59861%2017.2315%207.69626%2017.1938%207.78737C17.156%207.87848%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30366%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_104673_20'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function p(r){r.innerHTML='<p class="loading-text">Loading images, please wait...</p><span class="loader"></span>'}function g(r){const e=r.querySelector(".loading-text"),n=r.querySelector(".loader");e&&e.remove(),n&&n.remove()}function L(r){const e=r.data.hits,n=document.querySelector(".gallery");if(e.length===0){d.show({messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:u,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0,message:"Sorry, there are no images matching your search query. Please, try again!"}),n.innerHTML="";return}const s=e.map(t=>`<li class='gallery-item'>
                    <a class='gallery-link' href="${t.largeImageURL}">
                        <img class='gallery-img' src="${t.webformatURL}" alt="${t.tags}" />
                        <div class="grid">
                            <p>Likes</p>
                            <p>Views</p>
                            <p>Comment</p>
                            <p>Downloads</p>
                            <span>${t.likes}</span>
                            <span>${t.views}</span>
                            <span>${t.comments}</span>
                            <span>${t.downloads}</span>
                        </div>
                    </a>
                </li>`).join(" ");n.insertAdjacentHTML("beforeend",s),new C(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}async function w(r){return await y.get("https://pixabay.com/api/",{params:{key:"49113476-20f613f5ec96a5878cf6b2003",q:encodeURIComponent(r),image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:f}})}let a=1;const f=15;function v(){a=1}function b(){a+=1}function S(r,e){const n=r.data.totalHits,s=document.querySelector(".load-more-button");if(n<a*f)g(e),s.classList.add("hide"),e.innerHTML=`<p class="loading-text">We're sorry, but you've reached the end of search results.</p>`;else if(a>=2){const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}}const M=document.querySelector(".form"),m=document.querySelector(".gallery"),i=document.querySelector(".load-message-box"),c=document.querySelector(".load-more-button");M.addEventListener("submit",x);c.addEventListener("click",F);function x(r){r.preventDefault();const e=document.querySelector(".user-input").value.trim();e!==""&&(m.innerHTML="",p(i),c.classList.add("hide"),v(),h(e))}function F(r){const e=document.querySelector(".user-input").value.trim();b(),p(i),h(e)}function h(r){w(r).then(e=>{L(e),g(i),c.classList.remove("hide"),S(e,i)}).catch(e=>{d.show({messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:u,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0,message:"Something went wrong. Please, try again."}),m.innerHTML="",console.log(e)})}
//# sourceMappingURL=index.js.map
