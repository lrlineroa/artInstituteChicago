import Event from '@events/business/domain/Event';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '@types';
import { useEffect } from 'react';
import EventsComponent from '../components/Events.component';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import { GetEventsEvents } from '../store/viewmodel/events/GetEventsEvents';
import { readEventEvent } from '../store/viewmodel/slices/events.slice';

const EventsContainer = () => {
  const {isLoading, events} = useAppSelector(state => state.EventsSlice);
  const navigation = useNavigation<ScreenNavigationProp<'Events'>>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetEventsEvents().getEventsEvent());
  }, [dispatch]);
  const handleOnPress = (event:Event)=>{
    dispatch(readEventEvent(event));
    navigation.navigate("EventDetails")
  }
  return <EventsComponent events={events} isLoading={isLoading} handleEventPress={handleOnPress} />;
};

export default EventsContainer;
