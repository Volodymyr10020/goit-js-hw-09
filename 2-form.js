import"./assets/modulepreload-polyfill-B5Qt9EMX.js";let e={email:"",message:""};const t=document.querySelector(".feedback-form"),s=t.elements.email,m=t.elements.message,l=()=>{const a=localStorage.getItem("feedback-form-state");a&&(e=JSON.parse(a),s.value=e.email||"",m.value=e.message||"")};l();t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Submitting Form:",e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},t.reset()});
//# sourceMappingURL=2-form.js.map
