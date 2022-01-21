/* eslint-disable import/no-anonymous-default-export */

// import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

// const addContact = createAction("contacts/add", ({ name, number }) => {
//   return {
//     payload: {
//       id: nanoid(),
//       name: name,
//       number: number,
//     },
//   };
// });
export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSeccess = createAction("contacts/addContactSeccess");
export const addContactError = createAction("contacts/addContactError");
export const changeFilter = createAction("contacts/changeFilter");

// export default { addContactRequest, addContactSeccess, addContactError };
