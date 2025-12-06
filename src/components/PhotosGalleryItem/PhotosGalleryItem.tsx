import GridItem from '../GridItem/GridItem';
import styles from './PhotosGalleryItem.module.css';
import type { Photo } from '../../types/photo';

interface PhotosGalleryProps {
  photo: Photo;
  onClick: () => void;
}

export default function PhotosGalleryItem({
  photo,
  onClick,
}: PhotosGalleryProps) {
  const { avg_color, alt, src } = photo;
  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{
          backgroundColor: avg_color,
          borderColor: avg_color,
        }}
        onClick={onClick}
      >
        <img src={src.large} alt={alt} />
      </div>
    </GridItem>
  );
}
