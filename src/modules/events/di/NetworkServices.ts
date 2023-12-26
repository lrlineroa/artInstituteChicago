import MainNetworkServiceImpl from "@events/framework/datasource/network/MainNetworkServiceImpl";
import INetworkService from "./interfaces/INetworkService";

export default (): INetworkService => {
  return {
    MainNetworkServiceImpl: new MainNetworkServiceImpl(),
  };
};
