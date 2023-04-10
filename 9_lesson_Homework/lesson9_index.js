// 1 
// $(document).ready(function () {
//     $("h2.head").css("background-color", "green")
//     $("h2.head").find(".inner").css("font-size", "35px")
// });

// $(function () {
//     $("h2.head")
//         .css("background-color", "green")
//         .find(".inner")
//         .css("font-size", "35px")
// })

// 2
// $(function () {
//     $('a[href^="https://"]').attr("target", "_blank");
// });
// 3
// $("h3 + div").each(function () {
//     $(this).insertBefore($(this).prev("h3"));
// });

// 4

// const $checkboxes = $("input[type='checkbox']");
// $checkboxes.change(function () {
//     const $checked_checkboxes = $checkboxes.filter(":checked");
//     if ($checked_checkboxes.length >= 3) {
//         $checkboxes.prop("disabled", true)
//     }
// });
