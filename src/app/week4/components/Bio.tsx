export function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return <img className="avatar" src={avatar} alt={description} />;
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
