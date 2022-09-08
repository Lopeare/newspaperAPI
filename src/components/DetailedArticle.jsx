import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DetailedArticle() {
  // Hooks, Selectors, Data
  const { id } = useParams();
  const navigate = useNavigate();
  const articles = useSelector((state) => state.api.articles);
  const article = articles.filter(
    (art) => art.id.replaceAll('/', '_') === id,
  )[0];
  // Functions
  const onNavBack = () => {
    navigate(-1);
  };
  // Scroll up auto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-4">
        <p className="fs-2">
          Title:
        </p>
        <p>
          {article.title}
        </p>
        <p className="fs-2">
          Subject
        </p>
        {article.subject.map((sub) => <p key={sub}>{sub}</p>)}
        <p className="fs-2">
          Publisher:
        </p>
        <p>
          {article.publisher}
        </p>
        <p className="fs-2">
          Start / end year:
        </p>
        <p>
          {article.start_year}
          {' '}
          /
          {' '}
          {article.end_year}
        </p>
        <p className="fs-2">
          Place of publication:
        </p>
        <p>
          {article.place_of_publication}
        </p>
        <p className="fs-2">
          Frequency:
        </p>
        <p>
          {article.frequency}
        </p>
        <p className="fs-2">
          City:
        </p>
        <p>
          {article.city}
        </p>
        <p className="fs-2">
          County:
        </p>
        <p>
          {article.county}
        </p>
        <p className="fs-2">
          Language:
        </p>
        <p>
          {article.county}
        </p>
        <p className="fs-2">
          Note:
        </p>
        {article.note.map((note) => <p key={note}>{note}</p>)}

      </div>
      <Button size="sm" variant="primary" onClick={onNavBack}>
        <i className="bi bi-arrow-return-left">Back</i>
      </Button>

    </>
  );
}

export default DetailedArticle;
