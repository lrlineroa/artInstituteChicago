
import MainNetworkDataSourceImpl from "@events/business/datasource/network/MainNetworkDataSourceImpl";
import MainNetworkService from "@events/framework/datasource/network/MainNetworkService";
import INetworkDataSources from "./interfaces/INetworkDataSources";

export default (
  mainNetworkService: MainNetworkService
): INetworkDataSources => {
  return {
    MainNetworkDataSourceImpl: new MainNetworkDataSourceImpl(
      mainNetworkService
    ),
  };
};
