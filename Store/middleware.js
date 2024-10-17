// storageMiddleware.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveItemToStorage = createAsyncThunk(
  'storage/saveItem',
  async (item, thunkAPI) => {
    try {
      await AsyncStorage.setItem('items', JSON.stringify([item]));
    } catch (error) {
      console.error('Error saving item:', error);
    }
  },
);

export const loadItemsFromStorage = createAsyncThunk(
  'storage/loadItems',
  async (_, thunkAPI) => {
    try {
      const items = await AsyncStorage.getItem('items');
      return items ? JSON.parse(items) : [];
    } catch (error) {
      console.error('Error loading items:', error);
      return [];
    }
  },
);
