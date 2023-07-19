import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonyCard } from "../TestimonyCard";
import { StyledTestimoniesList } from "./style";
import { testimoniesVideos } from "./testimoniesVideos";

export const TestimoniesList = () => {
  return (
    <StyledTestimoniesList>
      <div className="title__section-testimonies">
        <h3>
          <strong className="focused-text-primary-color">DEPOIMENTOS:</strong>
        </h3>
        <p className="subtitle-testimonies">
          <strong> Veja o que dizem! </strong>
        </p>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          1023: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
          2500: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {testimoniesVideos.map((video) => (
          <SwiperSlide>
            <TestimonyCard
              key={video.id}
              videoUrl={video.youtubeId}
              title={video.title}
              description={video.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledTestimoniesList>
  );
};
