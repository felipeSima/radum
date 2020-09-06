import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import Routes from './src/core/navigation';
import {colors, fonts} from './src/core/themes/index';

const App = () => {
  const [didLoad, setDidLoad] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const handleLoadAssets = async () => {
    await Promise.all([...fonts.fontAssets])
    setAssetsLoaded(true)
  }

  const handleLoading = async () => {
    handleLoadAssets()
    setDidLoad(assetsLoaded)
  }

  useEffect(() => {
    handleLoading();
  }, [didLoad,assetsLoaded])

  if(!didLoad) {return (<View/>)}
  return (
    <Routes/>
  );
}

export default App;
