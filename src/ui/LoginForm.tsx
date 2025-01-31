'use client'
import { useActionState } from "react"

import clsx from "clsx"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { PasswordInput, Button, Input, Label, Text, Separator } from "./components";
import { logInAction } from "@/app/actions"
import { IconGoogle } from "./icons"

export const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/notes';

    const [errorMessage, formAction, isPending] = useActionState(
        logInAction,
        undefined
    );

    return (
        <form
            className={clsx("flex flex-col gap-200 w-full mt-[24px]")}
            action={formAction}
        >
            <Label htmlFor="email">
                Email Address
                <Input name="email" id="email" placeholder="email@example.com" />
            </Label>
            <Label htmlFor="password">
                <span className="flex justify-between">Password<Link href="/forgotten">Forgot</Link></span>
                <PasswordInput name="password" id="password" />
            </Label>
            <Button variant="primary" type="submit" name="action" value="credentials" aria-disabled={isPending}>Login</Button>
            <Separator />
            <Text centered variant="secondary" size="sm">Or log in with:</Text>
            <input type="hidden" name="redirectTo" value={callbackUrl} />

            <Button variant="border" type="submit" name="action" value="google" aria-disabled={isPending}><IconGoogle />Google</Button>
            <Separator />
            <Text centered variant="secondary" size="sm">No account yet? <Link href="signIn" className="text-neutral-950">Sign Up</Link></Text>
            <div className="flex h-8 items-end space-x-1">
                {errorMessage && (
                    <>
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                )}
            </div>

        </form>

    )
}

export default LoginForm;
