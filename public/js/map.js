// // Функция ymaps.ready() будет вызвана, когда
// // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
// ymaps.ready(function () {
//   // Создание карты.
//   // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
//   const myMap = new ymaps.Map("map-test", {
//     // Координаты центра карты.
//     // Порядок по умолчнию: «широта, долгота».
//     center: [55.76, 37.64],
//     // Уровень масштабирования. Допустимые значения:
//     // от 0 (весь мир) до 19.
//     zoom: 12,
//     // Элементы управления
//     // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
//     // controls: [
//     //   "zoomControl", // Ползунок масштаба
//     //   "rulerControl", // Линейка
//     //   "routeButtonControl", // Панель маршрутизации
//     //   "trafficControl", // Пробки
//     //   "typeSelector", // Переключатель слоев карты
//     //   "fullscreenControl", // Полноэкранный режим

//     //   // Поисковая строка
//     //   new ymaps.control.SearchControl({
//     //     options: {
//     //       // вид - поисковая строка
//     //       size: "large",
//     //       // Включим возможность искать не только топонимы, но и организации.
//     //       provider: "yandex#search",
//     //     },
//     //   }),
//     // ],
  
// });
// });

//   // Добавление метки
//   // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
//   const myPlacemark = new ymaps.Placemark([55.76, 37.64], {
//     // Хинт показывается при наведении мышкой на иконку метки.
//     hintContent: "Содержимое всплывающей подсказки",
//     // Балун откроется при клике по метке.
//     balloonContent: "Содержимое балуна",
//   });

//   // После того как метка была создана, добавляем её на карту.
//   myMap.geoObjects.add(myPlacemark);
// }

// map.controls.remove("geolocationControl"); // удаляем геолокацию
// map.controls.remove("searchControl"); // удаляем поиск
// map.controls.remove("trafficControl"); // удаляем контроль трафика
// map.controls.remove("typeSelector"); // удаляем тип
// map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
// map.controls.remove("zoomControl"); // удаляем контрол зуммирования
// map.controls.remove("rulerControl"); // удаляем контрол правил
// map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

ymaps.ready(init);
function init(coor) {
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7,
  });
}


// var placemark = new ymaps.Placemark(
//   coordinates, {
//       'hintContent': address,
//       'balloonContent': 'Время работы: Пн-Пт, с 9 до 20'
//   }, {
//       'preset': 'islands#redDotIcon'
//   }
// );

// myMap.geoObjects.add(placemark);


// map.controls.remove("geolocationControl"); // удаляем геолокацию
// map.controls.remove("searchControl"); // удаляем поиск
// map.controls.remove("trafficControl"); // удаляем контроль трафика
// map.controls.remove("typeSelector"); // удаляем тип
// map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
// map.controls.remove("zoomControl"); // удаляем контрол зуммирования
// map.controls.remove("rulerControl"); // удаляем контрол правил
// map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

// ymaps.ready(init);

// function init() {
//     // Подключаем поисковые подсказки к полю ввода.
//     var suggestView = new ymaps.SuggestView('suggest'),
//         map,
//         placemark;

//     // При клике по кнопке запускаем верификацию введёных данных.
//     $('#button').bind('click', function (e) {
//         geocode();
//     });

//     function geocode() {
//         // Забираем запрос из поля ввода.
//         var request = $('#suggest').val();
//         // Геокодируем введённые данные.
//         ymaps.geocode(request).then(function (res) {
//             var obj = res.geoObjects.get(0),
//                 error, hint;

//             if (obj) {
//                 // Об оценке точности ответа геокодера можно прочитать тут: https://tech.yandex.ru/maps/doc/geocoder/desc/reference/precision-docpage/
//                 switch (obj.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
//                     case 'exact':
//                         break;
//                     case 'number':
//                     case 'near':
//                     case 'range':
//                         error = 'Неточный адрес, требуется уточнение';
//                         hint = 'Уточните номер дома';
//                         break;
//                     case 'street':
//                         error = 'Неполный адрес, требуется уточнение';
//                         hint = 'Уточните номер дома';
//                         break;
//                     case 'other':
//                     default:
//                         error = 'Неточный адрес, требуется уточнение';
//                         hint = 'Уточните адрес';
//                 }
//             } else {
//                 error = 'Адрес не найден';
//                 hint = 'Уточните адрес';
//             }

//             // Если геокодер возвращает пустой массив или неточный результат, то показываем ошибку.
//             if (error) {
//                 showError(error);
//                 showMessage(hint);
//             } else {
//                 showResult(obj);
//             }
//         }, function (e) {
//             console.log(e)
//         })

//     }
//     function showResult(obj) {
//         // Удаляем сообщение об ошибке, если найденный адрес совпадает с поисковым запросом.
//         $('#suggest').removeClass('input_error');
//         $('#notice').css('display', 'none');

//         var mapContainer = $('#map'),
//             bounds = obj.properties.get('boundedBy'),
//         // Рассчитываем видимую область для текущего положения пользователя.
//             mapState = ymaps.util.bounds.getCenterAndZoom(
//                 bounds,
//                 [mapContainer.width(), mapContainer.height()]
//             ),
//         // Сохраняем полный адрес для сообщения под картой.
//             address = [obj.getCountry(), obj.getAddressLine()].join(', '),
//         // Сохраняем укороченный адрес для подписи метки.
//             shortAddress = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ');
//         // Убираем контролы с карты.
//         mapState.controls = [];
//         // Создаём карту.
//         createMap(mapState, shortAddress);
//         // Выводим сообщение под картой.
//         showMessage(address);
//     }

//     function showError(message) {
//         $('#notice').text(message);
//         $('#suggest').addClass('input_error');
//         $('#notice').css('display', 'block');
//         // Удаляем карту.
//         if (map) {
//             map.destroy();
//             map = null;
//         }
//     }

//     function createMap(state, caption) {
//         // Если карта еще не была создана, то создадим ее и добавим метку с адресом.
//         if (!map) {
//             map = new ymaps.Map('map', state);
//             placemark = new ymaps.Placemark(
//                 map.getCenter(), {
//                     iconCaption: caption,
//                     balloonContent: caption
//                 }, {
//                     preset: 'islands#redDotIconWithCaption'
//                 });
//             map.geoObjects.add(placemark);
//             // Если карта есть, то выставляем новый центр карты и меняем данные и позицию метки в соответствии с найденным адресом.
//         } else {
//             map.setCenter(state.center, state.zoom);
//             placemark.geometry.setCoordinates(state.center);
//             placemark.properties.set({iconCaption: caption, balloonContent: caption});
//         }
//     }

//     function showMessage(message) {
//         $('#messageHeader').text('Данные получены:');
//         $('#message').text(message);
//     }
// }