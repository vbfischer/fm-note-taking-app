'use client'
import React, { Suspense } from 'react'

import LoginForm from '@/ui/LoginForm';
import { AuthHeader } from '@/ui/AuthHeader';

const SignIn = () => {
    return (
        <>
            <AuthHeader title="Welcome to Note" subtitle="Please log in to continue" />
            <Suspense>
                <LoginForm />
            </Suspense>
        </>
    );
};

export default SignIn;
