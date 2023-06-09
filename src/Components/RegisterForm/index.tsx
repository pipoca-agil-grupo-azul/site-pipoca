import { StyledRegisterForm } from "./style";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegisterForm } from "./schema";
import { IRegisterFormData } from "../../Context/@types";
import { UserContext } from "../../Context/userContext";
import { ButtonSubmit } from "../ButtonSubmit";
import { LoginWithSocialMedia } from "../LoginWithSocialMedia";

export const RegisterForm = () => {
    
    const { handleSubmitRegister } = useContext( UserContext );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterFormData>({ resolver: yupResolver(schemaRegisterForm) });

    const submitRegister: SubmitHandler<IRegisterFormData> = (formData) => {
        console.log(formData)
        handleSubmitRegister(formData);
    };

    return (
        <StyledRegisterForm >
            <h1> Cadastre-se </h1>
            <form action="" onSubmit={ handleSubmit(submitRegister) }>
                <input
                    name="name"
                    type="text"
                    placeholder="Digite seu nome"
                    {...register("name")}
                />
                <p> {errors.name?.message} </p>
                 <input
                    name="dateBirth"
                    type="date"
                    {...register("dateBirth")}
                />
                <p> {errors.dateBirth?.message} </p>
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

                <ButtonSubmit text={"Cadastre-se"}/>
            </form>

            <div className="divider">
                <p className="line"></p>
                <p className="text"> ou </p>
                <p className="line"></p>
            </div>

            <LoginWithSocialMedia/>

        </StyledRegisterForm>
    );
};
