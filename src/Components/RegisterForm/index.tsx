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
                <label htmlFor="name"> Nome completo <span> {errors.name?.message} </span></label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome"
                    {...register("name")}
                />
                <label htmlFor="dateBirth"> Data de nascimento <span> {errors.dateBirth?.message} </span></label>
                <input
                    id="dateBirth"
                    name="dateBirth"
                    type="date"
                    {...register("dateBirth")}
                />
               
                <label htmlFor="email"> Email  <span> {errors.email?.message} </span></label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu email"
                    {...register("email")}
                />
                
                <label htmlFor="password"> Senha (8 ou mais caracteres) <span> {errors.password?.message}  </span></label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                />
                
                <label htmlFor="confirmPassword"> Confirmar senha <span> {errors.confirmPassword?.message} </span> </label> 
                <input
                    id="confirmPassword"
                    name="password"
                    type="password"
                    placeholder="Confirme sua senha"
                    {...register("confirmPassword")}
                    
                />
                
                <ButtonSubmit text={"Cadastre-se"}/>
            </form>

            <div className="divider">
                <p className="line"></p>
                <p className="text"></p>
                <p className="line"></p>
            </div>

            <LoginWithSocialMedia/>

        </StyledRegisterForm>
    );
};
