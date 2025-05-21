const accessKey="ScG9s65MKJr87tsmzZ1w1MzQj_3pZRz3rNTwJRPZH5g";

const searchfrom=document.getElementById("search-form");
const searchbox=document.getElementById("search-box");
const searchres=document.getElementById("search-result");
const showmore=document.getElementById("show-more-btn");

let keyword="";
let page=1;

async function searchImage(){
    keyword =searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    
    if(page===1){
        searchres.innerHTML="";
    }

    const results=data.results;

    results.map((result)=>{
        const image=document.createElement("img");
        image.src = result.urls.small; //raw, full, regular, small, thumb.
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchres.appendChild(imageLink);
    })
    showmore.style.display="block";
}

searchfrom.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})

showmore.addEventListener("click",()=>{
    page++;
    searchImage();
})
