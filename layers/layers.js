var wms_layers = [];


        var lyr_GraybasemapOSM_0 = new ol.layer.Tile({
            'title': 'Gray base map OSM',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Wwa_PRG_dzielnice_2 = new ol.format.GeoJSON();
var features_Wwa_PRG_dzielnice_2 = format_Wwa_PRG_dzielnice_2.readFeatures(json_Wwa_PRG_dzielnice_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wwa_PRG_dzielnice_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wwa_PRG_dzielnice_2.addFeatures(features_Wwa_PRG_dzielnice_2);
var lyr_Wwa_PRG_dzielnice_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wwa_PRG_dzielnice_2, 
                style: style_Wwa_PRG_dzielnice_2,
                popuplayertitle: "Wwa_PRG_dzielnice",
                interactive: false,
                title: '<img src="styles/legend/Wwa_PRG_dzielnice_2.png" /> Wwa_PRG_dzielnice'
            });
var format_ciezkipiesze_3 = new ol.format.GeoJSON();
var features_ciezkipiesze_3 = format_ciezkipiesze_3.readFeatures(json_ciezkipiesze_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ciezkipiesze_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ciezkipiesze_3.addFeatures(features_ciezkipiesze_3);
var lyr_ciezkipiesze_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ciezkipiesze_3,
maxResolution:2.8004466152261966,
 
                style: style_ciezkipiesze_3,
                popuplayertitle: "Ściezki piesze",
                interactive: false,
                title: '<img src="styles/legend/ciezkipiesze_3.png" /> Ściezki piesze'
            });
