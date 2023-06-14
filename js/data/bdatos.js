const Productos = [
    {
        id: 1001,
        estado: false,
        name: 'Atun Agua 295 gr',
        precio: 37.0,
        cantidad: 25,
        img:'https://herdez-sitio-marca-prod-cms-directus.azurewebsites.net/uploads/_/originals/46d0fc02-e024-4769-92b0-ecf1873102e2.png',
        carrito:0
    },
    {
        id: 1002,
        estado: false,
        name: 'Aceite De Oliva Extra Virgen De 1L',
        precio: 160.05,
        cantidad: 15,
        img: 'https://alsuper.online/products/428090_p.png',
        carrito:0
    },
    {
        id: 1003,
        estado: false,
        name: 'Ketchup De 369g',
        precio: 38.32,
        cantidad: 15,
        img: 'https://d2e63rjlg57kwc.cloudfront.net/products/394306.png',
        carrito:0
    },
    {
        id: 1004,
        estado: false,
        name: 'Azúcar Morena De 1Kg',
        precio: 25.5,
        cantidad: 15,
        img: 'https://cdn.shopify.com/s/files/1/0438/9083/5622/products/AZUCAR-1K_-BOLSA_652x700.png?v=1619813361',
        carrito:0
    },
    {
        id: 1005,
        estado: false,
        name: 'Harina de Trigo De 1Kg',
        precio: 36.00,
        cantidad: 15,
        img: 'https://alsuper.online/products/323310_p.png',
        carrito:0
    },
    {
        id: 1006,
        estado: false,
        name: 'Avena 900g',
        precio: 52.0,
        cantidad: 15,
        img: 'https://alsuper.online/products/352863_p.png',
        carrito:0
    },
    {
        id: 1007,
        estado: false,
        name: '	Cereal Nestle 590g Sabor A Chocolate',
        precio: 63.0,
        cantidad: 15,
        img: 'https://alsuper.online/products/458107_p.png',
        carrito:0
    },
    {
        id: 1008,
        estado: false,
        name: 'Sal De 1kg',
        precio: 16.50,
        cantidad: 15,
        img: 'https://alsuper.online/products/327309_p.png',
        carrito:0
    },
    {
        id: 1009,
        estado: false,
        name: 'jabón barra blanco 135g',
        precio: 32.0,
        cantidad: 15,
        img: 'https://alsuper.online/products/313245_p.png',
        carrito:0
    },
    {
        id: 10010,
        estado: false,
        name: 'Leche 1L' ,
        precio: 48.5,
        cantidad: 15,
        img: 'https://alsuper.online/products/405636_p.png',
        carrito:0
    },
    {
        id: 10011,
        estado: false,
        name: 'Mayonesa Con Jugo De Limón 390g',
        precio: 48.90,
        cantidad: 10,
        img: 'https://alsuper.online/products/10097_p.png',
        carrito:0
    },
    {
        id: 10012,
        estado: false,
        name: 'Servilleta Paquete Con 160Pz',
        precio: 17.90,
        cantidad: 20,
        img: 'https://alsuper.online/products/451722_p.png',
        carrito:0
    },
    {
        id: 10013,
        estado: false,
        name: 'Mermelada De Frutos Rojos 270g',
        precio: 21.90,
        cantidad: 15,
        img: 'https://alsuper.online/products/10107_p.png',
        carrito:0
    },
    {
        id: 10014,
        estado: false,
        name: 'Papel Higiénico 16 Rollos Con 234 Hojas Dobles' ,
        precio: 74.5,
        cantidad: 35,
        img: 'https://alsuper.online/products/447831_p.png',
        carrito:0
    },
    {
        id: 10015,
        estado: false,
        name: 'Galletas Marías 170g',
        precio: 19.90,
        cantidad: 25,
        img: 'https://alsuper.online/products/6913135_p.png',
        carrito:0
    },
    {
        id: 10016,
        estado: false,
        name: 'Detergente liquido MAS 830m',
        precio: 34.90,
        cantidad: 15,
        img: 'https://alsuper.online/products/397565_p.png',
        carrito:0
    },
    {
        id: 10017,
        estado: false,
        name: 'Gelatina sabor fresa leche 720g' ,
        precio: 11.90,
        cantidad: 25,
        img: 'https://alsuper.online/products/451287_p.png',
        carrito:0
    },
    {
        id: 10018,
        estado: false,
        name: 'Flan LaLa 6pz' ,
        precio: 31.90,
        cantidad: 5,
        img: 'https://alsuper.online/products/319559_p.png',
        carrito:0
    },
    {
        id: 10019,
        estado: false,
        name: 'Puré de Tomate 1Kg' ,
        precio: 34.14,
        cantidad: 25,
        img: 'https://alsuper.online/products/376068_p.png',
        carrito:0
    },
    {
        id: 10020,
        estado: false,
        name: 'Salsa Valentina 1L',
        precio: 44.62,
        cantidad: 35,
        img: 'https://alsuper.online/products/152314_p.png',
        carrito:0
    },
    {
        id: 10021,
        estado: false,
        name: 'Vino Tinto L.A. cetto 750 Ml',
        precio: 239.0,
        img: 'https://alsuper.online/products/110748_p.png',
        carrito:0
    },
    {
        id: 10022,
        estado: false,
        name: 'Agua Natural 1.5L',
        precio: 11.90,
        cantidad: 45,
        img: 'https://alsuper.online/products/297320_p.png',
        carrito:0
    },
    {
        id: 10023,
        estado: false,
        name: 'Cerveza Lata Guinness 440ml',
        precio: 64.90,
        cantidad: 15,
        img: 'https://alsuper.online/products/385638_p.png',
        carrito:0
    },
    {
        id: 10024,
        estado: false,
        name: 'Cerveza Tecate 710ml',
        precio: 31.0,
        cantidad: 10,
        img: 'https://alsuper.online/products/353063_p.png',
        carrito:0
    },
    {
        id: 10025,
        estado: false,
        name: 'Ades 1L',
        precio: 24.0,
        cantidad: 15,
        img: 'https://alsuper.online/products/265032_p.png',
        carrito:0
    },
    {
        id: 10026,
        estado: false,
        name: 'Jumex Piña-Coco 1L',
        precio: 22.0,
        cantidad: 25,
        img: 'https://alsuper.online/products/403179_p.png',
        carrito:0
    },
    {
        id: 10027,
        estado: false,
        name: 'Gatorade Ponche de Frutas 1L',
        precio: 27.0,
        cantidad: 25,
        img: 'https://alsuper.online/products/330389_p.png',
        carrito:0
    },
    {
        id: 10028,
        estado: false,
        name: 'Monster 473ml',
        precio: 40.0,
        cantidad: 45,
        img: 'https://alsuper.online/products/446386_p.png',
        carrito:0
    },
    {
        id: 10029,
        estado: false,
        name: 'Coca-Cola 600ml',
        precio: 19.0,
        cantidad: 25,
        img: 'https://alsuper.online/products/97836_p.png',
        carrito:0

    },
    {
        id: 10030,
        estado: false,
        name: 'Doritos 58g',
        precio: 18.0,
        cantidad: 10,
        img: 'https://alsuper.online/products/361758_p.png',
        carrito:0
    },
    {
        id: 10031,
        estado: false,
        name: 'Sabritas Adobadas 57g',
        precio: 20.0,
        cantidad: 26,
        img: 'https://alsuper.online/products/375682_p.png',
        carrito:0
    },
    {
        id: 10032,
        estado: false,
        name: 'Ruffles 50g',
        precio: 19.0,
        cantidad: 14,
        img: 'https://alsuper.online/products/375690_p.png',
        carrito:0
    },
    {
        id: 10033,
        estado: false,
        name: 'Takis Fuego 62g',
        precio: 14.0,
        cantidad: 15,
        img: 'https://alsuper.online/products/463695_p.png',
        carrito:0
    },
    {
        id: 10034,
        estado: false,
        name: 'Chips Fuego 55g',
        precio: 20.90,
        cantidad: 15,
        img: 'https://alsuper.online/products/445429_p.png',
        carrito:0
    },
    {
        id: 10035,
        estado: false,
        name: 'Runners 58g',
        precio: 12.90,
        cantidad: 15,
        img: 'https://alsuper.online/products/341282_p.png',
        carrito:0
    },
    {
        id: 10036,
        estado: false,
        name: 'Mazapan caja 336g',
        precio: 55.90,
        cantidad: 5,
        img: 'https://cdn.shopify.com/s/files/1/0607/5370/7217/products/DeLaRosa_Mazapan_12st_336g_front_frei_500x500_5d62dcc0-3e16-4bfb-8e2c-b89efa5eb702_500x.png?v=1639582658',
        carrito:0
    },
    {
        id: 10037,
        estado: false,
        name: 'Cacahuates japonés 90g',
        precio: 16.50,
        cantidad: 75,
        img: 'https://alsuper.online/products/442662_p.png',
        carrito:0
    },
    {
        id: 10038,
        estado: false,
        name: 'HotNuts  100g',
        precio: 24,
        cantidad: 15,
        img: 'https://alsuper.online/products/355079_p.png',
        carrito:0
    },
    {
        id: 10039,
        estado: false,
        name: 'Kacang 185g',
        precio: 39.0,
        cantidad: 15,
        img: 'https://alsuper.online/products/442015_p.png',
        carrito:0
    },
    {
        id: 10040,
        estado: false,
        name: 'Pastiseta 300g',
        precio: 89.50,
        cantidad: 8,
        img: 'https://alsuper.online/products/353156_p.png',
        carrito:0
    },
    {
        id: 10041,
        estado: false,
        name: 'Oreo 159.6g',
        precio: 20.5,
        cantidad: 20,
        img: 'https://alsuper.online/products/423907_p.png',
        carrito:0
    },
    {
        id: 10042,
        estado: false,
        name: 'Emperador senzo 324g',
        precio: 16.0,
        cantidad: 15,
        img: 'https://alsuper.online/products/447175_p.png',
        carrito:0
    },
    {
        id: 10043,
        estado: false,
        name: 'Chokis 142.5g',
        precio: 30.0,
        cantidad: 15,
        img: 'https://alsuper.online/products/424681_p.png',
        carrito:0
    },
    {
        id: 10044,
        estado: false,
        estado: false,
        name: 'Príncipe 315g',
        precio: 33.50,
        cantidad: 15,
        img: 'https://alsuper.online/products/452894_p.png',
        carrito:0
    },
    {
        id: 10045,
        estado: false,
        name: 'Galleta Ganzito 215g',
        precio: 35.0,
        cantidad: 15,
        img: 'https://alsuper.online/products/376103_p.png',
        carrito:0
    },
    {
        id: 10046,
        estado: false,
        name: 'Pingüinos 2Pz 80g',
        precio: 21.50,
        img: 'https://alsuper.online/products/13318_p.png',
        carrito:0
    },
    {
        id: 10047,
        estado: false,
        name: 'Choco roles 2Pz 80g',
        precio: 21.50,
        cantidad: 15,
        img: 'https://alsuper.online/products/5130668_p.png',
        carrito: 0
    },
    {
        id: 10048,
        estado: false,
        name: 'Barritas 4p 268g',
        precio: 29.20,
        img: 'https://alsuper.online/products/452892_p.png',
        carrito:0
    },
    {
        id: 10049,
        estado: false,
        name: 'Triki-Trakes 5P 255g',
        precio: 34.90,
        cantidad: 15,
        img: 'https://alsuper.online/products/452899_p.png',
        carrito:0
    },
    {
        id: 10050,
        estado: false,
        name: 'Bigotes 180g',
        precio: 44.50,
        cantidad: 15,
        img: 'https://alsuper.online/products/440370_p.png',
        carrito:0
    }
]
export {Productos}