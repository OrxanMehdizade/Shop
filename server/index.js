const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const HOST = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

let goods = [
    {
        product_name: "Kişi köynəyi",
        product_description: "Mavi rəngdə, 100% pamuk",
        product_price: 50,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
        product_image: "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    },
    {
        product_name: "Qadın bluzası",
        product_description: "Dəri detallı, qara rəngdə",
        product_price: 60,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
        product_image: "https://rokkit.ru/assets/df4-f41.jpg",
    },
    {
        product_name: "Kişi pantolonu",
        product_description: "Qəhvəyi rəng, kənar cebi",
        product_price: 75,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
        product_image: "https://cdn.dsmcdn.com/mnresize/500/-/ty493/product/media/images/20220728/4/151254593/426690861/1/1_org.jpg",
    },
    {
        product_name: "Qadın eteyi",
        product_description: "Qırmızı rəng, mini",
        product_price: 40,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
        product_image: "https://img5.lalafo.com/i/posters/api/47/68/2f/turkiyenin-qara-beli-zepli-eteyi-temiz-firma-malidi-sekilde-58604934_image-1675590646.jpeg",
    },
    {
        product_name: "Kişi dəsmalı",
        product_description: "Nəqşdar dizayn",
        product_price: 20,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
        product_image: "https://strgimgr.umico.az/sized/840/190211-0dfc99824db7759c3ac8785ce0a27e4f.jpg",
    },
    {
        product_name: "Qadın çantası",
        product_description: "Əlgötürən, dəri",
        product_price: 90,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
        product_image: "https://hediyyeler.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-08-at-00.13.27-1.jpeg",
    },
    {
        product_name: "Kişi botları",
        product_description: "Qış üçün, suya davamlı",
        product_price: 120,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
        product_image: "https://strgimgr.umico.az/sized/280/403073-1872461a7dba10bfa765159e5592f320.jpg",
    },
    {
        product_name: "Qadın ayaqqabıları",
        product_description: "Yüksək tapan, lacivərt",
        product_price: 85,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
        product_image: "https://static.shop.az/images/product/medium/v/b/f/e/OX84okDHnDN24fdBq5m19tXm9cAZoJNhwmkPyiBN.jpg",
    },
    {
        product_name: "Kişi papağı",
        product_description: "Qara rəngdə, dəri",
        product_price: 45,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
        product_image: "https://strgimgr.umico.az/sized/840/419007-87f5118d570a551af1b444da3583c23f.jpg",
    },
    {
        product_name: "Qadın şalvarı",
        product_description: "Göy rəngdə, kaşmir",
        product_price: 70,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
        product_image: "https://unimall.az/images/detailed/285/71209567_102334327801458_195243717355599024_n.jpg",
    },
    {
        product_name: "Kişi palto",
        product_description: "Süət dəri, qara rəngdə",
        product_price: 250,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
        product_image: "https://strgimgr.umico.az/sized/840/439276-691e73a6f79740a9915a1c3b93e171ff.jpg",
    },
    {
        product_name: "Qadın jaketi",
        product_description: "Uzun, qaşqır",
        product_price: 200,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
        product_image: "https://img5.lalafo.com/i/posters/original/05/75/df/0cf477c97bd069b6db590941da.jpeg",
    },
    {
        product_name: "Kişi kəməri",
        product_description: "Dəri, metal tokalı",
        product_price: 40,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
        product_image: "https://prime-accessories.com/uploads/images/products/e51c292f5f-Kisi-kemer-625ffd3f21e9f.jpg",
    },
    {
        product_name: "Qadın badlonu",
        product_description: "Retro stil, qızıl rəngdə",
        product_price: 180,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
        product_image: "https://www.thoughtco.com/thmb/ctxxtfGGeK5f_-S3f8J-jbY-Gp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg",
    },
    {
        product_name: "Kişi şortu",
        product_description: "Spor stil, elastik",
        product_price: 60,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
        product_image: "https://unimall.az/images/detailed/280/bfc30356-da3f-44d7-8aa9-e6e6d23fc948.jpg",
    },
    {
        product_name: "Qadın maykası",
        product_description: "Boyalı nəqş, pamuklu",
        product_price: 45,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
        product_image: "https://strgimgr.umico.az/sized/840/247763-8b0dfc45419c4742f706653122fb3c56.jpg",
    },
    {
        product_name: "Kişi saatı",
        product_description: "Qara rəngdə, analog",
        product_price: 150,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
        product_image: "https://saatlar.az/uploads/news/ac44311231ef93d0c4b74c4c3b4717fa.jpg",
    },
    {
        product_name: "Qadın bəzək",
        product_description: "Qızıl, komplekt",
        product_price: 220,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        product_image: "https://img5.lalafo.com/i/posters/original/73/ec/97/29476eb8bbf35359f53c253018.jpeg",
    },
    {
        product_name: "Kişi atkısı",
        product_description: "Xəzəl rəng, uzun",
        product_price: 35,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",

        product_image: "https://cdn.dsmcdn.com/mnresize/500/-/ty992/product/media/images/prod/SPM/PIM/20230826/01/8302b556-7ef4-322b-be90-3208b5d67ca8/1_org.jpg",
    },
    {
        product_name: "Qadın bantı",
        product_description: "Metal detallı, elastik",
        product_price: 50,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        product_image: "https://cdn03.ciceksepeti.com/cicek/kcm5015167-1/XL/kadin-pamuklu-esnek-bandana-sac-bandi-ince-boy-toka-2177-kcm5015167-1-a637f5eb928340e0b0d5d295a7dd3694.jpg",
    },
    {
        product_name: "Kişi kostyumu",
        product_description: "İki parçalı, qara rəngdə",
        product_price: 320,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        product_image: "https://safe-vision.com/wp-content/uploads/2020/06/jpg_q50-kostyum-kkkkkkkkkkk-1.jpg",
    },
    {
        product_name: "Qadın kombinezonu",
        product_description: "Yaz üçün, açıq rəng",
        product_price: 150,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        product_image: "https://garia.top/images5/0918/tuta-jumpsuit-donna/tuta-jumpsuit-donna-80_2.jpg",
    },
    {
        product_name: "Kişi sviteri",
        product_description: "Düz rəng, yüngül",
        product_price: 70,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        product_image: "https://static.shop.az/images/product/medium/25769ea4-478e-4b8e-8a62-446b3cb5c2a2.jpg",
    },
    {
        product_name: "Qadın ziyafət geyimi",
        product_description: "Düzənşən, yaz üçün",
        product_price: 95,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        product_image: "https://geyimler.az/uploads/news/fbfe7b920d3c9264f806cbdb91bf4051.jpg",
    },
    {
        product_name: "Kişi sport formaları",
        product_description: "Spandex, idman üçün",
        product_price: 55,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        product_image: "https://www.esport.az/uploads/products/thumbnails/idman-formasi-essential-II-navy-white-joma-101535-332.webp",
    },
    {
        product_name: "Qadın bikini",
        product_description: "Tropik nəqş, elastik",
        product_price: 45,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        product_image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?cs=srgb&dl=pexels-pixabay-325876.jpg&fm=jpg",
    },
    {
        product_name: "Kişi çantası",
        product_description: "Dizayner, əsas bölməsi",
        product_price: 100,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        product_image: "https://strgimgr.umico.az/sized/840/121305-70588d38dbc894b5f6e5e4fe8a00a9fa.jpg",
    },
    {
        product_name: "Qadın ətri",
        product_description: "Gül ətri, uzunömürlü",
        product_price: 80,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        product_image: "https://bermud.az/84437-large_default/qadin-tiri-giorgio-armani-si-100-ml.jpg",
    },
    {
        product_name: "Kişi şalı",
        product_description: "Səliqəli, çoxrəngli",
        product_price: 25,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        product_image: "https://m.media-amazon.com/images/I/51MC2p7hEPL._AC_SY780_.jpg",
    },
    {
        product_name: "Qadın sutyeni",
        product_description: "Destəklənmiş, rahat",
        product_price: 65,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
        product_image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?cs=srgb&dl=pexels-pixabay-325876.jpg&fm=jpg",
    },
];

let myBag = [];
let orders = [];

let i = 1;
goods = goods.map((item) => {
    let obj = { ...item, id: i++ };
    return obj;
});

app.get("/goods", (req, res) => {
    res.json(goods);
});

app.get("/my-bag", (req, res) => {
    res.json(myBag);
});

app.get("/orders", (req, res) => {
    res.json(orders);
});

app.post("/add-mybag", (req, res) => {
    let obj = req.body;
    myBag.push(obj);
    res.send(`Element with ${obj.product_name} was added to bag`);
});

app.post("/add-orders", (req, res) => {
    let obj = req.body;
    orders.push(obj);
    res.send(`Orders of ${obj.name_LastName} was added orders`);
});

app.delete("/delete-mybag/:id", (req, res) => {
    let id = parseInt(req.params.id);
    myBag = myBag.filter((item) => id !== item.id);
    res.send(
        `Element with ${
            myBag.find((item) => id === item.id).product_name
        } was deleted from bag`
    );
});


app.delete("/delete-basket-mybag", (req, res) => {
    myBag = [];
    res.send("Basket has been cleared");
});

app.delete("/delete-admin/:id", (req, res) => {
    let id = parseInt(req.params.id);
    goods = goods.filter((item) => id !== item.id);
    res.send(
        `Element ${
            goods.find((item) => id === item.id).product_name
        } was deleted from goods`
    );
});

app.post("/add-admin", (req, res) => {
    let obj = req.body;
    goods.push(obj);
    res.send(`Element with ${obj.product_name} was added to goods`);
});

app.put("/change-admin/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let index = goods.findIndex((item) => id === item.id);
    goods[index] = req.body;
    res.send(`Element ${req.body.product_name} was changed`);
});

app.get("/search-goods/:searchValue", (req, res) => {
    let searchValue = req.params.searchValue;
    let filteredArray = goods.filter((item) => item.product_name.toLowerCase().startsWith(searchValue));
    res.json(filteredArray);
});

app.get("/search-admin/:searchValue", (req, res) => {
    let searchValue = req.params.searchValue;
    let filteredArray = goods.filter((item) => item.product_name.toLowerCase().startsWith(searchValue));
    res.json(filteredArray);
});

app.listen(HOST, () => {
    console.log(HOST + " OK");
});