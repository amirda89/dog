async function fetchRandomDog(id) {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const result = await res.json();
  const imageUrl = result.message;
  document.getElementById(id).innerHTML =
    `<img src="${imageUrl}" alt="dog" class="w-full h-full object-cover"/>`;
}
fetchRandomDog("breedImage1");
fetchRandomDog("breedImage2");
fetchRandomDog("breedImage3");
