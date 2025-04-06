import { Avatar, AvatarImg } from "./Bio";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

export function Profile() {
  return (
    <>
      <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />
      <Avatar />
      <h3>Avatar Img</h3>
      <Card>
        <AvatarImg
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
      </Card>
      <Card>
        <AvatarImg
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
      </Card>
      <Card>
        <AvatarImg
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />
      </Card>
    </>
  );
}
