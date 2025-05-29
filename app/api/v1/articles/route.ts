'use server'

import db from "@/lib/db";
import logger from "@/lib/logger";
import { articles } from "@/model/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        logger.info("Data: %o", data);
        const { category_id, title, read_estimation, content, is_published } = data;

        const article = await db.insert(articles).values({
            category_id: category_id,
            date: new Date().toISOString().split('T')[0],
            title: title,
            read_estimation: Number(read_estimation),
            content: content,
            is_published: Boolean(is_published)
        }).returning();

        return NextResponse.json({
            'message': 'success create article',
            'data': article,
            'error': null
        }, { status: 201 });
    } catch(e) {
        return NextResponse.json({
            'message': 'failed create article',
            'data': null,
            'error': e
        })
    }
}