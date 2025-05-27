import { boolean, date, json, pgTable, smallint, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const projectCategories = pgTable('project_categories', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 255 }).notNull(),
})

export const articleCategories = pgTable('article_categories', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', {length: 255}).notNull()
})

export const projects = pgTable('projects', {
    id: uuid('id').primaryKey().defaultRandom(),
    category_id: uuid('category_id').references(() => projectCategories.id),
    name: varchar('name', { length: 255 }).notNull(),
    company: varchar('company', { length: 255 }),
    description: text('description'),
    image: varchar('image', { length: 255 }).notNull(),
    start_date: date('start_date').notNull(),
    end_date: date('end_date').notNull(),
    technologies: json('technologies').$type<string[]>().notNull(),
})

export const articles = pgTable('articles', {
    id: uuid('id').primaryKey().defaultRandom(),
    category_id: uuid('category_id').references(() => articleCategories.id),
    title: varchar('title', { length: 255 }).notNull(),
    date: date('date').notNull(),
    read_estimation: smallint('read_estimation').notNull(),
    content: text('content').notNull(),
    is_published: boolean('is_published').notNull().$default(() => false),
})

export const activities = pgTable('activities', {
    id: uuid('id').primaryKey().defaultRandom(),
    ip_address: varchar('ip_address', { length: 255 }).notNull(),
    user_agent: varchar('user_agent', { length: 255 }).notNull(),
    metadata: json('metadata').notNull(),
    created_at: timestamp('created_at').notNull()
})

export const messages = pgTable('messages', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', {length: 255}).notNull(),
    email: varchar('email', {length: 255}).notNull().unique(),
    message: text('message').notNull()
})