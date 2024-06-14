import { cn } from '@/libs/utils'

export type TabState = "All" | "Active" | "Completed"

type FilterableProps = { 
    className?: string
    tabs: TabState[]
    selectedTab: TabState
    setSelectedTab: (tab: TabState) => void
}

const FilterableList = ({ className, tabs =  [ ] ,selectedTab, setSelectedTab }: FilterableProps) => {
    return <ul className="flex gap-3">
        {
            tabs.map((v) => {
                const activeTab = v === selectedTab ? 'text-blue-700' : 'text-background'
                return (
                    <li onClick={() => setSelectedTab(v)} className={cn(`font-sans text-[.75rem] font-medium cursor-pointer ${activeTab}`, className)}>{v}</li>
                )
            })
        }
    </ul>
}

export default FilterableList