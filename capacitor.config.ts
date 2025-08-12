
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.irontemple.traininghub',
  appName: 'Iron Temple Training Hub',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    hostname: 'irontemple.app',
    androidScheme: 'https'
  },
  android: {
    path: 'android'
  }
};

export default config;
