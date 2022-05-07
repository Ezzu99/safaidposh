import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum BookType {
  SCIFI = "SCIFI",
  FANTASY = "FANTASY",
  ROMANCE = "ROMANCE",
  FICTION = "FICTION"
}

export enum FridgeItemType {
  DAIRY = "DAIRY",
  MEAT = "MEAT",
  VEGETABLE = "VEGETABLE",
  FRUIT = "FRUIT"
}

export enum FridgeItemStatus {
  EMPTY = "EMPTY",
  HAS_ITEM = "HAS_ITEM"
}

export enum FridgeStatus {
  POWERED_ON = "POWERED_ON",
  POWERED_OFF = "POWERED_OFF",
  MALFUNCTION = "MALFUNCTION"
}

export enum TransactionType {
  DONATE = "DONATE",
  TAKE = "TAKE"
}

export declare class Services {
  readonly water?: boolean | null;
  readonly clothes?: boolean | null;
  readonly fridge?: boolean | null;
  readonly bookshelf?: boolean | null;
  readonly washroom?: boolean | null;
  constructor(init: ModelInit<Services>);
}

export declare class Location {
  readonly address?: string | null;
  readonly longitude?: number | null;
  readonly latitude?: number | null;
  constructor(init: ModelInit<Location>);
}

type BooksMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookshelvesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FridgeItemsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FridgesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TransactionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ZonesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Books {
  readonly id: string;
  readonly title?: string | null;
  readonly author?: string | null;
  readonly barcode?: string | null;
  readonly bookType?: BookType | keyof typeof BookType | null;
  readonly Bookshelves?: Bookshelves | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly booksBookshelvesId?: string | null;
  constructor(init: ModelInit<Books, BooksMetaData>);
  static copyOf(source: Books, mutator: (draft: MutableModel<Books, BooksMetaData>) => MutableModel<Books, BooksMetaData> | void): Books;
}

export declare class Bookshelves {
  readonly id: string;
  readonly book_count?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Bookshelves, BookshelvesMetaData>);
  static copyOf(source: Bookshelves, mutator: (draft: MutableModel<Bookshelves, BookshelvesMetaData>) => MutableModel<Bookshelves, BookshelvesMetaData> | void): Bookshelves;
}

export declare class FridgeItems {
  readonly id: string;
  readonly name?: string | null;
  readonly barcode?: string | null;
  readonly itemType?: FridgeItemType | keyof typeof FridgeItemType | null;
  readonly Fridges?: Fridges | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly fridgeItemsFridgesId?: string | null;
  constructor(init: ModelInit<FridgeItems, FridgeItemsMetaData>);
  static copyOf(source: FridgeItems, mutator: (draft: MutableModel<FridgeItems, FridgeItemsMetaData>) => MutableModel<FridgeItems, FridgeItemsMetaData> | void): FridgeItems;
}

export declare class Fridges {
  readonly id: string;
  readonly model?: string | null;
  readonly has_item?: FridgeItemStatus | keyof typeof FridgeItemStatus | null;
  readonly status?: FridgeStatus | keyof typeof FridgeStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Fridges, FridgesMetaData>);
  static copyOf(source: Fridges, mutator: (draft: MutableModel<Fridges, FridgesMetaData>) => MutableModel<Fridges, FridgesMetaData> | void): Fridges;
}

export declare class Transactions {
  readonly id: string;
  readonly transaction_type?: TransactionType | keyof typeof TransactionType | null;
  readonly timestamp?: number | null;
  readonly FridgeItems?: FridgeItems | null;
  readonly Books?: Books | null;
  readonly Users?: Users | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly transactionsFridgeItemsId?: string | null;
  readonly transactionsBooksId?: string | null;
  readonly transactionsUsersId?: string | null;
  constructor(init: ModelInit<Transactions, TransactionsMetaData>);
  static copyOf(source: Transactions, mutator: (draft: MutableModel<Transactions, TransactionsMetaData>) => MutableModel<Transactions, TransactionsMetaData> | void): Transactions;
}

export declare class Users {
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly phone_num?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class Zones {
  readonly id: string;
  readonly name?: string | null;
  readonly location?: Location | null;
  readonly openedAt?: string | null;
  readonly Manager?: Users | null;
  readonly Fridges?: Fridges | null;
  readonly Bookshelves?: Bookshelves | null;
  readonly services?: Services | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly zonesManagerId?: string | null;
  readonly zonesFridgesId?: string | null;
  readonly zonesBookshelvesId?: string | null;
  constructor(init: ModelInit<Zones, ZonesMetaData>);
  static copyOf(source: Zones, mutator: (draft: MutableModel<Zones, ZonesMetaData>) => MutableModel<Zones, ZonesMetaData> | void): Zones;
}