-- CreateTable
CREATE TABLE "cards" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "frametype" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "ygoprodeckurl" VARCHAR(255) NOT NULL,
    "atk" INTEGER,
    "def" INTEGER,
    "level" INTEGER,
    "race" VARCHAR(255),
    "attribute" VARCHAR(255),
    "archetype" VARCHAR(255),
    "scale" VARCHAR(255),
    "linkval" VARCHAR(255),
    "linkmarkers" TEXT[],
    "image" VARCHAR(255),
    "cardmarketprice" VARCHAR(255),
    "rarity" VARCHAR(255),
    "copies" INTEGER,
    "banned" BOOLEAN NOT NULL DEFAULT false,
    "owners" TEXT[]
);

