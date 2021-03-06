import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList34215Navigator from '../features/ArticleList34215/navigator';
import ArticleList34214Navigator from '../features/ArticleList34214/navigator';
import ArticleList34213Navigator from '../features/ArticleList34213/navigator';
import CalendarView34211Navigator from '../features/CalendarView34211/navigator';
import ArticleList33718Navigator from '../features/ArticleList33718/navigator';
import ArticleList33717Navigator from '../features/ArticleList33717/navigator';
import ArticleList33716Navigator from '../features/ArticleList33716/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList34215: { screen: ArticleList34215Navigator },
ArticleList34214: { screen: ArticleList34214Navigator },
ArticleList34213: { screen: ArticleList34213Navigator },
CalendarView34211: { screen: CalendarView34211Navigator },
ArticleList33718: { screen: ArticleList33718Navigator },
ArticleList33717: { screen: ArticleList33717Navigator },
ArticleList33716: { screen: ArticleList33716Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
