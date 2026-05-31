import { Link } from 'react-router-dom';

interface StickyApplyProps {
  className?: string;
}

export default function StickyApply({ className = 'sticky-apply' }: StickyApplyProps) {
  return (
    <Link to="/apply" className={className}>
      Apply Now
    </Link>
  );
}
