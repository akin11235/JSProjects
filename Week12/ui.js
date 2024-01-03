// hound -> hound

function titleCase(text) {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

/* <div
id="dropdown-menu"
class="dropdown-menu"
aria-labelledby="dropdownMenuButton"
>
<!-- Menu for all dots breeds -->

<!-- <a href="#" id="breed-name" class="dropdown-item">Breed Name</a> -->
</div> */

function populateBreedDropdown(breeds) {
  let dropdownMenu = document.querySelector("#dropdown-menu");

  //   <!-- <a href="#" id="breed-name" class="dropdown-item">Breed Name</a> -->

  breeds.forEach((breed) => {
    let dropdownItem = document.createElement("a");
    dropdownItem.id = breed;
    dropdownItem.className = "dropdown-item";
    dropdownItem.href = "#";
    dropdownItem.innerText = titleCase(breed);

    // Add to dropdown menu
    dropdownMenu.appendChild(dropdownItem);
  });
}

function row(child) {
  let row = document.createElement("div");
  row.className = "row mt-2";
  row.appendChild(child);
  return row;
}

function col(child) {
  let col = document.createElement("div");
  col.className = "col";
  col.appendChild(child);
  return col;
}

function img(url) {
  let img = new Image();
  img.className = "img-fluid rounded mx-auto d-block";
  img.src = url;
  return img;
}

function createGridCell(url) {
  return row(col(img(url)));
}

function showBreed(breed, images) {
  // Update the breed title
  let breedName = document.querySelector("#breed-name");
  breedName.innerHTML = titleCase(breed);

  //   Clear the existing images from our breed grid
  let breedGrid = document.querySelector("#breed-grid");
  breedGrid.innerHTML = "";

  //   Loop through all image urls, create row/col/img and append to grid
  images.forEach((imageUrl) => breedGrid.appendChild(createGridCell(imageUrl)));
}
