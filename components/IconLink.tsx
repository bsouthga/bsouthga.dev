import Link from "next/link";
import { Icon, IconType } from "components/Icon";
import style9 from "style9";

const styles = style9.create({
  link: {
    lineHeight: "0px",
    verticalAlign: "middle",
  },
});

type Props = {
  href: string;
  icon: IconType;
  alt?: string;
  size?: number;
  className?: string;
};

export default function IconLink({
  href,
  icon,
  alt,
  size = 16,
  className,
}: Props) {
  return (
    <Link href={href}>
      <a className={styles("link")}>
        <Icon size={size} type={icon} className={className} alt={alt} />
      </a>
    </Link>
  );
}