var format_POI_4 = new ol.format.GeoJSON();
var features_POI_4 = format_POI_4.readFeatures(json_POI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POI_4.addFeatures(features_POI_4);
var lyr_POI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POI_4,
maxResolution:1.4002233076130983,
 
                style: style_POI_4,
                popuplayertitle: "POI",
                interactive: true,
    title: 'POI<br />\
    <img src="styles/legend/POI_4_0.png" /> arts_centre<br />\
    <img src="styles/legend/POI_4_1.png" /> atm<br />\
    <img src="styles/legend/POI_4_2.png" /> attraction<br />\
    <img src="styles/legend/POI_4_3.png" /> bakery<br />\
    <img src="styles/legend/POI_4_4.png" /> bar<br />\
    <img src="styles/legend/POI_4_5.png" /> beauty_shop<br />\
    <img src="styles/legend/POI_4_6.png" /> beverages<br />\
    <img src="styles/legend/POI_4_7.png" /> bicycle_rental<br />\
    <img src="styles/legend/POI_4_8.png" /> bicycle_shop<br />\
    <img src="styles/legend/POI_4_9.png" /> bookshop<br />\
    <img src="styles/legend/POI_4_10.png" /> butcher<br />\
    <img src="styles/legend/POI_4_11.png" /> cafe<br />\
    <img src="styles/legend/POI_4_12.png" /> camera_surveillance<br />\
    <img src="styles/legend/POI_4_13.png" /> car_wash<br />\
    <img src="styles/legend/POI_4_14.png" /> chemist<br />\
    <img src="styles/legend/POI_4_15.png" /> cinema<br />\
    <img src="styles/legend/POI_4_16.png" /> clinic<br />\
    <img src="styles/legend/POI_4_17.png" /> clothes<br />\
    <img src="styles/legend/POI_4_18.png" /> college<br />\
    <img src="styles/legend/POI_4_19.png" /> community_centre<br />\
    <img src="styles/legend/POI_4_20.png" /> computer_shop<br />\
    <img src="styles/legend/POI_4_21.png" /> convenience<br />\
    <img src="styles/legend/POI_4_22.png" /> dentist<br />\
    <img src="styles/legend/POI_4_23.png" /> department_store<br />\
    <img src="styles/legend/POI_4_24.png" /> doctors<br />\
    <img src="styles/legend/POI_4_25.png" /> dog_park<br />\
    <img src="styles/legend/POI_4_26.png" /> doityourself<br />\
    <img src="styles/legend/POI_4_27.png" /> drinking_water<br />\
    <img src="styles/legend/POI_4_28.png" /> entrance<br />\
    <img src="styles/legend/POI_4_29.png" /> fast_food<br />\
    <img src="styles/legend/POI_4_30.png" /> fire_station<br />\
    <img src="styles/legend/POI_4_31.png" /> florist<br />\
    <img src="styles/legend/POI_4_32.png" /> fountain<br />\
    <img src="styles/legend/POI_4_33.png" /> furniture_shop<br />\
    <img src="styles/legend/POI_4_34.png" /> gift_shop<br />\
    <img src="styles/legend/POI_4_35.png" /> hairdresser<br />\
    <img src="styles/legend/POI_4_36.png" /> hospital<br />\
    <img src="styles/legend/POI_4_37.png" /> jeweller<br />\
    <img src="styles/legend/POI_4_38.png" /> kindergarten<br />\
    <img src="styles/legend/POI_4_39.png" /> kiosk<br />\
    <img src="styles/legend/POI_4_40.png" /> laundry<br />\
    <img src="styles/legend/POI_4_41.png" /> library<br />\
    <img src="styles/legend/POI_4_42.png" /> mall<br />\
    <img src="styles/legend/POI_4_43.png" /> market_place<br />\
    <img src="styles/legend/POI_4_44.png" /> museum<br />\
    <img src="styles/legend/POI_4_45.png" /> nightclub<br />\
    <img src="styles/legend/POI_4_46.png" /> optician<br />\
    <img src="styles/legend/POI_4_47.png" /> outdoor_shop<br />\
    <img src="styles/legend/POI_4_48.png" /> pharmacy<br />\
    <img src="styles/legend/POI_4_49.png" /> picnic_site<br />\
    <img src="styles/legend/POI_4_50.png" /> police<br />\
    <img src="styles/legend/POI_4_51.png" /> post_box<br />\
    <img src="styles/legend/POI_4_52.png" /> post_office<br />\
    <img src="styles/legend/POI_4_53.png" /> public_building<br />\
    <img src="styles/legend/POI_4_54.png" /> restaurant<br />\
    <img src="styles/legend/POI_4_55.png" /> school<br />\
    <img src="styles/legend/POI_4_56.png" /> shoe_shop<br />\
    <img src="styles/legend/POI_4_57.png" /> sports_centre<br />\
    <img src="styles/legend/POI_4_58.png" /> sports_shop<br />\
    <img src="styles/legend/POI_4_59.png" /> supermarket<br />\
    <img src="styles/legend/POI_4_60.png" /> swimming_pool<br />\
    <img src="styles/legend/POI_4_61.png" /> theatre<br />\
    <img src="styles/legend/POI_4_62.png" /> toilet<br />\
    <img src="styles/legend/POI_4_63.png" /> town_hall<br />\
    <img src="styles/legend/POI_4_64.png" /> toy_shop<br />\
    <img src="styles/legend/POI_4_65.png" /> travel_agent<br />\
    <img src="styles/legend/POI_4_66.png" /> university<br />\
    <img src="styles/legend/POI_4_67.png" /> veterinary<br />\
    <img src="styles/legend/POI_4_68.png" /> viewpoint<br />\
    <img src="styles/legend/POI_4_69.png" /> <br />'
        });

