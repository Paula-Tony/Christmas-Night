$(function () {
  navHandler($("#nav"));

  singersSlider($("#singers"));

  startCountdown($("#counter"));

  textareaCalcChars($("#textarea-container"));
});

function navHandler(nav) {
  nav.find("#nav-icon").on("click", function () {
    nav.css(
      "left",
      nav.css("left") === "0px" ? `-${nav.innerWidth()}px` : "0px"
    );
  });

  nav.find("a").on("click", function (event) {
    event.preventDefault();
    const target = $($(this).attr("href"));
    if (target) $(window).scrollTop(target.offset().top);
  });
}

function singersSlider(singers) {
  singers.find("h2").on("click", function () {
    singers.find("h2").not(this).next().slideUp();
    $(this).next().slideToggle();
  });
}

function startCountdown(display) {
  const targetDate = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59);
  const interval = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    display.find("#days").text(days);
    display.find("#hours").text(hours);
    display.find("#minutes").text(minutes);
    display.find("#seconds").text(seconds);
  }, 1000);
}

function textareaCalcChars(textareaContainer) {
  const textarea = textareaContainer.find("textarea");
  const chars = textareaContainer.find("#chars");
  const maxlength = textarea.attr("maxlength");
  textarea.on("keyup", function () {
    chars.text(maxlength - this.value.length);
  });
}
