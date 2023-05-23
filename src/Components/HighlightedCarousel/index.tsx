import { HighlightedEpisodeCard } from "../HighLightedEpisodeCard";
import { StyledHighlightedList } from "./style";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HighLightedCarousel = () => {
    //buscar na API os videos com highlighted = true...
  const fakeVideos = [
      { id: 1, title: "A EUROPA AGIL - Quer trabalhar na Europa? Foca no Inglês!", duration: "01:12", rate: 1, 
      youtubeId: "wR15AkpsgCE", coHost:'outrohost1', guests:'convidado1'},
      { id: 2, title: "video02 AGIL - Quer trabalhar na Europa? Foca no Inglês!", duration: "02:56", rate: 2, youtubeId: "wR15AkpsgCE", coHost:'outrohost2', guests:'convidado2'},
      { id: 3, title: "video03", duration: "01:44", rate: 3, youtubeId: "wR15AkpsgCE", coHost:'', guests:'convidado3'},
      { id: 4, title: "video04", duration: "03:28", rate: 4, youtubeId: "wR15AkpsgCE", coHost:'outrohost4', guests:'convidado4'}, 
      { id: 5, title: "video05", duration: "00:48", rate: 5, youtubeId: "wR15AkpsgCE", coHost:'', guests:'convidado5'}, 
      { id: 6, title: "video06", duration: "04:15", rate: 5, youtubeId: "wR15AkpsgCE", coHost:'outrohost6', guests:'convidado6'}
    ];

  return (
    <StyledHighlightedList>

      <Carousel 
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
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
