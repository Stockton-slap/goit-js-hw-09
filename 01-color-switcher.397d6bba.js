!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.btnStart.addEventListener("click",(function(){t.body.style.backgroundColor=o(),e=setInterval(n,1e3),t.btnStart.setAttribute("disabled",!0),t.btnStop.removeAttribute("disabled")})),t.body.classList.add("body");var e=null;function n(){null!==e&&(t.body.style.backgroundColor=o())}function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStop.setAttribute("disabled",!0),t.btnStart.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.397d6bba.js.map