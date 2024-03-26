import styles from "./Register.module.css";
import registerImg from "../../assets/register.jpg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";

interface RegisterForm {
    email: {
        value: string;
    };
    password: {
        value: string;
    };
}

const Register = () => {
    const [error, setError] = useState<string | null>("");
    const navigate = useNavigate();

    const createAccout = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        const target = e.target as typeof e.target & RegisterForm;
        const { email, password } = target;
        await createAccountFetch(email.value, password.value);
    };

    const createAccountFetch = async (email: string, password: string) => {
        try {
            const { data } = await axios.post(
                "https://46d567239b49bc07.mokky.dev/register",
                {
                    email,
                    password,
                }
            );
            navigate("/login");
            console.log(data);
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.message);
            }
        }
    };
    return (
        <div className={styles["register"]}>
            <div className={styles["register-content"]}>
                <div className={styles["register-img"]}>
                    <img src={registerImg} alt="Register" />
                </div>

                <div className={styles["register-item"]}>
                    <h2 className={styles["register-title"]}>Регистрация</h2>

                    {error && (
                        <span
                            style={{ color: "red", textTransform: "uppercase" }}
                        >
                            {error}
                        </span>
                    )}
                    <form
                        onSubmit={createAccout}
                        className={styles["register-form"]}
                    >
                        <div className={styles["register-email"]}>
                            <label htmlFor="">Ваш email</label>
                            <Input placeholder="Email" name="email" />
                        </div>
                        <div className={styles["register-password"]}>
                            <label htmlFor="">Ваш пароль</label>
                            <Input
                                placeholder="Пароль"
                                type="password"
                                name="password"
                            />
                        </div>
                        <Button children={"Sing Up"} />
                    </form>

                    <div className={styles["no-register"]}>
                        <p>Есть аккаунт?</p>
                        <Link to={"/login"}>Войти</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
