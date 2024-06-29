'use client';

import {type Dispatch, type SetStateAction, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {css} from '@styled/css';

import {
  Input,
  InputWrapper,
  Label,
  TextField,
} from '@/app/(authentication)/login/_components/login-view.styled';
import {
  CreateTaxonomyInput,
  TaxonomyEntity as Category,
  TaxonomyEntity,
  TaxonomyType,
} from '@/graphql/generated/types';
import {createTaxonomy} from '@/graphql/mutation/taxonomy/create-taxonomy-client';

interface Response {
  success: boolean;
  data: Category[];
}

interface Props {
  token: string;
  selectedCategories: Category[];
  setSelectedCategories: Dispatch<SetStateAction<Category[]>>;
  onCategoryRemove: (id: string) => void;
}

const AsyncAutocompleteInput: React.FC<Props> = ({
  selectedCategories,
  setSelectedCategories,
  onCategoryRemove,
  token,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      return;
    }

    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/search-category?query=${query.toLowerCase()}`);
        const data: Response = await response.json();
        setResults(data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceFetch = setTimeout(fetchCategories, 300);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(debounceFetch);
  }, [query]);

  const handleCategorySelect = (category: Category) => {
    if (!selectedCategories.some(selected => selected._id === category._id)) {
      setSelectedCategories(prev => [...prev, category]);
    }
    setQuery('');
    setResults([]);
  };

  const handleCategoryRemove = (id: string) => {
    onCategoryRemove(id);
  };

  const handleCreateCategory = async () => {
    if (!token) return;
    const payload: CreateTaxonomyInput = {
      slug: query.toLowerCase(),
      title: query,
      type: TaxonomyType.Category,
    };

    try {
      const res = await createTaxonomy(payload, token);
      if (res.success) {
        handleCategorySelect(res.taxonomy as TaxonomyEntity);
      } else {
        toast.error('Failed to create category.');
      }
    } catch (error: Error | any) {
      toast.error(error.message);
    }
  };

  return (
    <TextField className={css({mb: '8', position: 'relative'})}>
      <Label htmlFor='categories'>Categories</Label>
      <InputWrapper className={css({position: 'relative'})}>
        <Input
          type='text'
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder='Search for a category...'
        />
        {isLoading && (
          <div
            className={css({
              pos: 'absolute',
              right: '0',
              left: '0',
              bgColor: 'white',
              borderWidth: '1px',
              borderColor: 'gray.300',
              rounded: 'lg',
              mt: '1',
              zIndex: '10',
              bottom: '-5',
            })}
          >
            <span className={css({display: 'inline-block', p: '2'})}>Loading...</span>
          </div>
        )}
        {query && !isLoading && (
          <div
            className={css({
              pos: 'absolute',
              right: '0',
              left: '0',
              bgColor: 'white',
              borderWidth: '1px',
              borderColor: 'gray.300',
              rounded: 'lg',
              mt: '1',
              zIndex: '10',
              top: '[100%]',
            })}
          >
            {results.length > 0 ? (
              <div
                className={css({display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap'})}
              >
                {results.map(category => (
                  <button
                    type='button'
                    key={category._id}
                    onClick={() => handleCategorySelect(category)}
                    className={css({p: '2', _hover: {bgColor: 'gray.100'}, cursor: 'pointer'})}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            ) : (
              <div className={css({p: '2'})}>
                No results found.{' '}
                <button
                  type='button'
                  onClick={handleCreateCategory}
                  className={css({
                    color: 'blue.500',
                    _hover: {textDecorationLine: 'underline', cursor: 'pointer'},
                  })}
                >
                  Create a new category{` ${query}`}
                </button>
              </div>
            )}
          </div>
        )}
      </InputWrapper>
      <div className={css({display: 'flex', flexWrap: 'wrap'})}>
        {selectedCategories.map(category => (
          <div
            key={category._id}
            className={css({
              display: 'flex',
              alignItems: 'center',
              bgColor: 'gray.200',
              color: 'gray.700',
              px: '3',
              py: '1',
              rounded: 'full',
              mr: '2',
              mt: '2',
            })}
          >
            {category.title}
            <button
              type='button'
              onClick={() => handleCategoryRemove(category._id)}
              className={css({
                ml: '2',
                color: 'gray.500',
                _hover: {color: 'gray.700'},
                _focus: {ring: 'none', ringOffset: 'none'},
              })}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </TextField>
  );
};

export default AsyncAutocompleteInput;
