import { StyledInformationPreHeader } from "./style";
import iconPin from "../../assets/icon _pin alt.svg";
import iconPhone from "../../assets/icon _phone.svg";
import iconMail from "../../assets/icon _mail.svg";

export const InformationPreHeader = () => {
  
  const getFormattedDate = (): string => {
  
    const currentDate: Date = new Date();
    const day: string = currentDate.toLocaleDateString('pt-BR', { day: 'numeric' });
    const month: string = currentDate.toLocaleDateString('pt-BR', { month: 'long' });
    const year: string = currentDate.toLocaleDateString('pt-BR', { year: 'numeric' });

    const capitalizedMonth: string = month.charAt(0).toUpperCase() + month.slice(1);

    return `${day} de ${capitalizedMonth} ${year}`;
  };

  return (
    <StyledInformationPreHeader>
      <div className="container__only-desktop">
        <img src={iconPin} alt="" />
        <p> Rio de Janeiro </p>
        <p>  {getFormattedDate()} </p>
      </div>

      <div>
        <img src={iconPhone} alt="" />
        <p> +55 21 97143-9655 </p>
        <img src={iconMail} alt="" />
        <p> contato@email.com </p>
      </div>
    </StyledInformationPreHeader>
  );
};
