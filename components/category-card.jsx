import Image from "next/image";

export function CategoryCard({ category }) {
    return (
        <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:scale-105 transition-all duration-500 ease-in-out">
            <div className="flex  flex-col gap-4 items-center justify-between rounded-md p-6">
                <Image
                    src={`/assets/images/categories/${category?.thumbnail}`}
                    alt={category.title}
                    width={100}
                    height={100}
                />
                <h3 className="font-bold">{category.title}</h3>
            </div>
        </div>
    );
}
