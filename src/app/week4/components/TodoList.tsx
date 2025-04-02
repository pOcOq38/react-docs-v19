const today = new Date();

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-Us", { weekday: "long" }).format(date);
}
const person = {
  name: "Gregorio Y. Zara",
  theme: {
    /*인라인 스타일 전달 예시) - 객체 전달 시 {}로 감싸서 전달해야 함 
    style프로퍼티는 카멜케이스로 작성 */
    backgroundColor: "black",
    color: "pink",
  },
};

const baseUrl = "https://i.imgur.com/";
const imgInfo = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};
export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>
        {person.name}'s To Do List for {formatDate(today)}
      </h1>
      <img
        className="avatar"
        src={baseUrl + imgInfo.imageId + imgInfo.imageSize + ".jpg"} //객체 안에 넣어야 함
        alt="Gregorio Y. Zara"
      />

      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
