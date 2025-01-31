/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client'

import React, { useState } from "react";
import { IconHidePassword, IconShowPassword } from "../icons";
import { Input, InputProps } from "./Input";

export interface PasswordInputProps extends InputProps { }

export const PasswordInput = (props: PasswordInputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Input {...props} name="password" id="password" type={showPassword ? "text" : "password"}
            contentRight={showPassword ? (
                <IconHidePassword className="text-neutral-600" onClick={() => setShowPassword(prev => !prev)} />
            ) : (
                <IconShowPassword className="text-neutral-600" onClick={() => setShowPassword(prev => !prev)} />
            )}
        />

    )
}
