"use server";
import { getCards } from "../actions/get-cards";
import { CardsTable } from "../ui/cards-table";

export default async function DashboardPage() {
  const rows = await getCards({});

  return <CardsTable rows={rows} />;
}
