import type { TabState } from "@/components/FilterableList"


type FilterableProps = {
    selectedTab: TabState
    isCompleted: boolean
}

export const useFilterable = ({ selectedTab, isCompleted }: FilterableProps): boolean => {
    switch (selectedTab) {
        case "Active":
            if (isCompleted)
                return true;
            return false
        case "Completed":
            if (isCompleted)
                return false;
            return true;
        default:
            return false;
    }
}