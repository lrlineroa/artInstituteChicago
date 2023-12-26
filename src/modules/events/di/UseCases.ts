import MainNetworkDataSource from "@events/business/datasource/network/MainNetworkDataSource";
import GetEventsUseCase from "@events/business/interactors/GetEventsUseCase";
import IUseCases from "./interfaces/IUseCases";

export default (mainNetworkDataSource: MainNetworkDataSource): IUseCases => {
    return {
      GetEventsUseCase: new GetEventsUseCase(mainNetworkDataSource),
    };
  };