import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.irontemple.traininghub',
  appName: 'Iron Temple Training Hub',
  webDir: 'out',
  server: {
    androidScheme: 'http'
  }
};

export default config;
