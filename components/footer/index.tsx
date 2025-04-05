"use client";
import "./styles.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { stackList } from "../stack/stack-list";
import Typography from "../ui/Typography/component";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { montserratFont } from "@/app/font";

type StackItem = {
  href: string;
  itemName: string;
  type: string;
};

function flattenStackList() {
  const flat: StackItem[] = [];

  stackList.forEach((entry) => {
    if (entry.type === "group" && entry.items) {
      entry.items.forEach((item) => {
        flat.push({
          href: item.href,
          itemName: item.itemName,
          type: item.type,
        });
      });
    }
  });

  return flat;
}

export function DynamicFooter() {
  const pathname = usePathname();
  const items = flattenStackList();

  const currentIndex = items.findIndex((item) => item.href === pathname);

  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextItem =
    currentIndex >= 0 && currentIndex < items.length - 1
      ? items[currentIndex + 1]
      : null;

  return (
    <footer className="footer-container">
      <div className={montserratFont.className}>
        <Link href={prevItem?.href ? prevItem?.href : "#"}>
          <Typography variant="body2">
            <MdChevronLeft className="prev" />
            {prevItem?.itemName}
          </Typography>
        </Link>
        <Link href={nextItem?.href ? nextItem?.href : "#"}>
          <Typography variant="body2">
            {nextItem?.itemName}
            <MdChevronRight className="next" />
          </Typography>
        </Link>
      </div>
    </footer>
  );
}
