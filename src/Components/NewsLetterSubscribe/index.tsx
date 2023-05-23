import { StyledNewsletterSubscribe } from "./style";

export const NewsletterSubscribe = () => {
  return (
    <StyledNewsletterSubscribe>
      <div>
        <h2>Receba novos episódios direto no seu e-mail!</h2>
        <p> Os nossos podcasts e outras novidades são enviados diretamente para a sua caixa de email. </p>
      </div>

      <form action="">
        <input type="text" placeholder="Seu e-mail" />
        <button> Se inscreva! </button>
      </form>
    </StyledNewsletterSubscribe>
  );
};
