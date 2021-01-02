import styles from "components/IconLink.module.css";
import Link from "next/link";
import { Icon, IconType } from "components/Icon";

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
      <a className={styles.link}>
        <Icon size={size} type={icon} className={className} alt={alt} />
      </a>
    </Link>
  );
}
