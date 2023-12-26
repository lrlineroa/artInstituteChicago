import Event from '@events/business/domain/Event';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {Card} from 'react-native-paper';
type defaultProps = {
  event: Event | null;
};

const EventDetailsComponent = ({event}: defaultProps) => {
  const {width} = useWindowDimensions();
  return (
    <ScrollView>
      <Image src={event!.image_url.replace(/\\/g, '')} />
      <RenderHtml
        contentWidth={width}
        source={{
          html: event!.description,
        }}
      />
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
export default EventDetailsComponent;
