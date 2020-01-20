var User        = require('../models/user');
var Category    = require('../models/categories');
var Department  = require('../models/department');
var Product     = require('../models/product');
var Variant     = require('../models/variant');
var mongoose    = require('mongoose');
var colour      = require('colour');


//mongoose.connect('mongodb://localhost/shoppingApp');
mongoose.connect('mongodb://localhost/yardAndGarage', { useNewUrlParser: true, useCreateIndex: true, });

function deleteVariants(callback)
{
    Variant.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting variants from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Variants deleted".red)
            callback()
        }
    });
}
function deleteCategories(callback)
{
    Category.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting category from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Categories deleted".red)
            callback()
        }
    });
}
function deleteDepartments(callback)
{
    Department.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting department from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Departments deleted".red)
            callback()
        }
    });
}

function deleteUsers(callback)
{
    User.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting user from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Users deleted".red)
            callback()
        }
    });
}
function deleteProducts(callback)
{
    Product.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting product from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Products deleted".red)
            callback()
        }
    });
}

function insertCategories(callback)
{
    var categories =
    [
        new Category({
            categoryName        : 'Basics'
        }),
        new Category({
            categoryName        : 'Blazer'
        }),
        new Category({
            categoryName        : 'Knitwear'
        }),
        new Category({
            categoryName        : 'Jeans'
        }),
        new Category({
            categoryName        : 'Jackets'
        }),
        new Category({
            categoryName        : 'Sweater'
        }),
        new Category({
            categoryName        : 'Shoes'
        }),
        new Category({
            categoryName        : 'leggings'
        }),
        new Category({
            categoryName        : 'Sweats'
        })
    ]

    for (let i = 0; i < categories.length; i++){
        categories[i].save(function(e, r) {
            if (i === categories.length - 1){
                console.log("Categories inserted".green)
                callback();
            }
        });
    }
}

function insertDepartments(callback)
{
    var departments =
    [
        new Department({
            departmentName      : 'Women',
            categories          : 'Basics,Blazer,Sweater,leggings'

        }),
        new Department({
            departmentName      : 'Men',
            categories          : 'Knitwear,Jeans,Jackets,Sweater,Shoes,Sweats'
        })
    ]

    for (let i = 0; i < departments.length; i++){
        departments[i].save(function(e, r) {
            if (i === departments.length - 1){
                console.log("Departments inserted".green)
                callback();
            }
        });
    }
}

function insertProducts(callback)
{
    var products =
    [
        new Product({
            _id: "5bedf31cc14d7822b39d9d43",
            imagePath: `/uploads/justin.jpg`,
            title: 'Satisfied Sweater',
            description: 'Heavy pull over sweater containing pockets.',
            price: 35.95,
            color: 'Beige',
            size: 'XS,S,M',
            quantity: 10,
            department: 'Men',
            category: 'Sweater',
        }),
        new Product({
            _id: "5bedf3b9c14d7822b39d9d45",
            imagePath: `/uploads/justin2.jpg`,
            title: 'Vans Wind Breaker',
            description: 'Light wind breaker with buttons.',
            price: 29.99,
            color: 'White',
            size: 'XS,S,XL',
            quantity: 15,
            department: 'Men',
            category: 'Jackets',
        }),
        new Product({
            _id: "5bedf448c14d7822b39d9d47",
            imagePath: `/uploads/justin3.jpg`,
            title: 'Nike Jacket',
            description: 'Heavy rain jacket. ',
            price: 74.99,
            color: 'Black',
            size: 'XS',
            quantity: 90,
            department: 'Men',
            category: 'Jackets',
        }),
        new Product({
            _id: "5bedf55bc14d7822b39d9d4b",
            imagePath: `/uploads/Addidas.jpg`,
            title: 'Addidas Sweater',
            description: 'Light grey sweater for exercise',
            price: 19.99,
            color: 'Black',
            size: 'S,M,L',
            quantity: 4,
            department: 'Women',
            category: 'Sweater',
        }),
        new Product({
            _id: "5bedf5eec14d7822b39d9d4e",
            imagePath: `/uploads/roots.jpg`,
            title: 'Roots Sweats',
            description: 'Grey baggy sweats.',
            price: 39.99,
            color: 'Orange',
            size: 'M,L',
            quantity: 5,
            department: 'Men',
            category: 'Sweats',
        }),
        new Product({
            _id: "5bedf6b5c14d7822b39d9d51",
            imagePath: `/uploads/leggings.jpg`,
            title: 'Nike leggings',
            description: 'Light leggings for gym',
            price: 79.99,
            color: 'Light Grey',
            size: 'M,L',
            quantity: 80,
            department: 'Women',
            category: 'leggings',
        }),
        new Product({
            _id: "5bedf720c14d7822b39d9d52",
            imagePath: `/uploads/levi.jpg`,
            title: 'Basic Slim Jeans',
            description: 'Basic slim-fit jeans with five pockets. Two side pockets, two back pockets, and one coin pocket. Belt loops. Front hidden zipper and button closure.',
            price: 45.99,
            color: 'Blue',
            size: 'XS,S,M',
            quantity: 8,
            department: 'Men',
            category: 'Jeans',
        }),
        new Product({
            _id: "5bedf7ecc14d7822b39d9d55",
            imagePath: `/uploads/orangeAF1.jpg`,
            title: 'Air Force 1',
            description: 'orange air force 1',
            price: 129.99,
            color: 'Brown',
            size: 'XS,M,XL',
            quantity: 12,
            department: 'Men',
            category: 'Shoes',
        })
    ];

    for (let i = 0; i < products.length; i++){
        products[i].save(function(e, r) {
            if (i === products.length - 1){
                console.log("Products inserted".green)
                callback();
            }
        });
    }
}

