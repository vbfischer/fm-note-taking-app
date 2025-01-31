import { Modal } from "@/ui/components"
import clsx from "clsx"

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center px-200">
            <Modal className={clsx(
                "gap-200 px-200 py-500 w-full",
                "tablet:px-400 tablet:max-w-[522px]")} >
                {children}
            </Modal>
        </div>
    )
}

export default LoginLayout
