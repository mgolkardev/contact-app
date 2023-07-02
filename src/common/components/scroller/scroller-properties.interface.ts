export interface ScrollerProperties {
  data?: any[];
  isLoading?: boolean;
  error?: boolean;
  pagination?: ScrollerPaginationProperties;
  className?: string;
  children?: React.ReactNode;
}

interface ScrollerPaginationProperties {
  hasMore?: boolean;
  onEnd?: () => void;
}
