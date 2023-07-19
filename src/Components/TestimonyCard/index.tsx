import { VideoType } from "../../Interfaces/videosInterfaces";
import redDetail from "../../assets/detail-red.svg";
import { StyledTestimonyCard } from "./style";

export const TestimonyCard = ({ videoUrl }: VideoType) => {
  return (
    <StyledTestimonyCard>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoUrl}`}
        allow="autoplay; encrypted-media"
      ></iframe>
      <img src={redDetail} alt="" className="red-details" />
    </StyledTestimonyCard>
  );
};
