const jobs = ["Carpintero/a","Lechero/a","Frutero/a","Cerrajero/a","Cocinero/a","Deshollinador/ora","Lavandero/a","Artesano/a",
"Pescador/ra","Escultor/ra","Tornero/a","Albañil","Editor/ra","Barrendero/a","Fontanero/a o plomero/a",
"Obrero/a","Panadero/a","Locutor/ra","Barbero/a","Soldador/ra","Escritor/ra","Leñador/ra",
"Pintor/ra","Vendedor/ra","Peletero/a","Sastrero/ra","Repartidor/ra","Impresor/ra","Pastor/ra ganadero/ra",
"Cajero/a","Agricultor/ra","Vigilante","Exterminador/ra","Carnicero/a","Animador/ra","Peluquero/a",
"Mecánico/a","Niñero/a","Conductor/ra","Soldador"].sort();

const economicActivities = [
    {
      "code": "011101",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE TRIGO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011102",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE MAÍZ",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011103",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE AVENA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011104",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE CEBADA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011105",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE OTROS CEREALES (EXCEPTO TRIGO, MAÍZ, AVENA Y CEBADA)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011106",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE POROTOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011107",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE LUPINO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011108",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE OTRAS LEGUMBRES (EXCEPTO POROTOS Y LUPINO)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011109",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE SEMILLAS DE RAPS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011110",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE SEMILLAS DE MARAVILLA (GIRASOL)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011111",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE SEMILLAS DE CEREALES, LEGUMBRES Y OLEAGINOSAS (EXCEPTO SEMILLAS DE RAPS Y MARAVILLA)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011200",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE ARROZ",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011301",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE PAPAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011302",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE CAMOTES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011303",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE OTROS TUBÉRCULOS (EXCEPTO PAPAS Y CAMOTES)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011304",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE REMOLACHA AZUCARERA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011305",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE SEMILLAS DE HORTALIZAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011306",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE HORTALIZAS Y MELONES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011400",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE CAÑA DE AZÚCAR",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011500",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE TABACO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011600",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE PLANTAS DE FIBRA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011901",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVO DE FLORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011902",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVOS FORRAJEROS EN PRADERAS MEJORADAS O SEMBRADAS; CULTIVOS SUPLEMENTARIOS FORRAJEROS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "011903",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS NO PERENNES",
      "name": "CULTIVOS DE SEMILLAS DE FLORES; CULTIVO DE SEMILLAS DE PLANTAS FORRAJERAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012111",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE UVA DESTINADA A LA PRODUCCIÓN DE PISCO Y AGUARDIENTE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012112",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE UVA DESTINADA A LA PRODUCCIÓN DE VINO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012120",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE UVA PARA MESA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012200",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE FRUTAS TROPICALES Y SUBTROPICALES (INCLUYE EL CULTIVO DE PALTAS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012300",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE CÍTRICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012400",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE FRUTAS DE PEPITA Y DE HUESO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012501",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE SEMILLAS DE FRUTAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012502",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE OTROS FRUTOS Y NUECES DE ÁRBOLES Y ARBUSTOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012600",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE FRUTOS OLEAGINOSOS (INCLUYE EL CULTIVO DE ACEITUNAS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012700",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE PLANTAS CON LAS QUE SE PREPARAN BEBIDAS (INCLUYE EL CULTIVO DE CAFÉ, TÉ Y MATE)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012801",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE ESPECIAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012802",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE PLANTAS AROMÁTICAS, MEDICINALES Y FARMACÉUTICAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "012900",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PLANTAS PERENNES",
      "name": "CULTIVO DE OTRAS PLANTAS PERENNES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "013000",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "PROPAGACIÓN DE PLANTAS",
      "name": "CULTIVO DE PLANTAS VIVAS INCLUIDA LA PRODUCCIÓN EN VIVEROS (EXCEPTO VIVEROS FORESTALES)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "014101",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "GANADERÍA",
      "name": "CRÍA DE GANADO BOVINO PARA LA PRODUCCIÓN LECHERA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "014102",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "GANADERÍA",
      "name": "CRÍA DE GANADO BOVINO PARA LA PRODUCCIÓN DE CARNE O COMO GANADO REPRODUCTOR",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "014200",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "GANADERÍA",
      "name": "CRÍA DE CABALLOS Y OTROS EQUINOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "014300",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "GANADERÍA",
      "name": "CRÍA DE LLAMAS, ALPACAS, VICUÑAS, GUANACOS Y OTROS CAMÉLIDOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "014410",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "GANADERÍA",
      "name": "CRÍA DE OVEJAS (OVINOS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "014420",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "GANADERÍA",
      "name": "CRÍA DE CABRAS (CAPRINOS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "014500",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "GANADERÍA",
      "name": "CRÍA DE CERDOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "014601",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "GANADERÍA",
      "name": "CRÍA DE AVES DE CORRAL PARA LA PRODUCCIÓN DE CARNE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "014602",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "GANADERÍA",
      "name": "CRÍA DE AVES DE CORRAL PARA LA PRODUCCIÓN DE HUEVOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "014901",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "GANADERÍA",
      "name": "APICULTURA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "014909",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "GANADERÍA",
      "name": "CRÍA DE OTROS ANIMALES N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "015000",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CULTIVO DE PRODUCTOS AGRÍCOLAS EN COMBINACIÓN CON LA CRÍA DE ANIMALES",
      "name": "CULTIVO DE PRODUCTOS AGRÍCOLAS EN COMBINACIÓN CON LA CRÍA DE ANIMALES (EXPLOTACIÓN MIXTA)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "016100",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "ACTIVIDADES DE APOYO A LA AGRICULTURA Y LA GANADERÍA Y ACTIVIDADES POSCOSECHA",
      "name": "ACTIVIDADES DE APOYO A LA AGRICULTURA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "016200",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "ACTIVIDADES DE APOYO A LA AGRICULTURA Y LA GANADERÍA Y ACTIVIDADES POSCOSECHA",
      "name": "ACTIVIDADES DE APOYO A LA GANADERÍA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "016300",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "ACTIVIDADES DE APOYO A LA AGRICULTURA Y LA GANADERÍA Y ACTIVIDADES POSCOSECHA",
      "name": "ACTIVIDADES POSCOSECHA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "016400",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "ACTIVIDADES DE APOYO A LA AGRICULTURA Y LA GANADERÍA Y ACTIVIDADES POSCOSECHA",
      "name": "TRATAMIENTO DE SEMILLAS PARA PROPAGACIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "017000",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "CAZA ORDINARIA Y MEDIANTE TRAMPAS Y ACTIVIDADES DE SERVICIOS CONEXAS",
      "name": "CAZA ORDINARIA Y MEDIANTE TRAMPAS Y ACTIVIDADES DE SERVICIOS CONEXAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "021001",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "SILVICULTURA Y OTRAS ACTIVIDADES FORESTALES",
      "name": "EXPLOTACIÓN DE VIVEROS FORESTALES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "021002",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "SILVICULTURA Y OTRAS ACTIVIDADES FORESTALES",
      "name": "SILVICULTURA Y OTRAS ACTIVIDADES FORESTALES (EXCEPTO EXPLOTACIÓN DE VIVEROS FORESTALES)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "022000",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "EXTRACCIÓN DE MADERA",
      "name": "EXTRACCIÓN DE MADERA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "023000",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "RECOLECCIÓN DE PRODUCTOS FORESTALES DISTINTOS DE LA MADERA",
      "name": "RECOLECCIÓN DE PRODUCTOS FORESTALES DISTINTOS DE LA MADERA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "024001",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "SERVICIOS DE APOYO A LA SILVICULTURA",
      "name": "SERVICIOS DE FORESTACIÓN A CAMBIO DE UNA RETRIBUCIÓN O POR CONTRATA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "024002",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "SERVICIOS DE APOYO A LA SILVICULTURA",
      "name": "SERVICIOS DE CORTA DE MADERA A CAMBIO DE UNA RETRIBUCIÓN O POR CONTRATA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "024003",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "SERVICIOS DE APOYO A LA SILVICULTURA",
      "name": "SERVICIOS DE EXTINCIÓN Y PREVENCIÓN DE INCENDIOS FORESTALES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "024009",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "SERVICIOS DE APOYO A LA SILVICULTURA",
      "name": "OTROS SERVICIOS DE APOYO A LA SILVICULTURA N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "031110",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "PESCA",
      "name": "PESCA MARÍTIMA INDUSTRIAL, EXCEPTO DE BARCOS FACTORÍA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "031120",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "PESCA",
      "name": "PESCA MARÍTIMA ARTESANAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "031130",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "PESCA",
      "name": "RECOLECCIÓN Y EXTRACCIÓN DE PRODUCTOS MARINOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "031140",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "PESCA",
      "name": "SERVICIOS RELACIONADOS CON LA PESCA MARÍTIMA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "031200",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "PESCA",
      "name": "PESCA DE AGUA DULCE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "032110",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "ACUICULTURA",
      "name": "CULTIVO Y CRIANZA DE PECES MARINOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "032120",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "ACUICULTURA",
      "name": "CULTIVO, REPRODUCCIÓN Y MANEJO DE ALGAS MARINAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "032130",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "ACUICULTURA",
      "name": "REPRODUCCIÓN Y CRÍA DE MOLUSCOS, CRUSTÁCEOS Y GUSANOS MARINOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "032140",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "ACUICULTURA",
      "name": "SERVICIOS RELACIONADOS CON LA ACUICULTURA MARINA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "032200",
      "group": "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
      "subGroup": "ACUICULTURA",
      "name": "ACUICULTURA DE AGUA DULCE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "040000",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXTRACCIÓN Y PROCESAMIENTO DE COBRE",
      "name": "EXTRACCIÓN Y PROCESAMIENTO DE COBRE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "051000",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXTRACCIÓN DE CARBÓN DE PIEDRA",
      "name": "EXTRACCIÓN DE CARBÓN DE PIEDRA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "052000",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXTRACCIÓN DE LIGNITO",
      "name": "EXTRACCIÓN DE LIGNITO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "061000",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXTRACCIÓN DE PETRÓLEO CRUDO",
      "name": "EXTRACCIÓN DE PETRÓLEO CRUDO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "062000",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXTRACCIÓN DE GAS NATURAL",
      "name": "EXTRACCIÓN DE GAS NATURAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "071000",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXTRACCIÓN DE MINERALES DE HIERRO",
      "name": "EXTRACCIÓN DE MINERALES DE HIERRO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "072100",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXTRACCIÓN DE MINERALES DE HIERRO",
      "name": "EXTRACCIÓN DE MINERALES DE URANIO Y TORIO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "072910",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXTRACCIÓN DE MINERALES DE HIERRO",
      "name": "EXTRACCIÓN DE ORO Y PLATA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "072991",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXTRACCIÓN DE MINERALES DE HIERRO",
      "name": "EXTRACCIÓN DE ZINC Y PLOMO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "072992",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXTRACCIÓN DE MINERALES DE HIERRO",
      "name": "EXTRACCIÓN DE MANGANESO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "072999",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXTRACCIÓN DE MINERALES DE HIERRO",
      "name": "EXTRACCIÓN DE OTROS MINERALES METALÍFEROS NO FERROSOS N.C.P. (EXCEPTO ZINC, PLOMO Y MANGANESO)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "081000",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXTRACCIÓN DE PIEDRA, ARENA Y ARCILLA",
      "name": "EXTRACCIÓN DE PIEDRA, ARENA Y ARCILLA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "089110",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXPLOTACIÓN DE MINAS Y CANTERAS N.C.P.",
      "name": "EXTRACCIÓN Y PROCESAMIENTO DE LITIO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "089190",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXPLOTACIÓN DE MINAS Y CANTERAS N.C.P.",
      "name": "EXTRACCIÓN DE MINERALES PARA LA FABRICACIÓN DE ABONOS Y PRODUCTOS QUÍMICOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "089200",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXPLOTACIÓN DE MINAS Y CANTERAS N.C.P.",
      "name": "EXTRACCIÓN DE TURBA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "089300",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXPLOTACIÓN DE MINAS Y CANTERAS N.C.P.",
      "name": "EXTRACCIÓN DE SAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "089900",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "EXPLOTACIÓN DE MINAS Y CANTERAS N.C.P.",
      "name": "EXPLOTACIÓN DE OTRAS MINAS Y CANTERAS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "091001",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "ACTIVIDADES DE APOYO PARA LA EXTRACCIÓN DE PETRÓLEO Y GAS NATURAL",
      "name": "ACTIVIDADES DE APOYO PARA LA EXTRACCIÓN DE PETRÓLEO Y GAS NATURAL PRESTADOS POR EMPRESAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "091002",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "ACTIVIDADES DE APOYO PARA LA EXTRACCIÓN DE PETRÓLEO Y GAS NATURAL",
      "name": "ACTIVIDADES DE APOYO PARA LA EXTRACCIÓN DE PETRÓLEO Y GAS NATURAL PRESTADOS POR PROFESIONALES",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "099001",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "ACTIVIDADES DE APOYO PARA LA EXPLOTACIÓN DE OTRAS MINAS Y CANTERAS",
      "name": "ACTIVIDADES DE APOYO PARA LA EXPLOTACIÓN DE OTRAS MINAS Y CANTERAS PRESTADOS POR EMPRESAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "099002",
      "group": "EXPLOTACIÓN DE MINAS Y CANTERAS",
      "subGroup": "ACTIVIDADES DE APOYO PARA LA EXPLOTACIÓN DE OTRAS MINAS Y CANTERAS",
      "name": "ACTIVIDADES DE APOYO PARA LA EXPLOTACIÓN DE OTRAS MINAS Y CANTERAS PRESTADOS POR PROFESIONALES",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "101011",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN Y CONSERVACIÓN DE CARNE",
      "name": "EXPLOTACIÓN DE MATADEROS DE BOVINOS, OVINOS, EQUINOS, CAPRINOS, PORCINOS Y CAMÉLIDOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "101019",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN Y CONSERVACIÓN DE CARNE",
      "name": "EXPLOTACIÓN DE MATADEROS DE AVES Y DE OTROS TIPOS DE ANIMALES N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "101020",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN Y CONSERVACIÓN DE CARNE",
      "name": "ELABORACIÓN Y CONSERVACIÓN DE CARNE Y PRODUCTOS CÁRNICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "102010",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN Y CONSERVACIÓN DE PESCADO, CRUSTÁCEOS Y MOLUSCOS",
      "name": "PRODUCCIÓN DE HARINA DE PESCADO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "102020",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN Y CONSERVACIÓN DE PESCADO, CRUSTÁCEOS Y MOLUSCOS",
      "name": "ELABORACIÓN Y CONSERVACIÓN DE SALMÓNIDOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "102030",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN Y CONSERVACIÓN DE PESCADO, CRUSTÁCEOS Y MOLUSCOS",
      "name": "ELABORACIÓN Y CONSERVACIÓN DE OTROS PESCADOS, EN PLANTAS EN TIERRA (EXCEPTO BARCOS FACTORÍA)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "102040",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN Y CONSERVACIÓN DE PESCADO, CRUSTÁCEOS Y MOLUSCOS",
      "name": "ELABORACIÓN Y CONSERVACIÓN DE CRUSTÁCEOS, MOLUSCOS Y OTROS PRODUCTOS ACUÁTICOS, EN PLANTAS EN TIERRA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "102050",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN Y CONSERVACIÓN DE PESCADO, CRUSTÁCEOS Y MOLUSCOS",
      "name": "ACTIVIDADES DE ELABORACIÓN Y CONSERVACIÓN DE PESCADO, REALIZADAS EN BARCOS FACTORÍA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "102060",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN Y CONSERVACIÓN DE PESCADO, CRUSTÁCEOS Y MOLUSCOS",
      "name": "ELABORACIÓN Y PROCESAMIENTO DE ALGAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "103000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN Y CONSERVACIÓN DE FRUTAS, LEGUMBRES Y HORTALIZAS",
      "name": "ELABORACIÓN Y CONSERVACIÓN DE FRUTAS, LEGUMBRES Y HORTALIZAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "104000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE ACEITES Y GRASAS DE ORIGEN VEGETAL Y ANIMAL",
      "name": "ELABORACIÓN DE ACEITES Y GRASAS DE ORIGEN VEGETAL Y ANIMAL (EXCEPTO ELABORACIÓN DE MANTEQUILLA)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "105000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE PRODUCTOS LÁCTEOS",
      "name": "ELABORACIÓN DE PRODUCTOS LÁCTEOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "106101",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE PRODUCTOS DE MOLINERÍA, ALMIDONES Y PRODUCTOS DERIVADOS DEL ALMIDÓN",
      "name": "MOLIENDA DE TRIGO: PRODUCCIÓN DE HARINA, SÉMOLA Y GRÁNULOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "106102",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE PRODUCTOS DE MOLINERÍA, ALMIDONES Y PRODUCTOS DERIVADOS DEL ALMIDÓN",
      "name": "MOLIENDA DE ARROZ; PRODUCCIÓN DE HARINA DE ARROZ",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "106109",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE PRODUCTOS DE MOLINERÍA, ALMIDONES Y PRODUCTOS DERIVADOS DEL ALMIDÓN",
      "name": "ELABORACIÓN DE OTROS PRODUCTOS DE MOLINERÍA N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "106200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE PRODUCTOS DE MOLINERÍA, ALMIDONES Y PRODUCTOS DERIVADOS DEL ALMIDÓN",
      "name": "ELABORACIÓN DE ALMIDONES Y PRODUCTOS DERIVADOS DEL ALMIDÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "107100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE OTROS PRODUCTOS ALIMENTICIOS",
      "name": "ELABORACIÓN DE PRODUCTOS DE PANADERÍA Y PASTELERÍA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "107200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE OTROS PRODUCTOS ALIMENTICIOS",
      "name": "ELABORACIÓN DE AZÚCAR",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "107300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE OTROS PRODUCTOS ALIMENTICIOS",
      "name": "ELABORACIÓN DE CACAO, CHOCOLATE Y DE PRODUCTOS DE CONFITERÍA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "107400",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE OTROS PRODUCTOS ALIMENTICIOS",
      "name": "ELABORACIÓN DE MACARRONES, FIDEOS, ALCUZCUZ Y PRODUCTOS FARINÁCEOS SIMILARES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "107500",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE OTROS PRODUCTOS ALIMENTICIOS",
      "name": "ELABORACIÓN DE COMIDAS Y PLATOS PREPARADOS ENVASADOS, ROTULADOS Y CON INFORMACIÓN NUTRICIONAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "107901",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE OTROS PRODUCTOS ALIMENTICIOS",
      "name": "ELABORACIÓN DE TÉ, CAFÉ, MATE E INFUSIONES DE HIERBAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "107902",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE OTROS PRODUCTOS ALIMENTICIOS",
      "name": "ELABORACIÓN DE LEVADURAS NATURALES O ARTIFICIALES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "107903",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE OTROS PRODUCTOS ALIMENTICIOS",
      "name": "ELABORACIÓN DE VINAGRES, MOSTAZAS, MAYONESAS Y CONDIMENTOS EN GENERAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "107909",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE OTROS PRODUCTOS ALIMENTICIOS",
      "name": "ELABORACIÓN DE OTROS PRODUCTOS ALIMENTICIOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "108000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE PIENSOS PREPARADOS PARA ANIMALES",
      "name": "ELABORACIÓN DE PIENSOS PREPARADOS PARA ANIMALES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "110110",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE BEBIDAS ALCOHÓLICAS Y NO ALCOHÓLICAS",
      "name": "ELABORACIÓN DE PISCO (INDUSTRIAS PISQUERAS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "110120",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE BEBIDAS ALCOHÓLICAS Y NO ALCOHÓLICAS",
      "name": "DESTILACIÓN, RECTIFICACIÓN Y MEZCLAS DE BEBIDAS ALCOHÓLICAS; EXCEPTO PISCO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "110200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE BEBIDAS ALCOHÓLICAS Y NO ALCOHÓLICAS",
      "name": "ELABORACIÓN DE VINOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "110300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE BEBIDAS ALCOHÓLICAS Y NO ALCOHÓLICAS",
      "name": "ELABORACIÓN DE BEBIDAS MALTEADAS Y DE MALTA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "110401",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE BEBIDAS ALCOHÓLICAS Y NO ALCOHÓLICAS",
      "name": "ELABORACIÓN DE BEBIDAS NO ALCOHÓLICAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "110402",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE BEBIDAS ALCOHÓLICAS Y NO ALCOHÓLICAS",
      "name": "PRODUCCIÓN DE AGUAS MINERALES Y OTRAS AGUAS EMBOTELLADAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "120001",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE PRODUCTOS DE TABACO",
      "name": "ELABORACIÓN DE CIGARROS Y CIGARRILLOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "120009",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ELABORACIÓN DE PRODUCTOS DE TABACO",
      "name": "ELABORACIÓN DE OTROS PRODUCTOS DE TABACO N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "131100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "HILATURA, TEJEDURA Y ACABADO DE PRODUCTOS TEXTILES",
      "name": "PREPARACIÓN E HILATURA DE FIBRAS TEXTILES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "131200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "HILATURA, TEJEDURA Y ACABADO DE PRODUCTOS TEXTILES",
      "name": "TEJEDURA DE PRODUCTOS TEXTILES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "131300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "HILATURA, TEJEDURA Y ACABADO DE PRODUCTOS TEXTILES",
      "name": "ACABADO DE PRODUCTOS TEXTILES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "139100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS TEXTILES",
      "name": "FABRICACIÓN DE TEJIDOS DE PUNTO Y GANCHILLO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "139200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS TEXTILES",
      "name": "FABRICACIÓN DE ARTÍCULOS CONFECCIONADOS DE MATERIALES TEXTILES, EXCEPTO PRENDAS DE VESTIR",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "139300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS TEXTILES",
      "name": "FABRICACIÓN DE TAPICES Y ALFOMBRAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "139400",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS TEXTILES",
      "name": "FABRICACIÓN DE CUERDAS, CORDELES, BRAMANTES Y REDES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "139900",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS TEXTILES",
      "name": "FABRICACIÓN DE OTROS PRODUCTOS TEXTILES N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "141001",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRENDAS DE VESTIR, EXCEPTO PRENDAS DE PIEL",
      "name": "FABRICACIÓN DE PRENDAS DE VESTIR DE MATERIALES TEXTILES Y SIMILARES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "141002",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRENDAS DE VESTIR, EXCEPTO PRENDAS DE PIEL",
      "name": "FABRICACIÓN DE PRENDAS DE VESTIR DE CUERO NATURAL O ARTIFICIAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "141003",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRENDAS DE VESTIR, EXCEPTO PRENDAS DE PIEL",
      "name": "FABRICACIÓN DE ACCESORIOS DE VESTIR",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "141004",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRENDAS DE VESTIR, EXCEPTO PRENDAS DE PIEL",
      "name": "FABRICACIÓN DE ROPA DE TRABAJO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "142000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE ARTÍCULOS DE PIEL",
      "name": "FABRICACIÓN DE ARTÍCULOS DE PIEL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "143000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE ARTÍCULOS DE PUNTO Y GANCHILLO",
      "name": "FABRICACIÓN DE ARTÍCULOS DE PUNTO Y GANCHILLO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "151100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "CURTIDO Y ADOBO DE CUEROS; FABRICACIÓN PRODUCTOS DE CUERO; ADOBO Y TEÑIDO DE PIELES",
      "name": "CURTIDO Y ADOBO DE CUEROS; ADOBO Y TEÑIDO DE PIELES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "151200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "CURTIDO Y ADOBO DE CUEROS; FABRICACIÓN PRODUCTOS DE CUERO; ADOBO Y TEÑIDO DE PIELES",
      "name": "FABRICACIÓN DE MALETAS, BOLSOS Y ARTÍCULOS SIMILARES, ARTÍCULOS DE TALABARTERÍA Y GUARNICIONERÍA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "152000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE CALZADO",
      "name": "FABRICACIÓN DE CALZADO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "161000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "ASERRADO Y ACEPILLADURA DE MADERA",
      "name": "ASERRADO Y ACEPILLADURA DE MADERA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "162100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS DE MADERA, CORCHO, PAJA Y MATERIALES TRENZABLES",
      "name": "FABRICACIÓN DE HOJAS DE MADERA PARA ENCHAPADO Y TABLEROS A BASE DE MADERA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "162200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS DE MADERA, CORCHO, PAJA Y MATERIALES TRENZABLES",
      "name": "FABRICACIÓN DE PARTES Y PIEZAS DE CARPINTERÍA PARA EDIFICIOS Y CONSTRUCCIONES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "162300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS DE MADERA, CORCHO, PAJA Y MATERIALES TRENZABLES",
      "name": "FABRICACIÓN DE RECIPIENTES DE MADERA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "162900",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS DE MADERA, CORCHO, PAJA Y MATERIALES TRENZABLES",
      "name": "FABRICACIÓN DE OTROS PRODUCTOS DE MADERA, DE ARTÍCULOS DE CORCHO, PAJA Y MATERIALES TRENZABLES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "170110",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PAPEL Y DE PRODUCTOS DE PAPEL",
      "name": "FABRICACIÓN DE CELULOSA Y OTRAS PASTAS DE MADERA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "170190",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PAPEL Y DE PRODUCTOS DE PAPEL",
      "name": "FABRICACIÓN DE PAPEL Y CARTÓN PARA SU POSTERIOR USO INDUSTRIAL N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "170200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PAPEL Y DE PRODUCTOS DE PAPEL",
      "name": "FABRICACIÓN DE PAPEL Y CARTÓN ONDULADO Y DE ENVASES DE PAPEL Y CARTÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "170900",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PAPEL Y DE PRODUCTOS DE PAPEL",
      "name": "FABRICACIÓN DE OTROS ARTÍCULOS DE PAPEL Y CARTÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "181101",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "IMPRESIÓN Y ACTIVIDADES DE SERVICIOS RELACIONADAS CON LA IMPRESIÓN",
      "name": "IMPRESIÓN DE LIBROS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "181109",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "IMPRESIÓN Y ACTIVIDADES DE SERVICIOS RELACIONADAS CON LA IMPRESIÓN",
      "name": "OTRAS ACTIVIDADES DE IMPRESIÓN N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "181200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "IMPRESIÓN Y ACTIVIDADES DE SERVICIOS RELACIONADAS CON LA IMPRESIÓN",
      "name": "ACTIVIDADES DE SERVICIOS RELACIONADAS CON LA IMPRESIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "182000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPRODUCCIÓN DE GRABACIONES",
      "name": "REPRODUCCIÓN DE GRABACIONES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "191000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS DE HORNOS DE COQUE",
      "name": "FABRICACIÓN DE PRODUCTOS DE HORNOS DE COQUE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "192000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS DE LA REFINACIÓN DEL PETRÓLEO",
      "name": "FABRICACIÓN DE PRODUCTOS DE LA REFINACIÓN DEL PETRÓLEO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "201101",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN SUSTANCIAS QUÍMICAS BÁSICAS, ABONOS Y COMPUESTOS DE NITRÓGENO, PLÁSTICOS Y CAUCHO SINT.",
      "name": "FABRICACIÓN DE CARBÓN VEGETAL (EXCEPTO ACTIVADO); FABRICACIÓN DE BRIQUETAS DE CARBÓN VEGETAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "201109",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN SUSTANCIAS QUÍMICAS BÁSICAS, ABONOS Y COMPUESTOS DE NITRÓGENO, PLÁSTICOS Y CAUCHO SINT.",
      "name": "FABRICACIÓN DE OTRAS SUSTANCIAS QUÍMICAS BÁSICAS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "201200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN SUSTANCIAS QUÍMICAS BÁSICAS, ABONOS Y COMPUESTOS DE NITRÓGENO, PLÁSTICOS Y CAUCHO SINT.",
      "name": "FABRICACIÓN DE ABONOS Y COMPUESTOS DE NITRÓGENO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "201300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN SUSTANCIAS QUÍMICAS BÁSICAS, ABONOS Y COMPUESTOS DE NITRÓGENO, PLÁSTICOS Y CAUCHO SINT.",
      "name": "FABRICACIÓN DE PLÁSTICOS Y CAUCHO SINTÉTICO EN FORMAS PRIMARIAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "202100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS QUÍMICOS",
      "name": "FABRICACIÓN DE PLAGUICIDAS Y OTROS PRODUCTOS QUÍMICOS DE USO AGROPECUARIO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "202200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS QUÍMICOS",
      "name": "FABRICACIÓN DE PINTURAS, BARNICES Y PRODUCTOS DE REVESTIMIENTO, TINTAS DE IMPRENTA Y MASILLAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "202300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS QUÍMICOS",
      "name": "FABRICACIÓN DE JABONES Y DETERGENTES, PREPARADOS PARA LIMPIAR, PERFUMES Y PREPARADOS DE TOCADOR",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "202901",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS QUÍMICOS",
      "name": "FABRICACIÓN DE EXPLOSIVOS Y PRODUCTOS PIROTÉCNICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "202909",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS QUÍMICOS",
      "name": "FABRICACIÓN DE OTROS PRODUCTOS QUÍMICOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "203000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE FIBRAS ARTIFICIALES",
      "name": "FABRICACIÓN DE FIBRAS ARTIFICIALES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "210000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS FARMACÉUTICOS, SUSTANCIAS QUÍMICAS MEDICINALES Y PRODUCTOS BOTÁNICOS",
      "name": "FABRICACIÓN DE PRODUCTOS FARMACÉUTICOS, SUSTANCIAS QUÍMICAS MEDICINALES Y PRODUCTOS BOTÁNICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "221100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS DE CAUCHO",
      "name": "FABRICACIÓN DE CUBIERTAS Y CÁMARAS DE CAUCHO; RECAUCHUTADO Y RENOVACIÓN DE CUBIERTAS DE CAUCHO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "221900",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS DE CAUCHO",
      "name": "FABRICACIÓN DE OTROS PRODUCTOS DE CAUCHO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "222000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS DE PLÁSTICO",
      "name": "FABRICACIÓN DE PRODUCTOS DE PLÁSTICO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "231001",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE VIDRIO Y PRODUCTOS DE VIDRIO",
      "name": "FABRICACIÓN DE VIDRIO PLANO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "231002",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE VIDRIO Y PRODUCTOS DE VIDRIO",
      "name": "FABRICACIÓN DE VIDRIO HUECO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "231003",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE VIDRIO Y PRODUCTOS DE VIDRIO",
      "name": "FABRICACIÓN DE FIBRAS DE VIDRIO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "231009",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE VIDRIO Y PRODUCTOS DE VIDRIO",
      "name": "FABRICACIÓN DE PRODUCTOS DE VIDRIO N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "239100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS MINERALES NO METÁLICOS N.C.P.",
      "name": "FABRICACIÓN DE PRODUCTOS REFRACTARIOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "239200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS MINERALES NO METÁLICOS N.C.P.",
      "name": "FABRICACIÓN DE MATERIALES DE CONSTRUCCIÓN DE ARCILLA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "239300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS MINERALES NO METÁLICOS N.C.P.",
      "name": "FABRICACIÓN DE OTROS PRODUCTOS DE PORCELANA Y DE CERÁMICA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "239400",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS MINERALES NO METÁLICOS N.C.P.",
      "name": "FABRICACIÓN DE CEMENTO, CAL Y YESO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "239500",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS MINERALES NO METÁLICOS N.C.P.",
      "name": "FABRICACIÓN DE ARTÍCULOS DE HORMIGÓN, CEMENTO Y YESO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "239600",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS MINERALES NO METÁLICOS N.C.P.",
      "name": "CORTE, TALLA Y ACABADO DE LA PIEDRA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "239900",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS MINERALES NO METÁLICOS N.C.P.",
      "name": "FABRICACIÓN DE OTROS PRODUCTOS MINERALES NO METÁLICOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "241000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "INDUSTRIAS BÁSICAS DE HIERRO Y ACERO",
      "name": "INDUSTRIAS BÁSICAS DE HIERRO Y ACERO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "242001",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS PRIMARIOS DE METALES PRECIOSOS Y OTROS METALES NO FERROSOS",
      "name": "FABRICACIÓN DE PRODUCTOS PRIMARIOS DE COBRE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "242002",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS PRIMARIOS DE METALES PRECIOSOS Y OTROS METALES NO FERROSOS",
      "name": "FABRICACIÓN DE PRODUCTOS PRIMARIOS DE ALUMINIO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "242009",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS PRIMARIOS DE METALES PRECIOSOS Y OTROS METALES NO FERROSOS",
      "name": "FABRICACIÓN DE PRODUCTOS PRIMARIOS DE METALES PRECIOSOS Y DE OTROS METALES NO FERROSOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "243100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FUNDICIÓN DE METALES",
      "name": "FUNDICIÓN DE HIERRO Y ACERO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "243200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FUNDICIÓN DE METALES",
      "name": "FUNDICIÓN DE METALES NO FERROSOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "251100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS METÁLICOS PARA USO ESTRUCTURAL, TANQUES, DEPÓSITOS, RECIPIENTES DE METAL",
      "name": "FABRICACIÓN DE PRODUCTOS METÁLICOS PARA USO ESTRUCTURAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "251201",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS METÁLICOS PARA USO ESTRUCTURAL, TANQUES, DEPÓSITOS, RECIPIENTES DE METAL",
      "name": "FABRICACIÓN DE RECIPIENTES DE METAL PARA GASES COMPRIMIDOS O LICUADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "251209",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS METÁLICOS PARA USO ESTRUCTURAL, TANQUES, DEPÓSITOS, RECIPIENTES DE METAL",
      "name": "FABRICACIÓN DE TANQUES, DEPÓSITOS Y RECIPIENTES DE METAL N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "251300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PRODUCTOS METÁLICOS PARA USO ESTRUCTURAL, TANQUES, DEPÓSITOS, RECIPIENTES DE METAL",
      "name": "FABRICACIÓN DE GENERADORES DE VAPOR, EXCEPTO CALDERAS DE AGUA CALIENTE PARA CALEFACCIÓN CENTRAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "252000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE ARMAS Y MUNICIONES",
      "name": "FABRICACIÓN DE ARMAS Y MUNICIONES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "259100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS ELABORADOS DE METAL; ACTIVIDADES DE SERVICIOS DE TRABAJO DE METALES",
      "name": "FORJA, PRENSADO, ESTAMPADO Y LAMINADO DE METALES; PULVIMETALURGIA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "259200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS ELABORADOS DE METAL; ACTIVIDADES DE SERVICIOS DE TRABAJO DE METALES",
      "name": "TRATAMIENTO Y REVESTIMIENTO DE METALES; MAQUINADO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "259300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS ELABORADOS DE METAL; ACTIVIDADES DE SERVICIOS DE TRABAJO DE METALES",
      "name": "FABRICACIÓN DE ARTÍCULOS DE CUCHILLERÍA, HERRAMIENTAS DE MANO Y ARTÍCULOS DE FERRETERÍA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "259900",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS PRODUCTOS ELABORADOS DE METAL; ACTIVIDADES DE SERVICIOS DE TRABAJO DE METALES",
      "name": "FABRICACIÓN DE OTROS PRODUCTOS ELABORADOS DE METAL N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "261000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE COMPONENTES Y TABLEROS ELECTRÓNICOS",
      "name": "FABRICACIÓN DE COMPONENTES Y TABLEROS ELECTRÓNICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "262000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE COMPUTADORES Y EQUIPO PERIFÉRICO",
      "name": "FABRICACIÓN DE COMPUTADORES Y EQUIPO PERIFÉRICO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "263000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE EQUIPO DE COMUNICACIONES",
      "name": "FABRICACIÓN DE EQUIPO DE COMUNICACIONES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "264000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE APARATOS ELECTRÓNICOS DE CONSUMO",
      "name": "FABRICACIÓN DE APARATOS ELECTRÓNICOS DE CONSUMO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "265100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE EQUIPO DE MEDICIÓN, PRUEBA, NAVEGACIÓN Y CONTROL Y DE RELOJES",
      "name": "FABRICACIÓN DE EQUIPO DE MEDICIÓN, PRUEBA, NAVEGACIÓN Y CONTROL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "265200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE EQUIPO DE MEDICIÓN, PRUEBA, NAVEGACIÓN Y CONTROL Y DE RELOJES",
      "name": "FABRICACIÓN DE RELOJES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "266000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE EQUIPO DE IRRADIACIÓN Y EQUIPO ELECTRÓNICO DE USO MÉDICO Y TERAPÉUTICO",
      "name": "FABRICACIÓN DE EQUIPO DE IRRADIACIÓN Y EQUIPO ELECTRÓNICO DE USO MÉDICO Y TERAPÉUTICO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "267000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE INSTRUMENTOS ÓPTICOS Y EQUIPO FOTOGRÁFICO",
      "name": "FABRICACIÓN DE INSTRUMENTOS ÓPTICOS Y EQUIPO FOTOGRÁFICO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "268000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE SOPORTES MAGNÉTICOS Y ÓPTICOS",
      "name": "FABRICACIÓN DE SOPORTES MAGNÉTICOS Y ÓPTICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "271000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MOTORES, GENERADORES Y TRANSFORMADORES ELÉCTRICOS, APARATOS DE DISTRIBUCIÓN Y CONTROL",
      "name": "FABRICACIÓN DE MOTORES, GENERADORES Y TRANSFORMADORES ELÉCTRICOS, APARATOS DE DISTRIBUCIÓN Y CONTROL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "272000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PILAS, BATERÍAS Y ACUMULADORES",
      "name": "FABRICACIÓN DE PILAS, BATERÍAS Y ACUMULADORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "273100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE CABLES Y DISPOSITIVOS DE CABLEADO",
      "name": "FABRICACIÓN DE CABLES DE FIBRA ÓPTICA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "273200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE CABLES Y DISPOSITIVOS DE CABLEADO",
      "name": "FABRICACIÓN DE OTROS HILOS Y CABLES ELÉCTRICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "273300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE CABLES Y DISPOSITIVOS DE CABLEADO",
      "name": "FABRICACIÓN DE DISPOSITIVOS DE CABLEADO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "274000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE EQUIPO ELÉCTRICO DE ILUMINACIÓN",
      "name": "FABRICACIÓN DE EQUIPO ELÉCTRICO DE ILUMINACIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "275000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE APARATOS DE USO DOMÉSTICO",
      "name": "FABRICACIÓN DE APARATOS DE USO DOMÉSTICO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "279000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE OTROS TIPOS DE EQUIPO ELÉCTRICO",
      "name": "FABRICACIÓN DE OTROS TIPOS DE EQUIPO ELÉCTRICO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "281100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO GENERAL",
      "name": "FABRICACIÓN DE MOTORES Y TURBINAS, EXCEPTO PARA AERONAVES, VEHÍCULOS AUTOMOTORES Y MOTOCICLETAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "281200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO GENERAL",
      "name": "FABRICACIÓN DE EQUIPO DE PROPULSIÓN DE FLUIDOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "281300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO GENERAL",
      "name": "FABRICACIÓN DE OTRAS BOMBAS, COMPRESORES, GRIFOS Y VÁLVULAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "281400",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO GENERAL",
      "name": "FABRICACIÓN DE COJINETES, ENGRANAJES, TRENES DE ENGRANAJES Y PIEZAS DE TRANSMISIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "281500",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO GENERAL",
      "name": "FABRICACIÓN DE HORNOS, CALDERAS Y QUEMADORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "281600",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO GENERAL",
      "name": "FABRICACIÓN DE EQUIPO DE ELEVACIÓN Y MANIPULACIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "281700",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO GENERAL",
      "name": "FABRICACIÓN DE MAQUINARIA Y EQUIPO DE OFICINA (EXCEPTO COMPUTADORES Y EQUIPO PERIFÉRICO)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "281800",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO GENERAL",
      "name": "FABRICACIÓN DE HERRAMIENTAS DE MANO MOTORIZADAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "281900",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO GENERAL",
      "name": "FABRICACIÓN DE OTROS TIPOS DE MAQUINARIA DE USO GENERAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "282100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO ESPECIAL",
      "name": "FABRICACIÓN DE MAQUINARIA AGROPECUARIA Y FORESTAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "282200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO ESPECIAL",
      "name": "FABRICACIÓN DE MAQUINARIA PARA LA CONFORMACIÓN DE METALES Y DE MÁQUINAS HERRAMIENTA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "282300",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO ESPECIAL",
      "name": "FABRICACIÓN DE MAQUINARIA METALÚRGICA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "282400",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO ESPECIAL",
      "name": "FABRICACIÓN DE MAQUINARIA PARA LA EXPLOTACIÓN DE MINAS Y CANTERAS Y PARA OBRAS DE CONSTRUCCIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "282500",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO ESPECIAL",
      "name": "FABRICACIÓN DE MAQUINARIA PARA LA ELABORACIÓN DE ALIMENTOS, BEBIDAS Y TABACO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "282600",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO ESPECIAL",
      "name": "FABRICACIÓN DE MAQUINARIA PARA LA ELABORACIÓN DE PRODUCTOS TEXTILES, PRENDAS DE VESTIR Y CUEROS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "282900",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MAQUINARIA DE USO ESPECIAL",
      "name": "FABRICACIÓN DE OTROS TIPOS DE MAQUINARIA DE USO ESPECIAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "291000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE VEHÍCULOS AUTOMOTORES",
      "name": "FABRICACIÓN DE VEHÍCULOS AUTOMOTORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "292000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE CARROCERÍAS PARA VEHÍCULOS AUTOMOTORES; FABRICACIÓN DE REMOLQUES Y SEMIRREMOLQUES",
      "name": "FABRICACIÓN DE CARROCERÍAS PARA VEHÍCULOS AUTOMOTORES; FABRICACIÓN DE REMOLQUES Y SEMIRREMOLQUES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "293000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE PARTES, PIEZAS Y ACCESORIOS PARA VEHÍCULOS AUTOMOTORES",
      "name": "FABRICACIÓN DE PARTES, PIEZAS Y ACCESORIOS PARA VEHÍCULOS AUTOMOTORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "301100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "CONSTRUCCIÓN DE BUQUES Y OTRAS EMBARCACIONES",
      "name": "CONSTRUCCIÓN DE BUQUES, EMBARCACIONES MENORES Y ESTRUCTURAS FLOTANTES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "301200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "CONSTRUCCIÓN DE BUQUES Y OTRAS EMBARCACIONES",
      "name": "CONSTRUCCIÓN DE EMBARCACIONES DE RECREO Y DE DEPORTE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "302000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE LOCOMOTORAS Y MATERIAL RODANTE",
      "name": "FABRICACIÓN DE LOCOMOTORAS Y MATERIAL RODANTE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "303000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE AERONAVES, NAVES ESPACIALES Y MAQUINARIA CONEXA",
      "name": "FABRICACIÓN DE AERONAVES, NAVES ESPACIALES Y MAQUINARIA CONEXA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "304000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE VEHÍCULOS MILITARES DE COMBATE",
      "name": "FABRICACIÓN DE VEHÍCULOS MILITARES DE COMBATE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "309100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE EQUIPO DE TRANSPORTE N.C.P.",
      "name": "FABRICACIÓN DE MOTOCICLETAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "309200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE EQUIPO DE TRANSPORTE N.C.P.",
      "name": "FABRICACIÓN DE BICICLETAS Y DE SILLAS DE RUEDAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "309900",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE EQUIPO DE TRANSPORTE N.C.P.",
      "name": "FABRICACIÓN DE OTROS TIPOS DE EQUIPO DE TRANSPORTE N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "310001",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MUEBLES",
      "name": "FABRICACIÓN DE MUEBLES PRINCIPALMENTE DE MADERA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "310009",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE MUEBLES",
      "name": "FABRICACIÓN DE COLCHONES; FABRICACIÓN DE OTROS MUEBLES N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "321100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE JOYAS, BISUTERÍA Y ARTÍCULOS CONEXOS",
      "name": "FABRICACIÓN DE JOYAS Y ARTÍCULOS CONEXOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "321200",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE JOYAS, BISUTERÍA Y ARTÍCULOS CONEXOS",
      "name": "FABRICACIÓN DE BISUTERÍA Y ARTÍCULOS CONEXOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "322000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE INSTRUMENTOS MUSICALES",
      "name": "FABRICACIÓN DE INSTRUMENTOS MUSICALES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "323000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE ARTÍCULOS DE DEPORTE",
      "name": "FABRICACIÓN DE ARTÍCULOS DE DEPORTE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "324000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE JUEGOS Y JUGUETES",
      "name": "FABRICACIÓN DE JUEGOS Y JUGUETES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "325001",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE INSTRUMENTOS Y MATERIALES MÉDICOS Y ODONTOLÓGICOS",
      "name": "ACTIVIDADES DE LABORATORIOS DENTALES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "325009",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "FABRICACIÓN DE INSTRUMENTOS Y MATERIALES MÉDICOS Y ODONTOLÓGICOS",
      "name": "FABRICACIÓN DE INSTRUMENTOS Y MATERIALES MÉDICOS, OFTALMOLÓGICOS Y ODONTOLÓGICOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "329000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "OTRAS INDUSTRIAS MANUFACTURERAS N.C.P.",
      "name": "OTRAS INDUSTRIAS MANUFACTURERAS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331100",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331201",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE MAQUINARIA AGROPECUARIA Y FORESTAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331202",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE MAQUINARIA METALÚRGICA, PARA LA MINERÍA, EXTRACCIÓN DE PETRÓLEO Y PARA LA CONSTRUCCIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331203",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE MAQUINARIA PARA LA ELABORACIÓN DE ALIMENTOS, BEBIDAS Y TABACO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331204",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE MAQUINARIA PARA PRODUCIR TEXTILES, PRENDAS DE VESTIR, ARTÍCULOS DE CUERO Y CALZADO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331209",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE OTRO TIPO DE MAQUINARIA Y EQUIPOS INDUSTRIALES N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331301",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE EQUIPO DE MEDICIÓN, PRUEBA, NAVEGACIÓN Y CONTROL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331309",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE OTROS EQUIPOS ELECTRÓNICOS Y ÓPTICOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331400",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE EQUIPO ELÉCTRICO (EXCEPTO REPARACIÓN DE EQUIPO Y ENSERES DOMÉSTICOS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331501",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE BUQUES, EMBARCACIONES MENORES Y ESTRUCTURAS FLOTANTES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331502",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE AERONAVES Y NAVES ESPACIALES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331509",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE OTROS EQUIPOS DE TRANSPORTE N.C.P., EXCEPTO VEHÍCULOS AUTOMOTORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "331900",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "REPARACIÓN DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y EQUIPO",
      "name": "REPARACIÓN DE OTROS TIPOS DE EQUIPO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "332000",
      "group": "INDUSTRIA MANUFACTURERA",
      "subGroup": "INSTALACIÓN DE MAQUINARIA Y EQUIPOS INDUSTRIALES",
      "name": "INSTALACIÓN DE MAQUINARIA Y EQUIPOS INDUSTRIALES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "351011",
      "group": "SUMINISTRO DE ELECTRICIDAD, GAS, VAPOR Y AIRE ACONDICIONADO",
      "subGroup": "GENERACIÓN, TRANSMISIÓN Y DISTRIBUCIÓN DE ENERGÍA ELÉCTRICA",
      "name": "GENERACIÓN DE ENERGÍA ELÉCTRICA EN CENTRALES HIDROELÉCTRICAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "351012",
      "group": "SUMINISTRO DE ELECTRICIDAD, GAS, VAPOR Y AIRE ACONDICIONADO",
      "subGroup": "GENERACIÓN, TRANSMISIÓN Y DISTRIBUCIÓN DE ENERGÍA ELÉCTRICA",
      "name": "GENERACIÓN DE ENERGÍA ELÉCTRICA EN CENTRALES TERMOELÉCTRICAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "351019",
      "group": "SUMINISTRO DE ELECTRICIDAD, GAS, VAPOR Y AIRE ACONDICIONADO",
      "subGroup": "GENERACIÓN, TRANSMISIÓN Y DISTRIBUCIÓN DE ENERGÍA ELÉCTRICA",
      "name": "GENERACIÓN DE ENERGÍA ELÉCTRICA EN OTRAS CENTRALES N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "351020",
      "group": "SUMINISTRO DE ELECTRICIDAD, GAS, VAPOR Y AIRE ACONDICIONADO",
      "subGroup": "GENERACIÓN, TRANSMISIÓN Y DISTRIBUCIÓN DE ENERGÍA ELÉCTRICA",
      "name": "TRANSMISIÓN DE ENERGÍA ELÉCTRICA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "351030",
      "group": "SUMINISTRO DE ELECTRICIDAD, GAS, VAPOR Y AIRE ACONDICIONADO",
      "subGroup": "GENERACIÓN, TRANSMISIÓN Y DISTRIBUCIÓN DE ENERGÍA ELÉCTRICA",
      "name": "DISTRIBUCIÓN DE ENERGÍA ELÉCTRICA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "352010",
      "group": "SUMINISTRO DE ELECTRICIDAD, GAS, VAPOR Y AIRE ACONDICIONADO",
      "subGroup": "FABRICACIÓN DE GAS; DISTRIBUCIÓN DE COMBUSTIBLES GASEOSOS POR TUBERÍAS",
      "name": "REGASIFICACIÓN DE GAS NATURAL LICUADO (GNL)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "352020",
      "group": "SUMINISTRO DE ELECTRICIDAD, GAS, VAPOR Y AIRE ACONDICIONADO",
      "subGroup": "FABRICACIÓN DE GAS; DISTRIBUCIÓN DE COMBUSTIBLES GASEOSOS POR TUBERÍAS",
      "name": "FABRICACIÓN DE GAS; DISTRIBUCIÓN DE COMBUSTIBLES GASEOSOS POR TUBERÍA, EXCEPTO REGASIFICACIÓN DE GNL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "353001",
      "group": "SUMINISTRO DE ELECTRICIDAD, GAS, VAPOR Y AIRE ACONDICIONADO",
      "subGroup": "SUMINISTRO DE VAPOR Y DE AIRE ACONDICIONADO",
      "name": "SUMINISTRO DE VAPOR Y DE AIRE ACONDICIONADO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "353002",
      "group": "SUMINISTRO DE ELECTRICIDAD, GAS, VAPOR Y AIRE ACONDICIONADO",
      "subGroup": "SUMINISTRO DE VAPOR Y DE AIRE ACONDICIONADO",
      "name": "ELABORACIÓN DE HIELO (EXCEPTO FABRICACIÓN DE HIELO SECO)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "360000",
      "group": "SUMINISTRO DE AGUA; EVACUACIÓN DE AGUAS RESIDUALES, GESTIÓN DE DESECHOS Y DESCONTAMINACIÓN",
      "subGroup": "CAPTACIÓN, TRATAMIENTO Y DISTRIBUCIÓN DE AGUA",
      "name": "CAPTACIÓN, TRATAMIENTO Y DISTRIBUCIÓN DE AGUA",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "370000",
      "group": "SUMINISTRO DE AGUA; EVACUACIÓN DE AGUAS RESIDUALES, GESTIÓN DE DESECHOS Y DESCONTAMINACIÓN",
      "subGroup": "EVACUACIÓN DE AGUAS RESIDUALES",
      "name": "EVACUACIÓN Y TRATAMIENTO DE AGUAS SERVIDAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "381100",
      "group": "SUMINISTRO DE AGUA; EVACUACIÓN DE AGUAS RESIDUALES, GESTIÓN DE DESECHOS Y DESCONTAMINACIÓN",
      "subGroup": "RECOGIDA DE DESECHOS",
      "name": "RECOGIDA DE DESECHOS NO PELIGROSOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "381200",
      "group": "SUMINISTRO DE AGUA; EVACUACIÓN DE AGUAS RESIDUALES, GESTIÓN DE DESECHOS Y DESCONTAMINACIÓN",
      "subGroup": "RECOGIDA DE DESECHOS",
      "name": "RECOGIDA DE DESECHOS PELIGROSOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "382100",
      "group": "SUMINISTRO DE AGUA; EVACUACIÓN DE AGUAS RESIDUALES, GESTIÓN DE DESECHOS Y DESCONTAMINACIÓN",
      "subGroup": "TRATAMIENTO Y ELIMINACIÓN DE DESECHOS",
      "name": "TRATAMIENTO Y ELIMINACIÓN DE DESECHOS NO PELIGROSOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "382200",
      "group": "SUMINISTRO DE AGUA; EVACUACIÓN DE AGUAS RESIDUALES, GESTIÓN DE DESECHOS Y DESCONTAMINACIÓN",
      "subGroup": "TRATAMIENTO Y ELIMINACIÓN DE DESECHOS",
      "name": "TRATAMIENTO Y ELIMINACIÓN DE DESECHOS PELIGROSOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "383001",
      "group": "SUMINISTRO DE AGUA; EVACUACIÓN DE AGUAS RESIDUALES, GESTIÓN DE DESECHOS Y DESCONTAMINACIÓN",
      "subGroup": "RECUPERACIÓN DE MATERIALES",
      "name": "RECUPERACIÓN Y RECICLAMIENTO DE DESPERDICIOS Y DESECHOS METÁLICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "383002",
      "group": "SUMINISTRO DE AGUA; EVACUACIÓN DE AGUAS RESIDUALES, GESTIÓN DE DESECHOS Y DESCONTAMINACIÓN",
      "subGroup": "RECUPERACIÓN DE MATERIALES",
      "name": "RECUPERACIÓN Y RECICLAMIENTO DE PAPEL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "383003",
      "group": "SUMINISTRO DE AGUA; EVACUACIÓN DE AGUAS RESIDUALES, GESTIÓN DE DESECHOS Y DESCONTAMINACIÓN",
      "subGroup": "RECUPERACIÓN DE MATERIALES",
      "name": "RECUPERACIÓN Y RECICLAMIENTO DE VIDRIO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "383009",
      "group": "SUMINISTRO DE AGUA; EVACUACIÓN DE AGUAS RESIDUALES, GESTIÓN DE DESECHOS Y DESCONTAMINACIÓN",
      "subGroup": "RECUPERACIÓN DE MATERIALES",
      "name": "RECUPERACIÓN Y RECICLAMIENTO DE OTROS DESPERDICIOS Y DESECHOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "390000",
      "group": "SUMINISTRO DE AGUA; EVACUACIÓN DE AGUAS RESIDUALES, GESTIÓN DE DESECHOS Y DESCONTAMINACIÓN",
      "subGroup": "ACTIVIDADES DE DESCONTAMINACIÓN Y OTROS SERVICIOS DE GESTIÓN DE DESECHOS",
      "name": "ACTIVIDADES DE DESCONTAMINACIÓN Y OTROS SERVICIOS DE GESTIÓN DE DESECHOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "410010",
      "group": "CONSTRUCCIÓN",
      "subGroup": "CONSTRUCCIÓN DE EDIFICIOS",
      "name": "CONSTRUCCIÓN DE EDIFICIOS PARA USO RESIDENCIAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "410020",
      "group": "CONSTRUCCIÓN",
      "subGroup": "CONSTRUCCIÓN DE EDIFICIOS",
      "name": "CONSTRUCCIÓN DE EDIFICIOS PARA USO NO RESIDENCIAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "421000",
      "group": "CONSTRUCCIÓN",
      "subGroup": "CONSTRUCCIÓN DE CARRETERAS Y LÍNEAS DE FERROCARRIL",
      "name": "CONSTRUCCIÓN DE CARRETERAS Y LÍNEAS DE FERROCARRIL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "422000",
      "group": "CONSTRUCCIÓN",
      "subGroup": "CONSTRUCCIÓN DE PROYECTOS DE SERVICIO PÚBLICO",
      "name": "CONSTRUCCIÓN DE PROYECTOS DE SERVICIO PÚBLICO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "429000",
      "group": "CONSTRUCCIÓN",
      "subGroup": "CONSTRUCCIÓN DE OTRAS OBRAS DE INGENIERÍA CIVIL",
      "name": "CONSTRUCCIÓN DE OTRAS OBRAS DE INGENIERÍA CIVIL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "431100",
      "group": "CONSTRUCCIÓN",
      "subGroup": "DEMOLICIÓN Y PREPARACIÓN DEL TERRENO",
      "name": "DEMOLICIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "431200",
      "group": "CONSTRUCCIÓN",
      "subGroup": "DEMOLICIÓN Y PREPARACIÓN DEL TERRENO",
      "name": "PREPARACIÓN DEL TERRENO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "432100",
      "group": "CONSTRUCCIÓN",
      "subGroup": "INSTALACIONES ELÉCTRICAS, DE GASFITERÍA Y OTRAS INSTALACIONES PARA OBRAS DE CONSTRUCCIÓN",
      "name": "INSTALACIONES ELÉCTRICAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "432200",
      "group": "CONSTRUCCIÓN",
      "subGroup": "INSTALACIONES ELÉCTRICAS, DE GASFITERÍA Y OTRAS INSTALACIONES PARA OBRAS DE CONSTRUCCIÓN",
      "name": "INSTALACIONES DE GASFITERÍA, CALEFACCIÓN Y AIRE ACONDICIONADO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "432900",
      "group": "CONSTRUCCIÓN",
      "subGroup": "INSTALACIONES ELÉCTRICAS, DE GASFITERÍA Y OTRAS INSTALACIONES PARA OBRAS DE CONSTRUCCIÓN",
      "name": "OTRAS INSTALACIONES PARA OBRAS DE CONSTRUCCIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "433000",
      "group": "CONSTRUCCIÓN",
      "subGroup": "TERMINACIÓN Y ACABADO DE EDIFICIOS",
      "name": "TERMINACIÓN Y ACABADO DE EDIFICIOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "439000",
      "group": "CONSTRUCCIÓN",
      "subGroup": "OTRAS ACTIVIDADES ESPECIALIZADAS DE CONSTRUCCIÓN",
      "name": "OTRAS ACTIVIDADES ESPECIALIZADAS DE CONSTRUCCIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "451001",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA DE VEHÍCULOS AUTOMOTORES",
      "name": "VENTA AL POR MAYOR DE VEHÍCULOS AUTOMOTORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "451002",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA DE VEHÍCULOS AUTOMOTORES",
      "name": "VENTA AL POR MENOR DE VEHÍCULOS AUTOMOTORES NUEVOS O USADOS (INCLUYE COMPRAVENTA)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "452001",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "MANTENIMIENTO Y REPARACIÓN DE VEHÍCULOS AUTOMOTORES",
      "name": "SERVICIO DE LAVADO DE VEHÍCULOS AUTOMOTORES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "452002",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "MANTENIMIENTO Y REPARACIÓN DE VEHÍCULOS AUTOMOTORES",
      "name": "MANTENIMIENTO Y REPARACIÓN DE VEHÍCULOS AUTOMOTORES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "453000",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA DE PARTES, PIEZAS Y ACCESORIOS PARA VEHÍCULOS AUTOMOTORES",
      "name": "VENTA DE PARTES, PIEZAS Y ACCESORIOS PARA VEHÍCULOS AUTOMOTORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "454001",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA, MANTENIMIENTO Y REPARACIÓN DE MOTOCICLETAS Y SUS PARTES, PIEZAS Y ACCESORIOS",
      "name": "VENTA DE MOTOCICLETAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "454002",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA, MANTENIMIENTO Y REPARACIÓN DE MOTOCICLETAS Y SUS PARTES, PIEZAS Y ACCESORIOS",
      "name": "VENTA DE PARTES, PIEZAS Y ACCESORIOS DE MOTOCICLETAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "454003",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA, MANTENIMIENTO Y REPARACIÓN DE MOTOCICLETAS Y SUS PARTES, PIEZAS Y ACCESORIOS",
      "name": "MANTENIMIENTO Y REPARACIÓN DE MOTOCICLETAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "461001",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR A CAMBIO DE UNA RETRIBUCIÓN O POR CONTRATA",
      "name": "CORRETAJE AL POR MAYOR DE PRODUCTOS AGRÍCOLAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "461002",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR A CAMBIO DE UNA RETRIBUCIÓN O POR CONTRATA",
      "name": "CORRETAJE AL POR MAYOR DE GANADO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "461009",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR A CAMBIO DE UNA RETRIBUCIÓN O POR CONTRATA",
      "name": "OTROS TIPOS DE CORRETAJES O REMATES AL POR MAYOR N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "462010",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE MATERIAS PRIMAS AGROPECUARIAS Y ANIMALES VIVOS",
      "name": "VENTA AL POR MAYOR DE MATERIAS PRIMAS AGRÍCOLAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "462020",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE MATERIAS PRIMAS AGROPECUARIAS Y ANIMALES VIVOS",
      "name": "VENTA AL POR MAYOR DE ANIMALES VIVOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "462090",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE MATERIAS PRIMAS AGROPECUARIAS Y ANIMALES VIVOS",
      "name": "VENTA AL POR MAYOR DE OTRAS MATERIAS PRIMAS AGROPECUARIAS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "463011",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ALIMENTOS, BEBIDAS Y TABACO",
      "name": "VENTA AL POR MAYOR DE FRUTAS Y VERDURAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "463012",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ALIMENTOS, BEBIDAS Y TABACO",
      "name": "VENTA AL POR MAYOR DE CARNE Y PRODUCTOS CÁRNICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "463013",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ALIMENTOS, BEBIDAS Y TABACO",
      "name": "VENTA AL POR MAYOR DE PRODUCTOS DEL MAR (PESCADOS, MARISCOS Y ALGAS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "463014",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ALIMENTOS, BEBIDAS Y TABACO",
      "name": "VENTA AL POR MAYOR DE PRODUCTOS DE CONFITERÍA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "463019",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ALIMENTOS, BEBIDAS Y TABACO",
      "name": "VENTA AL POR MAYOR DE HUEVOS, LÁCTEOS, ABARROTES Y DE OTROS ALIMENTOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "463020",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ALIMENTOS, BEBIDAS Y TABACO",
      "name": "VENTA AL POR MAYOR DE BEBIDAS ALCOHÓLICAS Y NO ALCOHÓLICAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "463030",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ALIMENTOS, BEBIDAS Y TABACO",
      "name": "VENTA AL POR MAYOR DE TABACO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "464100",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ENSERES DOMÉSTICOS",
      "name": "VENTA AL POR MAYOR DE PRODUCTOS TEXTILES, PRENDAS DE VESTIR Y CALZADO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "464901",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ENSERES DOMÉSTICOS",
      "name": "VENTA AL POR MAYOR DE MUEBLES, EXCEPTO MUEBLES DE OFICINA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "464902",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ENSERES DOMÉSTICOS",
      "name": "VENTA AL POR MAYOR DE ARTÍCULOS ELÉCTRICOS Y ELECTRÓNICOS PARA EL HOGAR",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "464903",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ENSERES DOMÉSTICOS",
      "name": "VENTA AL POR MAYOR DE ARTÍCULOS DE PERFUMERÍA, DE TOCADOR Y COSMÉTICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "464904",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ENSERES DOMÉSTICOS",
      "name": "VENTA AL POR MAYOR DE ARTÍCULOS DE PAPELERÍA Y ESCRITORIO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "464905",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ENSERES DOMÉSTICOS",
      "name": "VENTA AL POR MAYOR DE LIBROS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "464906",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ENSERES DOMÉSTICOS",
      "name": "VENTA AL POR MAYOR DE DIARIOS Y REVISTAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "464907",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ENSERES DOMÉSTICOS",
      "name": "VENTA AL POR MAYOR DE PRODUCTOS FARMACÉUTICOS Y MEDICINALES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "464908",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ENSERES DOMÉSTICOS",
      "name": "VENTA AL POR MAYOR DE INSTRUMENTOS CIENTÍFICOS Y QUIRÚRGICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "464909",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE ENSERES DOMÉSTICOS",
      "name": "VENTA AL POR MAYOR DE OTROS ENSERES DOMÉSTICOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "465100",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE MAQUINARIA, EQUIPO Y MATERIALES",
      "name": "VENTA AL POR MAYOR DE COMPUTADORES, EQUIPO PERIFÉRICO Y PROGRAMAS INFORMÁTICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "465200",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE MAQUINARIA, EQUIPO Y MATERIALES",
      "name": "VENTA AL POR MAYOR DE EQUIPO, PARTES Y PIEZAS ELECTRÓNICOS Y DE TELECOMUNICACIONES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "465300",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE MAQUINARIA, EQUIPO Y MATERIALES",
      "name": "VENTA AL POR MAYOR DE MAQUINARIA, EQUIPO Y MATERIALES AGROPECUARIOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "465901",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE MAQUINARIA, EQUIPO Y MATERIALES",
      "name": "VENTA AL POR MAYOR DE MAQUINARIA METALÚRGICA, PARA LA MINERÍA, EXTRACCIÓN DE PETRÓLEO Y CONSTRUCCIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "465902",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE MAQUINARIA, EQUIPO Y MATERIALES",
      "name": "VENTA AL POR MAYOR DE MAQUINARIA PARA LA ELABORACIÓN DE ALIMENTOS, BEBIDAS Y TABACO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "465903",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE MAQUINARIA, EQUIPO Y MATERIALES",
      "name": "VENTA AL POR MAYOR DE MAQUINARIA PARA LA INDUSTRIA TEXTIL, DEL CUERO Y DEL CALZADO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "465904",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE MAQUINARIA, EQUIPO Y MATERIALES",
      "name": "VENTA AL POR MAYOR DE MAQUINARIA Y EQUIPO DE OFICINA; VENTA AL POR MAYOR DE MUEBLES DE OFICINA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "465905",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE MAQUINARIA, EQUIPO Y MATERIALES",
      "name": "VENTA AL POR MAYOR DE EQUIPO DE TRANSPORTE(EXCEPTO VEHÍCULOS AUTOMOTORES, MOTOCICLETAS Y BICICLETAS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "465909",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR DE MAQUINARIA, EQUIPO Y MATERIALES",
      "name": "VENTA AL POR MAYOR DE OTROS TIPOS DE MAQUINARIA Y EQUIPO N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "466100",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "OTRAS ACTIVIDADES DE VENTA AL POR MAYOR ESPECIALIZADA",
      "name": "VENTA AL POR MAYOR DE COMBUSTIBLES SÓLIDOS, LÍQUIDOS Y GASEOSOS Y PRODUCTOS CONEXOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "466200",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "OTRAS ACTIVIDADES DE VENTA AL POR MAYOR ESPECIALIZADA",
      "name": "VENTA AL POR MAYOR DE METALES Y MINERALES METALÍFEROS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "466301",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "OTRAS ACTIVIDADES DE VENTA AL POR MAYOR ESPECIALIZADA",
      "name": "VENTA AL POR MAYOR DE MADERA EN BRUTO Y PRODUCTOS PRIMARIOS DE LA ELABORACIÓN DE MADERA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "466302",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "OTRAS ACTIVIDADES DE VENTA AL POR MAYOR ESPECIALIZADA",
      "name": "VENTA AL POR MAYOR DE MATERIALES DE CONSTRUCCIÓN, ARTÍCULOS DE FERRETERÍA, GASFITERÍA Y CALEFACCIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "466901",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "OTRAS ACTIVIDADES DE VENTA AL POR MAYOR ESPECIALIZADA",
      "name": "VENTA AL POR MAYOR DE PRODUCTOS QUÍMICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "466902",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "OTRAS ACTIVIDADES DE VENTA AL POR MAYOR ESPECIALIZADA",
      "name": "VENTA AL POR MAYOR DE DESECHOS METÁLICOS (CHATARRA)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "466909",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "OTRAS ACTIVIDADES DE VENTA AL POR MAYOR ESPECIALIZADA",
      "name": "VENTA AL POR MAYOR DE DESPERDICIOS, DESECHOS Y OTROS PRODUCTOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "469000",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MAYOR NO ESPECIALIZADA",
      "name": "VENTA AL POR MAYOR NO ESPECIALIZADA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "471100",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR EN COMERCIOS NO ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR EN COMERCIOS DE ALIMENTOS, BEBIDAS O TABACO (SUPERMERCADOS E HIPERMERCADOS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "471910",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR EN COMERCIOS NO ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR EN COMERCIOS DE VESTUARIO Y PRODUCTOS PARA EL HOGAR (GRANDES TIENDAS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "471990",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR EN COMERCIOS NO ESPECIALIZADOS",
      "name": "OTRAS ACTIVIDADES DE VENTA AL POR MENOR EN COMERCIOS NO ESPECIALIZADOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "472101",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE ALIMENTOS, BEBIDAS Y TABACO EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE ALIMENTOS EN COMERCIOS ESPECIALIZADOS (ALMACENES PEQUEÑOS Y MINIMARKET)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "472102",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE ALIMENTOS, BEBIDAS Y TABACO EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR EN COMERCIOS ESPECIALIZADOS DE CARNE Y PRODUCTOS CÁRNICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "472103",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE ALIMENTOS, BEBIDAS Y TABACO EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR EN COMERCIOS ESPECIALIZADOS DE FRUTAS Y VERDURAS (VERDULERÍAS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "472104",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE ALIMENTOS, BEBIDAS Y TABACO EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR EN COMERCIOS ESPECIALIZADOS DE PESCADO, MARISCOS Y PRODUCTOS CONEXOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "472105",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE ALIMENTOS, BEBIDAS Y TABACO EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR EN COMERCIOS ESPECIALIZADOS DE PRODUCTOS DE PANADERÍA Y PASTELERÍA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "472109",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE ALIMENTOS, BEBIDAS Y TABACO EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR EN COMERCIOS ESPECIALIZADOS DE HUEVOS, CONFITES Y PRODUCTOS ALIMENTICIOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "472200",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE ALIMENTOS, BEBIDAS Y TABACO EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE BEBIDAS ALCOHÓLICAS Y NO ALCOHÓLICAS EN COMERCIOS ESPECIALIZADOS (BOTILLERÍAS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "472300",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE ALIMENTOS, BEBIDAS Y TABACO EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE TABACO Y PRODUCTOS DE TABACO EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "473000",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE COMBUSTIBLES PARA VEHÍCULOS AUTOMOTORES EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE COMBUSTIBLES PARA VEHÍCULOS AUTOMOTORES EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "474100",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE COMBUSTIBLES PARA VEHÍCULOS AUTOMOTORES EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE COMPUTADORES, EQUIPO PERIFÉRICO, PROGRAMAS INFORMÁTICOS Y EQUIPO DE TELECOM.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "474200",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE COMBUSTIBLES PARA VEHÍCULOS AUTOMOTORES EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE EQUIPO DE SONIDO Y DE VIDEO EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "475100",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS ENSERES DOMÉSTICOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE TELAS, LANAS, HILOS Y SIMILARES EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "475201",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS ENSERES DOMÉSTICOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE ARTÍCULOS DE FERRETERÍA Y MATERIALES DE CONSTRUCCIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "475202",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS ENSERES DOMÉSTICOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE PINTURAS, BARNICES Y LACAS EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "475203",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS ENSERES DOMÉSTICOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE PRODUCTOS DE VIDRIO EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "475300",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS ENSERES DOMÉSTICOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE TAPICES, ALFOMBRAS Y CUBRIMIENTOS PARA PAREDES Y PISOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "475901",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS ENSERES DOMÉSTICOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE MUEBLES Y COLCHONES EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "475902",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS ENSERES DOMÉSTICOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE INSTRUMENTOS MUSICALES EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "475909",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS ENSERES DOMÉSTICOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE APARATOS ELÉCTRICOS, TEXTILES PARA EL HOGAR Y OTROS ENSERES DOMÉSTICOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "476101",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE PRODUCTOS CULTURALES Y RECREATIVOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE LIBROS EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "476102",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE PRODUCTOS CULTURALES Y RECREATIVOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE DIARIOS Y REVISTAS EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "476103",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE PRODUCTOS CULTURALES Y RECREATIVOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE ARTÍCULOS DE PAPELERÍA Y ESCRITORIO EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "476200",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE PRODUCTOS CULTURALES Y RECREATIVOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE GRABACIONES DE MÚSICA Y DE VIDEO EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "476301",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE PRODUCTOS CULTURALES Y RECREATIVOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE ARTÍCULOS DE CAZA Y PESCA EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "476302",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE PRODUCTOS CULTURALES Y RECREATIVOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE BICICLETAS Y SUS REPUESTOS EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "476309",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE PRODUCTOS CULTURALES Y RECREATIVOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE OTROS ARTÍCULOS Y EQUIPOS DE DEPORTE N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "476400",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE PRODUCTOS CULTURALES Y RECREATIVOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE JUEGOS Y JUGUETES EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477101",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE CALZADO EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477102",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE PRENDAS Y ACCESORIOS DE VESTIR EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477103",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE CARTERAS, MALETAS Y OTROS ACCESORIOS DE VIAJE EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477201",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE PRODUCTOS FARMACÉUTICOS Y MEDICINALES EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477202",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE ARTÍCULOS ORTOPÉDICOS EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477203",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE ARTÍCULOS DE PERFUMERÍA, DE TOCADOR Y COSMÉTICOS EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477310",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE GAS LICUADO EN BOMBONAS (CILINDROS) EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477391",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE ALIMENTO Y ACCESORIOS PARA MASCOTAS EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477392",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE ARMAS Y MUNICIONES EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477393",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE ARTÍCULOS ÓPTICOS EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477394",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE ARTÍCULOS DE JOYERÍA, BISUTERÍA Y RELOJERÍA EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477395",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE CARBÓN, LEÑA Y OTROS COMBUSTIBLES DE USO DOMÉSTICO EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477396",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE RECUERDOS, ARTESANÍAS Y ARTÍCULOS RELIGIOSOS EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477397",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE FLORES, PLANTAS, ARBOLES, SEMILLAS Y ABONOS EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477398",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE MASCOTAS EN COMERCIOS ESPECIALIZADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477399",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477401",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE ANTIGÜEDADES EN COMERCIOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477402",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE ROPA USADA EN COMERCIOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "477409",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS",
      "name": "VENTA AL POR MENOR DE OTROS ARTÍCULOS DE SEGUNDA MANO EN COMERCIOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "478100",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR EN PUESTOS DE VENTA Y MERCADOS",
      "name": "VENTA AL POR MENOR DE ALIMENTOS, BEBIDAS Y TABACO EN PUESTOS DE VENTA Y MERCADOS (INCLUYE FERIAS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "478200",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR EN PUESTOS DE VENTA Y MERCADOS",
      "name": "VENTA AL POR MENOR DE PRODUCTOS TEXTILES, PRENDAS DE VESTIR Y CALZADO EN PUESTOS DE VENTA Y MERCADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "478900",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR EN PUESTOS DE VENTA Y MERCADOS",
      "name": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN PUESTOS DE VENTA Y MERCADOS (INCLUYE FERIAS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "479100",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR NO REALIZADA EN COMERCIOS, PUESTOS DE VENTA O MERCADOS",
      "name": "VENTA AL POR MENOR POR CORREO, POR INTERNET Y VÍA TELEFÓNICA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "479901",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR NO REALIZADA EN COMERCIOS, PUESTOS DE VENTA O MERCADOS",
      "name": "VENTA AL POR MENOR REALIZADA POR INDEPENDIENTES EN LA LOCOMOCIÓN COLECTIVA (LEY 20.388)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "479902",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR NO REALIZADA EN COMERCIOS, PUESTOS DE VENTA O MERCADOS",
      "name": "VENTA AL POR MENOR MEDIANTE MAQUINAS EXPENDEDORAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "479903",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR NO REALIZADA EN COMERCIOS, PUESTOS DE VENTA O MERCADOS",
      "name": "VENTA AL POR MENOR POR COMISIONISTAS (NO DEPENDIENTES DE COMERCIOS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "479909",
      "group": "COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACIÓN DE VEHICULOS AUTOMOTORES Y MOTOCICLETAS",
      "subGroup": "VENTA AL POR MENOR NO REALIZADA EN COMERCIOS, PUESTOS DE VENTA O MERCADOS",
      "name": "OTRAS ACTIVIDADES DE VENTA POR MENOR NO REALIZADAS EN COMERCIOS, PUESTOS DE VENTA O MERCADOS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "491100",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "TRANSPORTE POR FERROCARRIL",
      "name": "TRANSPORTE INTERURBANO DE PASAJEROS POR FERROCARRIL",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "491200",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "TRANSPORTE POR FERROCARRIL",
      "name": "TRANSPORTE DE CARGA POR FERROCARRIL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "492110",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "OTRAS ACTIVIDADES DE TRANSPORTE POR VÍA TERRESTRE",
      "name": "TRANSPORTE URBANO Y SUBURBANO DE PASAJEROS VÍA METRO Y METROTREN",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "492120",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "OTRAS ACTIVIDADES DE TRANSPORTE POR VÍA TERRESTRE",
      "name": "TRANSPORTE URBANO Y SUBURBANO DE PASAJEROS VÍA LOCOMOCIÓN COLECTIVA",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "492130",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "OTRAS ACTIVIDADES DE TRANSPORTE POR VÍA TERRESTRE",
      "name": "TRANSPORTE DE PASAJEROS VÍA TAXI COLECTIVO",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "492190",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "OTRAS ACTIVIDADES DE TRANSPORTE POR VÍA TERRESTRE",
      "name": "OTRAS ACTIVIDADES DE TRANSPORTE URBANO Y SUBURBANO DE PASAJEROS POR VÍA TERRESTRE N.C.P.",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "492210",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "OTRAS ACTIVIDADES DE TRANSPORTE POR VÍA TERRESTRE",
      "name": "SERVICIOS DE TRANSPORTE DE ESCOLARES",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "492220",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "OTRAS ACTIVIDADES DE TRANSPORTE POR VÍA TERRESTRE",
      "name": "SERVICIOS DE TRANSPORTE DE TRABAJADORES",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "492230",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "OTRAS ACTIVIDADES DE TRANSPORTE POR VÍA TERRESTRE",
      "name": "SERVICIOS DE TRANSPORTE DE PASAJEROS EN TAXIS LIBRES Y RADIOTAXIS",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "492240",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "OTRAS ACTIVIDADES DE TRANSPORTE POR VÍA TERRESTRE",
      "name": "SERVICIOS DE TRANSPORTE A TURISTAS",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "492250",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "OTRAS ACTIVIDADES DE TRANSPORTE POR VÍA TERRESTRE",
      "name": "TRANSPORTE DE PASAJEROS EN BUSES INTERURBANOS",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "492290",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "OTRAS ACTIVIDADES DE TRANSPORTE POR VÍA TERRESTRE",
      "name": "OTRAS ACTIVIDADES DE TRANSPORTE DE PASAJEROS POR VÍA TERRESTRE N.C.P.",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "492300",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "OTRAS ACTIVIDADES DE TRANSPORTE POR VÍA TERRESTRE",
      "name": "TRANSPORTE DE CARGA POR CARRETERA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "493010",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "TRANSPORTE POR TUBERÍAS",
      "name": "TRANSPORTE POR OLEODUCTOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "493020",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "TRANSPORTE POR TUBERÍAS",
      "name": "TRANSPORTE POR GASODUCTOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "493090",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "TRANSPORTE POR TUBERÍAS",
      "name": "OTRAS ACTIVIDADES DE TRANSPORTE POR TUBERÍAS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "501100",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "TRANSPORTE MARÍTIMO Y DE CABOTAJE",
      "name": "TRANSPORTE DE PASAJEROS MARÍTIMO Y DE CABOTAJE",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "501200",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "TRANSPORTE MARÍTIMO Y DE CABOTAJE",
      "name": "TRANSPORTE DE CARGA MARÍTIMO Y DE CABOTAJE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "502100",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "TRANSPORTE POR VÍAS DE NAVEGACIÓN INTERIORES",
      "name": "TRANSPORTE DE PASAJEROS POR VÍAS DE NAVEGACIÓN INTERIORES",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "502200",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "TRANSPORTE POR VÍAS DE NAVEGACIÓN INTERIORES",
      "name": "TRANSPORTE DE CARGA POR VÍAS DE NAVEGACIÓN INTERIORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "511000",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "TRANSPORTE DE PASAJEROS POR VÍA AÉREA",
      "name": "TRANSPORTE DE PASAJEROS POR VÍA AÉREA",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "512000",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "TRANSPORTE DE CARGA POR VÍA AÉREA",
      "name": "TRANSPORTE DE CARGA POR VÍA AÉREA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "521001",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ALMACENAMIENTO Y DEPÓSITO",
      "name": "EXPLOTACIÓN DE FRIGORÍFICOS PARA ALMACENAMIENTO Y DEPÓSITO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "521009",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ALMACENAMIENTO Y DEPÓSITO",
      "name": "OTROS SERVICIOS DE ALMACENAMIENTO Y DEPÓSITO N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "522110",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ACTIVIDADES DE APOYO AL TRANSPORTE",
      "name": "EXPLOTACIÓN DE TERMINALES TERRESTRES DE PASAJEROS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "522120",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ACTIVIDADES DE APOYO AL TRANSPORTE",
      "name": "EXPLOTACIÓN DE ESTACIONAMIENTOS DE VEHÍCULOS AUTOMOTORES Y PARQUÍMETROS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "522130",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ACTIVIDADES DE APOYO AL TRANSPORTE",
      "name": "SERVICIOS PRESTADOS POR CONCESIONARIOS DE CARRETERAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "522190",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ACTIVIDADES DE APOYO AL TRANSPORTE",
      "name": "ACTIVIDADES DE SERVICIOS VINCULADAS AL TRANSPORTE TERRESTRE N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "522200",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ACTIVIDADES DE APOYO AL TRANSPORTE",
      "name": "ACTIVIDADES DE SERVICIOS VINCULADAS AL TRANSPORTE ACUÁTICO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "522300",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ACTIVIDADES DE APOYO AL TRANSPORTE",
      "name": "ACTIVIDADES DE SERVICIOS VINCULADAS AL TRANSPORTE AÉREO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "522400",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ACTIVIDADES DE APOYO AL TRANSPORTE",
      "name": "MANIPULACIÓN DE LA CARGA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "522910",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ACTIVIDADES DE APOYO AL TRANSPORTE",
      "name": "AGENCIAS DE ADUANAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "522920",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ACTIVIDADES DE APOYO AL TRANSPORTE",
      "name": "AGENCIAS DE NAVES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "522990",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ACTIVIDADES DE APOYO AL TRANSPORTE",
      "name": "OTRAS ACTIVIDADES DE APOYO AL TRANSPORTE N.C.P.",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "531000",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ACTIVIDADES POSTALES",
      "name": "ACTIVIDADES POSTALES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "532000",
      "group": "TRANSPORTE Y ALMACENAMIENTO",
      "subGroup": "ACTIVIDADES DE MENSAJERÍA",
      "name": "ACTIVIDADES DE MENSAJERÍA",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "551001",
      "group": "ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS",
      "subGroup": "ACTIVIDADES DE ALOJAMIENTO PARA ESTANCIAS CORTAS",
      "name": "ACTIVIDADES DE HOTELES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "551002",
      "group": "ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS",
      "subGroup": "ACTIVIDADES DE ALOJAMIENTO PARA ESTANCIAS CORTAS",
      "name": "ACTIVIDADES DE MOTELES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "551003",
      "group": "ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS",
      "subGroup": "ACTIVIDADES DE ALOJAMIENTO PARA ESTANCIAS CORTAS",
      "name": "ACTIVIDADES DE RESIDENCIALES PARA TURISTAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "551009",
      "group": "ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS",
      "subGroup": "ACTIVIDADES DE ALOJAMIENTO PARA ESTANCIAS CORTAS",
      "name": "OTRAS ACTIVIDADES DE ALOJAMIENTO PARA TURISTAS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "552000",
      "group": "ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS",
      "subGroup": "ACTIVIDADES DE CAMPAMENTOS, PARQUES DE VEHÍCULOS DE RECREO Y PARQUES DE CARAVANAS",
      "name": "ACTIVIDADES DE CAMPING Y DE PARQUES PARA CASAS RODANTES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "559001",
      "group": "ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS",
      "subGroup": "OTRAS ACTIVIDADES DE ALOJAMIENTO",
      "name": "ACTIVIDADES DE RESIDENCIALES PARA ESTUDIANTES Y TRABAJADORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "559009",
      "group": "ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS",
      "subGroup": "OTRAS ACTIVIDADES DE ALOJAMIENTO",
      "name": "OTRAS ACTIVIDADES DE ALOJAMIENTO N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "561000",
      "group": "ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS",
      "subGroup": "ACTIVIDADES DE RESTAURANTES Y DE SERVICIO MÓVIL DE COMIDAS",
      "name": "ACTIVIDADES DE RESTAURANTES Y DE SERVICIO MÓVIL DE COMIDAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "562100",
      "group": "ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS",
      "subGroup": "SUMINISTRO DE COMIDAS POR ENCARGO Y OTRAS ACTIVIDADES DE SERVICIO DE COMIDAS",
      "name": "SUMINISTRO DE COMIDAS POR ENCARGO (SERVICIOS DE BANQUETERÍA)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "562900",
      "group": "ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS",
      "subGroup": "SUMINISTRO DE COMIDAS POR ENCARGO Y OTRAS ACTIVIDADES DE SERVICIO DE COMIDAS",
      "name": "SUMINISTRO INDUSTRIAL DE COMIDAS POR ENCARGO; CONCESIÓN DE SERVICIOS DE ALIMENTACIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "563001",
      "group": "ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS",
      "subGroup": "ACTIVIDADES DE SERVICIO DE BEBIDAS",
      "name": "ACTIVIDADES DE DISCOTECAS Y CABARET (NIGHT CLUB), CON PREDOMINIO DEL SERVICIO DE BEBIDAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "563009",
      "group": "ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS",
      "subGroup": "ACTIVIDADES DE SERVICIO DE BEBIDAS",
      "name": "OTRAS ACTIVIDADES DE SERVICIO DE BEBIDAS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "581100",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "EDICIÓN DE LIBROS Y PUBLICACIONES PERIÓDICAS Y OTRAS ACTIVIDADES DE EDICIÓN",
      "name": "EDICIÓN DE LIBROS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "581200",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "EDICIÓN DE LIBROS Y PUBLICACIONES PERIÓDICAS Y OTRAS ACTIVIDADES DE EDICIÓN",
      "name": "EDICIÓN DE DIRECTORIOS Y LISTAS DE CORREO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "581300",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "EDICIÓN DE LIBROS Y PUBLICACIONES PERIÓDICAS Y OTRAS ACTIVIDADES DE EDICIÓN",
      "name": "EDICIÓN DE DIARIOS, REVISTAS Y OTRAS PUBLICACIONES PERIÓDICAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "581900",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "EDICIÓN DE LIBROS Y PUBLICACIONES PERIÓDICAS Y OTRAS ACTIVIDADES DE EDICIÓN",
      "name": "OTRAS ACTIVIDADES DE EDICIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "582000",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "EDICIÓN DE PROGRAMAS INFORMÁTICOS",
      "name": "EDICIÓN DE PROGRAMAS INFORMÁTICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "591100",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE PRODUCCIÓN DE PELÍCULAS CINEMATOGRÁFICAS, VIDEOS Y PROGRAMAS DE TELEVISIÓN",
      "name": "ACTIVIDADES DE PRODUCCIÓN DE PELÍCULAS CINEMATOGRÁFICAS, VIDEOS Y PROGRAMAS DE TELEVISIÓN",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "591200",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE PRODUCCIÓN DE PELÍCULAS CINEMATOGRÁFICAS, VIDEOS Y PROGRAMAS DE TELEVISIÓN",
      "name": "ACTIVIDADES DE POSTPRODUCCIÓN DE PELÍCULAS CINEMATOGRÁFICAS, VIDEOS Y PROGRAMAS DE TELEVISIÓN",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "591300",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE PRODUCCIÓN DE PELÍCULAS CINEMATOGRÁFICAS, VIDEOS Y PROGRAMAS DE TELEVISIÓN",
      "name": "ACTIVIDADES DE DISTRIBUCIÓN DE PELÍCULAS CINEMATOGRÁFICAS, VIDEOS Y PROGRAMAS DE TELEVISIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "591400",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE PRODUCCIÓN DE PELÍCULAS CINEMATOGRÁFICAS, VIDEOS Y PROGRAMAS DE TELEVISIÓN",
      "name": "ACTIVIDADES DE EXHIBICIÓN DE PELÍCULAS CINEMATOGRÁFICAS Y CINTAS DE VIDEO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "592000",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE GRABACIÓN DE SONIDO Y EDICIÓN DE MÚSICA",
      "name": "ACTIVIDADES DE GRABACIÓN DE SONIDO Y EDICIÓN DE MÚSICA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "601000",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "TRANSMISIONES DE RADIO",
      "name": "TRANSMISIONES DE RADIO",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "602000",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "PROGRAMACIÓN Y TRANSMISIONES DE TELEVISIÓN",
      "name": "PROGRAMACIÓN Y TRANSMISIONES DE TELEVISIÓN",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "611010",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE TELECOMUNICACIONES ALÁMBRICAS",
      "name": "TELEFONÍA FIJA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "611020",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE TELECOMUNICACIONES ALÁMBRICAS",
      "name": "TELEFONÍA LARGA DISTANCIA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "611030",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE TELECOMUNICACIONES ALÁMBRICAS",
      "name": "TELEVISIÓN DE PAGO POR CABLE",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "611090",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE TELECOMUNICACIONES ALÁMBRICAS",
      "name": "OTROS SERVICIOS DE TELECOMUNICACIONES ALÁMBRICAS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "612010",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE TELECOMUNICACIONES INALÁMBRICAS",
      "name": "TELEFONÍA MÓVIL CELULAR",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "612020",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE TELECOMUNICACIONES INALÁMBRICAS",
      "name": "RADIOCOMUNICACIONES MÓVILES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "612030",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE TELECOMUNICACIONES INALÁMBRICAS",
      "name": "TELEVISIÓN DE PAGO INALÁMBRICA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "612090",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE TELECOMUNICACIONES INALÁMBRICAS",
      "name": "OTROS SERVICIOS DE TELECOMUNICACIONES INALÁMBRICAS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "613010",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE TELECOMUNICACIONES POR SATÉLITE",
      "name": "TELEFONÍA MÓVIL SATELITAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "613020",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE TELECOMUNICACIONES POR SATÉLITE",
      "name": "TELEVISIÓN DE PAGO SATELITAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "613090",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE TELECOMUNICACIONES POR SATÉLITE",
      "name": "OTROS SERVICIOS DE TELECOMUNICACIONES POR SATÉLITE N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "619010",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "OTRAS ACTIVIDADES DE TELECOMUNICACIONES",
      "name": "CENTROS DE LLAMADOS Y CENTROS DE ACCESO A INTERNET",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "619090",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "OTRAS ACTIVIDADES DE TELECOMUNICACIONES",
      "name": "OTRAS ACTIVIDADES DE TELECOMUNICACIONES N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "620100",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE PROGRAMACIÓN INFORMÁTICA, CONSULTORÍA INFORMÁTICA Y ACTIVIDADES CONEXAS",
      "name": "ACTIVIDADES DE PROGRAMACIÓN INFORMÁTICA",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "620200",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE PROGRAMACIÓN INFORMÁTICA, CONSULTORÍA INFORMÁTICA Y ACTIVIDADES CONEXAS",
      "name": "ACTIVIDADES DE CONSULTORÍA DE INFORMÁTICA Y DE GESTIÓN DE INSTALACIONES INFORMÁTICAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "620900",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "ACTIVIDADES DE PROGRAMACIÓN INFORMÁTICA, CONSULTORÍA INFORMÁTICA Y ACTIVIDADES CONEXAS",
      "name": "OTRAS ACTIVIDADES DE TECNOLOGÍA DE LA INFORMACIÓN Y DE SERVICIOS INFORMÁTICOS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "631100",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "PROCESAMIENTO DE DATOS, HOSPEDAJE Y ACTIVIDADES CONEXAS; PORTALES WEB",
      "name": "PROCESAMIENTO DE DATOS, HOSPEDAJE Y ACTIVIDADES CONEXAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "631200",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "PROCESAMIENTO DE DATOS, HOSPEDAJE Y ACTIVIDADES CONEXAS; PORTALES WEB",
      "name": "PORTALES WEB",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "639100",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS DE INFORMACIÓN",
      "name": "ACTIVIDADES DE AGENCIAS DE NOTICIAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "639900",
      "group": "INFORMACIÓN Y COMUNICACIONES",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS DE INFORMACIÓN",
      "name": "OTRAS ACTIVIDADES DE SERVICIOS DE INFORMACIÓN N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "641100",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "INTERMEDIACIÓN MONETARIA",
      "name": "BANCA CENTRAL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "641910",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "INTERMEDIACIÓN MONETARIA",
      "name": "ACTIVIDADES BANCARIAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "641990",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "INTERMEDIACIÓN MONETARIA",
      "name": "OTROS TIPOS DE INTERMEDIACIÓN MONETARIA N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "642000",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES DE SOCIEDADES DE CARTERA",
      "name": "ACTIVIDADES DE SOCIEDADES DE CARTERA",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "643000",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "FONDOS Y SOCIEDADES DE INVERSIÓN Y ENTIDADES FINANCIERAS SIMILARES",
      "name": "FONDOS Y SOCIEDADES DE INVERSIÓN Y ENTIDADES FINANCIERAS SIMILARES",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "649100",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "LEASING FINANCIERO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "649201",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "FINANCIERAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "649202",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "ACTIVIDADES DE CRÉDITO PRENDARIO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "649203",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "CAJAS DE COMPENSACIÓN",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "649209",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "OTRAS ACTIVIDADES DE CONCESIÓN DE CRÉDITO N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "649900",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "651100",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "SEGUROS",
      "name": "SEGUROS DE VIDA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "651210",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "SEGUROS",
      "name": "SEGUROS GENERALES, EXCEPTO ACTIVIDADES DE ISAPRES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "651220",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "SEGUROS",
      "name": "ACTIVIDADES DE ISAPRES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "652000",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "REASEGUROS",
      "name": "REASEGUROS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "653000",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "FONDOS DE PENSIONES",
      "name": "FONDOS DE PENSIONES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "661100",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "ADMINISTRACIÓN DE MERCADOS FINANCIEROS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "661201",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "ACTIVIDADES DE SECURITIZADORAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "661202",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "CORREDORES DE BOLSA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "661203",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "AGENTES DE VALORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "661204",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "ACTIVIDADES DE CASAS DE CAMBIO Y OPERADORES DE DIVISA",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "661209",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "OTROS SERVICIOS DE CORRETAJE DE VALORES Y COMMODITIES N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "661901",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "ACTIVIDADES DE CÁMARAS DE COMPENSACIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "661902",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "ADMINISTRACIÓN DE TARJETAS DE CRÉDITO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "661903",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "EMPRESAS DE ASESORÍA Y CONSULTORÍA EN INVERSIÓN FINANCIERA; SOCIEDADES DE APOYO AL GIRO",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "661904",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "ACTIVIDADES DE CLASIFICADORAS DE RIESGO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "661909",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "OTRAS ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SERVICIOS FINANCIEROS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "662100",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "EVALUACIÓN DE RIESGOS Y DAÑOS (INCLUYE ACTIVIDADES DE LIQUIDADORES DE SEGUROS)",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "662200",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "ACTIVIDADES DE AGENTES Y CORREDORES DE SEGUROS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "662900",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SEGUROS Y FONDOS DE PENSIONES",
      "name": "OTRAS ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SEGUROS Y FONDOS DE PENSIONES",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "663010",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES DE GESTIÓN DE FONDOS",
      "name": "ADMINISTRADORAS DE FONDOS DE PENSIONES (AFP)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "663091",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES DE GESTIÓN DE FONDOS",
      "name": "ADMINISTRADORAS DE FONDOS DE INVERSIÓN",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "663092",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES DE GESTIÓN DE FONDOS",
      "name": "ADMINISTRADORAS DE FONDOS MUTUOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "663093",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES DE GESTIÓN DE FONDOS",
      "name": "ADMINISTRADORAS DE FICES (FONDOS DE INVERSIÓN DE CAPITAL EXTRANJERO)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "663094",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES DE GESTIÓN DE FONDOS",
      "name": "ADMINISTRADORAS DE FONDOS PARA LA VIVIENDA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "663099",
      "group": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
      "subGroup": "ACTIVIDADES DE GESTIÓN DE FONDOS",
      "name": "ADMINISTRADORAS DE FONDOS PARA OTROS FINES N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "681011",
      "group": "ACTIVIDADES INMOBILIARIAS",
      "subGroup": "ACTIVIDADES INMOBILIARIAS REALIZADAS CON BIENES PROPIOS O ARRENDADOS",
      "name": "ALQUILER DE BIENES INMUEBLES AMOBLADOS O CON EQUIPOS Y MAQUINARIAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "681012",
      "group": "ACTIVIDADES INMOBILIARIAS",
      "subGroup": "ACTIVIDADES INMOBILIARIAS REALIZADAS CON BIENES PROPIOS O ARRENDADOS",
      "name": "COMPRA, VENTA Y ALQUILER (EXCEPTO AMOBLADOS) DE INMUEBLES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "681020",
      "group": "ACTIVIDADES INMOBILIARIAS",
      "subGroup": "ACTIVIDADES INMOBILIARIAS REALIZADAS CON BIENES PROPIOS O ARRENDADOS",
      "name": "SERVICIOS IMPUTADOS DE ALQUILER DE VIVIENDAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "682000",
      "group": "ACTIVIDADES INMOBILIARIAS",
      "subGroup": "ACTIVIDADES INMOBILIARIAS REALIZADAS A CAMBIO DE UNA RETRIBUCIÓN O POR CONTRATA",
      "name": "ACTIVIDADES INMOBILIARIAS REALIZADAS A CAMBIO DE UNA RETRIBUCIÓN O POR CONTRATA",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "691001",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES JURÍDICAS",
      "name": "SERVICIOS DE ASESORAMIENTO Y REPRESENTACIÓN JURÍDICA",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "691002",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES JURÍDICAS",
      "name": "SERVICIO NOTARIAL",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": false
    },
    {
      "code": "691003",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES JURÍDICAS",
      "name": "CONSERVADOR DE BIENES RAÍCES",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": false
    },
    {
      "code": "691004",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES JURÍDICAS",
      "name": "RECEPTORES JUDICIALES",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "691009",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES JURÍDICAS",
      "name": "SERVICIOS DE ARBITRAJE; SÍNDICOS DE QUIEBRA Y PERITOS JUDICIALES; OTRAS ACTIVIDADES JURÍDICAS N.C.P.",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "692000",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES DE CONTABILIDAD, TENEDURÍA DE LIBROS Y AUDITORÍA; CONSULTORÍA FISCAL",
      "name": "ACTIVIDADES DE CONTABILIDAD, TENEDURÍA DE LIBROS Y AUDITORÍA; CONSULTORÍA FISCAL",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "701000",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES DE OFICINAS PRINCIPALES",
      "name": "ACTIVIDADES DE OFICINAS PRINCIPALES",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "702000",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES DE CONSULTORÍA DE GESTIÓN",
      "name": "ACTIVIDADES DE CONSULTORÍA DE GESTIÓN",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "711001",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES DE ARQUITECTURA E INGENIERÍA Y ACTIVIDADES CONEXAS DE CONSULTORÍA TÉCNICA",
      "name": "SERVICIOS DE ARQUITECTURA (DISEÑO DE EDIFICIOS, DIBUJO DE PLANOS DE CONSTRUCCIÓN, ENTRE OTROS)",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "711002",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES DE ARQUITECTURA E INGENIERÍA Y ACTIVIDADES CONEXAS DE CONSULTORÍA TÉCNICA",
      "name": "EMPRESAS DE SERVICIOS DE INGENIERÍA Y ACTIVIDADES CONEXAS DE CONSULTORÍA TÉCNICA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "711003",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES DE ARQUITECTURA E INGENIERÍA Y ACTIVIDADES CONEXAS DE CONSULTORÍA TÉCNICA",
      "name": "SERVICIOS PROFESIONALES DE INGENIERÍA Y ACTIVIDADES CONEXAS DE CONSULTORÍA TÉCNICA",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "712001",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ENSAYOS Y ANÁLISIS TÉCNICOS",
      "name": "ACTIVIDADES DE PLANTAS DE REVISIÓN TÉCNICA PARA VEHÍCULOS AUTOMOTORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "712009",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ENSAYOS Y ANÁLISIS TÉCNICOS",
      "name": "OTROS SERVICIOS DE ENSAYOS Y ANÁLISIS TÉCNICOS (EXCEPTO ACTIVIDADES DE PLANTAS DE REVISIÓN TÉCNICA)",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "721000",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "INVESTIGACIONES Y DESARROLLO EXPERIMENTAL EN EL CAMPO DE LAS CIENCIAS NATURALES Y LA INGENIERÍA",
      "name": "INVESTIGACIONES Y DESARROLLO EXPERIMENTAL EN EL CAMPO DE LAS CIENCIAS NATURALES Y LA INGENIERÍA",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "722000",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "INVESTIGACIONES Y DESARROLLO EXPERIMENTAL EN EL CAMPO DE LAS CIENCIAS SOCIALES Y LAS HUMANIDADES",
      "name": "INVESTIGACIONES Y DESARROLLO EXPERIMENTAL EN EL CAMPO DE LAS CIENCIAS SOCIALES Y LAS HUMANIDADES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "731001",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "PUBLICIDAD",
      "name": "SERVICIOS DE PUBLICIDAD PRESTADOS POR EMPRESAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "731002",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "PUBLICIDAD",
      "name": "SERVICIOS DE PUBLICIDAD PRESTADOS POR PROFESIONALES",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "732000",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ESTUDIOS DE MERCADO Y ENCUESTAS DE OPINIÓN PÚBLICA",
      "name": "ESTUDIOS DE MERCADO Y ENCUESTAS DE OPINIÓN PÚBLICA",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": false
    },
    {
      "code": "741001",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES ESPECIALIZADAS DE DISEÑO",
      "name": "ACTIVIDADES DE DISEÑO DE VESTUARIO",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "741002",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES ESPECIALIZADAS DE DISEÑO",
      "name": "ACTIVIDADES DE DISEÑO Y DECORACIÓN DE INTERIORES",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "741009",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES ESPECIALIZADAS DE DISEÑO",
      "name": "OTRAS ACTIVIDADES ESPECIALIZADAS DE DISEÑO N.C.P.",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "742001",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES DE FOTOGRAFÍA",
      "name": "SERVICIOS DE REVELADO, IMPRESIÓN Y AMPLIACIÓN DE FOTOGRAFÍAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "742002",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES DE FOTOGRAFÍA",
      "name": "SERVICIOS Y ACTIVIDADES DE FOTOGRAFÍA",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "742003",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES DE FOTOGRAFÍA",
      "name": "SERVICIOS PERSONALES DE FOTOGRAFÍA",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "749001",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "OTRAS ACTIVIDADES PROFESIONALES, CIENTÍFICAS Y TÉCNICAS N.C.P.",
      "name": "ASESORÍA Y GESTIÓN EN LA COMPRA O VENTA DE PEQUEÑAS Y MEDIANAS EMPRESAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "749002",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "OTRAS ACTIVIDADES PROFESIONALES, CIENTÍFICAS Y TÉCNICAS N.C.P.",
      "name": "SERVICIOS DE TRADUCCIÓN E INTERPRETACIÓN PRESTADOS POR EMPRESAS",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "749003",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "OTRAS ACTIVIDADES PROFESIONALES, CIENTÍFICAS Y TÉCNICAS N.C.P.",
      "name": "SERVICIOS PERSONALES DE TRADUCCIÓN E INTERPRETACIÓN",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "749004",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "OTRAS ACTIVIDADES PROFESIONALES, CIENTÍFICAS Y TÉCNICAS N.C.P.",
      "name": "ACTIVIDADES DE AGENCIAS Y AGENTES DE REPRESENTACIÓN DE ACTORES, DEPORTISTAS Y OTRAS FIGURAS PÚBLICAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "749009",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "OTRAS ACTIVIDADES PROFESIONALES, CIENTÍFICAS Y TÉCNICAS N.C.P.",
      "name": "OTRAS ACTIVIDADES PROFESIONALES, CIENTÍFICAS Y TÉCNICAS N.C.P.",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "750001",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES VETERINARIAS",
      "name": "ACTIVIDADES DE CLÍNICAS VETERINARIAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "750002",
      "group": "ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TÉCNICAS",
      "subGroup": "ACTIVIDADES VETERINARIAS",
      "name": "ACTIVIDADES DE VETERINARIOS, TÉCNICOS Y OTRO PERSONAL AUXILIAR, PRESTADOS DE FORMA INDEPENDIENTE",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "771000",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ALQUILER Y ARRENDAMIENTO DE VEHÍCULOS AUTOMOTORES",
      "name": "ALQUILER DE VEHÍCULOS AUTOMOTORES SIN CHOFER",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "772100",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ALQUILER Y ARRENDAMIENTO DE EFECTOS PERSONALES Y ENSERES DOMÉSTICOS",
      "name": "ALQUILER Y ARRENDAMIENTO DE EQUIPO RECREATIVO Y DEPORTIVO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "772200",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ALQUILER Y ARRENDAMIENTO DE EFECTOS PERSONALES Y ENSERES DOMÉSTICOS",
      "name": "ALQUILER DE CINTAS DE VIDEO Y DISCOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "772900",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ALQUILER Y ARRENDAMIENTO DE EFECTOS PERSONALES Y ENSERES DOMÉSTICOS",
      "name": "ALQUILER DE OTROS EFECTOS PERSONALES Y ENSERES DOMÉSTICOS (INCLUYE MOBILIARIO PARA EVENTOS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "773001",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ALQUILER Y ARRENDAMIENTO DE OTROS TIPOS DE MAQUINARIA, EQUIPO Y BIENES TANGIBLES",
      "name": "ALQUILER DE EQUIPOS DE TRANSPORTE SIN OPERARIO, EXCEPTO VEHÍCULOS AUTOMOTORES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "773002",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ALQUILER Y ARRENDAMIENTO DE OTROS TIPOS DE MAQUINARIA, EQUIPO Y BIENES TANGIBLES",
      "name": "ALQUILER DE MAQUINARIA Y EQUIPO AGROPECUARIO, FORESTAL, DE CONSTRUCCIÓN E ING. CIVIL, SIN OPERARIOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "773003",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ALQUILER Y ARRENDAMIENTO DE OTROS TIPOS DE MAQUINARIA, EQUIPO Y BIENES TANGIBLES",
      "name": "ALQUILER DE MAQUINARIA Y EQUIPO DE OFICINA, SIN OPERARIOS (SIN SERVICIO ADMINISTRATIVO)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "773009",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ALQUILER Y ARRENDAMIENTO DE OTROS TIPOS DE MAQUINARIA, EQUIPO Y BIENES TANGIBLES",
      "name": "ALQUILER DE OTROS TIPOS DE MAQUINARIAS Y EQUIPOS SIN OPERARIO N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "774000",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ARRENDAMIENTO DE PROPIEDAD INTELECTUAL Y SIMILARES, EXCEPTO OBRAS PROTEGIDAS POR DERECHOS DE AUTOR",
      "name": "ARRENDAMIENTO DE PROPIEDAD INTELECTUAL Y SIMILARES, EXCEPTO OBRAS PROTEGIDAS POR DERECHOS DE AUTOR",
      "affectedByTaxes": "N",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "781000",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE AGENCIAS DE EMPLEO",
      "name": "ACTIVIDADES DE AGENCIAS DE EMPLEO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "782000",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE AGENCIAS DE EMPLEO TEMPORAL",
      "name": "ACTIVIDADES DE AGENCIAS DE EMPLEO TEMPORAL (INCLUYE EMPRESAS DE SERVICIOS TRANSITORIOS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "783000",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "OTRAS ACTIVIDADES DE DOTACIÓN DE RECURSOS HUMANOS",
      "name": "OTRAS ACTIVIDADES DE DOTACIÓN DE RECURSOS HUMANOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "791100",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE AGENCIAS DE VIAJES Y OPERADORES TURÍSTICOS",
      "name": "ACTIVIDADES DE AGENCIAS DE VIAJES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "791200",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE AGENCIAS DE VIAJES Y OPERADORES TURÍSTICOS",
      "name": "ACTIVIDADES DE OPERADORES TURÍSTICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "799000",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "OTROS SERVICIOS DE RESERVAS Y ACTIVIDADES CONEXAS",
      "name": "OTROS SERVICIOS DE RESERVAS Y ACTIVIDADES CONEXAS (INCLUYE VENTA DE ENTRADAS PARA TEATRO, Y OTROS)",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "801001",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE SEGURIDAD PRIVADA",
      "name": "SERVICIOS DE SEGURIDAD PRIVADA PRESTADOS POR EMPRESAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "801002",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE SEGURIDAD PRIVADA",
      "name": "SERVICIO DE TRANSPORTE DE VALORES EN VEHÍCULOS BLINDADOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "801003",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE SEGURIDAD PRIVADA",
      "name": "SERVICIOS DE SEGURIDAD PRIVADA PRESTADOS POR INDEPENDIENTES",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "802000",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE SERVICIOS DE SISTEMAS DE SEGURIDAD",
      "name": "ACTIVIDADES DE SERVICIOS DE SISTEMAS DE SEGURIDAD (INCLUYE SERVICIOS DE CERRAJERÍA)",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "803000",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE INVESTIGACIÓN",
      "name": "ACTIVIDADES DE INVESTIGACIÓN (INCLUYE ACTIVIDADES DE INVESTIGADORES Y DETECTIVES PRIVADOS)",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "811000",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES COMBINADAS DE APOYO A INSTALACIONES",
      "name": "ACTIVIDADES COMBINADAS DE APOYO A INSTALACIONES",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "812100",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE LIMPIEZA",
      "name": "LIMPIEZA GENERAL DE EDIFICIOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "812901",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE LIMPIEZA",
      "name": "DESRATIZACIÓN, DESINFECCIÓN Y EXTERMINIO DE PLAGAS NO AGRÍCOLAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "812909",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE LIMPIEZA",
      "name": "OTRAS ACTIVIDADES DE LIMPIEZA DE EDIFICIOS E INSTALACIONES INDUSTRIALES N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "813000",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE PAISAJISMO Y SERVICIOS DE MANTENIMIENTO CONEXOS",
      "name": "ACTIVIDADES DE PAISAJISMO, SERVICIOS DE JARDINERÍA Y SERVICIOS CONEXOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "821100",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES ADMINISTRATIVAS Y DE APOYO DE OFICINA",
      "name": "ACTIVIDADES COMBINADAS DE SERVICIOS ADMINISTRATIVOS DE OFICINA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "821900",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES ADMINISTRATIVAS Y DE APOYO DE OFICINA",
      "name": "FOTOCOPIADO, PREPARACIÓN DE DOCUMENTOS Y OTRAS ACTIVIDADES ESPECIALIZADAS DE APOYO DE OFICINA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "822000",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE CALL-CENTER",
      "name": "ACTIVIDADES DE CALL-CENTER",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "823000",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ORGANIZACIÓN DE CONVENCIONES Y EXPOSICIONES COMERCIALES",
      "name": "ORGANIZACIÓN DE CONVENCIONES Y EXPOSICIONES COMERCIALES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "829110",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE SERVICIOS DE APOYO A LAS EMPRESAS N.C.P.",
      "name": "ACTIVIDADES DE AGENCIAS DE COBRO",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "829120",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE SERVICIOS DE APOYO A LAS EMPRESAS N.C.P.",
      "name": "ACTIVIDADES DE AGENCIAS DE CALIFICACIÓN CREDITICIA",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "829200",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE SERVICIOS DE APOYO A LAS EMPRESAS N.C.P.",
      "name": "ACTIVIDADES DE ENVASADO Y EMPAQUETADO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "829900",
      "group": "ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO",
      "subGroup": "ACTIVIDADES DE SERVICIOS DE APOYO A LAS EMPRESAS N.C.P.",
      "name": "OTRAS ACTIVIDADES DE SERVICIOS DE APOYO A LAS EMPRESAS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "841100",
      "group": "ADMINISTRACIÓN PÚBLICA Y DEFENSA; PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA",
      "subGroup": "ADMINISTRACIÓN DEL ESTADO Y APLICACIÓN DE LA POLÍTICA ECONÓMICA Y SOCIAL DE LA COMUNIDAD",
      "name": "ACTIVIDADES DE LA ADMINISTRACIÓN PÚBLICA EN GENERAL",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "841200",
      "group": "ADMINISTRACIÓN PÚBLICA Y DEFENSA; PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA",
      "subGroup": "ADMINISTRACIÓN DEL ESTADO Y APLICACIÓN DE LA POLÍTICA ECONÓMICA Y SOCIAL DE LA COMUNIDAD",
      "name": "REGULACIÓN DE LAS ACTIVIDADES DE ORGANISMOS QUE PRESTAN SERVICIOS SANITARIOS, EDUCATIVOS, CULTURALES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "841300",
      "group": "ADMINISTRACIÓN PÚBLICA Y DEFENSA; PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA",
      "subGroup": "ADMINISTRACIÓN DEL ESTADO Y APLICACIÓN DE LA POLÍTICA ECONÓMICA Y SOCIAL DE LA COMUNIDAD",
      "name": "REGULACIÓN Y FACILITACIÓN DE LA ACTIVIDAD ECONÓMICA",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "842100",
      "group": "ADMINISTRACIÓN PÚBLICA Y DEFENSA; PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA",
      "subGroup": "PRESTACIÓN DE SERVICIOS A LA COMUNIDAD EN GENERAL",
      "name": "RELACIONES EXTERIORES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "842200",
      "group": "ADMINISTRACIÓN PÚBLICA Y DEFENSA; PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA",
      "subGroup": "PRESTACIÓN DE SERVICIOS A LA COMUNIDAD EN GENERAL",
      "name": "ACTIVIDADES DE DEFENSA",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "842300",
      "group": "ADMINISTRACIÓN PÚBLICA Y DEFENSA; PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA",
      "subGroup": "PRESTACIÓN DE SERVICIOS A LA COMUNIDAD EN GENERAL",
      "name": "ACTIVIDADES DE MANTENIMIENTO DEL ORDEN PÚBLICO Y DE SEGURIDAD",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "843010",
      "group": "ADMINISTRACIÓN PÚBLICA Y DEFENSA; PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA",
      "subGroup": "ACTIVIDADES DE PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA",
      "name": "FONDO NACIONAL DE SALUD (FONASA)",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "843020",
      "group": "ADMINISTRACIÓN PÚBLICA Y DEFENSA; PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA",
      "subGroup": "ACTIVIDADES DE PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA",
      "name": "INSTITUTO DE PREVISIÓN SOCIAL (IPS)",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "843090",
      "group": "ADMINISTRACIÓN PÚBLICA Y DEFENSA; PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA",
      "subGroup": "ACTIVIDADES DE PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA",
      "name": "OTROS PLANES DE SEGURIDAD SOCIAL DE AFILIACIÓN OBLIGATORIA N.C.P.",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "850011",
      "group": "ENSEÑANZA",
      "subGroup": "ENSEÑANZA PREESCOLAR, PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL",
      "name": "ENSEÑANZA PREESCOLAR PÚBLICA",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "850012",
      "group": "ENSEÑANZA",
      "subGroup": "ENSEÑANZA PREESCOLAR, PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL",
      "name": "ENSEÑANZA PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL PÚBLICA",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "850021",
      "group": "ENSEÑANZA",
      "subGroup": "ENSEÑANZA PREESCOLAR, PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL",
      "name": "ENSEÑANZA PREESCOLAR PRIVADA",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "850022",
      "group": "ENSEÑANZA",
      "subGroup": "ENSEÑANZA PREESCOLAR, PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL",
      "name": "ENSEÑANZA PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL PRIVADA",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "853110",
      "group": "ENSEÑANZA",
      "subGroup": "ENSEÑANZA SUPERIOR",
      "name": "ENSEÑANZA SUPERIOR EN UNIVERSIDADES PÚBLICAS",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "853120",
      "group": "ENSEÑANZA",
      "subGroup": "ENSEÑANZA SUPERIOR",
      "name": "ENSEÑANZA SUPERIOR EN UNIVERSIDADES PRIVADAS",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "853201",
      "group": "ENSEÑANZA",
      "subGroup": "ENSEÑANZA SUPERIOR",
      "name": "ENSEÑANZA SUPERIOR EN INSTITUTOS PROFESIONALES",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "853202",
      "group": "ENSEÑANZA",
      "subGroup": "ENSEÑANZA SUPERIOR",
      "name": "ENSEÑANZA SUPERIOR EN CENTROS DE FORMACIÓN TÉCNICA",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "854100",
      "group": "ENSEÑANZA",
      "subGroup": "OTROS TIPOS DE ENSEÑANZA",
      "name": "ENSEÑANZA DEPORTIVA Y RECREATIVA",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "854200",
      "group": "ENSEÑANZA",
      "subGroup": "OTROS TIPOS DE ENSEÑANZA",
      "name": "ENSEÑANZA CULTURAL",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "854901",
      "group": "ENSEÑANZA",
      "subGroup": "OTROS TIPOS DE ENSEÑANZA",
      "name": "ENSEÑANZA PREUNIVERSITARIA",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "854902",
      "group": "ENSEÑANZA",
      "subGroup": "OTROS TIPOS DE ENSEÑANZA",
      "name": "SERVICIOS PERSONALES DE EDUCACIÓN",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "854909",
      "group": "ENSEÑANZA",
      "subGroup": "OTROS TIPOS DE ENSEÑANZA",
      "name": "OTROS TIPOS DE ENSEÑANZA N.C.P.",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "855000",
      "group": "ENSEÑANZA",
      "subGroup": "ACTIVIDADES DE APOYO A LA ENSEÑANZA",
      "name": "ACTIVIDADES DE APOYO A LA ENSEÑANZA",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "861010",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "ACTIVIDADES DE HOSPITALES PÚBLICOS Y PRIVADOS",
      "name": "ACTIVIDADES DE HOSPITALES Y CLÍNICAS PÚBLICAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "861020",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "ACTIVIDADES DE HOSPITALES PÚBLICOS Y PRIVADOS",
      "name": "ACTIVIDADES DE HOSPITALES Y CLÍNICAS PRIVADAS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "862010",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "ACTIVIDADES DE MÉDICOS Y ODONTÓLOGOS",
      "name": "ACTIVIDADES DE CENTROS DE SALUD MUNICIPALIZADOS (SERVICIOS DE SALUD PÚBLICA)",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "862021",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "ACTIVIDADES DE MÉDICOS Y ODONTÓLOGOS",
      "name": "CENTROS MÉDICOS PRIVADOS (ESTABLECIMIENTOS DE ATENCIÓN AMBULATORIA)",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "862022",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "ACTIVIDADES DE MÉDICOS Y ODONTÓLOGOS",
      "name": "CENTROS DE ATENCIÓN ODONTOLÓGICA PRIVADOS (ESTABLECIMIENTOS DE ATENCIÓN AMBULATORIA)",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "862031",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "ACTIVIDADES DE MÉDICOS Y ODONTÓLOGOS",
      "name": "SERVICIOS DE MÉDICOS PRESTADOS DE FORMA INDEPENDIENTE",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "862032",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "ACTIVIDADES DE MÉDICOS Y ODONTÓLOGOS",
      "name": "SERVICIOS DE ODONTÓLOGOS PRESTADOS DE FORMA INDEPENDIENTE",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "869010",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "OTRAS ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA",
      "name": "ACTIVIDADES DE LABORATORIOS CLÍNICOS Y BANCOS DE SANGRE",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "869091",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "OTRAS ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA",
      "name": "OTROS SERVICIOS DE ATENCIÓN DE LA SALUD HUMANA PRESTADOS POR EMPRESAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "869092",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "OTRAS ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA",
      "name": "SERVICIOS PRESTADOS DE FORMA INDEPENDIENTE POR OTROS PROFESIONALES DE LA SALUD",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "871000",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "ACTIVIDADES DE ATENCIÓN DE ENFERMERÍA EN INSTITUCIONES",
      "name": "ACTIVIDADES DE ATENCIÓN DE ENFERMERÍA EN INSTITUCIONES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "872000",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "ACTIVIDADES DE ATENCIÓN EN INSTITUCIONES PARA PERSONAS CON DISCAPACIDAD MENTAL Y TOXICÓMANOS",
      "name": "ACTIVIDADES DE ATENCIÓN EN INSTITUCIONES PARA PERSONAS CON DISCAPACIDAD MENTAL Y TOXICÓMANOS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "873000",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "ACTIVIDADES DE ATENCIÓN EN INSTITUCIONES PARA PERSONAS DE EDAD Y PERSONAS CON DISCAPACIDAD",
      "name": "ACTIVIDADES DE ATENCIÓN EN INSTITUCIONES PARA PERSONAS DE EDAD Y PERSONAS CON DISCAPACIDAD FÍSICA",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "879000",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "OTRAS ACTIVIDADES DE ATENCIÓN EN INSTITUCIONES",
      "name": "OTRAS ACTIVIDADES DE ATENCIÓN EN INSTITUCIONES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "881000",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "ACTIVIDADES DE ASISTENCIA SOCIAL SIN ALOJAMIENTO PARA PERSONAS DE EDAD Y PERSONAS CON DISCAPACIDAD",
      "name": "ACTIVIDADES DE ASISTENCIA SOCIAL SIN ALOJAMIENTO PARA PERSONAS DE EDAD Y PERSONAS CON DISCAPACIDAD",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "889000",
      "group": "ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA Y DE ASISTENCIA SOCIAL",
      "subGroup": "OTRAS ACTIVIDADES DE ASISTENCIA SOCIAL SIN ALOJAMIENTO",
      "name": "OTRAS ACTIVIDADES DE ASISTENCIA SOCIAL SIN ALOJAMIENTO",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "900001",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES CREATIVAS, ARTÍSTICAS Y DE ENTRETENIMIENTO",
      "name": "SERVICIOS DE PRODUCCIÓN DE OBRAS DE TEATRO, CONCIERTOS, ESPECTÁCULOS DE DANZA, OTRAS PROD. ESCÉNICAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "900002",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES CREATIVAS, ARTÍSTICAS Y DE ENTRETENIMIENTO",
      "name": "ACTIVIDADES ARTÍSTICAS REALIZADAS POR BANDAS DE MÚSICA, COMPAÑÍAS DE TEATRO, CIRCENSES Y SIMILARES",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "900003",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES CREATIVAS, ARTÍSTICAS Y DE ENTRETENIMIENTO",
      "name": "ACTIVIDADES DE ARTISTAS REALIZADAS DE FORMA INDEPENDIENTE: ACTORES, MÚSICOS, ESCRITORES, ENTRE OTROS",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "900004",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES CREATIVAS, ARTÍSTICAS Y DE ENTRETENIMIENTO",
      "name": "SERVICIOS PRESTADOS POR PERIODISTAS INDEPENDIENTES",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "900009",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES CREATIVAS, ARTÍSTICAS Y DE ENTRETENIMIENTO",
      "name": "OTRAS ACTIVIDADES CREATIVAS, ARTÍSTICAS Y DE ENTRETENIMIENTO N.C.P.",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "910100",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES DE BIBLIOTECAS, ARCHIVOS Y MUSEOS Y OTRAS ACTIVIDADES CULTURALES",
      "name": "ACTIVIDADES DE BIBLIOTECAS Y ARCHIVOS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "910200",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES DE BIBLIOTECAS, ARCHIVOS Y MUSEOS Y OTRAS ACTIVIDADES CULTURALES",
      "name": "ACTIVIDADES DE MUSEOS, GESTIÓN DE LUGARES Y EDIFICIOS HISTÓRICOS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "910300",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES DE BIBLIOTECAS, ARCHIVOS Y MUSEOS Y OTRAS ACTIVIDADES CULTURALES",
      "name": "ACTIVIDADES DE JARDINES BOTÁNICOS, ZOOLÓGICOS Y RESERVAS NATURALES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "920010",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES DE JUEGOS DE AZAR Y APUESTAS",
      "name": "ACTIVIDADES DE CASINOS DE JUEGOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "920090",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES DE JUEGOS DE AZAR Y APUESTAS",
      "name": "OTRAS ACTIVIDADES DE JUEGOS DE AZAR Y APUESTAS N.C.P.",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "931101",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES DEPORTIVAS",
      "name": "HIPÓDROMOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "931102",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES DEPORTIVAS",
      "name": "GESTIÓN DE SALAS DE BILLAR; GESTIÓN DE SALAS DE BOLOS (BOWLING)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "931109",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES DEPORTIVAS",
      "name": "GESTIÓN DE OTRAS INSTALACIONES DEPORTIVAS N.C.P.",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "931201",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES DEPORTIVAS",
      "name": "ACTIVIDADES DE CLUBES DE FÚTBOL AMATEUR Y PROFESIONAL",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "931209",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES DEPORTIVAS",
      "name": "ACTIVIDADES DE OTROS CLUBES DEPORTIVOS N.C.P.",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "931901",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES DEPORTIVAS",
      "name": "PROMOCIÓN Y ORGANIZACIÓN DE COMPETENCIAS DEPORTIVAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "931909",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "ACTIVIDADES DEPORTIVAS",
      "name": "OTRAS ACTIVIDADES DEPORTIVAS N.C.P.",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "932100",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "OTRAS ACTIVIDADES DE ESPARCIMIENTO Y RECREATIVAS",
      "name": "ACTIVIDADES DE PARQUES DE ATRACCIONES Y PARQUES TEMÁTICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "932901",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "OTRAS ACTIVIDADES DE ESPARCIMIENTO Y RECREATIVAS",
      "name": "GESTIÓN DE SALAS DE POOL; GESTIÓN (EXPLOTACIÓN) DE JUEGOS ELECTRÓNICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "932909",
      "group": "ACTIVIDADES ARTÍSTICAS, DE ENTRETENIMIENTO Y RECREATIVAS",
      "subGroup": "OTRAS ACTIVIDADES DE ESPARCIMIENTO Y RECREATIVAS",
      "name": "OTRAS ACTIVIDADES DE ESPARCIMIENTO Y RECREATIVAS N.C.P.",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "941100",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "ACTIVIDADES DE ASOCIACIONES EMPRESARIALES, PROFESIONALES Y DE EMPLEADORES",
      "name": "ACTIVIDADES DE ASOCIACIONES EMPRESARIALES Y DE EMPLEADORES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "941200",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "ACTIVIDADES DE ASOCIACIONES EMPRESARIALES, PROFESIONALES Y DE EMPLEADORES",
      "name": "ACTIVIDADES DE ASOCIACIONES PROFESIONALES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "942000",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "ACTIVIDADES DE SINDICATOS",
      "name": "ACTIVIDADES DE SINDICATOS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "949100",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "ACTIVIDADES DE OTRAS ASOCIACIONES",
      "name": "ACTIVIDADES DE ORGANIZACIONES RELIGIOSAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "949200",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "ACTIVIDADES DE OTRAS ASOCIACIONES",
      "name": "ACTIVIDADES DE ORGANIZACIONES POLÍTICAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "949901",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "ACTIVIDADES DE OTRAS ASOCIACIONES",
      "name": "ACTIVIDADES DE CENTROS DE MADRES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "949902",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "ACTIVIDADES DE OTRAS ASOCIACIONES",
      "name": "ACTIVIDADES DE CLUBES SOCIALES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "949903",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "ACTIVIDADES DE OTRAS ASOCIACIONES",
      "name": "FUNDACIONES Y CORPORACIONES; ASOCIACIONES QUE PROMUEVEN ACTIVIDADES CULTURALES O RECREATIVAS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "949904",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "ACTIVIDADES DE OTRAS ASOCIACIONES",
      "name": "CONSEJO DE ADMINISTRACIÓN DE EDIFICIOS Y CONDOMINIOS",
      "affectedByTaxes": "NO",
      "taxCategory": "1",
      "internetAvailable": false
    },
    {
      "code": "949909",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "ACTIVIDADES DE OTRAS ASOCIACIONES",
      "name": "ACTIVIDADES DE OTRAS ASOCIACIONES N.C.P.",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "951100",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "REPARACIÓN DE COMPUTADORES Y EQUIPO DE COMUNICACIONES",
      "name": "REPARACIÓN DE COMPUTADORES Y EQUIPO PERIFÉRICO",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "951200",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "REPARACIÓN DE COMPUTADORES Y EQUIPO DE COMUNICACIONES",
      "name": "REPARACIÓN DE EQUIPO DE COMUNICACIONES (INCLUYE LA REPARACIÓN TELÉFONOS CELULARES)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "952100",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "REPARACIÓN DE EFECTOS PERSONALES Y ENSERES DOMÉSTICOS",
      "name": "REPARACIÓN DE APARATOS ELECTRÓNICOS DE CONSUMO (INCLUYE APARATOS DE TELEVISIÓN Y RADIO)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "952200",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "REPARACIÓN DE EFECTOS PERSONALES Y ENSERES DOMÉSTICOS",
      "name": "REPARACIÓN DE APARATOS DE USO DOMÉSTICO, EQUIPO DOMÉSTICO Y DE JARDINERÍA",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "952300",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "REPARACIÓN DE EFECTOS PERSONALES Y ENSERES DOMÉSTICOS",
      "name": "REPARACIÓN DE CALZADO Y DE ARTÍCULOS DE CUERO",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "952400",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "REPARACIÓN DE EFECTOS PERSONALES Y ENSERES DOMÉSTICOS",
      "name": "REPARACIÓN DE MUEBLES Y ACCESORIOS DOMÉSTICOS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "952900",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "REPARACIÓN DE EFECTOS PERSONALES Y ENSERES DOMÉSTICOS",
      "name": "REPARACIÓN DE OTROS EFECTOS PERSONALES Y ENSERES DOMÉSTICOS",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "960100",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS PERSONALES",
      "name": "LAVADO Y LIMPIEZA, INCLUIDA LA LIMPIEZA EN SECO, DE PRODUCTOS TEXTILES Y DE PIEL",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "960200",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS PERSONALES",
      "name": "PELUQUERÍA Y OTROS TRATAMIENTOS DE BELLEZA",
      "affectedByTaxes": "G",
      "taxCategory": "G",
      "internetAvailable": true
    },
    {
      "code": "960310",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS PERSONALES",
      "name": "SERVICIOS FUNERARIOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "960320",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS PERSONALES",
      "name": "SERVICIOS DE CEMENTERIOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "960901",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS PERSONALES",
      "name": "SERVICIOS DE ADIESTRAMIENTO, GUARDERÍA, PELUQUERÍA, PASEO DE MASCOTAS (EXCEPTO ACT. VETERINARIAS)",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "960902",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS PERSONALES",
      "name": "ACTIVIDADES DE SALONES DE MASAJES, BAÑOS TURCOS, SAUNAS, SERVICIO DE BAÑOS PÚBLICOS",
      "affectedByTaxes": "SI",
      "taxCategory": "1",
      "internetAvailable": true
    },
    {
      "code": "960909",
      "group": "OTRAS ACTIVIDADES DE SERVICIOS",
      "subGroup": "OTRAS ACTIVIDADES DE SERVICIOS PERSONALES",
      "name": "OTRAS ACTIVIDADES DE SERVICIOS PERSONALES N.C.P.",
      "affectedByTaxes": "NO",
      "taxCategory": "2",
      "internetAvailable": true
    },
    {
      "code": "970000",
      "group": "ACTIVIDADES DE LOS HOGARES COMO EMPLEADORES; ACTIVIDADES NO DIFERENCIADAS DE LOS HOGARES",
      "subGroup": "ACTIVIDADES DE LOS HOGARES COMO EMPLEADORES DE PERSONAL DOMÉSTICO",
      "name": "ACTIVIDADES DE LOS HOGARES COMO EMPLEADORES DE PERSONAL DOMÉSTICO",
      "affectedByTaxes": "NO",
      "taxCategory": "G",
      "internetAvailable": false
    },
    {
      "code": "990000",
      "group": "ACTIVIDADES DE ORGANIZACIONES Y ÓRGANOS EXTRATERRITORIALES",
      "subGroup": "ACTIVIDADES DE ORGANIZACIONES Y ÓRGANOS EXTRATERRITORIALES",
      "name": "ACTIVIDADES DE ORGANIZACIONES Y ÓRGANOS EXTRATERRITORIALES",
      "affectedByTaxes": "G",
      "taxCategory": "1",
      "internetAvailable": false
    }
  ];

export default {economicActivities,jobs}


