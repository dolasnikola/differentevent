import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  image: string;
  href: string;
  className?: string;
}

export function Card({ title, description, image, href, className = "" }: CardProps) {
  return (
    <Link
      href={href}
      className={`group block overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 font-playfair text-xl font-bold text-white">
          {title}
        </h3>
      </div>
      {description && (
        <div className="p-4">
          <p className="text-sm text-navy-700 line-clamp-2">{description}</p>
        </div>
      )}
    </Link>
  );
}
