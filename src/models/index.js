// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BookType = {
  "SCIFI": "SCIFI",
  "FANTASY": "FANTASY",
  "ROMANCE": "ROMANCE",
  "FICTION": "FICTION"
};

const FridgeItemType = {
  "DAIRY": "DAIRY",
  "MEAT": "MEAT",
  "VEGETABLE": "VEGETABLE",
  "FRUIT": "FRUIT"
};

const FridgeItemStatus = {
  "EMPTY": "EMPTY",
  "HAS_ITEM": "HAS_ITEM"
};

const FridgeStatus = {
  "POWERED_ON": "POWERED_ON",
  "POWERED_OFF": "POWERED_OFF",
  "MALFUNCTION": "MALFUNCTION"
};

const TransactionType = {
  "DONATE": "DONATE",
  "TAKE": "TAKE"
};

const { Books, Bookshelves, FridgeItems, Fridges, Transactions, Users, Zones, Services, Location } = initSchema(schema);

export {
  Books,
  Bookshelves,
  FridgeItems,
  Fridges,
  Transactions,
  Users,
  Zones,
  BookType,
  FridgeItemType,
  FridgeItemStatus,
  FridgeStatus,
  TransactionType,
  Services,
  Location
};