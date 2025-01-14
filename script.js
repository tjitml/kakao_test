document.addEventListener("DOMContentLoaded", function () {
    // 지도 컨테이너 가져오기
    var container = document.getElementById('map-container'); 

    // 지도 옵션 설정
    var options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 중심 좌표
        level: 3 // 확대 레벨
    };

    // 지도 생성
    var map = new kakao.maps.Map(container, options);

    // 지도 생성 성공 여부 확인
    console.log("지도 생성 성공");
});
