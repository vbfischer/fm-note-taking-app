import { AuthHeader } from "@/ui/AuthHeader"
import { SignupForm } from "@/ui/SignupForm"
import { Suspense } from "react"

const SignupPage = () => {
    return (
        <>
            <AuthHeader title="Create Your Account" subtitle="Sign up to start organizing your notes and boost your productiviy." />
            <Suspense>
                <SignupForm />
            </Suspense>
        </>
    )
}

export default SignupPage
