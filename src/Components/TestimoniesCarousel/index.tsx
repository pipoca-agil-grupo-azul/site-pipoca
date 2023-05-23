import { TestimonyCard } from "../TestimonyCard";
import { StyledTestimoniesList } from "./style";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination  } from "swiper";

export const TestimoniesList = () => {
  const fakeVideos = [
    { id: 1, title: "videoDEPOIMENTO01", duration: "01:12", rate: 1, youtubeId: "wR15AkpsgCE", coHost:'outrohost1', guests:'convidado1'},
    { id: 2, title: "videoDEPOIMENTO02", duration: "02:56", rate: 2, youtubeId: "wR15AkpsgCE", coHost:'outrohost2', guests:'convidado2'},
    { id: 3, title: "videoDEPOIMENTO03", duration: "01:44", rate: 3, youtubeId: "wR15AkpsgCE", coHost:'', guests:'convidado3'},
    { id: 4, title: "videoDEPOIMENTO04", duration: "03:28", rate: 4, youtubeId: "wR15AkpsgCE", coHost:'outrohost4', guests:'convidado4'}
  ];

  return (
    <StyledTestimoniesList>
      <div className="title__section-testimonies">
        <h3> <strong className="focused-text-primary-color">DEPOIMENTOS:</strong> </h3>
        <p className="subtitle-testimonies"> <strong> Veja o que dizem! </strong></p>
         
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
        }
      }}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}

      >
      {fakeVideos.map((video) => (
        <SwiperSlide>
          
          <TestimonyCard key={video.id} videoContent={video} />

        </SwiperSlide>
        
      ))}
    </Swiper>
     
      
      
    </StyledTestimoniesList>
  );
};