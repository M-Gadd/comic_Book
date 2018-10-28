
let url = window.location.href
let language = url.includes( "FR" ) ? "FR" : "EN";
window.location.href = `./../${ language }/index.html`;