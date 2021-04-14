import React, { useState } from "react";
import { Dashboard } from "../../src/components/Dashboard";
import { Input } from "../../src/components/Input";
import { Button } from "../../src/components/Button";
import { apiRoute } from "../../src/config/apiRoute";
import { useAppContext } from "../../src/context/AppContext";
import { setCookie } from "nookies";

export default function Setting() {
    const {token, user} = useAppContext();
    const [state, setState] = useState({
        username: user.email,
        name: user.name,
        loader: false,
    });
    const onChange = (evt) => {
        setState(prev => ({...prev, [evt.target.name]: evt.target.value}));
    };
    const onSave = async (evt) => {
        evt.preventDefault();
        const {loader, ...stateAuth} = state;
        if (!state.username.length || !state.name.length) {
            return;
        }
        setState(prev => ({...prev, loader: true}));
        const {data} = await fetch(apiRoute.get("update"), {
            method: "PUT",
            body: JSON.stringify(stateAuth),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(rs => rs.json());
        setCookie(null, 'user', JSON.stringify(data), {
            maxAge: 30 * 24 * 60 * 60,
        })
        setState(prev => ({...prev, loader: false, username: data.username, name: data.name}));
    };
    return (
        <Dashboard title={"Setting"}>
            <form onSubmit={onSave}>
                <Input onChange={onChange} value={state.username} placeholder={"Email"} name={"username"}/>
                <Input onChange={onChange} value={state.name} placeholder={"Name"} name={"name"}/>
                <Button type={"submit"} loader={state.loader}>Save</Button>
            </form>
        </Dashboard>
    )
}
