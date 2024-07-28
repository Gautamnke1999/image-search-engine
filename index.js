const accessKey = "NlKc8GAR2IsCE8AR9YUG6o6Tb_J8ZBzOinJjFRmtucM";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search_box");
const searchResult = document.getElementById("search-result");
const showMorebtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const resonse = await fetch(url);
  const data = await resonse.json();
  if(page === 1){
    searchResult.innerHTML =(" ");
  }

//   console.log(data);
  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    // console.log(image.src)
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMorebtn.style.display="block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;

  searchImage();
});
showMorebtn.addEventListener("click",()=>{
    page++;
    searchImage();
})
