const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

// 1. Obtenemos la configuración por defecto de Expo
const config = getDefaultConfig(__dirname);

// 2. Extraemos los resolutores de Metro
const { transformer, resolver } = config;

// 3. Modificamos el transformador para que use 'react-native-svg-transformer' al leer SVGs
config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

// 4. Le decimos al resolver que ignore los SVGs como archivos normales y los trate como componentes de React
config.resolver = {
  ...resolver,
  blockList: [
    /.*\/node_modules\/react-native\/node_modules\/react-native\/.*$/,
    /.*\/node_modules\/react-native\/node_modules\/@react-native\/\.debugger-frontend-.*$/,
  ],
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"],
};

// 5. Exportamos combinándolo con NativeWind (como lo tenías originalmente)
module.exports = withNativeWind(config, { input: './global.css' });