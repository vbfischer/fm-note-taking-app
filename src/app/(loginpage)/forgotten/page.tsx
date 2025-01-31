import { AuthHeader } from "@/ui/AuthHeader"
import { Button, Input, Label } from "@/ui/components"
import clsx from "clsx"

const ForgottonPage = () => {
    return (
        <>
            <AuthHeader title="Forgot your Password?" subtitle="Enter your email below, and we’ll send you a link to reset it." />
            <form className={clsx("mt-[16px] flex flex-col gap-200 w-full")}
            >
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" name="email" placeholder="email@example.com" />
                <Button variant="primary" type="submit">Send Reset Link</Button>
            </form>
        </>
    )
}

export default ForgottonPage
