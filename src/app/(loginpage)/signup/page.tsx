import { AuthHeader } from "@/ui/AuthHeader"
import LoginForm from "@/ui/LoginForm"
import { Suspense } from "react"

const SignupPage = () => {
    return (
        <>
            <AuthHeader title="Create Your Account" subtitle="Sign up to start organizing your notes and boost your productiviy." />
            <Suspense>
                <LoginForm />
            </Suspense>
        </>

    )
}

export default SignupPage