lyr_GraybasemapOSM_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(false);lyr_Wwa_PRG_dzielnice_2.setVisible(true);lyr_ciezkipiesze_3.setVisible(true);lyr_POI_4.setVisible(true);
var layersList = [lyr_GraybasemapOSM_0,lyr_GoogleHybrid_1,lyr_Wwa_PRG_dzielnice_2,lyr_ciezkipiesze_3,lyr_POI_4];
lyr_Wwa_PRG_dzielnice_2.set('fieldAliases', {'JPT_SJR_KO': 'JPT_SJR_KO', 'JPT_POWIER': 'JPT_POWIER', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'JPT_ORGAN_': 'JPT_ORGAN_', 'JPT_JOR_ID': 'JPT_JOR_ID', 'WERSJA_OD': 'WERSJA_OD', 'WERSJA_DO': 'WERSJA_DO', 'WAZNY_OD': 'WAZNY_OD', 'WAZNY_DO': 'WAZNY_DO', 'JPT_KOD__1': 'JPT_KOD__1', 'JPT_NAZWA1': 'JPT_NAZWA1', 'JPT_ORGAN1': 'JPT_ORGAN1', 'JPT_WAZNA_': 'JPT_WAZNA_', 'ID_BUFORA_': 'ID_BUFORA_', 'ID_BUFORA1': 'ID_BUFORA1', 'ID_TECHNIC': 'ID_TECHNIC', 'IIP_PRZEST': 'IIP_PRZEST', 'IIP_IDENTY': 'IIP_IDENTY', 'IIP_WERSJA': 'IIP_WERSJA', 'JPT_KJ_IIP': 'JPT_KJ_IIP', 'JPT_KJ_I_1': 'JPT_KJ_I_1', 'JPT_KJ_I_2': 'JPT_KJ_I_2', 'JPT_OPIS': 'JPT_OPIS', 'JPT_SPS_KO': 'JPT_SPS_KO', 'ID_BUFOR_1': 'ID_BUFOR_1', 'JPT_ID': 'JPT_ID', 'JPT_POWI_1': 'JPT_POWI_1', 'JPT_KJ_I_3': 'JPT_KJ_I_3', 'JPT_GEOMET': 'JPT_GEOMET', 'JPT_GEOM_1': 'JPT_GEOM_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ciezkipiesze_3.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', 'ORIG_SEQ': 'ORIG_SEQ', });
lyr_POI_4.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', 'feature': 'feature', 'layer': 'layer', });
lyr_Wwa_PRG_dzielnice_2.set('fieldImages', {'JPT_SJR_KO': 'TextEdit', 'JPT_POWIER': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'JPT_ORGAN_': 'TextEdit', 'JPT_JOR_ID': 'Range', 'WERSJA_OD': 'DateTime', 'WERSJA_DO': 'DateTime', 'WAZNY_OD': 'DateTime', 'WAZNY_DO': 'DateTime', 'JPT_KOD__1': 'TextEdit', 'JPT_NAZWA1': 'TextEdit', 'JPT_ORGAN1': 'TextEdit', 'JPT_WAZNA_': 'TextEdit', 'ID_BUFORA_': 'TextEdit', 'ID_BUFORA1': 'TextEdit', 'ID_TECHNIC': 'Range', 'IIP_PRZEST': 'TextEdit', 'IIP_IDENTY': 'TextEdit', 'IIP_WERSJA': 'TextEdit', 'JPT_KJ_IIP': 'TextEdit', 'JPT_KJ_I_1': 'TextEdit', 'JPT_KJ_I_2': 'TextEdit', 'JPT_OPIS': 'TextEdit', 'JPT_SPS_KO': 'TextEdit', 'ID_BUFOR_1': 'Range', 'JPT_ID': 'Range', 'JPT_POWI_1': 'TextEdit', 'JPT_KJ_I_3': 'TextEdit', 'JPT_GEOMET': 'TextEdit', 'JPT_GEOM_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ciezkipiesze_3.set('fieldImages', {'Id': 'Range', 'ORIG_FID': 'TextEdit', 'ORIG_SEQ': 'TextEdit', });
lyr_POI_4.set('fieldImages', {'fclass': 'TextEdit', 'name': 'TextEdit', 'feature': 'TextEdit', 'layer': 'TextEdit', });
lyr_Wwa_PRG_dzielnice_2.set('fieldLabels', {'JPT_SJR_KO': 'no label', 'JPT_POWIER': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'JPT_ORGAN_': 'no label', 'JPT_JOR_ID': 'no label', 'WERSJA_OD': 'no label', 'WERSJA_DO': 'no label', 'WAZNY_OD': 'no label', 'WAZNY_DO': 'no label', 'JPT_KOD__1': 'no label', 'JPT_NAZWA1': 'no label', 'JPT_ORGAN1': 'no label', 'JPT_WAZNA_': 'no label', 'ID_BUFORA_': 'no label', 'ID_BUFORA1': 'no label', 'ID_TECHNIC': 'no label', 'IIP_PRZEST': 'no label', 'IIP_IDENTY': 'no label', 'IIP_WERSJA': 'no label', 'JPT_KJ_IIP': 'no label', 'JPT_KJ_I_1': 'no label', 'JPT_KJ_I_2': 'no label', 'JPT_OPIS': 'no label', 'JPT_SPS_KO': 'no label', 'ID_BUFOR_1': 'no label', 'JPT_ID': 'no label', 'JPT_POWI_1': 'no label', 'JPT_KJ_I_3': 'no label', 'JPT_GEOMET': 'no label', 'JPT_GEOM_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ciezkipiesze_3.set('fieldLabels', {'Id': 'no label', 'ORIG_FID': 'no label', 'ORIG_SEQ': 'no label', });
lyr_POI_4.set('fieldLabels', {'fclass': 'no label', 'name': 'hidden field', 'feature': 'hidden field', 'layer': 'hidden field', });
lyr_POI_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});