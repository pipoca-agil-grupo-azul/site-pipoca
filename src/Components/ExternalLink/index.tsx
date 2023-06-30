import { StyledExternalLink } from "./style";

interface Props {
  name: string;
  img: string;
  externalLink: string;
}

export const ExternalLink = ({ name, img, externalLink }: Props) => {
  return (
    <StyledExternalLink>
      <a href={externalLink} target="_blank">
        <img src={img} alt="" />
        <p> {name}</p>
      </a>
    </StyledExternalLink>
  );
};
