'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from 'react'
import DashboardHeader from '../../__components/header'
import { z } from 'zod'
import { FormCreateArticle } from '@/lib/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import MDEditor from '@uiw/react-md-editor'
import axios from 'axios'
import { getCategories } from "@/actions/get-categories";


type Category = {
    id: string;
    name: string;
}

type FormCreateArticleType = z.infer<typeof FormCreateArticle>;

const CreateArticlePage = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            setCategories(data);
        };

        fetchCategories();
    }, [])

    const form = useForm<FormCreateArticleType>({
        defaultValues: {
            category_id: '',
            title: '',
            read_estimation: '0',
            content: '',
            is_published: false
        },
        mode: "onChange",
        resolver: zodResolver(FormCreateArticle),
    })

    const onSubmit = async (data: FormCreateArticleType, action: 'draft' | 'publish') => {
        try {
            setIsSubmitting(true);
            console.log("Submitting data:", data);

            const req = await axios.post('http://localhost:3000/api/v1/articles', {
                category_id: data.category_id,
                title: data.title,
                read_estimation: Number(data.read_estimation),
                content: data.content,
                is_published: action === 'publish'
            });

            form.reset()
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='min-h-screen bg-gray-50'>
            <DashboardHeader title='Create Article' isCreate={false} />

            <div className="max-w-4xl mx-auto p-6">
                <Form {...form}>
                    <form className="w-full">
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
                                            className="bg-white border-gray-700"
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
                                            <DropdownMenuTrigger asChild className="bg-white border-gray-700">
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
                            <div className="flex gap-4">
                                <Button
                                    type='button'
                                    onClick={form.handleSubmit((data) => onSubmit(data, 'draft'))}
                                    disabled={isSubmitting}
                                    className='bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors'
                                >
                                    {isSubmitting ? 'Menyimpan...' : 'Simpan sebagai Draft'}
                                </Button>
                                <Button
                                    type='button'
                                    onClick={form.handleSubmit((data) => onSubmit(data, 'publish'))}
                                    disabled={isSubmitting}
                                    className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                                >
                                    {isSubmitting ? 'Mempublikasi...' : 'Publikasikan Artikel'}
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default CreateArticlePage


