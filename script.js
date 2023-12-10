const photoCube = document.getElementById("photoOne");
const photoSrc = photoCube.getAttribute("src");
let photoSrcNew;
let photo = 1;
function slide() {
    if (photo <= 4) {
        photo++
    } else {
        photo = 1
    }
    photoSrcNew = photoSrc.replace("1", photo);
    photoCube.src = photoSrcNew;
}