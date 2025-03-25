const menu_data = [
    {
        id: 1,
        mega_menu: false,
        has_dropdown: false,
        title: "Home",
        link: "/",
        // sub_menus: [
        //     { link: "/", title: "Home-One" },
        //     { link: "/home-two", title: "Home-Two" },
        //     { link: "/home-three", title: "Home-Three" },
        // ],
    },
    {
        id: 2,
        mega_menu: false,
        has_dropdown: true,
        title: "About Us",
        link: "#",

        sub_menus: [
            { link: "/company-profile", title: "about-us" },
            // { link: "/certifications", title: "Certifications" },
            { link: "/team", title: "Our Team" },
            { link: "/our-team", title: "achievement" },
            // { link: "/testimonials", title: "Testimonials" },
            // { link: "/faq", title: "Faq" },
            // { link: "/about-us", title: "About Us" },
            // { link: "/home-two", title: "Company Profile" },
           
        ],
    },
    // {
    //     id: 2,
    //     mega_menu: false,
    //     has_dropdown: false,
    //     title: "Achievement",
    //     link: "/achievement",

    //     sub_menus:[]
    // },
    {
        id: 3,
        mega_menu: false,
        has_dropdown: false,
        title: "Our Product",
        link: "/product",
        // sub_menus: [
            
        //  { link: "/beans-pluses", title: "Beans & Pluses" },
        //  { link: "/flower-powder-spices", title: "Flour, Powder & Spices" },
        //  { link: "/seeds-nuts", title: "Seeds & Nuts" },
        //  { link: "/cooking-oil", title: "Cooking Oil" },
        //  { link: "/fruits", title: "Fruits" },

         
        // ],
    },
    {
        id: 4,
        mega_menu: false,
        has_dropdown: false,
        title: "blog",
        link: "/blogs",
        // sub_menus: [
        //     { link: "/pricing", title: "Pricing" },
        //     { link: "/team", title: "Our Team" },
        //     { link: "/faq", title: "Faq" },
        //     { link: "/not-found", title: "4o4 Page" },
        // ],
    },
    // {
    //     id: 5,
    //     mega_menu: false,
    //     has_dropdown: true,
    //     title: "Content",
    //     link: "#",
    //     sub_menus: [
    //         { link: "/shop", title: "Our-Shop" },
    //         { link: "/shop-details", title: "Shop Details" },
    //     ],
    // },
   // {
    //     id: 6,
    //     mega_menu: false,
    //     has_dropdown: true,
    //     title: "Blog",
    //     link: "#",
    //     sub_menus: [
    //         { link: "/blog-grid", title: "Blog-Grid" },
    //         { link: "/blog", title: "Blog-Standard" },
    //         { link: "/blog-details", title: "Blog-Details" },
    //     ],
    // },
    {
        id: 7,
        mega_menu: false,
        has_dropdown: false,
        title: "faqs",
        link: "/faqs",
    },
    {
        id: 7,
        mega_menu: false,
        has_dropdown: false,
        title: "Contacts",
        link: "/contact",
    },
];
export default menu_data;


