import Event from "@events/business/domain/Event";
import di from "@events/di";
import { EventsState } from "@events/types";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


export const GetEventsEvents = () => {
  const getEventsEvent = createAsyncThunk(
    "book/getEventsEvent",
    async (_, thunkAPI) => {
      const { dispatch } = thunkAPI;
      dispatch(di.GetEventsUseCase.getEvents());
    }
  );

  const handlePending = (state: EventsState) => {
    state.isLoading = true;
    state.error = null;
  };

  const handleFulfilled = (state: EventsState, action: PayloadAction<Event[]>) => {
    state.isLoading = false;
    state.events = action.payload;
  };

  const handleRejected = (state: EventsState, action: PayloadAction<unknown>) => {
    state.isLoading = false;
    state.error = action.payload as string;
  };
  return {
    getEventsEvent,
    handlePending,
    handleFulfilled,
    handleRejected,
  };
};