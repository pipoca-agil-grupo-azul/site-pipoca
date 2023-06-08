import { StyledLoginForm } from "./style";

import { useContext } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLoginForm } from "./schema";
import { ILoginFormData } from "../../Context/@types";
import { UserContext } from "../../../src/Context/userContext";

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
            <h1> Login </h1>
            <form action="" onSubmit={handleSubmit(submitLogin)}>
                <input
                    name="email"
                    type="email"
                    placeholder="Digite seu email"
                    {...register("email")}
                />
                <p> {errors.email?.message} </p>
                <input
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                />
                <p> {errors.password?.message} </p>
                <button type="submit">
                    SUBMIT
                </button>
            </form>
        </StyledLoginForm>
    );
};
