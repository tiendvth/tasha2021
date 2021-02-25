const Product = require('../models/product');
const Category = require('../models/category');
const Article = require('../models/article')
const mongoose = require('mongoose');
require('mongoose-paginate-v2');

exports.generateSeedData = async function (req, res) {
    await Product.remove();
    await Category.remove();
    await Article.remove();

    // dữ liệu mẫu danh mục.
    const category01 = new Category({
        _id: mongoose.Types.ObjectId(),
        title: 'Cookware',
        description: 'Cookware comprises cooking vessels, such as saucepans and frying pan.',
        thumbnail:'https://cdn.shopify.com/s/files/1/0375/3269/6635/collections/091020_CB1-Cookware_CategoryHero_2280x1620_v4_1400x.jpg?v=1602516752',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const category02 = new Category({
        _id: mongoose.Types.ObjectId(),
        title: 'Refrigeration',
        description: 'The term refrigeration means cooling a space,refrigeration is artificial (human-made) cooling.',
        thumbnail:'https://res.cloudinary.com/designerappliances/image/fetch/w_1000,h_1000,c_limit,q_auto,f_auto/https://www.designerappliances.com/blog/content/images/2020/10/refrigerator-types.jpg',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const category03 = new Category({
        _id: mongoose.Types.ObjectId(),
        title: 'Appliances',
        description: 'A device or machine for performing a specific task. Some examples of appliances include coffee makers, washing machines, and refrigerators.',
        thumbnail:'https://www.homestratosphere.com/wp-content/uploads/2018/11/refrigerator-nov282018-min.jpg',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const category04 = new Category({
        _id: mongoose.Types.ObjectId(),
        title: 'Food Storage',
        description: 'Food storage is the process in which both cooked and raw materials',
        thumbnail:'https://onlinehygienefoodsafety.s3.eu-central-1.amazonaws.com/wp-content/uploads/hygienefoodsafety/2017/11/22081533/food-storage.jpg',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const category05 = new Category({
        _id: mongoose.Types.ObjectId(),
        title: 'Knives and Tools',
        description: 'Knife, tool or implement for cutting, the blade being either fixed to the handle or fastened with a hinge so as to clasp into it.',
        thumbnail:'https://www.allianceonline.co.uk/blog/wp-content/uploads/2018/04/Types-of-Knives-and-Their-Uses-%E2%80%93-Alliance-Online-1024x823.png',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const category06 = new Category({
        _id: mongoose.Types.ObjectId(),
        title: 'Laundry',
        description: 'Laundry refers to the washing of clothing and other textiles. Laundry processes are often done in a room reserved for that purpose',
        thumbnail:'https://en.pimg.jp/050/096/872/1/50096872.jpg',
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const category07 = new Category({
        _id: mongoose.Types.ObjectId(),
        title: 'Other accessories',
        description: 'Accessories that are worn may include jackets, boots and shoes, cravats, ties, hats, bonnets, belts and suspenders, gloves...',
        thumbnail:'https://www.homestratosphere.com/wp-content/uploads/2018/11/Kitchen-with-modern-appliances-and-smart-technology-nov9-18.jpg',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const listCategory = [category01, category02, category03, category04, category05, category06, category07];
    await Category.collection.insertMany(listCategory);

    // dữ liệu mẫu bài viết
    const article01 = new Article({
        title:'3 Holiday Gifts Perfect for the Home Cooks on Your List',
        author:'Laura Gaskill',
        description:'Houzz Contributor. I cover decorating ideas, Houzz tours & the monthly home maintenance checklist. My favorite pieces to write center around the emotional aspects of home and savoring life\'s simple pleasures. Decluttering course + discount for Houzzers:',
        thumbnails:'https://st.hzcdn.com/simgs/a3b1c71e0c6effd7_4-2837/home-design.jpg,https://st.hzcdn.com/simgs/pictures/kitchens/stone-shelves-and-copper-pots-artichoke-img~6d916cfd04413eb4_4-8575-1-ab71667.jpg,https://st.hzcdn.com/simgs/pictures/kitchens/hingham-remodel-sean-litchfield-photography-img~ea5126920321ae34_4-1016-1-57a1b2a.jpg,https://st.hzcdn.com/fimgs/bb3377f60dde93d3_9016-w40-h40-b0-p0--.jpg',
        content:'Whether you’re looking to splurge on a loved one or need something small but thoughtful for a cooking-obsessed friend or coworker, this guide is a good place to start your search. With 10 crowd-pleasing ideas to choose from, you’ll have all the home cooks on your list checked off in no time.' +
            '1. Wish-List-Worthy Appliance\n' +
            '\n' +
            'Is your favorite cook missing a key ingredient in their kitchen arsenal — like a good stand mixer or food processor? If so, gifting one of these workhorse items is sure to be a hit. If they already have these key appliances, consider a hot-right-now addition, like a multicooker or soda maker.\n' +
            '2. Gleaming Copper Saucepan\n' +
            '\n' +
            '“Bright copper kettles and warm woolen mittens” may be how the song goes, but for a serious home cook, a copper saucepan hits an even better note. Copper is an excellent conductor of heat, making copper cookware an ideal choice when consistent temperature distribution is a must.' +
            '3. Versatile Dutch Oven\n' +
            '\n' +
            'A quality Dutch oven can go from stovetop to oven to table with ease. It also lasts a lifetime and looks good doing it. Even if the cook on your list already has a Dutch oven, another one in a different size or color will always be welcome.',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const article02 = new Article({
        title:'Which Appliance Finish Should You Choose for Your Kitchen?',
        author:'Yanic Simard',
        description:'Toronto Interior Design Group is a trusted one stop shop residential interior design boutique-style firm crafting timeless interiors.',
        thumbnails:'https://st.hzcdn.com/simgs/pictures/kitchens/briarwood-park-z-and-co-design-group-img~9ae1ac940e6a71a0_4-2143-1-1949fb2.jpg,https://st.hzcdn.com/simgs/pictures/kitchens/chalet-potton-atelier-boom-town-img~9411857308d14530_4-8408-1-eff9492.jpg,https://st.hzcdn.com/simgs/pictures/kitchens/east-greenlake-residence-more-photos-on-website-michelle-dirkse-interior-design-img~0f117e140700779b_4-8935-1-47415e6.jpg,https://st.hzcdn.com/fimgs/0f73dd390f43b9d4_2296-w40-h40-b0-p0--.jpg',
        content:'Having trouble deciding what finish your appliances should be? Sometimes it may seem as though stainless steel is the only option designers ever use, but there are actually many options, all with their own uses for different design situations. To help you make the right choice to work with your cabinets, floors, lighting and more, here are the top five most popular appliance finishes and when you should use them.' +
            'When to Choose Stainless Steel\n' +
            '\n' +
            'Love it or leave it, stainless steel is certainly a popular appliance finish — and for many good reasons. As a metal in a midtone between light and dark, stainless steel is a safe-bet neutral option to match nearly any color palette. The material has a look of quality, and this often comes with a heftier price tag than other finishes, so whether the splurge is worthwhile is a matter of personal budget and priorities.\n' +
            '\n' +
            'Although it’s hard to go wrong with this option, here are a few situations where stainless steel is an especially strong choice.' +
            '1. When your home is ultramodern. Crisp metallic finishes are often associated with modern and even futuristic spaces, and for a glossy minimalist kitchen, in fact, there are few better options for achieving such a clean, streamlined aesthetic. In this case, select all your other metals (faucet, handles, furniture) to be close to your appliance finish to keep the whole design as sleek as possible.' +
            '2. When your cabinets are wood. Think only glossy white cabinets work with cool steel? Think again. Wood and metal are quite opposite, but this contrast makes them work beautifully together. In a kitchen with lots of wood cabinetry, stainless steel appliances give a visual break, and they help bring out the richness of the wood’s organic patterning.' +
            '3. When you covet transitional style. Transitional kitchen style — halfway between traditional and contemporary — is one of the most coveted looks, and it usually sticks to a palette of white, gray, metallics and the previously mentioned wood.',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const article03 = new Article({
        title:'Should You Get a Black Refrigerator?',
        author:'Kate Burt',
        description:'Houzz UK. I\'m a journalist and editor, previously for the Independent, Guardian and various magazines. I\'m now excited to part of the editorial team at Houzz UK & Ireland, bringing the best of British and Irish design, interiors and architecture to Houzz.com.',
        thumbnails:'https://st.hzcdn.com/simgs/pictures/kitchens/heather-and-bob-cabinetworks-plus-img~f2b1f52c0113bf61_4-6185-1-d677d28.jpg,https://st.hzcdn.com/simgs/pictures/kitchens/st-luke-s-mews-notting-hill-london-domus-nova-img~ae61af8d044fe157_4-5861-1-0322a3c.jpg,https://st.hzcdn.com/simgs/pictures/kitchens/doubleview-residence-by-lahaus-and-camstruct-lahaus-img~3c01600e083bd387_4-7135-1-294ff81.jpg,https://st.hzcdn.com/fimgs/db03923504465d9f_5282-w40-h40-b0-p0--.jpg',
        content:'Scroll through the photos on Houzz, and you’ll see home after home featuring ink-colored kitchen cabinets, black-framed windows or dark and cozy wall paints. So it’s no surprise that our appliances are following suit. Black or dark refrigerators are quite hot in today’s stylish kitchens. See how you might fit one into your cooking space.' +
            'Pair it with white. Inky shades and grays may be gaining ground, but white is still the most popular choice for kitchen cabinetry. Giving a white kitchen a shot of sharp black freshens up this enduring favorite. Add a dash of wood for a Scandinavian feel.\n' +
            '\n' +
            'Here the refrigerator, as the biggest black feature in the space, leads the way, influencing the stools, light fixtures, oven, faucet, dining chairs and even the dish for the apples on the table.\n' +
            '\n' +
            'If your heart in set on a matte look, bear in mind that black appliances are more widely available in a glossy finish. However, mixing glossy and matte adds textural interest to a monochrome room.' +
            'eam it with gray. Here the effect is softer, with the gleaming black refrigerator combined with pale gray cabinets, again in matte.\n' +
            '\n' +
            'In this kitchen, the key partner for the fridge is that luscious black Cambria quartz countertop. If the homeowners had gone instead with stainless steel for the fridge and range, the counter could’ve looked a little isolated as a design feature.\n' +
            '\n' +
            'If you’re opting for black appliances, consider how you’ll balance them with other colors in your kitchen. How many accessories in the same shade are too many? Start with three, which will always be just enough, and build (gently) from there.',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const listArticle = [article01,article02,article03];
    await Article.collection.insertMany(listArticle);
    // dữ liệu mẫu sản phẩm
    const product1 = new Product({
        title: 'Automatic Pan Stirrer with Timer',
        categoryId: category03._id,
        description: 'the story\n' +
            'YOUR NEW SOUS CHEF\n' +
            'Some of the most delicious sauces require more attention than a newborn baby. But they\'re totally worth it (delicious sauces and babies). For those recipes that call for continuous stirring, we introduce this clever time—and arm—saver\n' +
            'Place it in your pan with any simmering or low-heat liquid, set the timer, and go do the million other things you need to do. We\'ll be over at 8. Made in China.',
        thumbnails: 'https://www.uncommongoods.com/images/items/49100/49101_1_640px.jpg,https://www.uncommongoods.com/images/items/49100/49101_2_640px.jpg',
        price: 25.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product2 = new Product({
        title: 'Umbra Automatic Soap Dispenser Touchless, Sanitizer, Hands Free Pump for Kitchen or Bathroom, 8.5 OZ, White',
        categoryId: category03._id,
        description: 'IMPORTANT TO NOTE: Please ensure that dispenser is turned on with an indicating blue light. For best results, clean Otto’s dispensing tip regularly and run pump with warm water solution. When using a thick hand soap, try thinning it out with water. If you encounter any further problems please refer to our troubleshooting tips down below\n' +
            'TOUCHLESS: Otto’s larger 8. 5oz (255ml) capacity makes it an ideal touchless liquid soap dispenser, hand soap dispenser or dish soap dispenser; not recommended for foaming hand soap, gel sanitizer or granular soap\n' +
            'EASY TO FILL WITH NON-DRIP SPOUT: Otto’s new design creates a seal with its non-drip spout to minimize clogging and prevent messy drips, while the fluid level indicator window and large top-load opening making refilling easy and mess-free\n' +
            'PATENTED DESIGN: Otto is a Patented automatic soap dispenser - U. S. Patent No. D682. 589, China Patent No. CN302221937S; It operates on four AAA batteries (not included), and measures 3. 5 x 4. 5 x 10 inches (8. 9 x 11. 4 x 25. 4 cm)',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61OePzmLXjL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71tI0HCxvHL._AC_SL1500_.jpghttps://images-na.ssl-images-amazon.com/images/I/71C6QqmXqBL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61niigoUrrL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71NYlUF74PL._AC_SL1500_.jpg,',
        price: 35.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product3 = new Product({
        title: 'Smart WiFi Instant Pot',
        categoryId: category03._id,
        description: 'About this item\n' +
            'It\'s everyone\'s favorite small kitchen appliance, totally upgraded. \n' +
            'Not only can it do everything a standard Instant Pot can do (remember: it\'s already a pressure cooker, slow cooker, rice cooker, steamer, yogurt maker, cake maker, and warmer in one, and you can sauté in it, too!), this WiFi-enabled version connects to an app and is Alexa-enabled.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71auGKyX91L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71GahiZfVpL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61ToH3BhWeL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71dA368kJGL._AC_SL1500_.jpg,',
        price: 199.95,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product4 = new Product({
        title: '2-Slice High Speed Smart Toaster',
        categoryId: category03._id,
        description: 'About this item\n' +
            'Yes, smart toasters really do exist! This particular toaster from Revolution boasts being the first-ever touch-screen toaster. Plus, it features smart cooking sensors that perfectly toast bread, bagels, waffles, toaster pastries, and English muffins to your liking.\n' +
            'It also has a 15-second reheat function for when your toast gets cold. ',
        thumbnails: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202043/0022/img7o.jpg,blob:https://www.youtube.com/21f1d657-0c5c-452d-8c54-0196664abf8b,https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202035/0002/revolution-cooking-2-slice-high-speed-smart-toaster-o.jpg,https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202051/0006/revolution-cooking-2-slice-high-speed-smart-toaster-o.jpg,',
        price: 299.95,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product5 = new Product({
        title: 'Smart WiFi Air Fryer',
        categoryId: category03._id,
        description: 'About this item\n' +
            'This air fryer has 11 cooking modes, pairs with an app that helps you cook more than 100 different recipes and controls its settings, and pairs with Alexa, so you can use it without even touching a button.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71evDlhuwRL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71tHQXNn8pL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71dOeptN%2B3L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81ChMebgQSL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/715zxh%2BKo%2BL._AC_SL1500_.jpg,',
        price: 119.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product6 = new Product({
        title: 'Perfect Drink Pro Smart Scale and App Kitchen Tool, Black',
        categoryId: category03._id,
        description: 'About this item\n' +
            'Just pour til you hear the ding! Simple and fun way to make amazing cocktails at home. Perfect Drink PRO works with devices including: iPhone, iPad, Android phone, Android tablet and Amazon Nook. Accurate from .5g up to 5kg\n' +
            'Choose one of 400+ recipes included in the app (or add your own favorites), place a glass or shaker on the scale and pour each ingredient while the virtual glass fills up on the app in real time!\n' +
            'No measuring! The scale weighs each ingredient as you pour and alerts you when to stop. It’s more accurate than using a traditional jigger or measuring cup for the perfect cocktail, every time.\n' +
            'Make a single glass, or dial up the serving size to create a party pitcher of your favorite cocktail. Not sure what to make? Enter what you have on hand and Perfect Drink will suggest recipes.\n' +
            'Comes with Wireless Stainless Steel Perfect Drink PRO Scale, Device Stand, and 750ml Stainless Steel Cocktail Shaker. Does not include glasses, bottle or tablet.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81fBl-zyxZL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81v-Z-4hY5L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/719I44clOAL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81cnY708r7L._AC_SL1500_.jpg,',
        price: 194.87,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product7 = new Product({
        title: 'GE Smart Countertop Microwave Oven',
        categoryId: category03._id,
        description: 'About this item\n' +
            'If you\'ve ever wished you could simply talk to your microwave, now\'s your chance. This GE microwave connects to Amazon Alexa, so you can control it with your voice. \n' +
            'It also has scan-to-cook technology that helps cook your food perfectly every time. ',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/813GhAvzggL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91wRM26eFML._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81Po6IBdX1L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91JDDhABEjL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91Q7TcyBdTL._AC_SL1500_.jpg,',
        price: 129.60,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product8 = new Product({
        title: 'Connected Kitchen Scale',
        categoryId: category03._id,
        description: 'Drop Scale - Connected Kitchen Scale and Step-by-Step Recipe App\n' +
            'The Drop scale is more than just a smart scale; it connects to hundreds of recipes through a smartphone app and makes substituting ingredients and changing portion sizes way easier.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/515PtuHjj0L._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/81lQNP9d6yL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71hov2l2tkL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81mh3t6jVVL._AC_SL1500_.jpg,',
        price: 79.97,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product9 = new Product({
        title: 'Superheated Steam Countertop Oven',
        categoryId: category03._id,
        description: 'BLACK+DECKER TO3250XSB 8-Slice Extra Wide Convection Countertop Toaster Oven, Includes Bake Pan, Broil Rack & Toasting Rack, Stainless Steel/Black\n' +
            'It may not have voice control or an internet connection, but this countertop oven is still pretty genius.\n' +
            'Steam and radiant heating mix to make food crispy on the outside and moist on the inside—no preheating or defrosting required.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81RJFX6DlaL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81a2CwzICZL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91WbngvtmKL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81Q5WeCJHGL._AC_SL1500_.jpg,',
        price: 398.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product10 = new Product({
        title: 'Kratos Refrigeration 69K-749HC Solid Top Chest Freezer, 19.4 Cu. Ft. Capacity',
        categoryId: category03._id,
        description: 'Hamilton Beach Works with Alexa Smart Coffee Maker, Programmable, 12 Cup Capacity, Black and Stainless Steel (49350) – A Certified for Humans Device\n' +
            'Because mornings are so much better when you can say "Alexa, brew me some coffee," before you even roll out of bed. \n' +
            ' No need to download any special apps to control this smart coffee maker, either. Just use the Alexa app or talk to your Echo device (or, you know, use it like an old school coffee maker.)',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61FBNvTiG1L._AC_SL1001_.jpg,https://images-na.ssl-images-amazon.com/images/I/81XY2im051L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81IF0x1xXYL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81EI5xXXr8L._AC_SL1500_.jpg,',
        price: 89.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });

    const product11 = new Product({
        title: 'Smart Kitchen Thermometer',
        categoryId: category03._id,
        description: 'Included with set: 8" Fry pan 10" Fry pan 2.5 quart Saucepan with cover 5 Quart. Saute pan with cover 6 quart Stock pot with cover\n' +
            'Dual probe capacity to simultaneously track two temperatures whether you\'re cooking a full turkey or two separate pieces of meat\n' +
            'The Kitchen thermometer measures temperatures between -22° F (-30°C) to 572° F (300°C)\n' +
            '150 foot Bluetooth smart range; 150 hour battery life\n' +
            'Magnetic Mounting with illuminated display\n' +
            'One year limited warranty for device and 90 day warranty for meat probe',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/51tG9TrMlQL._AC_SL1296_.jpg,https://images-na.ssl-images-amazon.com/images/I/51NglfqHPKL._AC_SL1296_.jpg,https://images-na.ssl-images-amazon.com/images/I/71zvAoH0-WL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/51WPSz1j1CL._AC_SL1296_.jpg,',
        price: 59.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product12 = new Product({
        title: 'Cue Smart Induction Burner & Fry Pan',
        categoryId: category03._id,
        description: 'Hestan Cue Smart Induction Burner & Fry Pan, 11"\n' +
            'Embedded sensors in both the cooktop and the pan allow them to connect to the Cue\'s accompanying app, guiding you through recipes and ensuring that you never over or undercook a meal again. ',
        thumbnails: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202038/1070/img43o.jpg,https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202038/0089/hestan-cue-smart-induction-burner-fry-pan-11-o.jpg,https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202038/0060/hestan-cue-smart-induction-burner-fry-pan-11-o.jpg,https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202038/0006/hestan-cue-smart-induction-burner-fry-pan-11-o.jpg,',
        price: 499.95,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product13 = new Product({
        title: 'WiFi Sous Vide Precision Cooker,',
        categoryId: category03._id,
        description: 'About this item\n' +
            'Up your sous vide cooking game with this precision cooker from Anova, which is designed to help you slow-cook anything to perfection thanks to the accompanying app.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61XLUEdTI4L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61hJiP6WMtL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71IQ7lfD0KL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71NOj9N25VL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/6197DsQYdcL._AC_SL1500_.jpg,',
        price: 172.75,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product14 = new Product({
        title: 'Efinigy Power Blender',
        categoryId: category03._id,
        description: 'About this item\n' +
            'This blender has tons of settings to get your smoothie (and whatever else you\'re making!) just right, plus, it comes with an app that provides you with recipes and instructional videos. ',
        thumbnails: 'https://www.surlatable.com/dw/image/v2/BCJL_PRD/on/demandware.static/-/Sites-shop-slt-master-catalog/default/dwf5bc450e/images/large/6550073_0820_zwilling_01env.jpg?sw=1350&sh=1000&sm=fit,https://www.surlatable.com/dw/image/v2/BCJL_PRD/on/demandware.static/-/Sites-shop-slt-master-catalog/default/dwf1f8099c/images/large/6697247_0221_vp.jpg?sw=1350&sh=1000&sm=fit,https://www.surlatable.com/dw/image/v2/BCJL_PRD/on/demandware.static/-/Sites-shop-slt-master-catalog/default/dw9bc6b51f/images/large/6550073_0820_zwilling_02env.jpg?sw=1350&sh=1000&sm=fit,https://www.surlatable.com/dw/image/v2/BCJL_PRD/on/demandware.static/-/Sites-shop-slt-master-catalog/default/dw8489c903/images/large/6697247_0221_vs.jpg?sw=1350&sh=1000&sm=fit',
        price: 299.95,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product15 = new Product({
        title: 'Philips Kitchen Appliances Digital Twin TurboStar Airfryer XXL, with Fat ',
        categoryId: category03._id,
        description: 'About this item\n' +
            '6 slice convection toaster oven for faster, more even cooking. This Oster Large Digital Countertop Oven can fit up a pan with the measure of 2 inches height, 10.5 inches width and 12.5 inches length\n' +
            'Convection technology and a wide temperature range of 150 to 450 degrees F let you cook with the convenience of an oven\n' +
            'Digital controls with 7 cooking settings and an interior light for easy viewing\n' +
            'Large interior can accommodate one 12 inch pizza, casseroles, cookies, and even a roast; Oven measures 19.72 w x 16.29 d x 11.33 h inches, with 31.5 inch cord\n' +
            'Includes Durable baking pan and removable crumb tray for easy cleanup. Watts: 1300w',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81NB5wO1HnL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91HWXdEpxfL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81JMQDJ9iyL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81HcOgqZwqL._AC_SL1500_.jpg',
        price: 109.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product16 = new Product({
        title: 'GeniCan Scanner',
        categoryId: category03._id,
        description: 'About this item\n' +
            'Scan items or speak to automatically add them to your grocery list\n' +
            'Installs easily into all square and rectangle bins\n' +
            'Fun to use for the entire family!\n' +
            'Automatic delivery available from Amazon simply by throwing away items.\n' +
            'Powered by 4xAA Duracell batteries (included).\n' +
            'GeniCan must be connected to a 2.4Ghz wireless network.\n' +
            'If you are not 100% happy, refunds are guaranteed up to 45 days after we ship your GeniCan.',
        thumbnails: 'https://cdn.shopify.com/s/files/1/1041/7738/products/GeniCan-_Red_2048_600x600.jpg?v=1504368860,https://cdn.shopify.com/s/files/1/1041/7738/products/GeniCan-Black_2048_600x600.jpg?v=1504368860,https://cdn.shopify.com/s/files/1/1041/7738/products/GeniCan-White_2048_600x600.jpg?v=1504368860',
        price: 149.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product17 = new Product({
        title: 'Connected Double Oven Electric Convection Range',
        categoryId: category03._id,
        description: 'GE - 6.6 Cu. Ft. Slide-In Double Oven Electric Convection Range - Stainless steel.\n' +
            'Did you know you can talk to your oven, now too? This electric convection range from GE is just one example—it connects to wifi, so you can set it up to work with your\n' +
            'Amazon Alexa, Google Assistant, Nest, and several other apps for the easiest cooking experience ever.',
        thumbnails: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5979/5979219_sd.jpg,https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5979/5979219cv1d.jpg,https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5979/5979219cv1d.jpg,https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5979/5979219cv23d.jpg,',
        price: 2619.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product18 = new Product({
        title: 'Kitchen Hub Smart Range Hood ',
        categoryId: category03._id,
        description: 'About this item\n' +
            'HIGH-QUALITY RANGE HOOD INSERT: Black hood insert improves ventilation and lighting over your stove at 160 CFM and 6.5 Sones installed with 3.25" x 10" ducted opening with vertical or horizontal discharge\n' +
            'EFFECTIVE INCANDESCENT LIGHTING: A protective lamp lens distributes light evenly over the cook-top and accepts up to 75W bulb (bulb not included)\n' +
            'EASY CARE: One-piece, dishwasher safe aluminum mesh filter means you can maintain optimum grease capture and keep the kitchen fresh)\n' +
            'VERSATILE: 2 speed fan with top or rear exhaust options lets you connect the ductwork in the most\n' +
            'IDEAL SIZE: Range hood insert measures 30" and should be installed at least 18" above cook top\n' +
            'INSTALLATION: Range hood is installed as hardwired or with an optional power cord kit (HCK44; sold separately)\n' +
            'Black ducted range hood',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61P8cVg--uL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71227v3fo5L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71IaoK42iqL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/817BsKOG-sL._AC_SL1500_.jpg',
        price: 39.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product19 = new Product({
        title: 'G7000 Dishwasher With AutoDos With Powerdisk',
        categoryId: category03._id,
        description: 'About this item\n' +
            'Okay, so you can\'t talk to this dishwasher, but it does automatically\n' +
            'dispense the correct amount of detergent for more efficient cleaning every time you wash, which is pretty amazing.',
        thumbnails: 'https://static.appliancesconnection.com/product/1920x1080/9190548cb0f232423b96eb500419e7cd/G7366SCVISF.jpg,https://static.appliancesconnection.com/product/1920x1080/6aa84ab17d634b4859e795bf4dcc1c98_2717405.jpg,',
        price: 1999.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product20 = new Product({
        title: 'Samsung 4-Door Refrigerator With Family Hub',
        categoryId: category02._id,
        description: 'About this item\n' +
            'HIGH-QUALITY RANGE HOOD INSERT: Black hood insert improves ventilation and lighting over your stove at 160 CFM and 6.5 Sones installed with 3.25" x 10" ducted opening with vertical or horizontal discharge\n' +
            'EFFECTIVE INCANDESCENT LIGHTING: A protective lamp lens distributes light evenly over the cook-top and accepts up to 75W bulb (bulb not included)\n' +
            'EASY CARE: One-piece, dishwasher safe aluminum mesh filter means you can maintain optimum grease capture and keep the kitchen fresh)\n' +
            'VERSATILE: 2 speed fan with top or rear exhaust options lets you connect the ductwork in the most\n' +
            'IDEAL SIZE: Range hood insert measures 30" and should be installed at least 18" above cook top\n' +
            'INSTALLATION: Range hood is installed as hardwired or with an optional power cord kit (HCK44; sold separately)\n' +
            'Black ducted range hood',
        thumbnails: 'https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/050620/gallery-image-update/RF28R7551SR-Gallery-1.jpg?$product-details-jpg$,https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/050620/gallery-image-update/RF28R7551SR-Gallery-3.jpg?$product-details-jpg$,https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/4-door-french-door/pdp/rf28r7551sr-aa/gallery/RF28R7551SR-AA-012-Front-Open-With-Food-Silver.jpg?$product-details-jpg$,https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/050620/gallery-image-update/RF28R7551SR-Gallery-6.jpg?$product-details-jpg$,',
        price: 3419.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product21 = new Product({
        title: ' KitchenAid Hard Anodized Induction Nonstick Fry Pan/Skillet, 8.25 Inch, Matte Black',
        categoryId: category01._id,
        description: 'Hard-Anodized aluminum ensures superior heat retention and even cooking\n' +
            'German-Engineered, PFOA-free, 3-layer, non-stick coating allows for effortless food release\n' +
            'Unique rolled edges designed for drip free pouring of sauces, reductions and more\n' +
            'Riveted stainless steel handle wrapped in heat-resistant silicone provide a comfortable grip for a secure hold\n' +
            'Durable, scratch-resistant materials are oven safe up to 390 Degree Fahrenheit\n' +
            'Works on all stovetops, except induction',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61y0zMFJMnL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/618waehE1kL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81%2B6WAyceDL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71RueBGhcsL._AC_SL1500_.jpg',
        price: 10.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product22 = new Product({
        title: ' Rachael Ray Brights Hard Anodized Nonstick Frying Pan / Fry Pan / Hard Anodized Skillet - 8.5 Inch, Gray with',
        categoryId: category01._id,
        description: 'About this item\n' +
            'EVERYDAY EASY: Versatile 8.5-Inch Frying Pan is ideal for sizzling, searing, simmering, and more\n' +
            'CRAFTED WITH QUALITY: Hard-anodized construction heats swiftly and evenly; the frying pan\'s interior is coated in durable nonstick for impeccable food release\n' +
            'GET A GRIP: The skillet\'s grippy handle is rubberized for comfort and dual riveted for strength\n' +
            'DISHWASHER SAFE SKILLET: Oven safe to 350 degrees Fahrenheit, the fry pan is also dishwasher safe for convenience\n' +
            'COOK LIKE RACHAEL RAY: This frying pan works great with many other pieces in the Rachael Ray collections\n' +
            'Lifetime Limited Warranty',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/810y%2BFQKs-L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81L44Rp-2RL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81uiqoloz9L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81NnXMkpWtL._AC_SL1500_.jpg',
        price: 30.52,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product23 = new Product({
        title: ' Farberware Kitchen Ease Nonstick Fry Pan Skillet Set, 8 Inch, 10 Inch, and 11',
        categoryId: category01._id,
        description: 'About this item\n' +
            'Inside and outside nonstick makes cleanup simple and helps keep meals lower in fat\n' +
            'The skillets are constructed to heat quickly and evenly, which helps diminish hot spots that can burn food\n' +
            'Dual-riveted stainless steel handles are strong and offer a comfortable grip\n' +
            'These skillets are dishwasher safe and oven safe to 500 degrees Fahrenheit\n' +
            'Farberware is manufactured and sold pursuant to a license from Farberware Licensing Company, LLC\n' +
            'Set Includes: 8-Inch, 10-Inch and 11-Inch Skillets\n',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71eyPXpRt9L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71LRju9qNDL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71Hn5OyB5ML._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81hiwNbMJwL._AC_SL1500_.jpg',
        price: '29.99',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product24 = new Product({
        title: 'T-fal E765S2 Ultimate Hard Anodized Nonstick 8 In and 10 In Fry Pan ',
        categoryId: category01._id,
        description: 'About this item\n' +
            'BUILT TO PERFORM: A true workhorse in the kitchen, hard anodized aluminum retains perfect heat and has a much stronger protective layer than the original metal, making it corrosion and scratch resistant, plus it won’t react to acidic foods\n' +
            'HEAT MASTERY SYSTEM: T-fal\'s Heat Mastery System is a three ingredient recipe for perfectly delicious cooking results every time…superior and longer-lasting non-stick coating, an anti-warping, even heat base and patented Thermo-Spot technology\n' +
            'THERMO-SPOT INDICATOR: The ring around the spot turns solid red to show when pans are perfectly preheated and ready for ingredients to be added—proper preheating is key to sealing in flavor and cooking food evenly\n' +
            'DURABLE NONSTICK: Hard Titanium reinforced, scratch resistant and toxin-free nonstick interior stands up to everyday use and keeps food sliding smoothly along the surface, making cooking easier and cleanup a breeze\n' +
            'RIVETED HANDLES: Riveted silicone handles are designed for comfort and safety\n' +
            'USE & CARE: Suitable for all stove tops (except induction); oven safe up to 400°F (lids up to 350°F); dishwasher safe; PFOA, lead, and cadmium free; Lifetime Limited warranty',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81CySAeBYNL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91vIqfpWnoL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91a3w3hXXDL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91S-diPl1SL._AC_SL1500_.jpg',
        price: '56.99',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product25 = new Product({
        title: ' Farberware Glide Nonstick Frying Pan Set / Fry Pan Set / Skillet Set - 9.25 Inch and 11.25 Inch , Black',
        categoryId: category01._id,
        description: 'About this item\n' +
            'PERFORMANCE COOKWARE FROM FARBERWARE: Frying pan is constructed from durable ceramic on aluminum engineering for quick, even heat distribution and long lasting reliability.\n' +
            'SUPERIOR NONSTICK FRYING PAN : Skillet features CopperSlide technology for superior copper ceramic nonstick food release and easy cleanup\n' +
            'EASY TO CLEAN FRY PAN: Frying pan is dishwasher safe for easy cleaning\n' +
            'STURDY AND COMFORTABLE: Easy-hold fry pan handle for a comfortable, confident grip, frying pan is equipped with helper handle to move pan from station to station throughout kitchen\n' +
            'NONSTICK FRYING PAN SET INCLUDES: 9.25-Inch frying pan, 11.25-Inch frying pan',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71TCbBBxkxL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/915EiVUQbAL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91sJNdH5HYL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/916HmPkCPOL._AC_SL1500_.jpg',
        price: '39.99',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product26 = new Product({
        title: ' HausRoland Nonstick Frying Pan Set Restaurant Fry Pans skillets (GS-01233, Black)',
        categoryId: category01._id,
        description: 'About this item\n' +
            '【Tri-ply Super non-stick Coating】Two hard alumina layers, one aluminum layer. Alumina is resistant to oxidation, acid and alkali, very smooth and easy to clean. Imported Alumina material, high temperature resistance, faster heat conduction, more uniform heating. This nonstick coating also safely used, Adopts 100% PFOA, PTFE, Lead and Cadmium Free, scratch resistant nonstick coating for healthier cooking with less fat\n' +
            '【Easy to Operate】Aluminum material is lightweight, high hardness, friction resistant, very easy to stir fry, a good choice for outdoor camping, easy to carry, omelette pans can complete various cooking methods, can also use this nonstick skillet to cook the perfect pancake, casserole, curry, vegetables, omelets, fajitas and more.\n' +
            '【Best Choice For You】Dishwasher safe. Your 100% satisfaction is our unremitting pursuit. offer 1 year warranty and a 30-day 100% money back guarantee. We believe this is one of the best frying pan on the market and therefore confidently gives you an excellent guarantee',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61uxZk1D%2BvL._AC_SL1300_.jpg,https://images-na.ssl-images-amazon.com/images/I/61jtGj-uHJL._AC_SL1300_.jpg,https://images-na.ssl-images-amazon.com/images/I/61EBdj3whXL._AC_SL1300_.jpg,https://images-na.ssl-images-amazon.com/images/I/61vR5G234YL._AC_SL1300_.jpg',
        price: '38.00',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product27 = new Product({
        title: 'Carote 8 Inch Nonstick Skillet Frying Pan Egg Skillet Omelet Pan, Nonstick',
        categoryId: category01._id,
        description: 'About this item\n' +
            'Eco-friendly Granite Coating – Granistone nonstick material from Switzerland,PFOA FREE\n' +
            'Non-stick & Easy to Clean – The cookware body is made of Die cast, which is more durable and sturdy.Super easy to cleanup.\n' +
            'Wood Effect Handle – The Bakelite handle are comfortable to grip and stay cool while cooking.\n' +
            'Suitable for All Stove – Including induction,heat evenly and quickly.\n' +
            'Service & Guarantee – Full 12-month warranty,Any quality problem,Please to contact us at any time.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71L9nVD2MmL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71EeyAMUmsL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/715gKxRvZNL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51UbF1HT9xL._AC_SL1000_.jpg',
        price: 13.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product28 = new Product({
        title: ' Carote 3 Quart Nonstick Saute Pan Deep Frying Pan with Cover Non-Stick Jumbo Cooker Granite Stone Coating',
        categoryId: category01._id,
        description: 'About this item\n' +
            'Eco-friendly Granite Coating – Natural Stone material from Switzerland,PFOA FREE\n' +
            'Non-stick & Easy to Clean – The nonstick interior is made of cast aluminum,which is more durable and sturdy.Super easy to clean up\n' +
            'Wood Effect Handle – The Bakelite handle are comfortable to grip and stay cool while cooking.\n' +
            'Suitable for All Stove – Including induction,heat evenly and quickly\n' +
            'Service & Guarantee – Full 12-month warranty,Any quality problem,Please to contact us at any time.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71cTFaHEKoL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71XDpOlwx6L._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/71oW2u1LGOL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61akKXTDv1L._AC_SL1000_.jpg',
        price: 37.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product29 = new Product({
        title: ' T-fal E938S3 Professional Total Nonstick Thermo-Spot Heat Indicator',
        categoryId: category01._id,
        description: 'About this item\n' +
            'TITANIUM NONSTICK INTERIOR: Durable nonstick coating that stands up to rigorous usage; Designed for everyday chef looking to create delicious meals like a pro\n' +
            'THERMO-SPOT TECHNOLOGY: Unique heat indicator that turns solid red to show when pans are properly preheated to start cooking\n' +
            'THICK INDUCTION BASE: Distributes heat evenly resulting in no hot spots for reliable cooking results\n' +
            'RIVETED SILICONE HANDLES: Provides comfortable and secure grip\n' +
            'DISHWASHER AND OVEN SAFE: Up to 400°F\n' +
            'ALL COOK TOPS COMPATIBILITY: Including Induction\n' +
            'Lifetime limited guarantee',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81BiJk3eXlL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/813B9vT2oOL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81N3d9b7RoL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91eqp5yor5L._AC_SL1500_.jpg',
        price: 69.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product30 = new Product({
        title: 'Rachael Ray 87631-T Cucina Hard Anodized Nonstick Skillet with Helper ',
        categoryId: category01._id,
        description: 'About this item\n' +
            'Dishwasher safe nonstick: Fry pan is dishwasher safe for easy cleaning and has long-lasting nonstick interior for effortless food release and cleanup.\n' +
            'Even heat distribution: Frying pan features durable hard-anodized aluminum construction that heats quickly and evenly.\n' +
            'Built for convenience: Large frying pan has a convenient, double-riveted helper handle for moving sizable portions from stove to oven to table.\n' +
            'Oven safe: Oven safe to 350°F, this 14-inch nonstick frying pan is a great complement to many other items in the Rachael Ray collections. Lifetime limited warranty.\n' +
            'Product details: Rachael Ray Cucina hard anodized nonstick skillet with helper handle, anodized aluminum nonstick fry pan, 14-inch, gray and red.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81Qxds6jm-L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71JStBXwBXL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/813SN1SeByL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/714ZLGT3PEL._AC_SL1500_.jpg',
        price: 59.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product31 = new Product({
        title: 'GreenPan Prime Midnight Healthy Ceramic Nonstick, Covered Frying Pan ',
        categoryId: category01._id,
        description: 'About this item\n' +
            'GreenPan’s Thermolon healthy ceramic nonstick coating is free of PFAS, PFOA, lead, and cadmium, so it will never release toxic fumes, even if it’s accidentally overheated\n' +
            'Metal utensil safe, this pan\'s diamond-reinforced coating is incredibly durable\n' +
            'Tough Hard Anodized body is scratch-resistant and designed to stand up to daily demands\n' +
            'Oven and broiler safe up to 600°F\n' +
            'Dishwasher safe for easy cleanup\n' +
            'Will never warp or wobble over time, ensuring even cooking without the loss of energy or heat\n' +
            'Matte stainless steel handle is riveted and ergonomic for a secure and comfortable grip\n' +
            'Suitable for all stovetops except induction',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71eP27ifZfL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/910PuecqOPL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91AS7h0lquL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91UpB-UKTbL._AC_SL1500_.jpg',
        price: 49.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product32 = new Product({
        title: 'Rachael Ray 87633 Cucina Hard Anodized Nonstick Frying Pan Set / Fry ',
        categoryId: category01._id,
        description: 'About this item\n' +
            'Durable frying pans with even heat distribution: These fry pans feature durable hard-anodized aluminum construction that heats quickly and evenly\n' +
            'Dishwasher safe nonstick: fry pans are dishwasher safe for easy cleaning and have long-lasting nonstick interiors for effortless food release and cleanup\n' +
            'Dual-riveted, grippy handles: the skillets\' Comfortable grippy handles are double-riveted for Extra strength\n' +
            'Oven safe: oven safe to 400°f, this nonstick frying pan set is a great complement to many other items in the Rachael Ray Collections\n' +
            'Set includes: 9.25-Inch and 11-inch frying pans',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/8147WG%2B80ZL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71HjYwYgK3L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81ROEm-COrL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81M1qfP85fL._AC_SL1500_.jpg',
        price: 61.34,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product33 = new Product({
        title: 'NutriChef Pre-Seasoned Cast Iron Skillet 3 Pieces Kitchen Frying Pan Nonstick ',
        categoryId: category01._id,
        description: 'NON-STICK COOKING SURFACE: The NutriChef 3 Pieces Skillet Kitchen Pans feature a non-stick cooking surface that ensures quick, effortless food release & eliminates the need for butter, oil, or cooking spray. Makes tasty homemade food slide out easily\n' +
            'PRE-SEASONED: The classic fry pan cooking set comes pre-seasoned w/ 100% natural vegetable oil to prevent the cookware from rusting while on store shelves or warehouse & also prevents food from sticking. Ideal for cooking chicken, steak & vegetable\n' +
            'HEAT SAFE UP TO 500°F: The PFOA & PFOS Free nonstick skillet cast iron pan set is heat-safe up to 500°F. Features wide diameter size for large meals. Comes in 6, 8, & 10 -inch cast iron skillets & includes cool-touch silicone handles and scraper\n' +
            'SIDE DRIP SPOUT: Features integrated side drip lips making it easy to discard excess oil & fat. The round nonstick pans are made of heavy duty cast iron proven to effectively distribute & retain heat for an even cooking throughout the entire pan\n' +
            'INDUCTION READY: This nonstick grill pan kitchen set is compatible w/ all heating methods. Works on gas, induction, ceramic & electric stove top. It is stain-resistant & easy to clean. Enjoy easy traditional cooking style with the whole family',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/91LuK7esvOL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91TmxVrV8KL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81Su68BrPvL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81SV5Dz0G%2BL._AC_SL1500_.jpg',
        price: 48.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product34 = new Product({
        title: 'Cook N Home Nonstick Saute Fry Pan Set, 8, 9.5, and 11-Inch, Turquoise, 3-Piece ',
        categoryId: category01._id,
        description: 'About this item\n' +
            'Made of thick gauge aluminum that provides even/quick heat conduction and prevents hot spots\n' +
            'Nonstick makes food release, cleaning, flipping, and tossing easy and allows for healthy cooking\n' +
            'Riveted handle with hole for hanging is comfortable to hold, stays cool, and non-slip; Oven safe to 375F\n' +
            'Flat, wide, and thick bottom for a large cooking surface that is multipurpose and keeps temperature\n' +
            'Induction compatible and works on: gas, electric, halogen, ceramic, glass, etc.; Dishwasher safe',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71KPfPc0OIL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71zxSHlSEaL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71d%2BHPhnYJL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71Op88Z6oJL._AC_SL1500_.jpg',
        price: 39.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product35 = new Product({
        title: ' COTEY 8.5 & 10 & 12 Inch Frying Pans Set, Nonstick Grill Skillet with Stone',
        categoryId: category01._id,
        description: 'About this item\n' +
            'Eco-friendly Stone-derived Coating – Stone-derived Coating from Germany that achieves non-stick perfection, PFOA & APEO FREE.\n' +
            'Durable Nonstick: Scratch resistant and toxin free, hard anodized aluminum has a much stronger protective layer; Easy to clean.\n' +
            'Heats Quickly & Evenly: Hard anodized aluminum retains perfect heat that conducts heat quickly and evenly with precise temperature control.\n' +
            'Riveted Handles: Riveted, stay cool silicone handles are comfortable and secure\n' +
            'Use & Care: Suitable for all stove tops, including induction; Oven safe up to 400℉. Dishwasher safe.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81EFd%2BBdalL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71N8CG2UO7L._AC_SL1100_.jpg,https://images-na.ssl-images-amazon.com/images/I/718P4bNMjtL._AC_SL1100_.jpg,https://images-na.ssl-images-amazon.com/images/I/71tGFlZdLhL._AC_SL1100_.jpg',
        price: 35.75,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product36 = new Product({
        title: ' 10" Stone Earth Frying Pan by Ozeri, with 100% APEO & PFOA-Free Stone-',
        categoryId: category01._id,
        description: 'About this item\n' +
            'Utilizes a stone-derived coating from Germany that is 100% free of APEO, GenX, PFBS, PFOS, PFOA, and the lesser known chemicals NMP and NEP.\n' +
            'Eco-friendly pan delivers unprecedented non-stick performance without risk of exposure to these controversial chemicals.\n' +
            'Features a hardened scratch-resistant coating that is super easy to clean.\n' +
            'Interior of pan made out of durable heavy-gauge aluminum, with a magnetized base for use with rapid heat transfer induction stoves.\n' +
            'Boasts a comfortable heat-resistant silicon coated handle that is reinforced to the pan via 3 solid rivets.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81x8oJHM8dL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71kZN7iDVVL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61l6P74PK%2BL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81zDZRBZ0hL._AC_SL1500_.jpg',
        price: 28.65,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product37 = new Product({
        title: ' Amazon Basics Ceramic Non-Stick 3-Piece Skillet Set, 8-Inch, 9.5-Inch ',
        categoryId: category01._id,
        description: 'About this item\n' +
            '3-piece non-stick cookware set constructed with durable aluminum and a hard nano-ceramic exterior; ANSI certified and PFOA-free\n' +
            'Multi-layer, non-stick interior coating for easy food release and cleaning\n' +
            'Dual-riveted silicone handle stays cool to the touch and provides a comfortable, non-slip grip\n' +
            'Oven safe to 150 degrees; suitable for all stovetops, except induction; dishwasher safe\n' +
            '3-piece set includes: 8 inch, 9.5 inch, and 11 inch skillets',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71hLNXNBRdL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61bTycwMrxL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71DBPNcHqoL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81CK%2BOOL5YL._AC_SL1500_.jpg',
        price: 40.28,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product38 = new Product({
        title: ' Cooking Light Allure Premier Ceramic Non-Stick Coating Cookware, 8 inch ',
        categoryId: category01._id,
        description: 'About this item\n' +
            'Set includes: 8 inch non-stick ceramic fry pan and a 9. 5 inch non-stick ceramic fry pan with silicone riveted handles\n' +
            'Exceeds expectations: This multipurpose 2 pack fry pan set is built to Perform and last. Extra durable construction offers even heat distribution. Riveted stay cool silicone handles provides a safe, confident and comfortable grip. Superior non-stick ceramic coating prevents food from sticking; allowing you to use less oil for healthier meals for you and your family.\n' +
            'Easy to clean, inside and out: the non-stick ceramic interior releases foods effortlessly and allows for a fast and easy clean-up.\n' +
            'Cook your way: This high performance skillet set cooks a wide range of foods to include breakfast favorites such as omelets, pancakes, bacon, sausage, hash browns and eggs, as well as quesadillas, vegetables, chicken, fish, pork, steak and more.\n' +
            'Use and care: The advanced non-stick ceramic technology is water-based and manufactured without PFOA.\n' +
            'Material Type: Stainless Steel',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71Lvo%2BGrL5L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81FU9RrixVL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71bT5nyIafL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81GFs-PalZL._AC_SL1500_.jpg',
        price: 39.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product39 = new Product({
        title: ' homgeek Frying Pan Set, Nonstick Skillet Made of 410 Stainless Steel with Professional Nonstick Coating,',
        categoryId: category01._id,
        description: 'About this item\n' +
            '🍳 8, 9.5 inches multifunctional frying pan for every occasion – whether you’re making a quick omelette for one or breakfast pancakes for the whole family\n' +
            '🍳 Superior heat mastery system combines with our non-stick coating, it can promise providing perfect cooking results every time\n' +
            '🍳 Ergonomically designed and Heat-resistant handles for safety, comfort, Riveted handle with hole for hanging is comfortable to hold, stays cool, and non-slip\n' +
            '🍳 High quality double coated nonstick interior which promise for easier cooking and cleanup and also can be used for dishwasher\n' +
            '🍳 PFOA Free, lead and Cadmium-free, It can be sure that you will receive safe, efficient and high quality equipment\n',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61AMARhqmEL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/71KT1ikqwSL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71U22N9XzjL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/717AsiwQysL._AC_SL1500_.jpg',
        price: 34.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product40 = new Product({
        title: 'Circulon Radiance Hard Anodized Nonstick Frying Pan Set / Fry Pan Set / ',
        categoryId: category01._id,
        description: 'About this item\n' +
            'BUILT TO LAST: Circulon Radiance combines durable cookware performance with superior nonstick technology and dishwasher safe cleaning convenience\n' +
            'SUPERIOR NONSTICK FRYING PANS: Boasts the TOTAL Nonstick System of raised circles and PFOA-free, metal utensil safe nonstick for natural food release and easy cleanup that lasts 10 times longer than normal nonsticks\n' +
            'SET INCLUDES: 8.5-Inch Frying Pan, 10-Inch Frying Pan, 12.25-Inch Frying Pan\n' +
            'CAN HANDLE THE HEAT: All fry pans are oven safe to 350°F with sturdy, dual-riveted stainless steel handles\n' +
            'EASY TO CLEAN: Frying pans are dishwasher safe for convenience\n' +
            'HASSLE-FREE LIFETIME GUARANTEE',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/715ifgRKsnL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81vF55ds0EL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91whIjvpw%2BL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91%2BEkvBWRLL._AC_SL1500_.jpg',
        price: 54.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product41 = new Product({
        title: 'Galanz GLR10TS5F Refrigerator, Adjustable Electrical Thermostat Control with Top Mount Freezer Compartment, 10.0 Cu.Ft, Stainless Steel Look, 10 Cu. Ft',
        categoryId: category02._id,
        description: 'Included with set: 8" Fry pan 10" Fry pan 2.5 quart Saucepan with cover 5 Quart. Saute pan with cover 6 quart Stock pot with cover\n' +
            'Durable 3 ply metal construction\n' +
            'Evenly sears, browns, and sauts\n' +
            'Dishwasher safe for easy cleanup\n' +
            'Oven safe to 450°F\n' +
            'Compatible with gas, electric, induction, and glass top stovetops',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81J6ew82RYL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/917rUwmhIiL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81%2BesIDY6LL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91kQoY6xO3L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81y15YWVL5L._AC_SL1500_.jpg',
        price: 323.22,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product42 = new Product({
        title: 'Midea 3.1 Cu. Ft. Compact Refrigerator, WHD-113FSS1 - Stainless Steel',
        categoryId: category02._id,
        description: 'Included with set: 8" Fry pan 10" Fry pan 2.5 quart Saucepan with cover 5 Quart. Saute pan with cover 6 quart Stock pot with cover\n' +
            'Durable 3 ply metal construction\n' +
            'Evenly sears, browns, and sauts\n' +
            'Dishwasher safe for easy cleanup\n' +
            'Oven safe to 450°F\n' +
            'Compatible with gas, electric, induction, and glass top stovetops',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61gf8uBCv6L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/718rLnQ5zxL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81FjWzd-1qL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71EOSAL6MaL._AC_SL1500_.jpg',
        price: 173.48,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product43 = new Product({
        title: 'RCA RFR786-RED 2 Door Apartment Size Refrigerator with Freezer, 7.5 cu. ft, Retro Red',
        categoryId: category02._id,
        description: 'Included with set: 8" Fry pan 10" Fry pan 2.5 quart Saucepan with cover 5 Quart. Saute pan with cover 6 quart Stock pot with cover\n' +
            'Durable 3 ply metal construction\n' +
            'Evenly sears, browns, and sauts\n' +
            'Dishwasher safe for easy cleanup\n' +
            'Oven safe to 450°F\n' +
            'Compatible with gas, electric, induction, and glass top stovetops',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/614UMsIFOYL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61I6-WCKNhL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71avvgY9%2BNL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81o0eTBsRaL._AC_SL1500_.jpg',
        price: 322.45,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product44 = new Product({
        title: 'Kratos Refrigeration 69K-749HC Solid Top Chest Freezer, 19.4 Cu. Ft. Capacity',
        categoryId: category02._id,
        description: 'Included with set: 8" Fry pan 10" Fry pan 2.5 quart Saucepan with cover 5 Quart. Saute pan with cover 6 quart Stock pot with cover\n' +
            'Durable 3 ply metal construction\n' +
            'Evenly sears, browns, and sauts\n' +
            'Dishwasher safe for easy cleanup\n' +
            'Oven safe to 450°F\n' +
            'Compatible with gas, electric, induction, and glass top stovetops',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/218Gkms05jL.jpg,https://images-na.ssl-images-amazon.com/images/I/31ZdKcMjftL.jpg,https://images-na.ssl-images-amazon.com/images/I/51%2By-i-1tgL.jpg,https://images-na.ssl-images-amazon.com/images/I/312K%2BrZqD9L.jpg',
        price: 289.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product45 = new Product({
        title: 'Whynter CUF-110B Energy Star 1.1 Cubic Feet Upright Lock, Black Freezer',
        categoryId: category02._id,
        description: 'Included with set: 8" Fry pan 10" Fry pan 2.5 quart Saucepan with cover 5 Quart. Saute pan with cover 6 quart Stock pot with cover\n' +
            'Durable 3 ply metal construction\n' +
            'Evenly sears, browns, and sauts\n' +
            'Dishwasher safe for easy cleanup\n' +
            'Oven safe to 450°F\n' +
            'Compatible with gas, electric, induction, and glass top stovetops',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/7135JGlTxEL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/51KbpJzei9L._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51MzokkA8mL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51d8Vu58bbL._AC_SL1000_.jpg',
        price: 278.10,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product46 = new Product({
        title: 'RCA 10 Cubic Foot Chest Freezer',
        categoryId: category02._id,
        description: 'Included with set: 8" Fry pan 10" Fry pan 2.5 quart Saucepan with cover 5 Quart. Saute pan with cover 6 quart Stock pot with cover\n' +
            'Durable 3 ply metal construction\n' +
            'Evenly sears, browns, and sauts\n' +
            'Dishwasher safe for easy cleanup\n' +
            'Oven safe to 450°F\n' +
            'Compatible with gas, electric, induction, and glass top stovetops',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61NXWzZIEJL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61fM2qkuvZL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61eCNaBdhPL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/518Tq1yT17L._AC_SL1500_.jpg',
        price: 448.40,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product47 = new Product({
        title: 'Midea 3.1 Cu. Ft. Compact Refrigerator, WHD-113FSS1 - Stainless Steel',
        categoryId: category02._id,
        description: 'About this item\n' +
            'Your purchase includes One Midea 3.1 Cu. Ft. Compact Refrigerator, WHD-113FSS1 model in Stainless Steel\n' +
            'Refrigerator dimensions: 3.1 Cu Ft inner space | 18.50” W x 19.37” D x 32.95” H | Product weight: 52.20 lbs\n' +
            'The internal refrigerator temperature range from 32F to 50F and the freezer temperatures range from -11.2F to 5F\n' +
            'Conveniently set your fridge door to open to the left or right, depending on the layout of your kitchen\n' +
            'Energy Star Rated, UL Energy Certification',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61gf8uBCv6L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/718rLnQ5zxL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81FjWzd-1qL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81b60hqeFmL._AC_SL1500_.jpg',
        price: '229.99',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product48 = new Product({
        title: 'RCA RFR320-B-Black-COM RFR321 Mini Refrigerator, 3.2 Cu Ft Fridge, Black,',
        categoryId: category02._id,
        description: 'About this item\n' +
            'Your purchase includes One RCA RFR320 Single Door Mini Fridge with Freezer in Black color\n' +
            'Fridge dimensions: 17-1/2” W x 18.5/8” D x 31.5/8” H | 84 L - 3.2 cu. Ft. inner space | Product weight: 50.7 lbs. | Freezer capacity: 0.2 cu. Ft. | Refrigerant type: R134a, 1.77 Oz/50g\n' +
            'Reversible Door makes it easy to fit this in any spot of your room\n' +
            'Compressor Cooling for ultimate performance even in hot weather\n' +
            'Adjustable Thermostat and Adjustable lever Feet offers the ultimate in versatility',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/610izjWu3cL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71mnx2OT6LL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/717Wgbs66nL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71AtPs-8j4L._AC_SL1500_.jpg',
        price: '210.86',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product49 = new Product({
        title: 'Midea 3.1 Cu. Ft. Compact Refrigerator, WHD-113FSS1 - Stainless Steel',
        categoryId: category02._id,
        description: 'About this item\n' +
            'Your purchase includes One Midea 3.1 Cu. Ft. Compact Refrigerator, WHD-113FSS1 model in Stainless Steel\n' +
            'Refrigerator dimensions: 3.1 Cu Ft inner space | 18.50” W x 19.37” D x 32.95” H | Product weight: 52.20 lbs\n' +
            'The internal refrigerator temperature range from 32F to 50F and the freezer temperatures range from -11.2F to 5F\n' +
            'Conveniently set your fridge door to open to the left or right, depending on the layout of your kitchen\n' +
            'Energy Star Rated, UL Energy Certification',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61gf8uBCv6L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/718rLnQ5zxL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81FjWzd-1qL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71EOSAL6MaL._AC_SL1500_.jpg',
        price: '220.52',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product50 = new Product({
        title: 'GE GDE03GGKBB Freestanding Compact Refrigerator, 3.1 Cu Ft, Black',
        categoryId: category02._id,
        description: 'About this item\n' +
            '3. 1 cu. ft. capacity ENERGY STAR double-door compact refrigerator\n' +
            'Separate true-freezer compartment - 0. 93 cu. ft. freezer capacity gives you room to store frozen foods\n' +
            'Interior lighting - Automatically illuminates when the fresh-food door is open\n' +
            'Clear crisper - Provide the ideal storage environment for fruits and vegetables\n' +
            'Glass shelves - Creates convenient food storage with easy-to-clean shelves\n' +
            'Door shelves - Small containers and boxes are easy to find in separate door areas\n' +
            'Can rack - Soft drink cans are within easy reach for quick access',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/41IYkzXPfaL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51DnmFij4sL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51k80pxwCML._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61nG5z1suWL._AC_SL1000_.jpg',
        price: '43.99',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product51 = new Product({
        title: 'Commercial Cool CCRD32W Compact Double Door Refrigerator with True',
        categoryId: category02._id,
        description: 'About this item\n' +
            '2 Full-width Slide-out Glass Shelves,  2 Half-width Door Storage Shelves\n' +
            'Can Storage Fits up to 6 cans,  2 Liter and Tall Bottles Door Storage\n' +
            'Full-width Crisper, Interior Light\n' +
            'Separate Full-width True Freezer Compartment with Ice Cube Tray\n' +
            '1 Full-width Freezer Door Storage Shelf\n' +
            'Recessed Door Handle, space saving flat back design\n' +
            'Adjustable Leveling Legs, Manual Defrost\n' +
            'Compliant to DOE 2014 Standards, R600a Refrigerant',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71uRtdeJdsL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91hyQi2eUUL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91oiX%2Bllu3L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91idtyjPepL._AC_SL1500_.jpg',
        price: '199.99',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product52 = new Product({
        title: 'RCA RFR832-BLACK, 3.2 cu. ft. 2 Door Fridge with Freezer, Black Bar Fridge',
        categoryId: category02._id,
        description: 'About this item\n' +
            '3.2 Cubic Foot Fridge and Freezer (Black)\n' +
            '2 Door Configuration - Top Door for Freezer and bottom Door for Fridge\n' +
            'Adjustable Thermostat and Compressor Cooling for ultimate performance even in hot weather\n' +
            'Space Saving Flush Back Design\n' +
            'Built in Can Dispenser and Door Basket for 2 Liter Bottles',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71%2BOsZ9O%2BOL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61ue196EsmL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61Nx0bGXWiL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91Q7%2BZDmbSL._AC_SL1500_.jpg',
        price: '167.00',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product53 = new Product({
        title: 'RCA RFR320-B-Black-COM RFR321 Mini Refrigerator, 3.2 Cu Ft Fridge, Black,',
        categoryId: category02._id,
        description: 'About this item\n' +
            'Your purchase includes One RCA RFR320 Single Door Mini Fridge with Freezer in Black color\n' +
            'Fridge dimensions: 17-1/2” W x 18.5/8” D x 31.5/8” H | 84 L - 3.2 cu. Ft. inner space | Product weight: 50.7 lbs. | Freezer capacity: 0.2 cu. Ft. | Refrigerant type: R134a, 1.77 Oz/50g\n' +
            'Reversible Door makes it easy to fit this in any spot of your room\n' +
            'Compressor Cooling for ultimate performance even in hot weather\n' +
            'Adjustable Thermostat and Adjustable lever Feet offers the ultimate in versatility',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61ixroTFTYL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61hlCMFh7QL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71mnx2OT6LL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/717Wgbs66nL._AC_SL1500_.jpg',
        price: '210.86',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product54 = new Product({
        title: 'Midea 3.1 Cu. Ft. Compact Refrigerator, WHD-113FW1 - White',
        categoryId: category02._id,
        description: 'About this item\n' +
            'Your purchase includes One Midea 3.1 Cu. Ft. Compact Refrigerator, WHD-113FW1 model in White\n' +
            'Refrigerator dimensions: 3.1 Cu Ft inner space | 18.50” W x 19.37” D x 32.95” H | Product weight: 52.20 lbs\n' +
            'The internal refrigerator temperature range from 32F to 50F and the freezer temperatures range from -11.2F to 5F\n' +
            'Conveniently set your fridge door to open to the left or right, depending on the layout of your kitchen\n' +
            'Energy Star Rated, UL Energy Certification',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61W--SzkJJL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/51L5Ibyg8gL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61fkuFGPsQL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71SMVAlCx8L._AC_SL1500_.jpg',
        price: '211.29',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product55 = new Product({
        title: 'WINIA WFR044RCNR Retro Compact Refrigerator, 4.4 Cu. Ft, Red\n',
        categoryId: category02._id,
        description: 'About this item\n' +
            'retro design - the unique retro design captures a vintage aesthetic while keeping modern conveniences\n' +
            'energy star - energy star certified to help you save on energy\n' +
            'led lighting - bright and crisp led lighting illuminates the interior of the fridge\n' +
            'adjustable glass shelf - an adjustable glass shelf that can be moved to suit your food storage needs\n' +
            'stainless wire door bin - storage for smaller items like drinks, fruit and pudding cups, and more\n' +
            'multi-keeper door bin - flap door closure storage suitable for your various food needs\n' +
            'fresh keeper - keep your fruits and vegetables fresh in this crisper-style bin',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71ro87owduL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81faWUEh1PL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/51UnVFCoQKL._AC_SL1199_.jpghttps://images-na.ssl-images-amazon.com/images/I/61M4kSe2LqL._AC_SL1204_.jpg',
        price: '219.99',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product56 = new Product({
        title: 'GE GDE03GGKBB Freestanding Compact Refrigerator, 3.1 Cu Ft, Black',
        categoryId: category02._id,
        description: 'About this item\n' +
            '3. 1 cu. ft. capacity ENERGY STAR double-door compact refrigerator\n' +
            'Separate true-freezer compartment - 0. 93 cu. ft. freezer capacity gives you room to store frozen foods\n' +
            'Interior lighting - Automatically illuminates when the fresh-food door is open\n' +
            'Clear crisper - Provide the ideal storage environment for fruits and vegetables\n' +
            'Glass shelves - Creates convenient food storage with easy-to-clean shelves\n' +
            'Door shelves - Small containers and boxes are easy to find in separate door areas\n' +
            'Can rack - Soft drink cans are within easy reach for quick access',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/41IYkzXPfaL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51DnmFij4sL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51k80pxwCML._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61nG5z1suWL._AC_SL1000_.jpg',
        price: '249.00',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product57 = new Product({
        title: 'Whynter CUF-110B Energy Star 1.1 Cubic Feet Upright Lock, Black Freezer',
        categoryId: category02._id,
        description: 'About this item\n' +
            'Energy Star rated (uses less power than a light blub); Low noise level. Perfect for storing breast milk, ice cream and frozen food.\n' +
            'Freestanding setup (clearance around the unit is needed); 1.1 cu. ft. total storage volume; Product external dimensions: 18.5″W x 17.7″ D x 19.5″ H\n' +
            'Sleek black reversible swing door; Recessed handle provides a flush finish with the door\n' +
            'Cylinder lock and two keys for added security; Mechanical temperature control -10° – 2°F\n' +
            'Powerful R600a compressor cooling. One removable flat slide out wire shelf\n' +
            'Manual Defrost,  and Noise Level <42dB. ',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/713ExjqDvRL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51D%2BaCCXJCL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61wkXhA83RL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61gvxLHNFlL._AC_SL1200_.jpg',
        price: 628.28,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product58 = new Product({
        title: 'Whynter FM-85G 85 Quart Portable Fridge, AC 110V/ DC 12V True Freezer',
        categoryId: category02._id,
        description: '85 Quarts or 120 cans (12FL oz) capacity; Adjustable temperature range: -8°F to 50°F; LED temperature display; “Fast Freeze” mode rapidly cools to -8°F\n' +
            'Car, RV and home use; Operates as a refrigerator or freezer; work with 12/24V DC and 110V AC power; Voltage power AC (115V/ 60Hz – 80W/1.0A) or DC (12V/24V – 5.5A /2.75A Car Lighter Socket); unit can be plugged in with both AC power and the DC power at the same time. If both AC and DC are plugged in at the same time, then the unit will primarily operate on AC. If the AC power source fails, DC will become primary power supply source.\n' +
            '8-feet AC power cord and 10-feet DC power cord; Two removable wire baskets; Insulated lid and walls; ETL approved\n' +
            'Power low indicator; Functions even when tilted 30°; Tough and solid outer powder coated steel housing; Drain Plug for easy cleaning; Stainless steel side handles\n' +
            'Wattage: 80 Watts. Net weight: 71 LB. Internal dimensions: 23" W x 13" L x 18" H including a compressor step with with 8″ W x 8″ H; 45.66 dBA',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/51XPDRWwAWL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/713ExjqDvRL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61wkXhA83RL._AC_SL1000_.jpghttps://images-na.ssl-images-amazon.com/images/I/61sSrJEapLL._AC_SL1000_.jpg',
        price: '628.28',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product59 = new Product({
        title: 'Setpower RV45 47 Quarts Portable Freezer Chest Fridge 12V Cooler, 0℉-50℉, DC 12/24V, AC 110-240V, Car Fridge',
        categoryId: category02._id,
        description: 'FREEZERS WITHOUT ICE: Strong Compressor Function. Adjustable Temperature From 0℉-50℉. No need to prepare ice when going out.\n' +
            '✅ Car & Home Use: DC Power Cable for Car (12/24V); Free AC Adapter for Home Socket (110-240V).\n' +
            '✅ MAX & ECO MODE: MAX Mode for Fast Cooling. ECO Mode for Energy Saving, which is design for outdoor limited energy.\n' +
            '✅ OUTDOOR ADAPTABLE: Work normally within 30° bumps, easily handle muddy mountain roads or steep valleys.\n' +
            '✅ WARRANTY: 2 years on compressor and 1 year for other parts.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71ozvLKTatL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71d1N2ITIuL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71jyao2dOqL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71CJO%2BezGAL._AC_SL1500_.jpg',
        price: '39.89',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product60 = new Product({
        title: 'Whynter FM-452SG 45 Quart Slimfit Portable Refrigerator, AC 110V/ DC 12V',
        categoryId: category02._id,
        description: '45 Quarts or 78 cans (12FL oz) capacity; Adjustable temperature range: -8°F to 50°F; LED temperature display; “Fast Freeze” mode rapidly cools to -8°F\n' +
            'Car, RV and home use; Operates as a refrigerator or freezer; work with 12/24V DC and 110V AC power; Voltage power AC (115V/ 60Hz – 70W/1.0A A) or DC (12V/24V – 5.2A /2.6A Car Lighter Socket); unit can be plugged in with both AC power and the DC power at the same time. If both AC and DC are plugged in at the same time, then the unit will primarily operate on AC. If the AC power source fails, DC will become primary power supply source.\n' +
            '8-feet AC power cord and 10-feet DC power cord; Two removable wire baskets; Insulated lid and walls; ETL approved\n' +
            'Power low indicator; Functions even when tilted 30°; Tough and solid outer powder coated steel housing; Drain Plug for easy cleaning; Stainless steel side handles\n' +
            'Wattage: 70 Watts. Net weight: 52 LB. Internal dimensions: 21" W x 10" L x 15" H including a compressor step with 7.25″ W x 7.5″ H; 43.22 dBA',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71cNtzqXB7L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/817w7HvRoXL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81TnJQM%2BhOL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81oDkIYDM5L._AC_SL1500_.jpg',
        price: '498.00',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product61 = new Product({
        title: 'Whynter FMC-350XP 34 Quart Compact Portable Refrigerator, AC 110V/ DC 12V',
        categoryId: category02._id,
        description: '34 Quarts or 48 cans (12FL oz) capacity; Adjustable temperature range: -8°F to 50°F; LED temperature display; “Fast Freeze” mode rapidly cools to -8°F\n' +
            'Car, RV and home use; Operates as a refrigerator or freezer; work with 12/24V DC and 110V AC power; Voltage power AC (115V/ 60Hz – 1.0A A) or DC (12V/24V – 5.2A /2.6A Car Lighter Socket); unit can be plugged in with both AC power and the DC power at the same time. If both AC and DC are plugged in at the same time, then the unit will primarily operate on AC. If the AC power source fails, DC will become primary power supply source.\n' +
            '8-feet AC power cord and 10-feet DC power cord; Two removable wire baskets; Insulated lid and walls; ETL approved\n' +
            'Power low indicator; Functions even when tilted 30°; Tough and solid outer plastic housing; Drain Plug for easy cleaning; Stainless steel side handles; Non-slip rubber mat that maintains grip on the surface of the portable freezer to prevent drinks from spilling or sliding; USB port outlet\n' +
            'Wattage: 70 Watts. Net weight: 42 LB. Internal dimensions: 10" W x 20" L x 12" H. 45.5 dBA',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81gn2Uh8MNL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81KdEFO7yQL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91xLIClYMRL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81UKAcayy%2BL._AC_SL1500_.jpg',
        price: '628.8',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product62 = new Product({
        title: 'Whynter CUF-110B Energy Star 1.1 Cubic Feet Upright Lock, Black Freezer',
        categoryId: category02._id,
        description: 'Energy Star rated (uses less power than a light blub); Low noise level. Perfect for storing breast milk, ice cream and frozen food.\n' +
            'Freestanding setup (clearance around the unit is needed); 1.1 cu. ft. total storage volume; Product external dimensions: 18.5″W x 17.7″ D x 19.5″ H\n' +
            'Sleek black reversible swing door; Recessed handle provides a flush finish with the door\n' +
            'Cylinder lock and two keys for added security; Mechanical temperature control -10° – 2°F\n' +
            'Powerful R600a compressor cooling. One removable flat slide out wire shelf\n' +
            'Manual Defrost,  and Noise Level <42dB. ',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/51eKwNS6sGL._AC_SL1200_.jpg,https://images-na.ssl-images-amazon.com/images/I/51WgVwFUAeL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61GzT9uI6ZL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71ilLKtP6-L._AC_SL1500_.jpg',
        price: '279.99',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product63 = new Product({
        title: 'Kalamera Portable Refrigerator - 54-Quart Portable Fridge',
        categoryId: category02._id,
        description: '54 QUART CAPACITY MINI FRIDGE will easily fit in your trunk, or behind a car seat, to carry your beer or soda cans on your travels and outdoor activities. Invest in a space-saving mini portable fridge.\n' +
            '❄️ LOW-NOISE WINE COOLER REFRIGERATOR: The Kalamera mini refrigerator is designed with an advanced mechanism for tilting within 45°, which ensures whisper-like function. No more noisy travel cooler fridges.\n' +
            '❄️ FAST-COOLING OUTDOOR REFRIGERATOR: With an aluminum alloy chamber, our portable fridge needs just 15 minutess to drop the temperature from 77℉ to 32℉. Keep cheese, snacks, meat, and vegetables fresh on the go.\n' +
            '❄️ ENERGY-SAVING CAMPING COOLER: This eco-friendly 12 Volt camper refrigerator features a digital thermostat for easy temperature control and a battery protection system that keeps the battery charged for longer.\n' +
            '❄️ TRAVEL FREEZER WITH GREAT INSULATION: Powered by a cigarette lighter or wall outlet, our mini deep freezer will maintain its content at the perfect temperature while you are traveling, camping or caravanning.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/51T-3NJJL0L._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/511QffcsOAL._AC_.jpg,https://images-na.ssl-images-amazon.com/images/I/51-6OfS9moL._AC_.jpg,https://images-na.ssl-images-amazon.com/images/I/41kGyjPeevL._AC_.jpg',
        price: '359.99',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product64 = new Product({
        title: 'VEVOR Car Freezer, 42 Quart Capacity Car Refrigerator,40W Camping Fridge with Compressor,Touch Screen for Leisure',
        categoryId: category02._id,
        description: 'LARGE CAPACITY】- This car fridge comes with a food-grade ABS cover plate and galvanized sheet box body. It has an internal capacity of 36.3 quart, including a refrigerated area and a  freezer area. Note: After receiving the product, please keep it standing for 24 hours before use.\n' +
            '【EFFICIENT COOLING】- The aluminum core design makes the compressor run more efficiently. About 30 minutes, the portable car fridge\'s internal temperature can drop from 20 °C/68 °F to below zero. Fast freezing can keep the fresh taste of food.\n' +
            '【SMART TOUCH SCREEN】- Intelligent digital display can show the temperature inside the portable car freezer in real-time. You can set and adjust the cooling temperature by touching the smart screen according to different food preservation requirements.\n' +
            '【EASY TO MOVE】- The portable fridge freezer, with handles and casters, is convenient to move whenever and wherever you go. It is built with the anti-vibration device, can work smoothly even on the bumpy mountain road.\n' +
            '【WIDE APPLICATION】-The portable fridge is small in size and easy to carry; you can directly put it in your car\'s trunk. It is ideal for outdoor tourism, fishing, etc. It is also used to store red wine, drinks, ',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81eFy4dWsYL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/7123sNV8ewL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71q2QVqRXML._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/719bJlrcI5L._AC_SL1500_.jpg',
        price: '339.99',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product65 = new Product({
        title: 'Whynter FM-452SG 45 Quart Slimfit Portable Refrigerator,',
        categoryId: category02._id,
        description: '45 Quarts or 78 cans (12FL oz) capacity; Adjustable temperature range: -8°F to 50°F; LED temperature display; “Fast Freeze” mode rapidly cools to -8°F\n' +
            'Car, RV and home use; Operates as a refrigerator or freezer; work with 12/24V DC and 110V AC power; Voltage power AC (115V/ 60Hz – 70W/1.0A A) or DC (12V/24V – 5.2A /2.6A Car Lighter Socket); unit can be plugged in with both AC power and the DC power at the same time. If both AC and DC are plugged in at the same time, then the unit will primarily operate on AC. If the AC power source fails, DC will become primary power supply source.\n' +
            '8-feet AC power cord and 10-feet DC power cord; Two removable wire baskets; Insulated lid and walls; ETL approved\n' +
            'Power low indicator; Functions even when tilted 30°; Tough and solid outer powder coated steel housing; Drain Plug for easy cleaning; Stainless steel side handles\n' +
            'Wattage: 70 Watts. Net weight: 52 LB. Internal dimensions: 21" W x 10" L x 15" H including a compressor step with 7.25″ W x 7.5″ H; 43.22 dBA',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71cNtzqXB7L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/817w7HvRoXL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81TnJQM%2BhOL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81oDkIYDM5L._AC_SL1500_.jpg',
        price: '735.55',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product66 = new Product({
        title: 'Whynter FM-45G 45 Quart Portable',
        categoryId: category02._id,
        description: 'External dimensions: 23.5″ W x 16.5″L x 20.5″ H | Net weight: 45 lb\n' +
            '45 Quarts or 60 Cans (12FL oz) capacity; Adjustable temperature range: -8°F to 50°F; LED temperature display; “Fast Freeze” mode rapidly cools to -8°F\n' +
            '8-feet AC power cord and 10-feet DC power cord; Two removable wire baskets; Insulated lid and walls; ETL approved\n' +
            'Power low indicator; Functions even when tilted 30°; Tough and solid outer powder coated steel housing; Drain Plug for easy cleaning; Stainless steel side handles\n' +
            'Car, RV and home use; Operates as a refrigerator or freezer; work with 12/24V DC and 110V AC power; Voltage power AC (115V/ 60Hz – 65W/ 0.75A) or DC (12V/24V – 4.5A /2.5A Car Lighter Socket); unit can be plugged in with both AC power and the DC power at the same time. If both AC and DC are plugged in at the same time, then the unit will primarily operate on AC. If the AC power source fails, DC will become primary power supply source.\n' +
            'Wattage: 65 Watts\n' +
            'ETL approved; Refrigerant Type: R-134A',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/51D%2BaCCXJCL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/617JsdCX1ZL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61gvxLHNFlL._AC_SL1200_.jpg,https://images-na.ssl-images-amazon.com/images/I/51bBujqqVKL._AC_SL1000_.jpg',
        price: '569.99',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product67 = new Product({
        title: 'Cuisinart Electric Griddler,',
        categoryId: category03._id,
        description: 'About this item\n' +
            'LCD display- displays function, temperature and timer. NOTE : Model Number GR-5BP1 and GR-5B same product\n' +
            'User-friendly digital controls\n' +
            'Adjustable temperatures from 175-450 degrees\n' +
            'Contact grill, panini press, full grill, full griddle and half grill/half griddle\n' +
            'Removable and reversible dishwasher-safe nonstick cooking plates for easy storage\n' +
            'Dishwasher-safe scraping tool for easy cleanup\n' +
            'number_of_pieces: 2.0',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71n1JPgTPML._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81pkbQhbIbL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81ZTbckU8DL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91r3HnkLYqL._AC_SL1500_.jpg',
        price: 1073.000,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product68 = new Product({
        title: 'Philips Kitchen Appliances Philips Soup Maker, Makes 2 - 4 Servings,',
        categoryId: category03._id,
        description: 'About this item\n' +
            'Make fresh soup when you want. No waiting, no planning, and no additional appliances necessary. The Philips soup maker automatically heats and blends your favorite soups - in as little as 18 minutes\n' +
            'More than just soup. 6 preset programs - Pureed soup, chunky soup, cold soup, compote, smoothies, and thanks to optimized heating profile, milk based soup. Plus, use it as a countertop blender.\n' +
            'Make healthy homemade soups, choose what to add without the worries of unknown ingredients found in canned soups. Try making soups like potato, broccoli, tomato, miso and chicken noodle soup.\n' +
            'Includes a recipe book with 38 recipes and expert tips. Plus, of the 38 recipes, 13 can be used as a soup cleanse. They\'re marked with a special leaf icon.\n' +
            'Enjoy perfectly textured soups and more with the unique blade design. With a 1.2 liter capacity, you can easily make a meal for 2 or appetizers for 4.\n' +
            'Made for the USA. Voltage: 110/120. Power: 1000 watts',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81-AyC%2B3UhL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/7153d%2BNt3gL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81T3GuEw27L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81bHRJuynzL._AC_SL1500_.jpg',
        price: 197.000,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product69 = new Product({
        title: 'Philips Kitchen Appliances Digital Twin TurboStar Airfryer XXL, with Fat ',
        categoryId: category03._id,
        description: 'About this item\n' +
            'The Philips Airfryer XXL is the healthiest way to fry, with little or no added oil. It\'s the only air fryer with fat reduction technology that reduces and captures excess fat\n' +
            'With a 3 pounds capacity you can now make delicious meals for the up to 6 people every day. Fits a whole chicken or 2 bags of frozen French fries; Just as crispy as deep-fried\n' +
            'The air fryer is instantly hot and ready to go in seconds, cooking 4 times faster than a conventional oven. With no preheat needed, you can save time and start cooking right away\n' +
            'Multi-cooking technology: Air fry, bake, grill, roast, reheat, dehydrate, and toast, all in the same device. The digital interface includes 5 one-touch programs\n' +
            'Cleaning is simple: The Philips Airfryer XXL includes dishwasher-safe removable parts, and a quick-clean basket to save you time\n' +
            'Included components: Airfryer, recipe book and instructions',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61o899tlmvL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71XIfQKI3qL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/819spq-AyLL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81pLWYBiGXL._AC_SL1500_.jpg',
        price: 140.000,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    // const product70 = new Product({
    //     title: 'SonicWall TZ350 Network Security Appliance 02-SSC-0942',
    //     categoryId: category03._id,
    //     description: 'About this item\n' +
    //         'Flexible security solution that offers a unified security solution to small to mid-size organizations\n' +
    //         'Blocks malware and zero-day threats with both on-box and cloud-based Advanced Threat Prevention\n' +
    //         'Zero-Touch Deployment allows for easy configuration and management, all accessible through the cloud\n' +
    //         'Includes a 1 year limited manufacturer warranty',
    //     thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71HanXJQ%2B3L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/719-MMIrwbL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71ZFkkmhx9L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71x5GERTF3L._AC_SL1500_.jpg',
    //     price: 345.000,
    //     created_at: Date.now(),
    //     updated_at: Date.now(),
    //     deleted_at: null,
    //     status: 1
    // });
    // const product71 = new Product({
    //     title: 'Sunny Health & Fitness SF-E905 Elliptical Machine Cross ',
    //     categoryId: category03._id,
    //     description: 'RESISTANCE: Easily adjust the intensity of your workout with the twist of the precise micro-controller equipped with 8 levels of magnetic resistance.\n' +
    //         'DIGITAL MONITOR WITH PULSE: Follow along with your workout progress on the digital monitor that displays your time, speed, distance, calories, and pulse.\n' +
    //         'ANTI-SLIP HANDLEBARS AND FOOT PADS: Complete a safe and stable workout thanks to the anti-slip handlebars and footpads.\n' +
    //         'STABILIZER: Achieve smooth and even movement by leveling your elliptical bike with the onboard stabilizers.\n' +
    //         'COMPACT: This compact machine is ideal for people looking to achieve an incredible workout, but don’t have much space to work with.',
    //     thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71Tm8YtLFML._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71EBU738xVL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/818jaesSmTL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81z2VF2EZyL._AC_SL1500_.jpg',
    //     price: 555.000,
    //     created_at: Date.now(),
    //     updated_at: Date.now(),
    //     deleted_at: null,
    //     status: 1
    // });
    const product72 = new Product({
        title: 'Amazon Basics 5-Cup Coffeemaker with Glass Carafe  ',
        categoryId: category03._id,
        description: 'About this item\n' +
            'Space-saving 5-cup coffeemaker brews up to 5 cups at a time (25 ounces or 740 ml)\n' +
            'Pour a cup mid-brew, then keep coffee warm while you finish your drink\n' +
            'Removable filter basket and reusable filter (no need for paper filters)\n' +
            'Carafe is hand wash only (not dishwasher safe)\n' +
            'Backed by an Amazon Basics limited one-year warranty',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/710xZeXVKpL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81BwWF7hi%2BL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81Fiso0xg0L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81SSTgHQWIL._AC_SL1500_.jpg',
        price: 152.000,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product73 = new Product({
        title: ' DWËLLZA KITCHEN Airtight Food Storage Containers - Pantry Snacks ',
        categoryId: category04._id,
        description: '4 Space Saving Storage Containers: This kitchen organization set includes 4 air-tight containers that are all the same large size. Each one has a 2-liter capacity (which is a half-gallon/8.4 cups), measures 7.6” L x 5.2” W x 6.25” H, especially designed short and wide which enables you to easily fit into small shelves, refrigerator, freezer or cupboard.\n' +
            'Enjoy Your Meal With Fresh Food: Keep your foods fresh with our very easy to use airtight lid-lock mechanism. Our food storage containers create an airtight seal by simply pushing down the ring on the lid. Lift the ring and push up whenever you want to open the canisters! These containers are also dishwasher safe, the lids are the best to wash by hand using a damp cloth. (not recommended to remove the silicone seal)\n' +
            'Many Great Uses: These air-tight food-safe Keepers are ideal for storing dry foods such as flour, sugar, rice, grain, cereals, nuts, beans, chips, snacks, crackers, cookies, pasta and backing supplies. Especially designed to one new designed size Allowing You to organize your Kitchen neat and fresh like never before and frees up space in the pantry.\n' +
            'Gives An Elegant Look On The Counter: With beautiful black lids and a clear body, the bulk rectangular airtight container canister set spruces up your kitchen while allowing you to easily monitor the contents. It is also stackable to take full advantage of vertical space for your counter, cabinet and pantry organization.\n' +
            '100% Satisfaction Warranty: Our dried food storage four piece set is made using thick plastic that never alters taste, 100% BPA-free, are backed by a TOTAL satisfaction warranty. Reach out to us in case of any issues and we’ll give your full payment back and you can keep the Containers as well. Click ‘Add to Cart’ now to keep your pantry organized, your food fresh, and your kitchen elegant!',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/91yFiXZYsoL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71VkG1k%2B-pL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61H2-Npd0wL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/714%2B6P4Li8L._AC_SL1500_.jpg',
        price: 42.97,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product74 = new Product({
        title: '  DWËLLZA KITCHEN Airtight Food Storage Containers with Lids Airtight –',
        categoryId: category04._id,
        description: 'About this item\n' +
            '6 Same Size Storage Kitchen Containers: This Kitchen storage containers for organizing includes 6 small air tight containter that are all the same size. Each one has a 1-liter capacity (0.9 QT/ 4.2 cups/ 0.26 gallons), measures 5.2” L x 3.8” W x 6.25” H, great for kitchen organization and storage everything from flour, crackers, snacks, pasta, coffee, rice, sugar, to smaller servings of cereal.\n' +
            'Fresh Food: Keep your foods fresh with our kitchen essentials for new home easy to use canisters sets for the kitchen airtight lid-lock mechanism. No dealing with flimsy pumps. Our airtight containers for food storage create an airtight seal by simply pushing down the ring on the lid. Lift the ring and push up whenever you want to open the containers. The airtight seal is so secure you can store liquids without worrying about leaks!\n' +
            'Elegant Look: With beautiful black lids and a clear body, air tight sealed containers for food containers storage spruces up your kitchen accessories while allowing you to easily monitor the contents. The food storage containers for pantry organization is also stackable to take full advantage of vertical space for your air tight canister sets for kitchen counter & pantry storage and organization.\n' +
            'No Plastic Taste: No dealing with tainted flavors. Our kitchen pantry organizers and storage containers six piece set is made using thick and durable plastic that never alters taste, and is 100% BPA-free. the clear pantry containers for organizing pantry can be washed in dishwasher but not in boiling water, the lids are the best to wash by hand using a damp cloth. (not recommended to remove the silicone seal)\n' +
            '100% Satisfaction Guarantee: Dwellza Kitchen pantry storage containers with lids airtight are backed by a total satisfaction guarantee. Reach out to us in case of any issues with the kitchen pantry organizers and storage containers and we’ll do all we can to make you smile. Click ‘Add to Cart’ now to keep your pantry organized, your food fresh, and your kitchen looking oh so elegant!',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81m-5rkfaTL._AC_SL1189_.jpg,https://images-na.ssl-images-amazon.com/images/I/71HIc-sr3SL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/719SelNcUjL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71TJ%2BNjMRDL._AC_SL1500_.jpg',
        price: 37.98,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product75 = new Product({
        title: ' DWËLLZA KITCHEN Airtight Food Storage Containers with Lids – 6 Pieces ',
        categoryId: category04._id,
        description: '6 Small Food Storage Containers: This kitchen organization set includes 6 small air-tight containers that are all the same size. Each one has a 0.38 liter capacity (1.4 cups), measures 5.2” L x 3.8” W x 3.2” H, great for storing everything with a small amount from Chocolate, candy, nuts, dried fruit, coffee, tea, Splenda, to smaller servings of sugar.\n' +
            'Enjoy Your Meal With Fresh Food: Keep your foods fresh with our very easy to use airtight lid-lock mechanism. No dealing with flimsy pumps. Our food storage containers create an airtight seal by simply pushing down the ring on the lid. Lift the ring and push up whenever you want to open the containers.\n' +
            'Gives An Elegant Look On The Counter: With beautiful black lids and a clear body, the rectangular plastic airtight container canister set spruces up your kitchen while allowing you to easily monitor the contents. It is also stackable to take full advantage of vertical space for your cabinet and pantry organization.\n' +
            'No Plastic Taste: No dealing with tainted flavors. Our dried food storage six piece set is made using thick and durable plastic that never alters taste, is 100% BPA-free, and treats you to hassle-free maintenance. the container is dishwasher safe, the lids is the best to wash by hand using a damp cloth. (not recommended to remove the silicone seal)\n' +
            '100% Satisfaction Guarantee: We’ve got your back. Dwellza Kitchen dehydrated food storage canisters are backed by a total satisfaction guarantee. Reach out to us in case of any issues and we’ll do all we can to make you smile. Click ‘Add to Cart’ now to keep your pantry organized, your food fresh, and your kitchen looking oh so elegant!',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81Em-pa9C6L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71A1NKwMSVL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71kX7watluL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/815ormVnUtL._AC_SL1500_.jpg',
        price: 32.93,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product76 = new Product({
        title: 'DWËLLZA KITCHEN Airtight Food Storage Containers - Pantry Snacks  ',
        categoryId: category04._id,
        description: '4 Space Saving Storage Containers: This kitchen organization set includes 4 air-tight containers that are all the same large size. Each one has a 2-liter capacity (which is a half-gallon/8.4 cups), measures 7.6” L x 5.2” W x 6.25” H, especially designed short and wide which enables you to easily fit into small shelves, refrigerator, freezer or cupboard.\n' +
            'Enjoy Your Meal With Fresh Food: Keep your foods fresh with our very easy to use airtight lid-lock mechanism. Our food storage containers create an airtight seal by simply pushing down the ring on the lid. Lift the ring and push up whenever you want to open the canisters! These containers are also dishwasher safe, the lids are the best to wash by hand using a damp cloth. (not recommended to remove the silicone seal)\n' +
            'Many Great Uses: These air-tight food-safe Keepers are ideal for storing dry foods such as flour, sugar, rice, grain, cereals, nuts, beans, chips, snacks, crackers, cookies, pasta and backing supplies. Especially designed to one new designed size Allowing You to organize your Kitchen neat and fresh like never before and frees up space in the pantry.\n' +
            'Gives An Elegant Look On The Counter: With beautiful white lids and a clear body, the bulk rectangular airtight container canister set spruces up your kitchen while allowing you to easily monitor the contents. It is also stackable to take full advantage of vertical space for your counter, cabinet and pantry organization.\n' +
            '100% Satisfaction Warranty: Our dried food storage four piece set is made using thick plastic that never alters taste, 100% BPA-free, are backed by a TOTAL satisfaction warranty. Reach out to us in case of any issues and we’ll give your full payment back and you can keep the Containers as well. Click ‘Add to Cart’ now to keep your pantry organized, your food fresh, and your kitchen elegant!',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81Y2ccb85fL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71OjakhiqIL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61ZgBpWGBaL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61kGRTkcN7L._AC_SL1500_.jpg',
        price: 42.98,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product77 = new Product({
        title: ' DWËLLZA KITCHEN Food Storage Containers with Lids Airtight – 1.5 Qt (4 ',
        categoryId: category04._id,
        description: '4 Same Size Storage Containers: This Kitchen Organization Set Includes 4 Medium Air-Tight Containers That Are All the Same Size. Each One Has A 1.7-Liter Capacity (1.5 QT/ 7.2 Cups/ 0.44 Gallons), Measures 5.2” X 3.8” X 9.2”, Great for Storing Everything from Flour, Crackers, Snacks, Pasta, Coffee, Rice, Sugar, To Smaller Servings of Cereal.\n' +
            'Enjoy Your Meal With Fresh Food: Keep Your Foods Fresh with Our Very Easy to Use Airtight Lid-Lock Mechanism. No Dealing with Flimsy Pumps. Our Food Storage Containers Create an Airtight Seal by Simply Pushing Down the Ring on The Lid. Lift the Ring and Push Up Whenever You Want to Open the Containers. The Airtight Seal Is So Secure You Can Store Liquids Without Ever Worrying About Leaks!\n' +
            'Gives An Elegant Look On The Counter: With Beautiful White Lids and A Clear Body, The Bulk Rectangular Plastic Airtight Container Canister Set Spruces Up Your Kitchen While Allowing You to Easily Monitor the Contents. It Is Also Stackable to Take Full Advantage of Vertical Space for Your Cabinet and Pantry Organization.\n' +
            'No Plastic Taste: No Dealing with Tainted Flavors. Our Dried Food Storage Four Piece Set Is Made Using Thick and Durable Plastic That Never Alters Taste, is 100% BPA-Free, And Treats You to Hassle-Free Maintenance. The Container Can be Washed in Dishwasher but Not in Boiling Water, The Lids Is the Best to Wash by Hand Using a Damp Cloth. (Not Recommended to Remove the Silicone Seal)\n' +
            '100% Satisfaction Guarantee: We’ve Got Your Back. Dwellza Kitchen Dehydrated Food Storage Canisters Are Backed by A Total Satisfaction Guarantee. Reach Out to Us in Case of Any Issues and We’ll Do All We Can to Make You Smile. Click ‘Add to Cart’ Now to Keep Your Pantry Organized, Your Food Fresh, And Your Kitchen Looking Oh So Elegant!',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81E5aIcJJ8L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71QxC587YaL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71lM-oQJQSL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81cIApPM2zL._AC_SL1500_.jpg',
        price: 37.94,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product78 = new Product({
        title: '  DWËLLZA KITCHEN Food Storage Containers with Lids Airtight - 5 Piece',
        categoryId: category04._id,
        description: 'Variety Of Sizes - These Airtight Containers Come In A Variety Of Sizes, For All Your Kitchen & Pantry Dry-Storage Needs Includes 1 Large Container (7.2 Cups /1.7 Liters), 2 Medium Containers (4.2 Cups /1 Liter), 2 Small Containers (1.4 Cups /0.38 Liter), Great For Storing Flour, Sugar, Cereal, Crackers, Chips, Snacks, Pasta, Rice, Grain, Nuts, Beans, Coffee And Tea!\n' +
            'Easy To Identify Contents - Our Dried Food Storage Five Piece Set Is Made of Upgraded Clear Plastic Material, The Plastic of These Containers Is Very Crystal, So There Is No Need to Write Labels. You Can See What Is in The Pantry with Just A Glance. This Durable Plastic Will Never Alter Taste, is 100% BPA-Free, And Treats You to Hassle-Free Maintenance!\n' +
            'Enjoy Your Meal With Fresh Food: Keep Your Foods Fresh with Our Very Easy to Use Airtight Lid-Lock Mechanism. No Dealing with Flimsy Pumps. Our Food Storage Containers Create an Airtight Seal by Simply Pushing Down the Ring on The Lid. Lift the Ring and Push Up Whenever You Want to Open the Containers. The Airtight Seal Is So Secure You Can Store Liquids Without Ever Worrying About Leaks!\n' +
            'Space Saving Design - These Durable Rectangular Containers Have Been Especially Designed To Minimize Space, It Will Easily Fit Into Your Refrigerator, Freezer Or Cupboard, They Are Also STACKABLE Which Enables You To Take Full Advantage of Vertical Space for Your Cabinet And Pantry Organization, Every Top Fit Every Container!\n' +
            'Elegant Look And Long Lasting: With A High Strength Lid Lever That Will Not Crack and Will Not Break, Beautiful White Lids and A Clear Strong Body, The Bulk Rectangular Canister Set Will Spruce Up Your Kitchen for Years to Come. Click ‘Add to Cart’ Now to Keep Your Pantry Organized, Your Food Fresher Longer, And Your Kitchen Looking Oh So Elegant!',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81CzTBjdR7L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81G2m4vJhsL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/613SatIwvWL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61WxD-JVg6L._AC_SL1500_.jpg',
        price: 32.48,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product79 = new Product({
        title: ' DWËLLZA KITCHEN Airtight Food Storage Containers - Pantry Snacks ',
        categoryId: category04._id,
        description: '4 Space Saving Storage Containers: This kitchen organization set includes 4 air-tight containers that are all the same large size. Each one has a 2-liter capacity (which is a half-gallon/8.4 cups), measures 7.6” L x 5.2” W x 6.25” H, especially designed short and wide which enables you to easily fit into small shelves, refrigerator, freezer or cupboard.\n' +
            'Enjoy Your Meal With Fresh Food: Keep your foods fresh with our very easy to use airtight lid-lock mechanism. Our food storage containers create an airtight seal by simply pushing down the ring on the lid. Lift the ring and push up whenever you want to open the canisters! These containers are also dishwasher safe, the lids are the best to wash by hand using a damp cloth. (not recommended to remove the silicone seal)\n' +
            'Many Great Uses: These air-tight food-safe Keepers are ideal for storing dry foods such as flour, sugar, rice, grain, cereals, nuts, beans, chips, snacks, crackers, cookies, pasta and backing supplies. Especially designed to one new designed size Allowing You to organize your Kitchen neat and fresh like never before and frees up space in the pantry.\n' +
            'Gives An Elegant Look On The Counter: With beautiful black lids and a clear body, the bulk rectangular airtight container canister set spruces up your kitchen while allowing you to easily monitor the contents. It is also stackable to take full advantage of vertical space for your counter, cabinet and pantry organization.\n' +
            '100% Satisfaction Warranty: Our dried food storage four piece set is made using thick plastic that never alters taste, 100% BPA-free, are backed by a TOTAL satisfaction warranty. Reach out to us in case of any issues and we’ll give your full payment back and you can keep the Containers as well. Click ‘Add to Cart’ now to keep your pantry organized, your food fresh, and your kitchen elegant!',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/91yFiXZYsoL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71VkG1k%2B-pL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81JrsX3FvCL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61H2-Npd0wL._AC_SL1500_.jpg',
        price: 42.97,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product80 = new Product({
        title: ' Shazo Airtight 6 Pc Mini Container Set + 6 Spoons, Labels & Marker - Durable ',
        categoryId: category04._id,
        description: 'Perfect Modular Set - Every air-tight container has been designed to seal in freshness while making access and food prep a breeze. Store your favorite food safely into these efficient containers. With 6 same size containers you won\'t have to worry about jamming your edibles into smaller containers. Includes (6) Container - 3.25 inch (height) X 3.75 inch (Width) X 3.75 inch (Length) (4.2 cups / 0.5 liters)\n' +
            'Ultimate Scoop Cup - Included with your set, 6 Black spoons to match 6 containers.\n' +
            'Dry Food Liquid & Friendly - Not only are these good for dry foods, but our containers are great for holding liquids such as water, juice, soup, and more. Container corners allow for easy pouring. Don\'t worry about spills as the Shazo containers are designed to seal all liquids with airtight technology once the handle has been pushed down\n' +
            'Secure Sealing, Stackable Lid Design - Once the ring on the lid is pushed down, the silicone seal inside the lid will expand to seal the jar, creating complete airtightness. Pop the ring back up and it serves as a handle to lift the lid. Provides maximum freshness and prolonged food storage. With a stackable and modular design, these containers will save you a ton of space in your pantry and cabinets for better kitchen organization. Shatterproof.\n' +
            'Large Chalkboard Labels - Matte texture with a crisp clean uniform dye cut shape; The surface is not shiny or slippery; strong and durable for an appealing look; These are VINYL stickers - Unlike contact paper, these Premium Chalkboard Labels allows regular chalk or any liquid chalk maker to write on. The ink dries quickly and it doesn\'t flake off; Dishwasher and refrigerator safe; REUSABLE and self-adhesive. White Marker Included !',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/91H7c4uGdfL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71pYoE7i%2BvL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/9166oEpuxNL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/9162TAWTrmL._AC_SL1500_.jpg',
        price: 29.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product81 = new Product({
        title: ' DWËLLZA KITCHEN Airtight Food Storage Container Set - 4 Pieces 3.6L - ',
        categoryId: category04._id,
        description: 'Perfect For Pantry Organization: This container set includes 4 airtight containers (3.8 qt / 3.6 liters), which are perfect for storing flour, sugar and baking supplies it is also ideal to store oats, pasta, rice, coffee, tea, snacks, nuts and even a box of cereal, This set comes in a beautiful box which makes it an ideal gift for any friend or family.\n' +
            'Stackable & Space Saving Design: These Durable Bins have been especially designed to minimize space, they are stackable so these plastic storage containers will make more efficient use of every inch of your home kitchen freezer or cupboard. which enables you to get the kitchen organized and frees up space in the pantry.\n' +
            'Airtight Seal & Keeps Food Fresh: The side-locking lids with black silicone seal ensure that no air or water enters in, always keeping your favorite snacks super fresh and dry. These clear Containers are also easy to clean, dishwasher safe, extremely user friendly and ready to use.\n' +
            '8 Reusable Labels: These labels will help you never confuse flour with powdered sugar or baking powder with baking soda. They are reusable, you can switch contents whenever you need, comes also with a marker so it is ready to get it in use.\n' +
            'High Quality: Made of high-quality food grade plastic, BPA free, contain no harmful substances, Its durable enough for long-lasting use, easy to storage when its not in use placing one in to the other.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81kQv%2Bh-VnL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81noJtgbHnL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/7176ZW31MSL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71DOiMAPKtL._AC_SL1500_.jpg',
        price: 26.97,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product82 = new Product({
        title: ' DWËLLZA KITCHEN Tall Airtight Food Storage Containers with Lids - for ',
        categoryId: category04._id,
        description: 'Perfect For Pantry Organization: This container set includes 4 airtight containers (2.95 qt / 2.8 liters), which are perfect for storing Spaghetti, Noodles & Pasta it can also be stored baking supplies, oats, pasta, rice, flour, sugar, coffee, tea, snacks, nuts and even a small box of cereal, This set comes in a beautiful box which makes it an ideal gift for any friend or family.\n' +
            'Stackable & Space Saving Design: These Durable Bins have been especially designed to minimize space, they are stackable so these plastic storage containers will make more efficient use of every inch of your home kitchen freezer or cupboard. which enables you to get the kitchen organized and frees up space in the pantry.\n' +
            'Airtight Seal & Keeps Food Fresh: The side-locking lids with black silicone seal ensure that no air or water enters in, always keeping your favorite snacks super fresh and dry. These clear Containers are also easy to clean, dishwasher safe, extremely user friendly and ready to use.\n' +
            '8 Reusable Labels: These labels will help you never confuse flour with powdered sugar or baking powder with baking soda. They are reusable, you can switch contents whenever you need, comes also with a marker so it is ready to get it in use.\n' +
            'High Quality: Made of high-quality food grade plastic, BPA free, contain no harmful substances, Its durable enough for long-lasting use, easy to storage when its not in use placing one in to the other.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/811W6tk61EL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/714MRQZvaXL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/7176ZW31MSL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61Z9xzPObZL._AC_SL1500_.jpg',
        price: 26.97,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product83 = new Product({
        title: 'Home Hero 17 Pieces Kitchen Knives Set, 13 Stainless Steel Knives + Acrylic Stand, Scissors, Peeler and Knife Sharpener',
        categoryId: category05._id,
        description: 'All-in-one complete set – a specialized set of kitchen knives for all your chopping needs. Includes 13 professional knives, kitchen scissors, bonus peeler, a premium quality 2-stage knife sharpener and a modern knife stand. A true cutlery organizer!\n' +
            'Professional quality at its best – the best materials to update your cooking! this stainless-steel knife set gives you superior blades coated with nonstick paint plus ergonomic pp handles. Sharp, sturdy & practical. No rust, stains or pitting here!\n' +
            'A multi-purpose kitchen décor must – a perfect mix of design & practicality, featuring knives for all purposes: carving knife, utility knife, cheese knife, pizza knife, chef knife, bread knife, paring knife, steak knives. Excellent precision cutting!\n' +
            'One of a kind stainless steel knife set - Home Hero brings together a unique mix of quality sharpness, great value, durability & professional crafted accuracy. Now anyone, newbie cook or master chef can enjoy cooking much faster, easier, cleaner.\n' +
            'Customer service - Please, if you have any questions or issues regarding the Home Hero knife set please do not hesitate to send the seller a message through Amazon we will respond within 24 hours.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/91DU-QLniPL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/910teZxDKWL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81GcMQx6FZL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81AYqrUPTRL._AC_SL1500_.jpg',
        price:49.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product84 = new Product({
        title: 'HENCKELS Statement Knife Block Set, 15-pc, Light Brown',
        categoryId: category05._id,
        description: 'Set includes 3 inches paring knife 5 inches serrated utility 7 inches santoku knife hollow edge 8 inches Chef\'s Knife 8 inches bread knife 6 4.5 inches Steak Knife Sharpening Steel Kitchen Shears and Hardwood Block\n' +
            'Fabricated from high quality stainless steel. Handle Material: Plastic\n' +
            'Single piece Precision stamped blade construction provides durability\n' +
            'Professional satin finished blade boasts Precision cutting and is finely honed for long lasting sharpness\n' +
            'Lightweight full tang design yields maximum maneuverability\n' +
            'Traditional triple rivet handle with stainless steel endcap offers balance\n' +
            'Dishwasher safe\n' +
            'Made in China',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61vTlzBDbkL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/81JKi-U6udL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/612B0JDFlbL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/41AIRTYv1cL._AC_.jpg',
        price: 64.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product85 = new Product({
        title: 'Amazon Basics 14-Piece Kitchen Knife Set with High-Carbon Stainless-Steel Blades and Pine Wood Block',
        categoryId: category05._id,
        description: '14-piece knife set includes: 1 Pine wood block, 1 pair of scissors, 11 knife( 8-inch chef\'s knife, 8-inch slicing knife, 8-inch bread knife, 5.5-inch utility knife, and 3.5-inch peeling knife)\n' +
            'Also includes (6) 4.5-inch steak knives, kitchen shears, sharpener, and wood block\n' +
            'Superior high-carbon stainless-steel blades for precision results\n' +
            'Triple-rivet POM handles ensure a comfortable, secure grip',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61Mo9G7%2BEkL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81H4Igu7ngL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81I1LJaBxeL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/51ygZbkyvxL._AC_SL1050_.jpg',
        price: 23.21,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product86 = new Product({
        title: 'Amazon Basics Premium 8-Piece Kitchen Steak Knife Set, Black',
        categoryId: category05._id,
        description: '8 high-quality steak knives with triple-riveted handles\n' +
            'Micro-serrated edges never need sharpening\n' +
            'Forged from single piece of stain-resistant steel\n' +
            'Full tang for pleasant weight and balance; full bolster\n' +
            'Hand wash only',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61HQ0VF1qnL._AC_SL1482_.jpg,https://images-na.ssl-images-amazon.com/images/I/61WJO1RLNzL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/51gOgoI0UNL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/316RQJJ73WL._AC_.jpg',
        price: 21.72,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product87 = new Product({
        title: 'Chef Knife Set Knives Kitchen Set - Stainless Steel Kitchen Knives Set Kitchen Knife Set with Stand - Plus Professional Knife Sharpener - 7 Piece Stainless...',
        categoryId: category05._id,
        description: 'Professional chef knife set – 5 different stainless steel knives, sharpener, safety finger guard and cutlery stand\n' +
            'Just the right knife for any task: 1x chef knife, 1x carving knife, 1x bread knife, 1x utility knife, 1x paring knife\n' +
            'High-quality product – all knives are stainless steel coupled and laser finished for a smooth clear grain finish of the blade\n' +
            'Includes a knife sharpener with two sharpening modes (fine and coarse sharpening) and elegant acrylic stand\n' +
            'Most comprehensive knives set on the market – suited for amateurs and professionals alike',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71P0lGwQ%2BSL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91mHhHh6KRL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81MhIRlD6WL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91%2BTVVvbw7L._AC_SL1500_.jpg',
        price: 29.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product88 = new Product({
        title: 'Cuisinart C77SS-15PK 15-Piece Stainless Steel Hollow Handle Block Set',
        categoryId: category05._id,
        description: 'Superior high carbon stainless steel blades for precision and accuracy\n' +
            'Strong, durable bolster for perfect stability and control. Lightweight knives that slice, carve, and chop\n' +
            'Ergonomically designed stainless steel handle provides comfort\n' +
            'Easy to clean and precision-tapered ground blades that narrow gradually to an extremely sharp, fine edge\n' +
            'Lifetime Warranty.Dishwasher Safe',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71OoifMpDUL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/51ttOMxuN9L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81v7AychDDL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/51PTQ8Rxw%2BL._AC_SL1500_.jpg',
        price: 59.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product89 = new Product({
        title: 'Home Hero Steak Knives Set of 8 - Steak Knife Set - Serrated Steak Knives Dishwasher Safe Steak Knives - Steak Knifes Set of 8 - Stainless Steak Knives Serrated - Dinner Knives',
        categoryId: category05._id,
        description: 'Frustrated with steak knives that hack up your steaks instead of smoothly slicing through? Home Hero’s 8-piece steak knife set features sharp, fully serrated stainless steel blades that cut effortlessly through meat. Covered in a durable nonstick coating, our blades go the extra mile and even prevent food from sticking to the knives, without altering the taste of your meal.\n' +
            'While other kitchen knives often get rust spots after just one wash, our steak cutlery set is made of rust-resistant stainless steel to keep its blades spotless and performing at their best. Top-rack dishwasher safe for quick, easy clean-up. no rust, stains, or pitting!\n' +
            'Unlike cheaply made knife sets with flimsy handles that break and bend, home hero’s kitchen knife set features extra sturdy, ergonomically designed polypropylene handles with a protective tpr coating for firm, easy, comfortable cutting. the perfect bridal shower gifts, stocking stuffers, and holiday gifts for women & men!\n' +
            'A steak-cutting game changer. With our premium steak knife set, treat yourself and your guests to the ease of cutting through steak like butter. If for any reason you aren’t satisfied with your serrated knife set, please contact us directly for a full refund, no questions asked. We offer a 100% money-back guarantee on our products, and our goal is 100% satisfied customers.\n' +
            'Home Hero was created because we wanted something better. We bring together a unique mix of quality materials, durability, great value & professionally crafted accuracy to create the feeling of being a pampered chef without the price tag. Whether you’re a master cook or a newbie, our steak knives set of 8 will help you cook faster, easier & cleaner – and have a great time doing it! Our elegant, high-quality kitchen supplies are must-haves for the well-equipped cook.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/91pgkixtwVL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91YM%2BoDY8uL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91Rp7wcA9IL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81jJUkGricL._AC_SL1500_.jpg',
        price: 19.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product90 = new Product({
        title: 'XYJ Full Tang Butcher Knife Handmade Forged Kitchen Chef Knife High Carbon Clad Steel Butcher Cleaver with Leather Knife Sheath',
        categoryId: category05._id,
        description: '【High Carbon Clad Steel Chinese Knife】 This butcher chef knife is made of manganese steel, the handle and the blade are integrated without soldering, which is firm and durable to eliminate broken handle\n' +
            '【Handmade Forged Technology】 The cutlery knives are sharpened manually by workers with more than 30 years of experience by using natural knife grinders mined from Mount Emei. Compared with kitchen knives made with mechanical ways, the service life of such knives is longer.\n' +
            '【Full Tang Wooden Handle】 Ergonomic Full Tang handle can prevent the blade comfortable to grip and non-slip effect. The kitchen cleaver butcher knife is a great beauty, impeccable performance this strong design with a good strength, durability.\n' +
            '【Convenient To Carry Out】 The butcher knife kitchen comes with an unique leather knife sheath to protect the knife blade, beautiful and more safety, and can be attached to the belt for easy carrying when using outdoor.(There may have a smell of the leather sheath, please hang in a ventilated place for some days when you receive it.)\n' +
            '【How To Maintain】 Due to the forged knife has higher carbon content, please pay attention to clean the knife, and acidic or alkaline substances cannot stay on the blade for a long period. Such knife shall be wiped dry after cleaning. Some cooking oil may be applied on it if it is not used for a long time. And it shall be placed at a dry place for storage.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61qF-U9Mo3L._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61K3gi-%2BNcL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61IEsRFXd5L._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61n6fIamWjL._AC_SL1000_.jpg',
        price: 29.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product91 = new Product({
        title: 'Cuisinart C55-12PCER1 Advantage Color Collection 12-Piece Knife Set with Blade Guards, Multicolored',
        categoryId: category05._id,
        description: 'High-Quality Stainless Steel Blades\n' +
            'Ceramic Coating for Easy Non-Stick Slicing\n' +
            'Color Coding Helps You to Reduce the Risk of Cross-Contamination During Food Preparation\n' +
            '8" Chef Knife is a multipurpose knife for mincing and slicing vegetables. The 7" Santoku Knife is perfect multipurpose knife for dicing and mincing\n' +
            'Lifetime Warranty',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/31FFRU1aYwL._AC_.jpg,https://images-na.ssl-images-amazon.com/images/I/51Hd%2B7IMo1L._AC_.jpg,https://images-na.ssl-images-amazon.com/images/I/31FFRU1aYwL._AC_.jpg',
        price: 34.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product92 = new Product({
        title: 'Sabatier Forged Triple Rivet Knife Block Set, 15-Piece, White',
        categoryId: category05._id,
        description: 'STYLISH, MODERN & FUNCTIONAL: Give your kitchen the update it needs with this beautifully designed Acacia block Set with Forged White Handles. This set includes your most essential cutlery pieces for chopping, slicing, mincing, and more\n' +
            'RAZOR-SHARP BLADE EDGES: Each Blade is expertly hand crafted for maximum sharpness and edge retention to ensure precise slicing every time\n' +
            'SUPERIOR QUALITY: Each forged knife is made from high carbon stainless steel, making the blade stain and corrosion resistant\n' +
            'ERGONOMIC CONTROL: Triple Riveted designed handles offer a sure grip and absolute stability that ensures comfort and maneuverability\n' +
            '15 PIECE SET INCLUDES: 8 inch chef knife, 8 inch slicer, 5 inch Santoku knife, 5. 5 inch serrated Utility knife, 4.5 inch utility knife, 3.5 inch Paring knife, (6) 4.5 inch steak knives, sharpening steel, All purpose shears, Acacia block\n' +
            'LIFETIME LIMITED WARRANTY: We stand behind our products. For best results, hand wash with warm water and a mild detergent; Rinse and dry immediately. These knives are not suitable for the dishwasher',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71X44t2mDQL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61lOAQaYGyL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91pMw%2BpaMyL._AC_SL1500_.jpghttps://images-na.ssl-images-amazon.com/images/I/6149BCUyH4L._AC_SL1500_.jpg',
        price: 89.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product93 = new Product({
        title: 'Blackstone 1542 Griddle Accessory Tool Kit, Multicolor',
        categoryId: category05._id,
        description: 'PROFESSIONAL QUALITY - Each tool is made to a high standard; The perfect heavy duty tool kit for any novice or professional alike. Made with stainless steel and quality composite, this grill kit is built to last. Plus, all tools are DISHWASHER SAFE for quick and easy BBQ clean up\n' +
            'FIVE TOOLS - 2 oversized professional grade restaurant style stainless steel spatulas, great for flipping burgers, pancakes, veggies and all other grill or griddle applications. 1 stainless steel chopper/scraper to dice food and scrape griddles clean. 2 premium leak-free fine tip bottles for condiments and liquids like oil or water\n' +
            'FREE GIFT - Enjoy an exclusive bonus cookbook titled "The Art of Griddle Cooking" with several mouthwatering griddle recipes including Lemon Blueberry Pancakes, Blue Cheese Sliders, Griddle Pizza and more!\n' +
            'A MUST HAVE - Looking for a great gift idea for that special someone? This Blackstone griddle/grill tool kit is the perfect addition to any backyard kitchen and will compliment your Blackstone griddle as well as your Weber, Charbroil, Coleman or any other barbeque or grill you and your loved ones enjoy\n' +
            'Cooking for TASTE! The Blackstone griddle tool kit is the perfect companion to cooking amazing food that will please everyone at your BBQ, weekend party or your everyday meals',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81B%2B5oPkQ7L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61sGZDZQGyL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/71vpJDQT6QL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/71u1LNTKtgL._AC_SL1500_.jpg',
        price: 19.97,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product94 = new Product({
        title: 'Silicone Cooking Utensil Set, Fungun Non-stick Kitchen Utensil 24 Pcs Cooking Utensils Set, Heat Resistant Cookware, Silicone Kitchen Tools Gift with Stainless Steel Handle (Green-24pcs)',
        categoryId: category05._id,
        description: '✅24 PCS PROFESSIONAL SILICONE KITCHEN UTENSILS SET: Fungun Kitchen Utensils Set includes 5pcs Measuring Spoons and 5pcs Measuring Cups, Slotted Spatula ,Slotted Spoon,Flexible Spatula,Slotted Turner, Solid Turner, Pasta Server,Solid Spoon, Kitchen Tongs, Draining Spoon, Whisk ,Deep Soup Ladle,Spatulas and Brush. 24 Pcs different Utensils making your cooking much intersting and easier\n' +
            '✅STAINLESS STEEL HANDLE & FOOOD GADE SILICONE: Made of food-grade silicone, safe for any type of food. firm silicone heads, sturdy stainless control and fantastic grip, premium quality heat-resilient silicone heads, designed to protect the non-stick surface of your precious pans. This will keep your cookware safe from scratching, BPA free. No rust. No breaking or bending. No melting. not produce any hazardous fumes.Anti scalding silicone handle sleeve protect your hand from burning.\n' +
            '✅HEAT-RESISTANT & STAIN-RESISTANT & AVOID THE MELT -- The Silicone Cooking Utensils can withstand high temperatures up to 446°F/230°C. All-around silicone added to the softness, no longer worry food will stick your cookware. Silicone head protect your pans, keep the cookware surface not scratched or dented. Extend the life of all your kitchen pans\n' +
            '✅EASY TO CLEAN - With stainless steel core never warp. One-piece molding without any gaps to capture food. Make cleaning easier. comparing to the cheap plastic kitchenware, it doesn\'t retain odors or colors when you use it for stirring deep-colored food.It’s a great gift for anyone who loves to cook, a nice gift set for your friend’s/family’s house warming party/wedding party\n' +
            '✅A GREAT COMPANION IN THE KITCHEN: Prepare for many sessions of exciting cooking! Grill, whip cream, stir sauces, mix ingredients, flip eggs, burgers or pancakes, pan fry or stir fry as much as you wish. No excuses! an extra utensil holder that allow you to store all your kitchen gadget utensil set conveniently, Solid holder base ensures utensils fit properly, circular opening at the bottom ensures that the silicone cooking utensils in the holder is always kept in a dry environment',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/612lG4Ai6xL._AC_SL1200_.jpg,https://images-na.ssl-images-amazon.com/images/I/711a0PZuY-L._AC_SL1200_.jpg,https://images-na.ssl-images-amazon.com/images/I/61bV0wXwYvL._AC_SL1200_.jpg,https://images-na.ssl-images-amazon.com/images/I/61cDXvLCEhL._AC_SL1200_.jpg',
        price: 25.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product95 = new Product({
        title: 'Neet Wooden Spoons For Cooking 6 Piece Organic Bamboo Utensil Set With Holder Wood Kitchen Utensils Spatula Spoon For High Heat Stirring In Nonstick Pots & Pans Quality Gift & Everyday Use',
        categoryId: category05._id,
        description: 'COMPLETE COOKING & SERVING SET- Go from cooking to serving, experience the complete functionality of our premium wooden spoons. Practical, reliable organic bamboo utensil set provides the helpful tool for every task, whether you’re flipping ingredients, tasting sauces, or serving a finished meal, so you’ll always have the right tool while you’re working in the kitchen, no matter what you’re making.\n' +
            'PREMIUM ORGANIC MATERIAL- Unlike the soft porus wooden spoons found on the market today, our assortment of utensils are crafted from 100% organic nonstick bamboo, which are stronger and more durable than natural woods. Food debris is super easy to rub off, and its odor and stain-free properties ensure they won’t retain funky smells or blemishes from cooking certain meals, so you can always prep, cook, and serve fresh using our wood spoons for cooking.\n' +
            'PRACTICAL DESIGN AND FUNCTIONALITY- Designed to perform an array of kitchen tasks, our wooden kitchen utensil set features contoured heads so you can perform precise functions. Smooth, comfortable handles make using them easy. Included slotted, solid, and turner wooden spatula makes flipping omelettes and mixing ingredients easy, while a solid and slotted wooden spoon make preparing sauces and tasting soups simple. Spoon fork provides versatility for sipping, eating, or serving.\n' +
            'EASY CARE CONVENIENCE- Provided its natural bamboo construction, our superior wooden kitchen utensils set can be simply washed with warm soap and water and air dried. Nonstick, durable bamboo resists moisture, so you’ll never have to worry about mold accumulating on your tools, and you can enjoy years of long-lasting use, which makes our wooden cooking utensils set a great gift for mom, dad or any cook.\n' +
            'OUR LIFETIME GUARANTEE: We are confident you will love our cooking utensils. We stand behind our product and have strategically tested and designed our product to last for years on end! If you are not 100% you may return them for 100% money back guarantee, with no questions asked, 100% RISK FREE PURCHASE!',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61kAm6sx5ML._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81i-iY%2BMJrL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81UWbp2SDoL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/716OmCMbVFL._AC_SL1262_.jpg',
        price: 27.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product96 = new Product({
        title: 'Amazon Brand Kitchen Utensil Set, 9 Piece Stainless Steel Cooking Utensil Set, Kitchen Gadgets Cookware Set, Best Gift - Kitchen Tool Set (Rose Gold Handle)',
        categoryId: category05._id,
        description: '✅9 - Stainless Steel Kitchen Utensil Set,Includes everything you need to cook that perfect dish;\n' +
            '✅MATERIAL: Food grade material. The most durable kitchen utensils set in the market, Comfortable handle handles designed, using top-grade 304 stainless steel, Even with daily use, they’re designed to not bend like plastic utensils, not break like wooden kitchen tools, and not rust like other metallic utensils.\n' +
            '✅CLEANING: Your Cooking Utensils set is easy to maintain and dishwasher safe. You can put it in the dishwasher,Save your cleaning time.\n' +
            '✅USE: Best housewarming gift for any occasion like birthday day, wedding party, Mother\'s Day, Christmas or Thanksgiving. Order Nonstick Kitchen Utensils Set – That will be the most useful present!\n' +
            '✅OUR PROMISE: MONEY BACK GUARANTEE – If you’re not satisfied with the quality of our stainless-steel set, please contact us and you will receive your money back.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61cucSZwgOL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61GacPbyEqL._AC_SL1200_.jpg,https://images-na.ssl-images-amazon.com/images/I/71jUsv06eJL._AC_SL1200_.jpg,https://images-na.ssl-images-amazon.com/images/I/815LuwwZLrL._AC_SL1200_.jpg',
        price: 23.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product97 = new Product({
        title: 'AmazonCommercial 4-Piece Heavy Duty Stainless Steel BBQ Grilling Tools Set',
        categoryId: category05._id,
        description: '100% stainless steel: solid 18/0 stainless steel (both the function end and the handle) for rugged strength and long-lasting performance\n' +
            'Ergonomic: tool handles feature an ergonomic grip for ultimate comfort and control\n' +
            'Versatile: the grilling tools offer year-round grilling convenience, whether in the kitchen or out by the grill\n' +
            'Includes: grill fork, barbecue spatula, BBQ tongs, and basting brush\n' +
            'Easy care: dishwasher-safe for quick cleanup',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81Nx9IRFDOL._SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81YcllLdNlL._SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/717qRrzW-oL._SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71r3TyM4yBL._SL1500_.jpg',
        price: 39.50,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product98 = new Product({
        title: 'Kitchen Utensils Set, 24 Silicone Cooking Utensils, Non-Stick and Heat Resistant Kitchen Tools, Useful Cooking Gadgets (Red)',
        categoryId: category05._id,
        description: '24 Piece Cooking Utensil Set- Includes, can opener, turner, slotted turner, spoon, slotted spoon, ladel, whisk, spatula, grater, tongs, measuring cups, measuring sppons, potato masher, ice cream scoop, wine opener, apple corer.\n' +
            'Silicone Cooking Utensils Set- Made with Food Grade Silicone our Kitchen utensils are perfectly safe to use in your kitchen! Our cooking utensils are also dishwasher safe and wont retain odors!\n' +
            'Premium Heat Resistant Materials- The Silicone Cooking Utensils can withstand high heat! Use it while boiling, frying, grilling or searing and the silicone will not melt or warp.\n' +
            'Non-Scratch Silicone Coated Tips- Our utensils will never scratch or nick your pots! By using our silicone coated kitchen utensils you extend the life of your pots and pans!\n' +
            'Great Gift Idea- The Kaluns cooking utensil come in a classy box ready to gift! Great for wedding gift, mothers day, holiday and anyone else on your gift list.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71Qugu32V8L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91zqWCRodZL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81I7%2B0m8lML._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81jccem0tML._AC_SL1500_.jpg',
        price: 36.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product99 = new Product({
        title: 'Cuisinart CTG-00-CCR7 Curve Crock with Tools, Set of 7',
        categoryId: category05._id,
        description: 'Stainless Steel\n' +
            'Imported\n' +
            'Crock keeps tools in easy reach\n' +
            'Soft-grip nonslip ergonomic handles\n' +
            'Tools are designed to lie flat on the countertop and will not roll\n' +
            'Nylon heads on tools are heat resistant up to 400-Degree Fahrenheit and are safe for nonstick cookware\n' +
            'Dishwasher safe',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61rsH7imHTL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61pZzmp7SLL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71TTQbT4OAL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/51sb1pqzcIL._AC_SL1500_.jpg',
        price: 29.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product100 = new Product({
        title: 'Home Hero Silicone Cooking Utensils Kitchen Utensil Set - 8 Natural Acacia Wooden Silicone Kitchen Utensils Set - Silicone Utensil Set Spatula Set - Silicone Utensils Cooking Utensil Set',
        categoryId: category05._id,
        description: 'Avoid cheaper silicone & wooden kitchen utensils companies that cut corners to squeeze more profit at your expense. Flimsy silicone that can’t flip your pancakes, wobbly kitchen spatula heads that detach from their handles after a few uses, and odd chemical smells leeching from your cooking tools are all signs of a low-quality kitchen gadgets set. OUR HOME HERO KITCHEN UTENSIL SETS ARE CRAFTED WITH the highest quality materials\n' +
            'Preserve your cookware for years by protecting it from scratches made by non silicone cooking tools. Your pots, pans and pocketbook will thank you! And how many times have you set your cooking tool down to come back to an ugly deformed spatula turner and a ruined melty plastic-infused dinner? This high quality non-stick silicone and wooden kitchen tools set means no more melting plastic kitchen accessories!\n' +
            'Why acacia? This is durable hardwood – important for the kitchen! – and can last up to 40 years with the proper care. The wooden handles have great heat insulation, protecting your hands from scalding. The silicone heads can withstand temperatures ranging from -22°F/-30°C to 392°F/200°C.\n' +
            'Fall in love with cooking all over again with Home Hero’s premium kitchen utensils set. While there are many choices that look good in photos, THE TRUE TEST IS BRINGING THOSE KITCHEN COOKING UTENSILS INTO YOUR KITCHEN. Their easy-to-grip, comfortable handles and balanced weight make cooking a joy and their large hanging holes help keep your cookware set orderly and organized.\n' +
            'Customer service - Please, if you have any questions or issues regarding the Home Hero kitchen utensils set please do not hesitate to send the seller a message through Amazon we will respond within 24 hours.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/91AfEc0H%2BmL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/A1YBw7ZglUL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91Niv89HwOL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/913QsRufgUL._AC_SL1500_.jpg',
        price: 22.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product101 = new Product({
        title: 'Overmont Griddle Accessories Tool Kit 6 Piece Professional Grill Spatula & Scraper Set Flipper Stainless Steel for Flat Top Grill Hibachi BBQ Camping Cooking Dishwasher Safe',
        categoryId: category05._id,
        description: 'PROFFESSIONAL- Beveled front edge easily slide beneath food, Long flat surface flipping and holding more food, Smooth blade and sturdy handle stay well-balanced, Angled middle part keep you away from burning your hands\n' +
            'HEAVY DUTY- Griddle spatula turners are made by premium stainless steel to ensure rust free and durability, heavy gauge thick blade resists deformation, commercial chef grade griddle set makes you feel like a grilling pro\n' +
            'EASY TO CLEAN- Heat proof ABS plastic handles are solid and sturdy, will never come to loose, crack, color faded or even breed mould like those wooden handles, Ergonomic design handle for comfortable grip, Dishwasher safe\n' +
            'MULTIPLE USE- Grill spatula tools can be widely used for eggs, vegetables, filet, fish and more, Perfect for BBQ camping, restaurant, kitchen, outdoor, cast iron skillet, tailgating, backyard party, As well as a great gift for dad or husband\n' +
            'PACKAGE INCLUDES- 2 different sizes Hamburger Turners, 1 x Solid Long Griddle Spatula, 1 x Long Perforated Spatula, 1 x Slant Edge Grill Scraper, 1 x Griddle Scraper Chopper',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61FNDoVS3TL._AC_SL1340_.jpg,https://images-na.ssl-images-amazon.com/images/I/61k3shtGH1L._AC_SL1300_.jpg,https://images-na.ssl-images-amazon.com/images/I/71ETheFst3L._AC_SL1300_.jpg,https://images-na.ssl-images-amazon.com/images/I/81dkAouC5%2BL._AC_SL1300_.jpg',
        price: 19.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product102 = new Product({
        title: 'Wooden Cooking Utensils,Acacia Wooden Spurtle Kitchen Sets,Spurtles Kitchen Tools Slotted Spurtle Spatula Sets for Stirring Mixing Serving (10)',
        categoryId: category05._id,
        description: 'MATERIAL : Premium high-quality acacia wood.\n' +
            '10 Pcs in one utensils set: include wooden tongs ,wooden spaghetti server,large wooden spurtle,wood slotted spurtle,mid wood spurtle,slim spurtle ,min spurtle,wooden ladle,wooden serving spoon,wood oil brush.\n' +
            'You\'ll find these incredible wood utensils are fantastic for cooking, baking and serving and you\'ll find yourself reaching for them even more often than your favorite spoons and spatulas. There\'s a reason why the spurtle is the trendiest kitchen utensil on the market.\n' +
            'SCRATCH FREE COOKWARE: You can always bake your favorite cookies, make special soups, or cook other dishes without scratching high quality pots or other expensive cookware. These personalized wood kitchen tools are designed for longevity and to avoid damage on your valuable cookware.\n' +
            'EASY TO TAKE CARE Wash the wooden kitchen utensils with warm water and soft sponge to preserve their qualities. We recommend you dry them by hanging. If there is something sticking to our wooden cooking spoons, just put them in the water for 5 minutes before washing. Please store them in dry place when not used. When teak products are exposed to oil and heat, their color normally becomes darker, but they are still perfectly useable. Oil them occasionally when feel dry to prevent crack.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81CMWUTfx1L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61dZOLjzMFL._AC_SL1100_.jpg,https://images-na.ssl-images-amazon.com/images/I/818QKMY8CbL._AC_SL1200_.jpg,https://images-na.ssl-images-amazon.com/images/I/71edbDDNcPL._AC_SL1317_.jpg',
        price: 45.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product103 = new Product({
        title: 'Downy Infusions Liquid Fabric Conditioner (Fabric Softener), Calm, Lavender & Vanilla Bean, 56 Oz Bottles, 166 Loads Total (Pack of 2)',
        categoryId: category06._id,
        description: 'Downy Infusions calm scent Liquid fabric enhancer transforms your laundry with the soothing scent of lavender and vanilla bean\n' +
            'Breathe Deep and let this relaxing, smooth scent of calm envelop you\n' +
            'Scent boosting fabric softener freshens and softens for comfy, great-smelling clothes\n' +
            'Safe for all washing machines and a great COMPANION to your favorite detergent; just add a capful every load before adding your clothes\n' +
            'For even more tranquil scent, Use Downy Infusions calm In-Wash Scent Booster Beads and fabric softener dryer sheets',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71pTvh7Lp0L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71Xvsi66DwL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71dRLTtnpxL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61L%2Blem-8iL._AC_SL1000_.jpg',
        price: 13.88,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product104 = new Product({
        title: 'all Mighty Pacs Laundry Detergent, Free Clear for Sensitive Skin, 67 Count, 2 Tubs, 134 Total Loads',
        categoryId: category06._id,
        description: 'Safe for the whole family, these hypoallergenic single-use mighty pacs are gentle on skin.\n' +
            '100% free of perfumes and dyes and unscented, all free clear cleans your clothes without leaving irritating residue.\n' +
            'Use with all free clear fabric softener and dryer sheets for clean and soft clothes with static cling reduction in the dryer.\n' +
            'These mighty pacs are safe to use in any washing machine.\n' +
            'This pack contains two tubs of 67 mighty pacs each for a total of 134 loads',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81SsRyL-uqL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81GINsopDaL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81Gg4UL9oCL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81s9YbKoypL._AC_SL1500_.jpg',
        price: 15.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product105 = new Product({
        title: 'Tide Laundry Detergent Liquid Eco-Box, Concentrated, Original Scent, 105 oz, HE Compatible, 96 Loads',
        categoryId: category06._id,
        description: 'More concentrated laundry detergent for 30% more cleaning power per drop *vs 150 oz bottle\n' +
            'Shipping-safe packaging to prevent laundry detergent liquid leaks on the way to your home\n' +
            'No-drip tap and stand to raise the box and allow for clean, easy detergent dispensing\n' +
            'Ramp inside the box to help you use every last drop of detergent\n' +
            'Tide Eco-box is created with 60% less plastic and 30% less water\n' +
            'Tide Eco-box is 100% recyclable through a partnership with Terra-Cycle',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61K5cpO93tL._AC_SL1001_.jpg,https://images-na.ssl-images-amazon.com/images/I/71nI%2BrC-4UL._AC_SL1001_.jpg,https://images-na.ssl-images-amazon.com/images/I/91JykC4tafL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71reua3MbIL._AC_SL1500_.jpg',
        price: 19.71,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product106 = new Product({
        title: 'Tide PODS Laundry Detergent Liquid Pacs, Original Scent, HE Compatible, 96 Count (Packaging May Vary)',
        categoryId: category06._id,
        description: 'Tide PODS consist of up to 90% active ingredients, so you can be sure that you\'re paying for clean not for water\n' +
            '10x the cleaning power (Stain Removal of 1 dose vs. 10X doses of the leading liquid bargain brand)\n' +
            'Reveal our brightest clean yet for brighter brights and whiter whites\n' +
            '3 in 1 technology: detergent, stain remover, color protector. Dissolves in both hot & cold water. Keep out of reach of children.\n' +
            'Best Value on Bulk Tide Pods – Don’t Miss this Great Deal!',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81GPpC1rplL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91dr0BKqmyL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81cMD5qPeIL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81nKD9b5G7L._AC_SL1500_.jpg',
        price: 20.10,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product107 = new Product({
        title: 'Amazon Brand - Solimo Laundry Detergent Pacs, Free & Clear, Hypoallergenic, Free of Perfumes Clear of Dyes, 120 Count',
        categoryId: category06._id,
        description: 'Free of perfumes & clear of dyes\n' +
            'Hypoallergenic\n' +
            'Premeasured dose; use 1 pac for 1 medium load\n' +
            'Dissolves in any water temperature\n' +
            'Safe in both standard and high efficiency washing machines\n' +
            'One canister of 120 laundry detergent pacs\n' +
            'An Amazon brand',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81LwxkTuinL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81rVHPMJZEL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/515YQO77nQL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/5173B%2B-B1RL._AC_SL1000_.jpg',
        price: 25.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product108 = new Product({
        title: 'Downy Unstopables In-Wash Scent Booster Beads, FRESH, 20.1 oz',
        categoryId: category06._id,
        description: 'Downy Unstopables In-Wash Scent Booster adds 12 weeks of freshness that elevates the everyday (freshness out of storage)\n' +
            'Shake a little or a lot of Downy Unstopables laundry scent beads into the cap. Toss into the wash drum at the beginning of the wash-before clothes, laundry detergent, and fabric softener.\n' +
            'Downy Unstopables In-Wash Scent Booster can be used on all colors and fabrics, and is safe to use in all washing machines.\n' +
            'FRESH is a bright, vibrant, and airy scent.\n' +
            'Toss as much as you like in the washer before clothes, detergent, and softener. Usable in HE and TL machines',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81Z5YdqJhrL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81lG0cHD%2BDL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71-kXoxTHNL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71EEyEsPfUL._AC_SL1500_.jpg',
        price: 29.59,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product109 = new Product({
        title: 'Downy April Fresh, Free of Dyes, Ultra Concentrated, Liquid Fabric Conditioner (Fabric Softener) Eco-Box, HE Compatible, 105 fl oz, 180 Loads',
        categoryId: category06._id,
        description: 'The protection of Downy, now in a slim, compact, eco-friendly box\n' +
            'Sustainable pack design made with 75% less plastic* (vs. 3 standard 51 fl oz bottles)\n' +
            'Fabric softener made with 100% renewable wind power electricity\n' +
            'Ultra Concentrated formula provides more conditioning ingredients per drop, per 180 laundry loads\n' +
            'Conditions and protects fabrics from stretching, fading, and fuzz with no dyes',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81K6JwBzRiL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/815xngbwuKL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71G8t3TUTcL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71UxJE-V2-L._AC_SL1500_.jpg',
        price: 14.97,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product110 = new Product({
        title: 'ECOS® 2X Hypoallergenic Liquid Laundry Detergent, Non-Toxic, Magnolia Lily, 200 Loads, 100oz Bottle by Earth Friendly Products (Pack of 2)',
        categoryId: category06._id,
        description: '2X ultra concentrated detergent is tough on dirt yet kind to clothes\n' +
            'Made in USA without dyes, optical brighteners, parabens, phosphates or phthalates\n' +
            'Dermatologist-tested hypoallergenic; pH-balanced\n' +
            'Built-in fabric softener reduces static cling & saves money\n' +
            'Made with plant-powered ingredients & Magnolia & Lily essential oil',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71Qm6X8mpbL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71xnJjVdH1L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81%2BH8SeXxjL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81FdGpe0HLL._AC_SL1500_.jpg',
        price: 20.79,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product111 = new Product({
        title: 'Seventh Generation Laundry Detergent Packs, Free & Clear, 90 Loads (2 pouches, 45 Ct EA)',
        categoryId: category06._id,
        description: 'Powerful quadruple-enzyme formula fights tough stains and leaves clothes fresh\n' +
            'Free & Clear hypoallergenic laundry detergent packs made for sensitive skin with 0% fragrances, dyes, or artificial brighteners\n' +
            'EPA Safer Choice Certified Product designed with safety in mind\n' +
            'Fast-dissolving laundry pods work in high-efficiency (HE) and standard machines. All-temperature laundry packs work in hot and cold water\n' +
            'USDA Certified Biobased Product 94% made with plant-based ingredients',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/91n8kHlUS0L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/913O4DR1JbL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91rSf2OwGQL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81hty5XGBtL._AC_SL1500_.jpg',
        price: 17.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product112 = new Product({
        title: 'Woolite All Darks Liquid Laundry Detergent 66 Loads, Black Clothes & Jeans, Regular & HE Washers, Multi, 100 Fl Oz (Pack of 1), Moonlight Breeze',
        categoryId: category06._id,
        description: 'Works in standard and he machines\n' +
            '50 loads\n' +
            'Keeps dark clothes looking like new\n' +
            'Enhanced with color renew',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/716Xdu-kVML._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81eE%2BTkFaXL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71rwUxkmQRL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71kplMXOD6L._AC_SL1500_.jpg',
        price:21.49,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product113 = new Product({
        title: 'COMFEE’ 1.6 Cu.ft Portable Washing Machine, 11lbs Capacity Fully Automatic Compact Washer with Wheels, 6 Wash Programs Laundry Washer with Drain Pump, Ideal for Apartments, RV, Camping, Magnetic Gray',
        categoryId: category06._id,
        description: 'Easy to Use: - This portable washing machine has 6 most commonly used programs including Normal, Quick, Heavy, Bulky, Delicate, and Spin Only. You are allowed to quickly start the machine the way you like. You can also add extra rinse time by pressing the “Extra Rinse” button. The washer also has 3 water temperatures, meet your different laundry needs. And it comes with a clear lid that allows you to look over the status of clothing at any time.\n' +
            'Space saving: - With only 20.7inch in width, 20.3inch in-depth, and 36.6inch in height, this compact washer is able to be stored easily. Fits in your room/RV/dormitory nicely. The large capacity of 1.6cu.ft top load washer can hold 11lbs of cloth. It equips with a stainless steel inner tub which lasts longer.\n' +
            'Extremely Energy Saving: - This washing machine equips with high quality and durable motor, providing stable power. Saving as much as 84% energy consumption comparing to similar models, our washing machine is able to save money for your household.\n' +
            'Child Lock: - COMFEE\' full-automatic washer care about your family. Child Lock feature allows you to freeze the control panel to make sure everything goes right. Simply press and hold the “Temp” and “Program” button together for 3 seconds and the control panel will no longer respond unless the press and hold again.\n' +
            'Delay Start & Reloading Feature: - “Delay Start” function could save a big hassle for you. Simply throw your laundry in, and set a time when you want it to start, avoiding the headache of having to wash them all over again because of the smell. No need to power off and restart the machine if anything lost behind. Long press "Start/Pause" button for 3 seconds, you can have your laundry added before the main washing cycle finishes.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/41hOwz0shmL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51oc5AaANJL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/610xVquaeKL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/71Vh9lNtH2L._AC_SL1500_.jpg',
        price: 289.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product114 = new Product({
        title: 'Panda PAN6360W Compact Portable Washing Machine, 12lbs Capacity, 8 Wash Programs, 1.54 cu.ft Top Load Cloth Washer, Gray',
        categoryId: category06._id,
        description: 'It is a space-saving design which makes your laundry easy and simple. It is perfect for Apartment, RV, Vacation Home, Dorm, and second washer for your house.\n' +
            'Lager size 1.54 cu.ft capacity allows you to hold up to 12lbs. of cloth, timeless design, portable and lightweight to carry around, regular 3 prongs 110 Voltage which can be plugged anywhere.\n' +
            'Electronic controls with LED display. 8 washing programs and 4 water levels, Stainless steel drum is durable and resists rust and chipping.\n' +
            'Connect the washer directly to your faucet with the included quick connect adapter kit and hoses.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/515KtQFRKnL._AC_SL1052_.jpg,https://images-na.ssl-images-amazon.com/images/I/51AxcA2RvCL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61JqFYtL69L._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/613PEsf3YBL._AC_SL1000_.jpg',
        price: 279.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product115 = new Product({
        title: 'Black + Decker BPWM09W Portable Washer',
        categoryId: category06._id,
        description: 'SMALL PORTABLE WASHING MACHINE – Ideal for camping trips & RVs, apartments, & boats or dorms, our clothes washer is compact but powerful. It\'s easily stored or moved in small spaces, & connects to a faucet with the INCLUDED drain hose & sink adapter\n' +
            'CONVENIENT DESIGN & LARGE CAPACITY - With a .9 cu. ft. tub that washes up to 6,6 lbs. of laundry in 19-52 minutes, this top loading portable washer machine (17.7 x 18.1 x 31.5 in.) has an easy to use LED digital display panel & a clear top window\n' +
            '5 CYCLE PROGRAMS & 3 WATER SETTINGS – Meet all your laundry needs with Heavy, Gentle, Normal, Rapid & Soak cycles. Control the Wash, Rinse, and Spin cycles with the push of a button. You can also adjust the water level based on load size\n' +
            'ENERGY EFFICIENT OPERATION – This compact washing machine is only for use with cold water. It has a built in lint-filter that does not need to be replaced - just clean it about once a month. It’s designed for high efficiency (HE) detergents only. Door Material-Glass\n' +
            'AUTOMATIC UNBALANCE DETECTION- To avoid annoying vibration if the laundry inside the stainless steel tub is not distributed equally, this washer has an automatic unbalance detection mechanism that corrects imbalance in the tub automatically',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/51XA6q2KHvL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51ofUxwqKFL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51OxI-3E32L._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/411ePGZ%2BKnL._AC_SL1000_.jpg',
        price: 261.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product116 = new Product({
        title: 'Portable Washing Machine TG23 - Twin Tub Washer Machine with 7.9lbs Wash and 4.4lbs Spin Cycle Compartments by Think Gizmos',
        categoryId: category06._id,
        description: 'AWESOME CLEANING: Latest portable washing machine with spin dryer. The strong and durable Portable Washing Machines features two tubs 1 for washing and 1 for spinning. It has a capacity of 7.9lbs wash and 4.4lbs spin.\n' +
            'COMPACT AND LIGHTWEIGHT: The compact and lightweight design of the Portable Washing Machine makes this ideal for places where space is limited such as for camping or in a caravan. It does not require plumbing and only requires access to water and a drain area.\n' +
            'WASH & SPIN TIMER: The wash cycle can run up to 15 minutes on either a soft or normal wash and the spin cycle can run up to 5 minutes which means the clothes can be washed for the time required.\n' +
            'EASY TO USE: Simple to use simply add clothes, water and detergent and set the machine to wash. Once done give it a spin to try out and rinse through. Now includes a Lint Filter which, when placed in the wash section, will float on the water collecting any debris (string, lint etc).\n' +
            'ALL PARTS INCLUDED: Everything needed for the machine to work is included (except water and detergent). Includes in the box is the Washing Machine, Water Fill Hose, Lint Filter and fully translated manual (Languages: English, French, German, Italian and Spanish).',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71uCK5%2BOa6L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/41h50etqLZL._AC_.jpg,https://images-na.ssl-images-amazon.com/images/I/41di7JzKUlL._AC_.jpg,https://images-na.ssl-images-amazon.com/images/I/51qLA%2BfIkML._AC_.jpg',
        price:199.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product117 = new Product({
        title: 'Panda PAN6320W Portable Machine, 10lbs Capacity, 10 Wash Programs, 2 Built in Rollers/casters, Compact Top Load Cloth Washer, 1.34 Cu.ft, Gray',
        categoryId: category06._id,
        description: 'It is a space-saving design which makes your laundry easy and simple It is perfect for Apartment RV Vacation Home Dorm and second washer for your house\n' +
            'Enhanced version 2 built-in rollers/casters increase mobility for easy move around\n' +
            'Lager size 1 34cu ft capacity allows you to hold up to 10lbs of cloth timeless design regular 3 prongs 110 Voltage which can be plugged anywhere\n' +
            'Electronic controls with LED display 10 washing programs and 5 water levels Stainless steel drum is durable and resists rust and chipping\n' +
            'Connect the washer directly to your faucet with the included quick connect adapter kit (US Standard size faucet adaptor) and hose',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71afUoW5NfL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71%2BvUFOS9WL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71yCizcyuSL._AC_SL1500_.jpg',
        price: 256.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product118 = new Product({
        title: 'Upgraded Version Pyle Portable Washer & Spin Dryer, Mini Washing Machine, Twin Tubs, Spin Cycle w/ Hose, 11lbs. Capacity, 110V - Ideal For Compact Laundry',
        categoryId: category06._id,
        description: 'EASY TO USE: The portable washer dryer features a convenient top loading system Simply insert detergent and water into the portable washer dryer combo A power cord and drain hose are included\n' +
            'ROTARY CONTROLS: The portable washer machine features rotary controls for wash timer, program and drain selector, as well as a spin timer\n' +
            'MINI WASHING MACHINE: The portable clothes washer has a high-powered 250-watt motor and Wash-Load Capacity-7.7 pounds\n' +
            'SPIN DRYER: The portable spin dryer features a 120-watt motor and a capacity of 33 lbs The compact dryer is perfect for smaller laundry loads\n' +
            'NO INSTALLATION: The portable washer machine makes it easy to start using it right out of the box The best portable washer does not require any special parts or plumbing',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81s2etyl7CL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81QaOfBIEYL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81IFz34%2BTyL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/A197NEakpFL._AC_SL1500_.jpg',
        price: 147.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product119 = new Product({
        title: 'Casdon Electronic Toy Washer',
        categoryId: category06._id,
        description: 'Top Quality Replica Washer for role play fun\n' +
            'Electronic toy featuring lights, spinning drum and washing sounds\n' +
            'Wash basket and a play washing powder carton supplied\n' +
            'Casdons Electronic Microwave toy is a timeless classic unsurpassed throughout the world!!\n' +
            'Simply the best toy washer in the world!',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71D-RZgO7%2BL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71qnVU3-HAL._AC_SL1500_.jpg,',
        price: 38.49,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });const product120 = new Product({
        title: 'RCA RPW091, 0.9 cu ft, White',
        categoryId: category06._id,
        description: '0.9 Cu FT Top Loading Portable Washer with LED Display Panel - Compact and Perfect for Small spaces\n' +
            'Use Your Sink as Water Source with the Included Quick-Connect Sink Adapter\n' +
            '5 Wash Cycles\n' +
            'Steel Drum for Strongest Durability: Ultra Quiet <72dB low operational sound\n' +
            'Includes Rollers for Easy Movement. Please Note: Kindly refer the User Manual before use.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71qLZhbLVfL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71w%2BMdiFycL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71WU7RKbmDL._AC_SL1500_.jpg',
        price: 238.13,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product121 = new Product({
        title: 'Minolta CTW84X0W-IS Avanti, White',
        categoryId: category06._id,
        description: 'Package Dimensions: 46.99 cms (L) x 50.292 cms (W) x 84.836 cms (H)\n' +
            'Package Quantity: 1\n' +
            'Product Type: Washer\n' +
            'Country Of Origin: China',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/41TaR4RJQ7L._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51cCUWWii3L._AC_SL1000_.jpg',
        price:244.00,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product122 = new Product({
        title: 'GE Appliances GTD42EASJWW, White',
        categoryId: category06._id,
        description: 'GE 7. 2 cuft Top Load Electric Dryer Wt\n' +
            'Model Number: GTD42EASJWW\n' +
            'Item Package Dimension: 45.0" L x 40.0" W x 70.0" H\n' +
            'Item Package Weight: 165.0 lb',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/410ZB9kLKTL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/51cKE2h1NRL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61SrbNaTYsL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/71NGRNYyXXL._AC_SL1000_.jpg',
        price: 234.59,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product123 = new Product({
        title: 'DII Cotton Oversized Kitchen Dish Towels 18 x 28" and Dishcloth 13 x 13", Set of 5 , Absorbent Washing Drying Dishtowels for Everyday Cooking and Baking-Eggplant',
        categoryId: category07._id,
        description: '100% Cotton\n' +
            'Each set includes 4 dishtowels measuring 18 x 28" and 1 dishcloth measures 13 x 13" to TACKLE ALL YOUR DRYING AND CLEANING kitchen tasks.\n' +
            '100% Cotton Fabric, Machine Washable. EASY CARE just wash with cold water on gentle cycle & tumble dry low. Do not bleach them or run them through a hot dryer.\n' +
            'These towels are lightweight, super absorbent and dry quickly; machine washable and durable for daily use Get the job done quickly the RIGHT way with these DECORATIVE TOWELS!\n' +
            'This easy care dishtowels are available in multiple colors, find the one to perfectly coordinate with your kitchen or give as A GREAT GIFT for Mother\'s Day, housewarming or hostess gifts.\n' +
            'DII offers delightful kitchen linens including dishtowels, dish cloths, aprons, potholders and oven mitts, but FOR MORE OPTIONS SEARCH: DII Dish Towels or click the DII link at the top of the page to explore our other collections.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/91fxZPOBo4L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81nCJzrrTxL._AC_SL1024_.jpg,https://images-na.ssl-images-amazon.com/images/I/91qBdtCHvdL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81ATCojvdWL._AC_SL1500_.jpg',
        price:14.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product124 = new Product({
        title: 'Kitchen Gizmo Snap N Strain Strainer, Clip On Silicone Colander, Fits All Pots and Bowls –– Red',
        categoryId: category07._id,
        description: 'ORIGINAL MANUFACTURERS: This is the original Snap n\' Strain designed and manufactured by Kitchen Gizmo!\n' +
            'UNIVERSAL DESIGN: The specially designed clips will fit nearly all round pots, pans, and big and small bowls (including lipped bowls).\n' +
            'SPACE SAVING: Small, compact strainer that is easy to use and store in a quarter the size of the traditional colander. Great when working with limited counter space.\n' +
            'PACKAGE INCLUDES: One Snap N’ Strain Strainer (Red)\n' +
            'KITCHEN GIZMO GUARANTEE: All our products come with a 1-year warranty. We will replace all defective products if purchased brand new from Amazon - free of charge.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/717Sv1geKqL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71AWJx3XNPL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71AUdq9NrIL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/51HRmWFybNL._AC_SL1500_.jpg',
        price: 15.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product125 = new Product({
        title: 'Melissa & Doug Stir & Serve Cooking Utensils',
        categoryId: category07._id,
        description: '7-PIECE COOKING UTENSIL SET: The Melissa & Doug Let’s Play House! Stir & Serve Cooking Utensils set includes a whisk, ladle, spatula, slotted spoon, spaghetti server, wooden spoon, and holder.\n' +
            'DISHWASHER-SAFE: This kids’ kitchen utensils set is made from high-quality stainless steel and wooden construction. The food-grade metal utensils are real-world appearing and are dishwasher-safe for easy clean-up.\n' +
            'HELPS CHILDREN DEVELOP SKILLS: Our kids’ cooking utensils set helps children 3 to 6 years develop strong hand-eye coordination and imaginative play skills.\n' +
            'GIFT FOR AGES 3 TO 6: This set makes a great gift for kids ages 3 to 6 years. Add the Melissa & Doug Stainless Steel Pots set to round out the pretend play experience and to give kids an engaging option for screen-free fun.\n' +
            '“THE GOLD STANDARD IN CHILDHOOD PLAY”: For more than 30 years, Melissa & Doug has created beautifully designed imagination- and creativity-sparking products that NBC News called “the gold standard in early childhood play.”\n' +
            '100% HAPPINESS GUARANTEE: We design every toy to the highest quality standards, and to nurture minds and hearts. If your child is not inspired, give us a call and we\'ll make it right. Our phone number is on every product!',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71iDZJVbhkL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/51MiuRbLmDL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61HibsonmBL._AC_SL1000_.jpg,https://images-na.ssl-images-amazon.com/images/I/61TlupncI9L._AC_SL1000_.jpg',
        price: 9.49,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product126 = new Product({
        title: '2-in-1 Kitchen Knife Accessories: 3-Stage Knife Sharpener Helps Repair, Restore and Polish Blades and Cut-Resistant Glove',
        categoryId: category07._id,
        description: '3-Step Knife Sharpening System: With our incredible 3-slot system, we’re revolutionizing the art of knife sharpening! The 1st diamond sharpening rod repairs and straightens damaged blades before the 2nd slot sharpens to restore its V-shape. Finally, the 3rd slot fine tunes for a clean polish.\n' +
            'Easy to Use: Whether you’re right or left-handed, the ergonomic handle allows you to restore your cooking knives in a matter of seconds! Simply place the blade in each of the slots and gently pull the knife through a few times for fast, effective sharpening.\n' +
            'Cut-Resistant Glove Included: At Kitchellence, we put the safety of our customers above all else. Designed with a non-slip base, our kitchen knife sharpener offers comfortable control while you work. We’re even including a cut-resistant glove for added safety!\n' +
            'Premium Quality: With our professional knife sharpener kit, you don’t have to be a chef to cook like one! Crafted from solid ABS plastic, it’s strong, durable and designed to last a lifetime. Made with high quality materials, knives will work like new.\n' +
            'Shop Risk Free: We’re so confident that you’ll love our knife sharpening kit, we’re backing each order with our unconditional money back guarantee! If you are not completely satisfied, simply return the product within 30 days and we’ll refund your purchase.\n',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/81XlfS9CqUL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81UExWN2MrL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81TNcqnxaGL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81vtActbWqL._AC_SL1500_.jpg',
        price:19.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product127 = new Product({
        title: 'GreenLife 2-Piece Cutting Board Set, Medium & Large, 2pc, Turqouise',
        categoryId: category07._id,
        description: '- A Cut above—vibrant color and a durable construction makes this cutting board from GreenLife an eye-catching addition to any kitchen.\n' +
            '- Set includes—medium cutting board: 8” x 12” and large cutting board: 10” x 14”\n' +
            '- cook healthy—greenlife accessories are specially designed to help you free your healthy chef.\n' +
            '- super durable, chip and crack resistant, food-grade plastic\n' +
            '- dishwasher safe',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71Dl3KfsaDL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71eROEHQCKL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71gUSjZKB6L._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71MLDB60-ZL._AC_SL1500_.jpg',
        price: 20.60,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product128 = new Product({
        title: 'Rachael Ray Accessories Kitchen Pantryware Multi Purpose/Salad Serveware/Melamine Garbage Bowl, 10.2 x 10.2 x 7 inches, Red',
        categoryId: category07._id,
        description: 'PREP LIKE A PRO: The Garbage Bowl is the perfect receptacle for food scraps and unusable pieces that pile up when chopping, slicing and dicing\n' +
            'EASY CLEANUP: Garbage bowl is top-rack dishwasher safe for convenient cleanup\n' +
            'COUNTERTOP COLOR: A fun speckle pattern even makes the bowl perfect for countertop display between uses\n' +
            'NO SLIP CONVENIENCE: Rubberized bottom helps to prevent slipping\n' +
            'QUALITY ASSURANCE GUARANTEE',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/91kd5ZXytQL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/91EvV%2BguQGL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81LtvDUmUfL._AC_SL1500_.jpg',
        price: 16.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product129 = new Product({
        title: 'Tomorrow\'s Kitchen Silicone Utensil Rest, Grey',
        categoryId: category07._id,
        description: 'Keep counters clean and utensils organized with the Utensil Rest by Tomorrow\'s Kitchen (Formerly Vacu Vin)\n' +
            'Made of non-slip, heat-safe silicone\n' +
            'Four notches hold up to 4 utensils at once, including spring tongs\n' +
            'Raised edges keep spills on the rest, and not on your surfaces\n' +
            'A perfect gift for all the chefs in your life',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71qS9qzpDlL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/8153eIBCiML._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61UnH6QfmTL._AC_SL1200_.jpg',
        price: 8.60,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product130 = new Product({
        title: 'Oven Mitts,Cat Design Heat Resistant Cooking Glove Quilted Cotton Lining- Heat Resistant Pot Holder Gloves for Grilling & Baking Gloves BBQ Oven Gloves Kitchen Tools Gift Set BBQ,Microwave (Black)',
        categoryId: category07._id,
        description: 'HEAT RESISTANCE TO 480°F: This oven mitts with special cotton lining, not only is comfortable but also protect hands and forearms from hot dishes, pots and oven racks when cooking, baking or grilling.\n' +
            'HIGH QUALITY: 100% Cotton Fabric. The surface of this set is 180gsm cotton fabric, filled with 600gsm cotton, lined with soft and comfortable fabric. All materials BPA free, safer in touching food. High quality cotton for maximum flexibility and maximum heat protection.\n' +
            'UNIQUE DESIGN: Cat paw design,each glove with a hanger.Each cooking glove has a“cat\'s paw" loop for you to hang the oven mitt up on a hook. It\'s a product that combines fun and functionality in one.\n' +
            'EASY STORAGE & CARE: Each oven mitt with a hanging loop allows for easy storage. Perfect for daily use and coordinate well with your home and kitchen. It also easy to clean, simply machine wash with cold water, tumble dry low and hang them up using the attached loop. DO NOT use bleach.\n' +
            'WIDELY USED: Perfect for cooking, baking, serving, BBQ or dinner party. This oven mitts protect your hands while beautifying your kitchen with cute designs. Attractive and functional.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/71FWzC7NhWL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71EeeBN3SgL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/61TDvqOWpUL._AC_SL1024_.jpg,https://images-na.ssl-images-amazon.com/images/I/61KhYUDiNYL._AC_SL1500_.jpg',
        price: 19.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product131 = new Product({
        title: 'COOK with COLOR 10" Whisk and Tong Kitchenware Set for Nonstick Cookware, Silicone and Stainless Steel Accessories for Cooking, Baking, Frying, Grilling, Blending and Serving- Lavender',
        categoryId: category07._id,
        description: 'Set includes 1 10" tongs and 1 10" whisk with stainless steel metal handles and lavender accents- a colorful and stylish set that is comfortable and fun to use at the same time.\n' +
            'Let the grilling begin with these high performance barbecue food tongs; use outdoors and at home as well while turning stakes, burgers, kabobs and hot dogs. Soft nonslip good grip handles and scalloped silicone heads and firm locking feature assures you have complete control while cooking.\n' +
            'High performance whisk with a silicone over-mold over the whisk wires efficiently aerates, blends and quickly beats ingredients creating fluffy eggs and pancakes, superb vinaigrettes and peaked whips and desserts.\n' +
            'Great as a gift for a party or a shower, this awesome kitchen gadget set is sure to delight your friends and family with its practical function and super fashionable and sleek look.\n' +
            'Silicone tools allow for less buildup and mess and are easier to clean and wash. Ideal for nonstick cookware - food contact safe and heat resistant up to 400° F.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/61ywss3%2Bl%2BL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/71w1PYvyOXL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81a8F7P-jfL._AC_SL1500_.jpg,https://images-na.ssl-images-amazon.com/images/I/81jLVQJ%2BvHL._AC_SL1500_.jpg',
        price: 99.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });
    const product132 = new Product({
        title: 'Spider Strainer Skimmer, Swify Set of 3 Asian Strainer Ladle Stainless Steel Wire Skimmer Spoon with Handle for Kitchen Frying Food, Pasta, Spaghetti, Noodle-30.5cm, 32cm, 35cm',
        categoryId: category07._id,
        description: 'Stainless Steel Strainer: This kitchen strainer are made of high quality stainless steel, net wiring and sturdy outer framework and handle, won’t react with foods, safety and durable.\n' +
            'Multiple Size: Set of 3 different strainers, Diameter: 4.3inch, 4.9inch and 5.7inch(11cm, 12.5cm and 14.5cm), Total length: 12inch, 12.6inch and 13.7 inch(30.5cm, 32cm and 35cm). The long handle can protect your hands from hot grease and oils when you cooking or frying.\n' +
            'Wire Strainer: The concave net catches food securely while releasing oil and and other residue. Perfect for frying foods, like potato chips, chicken legs, and scoop up noodles, Spaetzle, Pasta, Spaghetti and more.\n' +
            'Hanging Loop: Convenient hanging hales on each of skimmer, It can be hung on the wall after use, to keep dry and clean. Easy to storage and easy to quickly grab these skimmers.\n' +
            'Easy to Clean: Simply wish with warm soapy water or put them in the dishwasher.',
        thumbnails: 'https://images-na.ssl-images-amazon.com/images/I/613XLcg4slL._AC_SL1001_.jpg,https://images-na.ssl-images-amazon.com/images/I/61%2B2jIH68OL._AC_SL1001_.jpg,https://images-na.ssl-images-amazon.com/images/I/61tPS3E6XCL._AC_SL1001_.jpg,https://images-na.ssl-images-amazon.com/images/I/61jE%2BOs1WwL._AC_SL1001_.jpg',
        price: 11.99,
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        status: 1
    });

    const listProduct = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10,
        product11, product12, product13, product14, product15, product16, product17, product18, product19, product20,
        product21, product22, product23, product24, product25, product26, product27, product28, product29, product30,
        product31, product32, product33, product34, product35, product36, product37, product38, product39, product40,
        product41, product42, product43, product44, product45, product46, product47, product48, product49, product50,
        product51, product52, product53, product54, product55, product56, product57, product58, product59, product60,
        product61, product62, product63, product64, product65, product66, product67, product68, product69, product72,
        product73, product74, product75, product76, product77, product78, product79, product80, product81, product82,
        product83, product84, product85, product86, product87, product88, product89, product90, product91, product92,
        product93, product94, product95, product96, product97, product98, product99, product100, product101, product102,
        product103, product104, product105, product106, product107, product108, product109, product110, product111, product112,
        product113, product114, product115, product116, product117, product118, product119, product120, product121, product122,
        product123, product124, product125, product126, product127, product128, product129, product130, product131, product132
    ];
    await Product.collection.insertMany(listProduct);
    res.send('Okie');
}

exports.getList = async function (req, res) {
    try {
        let filter = {
            status: 1
        };
        if (req.query.categoryId && req.query.categoryId != 0) {
            filter.categoryId = mongoose.Types.ObjectId(req.query.categoryId);
        }
        let keyword = '';
        if (req.query.keyword && req.query.keyword.length > 0) {
            keyword = req.query.keyword;
            filter['text'] = {
                $search: keyword
            }
        }
        const option = {
            page: req.query.page ? req.query.page : 1,
            limit: req.query.limit ? req.query.limit : 10,
        };
        const listCategory = await Category.find({status: 1});
        const listProduct = await Product.paginate(filter, option)
        const data = {
            title: 'TASHA Store Admin | List Products'
        }
        res.render('admin/products/list', {
            data: data,
            listCategory: listCategory,
            listProduct: listProduct.docs,
            user: req.session.user,
            SelectcategoryId: req.query.categoryId,
            page: listProduct.page,
            limit: listProduct.limit,
            keyword: keyword


        })
    } catch (err) {
        console.log(err);
    }
}

exports.create = async function (req, res) {
    const listCategory = await Category.find({status: 1});
    let data = {
        listCategory: listCategory,
        title: 'TASHA Store Admin | Add Product'
    };
    res.render('admin/products/form', {data: data, user: req.session.user});
}

exports.store = function (req, res) {
    // let obj = new Product({
    //     title : req.body.title,
    //     content : req.body.content,
    //     thumbnail : req.body.thumbnail,
    //     status : req.body.status,
    // });
    console.log('start storing');
    let obj = new Product(req.body);
    console.log(req.body);
    obj.save(function (err, data) {
        res.redirect('/admin/products/list');

    });
}

exports.getDetail = async function (req, res) {
    const detail = await Product.findById(req.params.id);
    const data = {
        detail: detail,
        title: 'TASHA Store Admin | Product Detail'
    }
    res.render('admin/products/detail', {data: data, user: req.session.user});
}

exports.edit = async function (req, res) {
    const editProduct = await Product.findById(req.params.id);
    const editCate = await Category.find({status: 1});
    const data = {
        editProduct: editProduct,
        editCate: editCate,
        title: 'TASHA Store Admin | Edit Product'
    }
    res.render('admin/products/edit', {data: data, user: req.session.user});
}

exports.update = async function (req, res) {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin/products/list');
}

// xoá cứng
// exports.delete = function (req, resp) {
//     Product.findByIdAndDelete(req.params.id, req.body, function (err, data) {
//         resp.redirect('/admin/products/list');
//     })
// }

// xoá không cứng, xoá mềm.
exports.deleteMaKhongDelete = async function (req, res) {
    let updateInfor = {
        status: -1
    }
    await Product.findByIdAndUpdate(req.params.id, updateInfor);
    res.redirect('/admin/products/list');
}


