let main = document.querySelector("main");
let aside = document.querySelector("aside");
let menuIcon = document.querySelector("#minu-icon");
aside.style.display === "block"

menuIcon.onclick = function (e) {
  if (aside.style.display === "none") aside.style.display = "block";
  else aside.style.display = "none";
};
if (main.clientWidth > 1024) {
}
main.onclick = function (e) {
  if (main.clientWidth <= 1024) {
    if (aside.style.display === "block") aside.style.display = "none";
  }
};

// Convert The Design To Dynamic Website

// ! github api
async function githubApi() {
  let myStars = 0;
  await fetch(`https://api.github.com/users/noamangg/repos`).then(result => {
    if (result.status === 200 && result.ok === true)
      return result.json();
  }).then(repos => {
    document.querySelector(".github-repos").textContent = `+${repos.length}`;
    repos.forEach((repo) => {
      myStars += repo.stargazers_count;
    })
    document.querySelector(".github-stars").textContent = `+${myStars}`;

  })
}
githubApi();

// ! project
// class Projects {
//   title = "title";
//   description = "description";
//   url = "https://www.github.com/noamangg";

//   constructor(title, description) {
//     this.title = title;
//     this.description = description;
//   }
//   constructor(title, description, url) {
//     this(title, description);
//     this.url = url;
//   }
// }


// let noaman  = new Projects(23,23);
// noaman.title = "hello world";
// console.log(noaman);

// ! Date to the footer;
async function addFooterDate() {
  let currentTime = new Date();
  let spanYear = document.querySelector("#year-footer");
  spanYear.textContent = `${currentTime.getFullYear()} - ${currentTime.getFullYear() - 1}`;
}
addFooterDate();

// let githubRepos = document.querySelector(".github-repos");
// let githubStars = document.querySelector(".github-stars");
// githubRepos.textContent = `+${myRepos}`;