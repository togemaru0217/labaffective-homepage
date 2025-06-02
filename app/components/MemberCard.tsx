import Image from "next/image";

type MemberProps = {
  name: string;
  hobby: string;
  research: string;
  image: string;
};

export default function MemberCard({ name, hobby, research, image }: MemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs mx-auto">
      <div className="relative h-48 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4 text-sm">
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        <p><span className="font-semibold">好きなこと：</span>{hobby}</p>
        <p><span className="font-semibold">研究内容：</span>{research}</p>
      </div>
    </div>
  );
}
