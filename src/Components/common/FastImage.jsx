import { useCallback } from 'react';

/**
 * Minimal image component with native lazy loading
 * Removed IntersectionObserver for better performance
 */
const FastImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  fetchpriority = 'auto'
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      fetchpriority={fetchpriority}
      decoding="async"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  );
};

export default FastImage;
