const logproc = (b) => {
    return `
      <li>
                    <img src="/ASM/Image/${b.hinh_anh}.webp" alt="Product 1">
                    <h3>Hoa Sinh Nhật</h3>
                    <p>
                        Hoa sinh nhật với giá chỉ từ 300k
                    </p>
                    <a href="productInfo.html?id=${b.id}"> <button class="btn">MUA NGAY</button></a>
                </li>
    `;
};
export const fillhotproc = async () => {
    let str = ``;
    let listhotproc = await fetch("http://localhost:3000/Hoa").
        then(res => res.json()).
        then(data => { return data; });
    for (let i = 0; i < 8; i++) {
        str += logproc(listhotproc[i]);
    }
    return str;
};
const slide = (a) => {
    return `<div class="mySlides fade">
          <img src="/ASM/Image/${a.img}" style="width:100%">
        </div>`;
};
async function loadBanner() {
    const slideshowContainer = document.querySelector(".slideshow-container");
    slideshowContainer.innerHTML = await fillbanner();
    showSlides();
}
async function loadhotproc() {
    const hotprocContainer = document.querySelector(".hotproc");
    hotprocContainer.innerHTML = await fillhotproc();
}
export const fillbanner = async () => {
    let str = ``;
    let listbanner = await fetch("http://localhost:3000/Banner")
        .then(resp => resp.json())
        .then(data => { return data; });
    listbanner.forEach(e => {
        str += slide(e);
    });
    return str + `<a class="prev" onclick="plusSlides(-1)">&#10094;</a> 
    <a class="next" onclick="plusSlides(1)">&#10095;</a>`;
};
let slideIndex = 0;
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
loadBanner();
loadhotproc();
