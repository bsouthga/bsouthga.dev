import Link from "next/link";
import { Icon, IconType } from "components/Icon";

import styles from "./IconLink.module.css";

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
    <Link href={href} className={styles.root}>
      <Icon size={size} type={icon} className={className} alt={alt} />
    </Link>
  );
}
