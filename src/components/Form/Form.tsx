import { FiSearch } from 'react-icons/fi';
import toast from 'react-hot-toast';
import style from './Form.module.css';
import ClipLoader from 'react-spinners/ClipLoader';

interface FormProps {
  onSubmit: (newQuery: string) => void;
  isLoading: boolean;
}

export default function Form({ onSubmit, isLoading }: FormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.search.value.trim();

    if (!query) {
      toast.error('Plase enter a searsh tream');
      return;
    }
    onSubmit(query);
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />

      <button className={style.button} type="submit" disabled={isLoading}>
        {isLoading ? (
          <ClipLoader size={20} color="grean" />
        ) : (
          <FiSearch size="16px" />
        )}
      </button>
    </form>
  );
}
