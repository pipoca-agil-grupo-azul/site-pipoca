import { VideoType } from "../../Interfaces/videosInterfaces";
import { StyledContainerHighlightedEpisode } from "./style";

export const HighlightedEpisodeCard = ({ title, videoUrl }: VideoType) => {
  const youtubeId = videoUrl.split("=")[1];

  return (
    <StyledContainerHighlightedEpisode>
      <div className="container_youtube-embed">
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>

      <div className="container__content-highlighted-ep">
        <h2> {title} </h2>
        <p>
          Apresentado por
          <strong className="focused-text-primary-color">Ibson Cabral</strong>
        </p>
        {/* {videoContent.coHost && <p> Co-Host: {videoContent.coHost} </p>} */}
        {/* <p>
          <strong> Convidados: {videoContent.guests} </strong>
        </p>
        <p> DATA: 02/06/2023 </p> */}
      </div>
    </StyledContainerHighlightedEpisode>
  );
};