function insertVariants(callback)
{
    var variants =
    [
        new Variant({
            productID: '5bedf31cc14d7822b39d9d43',
            imagePath: `/uploads/7568644710_1_1_1.jpg`,
            color: 'Beige',
            size: 'S,L',
            quantity: 5,
        }),
        new Variant({
            productID: '5bedf3b9c14d7822b39d9d45',
            imagePath: `/uploads/5644641735_2_5_1.jpg`,
            color: 'Copper',
            size: 'S,L,XL',
            quantity: 12,
        }),
        new Variant({
            productID: '5bedf448c14d7822b39d9d47',
            imagePath: `/uploads/7568469605_2_1_1.jpg`,
            color: 'Maroon',
            size: 'XS,M,L',
            quantity: 4,
        }),
        new Variant({
            productID: '5bedf448c14d7822b39d9d47',
            imagePath: `/uploads/7568469822_2_1_1.jpg`,
            color: 'Charcool',
            size: 'XS,L,XL',
            quantity: 5,
        }),
        new Variant({
            productID: '5bedf5eec14d7822b39d9d4e',
            imagePath: `/uploads/1775300806_2_1_1.jpg`,
            color: 'Stone',
            size: 'S,XL',
            quantity: 35,
        }),
        new Variant({
            productID: '5bedf720c14d7822b39d9d52',
            imagePath: `/uploads/5575380407_1_1_1.jpg`,
            color: 'Dark Blue',
            size: 'M,XL',
            quantity: 5,
        })
    ];

    for (let i = 0; i < variants.length; i++){
        variants[i].save(function(e, r) {
            if (i === variants.length - 1){
                console.log("Variants inserted".green)
                callback();
            }
        });
    }
}

function insertAdmin(callback)
{
    var newUser = new User({
        username    : 'omar.syed1999@gmail.com',
        password    : 'admin',
        fullname    : 'Omar Syed',
        admin       : true
    });

    User.createUser(newUser, function(err, user){
        if(err) throw err;
        console.log("Admin user inserted".green)
        console.log("Username: ", user.username + "\n" , "Password: admin");
        callback()
    });
}


function deleteDBEntitites(callback)
{
    deleteVariants(function()
    {
        deleteCategories(function()
        {
            deleteDepartments(function()
            {
                deleteUsers(function()
                {
                    deleteProducts(function()
                    {
                        insertCategories(function()
                        {
                            insertDepartments(function()
                            {
                                insertProducts(function()
                                {
                                    insertVariants(function()
                                    {
                                        insertAdmin(callback)
                                    })
                                })
                            })
                        })
                    });
                })
            })
        })
    })
}



deleteDBEntitites(exit)


function exit() {
    mongoose.disconnect();
}
