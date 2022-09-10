(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{f:()=>I});var t=document.querySelector(".popup_opened_image"),n=document.querySelector(".popup_opened_profile"),o=document.querySelector(".popup__image"),r=document.querySelector(".popup__text");function c(e,t,n){t.textContent=e?"Сохранение...":n}function i(e){e.classList.add("popup_opened"),document.addEventListener("mousedown",u),document.addEventListener("keydown",a)}function u(e){e.target.closest(".popup__container,.popup__container-image")||l(e.target.closest(".popup"))}function a(e){if("Escape"===e.key){var t=document.querySelector(".popup.popup_opened");t&&l(t)}}function l(e){e.classList.remove("popup_opened"),document.removeEventListener("mousedown",u),document.removeEventListener("keydown",a)}var s=document.querySelector(".form_card"),d=document.querySelector(".avatar__form"),m=(document.querySelector(".form_card-delete"),document.querySelector(".form__input_popup_link-avatar")),p=document.querySelector(".form__input_popup_designation"),_=document.querySelector(".form__input_popup_link-picture"),f=document.querySelector(".profile__edit-button"),v=document.querySelector(".profile__avatar-edit-button"),h=document.querySelector(".popup__form"),y=document.querySelector(".form__input_popup_name"),b=document.querySelector(".form__input_popup_about"),S=document.querySelector(".profile__add-button"),k=document.querySelectorAll(".form__button_close"),q=document.querySelector(".popup_opened_card-delete"),E=document.querySelector(".popup_opened_card"),L=document.querySelector(".popup_opened_avatar"),g=document.querySelector(".profile__avatar"),C=document.querySelector(".profile__name"),x=document.querySelector(".profile__about-me"),w=document.querySelector(".elements"),A=document.querySelector("#elements-template").content;function O(e,n,c){var u=e.name,a=e.link,l=e.likes,s=e.owner,d=e._id,m=A.cloneNode(!0),p=m.querySelector(".elements__mask-group"),_=m.querySelector(".elements__delete"),f=m.querySelector(".elements__like"),v=m.querySelector(".elements__like-counter"),h=m.querySelector(".elements__rectangle");return m.querySelector(".elements__text").textContent=u,h.id=d,_.id=d,f.id=d,p.src=a,p.alt=u,v.textContent=l.length,p.addEventListener("click",(function(e){!function(e){var n=e.name,c=e.link;o.src=c,r.textContent=n,o.alt=n,i(t)}({name:u,link:a})})),_.addEventListener("click",(function(e){I(e.target.id)})),f.addEventListener("click",(function(e){n(e.target.id,f,v),f.classList.toggle("elements__like_active")})),l.forEach((function(e){var t=e._id;c.id._id===t?f.classList.add("elements__like_active"):f.classList.remove("elements__like_active")})),s===c.id._id&&(_.style.display="block"),m}function P(e){e.setAttribute("disabled",!0),e.classList.add("form__button_disabled")}var T=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.removeAttribute("disabled"),t.classList.remove(n.inactiveButtonClass)):(t.setAttribute("disabled",!0),t.classList.add(n.inactiveButtonClass))},B="https://nomoreparties.co/v1/plus-cohort-14",D={Authorization:"5a9cae72-b390-4257-b620-5f35d3f837bc","Content-Type":"application/json"};function j(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}var N,J={},H={};function z(e,t,n){var o,r;t.classList.contains("elements__like_active")?(r=e,fetch("".concat(B,"/cards/likes/").concat(r),{method:"DELETE",headers:D}).then(j)).then((function(e){n.textContent=e.likes.length})).catch((function(e){console.log(e)})):t.classList.contains("elements__like_active")||(o=e,fetch("".concat(B,"/cards/likes/").concat(o),{method:"PUT",headers:D}).then(j)).then((function(e){n.textContent=e.likes.length})).catch((function(e){console.log(e)}))}function I(e){var t;(t=e,fetch("".concat(B,"/cards/").concat(t),{method:"DELETE",headers:D}).then(j)).then((function(){document.getElementById(e).remove(),l(q)})).catch((function(e){console.log(e)}))}fetch("".concat(B,"/users/me"),{headers:D}).then(j).then((function(e){g.src=e.avatar,C.textContent=e.name,x.textContent=e.about,J.id=e})).catch((function(e){console.log(e)})),fetch("".concat(B,"/cards"),{headers:D}).then(j).then((function(e){return e.reverse().forEach((function(t){var n;n=O({name:t.name,link:t.link,likes:t.likes,owner:t.owner._id,_id:t._id},z,J),w.prepend(n),H.info=e}))})).catch((function(e){console.log(e)})),s.addEventListener("submit",(function(e){var t=this;e.preventDefault();var n,o=e.submitter.textContent;c(!0,e.submitter),P(e.submitter),(n={name:p.value,link:_.value},fetch("".concat(B,"/cards"),{method:"POST",body:JSON.stringify({name:n.name,link:n.link}),headers:D}).then(j)).then((function(e){!function(e,t,n){w.prepend(O(e,t,n)),l(E)}({name:e.name,link:e.link,likes:e.likes,owner:e.owner._id,_id:e._id},z,J),t.reset()})).catch((function(e){console.log(e)})).finally((function(){c(!1,e.submitter,o)}))}),T),d.addEventListener("submit",(function(e){var t=this;e.preventDefault();var n,o=e.submitter.textContent;c(!0,e.submitter),P(e.submitter),(n=m.value,fetch("".concat(B,"/users/me/avatar"),{method:"PATCH",body:JSON.stringify({avatar:n}),headers:D}).then(j)).then((function(e){g.src=e.avatar,l(L),t.reset()})).catch((function(e){console.log(e)})).finally((function(){c(!1,e.submitter,o)}))}),T),f.addEventListener("click",(function(){y.value=C.textContent,b.value=x.textContent,i(n)})),S.addEventListener("click",(function(){return i(E)})),v.addEventListener("click",(function(){return i(L)})),k.forEach((function(e){e.addEventListener("click",(function(e){l(e.target.closest(".popup"))}))})),h.addEventListener("submit",(function(e){e.preventDefault();var t,o=e.submitter.textContent;c(!0,e.submitter),(t={name:y.value,about:b.value},fetch("".concat(B,"/users/me"),{method:"PATCH",body:JSON.stringify({name:t.name,about:t.about}),headers:D}).then(j)).then((function(e){C.textContent=e.name,x.textContent=e.about,l(n)})).catch((function(e){console.log(e)})).finally((function(){c(!1,e.submitter,o)}))})),N={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button_popup_save",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},document.querySelectorAll(N.formSelector).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);T(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),T(n,o,t)}))}))}(e,N)}))})();