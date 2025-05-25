import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react'

export default function DefaultLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    )
} 