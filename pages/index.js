import ArtPieces from "../components/ArtPieces";

export default function HomePage({ pieces }) {
  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
