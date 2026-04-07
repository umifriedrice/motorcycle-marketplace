import { Card } from "@/components/ui/card";

export default function ProductCard({
  image,
  model,
  brand,
  brandLogo,
  year,
}: Props) {
  return (
    <Card className="flex flex-col">
      <div>
        <img src={image} />
      </div>
      <span>{model}</span>
      <div>{brand}</div>
      <div>{year}</div>
    </Card>
  );
}

type Props = {
  image: string;
  model: string;
  brandLogo: string;
  brand: string;
  year: number;
};
