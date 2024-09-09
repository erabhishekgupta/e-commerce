import React from 'react';


export const color = [
    "white",
    "Balck",
    "Red",
    "Marun",
    "Beige",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "brown", label: "Brown" },
            { value: "blue", label: "Blue" },
            { value: "pink", label: "Pink" },
            { value: "green", label: "Green" },
            { value: "yellow", label: "Yellow" }
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'S', label: 'S' },
            { value: 'M', label: 'M' },
            { value: 'L', label: 'L' }
        ],
    },
];

export const singlefilters = [

    {
        id: "price",
        name: "Price",
        options: [
            { value: "150-399", label: "₹150 To ₹399" },
            { value: "399-599", label: "₹399 To ₹599" },
            { value: "599-1099", label: "₹599 To ₹1099" },
            { value: "1099-2099", label: "₹1099 To ₹2099" },
            { value: "2099-3199", label: "₹2099 To ₹3199" },
            
        ],
    },

    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10", label: "10% And Above" },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
            { value: "70", label: "70% And Above" },
            { value: "80", label: "80% And Above" },
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out Of Stock" },
        ],
    },
]

export const sortOptions = [
    {
        name: "Price : Low to High", query: "price_low", current: false
    },
    {
        name: "Price : High to Low", query: "price_high", current: false
    }
]
