import { HighLightedCarousel } from "../../Components/HighlightedCarousel";
import { NewsletterSubscribe } from "../../Components/NewsLetterSubscribe";
import { Subscribe } from "../../Components/Subscribe";
import { StyledHomePage } from "./style";
import { BeAPartner } from "../../Components/BeAPartner";
import { TestimoniesList } from "../../Components/TestimoniesCarousel";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <section className="greetings-section">
        <div className="next-episode">
          <h1>
            O Podcast mais animado do
            <span className="focused-text-primary-color"> Mundo Ágil </span>
          </h1>
          <HighLightedCarousel />
        </div>
      </section>

      <section className="third-section__last-episodes">
        < TestimoniesList />
      </section> 

      <section className="newletter-section">
        <NewsletterSubscribe/>
      </section>

      <section className="subscribe-section">
        <Subscribe />
      </section>

      <section className="partnership-section">
        <BeAPartner/>
      </section>

      
    </StyledHomePage>
  );
};
