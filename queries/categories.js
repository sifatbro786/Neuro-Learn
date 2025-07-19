import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/model/category-model";
import { dbConnect } from "@/service/mongo";

export async function getCategories() {
    await dbConnect();

    try {
        const categories = await Category.find({}).lean();
        return replaceMongoIdInArray(categories);
    } catch (err) {
        throw new Error(err);
    }
}

export async function getCategoryDetails(categoryId) {
    await dbConnect();

    try {
        const category = await Category.findById(categoryId).lean();
        return replaceMongoIdInObject(category);
    } catch (err) {
        throw new Error(err);
    }
}
