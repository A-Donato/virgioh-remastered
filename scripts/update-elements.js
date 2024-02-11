const { db } = require("@vercel/postgres");
const { CARDS } = require("./yugioh-database.js");

async function seedCards(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Insert data into the "cards" table
    const insertedCards = await Promise.all(
      CARDS.map(async (card, index) => {
        console.log("index", index);
        return client.sql`
        UPDATE cards
        SET image = ${card.card_images[0].image_url},
            cardmarketPrice = ${card.card_prices[0].cardmarket_price}
        WHERE id = ${card.id}
      `;
      })
    );

    console.log(`Seeded ${insertedCards.length} cards`);

    return { users: insertedCards };
  } catch (error) {
    console.error("Error seeding cards:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedCards(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to update the database:",
    err
  );
});
