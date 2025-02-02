import { MenuBar } from "@/ui/MenuBar"
import { Navigation } from "@/ui/Navigation"
import { PageHeader } from "@/ui/PageHeader"
import clsx from "clsx"

const NotesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={
            clsx(
                "bg-neutral-0 h-screen",
                "grid grid-rows-[max-content_1fr_max-content]",
                "desktop:grid-cols-[auto_1fr]"
            )
        }>
            <PageHeader className="desktop:hidden" />
            <Navigation className="hidden desktop:flex desktop:col-start-1 desktop:row-span-full w-[240px]" />

            <PageHeader className="hidden desktop:col-start-1 desktop:row-start-1" />
            <div className="px-200 py-250 flex flex-col">

                {children}
            </div>
            <MenuBar className="flex desktop:hidden" />
        </div>
    )
}

export default NotesLayout
