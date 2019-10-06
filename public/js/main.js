document.addEventListener("DOMContentLoaded", function(){
  const headerText = document.querySelector(".text_wrapper"),
        elements = document.querySelectorAll(".aboutme, .latestArticle_item, .gallery_item, .contact");
        form = document.forms[0];
  form.addEventListener("submit", function(event){
    event.preventDefault();
    fetch("https://stark-falls-66094.herokuapp.com/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:  JSON.stringify({
        name: form.name.value,
        email: form.name.value,
        message: form.userMessage.value
      })
    }).then(function(response){
      return  response.text();
    })
    .then(function(data){
      form.name.value ="";
      form.email.value ="";
      form.userMessage.value ="";
      form.btnSubmit.classList.add("success");
      setTimeout(function(){
        form.btnSubmit.classList.remove("success");
      }, 2000);
    }).catch(function(error){
      form.btnSubmit.classList.add("error");
      setTimeout(function(){
        form.btnSubmit.classList.remove("error");
      }, 2000);
    });
  });
console.log( JSON.stringify({
  name: form.name.value,
  email: form.name.value,
  message: form.userMessage.value
}));
  headerText.style.opacity = 1;
  function onView(elems){
  elems.forEach(e => window.scrollY + 100 > e.getBoundingClientRect().top ?
   e.style.transform = "translate(0,0)" : false) ;
  }
  window.addEventListener("scroll", function(event){
    onView(elements);
    const layers = document.querySelectorAll(".header_paralax_layer"),
          main = document.querySelector(".main");
    let top = this.pageYOffset;
    layers.forEach(e => {
      let speed = e.getAttribute("data-speed"),
          yPos = -(top * speed / 100);
        e.style.transform = `translate3d(0px,${yPos}px, 0px)`;
      })
    });
});
