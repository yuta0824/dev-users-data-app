/**
 * @function fetchData - APIデータを取得する関数
 * @returns {Promise<Array>} - ユーザーデータの配列を返す
 * @throws {Error} - データ取得に失敗した場合、エラーをスローする
 */
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("データ取得に失敗しました");
  }
  return await response.json();
};

/**
 * @function createTdElement - td要素を生成する関数
 * @param {string} textContent - td要素に設定するテキストコンテンツ
 * @param {Array<string>} classes - td要素に追加するクラスの配列
 * @returns {HTMLElement} - 生成されたtd要素
 */
const createTdElement = (textContent, classes) => {
  const tdElement = document.createElement("td");
  tdElement.textContent = textContent;
  classes.forEach((cls) => tdElement.classList.add(cls));
  return tdElement;
};

/**
 * @function renderTable - 受け取ったJSONを元にDOMを生成する関数
 * @param {Array} usersJsonData - ユーザーデータの配列
 * @returns {void}
 */
const renderTable = (usersJsonData) => {
  usersJsonData.forEach((userData) => {
    // tdタグを生成
    const trElement = document.createElement("tr");
    // tdタグに付与するクラス属性
    const classes = ["border", "p-2"];
    // tdタグに表示するデータのキー
    const keys = ["id", "name", "phone", "email"];

    /**
     * キーを元に。繰り返し処理でtdタグを生成し、trタグに追加
     */
    keys.forEach((key) => {
      const tdElement = createTdElement(userData[key], classes);
      trElement.appendChild(tdElement);
    });

    // 生成したtrタグをtable要素に追加
    const tableElement = document.querySelector("#table-body");
    tableElement.appendChild(trElement);
  });
};

/**
 * @function init - 初期化関数
 */
const init = async () => {
  try {
    const usersJsonData = await fetchData();
    renderTable(usersJsonData);
  } catch (error) {
    console.error("Error", error);
  }
};

init();
