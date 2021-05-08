//main list 버튼 객체 생성
const menuList_01 = document.querySelector("#menuList_01");
const menuList_02 = document.querySelector("#menuList_02");
const menuList_03 = document.querySelector("#menuList_03");
const menuList_04 = document.querySelector("#menuList_04");
const menuList_05 = document.querySelector("#menuList_05");
const menuList_06 = document.querySelector("#menuList_06");
const menuList_07 = document.querySelector("#menuList_07");


//클릭 이벤트 생성
menuList_01.addEventListener("click",newArticle_01);
menuList_02.addEventListener("click",newArticle_02);
menuList_03.addEventListener("click",newArticle_03);
menuList_04.addEventListener("click",newArticle_04);
menuList_05.addEventListener("click",newArticle_05);
menuList_06.addEventListener("click",newArticle_06);
menuList_07.addEventListener("click",newArticle_07);

// article div 객체 생성 
const main = document.querySelector('.main_article');
const title = document.querySelector('.article__title');
const articleLeft = document.querySelector('.atricle__text__left');
const articleRight = document.querySelector('.atricle__text__right');
const article = document.querySelector('.article__text__Wrapper');


function ani () {
    title.classList.remove("animation_slideText__title");
    void title.offsetWidth;
    title.classList.add("animation_slideText__title");

    article.classList.remove("animation_slideText__article");
    void title.offsetWidth;
    article.classList.add("animation_slideText__article");
}




