export const products = [
    {
        id: "3RC8",
        name: "Samsung Galaxy S21",
        dateAdded: "2022-11-09",
        description: "6.2 inch, 128GB, 5G, Phantom Gray",
        remainingPieces: 8,
        price: 900,
        category: "Electronics",
        status: "In Market",
        image: 'https://cdn.mos.cms.futurecdn.net/WZzQY3dGNX88y7PGTsX2P3.jpg',

    },
    {
        id: "5CH7",
        name: "LG OLED TV",
        dateAdded: "2022-11-09",
        description: "65 inch, 4K UHD, Smart TV, ThinQ AI",
        remainingPieces: 3,
        price: 1500,
        category: "Electronics",
        status: "In Market",
        image:'https://lg.brandshop.co.ke/pub/media/catalog/product/cache/f065a554f4eac961d8482e27089021ef/d/-/d-1_2__1.jpg'
    },
    {
        id: "1AC2",
        name: "Whirlpool Refrigerator",
        dateAdded: "2022-11-09",
        description: "French Door, 25 cu. ft., Stainless Steel",
        remainingPieces: 0,
        price: 1200,
        category: "Appliances",
        status: "Sold Out",
        image:'https://kitchenaid-h.assetsadobe.com/is/image/content/dam/business-unit/whirlpool/en-us/marketing-content/site-assets/page-content/refrigerator-sclp/Images/featuresassets/French_Doors_WRF992FIFM_Full.png?fit=constrain&fmt=jpg&utc=2018-08-23T21:29:06Z&wid=1246'
    },
    {
        id: "9PD4",
        name: "Sony PlayStation 5",
        dateAdded: "2022-11-09",
        description: "Disc Version, 825GB SSD",
        remainingPieces: 5,
        price: 500,
        category: "Electronics",
        status: "In Market",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5FDEsvcrSMZNm6Qireks9jFuw-AyQmXFlI3vdOCo77BkqxVZiXK9ZVg3XDa8bmmSvSo&usqp=CAU"
    },
    {
        id: "7XE6",
        name: "Dell Inspiron 15",
        dateAdded: "2022-11-09",
        description: "15.6 inch, Intel Core i7, 16GB RAM, 512GB SSD ",
        remainingPieces: 10,
        price: 1000,
        category: "Electronics",
        status: "Pending Approval",
        image:"data:image/jpeg;base64,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"
    },
    {
        id: "2LF9",
        name: "HP OfficeJet Pro Printer",
        dateAdded: "2022-11-09",
        description: "All-in-One, Wireless, Fax, Scan, Copy",
        remainingPieces: 2,
        price: 250,
        category: "Electronics",
        status: "In Market",
        image:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c03956352.png"
    },
    {
        id: "4JG1",
        name: "Apple MacBook Pro",
        dateAdded: "2022-11-09",
        description: "13 inch, M1 Chip, 8-core CPU, 8-core GPU, 512GB SSD",
        remainingPieces: 4,
        price: 1500,
        category: "Electronics",
        status: "In Market",
        image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: "8VZ3",
        name: "Bose QuietComfort 35 II",
        dateAdded: "2022-11-09",
        description: "Wireless, Noise Cancelling, Over-Ear Headphones",
        remainingPieces: 0,
        price: 300,
        category: "Electronics",
        status: "Sold Out",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlW1W62Bl4asRDNK6gveyj3cJwb68eswxs2XhFcL2o-g&s"
    },
    {
        id: "6RD5",
        name: "Samsung Galaxy Tab S7",
        dateAdded: "2022-11-09",
        description: "11 inch, 256GB, Wi-Fi, Mystic Black",
        remainingPieces: 7,
        price: 650,
        category: "Electronics",
        status: "In Market",
        image:"https://www.notebookcheck.net/uploads/tx_nbc2/4_3_Teaser_Samsung_Galaxy_Tab_S7_SM-T870_MysticBronze.jpg"
    },]
