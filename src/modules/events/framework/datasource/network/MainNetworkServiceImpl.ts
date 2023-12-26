import Event from "@events/business/domain/Event";
import { ApiResponse } from "@events/types";
import MainNetworkService from "./MainNetworkService";
const fetchEvents = async (): Promise<ApiResponse<Event[]>> => {
  const res = await fetch("https://api.artic.edu/api/v1/events");
  return await res.json();
}
export default class MainNetworkServiceImpl implements MainNetworkService {
  async getEvents(): Promise<Event[]> {
    const response = await fetchEvents();
    return response.data;
  }
}
