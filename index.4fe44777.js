var e=document.querySelector("ul");function r(e){return Number(e.slice(1).replaceAll(",",""))}var t=Array.from(document.querySelectorAll("li")).sort(function(e,t){return r(t.dataset.salary)-r(e.dataset.salary)});e.textContent="",t.map(function(r){return e.append(r)});
//# sourceMappingURL=index.4fe44777.js.map
