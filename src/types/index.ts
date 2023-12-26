import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './app-types';

export * from './app-types';

export declare type RouteNamesKeys = keyof RootStackParamList;

export declare type ScreenNavigationProp<RouteName extends RouteNamesKeys> = NativeStackNavigationProp<
	RootStackParamList,
	RouteName
>;