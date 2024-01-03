function getDogBreeds(callback) {
  let xhr = new XMLHttpRequest();

  // If the xhr request works
  xhr.onload = function () {
    // let json = this.responseText;
    try {
      let data = JSON.parse(this.responseText);
      callback(Object.keys(data.message));
    } catch (error) {
      console.error("Unable to parse breed JSON", error);
    }

    // callback(json);
  };

  //   If the xhr request fails
  xhr.onerror = function () {
    console.error("Unable to get dog breed JSON");
  };

  let url = "https://dog.ceo/api/breeds/list/all";
  xhr.open("GET", url);
  xhr.send();
}

function getBreedData(breed, callback) {
  let xhr = new XMLHttpRequest();

  // If the xhr request works
  xhr.onload = function () {
    // let json = this.responseText;
    try {
      let data = JSON.parse(this.responseText);

      callback(data.message);
    } catch (error) {
      console.error("Unable to parse breed image JSON", error);
    }

    // callback(json);
  };

  //   If the xhr request fails
  xhr.onerror = function () {
    console.error("Unable to get dog breed image JSON");
  };

  let url = `https://dog.ceo/api/breed/${breed}/images`;
  console.log(url);
  xhr.open("GET", url);
  xhr.send();
}
