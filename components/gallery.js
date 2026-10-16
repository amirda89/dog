async function fetchRandomDog(id) {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const result = await res.json();
  const imageUrl = result.message;
  document.getElementById(id).innerHTML =
    `<img src="${imageUrl}" alt="dog" class="w-full h-full object-cover"/>`;
}
fetchRandomDog("galleryImage1");
fetchRandomDog("galleryImage2");
fetchRandomDog("galleryImage3");
fetchRandomDog("galleryImage4");
fetchRandomDog("galleryImage5");
fetchRandomDog("galleryImage6");
fetchRandomDog("galleryImage7");
fetchRandomDog("galleryImage8");
fetchRandomDog("galleryImage9");
fetchRandomDog("galleryImage10");
fetchRandomDog("galleryImage11");
fetchRandomDog("galleryImage12");
