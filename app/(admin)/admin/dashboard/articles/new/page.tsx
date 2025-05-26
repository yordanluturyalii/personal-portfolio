'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import React from 'react'
import DashboardHeader from '../../__components/header'
import { z } from 'zod'
import { FormCreateArticle } from '@/lib/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import MDEditor from '@uiw/react-md-editor'


const categories = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "Personal" },
    { id: 3, name: "AI & Technology" },
];

type FormCreateArticleType = z.infer<typeof FormCreateArticle>;

const CreateArticlePage = () => {

    const form = useForm<FormCreateArticleType>({
        defaultValues: {
            category_id: 0,
            title: '',
            read_estimation: '',
            content: '',
        },
        mode: "onChange",
        resolver: zodResolver(FormCreateArticle),
    })

    const onSubmit = (data: FormCreateArticleType) => {
        console.log(data);
    };

    return (
        <div className='min-h-screen bg-gray-50'>
            <DashboardHeader title='Create Article' isCreate={false} />

            <div className="max-w-4xl mx-auto p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                        <FormField
                            control={form.control}
                            name='title'
                            render={({ field }) => (
                                <FormItem className='mb-5'>
                                    <FormLabel className='text-lg'>Title</FormLabel>
                                    <FormControl>
                                        <Input className='bg-white border-gray-700' placeholder="Judul artikel yang akan kamu post" autoFocus {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='read_estimation'
                            render={({ field }) => (
                                <FormItem className='mb-5'>
                                    <FormLabel className='text-lg'>Reading Estimation</FormLabel>
                                    <FormControl>
                                        <Input className='bg-white border-gray-700' placeholder="Perkiraan waktu membaca" type='number' autoFocus {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='content'
                            render={({ field }) => (
                                <FormItem className='mb-5'>
                                    <FormLabel className='text-lg'>Content</FormLabel>
                                    <FormControl data-color-mode='light'>
                                        <MDEditor
                                            value={field.value}
                                            onChange={(value) => field.onChange(value)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="category_id"
                            render={({ field }) => (
                                <FormItem className="mb-5">
                                    <FormLabel className="text-lg w-full">Category</FormLabel>
                                    <FormControl className="w-full">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" className="w-full justify-between">
                                                    {categories.find(cat => cat.id === field.value)?.name || "Select category"}
                                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-full justify-between">
                                                {categories.map((category) => (
                                                    <DropdownMenuItem
                                                        key={category.id}
                                                        onClick={() => field.onChange(category.id)}
                                                        className="w-full"
                                                    >
                                                        {category.name}
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end mt-6 pt-6 border-t">
                            <Button
                                type='submit'
                                className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                            >
                                Create Article
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default CreateArticlePage


