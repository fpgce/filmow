import React from 'react';

import * as H from './styles';

import StarSourceImage from '~/assets/png/star.png';
import SafeArea from '~/components/safe/default';

const HomeScreen = () => {
  return (
    <SafeArea>
      <H.Container>
        <H.HorizontalScroll horizontal>
          <H.Button first>
            <H.Text>Populares</H.Text>
            <H.BottonLine />
          </H.Button>
          <H.Button>
            <H.Text>Em cartaz</H.Text>
            <H.BottonLine />
          </H.Button>
          <H.Button>
            <H.Text>Minha lista</H.Text>
            <H.BottonLine />
          </H.Button>
        </H.HorizontalScroll>
        <H.HorizontalScroll horizontal>
          <H.ButtonCategory first>
            <H.Small>Ação</H.Small>
          </H.ButtonCategory>
          <H.ButtonCategory>
            <H.Small>Comédia</H.Small>
          </H.ButtonCategory>
          <H.ButtonCategory>
            <H.Small>Drama</H.Small>
          </H.ButtonCategory>
        </H.HorizontalScroll>
        <H.ScrollBanners horizontal>
          <H.ContainerBanner>
            <H.BannerImage
              source={{
                uri:
                  'https://ingresso-a.akamaihd.net/img/cinema/cartaz/22968-cartaz.jpg',
              }}
            />
            <H.CardInfo>
              <H.Row>
                <H.Text>Power</H.Text>
                <H.Row>
                  <H.Star source={StarSourceImage} />
                  <H.Small>6,6/10</H.Small>
                </H.Row>
              </H.Row>
              <H.Row style={{marginTop: 10}}>
                <H.Small light>1h 53m</H.Small>
                <H.Circle />
                <H.Small light>Ação - Crime - Ficção científica</H.Small>
              </H.Row>
            </H.CardInfo>
          </H.ContainerBanner>
          <H.ContainerBanner>
            <H.BannerImage
              source={{
                uri:
                  'https://ingresso-a.akamaihd.net/img/cinema/cartaz/22968-cartaz.jpg',
              }}
            />
            <H.CardInfo>
              <H.Row>
                <H.Text>Power</H.Text>
                <H.Row>
                  <H.Star source={StarSourceImage} />
                  <H.Small>6,6/10</H.Small>
                </H.Row>
              </H.Row>
              <H.Row style={{marginTop: 10}}>
                <H.Small light>1h 53m</H.Small>
                <H.Circle />
                <H.Small light>Ação - Crime - Ficção científica</H.Small>
              </H.Row>
            </H.CardInfo>
          </H.ContainerBanner>
        </H.ScrollBanners>
      </H.Container>
    </SafeArea>
  );
};

export default HomeScreen;
