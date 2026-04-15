import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({
  image,
  model,
  brand,
  brandLogo,
  year,
  engineCc,
  horsepower,
  price
}: Props) {
  return (
    <Card className="flex flex-col">
      <div>
        <img src={image} />
      </div>
      <div>{brand}</div>
      <span>{model}</span>
      <div className="flex gap-2">
        <span>{engineCc}</span>
        <span>{horsepower}</span>
        <span>{year}</span>
      </div>
      <div>{formatPrice(price)}</div>
    </Card>
  );
}

type Props = {
  image: string;
  model: string;
  brandLogo: string;
  brand: string;
  year: number;
  engineCc: number;
  horsepower: number;
  price: number;
};
