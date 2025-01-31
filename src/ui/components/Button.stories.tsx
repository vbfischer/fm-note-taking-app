import { Button } from "@/ui/components/Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    component: Button
}

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: "primary",
        children: 'Primary Button'
    }
}

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Secondary Button"
    }
}

export const Border: Story = {
    args: {
        variant: "border",
        children: "Border Button"
    }
}


