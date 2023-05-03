import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div className="card">
      <Image src={image} alt="art piece" width={200} height={200} />
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
