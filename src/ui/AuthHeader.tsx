import clsx from 'clsx';
import React from 'react';
import { Logo } from './icons';
import { Text } from '@/ui/components'

export interface AuthHeaderProps {
    title: string;
    subtitle: string;
}

export const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
    return (
        <div className={clsx("flex flex-col gap-200 items-center")}>
            <Logo />
            <Text size="xl" weight="bold">{title}</Text>
            <Text centered size="sm" variant="secondary">{subtitle}</Text>
        </div>

    )
}
