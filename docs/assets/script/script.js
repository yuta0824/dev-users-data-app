// /**
//  * 最大幅に基づいてviewport設定を切り替える関数。
//  * @function
//  * @param {number} maxWidth - viewportを固定する際の最大幅
//  */
// const switchViewport = (maxWidth) => {
//   const viewport = document.querySelector('meta[name="viewport"]');
//   const value =
//     window.outerWidth > maxWidth
//       ? "width=device-width,initial-scale=1"
//       : `width=${maxWidth}`;
//   if (viewport.getAttribute("content") !== value) {
//     viewport.setAttribute("content", value);
//   }
// };
// addEventListener("resize", () => switchViewport(600));
// switchViewport(600);

/**
 * @function fetchData - ユーザーデータを取得する関数
 * @returns {Promise<void>} - 非同期処理のため、Promiseを返す
 * @throws {Error} - データ取得に失敗した場合、エラーをスローする
 * @description - ユーザーデータを取得し、テーブルに表示する
 *
 */
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    console.error("Error", error);
  }
  const usersJsonData = await response.json();
  console.log(usersJsonData);

  usersJsonData.forEach((userData) => {
    // idを取得
    const idTdElement = document.createElement("td");
    idTdElement.textContent = userData.id;
    idTdElement.classList.add("border", "p-2");

    // 名前を取得
    const nameTdElement = document.createElement("td");
    nameTdElement.textContent = userData.name;
    idTdElement.classList.add("border", "p-2");
    nameTdElement.classList.add("border", "p-2");

    // 電話番号を取得
    const phoneTdElement = document.createElement("td");
    phoneTdElement.textContent = userData.phone;
    phoneTdElement.classList.add("border", "p-2");

    // メールアドレスを取得
    const emailTdElement = document.createElement("td");
    emailTdElement.textContent = userData.email;
    emailTdElement.classList.add("border", "p-2");

    // テーブル行を生成
    const trElement = document.createElement("tr");
    trElement.appendChild(idTdElement);
    trElement.appendChild(nameTdElement);
    trElement.appendChild(phoneTdElement);
    trElement.appendChild(emailTdElement);

    // テーブルに行を追加
    const tableElement = document.querySelector("#table-body");
    tableElement.appendChild(trElement);
  });
  const userList = document.querySelector("user-list");
};

fetchData();
