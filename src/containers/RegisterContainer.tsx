import { FormCard } from "../components/FormCard";
import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { Buttons } from "../components/Buttons";
import { apiRoute } from "../config/apiRoute";
import { setCookie } from "../lib/cookies";
import Router from "next/router";

export const RegisterContainer = () => {
    const [loader, setLoader] = useState(false);

    const [state, setState] = useState({
        email: "",
        password: "",
        name: "",
    });

    const page = "https://www.codeunic.com/dashboard"
    const otherPage = false;

    const onSubmit = (evt) => {
        evt.preventDefault();
        setLoader(true);
        fetch(apiRoute.get("register"), {
            method: "POST",
            body: JSON.stringify(state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(rs => rs.json()).then(({data, message}) => {
            setLoader(false);
            if (!data && message) {
                alert(message);
                return;
            }
            setState({name: "", email: "", password: ""});
            if (!otherPage) {
                setCookie("token", data.token, 1);
                setCookie("user", JSON.stringify(data.user), 1);
                Router.push("/dashboard");
            } else {
                window.location.href = `${page}?token=${data.token}?token_type=${data.token_type}`;
            }
        });
    };
    const onChange = (evt) => {
        setState({
            ...state,
            [evt.target.name]: evt.target.value,
        })
    }
    return (
        <>
            <Logo/>
            <FormCard onSubmit={onSubmit}>
                <Input
                    onChange={onChange}
                    name={"name"}
                    placeholder={"Name"}
                    value={state.name}
                />
                <Input
                    onChange={onChange}
                    name={"email"}
                    placeholder={"Email"}
                    value={state.email}
                    type={"email"}
                />
                <Input
                    onChange={onChange}
                    name={"password"}
                    placeholder={"Password"}
                    value={state.password}
                    type={"password"}
                />
                <Button type="submit" loader={loader}>Register</Button>
            </FormCard>
            <Buttons register/>
        </>
    );
};
