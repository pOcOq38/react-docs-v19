import { getImageUrl } from "./utils";

interface Person {
  name: string;
  imageId: string;
}

export function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return <img className="avatar" src={avatar} alt={description} />;
}

export function AvatarImg({
  person,
  size = 100, //넘어오는 size 값이 없을 때 디폴트 값
}: {
  person: Person;
  size: number;
}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, "s")}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Bio() {
  return (
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br />
        <br />
        And{" "}
        <b>
          <i>pictures</i>
        </b>{" "}
        of scientists!
      </p>
    </>
  );
}
