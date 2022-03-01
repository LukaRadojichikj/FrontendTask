let obj;
let k = 4;
window.addEventListener('load', (event) => {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      obj = data;
      let string = "";
      for (let i = 0; i < 4; i++) {
        string += "<div class=\"card\"> <div class=\"profile\"><img class=\"profileImage\" src=\"" + obj[i].profile_image + "\">" +
        "<div class=\"nameDate\"><p class=\"name\">" + obj[i].name + "</p><p class=\"date\">" + obj[i].date + "</p></div></div> " +
        "<a class=\"sourcetype\" target = \"_blank\" href=\"" + obj[i].source_link + "\">";

        if (obj[i].source_type == "facebook") {
          string += "<img class=\"logo\" src=\"facebook.svg\">";
        }
        else {
          string += "<img class=\"logo\" src=\"instagram-logo.svg\">";
        }

        string +=
          "</a> <img class=\"image\" src=\"" + obj[i].image + "\">" +
          "<p class=\"caption\">" + obj[i].caption + "</p>" + 
          "<h5 class=\"likes\"> <img class=\"dislike\" onclick=\"heart(this)\" src=\"heart.svg\">" +
          "<span class=\"likeNumber\">" + obj[i].likes + "</span></h5> </div>";
      }
      document.getElementById("place").innerHTML = string;
    })
});

function loadMore() {
  let string = "";
  for (let i = k; i < k + 4; i++) {
    string += "<div class=\"card\"> <div class=\"profile\"><img class=\"profileImage\" src=\"" + obj[i].profile_image + "\">" +
    "<div class=\"nameDate\"><p class=\"name\">" + obj[i].name + "</p><p class=\"date\">" + obj[i].date + "</p></div></div> " +
    "<a class=\"sourcetype\" target = \"_blank\" href=\"" + obj[i].source_link + "\">";

    if (obj[i].source_type == "facebook") {
      string += "<img class=\"logo\" src=\"facebook.svg\">";
    }
    else {
      string += "<img class=\"logo\" src=\"instagram-logo.svg\">";
    }

    string +=
      "</a> <img class=\"image\" src=\"" + obj[i].image + "\">" +
      "<p class=\"caption\">" + obj[i].caption + "</p>" +
      "<h5 class=\"likes\"> <img class=\"dislike\" onclick=\"heart(this)\" src=\"heart.svg\">" +
      "<span class=\"likeNumber\">" + obj[i].likes + "</span></h5> </div>";
  }
  document.getElementById("place").innerHTML += string;
  k += 4;
  if (k >= obj.length) {
    document.getElementById("button").style.display = "none";
  }
}

function heart(x) {
  if (x.className == "dislike") {
    x.parentElement.lastChild.innerText++;
    x.src = "heartfilled.svg";
  }
  else {
    x.parentElement.lastChild.innerText--;
    x.src = "heart.svg";
  }
  x.classList.toggle("liked");
}