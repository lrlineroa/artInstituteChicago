import Event from '@events/business/domain/Event';
import {ScrollView, StyleSheet, Text, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {Card} from 'react-native-paper';
type defaultProps = {
  events: Event[] | null;
  isLoading: boolean;
  handleEventPress: (event:Event)=>void;
};

const EventsComponent = ({events, handleEventPress}: defaultProps) => {
  const {width} = useWindowDimensions();
  return (
    <ScrollView>
      {events!.map((event, index) => (
        <Card onPress={()=>handleEventPress(event)} style={{marginTop: 12}} key={'event_' + index}>
          <Card.Cover source={{uri: event.image_url.replace(/\\/g, '')}} />
          <Card.Content>
            <RenderHtml
              key={'event_' + index}
              contentWidth={width}
              source={{
                html: event.short_description || event.list_description,
              }}
            />
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 128,
    width: 128,
    borderRadius: 64,
    marginTop: -320,
  },
});
export default EventsComponent;
