const fs = require("fs");

const API_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

async function getData() {
  console.log(":::: Arrancamos con el script ::::");

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Convertir el objeto a string JSON
    const jsonString = JSON.stringify(data);

    // Guardar en el archivo
    await fs.promises.writeFile("yugioh-database.json", jsonString);

    console.log(
      "✨ Los datos se han guardado correctamente en el archivo yugioh-database.json ✨"
    );
  } catch (error) {
    console.log("☠️ Explotamos");
    console.error(error);
  }
}

getData();
