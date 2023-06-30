import { ExternalLink } from "../ExternalLink";
import { StyledWhereToWatch } from "./style";
import spotifyImg from "../../assets/spotifyPodcasts.svg";
import googleImg from "../../assets/googlePodcasts.svg";
import appleImg from "../../assets/applePodcasts.svg";
import anchorImg from "../../assets/anchor-icon.svg";

export const WhereToWatch = () => {
  return (
    <StyledWhereToWatch>
      <ExternalLink
        name="Spotify"
        img={spotifyImg}
        externalLink="https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J?si=880e573a68cb4b8d"
      />
      <ExternalLink
        name="Apple Podcasts"
        img={appleImg}
        externalLink="https://podcasts.apple.com/br/podcast/pipoca-%C3%A1gil/id1490753920"
      />
      <ExternalLink
        name="Google Podcasts"
        img={googleImg}
        externalLink="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMGVmYjE4MC9wb2RjYXN0L3Jzcw?hl=pt-br"
      />
      <ExternalLink
        name="Anchor"
        img={anchorImg}
        externalLink="https://spotifyanchor-web.app.link/e/WtHpZddKSzb"
      />
    </StyledWhereToWatch>
  );
};
