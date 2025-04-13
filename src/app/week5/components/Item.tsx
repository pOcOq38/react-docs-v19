export default function Item({
  name,
  isPacked,
  importance,
}: {
  name: string;
  isPacked: boolean;
  importance: number;
}) {
  //   if (isPacked) {
  //     return <li className="item"> {name} ✅</li>;
  //   }
  //   return <li className="item"> {name}</li>;
  return (
    <li className="item">
      {" "}
      {isPacked ? <del> {name + "✅"} </del> : name}
      {importance < 1 ? null : <>(importance:{importance})</>}
    </li>
  );
}
