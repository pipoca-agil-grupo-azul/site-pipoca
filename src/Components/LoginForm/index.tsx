import { StyledLoginForm } from "./style";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLoginForm } from "./schema";
import { ILoginFormData } from "../../Context/@types";
import { UserContext } from "../../../src/Context/userContext";
import { ButtonSubmit } from "../ButtonSubmit";
import { LoginWithSocialMedia } from "../LoginWithSocialMedia";

export const LoginForm = () => {
    
    const { handleSubmitLogin } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFormData>({ resolver: yupResolver(schemaLoginForm) });

    const submitLogin: SubmitHandler<ILoginFormData> = (formData) => {
        handleSubmitLogin(formData);
    };

    return (
        <StyledLoginForm >
            <h1> Entre e divirta-se! </h1>
            <form action="" onSubmit={handleSubmit(submitLogin)}>
                <label htmlFor="email"> Email </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu email"
                    {...register("email")}
                />
                <p> {errors.email?.message} </p>
                <label htmlFor="password"> Senha </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                />
                <p> {errors.password?.message} </p>
                <ButtonSubmit text={"Entre"}/>
                
            </form>
            <div className="divider">
                <p className="line"></p>
                <p className="text"> </p>
                <p className="line"></p>
            </div>

            <LoginWithSocialMedia/>
        </StyledLoginForm>
    );
};
