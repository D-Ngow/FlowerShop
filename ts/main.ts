// async function getData(): Promise<void> {
//     const url: string = "http://localhost:3000/Hoa";
    
//     try {
//       const response: Response = await fetch(url);
      
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json: unknown = await response.json();
//       console.log(json);
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         console.error(error.message);
//       } else {
//         console.error("Unknown error occurred");
//       }
//     }
//   }
  const logproc = (b) =>{
    return `
      <li>
                    <img src="/ASM/Image/${b.hinh_anh}.webp" alt="Product 1">
                    <h3>Hoa Sinh Nhật</h3>
                    <p>
                        Hoa sinh nhật với giá chỉ từ 300k
                    </p>
                    <a href="productInfo.html?id=${b.id}"> <button class="btn">MUA NGAY</button></a>
                </li>
    `
  }

  export const fillhotproc = async()=>{
    let str:string = ``;
    let listhotproc = await fetch("http://localhost:3000/Hoa").
    then (res => res.json()).
    then (data => {return data});
  for (let i = 0; i < 8; i++) {
      str+=logproc(listhotproc[i]);
    }
    return str;
  }

  const slide = (a) => {
    return `<div class="mySlides fade">
          <img src="/ASM/Image/${a.img}" style="width:100%">
        </div>`
  }
  async function loadBanner() {
    const slideshowContainer = document.querySelector(".slideshow-container");
    slideshowContainer.innerHTML = await fillbanner();
    showSlides();
}
  async function loadhotproc() {
    const hotprocContainer = document.querySelector(".hotproc");
    hotprocContainer.innerHTML = await fillhotproc();
}
  export const  fillbanner = async () =>{
    let str:string = ``;
    let listbanner = await fetch("http://localhost:3000/Banner")
    .then (resp => resp.json())
    .then (data => {return data});
    listbanner.forEach(e => {
      str+=slide(e);
    });
    return str+`<a class="prev" onclick="plusSlides(-1)">&#10094;</a> 
    <a class="next" onclick="plusSlides(1)">&#10095;</a>`;
  }

  let slideIndex: number = 0;

function plusSlides(n: number): void {
  slideIndex += n;
  showSlides();  
}

function showSlides(): void {
  let i: number;
  const slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  (slides[slideIndex - 1] as HTMLElement).style.display = "block";
  setTimeout(showSlides, 3000); 
}
loadBanner();
loadhotproc();

  