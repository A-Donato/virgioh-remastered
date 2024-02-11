const { db } = require("@vercel/postgres");
const { CARDS } = require("./yugioh-database-small.js");

async function seedCards(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS cards (
        id INTEGER NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        frameType VARCHAR(255) NOT NULL,
        description VARCHAR(1000) NOT NULL,
        ygoprodeckUrl VARCHAR(255) NOT NULL,
        atk INTEGER,
        def INTEGER,
        level INTEGER,
        race VARCHAR(255),
        attribute VARCHAR(255),
        archetype VARCHAR(255),
        scale VARCHAR(255),
        linkval VARCHAR(255),
        linkmarkers text[],
        image VARCHAR(255),
        cardmarketPrice VARCHAR(255),
        rarity VARCHAR(255),
        copies INTEGER,
        banned BOOLEAN NOT NULL DEFAULT FALSE,
        owners text[]
      );
    `;

    console.log(`Created "cards" table`);

    // Insert data into the "cards" table
    const insertedCards = await Promise.all(
      CARDS.map(async (card) => {
        console.log("card", card);
        return client.sql`
        INSERT INTO cards (id, name, type, frameType, description, ygoprodeckUrl, atk, def, level, race, attribute, archetype, scale, linkval, linkmarkers, image, cardmarketPrice, rarity, copies, banned, owners)
        VALUES (${card.id}, ${card.name}, ${card.type}, ${card.frameType}, ${
          card.desc
        }, ${card.ygoprodeck_url}, ${card.atk}, ${card.def}, ${card.level}, ${
          card.race
        }, ${card.attribute}, ${card.archetype}, ${card.scale}, ${
          card.linkval
        }, ${card.linkmarkers}, ${card.card_images.image_url}, ${
          card.card_prices.cardmarket_price
        }, ${null}, ${null}, FALSE, ${[]})
      `;
      })
    );

    console.log(`Seeded ${insertedCards.length} cards`);

    return {
      createTable,
      users: insertedCards,
    };
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
    "An error occurred while attempting to seed the database:",
    err
  );
});
