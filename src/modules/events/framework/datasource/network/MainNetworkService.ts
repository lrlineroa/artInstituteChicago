import Event from "@events/business/domain/Event";

export default interface MainNetworkService {
  getEvents(): Promise<Event[]>;
}
