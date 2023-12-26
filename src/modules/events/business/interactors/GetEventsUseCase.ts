import { createAsyncThunk } from "@reduxjs/toolkit";
import MainNetworkDataSource from "../datasource/network/MainNetworkDataSource";
import { handleUseCaseError } from "./HandleUseCaseException";

export default class GetEventsUseCase {
  constructor(private readonly mainNetworkDataSource: MainNetworkDataSource) {}

  getEvents = createAsyncThunk("event/getEventsUseCase", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await this.mainNetworkDataSource.getEvents();
    } catch (error: unknown) {
      return rejectWithValue(handleUseCaseError(error));
    }
  });
}
