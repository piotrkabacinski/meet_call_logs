(()=>{var e={storageKey:"meet_sessions"};var s=async(t,o)=>{t.splice(o,1),await chrome.storage.local.set({[e.storageKey]:t})};var m=(t,o)=>`<tr>
  <td>
    <code>${t.meetId}</code>
  </td>
  <td>
    ${new Date(t.dateTime).toLocaleDateString()}
    ${new Date(t.dateTime).toLocaleTimeString()}
  </td>
  <td>
    <button type="button" data-index="${o}">
      \u{1F5D1}\uFE0F
    </button>
  </td>
  </tr>
`;var i=async t=>{let r=(await chrome.storage.local.get(e.storageKey))[e.storageKey];if(!r||!r.length){t.innerHTML=`<tr>
      <td colspan="3">
        No entries available yet
      </td>
    </tr>`;return}t.innerHTML=r.sort((n,a)=>new Date(a.dateTime).getTime()-+new Date(n.dateTime).getTime()).map(m).join("");let d=document.querySelectorAll("button");Array.from(d).forEach(n=>{n.addEventListener("click",a=>{s(r,a.target.dataset.index),i(t)})})};document.addEventListener("DOMContentLoaded",async()=>{let t=document.querySelector("#table tbody");if(!t)throw"Table element not found.";await i(t)});})();
