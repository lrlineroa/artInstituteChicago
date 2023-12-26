import EventDetailsComponent from '../components/EventDetails.component';
import {useAppSelector} from '../store/hooks';

const EventDetailsContainer = () => {
  const {readingEvent} = useAppSelector(state => state.EventsSlice);
  return <EventDetailsComponent event={readingEvent} />;
};

export default EventDetailsContainer;
