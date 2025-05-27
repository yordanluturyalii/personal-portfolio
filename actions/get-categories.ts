'use server'

import db from "@/lib/db"
import logger from "@/lib/logger";
import { articleCategories } from "@/model/schema"

export const getCategories = async() => {
    const categories = await db.select({id: articleCategories.id, name: articleCategories.name}).from(articleCategories);
    return categories;
}