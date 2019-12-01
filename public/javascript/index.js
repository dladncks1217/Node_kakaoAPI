document.querySelector('#find').addEventListener('click', () => {
    const location = document.querySelector('#location');
    switch (location.value) {
        case "서울": {
            const container = document.getElementById('map');
            let options = {
                center: new kakao.maps.LatLng(33, 126.),
                level: 3
            };
            let map = new kakao.maps.Map(container, options);
            break;

        };
        case "인천": {
            const container = document.getElementById('map');
            let options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };
            let map = new kakao.maps.Map(container, options);
            break;

        };
        case "부산": {
            const container = document.getElementById('map');
            let options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };
            let map = new kakao.maps.Map(container, options);
            break;

        };
    }
});