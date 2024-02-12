"use server";
import { Card } from "@entities/card";
import { sql } from "@vercel/postgres";
import prisma from "@clients/prisma-client";

export type getCardsProps = {
  page?: number;
  pageSize?: number;
};

export async function getCards({ page = 0, pageSize = 10 }: getCardsProps) {
  const take = pageSize;
  const skip = page * 10;

  return prisma.cards.findMany({ take, skip });
}
