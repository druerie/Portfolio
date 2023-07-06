$(document).ready(function(){

        var swiper = new Swiper(".mySwiper", {
          slidesPerView: getSlidesPerView(), // 초기 슬라이드 개수 설정
          spaceBetween: 10,
        });

        // 미디어 쿼리에 따라 슬라이드 개수 변경
        function getSlidesPerView() {
            if (window.matchMedia("(max-width: 540px)").matches) {
                return 1; // 슬라이드 개수를 1로 설정 (768px 이하의 화면 크기)
            } else {
                return 2; // 슬라이드 개수를 2로 설정 (768px 초과의 화면 크기)
            }
        }

        // 윈도우 크기 변경 시 슬라이드 개수 업데이트
        window.addEventListener('resize', function () {
            swiper.params.slidesPerView = getSlidesPerView(); // 슬라이드 개수 업데이트
            swiper.update(); // 슬라이드 업데이트
        });

});
