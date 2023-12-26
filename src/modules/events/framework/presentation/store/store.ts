import { configureStore } from "@reduxjs/toolkit";
import EventsSlice from "@events/framework/presentation/store/viewmodel/slices/events.slice";

export const store = configureStore({
  reducer: { EventsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;