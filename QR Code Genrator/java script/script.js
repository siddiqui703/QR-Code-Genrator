let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");

function genrateQR() {
    const text = qrtext.value.trim();

    if (text.length > 0) {
        const encoded = encodeURIComponent(text);
        qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encoded}`;
        imgbox.classList.add("show-img");
    } else {
        qrtext.classList.add("error");
        setTimeout(() => qrtext.classList.remove("error"), 1000);
    }
}
