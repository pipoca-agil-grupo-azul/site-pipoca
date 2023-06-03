import { StyledContainerNextEpisode } from "./style";
import { IVideoInfo } from "../../Interfaces/videosInterfaces";

interface Props {
    videoContent: IVideoInfo;
}

export const HighlightedEpisodeCard = ({ videoContent }: Props) => {
 
    return (
        <StyledContainerNextEpisode>
              
            <div className="container_youtube-embed">
                    <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${videoContent.youtubeId}`} allow="autoplay; encrypted-media"></iframe>
                </div>
                
                <div className="container__content-highlighted-ep">
                    <h2> {videoContent.title} </h2>
                    <p> Apresentado por <strong className="focused-text-primary-color"> Ibson Cabral </strong> </p>
                    {videoContent.coHost && <p> Co-Host: {videoContent.coHost} </p> }
                    <p> <strong> Convidados: {videoContent.guests} </strong> </p>
                    <p> DATA: 02/06/2023 </p> 
                </div>

        </StyledContainerNextEpisode>
    );
};