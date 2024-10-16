(()=>{var s={storageKey:"meet_sessions"};var l=async(t,a)=>(t.splice(Number(a),1),await chrome.storage.local.set({[s.storageKey]:t}),t);var f=(t,a)=>{let n=Math.abs(a.getTime()-t.getTime()),e=Math.floor(n/1e3),o=Math.floor(e/(3600*24));e-=o*3600*24;let r=Math.floor(e/3600);e-=r*3600;let m=Math.floor(e/60),d=e-m*60,i="";return o&&(i+=o+" d "),r&&(i+=r+" h "),m?i+=m+" min ":d&&(i+=d+" sec "),i};var p=(t,a)=>{let n=new Date(t.endDateTime),e=new Date(t.startDateTime),o={hour:"2-digit",minute:"2-digit"};return`<tr>
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
      ${f(n,e)}
    </td>
    <td>
      <button type="button" data-index="${a}">
        \u{1F5D1}\uFE0F
      </button>
    </td>
    </tr>
  `};var c=async t=>{let n=(await chrome.storage.local.get(s.storageKey))[s.storageKey];if(!n||!n.length){t.innerHTML=`<tr>
      <td colspan="5"> 
        <p class="no-entries">
          No entries available yet
        </p>
      </td>
    </tr>`;return}t.innerHTML=n.sort((o,r)=>new Date(r.endDateTime).getTime()-new Date(o.endDateTime).getTime()).map(p).join("");let e=document.querySelectorAll("button");Array.from(e).forEach(o=>{o.addEventListener("click",r=>{l(n,r.target.dataset.index),c(t)})})};document.addEventListener("DOMContentLoaded",async()=>{let t=document.querySelector("#table tbody");if(!t)throw"Table body element not found.";await c(t)});})();
