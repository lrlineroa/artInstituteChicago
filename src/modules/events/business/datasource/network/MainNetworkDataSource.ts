import Event from "../../domain/Event";


export default interface MainNetworkDataSource {
  getEvents(): Promise<Event[]>;
}
