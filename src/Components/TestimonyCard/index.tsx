import { IVideoInfo } from "../../Interfaces/videosInterfaces";
import { StyledTestimonyCard } from "./style";

interface Props {
  videoContent: IVideoInfo;
}

export const TestimonyCard = ({ videoContent }: Props) => {

  return (
    <StyledTestimonyCard>
      
      <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${videoContent.youtubeId}`} allow="autoplay; encrypted-media"></iframe>
      
    </StyledTestimonyCard>
  );
};