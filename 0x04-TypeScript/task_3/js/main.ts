// Triple Slash Directive
/// <reference path="./crud.d.ts" />

// Importing types and functions
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get the RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with age field
const updatedRow: RowElement = { ...row, age: 23 };

// Call updateRow and deleteRow
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
