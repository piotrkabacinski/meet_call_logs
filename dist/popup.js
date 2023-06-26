(()=>{var r={storageKey:"meet_sessions",endButtonCallSelector:"button[aria-label='Opu\u015B\u0107 rozmow\u0119']",pageTitlePrefix:"Meet \u2013"};var m=async(t,n)=>(t.splice(Number(n),1),await chrome.storage.local.set({[r.storageKey]:t}),t);var s=(t,n)=>{let e=new Date(t.endDateTime);return`<tr>
    <td class="title">
      <a
        href="https://meet.google.com/${t.meetId}"
        target="_blank"
        ref="noopener noreferrer"
      >
        ${t.title}
      </a>
    </td>
    <td>
      ${e.toLocaleDateString()}
      ${e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}
    </td>
    <td>
      <button type="button" data-index="${n}">
        \u{1F5D1}\uFE0F
      </button>
    </td>
    </tr>
  `};var i=async t=>{let e=(await chrome.storage.local.get(r.storageKey))[r.storageKey];if(!e||!e.length){t.innerHTML=`<tr>
      <td colspan="3"> 
        No entries available yet
      </td>
    </tr>`;return}t.innerHTML=e.sort((o,a)=>new Date(a.endDateTime).getTime()-new Date(o.endDateTime).getTime()).map(s).join("");let d=document.querySelectorAll("button");Array.from(d).forEach(o=>{o.addEventListener("click",a=>{m(e,a.target.dataset.index),i(t)})})};document.addEventListener("DOMContentLoaded",async()=>{let t=document.querySelector("#table tbody");if(!t)throw"Table body element not found.";await i(t)});})();
