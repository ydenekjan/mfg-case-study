import { IProduct, Props } from "@/types/types";
import { Button } from "@/components/ui/button";
import LinkArrow from "@/assets/icons/link-arrow.svg";
import Link from "next/link";

export const ProductRedirect = ({
  url,
  isLoading,
}: { url?: IProduct["url"] } & Props["Loading"]) => {
  if (!url) return null;

  return (
    <Button
      disabled={isLoading}
      className={"text-md font-medium text-primary !p-0 h-fit flex gap-0.5"}
      variant={"link"}
    >
      <Link className={"flex"} href={url}>
        <span className={"max-sm:hidden"}>Navštívit</span>
        <LinkArrow className={"size-6 sm:size-4"} />
      </Link>
    </Button>
  );
};
