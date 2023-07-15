
function init(){
  let map = new ymaps.Map('map',{
    center:[55.624251, 37.514248], // ваши данные
    zoom: 14
  });

  let placemark = new ymaps.Placemark([55.624251, 37.514248],{

    balloonContent:`
      <div class="balloon">
        <div class="balloon__address">Москва, ул. Профсоюзная 123</div>
      </div>
    `
  },{
    iconLayout: 'default#image',
    iconImageHref: '/images/marker.svg',
    iconImageSize: [68,68],
    iconImageOffset: [-25,-25],
  });

   map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark)
}

ymaps.ready(init);