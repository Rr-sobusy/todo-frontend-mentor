import { cn } from '@/libs/utils'

export type TabState = "All" | "Active" | "Completed"

type FilterableProps = { 
    className?: string
    isDarkMode: boolean
    tabs: TabState[]
    selectedTab: TabState
    setSelectedTab: (tab: TabState) => void
}

const FilterableList = ({ className, tabs =  [ ] ,selectedTab, setSelectedTab, isDarkMode }: FilterableProps) => {
    return <ul className="flex gap-3">
        {
            tabs.map((v) => {
                const activeTab = selectedTab === v && 'text-blue-700';
                return (
                    <li key={v} onClick={() => setSelectedTab(v)} className={cn(`font-sans text-[.75rem] font-medium cursor-pointer text-foreground ${activeTab}`, className)}>{v}</li>
                )
            })
        }
    </ul>
}

export default FilterableList