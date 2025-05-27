'use server'

import { articleCategories } from "@/model/schema";
import db from "./db";

async function main() {
    await db.insert(articleCategories).values([{name: 'Personal Development'}, {name: 'Web Development'}, {name: 'AI & Technologies'}, {name: 'Frontend Development'}, {name: 'Backend Development'}]);
}

main();