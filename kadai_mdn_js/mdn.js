// 今日の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

// 希望の形式で日付を表示
//const formattedDate = '${2025年}/${4月}/${10日}';
const formattedDate = year + "年" + month + "月" + day + "日";

console.log(formattedDate);

