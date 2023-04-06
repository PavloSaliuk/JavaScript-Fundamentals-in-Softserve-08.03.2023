// 1 
// $(document).ready(function () {
//     $("h2.head").css("background-color", "green")
//     $("h2.head .inner").css("font-size", "35px")
// });

// 2
// $(document).ready(function () {
//     $('a[href^="https://"]').attr("target", "_blank");
// });
// 3
// $("h3 + div").each(function () {
//     $(this).insertBefore($(this).prev("h3"));
// });

// 4
// $(document).ready(function () {
//     const checkboxes = $("input[type='checkbox']");
//     checkboxes.on("change", function () {
//         const checkedCount = checkboxes.filter(":checked").length;
//         if (checkedCount >= 3) {
//             checkboxes.not(":checked").prop("disabled", true);
//         } else {
//             checkboxes.prop("disabled", false);
//         }
//     });
// });
