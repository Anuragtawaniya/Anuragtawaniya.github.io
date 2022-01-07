let about = document.querySelector("#about");
let portfoio = document.querySelector("#portfolio");
let contact = document.querySelector("#contact");

// change the content on clcik
let content = document.querySelector(".about");


about.addEventListener('click', () => {
    content.innerHTML = `     
    <section class="about">
    <div class="heading">
      <h1>About Me</h1>
    </div>
    <p>
      Hello This is Anurag.I have always been enthusiastic about
      computer &#128187; and that's why I chose this as my career. At first, what brought me closer to computers
      were games.
      But after that, I became much more interested in knowing how the web programs are created and how things work
      behind the scene.I &#10084;&#65039; to build web and mobile apps.</p>
  </section>`;
})

portfoio.addEventListener('click', () => {
    content.innerHTML = `     
    <div class="heading">
    <h1>Portfolio</h1>
  </div>
 <p>Under the construction</p>
</section>`;
})

contact.addEventListener('click', () => {
    content.innerHTML = `     
    <div class="heading">
    <h1>Contact Me</h1>
  </div>
  <p>anuragtawaniya@gmail.com</p>
</section>`;
})
console.log('hello');
