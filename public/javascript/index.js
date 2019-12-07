document.querySelector('#find').addEventListener('click', () => {
    const location = document.querySelector('#location');
    switch (location.value) {
        case "서울": {
            const container = document.getElementById('map');
            let options = {
                center: new kakao.maps.LatLng(37.565794, 126.976841),
                level: 3
            };
            let map = new kakao.maps.Map(container, options);
            break;

        };
        case "인천": {
            const container = document.getElementById('map');
            let options = {
                center: new kakao.maps.LatLng(37.457394, 126.703610),
                level: 3
            };
            let map = new kakao.maps.Map(container, options);
            break;

        };
        case "부산": {
            const container = document.getElementById('map');
            let options = {
                center: new kakao.maps.LatLng(35.179888, 129.075030),
                level: 3
            };
            let map = new kakao.maps.Map(container, options);
            break;

        };
    }
});