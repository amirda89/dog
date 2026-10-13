fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((result) => {
    const imageUrl = result.message;
    document.getElementById("heroImage").innerHTML =
      `<img src="${imageUrl}" alt="dog" class="w-full h-full object-cover/>`;
  });
