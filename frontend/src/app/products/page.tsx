import { categories } from '@/data/products';
import type { Metadata } from 'next';
import ProductsPage from './ProductsClient';

// Dynamic metadata based on category
export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>;
}): Promise<Metadata> {
    const params = await searchParams;
    const categoryId = params?.category;
    const category = categoryId
        ? categories.find(c => c.id === categoryId)
        : null;

    if (category) {
        return {
            title: `${category.name} - Medical Equipment & Supplies`,
            description: `Browse ${category.productCount}+ ${category.name.toLowerCase()} products. ${category.description} Wholesale pricing from Sarvagun Enterprises, trusted by 500+ hospitals across India.`,
            keywords: [
                category.name,
                `${category.name} supplier`,
                `${category.name} wholesale`,
                `${category.name} India`,
                `${category.name} Lucknow`,
                'medical equipment',
                'hospital supplies',
                'Sarvagun Enterprises',
            ],
            openGraph: {
                title: `${category.name} | Sarvagun Enterprises`,
                description: `${category.productCount}+ products in ${category.name}. ${category.description}`,
                url: `https://sarvagunenterprises.com/products?category=${category.id}`,
                siteName: 'Sarvagun Enterprises',
                images: [
                    {
                        url: `https://sarvagunenterprises.com${category.image}`,
                        width: 800,
                        height: 600,
                        alt: category.name,
                    },
                ],
                type: 'website',
            },
        };
    }

    return {
        title: 'All Products - Medical Equipment & Supplies',
        description: 'Browse 500+ medical equipment, surgical instruments, consumables, injectables, and hospital supplies. Wholesale pricing from Sarvagun Enterprises, trusted by 500+ hospitals across India.',
        keywords: [
            'medical equipment',
            'surgical supplies',
            'medical consumables',
            'hospital supplies',
            'wholesale medical equipment',
            'Sarvagun Enterprises',
            'medical equipment India',
            'medical equipment Lucknow',
        ],
        openGraph: {
            title: 'All Products | Sarvagun Enterprises',
            description: 'Browse 500+ medical equipment and hospital supplies at wholesale prices.',
            url: 'https://sarvagunenterprises.com/products',
            siteName: 'Sarvagun Enterprises',
            type: 'website',
        },
    };
}

export default function Page() {
    return <ProductsPage />;
}
