/* eslint-disable react/prop-types */
import { cn } from '../../../lib/utils';

const MaxWidthWrapper = ({ children, className }) => {
  return <div className={cn('px-6 sm:px-16', className)}>{children}</div>;
};
export default MaxWidthWrapper;
