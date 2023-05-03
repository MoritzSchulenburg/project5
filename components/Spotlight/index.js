import Image from "next/image";

export default function Spotlight({ art }) {
  console.log("Art in spotlight: ", art);
  return (
    <div>
      <h1>in Spotlight</h1>
      <Image src={art.imageSource} alt="art piece" width={200} height={200} />
      <p>{art.artist}</p>
    </div>
  );
}
