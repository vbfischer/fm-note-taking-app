'use client'
import { signupAction } from "@/app/actions";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { Label, Input, PasswordInput, Button, Separator, Text } from "./components";
import { IconGoogle } from "./icons";

export const SignupForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/notes';

    const [errorMessage, formAction, isPending] = useActionState(
        signupAction,
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
                <PasswordInput name="password" id="password" hintText="At least 8 characters" />
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
