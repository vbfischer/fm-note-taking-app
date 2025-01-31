import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { IconShowPassword } from '@/ui/icons'

const meta: Meta<typeof Input> = {
    component: Input
}

export default meta;

type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {
    args: {
        placeholder: "Placeholder text"
    }
}

export const IconLeft: Story = {
    args: {
        placeholder: "Placeholder text",
        contentLeft: <IconShowPassword />
    }
}

export const IconRight: Story = {
    args: {
        placeholder: "Placeholder text",
        contentRight: <IconShowPassword />
    }
}

export const HintText: Story = {
    args: {
        placeholder: "Placeholder text",
        hintText: "This is a hint text to help user"
    }
}

export const ErrorText: Story = {
    args: {
        placeholder: "Placeholder text",
        errorText: "This is an error text"
    }
}

export const Disabled: Story = {
    args: {
        placeholder: "Placeholder text",
        disabled: true
    }
}