// menu_list 누르면 바뀌는 화면 함수
function newArticle_01 () {

    title.innerHTML = "<p class='article__title__strong'>안녕하세요" + 
    "<p class='article__title__strong'>윤기홍입니다.</p>" +
    "<p class='article__title__light'># &lt;h1&gt; Hello World &lt;/h1&gt;</p>"

    articleLeft.innerHTML = "<p class='article__text__strong'>안녕하세요, 윤기홍입니다.</p>" +
    "<P  class='article__text__light'>" +
        "본격적으로 포트폴리오를 만들기 전 작성자 본인데 대한 소개, 그리고 앞으로의 뱡향을 설정하기 위한" +
        "페이지를 만들었습니다. 다양한 모습과 목표를 가진'나'에 대해 서 알아가고 있는 과정을 기록해나갈 예정입니다.</p>"

    articleRight.innerHTML = "<p class='article__text__strong'>드디어 키보드를 잡아볼 시간!</p>" +
        "<P  class='article__text__light'>" +
            "약 두달간 책으로만 HTML,CSS,JavaScript 를 공부했고, 실시간으로 내가만든코드를 학인할 수 있어서 웹개발 공부를 시작했습니다." +
            "이제까지는 코드를 짤 수 있는 컴퓨터가 없었지만, 드디어 자유롭게 쓸 수 있는 컴퓨터가 생겼으니 그동안 기획했던 다양한" +
            "프로젝트를 웹을 통해서 실험해보려 합니다."

    ani();
}
function newArticle_02 () {
  

    title.innerHTML = "<p class='article__title__strong'>이름보다" + 
    "<p class='article__title__strong'> 더 많이 불린이름,<p class='article__title__strong'>기홍꾸!</p>" +
    "<p class='article__title__light'>#kihong_9 #기홍9 #굥꾸</p>"

    articleLeft.innerHTML = "<p class='article__text__strong'>기홍꾸라고 불러주세요.</p>" +
    "<P  class='article__text__light'>" +
        "슬리퍼를 잃어버리지 않으려고 큼지막하게 '기홀꾸' 라고 적어놓았는데," +
        "어느샌가 모두들 '기홍꾸'라고 부르고 있었습니다."+
        "왠지 입에 착착붙고 중독성이 있는 별명입니다." +
        "닉네임으로 활동해야하는 자리에 갈 때면 항상 '기홍꾸' 로 별명을 짓곤 합니다.</P>"

    articleRight.innerHTML = "<p class='article__text__strong'>왜 기홍꾸냐구요?</p>" +
        "<P  class='article__text__light'>" +
            "딱히 별 이유는 없습니다. 인스타그램 게시물을 올릴 때마다" +
            "문장 끝에 9를 붙이는 말투가 습관이 되다 보니 자연스럽게 기홍꾸 가되어있었습니다.</P>"
   
    ani();  
}
function newArticle_03 () {

    title.innerHTML =
    "<p class='article__title__strong'>열정! 열정! 열정!</p>" +
    "<p class='article__title__light'>#ENFP #일단 #움직여</p>"

    articleLeft.innerHTML = "<p class='article__text__strong'> 언제나 열정으로 가득합니다.</p>" +
    "<P  class='article__text__light'>" +
        "ENFP 그 자체! 열정으로 가득 찬 유형의 사람입니다. 항상 새로운 것을 시도하고 또 경험하는것을 즐기며,"+
        "다양한 사람들과 만나고 시야를 넓히는 것을 좋아합니다. 일상의 모든 것에서 영감을 얻으며,"+
        "새로운 시도를 계획 합니다. 정신을 차려보면 블록버스터 급으로 일을 키워놓곤 합니다.</p>"

    articleRight.innerHTML = "<p class='article__text__strong'>성취하기 위해 살아갑니다.</p>" +
        "<P  class='article__text__light'>" +
            "누군가 삶의 이유가 무엇이냐고 물으면, 얻게 된 지식을 토대로 어떤 분야에서 성과를 발휘하면서 영향력을" +
            "끼치기 위해 살아간다고할 것 같습니다. 행동하고, 이에대한 결과 그리고 변화들을 보기 위해 살아갑니다. </P>"

    ani();
}
function newArticle_04 () {

    title.innerHTML =  
    "<p class='article__title__strong'>상상을 현실로<p class='article__title__strong'>만듭니다.</p>" +
    "<p class='article__title__light'>#ENFP #일단 #움직여</p>"

    articleLeft.innerHTML = "<p class='article__text__strong'>계획을 가시화 합니다.</p>" +
    "<P  class='article__text__light'>" +
        "재미있는 일이 생각나면 머릿속으로 맘껏 확장해보고 펜과 종이를 잡고 충분히 구체화하고 계획학 뒤 일단 실행해 봅니다."+
        "생각만으로, 그리고 상상속에서만 존제했던 것들을 직접 만져보고 경험할 수 있도록 실체화 하는 것을 좋아합니다."+
        "저는 이러한 활동을 보통 가시화 한다고 표현하곤 합니다.</p>"

    articleRight.innerHTML = "<p class='article__text__strong'>성취하기 위해 살아갑니다.</p>" +
        "<P  class='article__text__light'>" +
            "가지고 있는 자원, 지식이 부족하더라도 일단 찾아보고 또 있는 그대로 만들어봅니다. 작고 하찮은 무언가가 만들어지더라도" +
            "일단 시도했다는것에 의의를 두고 보완할 점, 부족한 점을 찾고 가능한 빨리 다시 만들어봅니다.</P>"

    ani();
}
function newArticle_05 () {

    title.innerHTML = "<p class='article__title__strong'>돌고돌아," + 
    "<p class='article__title__strong'>결국 기획!</p>" +
    "<p class='article__title__light'>#계획 #기획 #판벌리기</p>" +
    "<p class='article__title__light'>#연결하고 #확장하기</p>"


    articleLeft.innerHTML = "<p class='article__text__strong'> 프로젝트의 주춧돌 기획</p>" +
    "<P  class='article__text__light'>" +
        "지금까지 해왔던 일을 되돌아 보면 결국 기획을 하는 순간이 가장 재미있었습니다."+
        "일단 종이와 펜을 꺼내고 정신없이 갖고있는 자원과 지식 그리고 주변 사람들을 연결하고" +
        "확장하다보면 어느세 하찮지만 빽빽한 기획서가 눈앞에 만들어집니다. </p>"

    articleRight.innerHTML = "<p class='article__text__strong'>큰 흐름부터 작은 디테일까지</p>" +
        "<P  class='article__text__light'>" +
        "프로젝트의 전체적인 흐름부터 작고 디테일한 부분까지 꽉차게 기획할수록 실행하는 데에 필요한 리스크와 비용을 줄일 수 있었습니다." +
        "비록 막상 실행해보면 기획한 대로 되지 않거나, 예상치 못한 이슈를 발생시키긴 하지만. 그때그때 상황에 맞추어 문제를 해결해 나가는 것도" +
        "기획의 매력이니까요. </p>"

    ani();
}
function newArticle_06 () {

    title.innerHTML = "<p class='article__title__strong'>써보고싶도록," + 
    "<p class='article__title__strong'>갖고싶도록.</p>" +
    "<p class='article__title__light'>#편집디자인 #3D #요즘은 #UIUX</p>"

    articleLeft.innerHTML = "<p class='article__text__strong'>보기 좋은 무언가를 만드는 일</p>" +
    "<P  class='article__text__light'>" +
        "좀 더 보기 좋고 손에 잡고 싶은 무언가를 만드는 일을 좋아합니다." +
        "무엇보다 종이 위에 무언갈 디자인하는 걸 좋아합니다." 
        "밤새워서 열심히 작업한 인쇄물을 모니터 밖에서 직접 만져보면 그보다 뿌듯하고 뭉클한 일은 또 없으니까요.</p>"

    articleRight.innerHTML = "<p class='article__text__strong'>좋아하는 일 그리고 하고 싶은 일</p>" +
        "<P  class='article__text__light'>" +
            "내가 좋아하고 하고싶은 일이 무엇인지 고민해보고 알고있는 지식 내에서 명명해보면" +
            "'디자인' 이라는 항목을 찾을 수 있었습니다." +
            "상대방을 설득할 수 있는, 고객의 지갑을 흔쾌히 열게 만들 수 있는 근거와 성과가 있는" +
            "하는 것이 목표입니다.</p>"

    ani();
}
function newArticle_07 () {

    title.innerHTML = "<p class='article__title__strong'>코린이" + 
    "<p class='article__title__strong'>기홍꾸 입니다!</p>" +
    "<p class='article__title__light'>#HTML #CSS #JavaScript</p>"

    articleLeft.innerHTML = "<p class='article__text__strong'>빠른 실행을 위한 새로운 도구.</p>" +
    "<P  class='article__text__light'>" +
        "이제까진 새로운 무언가를 위해 사람을 모으거나, 빨리 아이디어를 실험해 보기 위해 디자인라는 도구를 사용해 왔지만" +
        "이제부터는 디자인과 개발을 함께 사용해보려고 합니다. 다름이와 좀 더 정확히, 신속하게 소통할 수 있을때까지 연습! 또 연습하고 있습니다!<p>"

    articleRight.innerHTML = "<p class='article__text__strong'>이제까지와는 다른 시각</p>" +
        "<P  class='article__text__light'>" +
            "논리적으로, 단계적으로 사고하는 것은 낮설고 여러운 일이였습니다." +
            "다른 사람들과 소통하기 이전에 컴퓨터와 먼저 대화해야 하니까요." +
            "아직은 기본적인 지식을 습득하고 직접 경험하는 과정에 있습니다<br>" +
            "(컴퓨터는 이세상에서 제일 멍청한 기계임이 틀림없습니다^^)</p>"

    ani();
}