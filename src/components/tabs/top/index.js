import React, {useCallback, useRef, useEffect} from 'react';

import * as T from './styles';

import useMovies from '~/context/movies';

const TopTabNavigator = () => {
  const ScrollRef = useRef(null);
  const {currentTabIndex, setCurrentTabIndex} = useMovies();

  useEffect(() => {
    if (ScrollRef.current) {
      ScrollRef.current.scrollToIndex({animated: true, index: currentTabIndex});
    }
  }, [currentTabIndex]);

  const updateIndex = useCallback(
    (index) => {
      setCurrentTabIndex(index);
      if (ScrollRef.current) {
        ScrollRef.current.scrollToIndex({animated: true, index});
      }
    },
    [setCurrentTabIndex],
  );

  return (
    <T.HorizontalFlatList
      ref={ScrollRef}
      onScrollToIndexFailed={() => {}}
      horizontal
      getItemLayout={(data, index) => ({
        length: data.length,
        offset: index * 50,
        index,
      })}
      data={['Populares', 'Em cartaz', 'Melhores']}
      keyExtractor={(item, index) => String(index)}
      renderItem={({item, index}) => (
        <T.Button first={index === 0} onPress={() => updateIndex(index)}>
          <T.Text>{item}</T.Text>
          <T.BottonLine active={currentTabIndex === index} />
        </T.Button>
      )}
    />
  );

  //   return (
  //     <T.HorizontalScroll horizontal>
  //       <T.Button onPress={() => updateIndex(0)}>
  //         <T.Text>Populares</T.Text>
  //         <T.BottonLine active={currentTabIndex === 0} />
  //       </T.Button>
  //       <T.Button onPress={() => updateIndex(1)}>
  //         <T.Text>Em cartaz</T.Text>
  //         <T.BottonLine active={currentTabIndex === 1} />
  //       </T.Button>
  //       <T.Button onPress={() => updateIndex(2)}>
  //         <T.Text>Minha lista</T.Text>
  //         <T.BottonLine active={currentTabIndex === 2} />
  //       </T.Button>
  //     </T.HorizontalScroll>
  //   );
};

export default TopTabNavigator;
