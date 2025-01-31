import { AuthHeader } from "@/ui/AuthHeader";
import { Label, Button, PasswordInput } from "@/ui/components";
import clsx from "clsx";

const ResetPage = () => {
    return (
        <>
            <AuthHeader title="Reset your Password" subtitle="Choose a new password to secure your account" />
            <form className={clsx("mt-[16px] flex flex-col gap-200 w-full")}
            >
                <Label htmlFor="password">New Password</Label>
                <PasswordInput id="password" name="password" hintText="At least 8 characters" />
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <PasswordInput id="confirm-password" name="confirm-password" />

                <Button variant="primary" type="submit">Reset Password</Button>
            </form>

        </>
    )
}

export default ResetPage;
