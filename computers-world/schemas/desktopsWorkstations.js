export default {
    name: 'desktopsWorkstations',
    title: 'Desktops and Workstations',
    type: 'document',
    fields: [
        {
            name:'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'salePrice',
            title: 'Sale Price',
            type: 'number',
        },
        {
            name: 'processor',
            title: 'Processor',
            type: 'string',
        },
        {
            name: 'ram',
            title: 'Ram',
            type: 'string',
        },
        {
            name: 'storage',
            title: 'Storage',
            type: 'string',
        },
        {
            name: 'graphics',
            title: 'Graphics',
            type: 'string',
        },
        {
            name: 'cache',
            title: 'Cache Memory',
            type: 'string',
        },
        {
            name: 'display',
            title: 'Display',
            type: 'string',
        },
        {
            name: 'ports',
            title: 'Ports',
            type: 'string',
        },
        {
            name: 'windows',
            title: 'Windows',
            type: 'string',
        },
        {
            name: 'bestSelling',
            title: 'Best Selling',
            type: 'string',
        },
        {
            name: 'onSale',
            title: 'On Sale',
            type: 'string',
        }
    ]
}