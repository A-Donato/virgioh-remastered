import { Card } from "@entities/card";

export type cardColumns = {
  key: keyof Card;
  label: string;
};

const columns: cardColumns[] = [
  // {
  //   key: "id",
  //   label: "ID",
  // },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "type",
    label: "Type",
  },
  {
    key: "frametype",
    label: "Frame type",
  },
  // {
  //   key: "description",
  //   label: "Description",
  // },
  // {
  //   key: "ygoprodeckurl",
  //   label: "url",
  // },
  {
    key: "atk",
    label: "Attack",
  },
  {
    key: "def",
    label: "Defense",
  },
  {
    key: "level",
    label: "Level",
  },
  {
    key: "race",
    label: "Race",
  },
  {
    key: "attribute",
    label: "Attribute",
  },
  {
    key: "archetype",
    label: "Archetype",
  },
  // {
  //   key: "scale",
  //   label: "Scale",
  // },
  // {
  //   key: "linkval",
  //   label: "Linkval",
  // },
  // {
  //   key: "linkmarkers",
  //   label: "Linkmarkers",
  // },
  // {
  //   key: "image",
  //   label: "Image",
  // },
  {
    key: "cardmarketprice",
    label: "Cardmarket price",
  },
  // {
  //   key: "rarity",
  //   label: "Rarity",
  // },
  // {
  //   key: "copies",
  //   label: "Copies",
  // },
  // {
  //   key: "banned",
  //   label: "Banned",
  // },
  // {
  //   key: "owners",
  //   label: "Owners",
  // },
  {
    key: "action" as keyof Card,
    label: "",
  },
];

export default columns;
