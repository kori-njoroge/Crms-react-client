export const salesObject = [
    {
        id: 1,
        items: [
            {
                id: 1,
                productName: 'Product A',
                status: 'Complete',
                price: 10,
                quantity: 2
            },
            {
                id: 2,
                productName: 'Product B',
                status: 'Refunded',
                price: 5,
                quantity: 1
            }, {
                id: 4,
                productName: 'Product B',
                status: 'Refunded',
                price: 5,
                quantity: 1
            }, {
                id: 6,
                productName: 'Product B',
                status: 'Refunded',
                price: 5,
                quantity: 1
            },
            {
                id: 2,
                productName: 'Product B',
                status: 'Refunded',
                price: 5,
                quantity: 1
            }
        ],
        employee: {
            id: 1,
            name: 'John Doe'
        },
        customer: {
            id: 1,
            name: 'Jane Smith'
        },
        totalAmount: 25
    },


    {
        id: 2,
        items: [
            {
                id: 3,
                productName: 'Product C',
                status: 'Complete',
                price: 15,
                quantity: 3
            },
            {
                id: 4,
                productName: 'Product B',
                status: 'Refunded',
                price: 5,
                quantity: 1
            }, {
                id: 5,
                productName: 'Product A',
                status: 'Complete',
                price: 10,
                quantity: 1
            }
        ],
        employee: {
            id: 2,
            name: 'Sarah Johnson'
        },
        customer: {
            id: 2,
            name: 'Robert Brown'
        },
        totalAmount: 35
    },
    {
        id: 3,
        items: [
            {
                id: 6,
                productName: 'Product B',
                status: 'Complete',
                price: 5,
                quantity: 2
            },
            {
                id: 7,
                productName: 'Product A',
                status: 'Complete',
                price: 10,
                quantity: 1
            }, {
                id: 8,
                productName: 'Product C',
                status: 'Complete',
                price: 15,
                quantity: 1
            }
        ],
        employee: {
            id: 3,
            name: 'Mark Johnson'
        },
        customer: {
            id: 3,
            name: 'Karen Davis'
        },
        totalAmount: 35
    },
    {
        id: 4,
        items: [
            {
                id: 9,
                productName: 'Product C',
                status: 'Complete',
                price: 15,
                quantity: 3
            },
            {
                id: 10,
                productName: 'Product B',
                status: 'Refunded',
                price: 5,
                quantity: 1
            }, {
                id: 11,
                productName: 'Product A',
                status: 'Complete',
                price: 10,
                quantity: 1
            }
        ],
        employee: {
            id: 2,
            name: 'Sarah Johnson'
        },
        customer: {
            id: 4,
            name: 'Chris Wilson'
        },
        totalAmount: 45
    }

];


export const productsObject = [
    {
        id: 1,
        name: "Product 1",
        category: "Category 1",
        price: 10.99,
        quantity: 100,
        status: "approved"
    },
    {
        id: 2,
        name: "Product 2",
        category: "Category 2",
        price: 15.99,
        quantity: 50,
        status: "approved"
    },
    {
        id: 3,
        name: "Product 3",
        category: "Category 1",
        price: 9.99,
        quantity: 200,
        status: "pending"
    },
    {
        id: 4,
        name: "Product 4",
        category: "Category 3",
        price: 20.99,
        quantity: 75,
        status: "approved"
    },
    {
        id: 5,
        name: "Product 5",
        category: "Category 2",
        price: 12.99,
        quantity: 150,
        status: "pending"
    },
    {
        id: 6,
        name: "Product 6",
        category: "Category 1",
        price: 8.99,
        quantity: 250,
        status: "approved"
    },
    {
        id: 7,
        name: "Product 7",
        category: "Category 3",
        price: 25.99,
        quantity: 100,
        status: "approved"
    },
    {
        id: 8,
        name: "Product 8",
        category: "Category 2",
        price: 14.99,
        quantity: 80,
        status: "pending"
    },
    {
        id: 9,
        name: "Product 9",
        category: "Category 1",
        price: 7.99,
        quantity: 300,
        status: "approved"
    },
    {
        id: 10,
        name: "Product 10",
        category: "Category 3",
        price: 22.99,
        quantity: 120,
        status: "approved"
    },
    {
        id: 11,
        name: "Product 11",
        category: "Category 2",
        price: 11.99,
        quantity: 200,
        status: "pending"
    },
    {
        id: 12,
        name: "Product 12",
        category: "Category 1",
        price: 6.99,
        quantity: 350,
        status: "approved"
    },
    {
        id: 13,
        name: "Product 13",
        category: "Category 3",
        price: 19.99,
        quantity: 90,
        status: "approved"
    },
    {
        id: 14,
        name: "Product 14",
        category: "Category 2",
        price: 13.99,
        quantity: 100,
        status: "pending"
    },
    {
        id: 15,
        name: "Product 15",
        category: "Category 1",
        price: 5.99,
        quantity: 400,
        status: "approved"
    },
    {
        id: 16,
        name: "Product 16",
        category: "Category 3",
        price: 16.99,
        quantity: 70,
        status: "approved"
    },
    {
        id: 17,
        name: "Product 17",
        category: "Category 2",
        price: 10.99,
        quantity: 150,

        status: "pending"
    },
    {
        id: 18,
        name: "Product 18",
        category: "Category 1",
        price: 4.99,
        quantity: 450,
        status: "approved"
    },
    {
        id: 19,
        name: "Product 19",
        category: "Category 3",
        price: 13.99,
        quantity: 60,
        status: "approved"
    },

    {
        id: 20,
        name: "Product 20",
        category: "Category 2",
        price: 8.99,
        quantity: 200,
        status: "pending"
    }
];

export const usersObject = [
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'Kai Jones',
        email: 'kai@gmail.com',
        gender: 'male',
        numberOfSalesMade: 0,
        dateHired: '2021-01-01',
        status: 'active',
        role: 'superAdmin',
        password: '123456'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'Kante Silva',
        email: 'kante@gmail.com',
        gender: 'male',
        numberOfSalesMade: 0,
        dateHired: '2021-01-01',
        status: 'active',
        role: 'staff',
        password: '123456'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'Enzo Costa',
        email: 'enzo@gmail.com',
        gender: 'male',
        numberOfSalesMade: 0,
        dateHired: '2021-01-01',
        status: 'active',
        role: 'admin',
        password: '123456'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'User One',
        email: 'user1@example.com',
        role: 'superAdmin',
        password: 'abcde12345'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'User Two',
        email: 'user2@example.com',
        role: 'admin',
        password: 'fghij67890'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'User Three',
        email: 'user3@example.com',
        role: 'staff',
        password: 'klmno12345'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'User Four',
        email: 'user4@example.com',
        role: 'superAdmin',
        password: 'pqrst67890'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'User Five',
        email: 'user5@example.com',
        role: 'staff',
        password: 'uvwxy12345'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'John Smith',
        email: 'john.smith@example.com',
        gender: 'male',
        lastPurchaseDate: '2022-03-16',
        loyaltyPoints: 100,
        numberOfPurchasesMade: 5,
        role: 'customer',
        password: 'password123'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'Emma Watson',
        email: 'emma.watson@example.com',
        gender: 'female',
        lastPurchaseDate: '2022-02-28',
        loyaltyPoints: 50,
        numberOfPurchasesMade: 3,
        role: 'customer',
        password: 'password123'
    }];