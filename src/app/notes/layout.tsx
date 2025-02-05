import { MobilePageHeader } from "@/ui/MobilePageHeader"
import { Navigation } from "@/ui/Navigation"
import clsx from "clsx"

const NotesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className={
                clsx(
                    "bg-neutral-0 h-screen",
                    "grid grid-rows-[max-content_1fr_max-content]",
                    "desktop:grid-cols-[240px_290px_1fr]"
                )
            }>
                <MobilePageHeader className="desktop:hidden" />
                <Navigation className="hidden desktop:flex desktop:col-start-1 desktop:row-span-full" />
                {children}
            </div>
        </>
    )
}

export default NotesLayout
