'use server'

import db from "@/lib/db";
import logger from "@/lib/logger";
import { articles } from "@/model/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { category_id, title, read_estimation, content, is_published } = data;

        const article = await db.insert(articles).values({
            category_id: String(data.category_id),
            date: new Date(),
            title: String(data.title),
            read_estimation: data.read_estimation ? Number(data.read_estimation) : 0,
            content: String(data.content),
            is_published: Boolean(data.is_published)
        }).returning();

        return NextResponse.json({
            'message': 'success create article',
            'data': article,
            'error': null
        }, { status: 200 });
    } catch(e) {
        logger.error(e);
        return NextResponse.json({
            'message': 'failed create article',
            'data': null,
            'error': e
        })
    }
}