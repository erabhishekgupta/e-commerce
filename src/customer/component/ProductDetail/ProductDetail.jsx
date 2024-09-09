
'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ProductReviewCard from './ProductReviewCard';
import { Grid, Box, LinearProgress } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { mensKurta } from '../../../Data/mensKurta';

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [

        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },

    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetail() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>
                <section className='grid gird-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-20 pt-10'>
                    {/* Image gallery */}
                    <div className="flex flex-col item-center ">
                        <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                alt={product.images[0].alt}
                                src={product.images[0].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-wrap space-x-5 justify-center">
                            {product.images.map((item) =>

                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[10rem] max-h-[10rem] mt-4">
                                    <img
                                        alt={item.alt}
                                        src={item.src}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>)}

                        </div>

                    </div>
                    {/* Product info */}
                    <div className='lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8   lg:pb-24'>
                        <div className="lg:col-span-2">
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900 ">Universal Outfit</h1>
                            <h1 className="text-lg lg:text-l opacity-60 text-gray-900 pt-1">final touch given by manish sir </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            {/* <p className="text-3xl tracking-tight text-gray-900">{product.price}</p> */}
                            <div className='flex space-x-5 items-center text-lg lg:text-l text-gray-900 mt-4'>
                                <p className='font-semibold '>Rs199 </p>
                                <p className='opacity-50 line-through'> Rs200</p>
                                <p className='font-semibold text-green-600'>5%off</p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6">

                                <div className='flex item-center space-x-3'><Rating name="read-only" value={3} readOnly />
                                    <p className='opacity-47 text-sm text-indigo-400 hover:text-indigo-500'> Ratings 55650</p>
                                    <p className='opacity-47 text-sm ml-3 font-medium text-indigo-500 hover:text-indigo-600'>  Reviews 453 </p>

                                </div>

                            </div>

                            <form className="mt-10">
                                {/* Colors */}


                                {/* Sizes */}
                                <div className="my-5 ">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            Size guide
                                        </a>
                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <RadioGroup
                                            value={selectedSize}
                                            onChange={setSelectedSize}
                                            className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                        >
                                            {product.sizes.map((size) => (
                                                <Radio
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={classNames(
                                                        size.inStock
                                                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                        'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                                                    )}
                                                >
                                                    <span className="text-xs">{size.name}</span>
                                                    {size.inStock ? (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                                        />
                                                    ) : (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                viewBox="0 0 100 100"
                                                                preserveAspectRatio="none"
                                                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                            >
                                                                <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                <Button className="my-3" variant="contained" color="secondary" sx={{ px: ".75rem", py: ".5rem" }}>
                                    Add to cart
                                </Button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* rating and reviews */}
                <section className='px-20'>
                    <h1 className='font-semibold text-lg pb-4 border-none'>Recent Reviews & Ratings </h1>
                    <div className='p-5'>
                        <Grid container spacing={7}>
                            <Grid
                                item xs={7}>
                                <div className='space-y-5'>
                                    {[1, 1, 1].map((item) =>
                                        <ProductReviewCard />
                                    )}
                                </div>
                            </Grid>

                            <Grid
                                item xs={5}>
                                <h1 className='text-xl font-semibold pb-2'> Product's Reviews </h1>
                                <div className='flex items-center space-x-3'>
                                    <Rating name='read-only' value={4.6} precision={0.5} readOnly />
                                    <p className='opacity-60'>56893  Ratings </p>
                                </div>

                                <Box className="mt-5">
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p className='font-semibold items-center text-gray-600 '>Excellent</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 5 }} variant='determinate' value={65} color='success'></LinearProgress>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p className='font-semibold items-center text-gray-600 '>Very Good</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 5 }} variant='determinate' value={50} color='secondary'></LinearProgress>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p className='font-semibold items-center text-gray-600 '>Good</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 5 }} variant='determinate' value={40} color='warning'></LinearProgress>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p className='font-semibold items-center text-gray-600 '>Average</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', borderRadius: 4, color: "yellow" }} variant='determinate' value={35} className='bg-yellow-600'></LinearProgress>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p className='font-semibold items-center text-gray-600 '>Poor</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 5 }} variant='determinate' value={30} color='error'></LinearProgress>
                                        </Grid>
                                    </Grid>

                                </Box>
                            </Grid>

                        </Grid>
                    </div>
                </section>
                {/* similar product */}

                <section className='pt-10 px-20'>
                    <h1 className='py-5 text-xl font-bold'>
                        Similar Products
                    </h1>
                    <div className='flex flex-wrap space-y-5'>
                        {mensKurta.map((item) => <HomeSectionCard product={item} />)}
                    </div>

                </section>



            </div>
        </div>
    )
}

