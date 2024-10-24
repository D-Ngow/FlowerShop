const logproc = (product) =>{
    return `
      <div class="product-image">
                <img src="/ASM/Image/${product.hinh_anh}.webp" alt="Bouquet of flowers">
            </div>
            <div class="product-info">
                <h2>${product.ten}</h2>
                <span class="new-price">${product.gia} VND</span>
    `
  }

  export const fillhotproc = async()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id'); 
    let str:string = ``;
    const url = "http://localhost:3000/Hoa?id="+id;
    let procinfo = await fetch(url).
    then (res => res.json()).
    then (data => {return data[0]});
    str+=logproc(procinfo)+`<div class="promotion">
                    <button>Giảm 50K</button>
                    <button>Giảm 25K</button>
                    <button>Giảm 10%</button>
                </div>
                
        <p style="margin: 5px 0px;">Gọi ngay: <strong>1900 633 045</strong></p>

                <div class="contact-methods">
                    <button>Zalo</button>
                    <button>Zalo</button>
                    <button>Zalo</button>
                    <button>Zalo</button>
                </div>

                <div class="delivery-info">
                    <p>Vận chuyển: Miễn phí giao hoa khu vực nội thành TP.HCM & Hà Nội</p>
                    <label for="city">Chọn khu vực giao hàng:</label>
                    <select id="city">
                        <option>Hà Nội</option>
                        <option>TP.HCM</option>
                    </select>
                </div>

                <div class="buttons">
                    <button>ĐẶT HÀNG</button>
                    <button>ĐẶT NHANH</button>
                </div>

                <div class="additional-info">
                    <p>Giao hoa NHANH trong 60 phút</p>
                    <p>Tặng miễn phí thiệp hoặc banner</p>
                </div>`;
    return str;
  }