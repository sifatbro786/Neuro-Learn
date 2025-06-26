import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/model/category-model";

export async function getCategories() {
    try {
        const categories = await Category.find({}).lean();
        return replaceMongoIdInArray(categories);
    } catch (err) {
        throw new Error(err);
    }
}

export async function getCategoryDetails(categoryId) {
    try {
        const category = await Category.findById(categoryId).lean();
        return replaceMongoIdInObject(category);
    } catch (err) {
        throw new Error(err);
    }
}
