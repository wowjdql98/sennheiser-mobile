// 검색창 컴포넌트 UI
$(function(){
  const html = `
    <!-- 검색 UI -->
    <div class="search-box">
      <form class="search-box-container">
        <input 
          type="search" 
          id="search"
          placeholder="검색"
          required
        >
        <div class="button-group">
          <button id="submit" type="submit">
            <i class="bi bi-search"></i>
          </button>
          <button class="btn-close">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </form>
    </div>`;
  $('body').append(html); 

}); // $


$(function(){

  /*** #gnb toggle ***/
  // 1. 열기: #toggle-btn 클릭시 #gnb on
  $('#toggle-btn').click(function(){
    $('#gnb').addClass('on');
  });
  // 2. 닫기: #btn-close 클릭시 #gnb 닫음
  $('#btn-close').click(function(){
    $('#gnb').removeClass('on');
  });

  /*** 검색창 열고, 닫기 */
  // 1. #icon-menu .bi-search 누르면 열기
  $('#icon-menu .bi-search').click(function(){
    $(".search-box").addClass('on');
  });
  // 2. .search-box .btn-close 누르면 닫기
  $('.search-box .btn-close').click(function(){
    $(".search-box").removeClass('on');
  })
}); // $





/* 파라미터를 전달하여 요청하기
  홈페이지주소?name=홍길동
    매개변수(URL parameter) name = '홍길동'

  index.html -> index.html?category=dog -> 개 보여주시오
  cat.html -> cat.html?category=cat -> 고양이 보여주시오
  bird.html -> bird.html?category=bird -> 새 보여주시오
*/