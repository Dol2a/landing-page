
// applying js to createSection 


let box = document.querySelectorAll("section").length;
const createSection = () => {
    box += 1;
    let pgcontent = "<section id=\"section" + box + "\" data-nav=\"Section " + box + "\">\n      <div class=\"landing__container\">\n      <h2>Section " + box + "</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>\n      \n      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>\n   </div>\n  </section>";
    document.querySelector("main").insertAdjacentHTML("beforeend", pgcontent);

    
  };
  
  
  
  const navBar = document.getElementById("navbar__list");
  const createNavItems = () => {
    navBar.innerHTML = "";
    
    document.querySelectorAll("section").forEach((section) => {
  
      let listSec = `<li><a  id="link_${section.id}" href="#" data-navbr="${section.id}" class="menu__link"> ${section.dataset.nav}</a></li>`;
      
      
      navBar.insertAdjacentHTML("beforeend", listSec);
      const selectedLink = document.querySelector(`#link_${section.id}`);
      
       /* on scroll behavior to get for every section easily*/
  selectedLink.addEventListener('click', (event) => {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth"});
    
  })
     
    });
   
  };
  
for (let i = 1; i <=4; i++) createSection();
createNavItems();


// creating more sections by click on the button
document.getElementById("btn").addEventListener("click", () => {
  createSection();
  createNavItems();
});



/*for the remove button(per sections)*/
document.getElementById("btn2").addEventListener("click", () => {
  let sections = document.querySelectorAll("section");
  sections[sections.length - 1].remove();
});
/* per navbar*/
document.getElementById("btn2").addEventListener("click", () => {
  let sections = document.querySelectorAll("li");
  sections[sections.length - 1].remove();
});
