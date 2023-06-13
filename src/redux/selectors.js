export const selectContacts = state => state.phoneBook.contacts.items;
export const selectFilter = state => state.phoneBook.filter;
export const selectIsLoading = state => state.phoneBook.contacts.isLoading;
export const selectError = state => state.phoneBook.contacts.error;
