const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
console.log(teamMembers);


let rowEl = document.querySelector(".row");


for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  console.log(teamMembers);
  let { name, role, email, img } = teamMembers;
  let Markup = ` <div class="col-4">
                <div class="card">
                    <img src="${img}" alt="">
                    <h3>${name}</h3>
                    <h5>${role}</h5>
                    <h6>${email}</h6>
                </div>
            </div> `
  rowEl.innerHTML += Markup;
  console.log(member);

}




