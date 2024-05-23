import React from "react"
import { CategoryList } from "./CategoryList"
export const Aside = ({ data, setSelectedCategory }) => {
    return (
        <aside className="w-72 min-h-screen bg-teal-700 p-4 flex flex-col items-center gap-4">
            <h1 className="text-white text-3xl font-semibold">
                Meals
            </h1>

            <CategoryList data={data} setSelectedCategory={setSelectedCategory} />

            
        </aside>
    )
}
