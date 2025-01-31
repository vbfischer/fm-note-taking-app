import { MenuBar } from "@/ui/MenuBar"
import { MenuSidebar } from "@/ui/MenuSidebar"
import { Navigation } from "@/ui/Navigation"
import { PageHeader } from "@/ui/PageHeader"

const NotesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-neutral-0 grid grid-rows-[max-content_1fr_max-content] h-screen">
            <PageHeader />
            <Navigation className="hidden desktop:flex" />
            {children}
            <MenuSidebar className="hidden desktop:flex" />
            <MenuBar className="flex desktop:hidden" />
        </div>
    )
}

export default NotesLayout
