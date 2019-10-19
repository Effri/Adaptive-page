$('#show-form').one('click', function () {
  $(".background-one").css("background-image","none");
  $(".picture-attractive").css("margin-bottom","108px");
    $(".bg-two-show").append(`
              <div class="main-content background-two wrapper spoiler-block " style="display:block; min-height: 2050px; margin: 0 0 60px 0;" id="bg-two">
      <div id="mysecnav" class="nav-second bar text-nav-second ">
        <a href="#" class="menu-nav" id="sell-next">Торговать</a>
        <a href="#" class="menu-nav " id="invest-next">Инвестировать</a>
        <a href="#" class="menu-nav " id="attractive-next">Привлекать инвесторов</a>
      </div>
      <div class="info-about">Если вы ищете пассивный доход и предпочитаете, чтобы деньги для вас 
        зарабатывал тот, кто умеет это делать, тогда попробуйте ЛАММ. ЛАММ – это сервис копирования 
      сделок успешных трейдеров. Доходность ни чем не ограничена!</div>
      <div class="h1-info">Как это работает</div>
      <ul class="number">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li class="four-style">4</li>
        <li>5</li>
        <li>6</li>
      </ul>
      <ul class="text-info">
        <li>Вы выбираете управляющего из рейтинга по фильтру Options</li>
        <li>Подключаете свой счет к счету Управляющего</li>
        <li>На вашем счете начинается копирование сделок</li>
        <li>Обратите внимание, что вы не перечисляете свои деньги Управляющему. Все ваши средства остаются на Вашем счете.</li>
        <li>Вы можете подключиться к нескольким Управляющим одновременно.</li>
        <li>Вы можете отключиться от Управляющих в любой момент.</li>
      </ul>
      <div class="button-onClick">
        <a href="#">Открыть счет</a>
      </div>
    </div>
            `);


        $("#show-form").click(function() {
          $(".background-one").css("background-image","url(img/block-1/bg1.png)");
        $(".bg-two-show").remove();
        return false;
    });
});