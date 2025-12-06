import Section from '../Section/Section';
import Container from '../Container/Container';
import type { Photo } from '../../types/photo';
import { useState } from 'react';
import { getPhotos } from '../../services/photos';
import PhotosGallery from '../PhotosGallery/PhotosGallery';
import Form from '../Form/Form';
import Loader from '../Loader/Loader';
import Text from '../Text/Text';
import Modal from '../Modal/Modal';

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleSearch = async (newQuery: string) => {
    setIsLoading(true);
    setIsError(false);
    setPhotos([]);
    try {
      const data = await getPhotos(newQuery);
      setPhotos(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSearch} isLoading={isLoading} />
        {isLoading && <Loader />}
        {isError && (
          <Text textAlign="center">Something went wring. Please try again</Text>
        )}

        {photos.length > 0 && (
          <PhotosGallery photos={photos} onSelect={setSelectedPhoto} />
        )}
        {selectedPhoto && (
          <Modal onClose={() => setSelectedPhoto(null)}>
            <img src={selectedPhoto.src.original} alt={selectedPhoto.alt} />
          </Modal>
        )}
      </Container>
    </Section>
  );
}
