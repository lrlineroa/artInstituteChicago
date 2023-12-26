import Event from "@events/business/domain/Event";
import { EventsState } from "@events/types";
import {PayloadAction} from "@reduxjs/toolkit";
export const ReadEventEvents = () => {
  const handleReadEvent = (state: EventsState, action: PayloadAction<Event>) => {
    state.readingEvent = action.payload;
  };
  return {
    handleReadEvent
  };
};