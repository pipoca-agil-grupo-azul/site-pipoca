import { StyledBeAPartner } from "./style";
import ibsonImg from "../../assets/ibson-apontando.svg";
import petalsImg from "../../assets/petalas.svg";
import petalsRightImg from "../../assets/petalas-right.svg";

export const BeAPartner = () => {
  return (
    <StyledBeAPartner>
      <div className="container__ibson-img-and-box">
        <div className="container__be-a-partner">
          <img src={petalsImg} alt="" className="petals-img" />

          <div className="text-be-a-partner">
            <h2> Seja um parceiro </h2>
            <p>
              {" "}
              Fusce venenatis tellus a felis scelerisque. venenatis tellus a
              felis scelerisque.{" "}
            </p>
          </div>
          <a href="" className="partner-btn">
            Vamos conversar!
          </a>
        </div>

        <img src={ibsonImg} alt="" className="ibson-img" />
      </div>

      <img src={petalsRightImg} alt="" className="petals-img-right" />
    </StyledBeAPartner>
  );
};
