import { Asset } from 'expo-asset'

// png/jpeg
export const images = {
  docs_icon: require('../../../assets/images/docs_icon.png'),
  microscope_icon: require('../../../assets/images/microscope_icon.png'),
  sample_icon: require('../../../assets/images/sample_icon.png'),
  upload_done_icon: require('../../../assets/images/upload_done_icon.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())
