console.log("JS is connected");

// Constructor function for da Monsters
function Monster(name, type, strength, scareFactor, imageUrl) {
    this.name = name;
    this.type = type;
    this.strength = strength;
    this.scareFactor = scareFactor;
    this.imageUrl = imageUrl;  // Add image URL as a property
}

// function that get called when  button is clicked
function myFunction() {
    //  new instances of monster object with the  image URLs
    const monster1 = new Monster("Kranky Kranky", "Demon", 10, "High", "https://i1.sndcdn.com/artworks-pztYQly1mq1wekKz-cuLutw-t500x500.jpg");
    const monster2 = new Monster("Luh Geeky", "Demon", 7, "Medium", "https://i1.sndcdn.com/artworks-rv49UhwKGXKDizlD-PBj37A-t1080x1080.jpg");
    const monster3 = new Monster("Kranky", "Demon", 5, "Low", "https://i1.sndcdn.com/artworks-ey14jAC1GWktyjho-j682lw-t1080x1080.jpg");

    //  monster properties into strings
    const monster1Details = `Name: ${monster1.name}, Type: ${monster1.type}, Strength: ${monster1.strength}, Scare Factor: ${monster1.scareFactor}`;
    const monster2Details = `Name: ${monster2.name}, Type: ${monster2.type}, Strength: ${monster2.strength}, Scare Factor: ${monster2.scareFactor}`;
    const monster3Details = `Name: ${monster3.name}, Type: ${monster3.type}, Strength: ${monster3.strength}, Scare Factor: ${monster3.scareFactor}`;

    // Update  empty p tags with  monster details?
    document.getElementById("kranky1").innerHTML = monster1Details;
    document.getElementById("luhGeeky").innerHTML = monster2Details;
    document.getElementById("kranky2").innerHTML = monster3Details;

    //  monster images from updating src and make them visible
    document.getElementById("imgKranky1").src = monster1.imageUrl;
    document.getElementById("imgLuhGeeky").src = monster2.imageUrl;
    document.getElementById("imgKranky2").src = monster3.imageUrl;

    document.getElementById("imgKranky1").style.display = "block";
    document.getElementById("imgLuhGeeky").style.display = "block";
    document.getElementById("imgKranky2").style.display = "block";
}
