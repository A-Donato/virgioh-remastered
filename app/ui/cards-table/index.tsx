"use client";

import React, { useCallback, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  User,
  Chip,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import COLUMNS from "./config/columns";
import { Card } from "@entities/card";
import Image from "next/image";

type CardsTableProps = {
  rows: Card[];
};

export function CardsTable({ rows }: CardsTableProps) {
  const [card, setCard] = useState<Card>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderCell = React.useCallback((card: Card, columnKey: keyof Card) => {
    const cellValue = card[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: card.image! }}
            description={card.id}
            name={cellValue}
          />
        );
      default:
        return cellValue;
    }
  }, []);

  const handleRowClick = (event: any) => {
    setCard(rows.find((row) => row.id == event.currentKey));

    onOpen();
  };

  return (
    <>
      <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent className="min-wo">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {card?.name}
              </ModalHeader>
              <ModalBody className="flex flex-row gap-6">
                <Image
                  className="min-h-[395.5px]"
                  width={271}
                  height={395}
                  src={card?.image || ""}
                  alt={card?.name || ""}
                  blurDataURL="/card-fallback.png"
                  placeholder="blur"
                />
                <p>{card?.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Table
        selectionMode="single"
        onSelectionChange={handleRowClick}
        aria-label="Example table with dynamic content"
      >
        <TableHeader columns={COLUMNS}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No rows to display."} items={rows}>
          {(item) => (
            <TableRow
              // className="hover:bg-primary-200 cursor-pointer"
              key={item.id}
            >
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey as keyof Card)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
