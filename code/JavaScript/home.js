
let film = {
    "film": [
        {
            "id": 1,
            "judul": "Conan",
            "file": "/asset/conan.webp",
            "detail" : "hinichi Kudo, seorang detektif SMA berusia 18 tahun yang biasanya membantu polisi memecahkan kasus, diserang oleh 2 anggota sindikat misterius ketika mengawasi sebuah pemerasan. Ia kemudian diberi minum obat racun APTX 4869 yang baru selesai dikembangkan",
            "link" : "https://www.vidio.com/premier/4135/detective-conan"
        },
        {
            "id" : 2,
            "judul": "Kambing Jantan",
            "file": "/asset/kambing-jantan.webp",
            "detail" : "Dika baru saja menyelesaikan sekolah menengah dan pergi ke Australia untuk kuliah karena ibunya. Selama di Australia, dia harus menjalani hubungan jarak jauh dengan pacar lamanya.",
            "link" : "https://www.vidio.com/premier/3987/kambing-jantan"
        },{
            "id" : 3,
            "judul": "The Raid 2",
            "file": "/asset/the-raid.webp",
            "detail" : "Dalam sekuel film laga ini, Rama dikirim menyamar untuk membasmi pejabat polisi yang korup dan komplotan geng dunia kriminal bawah tanah.",
            "link" : "https://vidio.com/premier/683/the-raid-2-berandal"
        },{
            "id" :4,
            "judul": "Rambo",
            "file": "/asset/rambo.webp",
            "detail" : "Rambo harus menghadapi masa lalunya dan menggali keterampilan tempurnya yang kejam untuk membalas dendam dalam misi terakhir.",
            "link" : "https://www.vidio.com/premier/4573/rambo-last-blood"
        }

    ]
}
datafilm = film.film
console.log(datafilm);
let movieList = document.getElementById("movie-list");
for (let index = 0; index < 2; index++) {
    for (let index = 0; index < datafilm.length; index++) {
        const element = datafilm[index];
        movieList.insertAdjacentHTML('beforeend',`<div id="${element.judul}" onclick="popup(${element.id})" class="film" style="width: 300px; margin:15px "><div id="movie-image" style="width: 80%; margin: auto; padding: 10px;">
        <img src="${element.file}" alt="" style="width: 100%;"></div><p style="text-align: center; font-size: 20px; padding: 5px 20px;">${element.judul}</p></div>`)
    }
}

function popup(params) {
    console.log(params);
    const data = datafilm.find((cari) => cari.id === params);
    document.getElementById("movie-popup").style = ("display:block")
    document.getElementById("popup-content").innerHTML = ` <div id="image-content"><img src="${data.file}" alt=""></div><div id="text-content"><h1 style="margin:40px 0">${data.judul}</h1><p>${data.detail}</p>
    <a href="${data.link}" style="font-size: 40px; border-radius: 30px; padding: 10px;">Kunjungi film</a>
    </div> `
    document.getElementById("popup-content").style = ("display: flex")
}

function closepopup() {
    document.getElementById("movie-popup").style = ("display:none")
    document.getElementById("popup-content").style = ("display: none")
}

