import { useState, useEffect } from 'react';
import { fetchReviews } from '../../apiMovies';
import { useParams } from 'react-router';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetchReviews(Number(movieId));
        console.log(response);
        setReviews(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length !== 0 ? (
        <ul>
          {reviews &&
            reviews.map(({ content, author_details, id }) => {
              return (
                <li key={id} data-id={id}>
                  <p>
                    Author:{' '}
                    {author_details.name ? author_details.name : 'Anonymous'}
                  </p>
                  <p>Rating: {author_details.rating}</p>

                  <p>{content}</p>
                </li>
              );
            })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
export default Reviews;
