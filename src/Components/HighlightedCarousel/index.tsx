import { HighlightedEpisodeCard } from "../HighLightedEpisodeCard";
import { StyledHighlightedList } from "./style";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HighLightedCarousel = () => {
    //buscar na API os videos com highlighted = true...
  const fakeVideos = [
      { id: 1, title: "video01 - Quer trabalhar na Europa? Foca no Inglês!", duration: "01:12", rate: 1, 
      youtubeId: "wR15AkpsgCE", coHost:'outrohost1', guests:'convidado1'},
      { id: 2, title: "video02 AGIL - Quer trabalhar no Inglês? Foca na Europa!", duration: "02:56", rate: 2, youtubeId: "wR15AkpsgCE", coHost:'outrohost2', guests:'convidado2'},
      { id: 3, title: "video03 AGIL - Quer focar no trabalho? Europa na foca!", duration: "01:44", rate: 3, youtubeId: "wR15AkpsgCE", coHost:'', guests:'convidado3'},
      { id: 4, title: "inglês04 Europa - Quer focar no AGIL? Foca no video!", duration: "03:28", rate: 4, youtubeId: "wR15AkpsgCE", coHost:'outrohost4', guests:'convidado4'}, 
      { id: 5, title: "quer05 Foca - Ingles na europa? Trabalha no video!", duration: "00:48", rate: 5, youtubeId: "wR15AkpsgCE", coHost:'', guests:'convidado5'}, 
      { id: 6, title: "video06 - Quer trabalhar na Europa? Foca no Inglês!", duration: "04:15", rate: 5, youtubeId: "wR15AkpsgCE", coHost:'outrohost6', guests:'convidado6'}
    ];

  return (
    <StyledHighlightedList>

      <Carousel 
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={false}
        interval={2000}
        centerMode={true}
        centerSlidePercentage={100}
        showThumbs={false}
        emulateTouch={true}
        >

      {fakeVideos.map((video) => (
        <HighlightedEpisodeCard videoContent={video} />
      ))}
      
      </Carousel>
      
    </StyledHighlightedList>
  );
};
