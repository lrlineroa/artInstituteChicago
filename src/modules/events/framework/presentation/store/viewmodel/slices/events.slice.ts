import di from '@events/di';
import { NAME } from '@events/framework/presentation/constants';
import {EventsState} from '@events/types';
import {createSlice} from '@reduxjs/toolkit';
import { GetEventsEvents } from '../events/GetEventsEvents';
import { ReadEventEvents } from '../events/ReadEventEvents';
const initState: EventsState = {
  events: [],
  readingEvent: null,
  isLoading: false,
  error: null,
};


const eventsSlice=createSlice({
    name:NAME,
    initialState:initState,
    reducers:{
        readEventEvent:ReadEventEvents().handleReadEvent
    },
    extraReducers:(builder) => {
        //get books
        builder.addCase(
          di.GetEventsUseCase.getEvents.pending,
          GetEventsEvents().handlePending
        );
        builder.addCase(
          di.GetEventsUseCase.getEvents.fulfilled,
          GetEventsEvents().handleFulfilled
        );
        builder.addCase(
          di.GetEventsUseCase.getEvents.rejected,
          GetEventsEvents().handleRejected
        );
    
      }
})

export const { readEventEvent } = eventsSlice.actions;
export default eventsSlice.reducer;

