---
---

function switchVersion(selectedOption, urlPostfix) {
  // document.getElementById("nav-version").onchange = function() {
    console.log(selectedOption)
    console.log(urlPostfix)
    window.location.href = "{{ site.url }}{{ site.baseurl }}/docs/" + selectedOption + "/" + urlPostfix;
  // }
}
