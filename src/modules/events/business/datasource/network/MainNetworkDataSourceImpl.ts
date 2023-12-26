import MainNetworkService from "@events/framework/datasource/network/MainNetworkService";
import Event from "../../domain/Event";
import MainNetworkDataSource from "./MainNetworkDataSource";


export default class MainNetworkDataSourceImpl
  implements MainNetworkDataSource
{
  constructor(private readonly mainNetworkService: MainNetworkService) {}

  async getEvents(): Promise<Event[]> {
    return this.mainNetworkService.getEvents().then((event) => event);
  }

}
