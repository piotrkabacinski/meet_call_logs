(()=>{var i={storageKey:"meet_sessions",endButtonCallSelector:"button[aria-label='Opu\u015B\u0107 rozmow\u0119']",pageTitlePrefix:"Meet \u2013"};var d=async(t,a)=>(t.splice(Number(a),1),await chrome.storage.local.set({[i.storageKey]:t}),t);var c=(t,a)=>{let n=Math.abs(a.getTime()-t.getTime()),e=Math.floor(n/1e3),o=Math.floor(e/(3600*24));e-=o*3600*24;let r=Math.floor(e/3600);e-=r*3600;let l=Math.floor(e/60),s="";return o&&(s+=o+" d "),r&&(s+=r+" h "),l&&(s+=l+" min "),s};var f=(t,a)=>{let n=new Date(t.endDateTime),e=new Date(t.startDateTime),o={hour:"2-digit",minute:"2-digit"};return`<tr>
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
      ${e.toLocaleTimeString(void 0,o)}
    </td>
    <td>
      ${n.toLocaleTimeString(void 0,o)}
    </td>
    <td>
      ${c(n,e)}
    </td>
    <td>
      <button type="button" data-index="${a}">
        \u{1F5D1}\uFE0F
      </button>
    </td>
    </tr>
  `};var m=async t=>{let n=(await chrome.storage.local.get(i.storageKey))[i.storageKey];if(!n||!n.length){t.innerHTML=`<tr>
      <td colspan="5"> 
        No entries available yet
      </td>
    </tr>`;return}t.innerHTML=n.sort((o,r)=>new Date(r.endDateTime).getTime()-new Date(o.endDateTime).getTime()).map(f).join("");let e=document.querySelectorAll("button");Array.from(e).forEach(o=>{o.addEventListener("click",r=>{d(n,r.target.dataset.index),m(t)})})};document.addEventListener("DOMContentLoaded",async()=>{let t=document.querySelector("#table tbody");if(!t)throw"Table body element not found.";await m(t)});})();
