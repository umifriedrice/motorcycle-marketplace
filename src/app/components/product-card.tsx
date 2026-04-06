export default function ProductCard({
  image,
  model,
  brand,
  brandLogo,
  year,
}: Props) {
  return (
    <div className="flex flex-col">
      <div>
        <img src={image} />
      </div>
      <span>{model}</span>
      <div>{brand}</div>
      <div>{year}</div>
    </div>
  );
}

type Props = {
  image: string;
  model: string;
  brandLogo: string;
  brand: string;
  year: number;
};
