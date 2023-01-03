// import { createDrawerNavigator } from '@react-navigation/drawer';
import VendorHome from '../../screens/App/VendorScreen/Home';

const Drawer = createDrawerNavigator();

const VendorDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={VendorHome} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
};
export default VendorDrawer;
