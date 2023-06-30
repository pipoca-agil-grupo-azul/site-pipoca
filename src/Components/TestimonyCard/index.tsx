import { IVideoInfo } from "../../Interfaces/videosInterfaces";
import { StyledTestimonyCard } from "./style";
import redDetail from "../../assets/detail-red.svg";

interface Props {
  videoContent: IVideoInfo;
}

export const TestimonyCard = ({ videoContent }: Props) => {
  return (
    <StyledTestimonyCard>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoContent.youtubeId}`}
        allow="autoplay; encrypted-media"
      ></iframe>
      <img src={redDetail} alt="" className="red-details" />
    </StyledTestimonyCard>
  );
};
