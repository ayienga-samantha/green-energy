// DATA RESOURCES
let dataResorce = [
    {
        heading: "Community Solar",
        bodyText: "Community solar panels are a collection of solar panels whose energy is shared by multiple houses. These panels power each of the house with heat, water and electricity. The community will then come together and split the energy costs. These costs will be much lower than if one individual decided to take on the project alone",
        imgUrl: "./img/solar-panels.jpg"
    },
    {
        heading: "Government Assistance",
        bodyText: "Governments can help make making green energy affordable by investing and providing funds to promote renewable energy sources. The funds can also be used to develop efficient energy systems. This will help lower energy costs.",
        imgUrl: "./img/assistance.jpg"
    },
    {
        heading: "Reducing the costs of technlogies",
        bodyText: "By reducing the costs of technologies needed for the generation of green energy it becomes easier and more affordable for people to acquire the technologies for their own use. This in turn leads to the promotion of the use of green energy",
        imgUrl: "./img/technology.jpg"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

// EVENT-OBJECT IS ACCESSED 
function eventHandler(ev) {

    // fetch the clicked button
    let clickedBtn = ev.target;

    // read the text inside the button
    let btnText = clickedBtn.innerText;

    // print the text of the clicked button
    if (btnText === "PAGE 1") {
        $content.innerHTML = `<h3>${dataResorce[0].heading}                           </h3>
                              <img src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;
    } else if (btnText === "PAGE 2") {
        $content.innerHTML = `<h3>${dataResorce[1].heading}                           </h3>
                              <img src="${dataResorce[1].imgUrl}" alt="placeholder">
                              <p>${dataResorce[1].bodyText}</p>`;
    } else {
        $content.innerHTML = `<h3>${dataResorce[2].heading}                           </h3>
                              <img src="${dataResorce[2].imgUrl}" alt="placeholder">
                              <p>${dataResorce[2].bodyText}</p>`;
    }


}

for (let i = 0; i < $btns.length; i++) {
    $btns[i].addEventListener("click", eventHandler);
}


//active links
const links = document.querySelectorAll("button");

function handleEvent(ev) {
    for (let i = 0; i < links.length; i++) {
        if (links[i].hasAttribute("id")) {
            links[i].removeAttribute("id");
        }
    }

    let currentItem = ev.target;
    currentItem.setAttribute("id", "active");
}

for (let link of links) {
    link.addEventListener("click", handleEvent);
}
