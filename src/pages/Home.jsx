import { useSelector } from 'react-redux';
import { Search, TablePagination, ArticlesTable } from '../components';

function Home() {
  const { articles, isLoading, history } = useSelector((state) => state.api);
  const noResultFound = !!(articles.length === 0 && history.length !== 0);
  return (
    <>
      <Search />
      {
                isLoading && articles.length === 0
                && (
                <p className="fs-1">
                  Loading...
                </p>
                )
            }
      {
                articles.length > 0
                && (
                <>
                  <TablePagination
                    amIConsumer
                  />
                  <ArticlesTable />
                  <TablePagination
                    amIConsumer={false}
                  />
                </>
                )
            }
      {
                noResultFound && !isLoading
                && (
                <p className="fs-3 fw-lighter">
                  No results found for terms
                  {' '}
                  {history.at(-1).value}
                </p>
                )
            }
    </>
  );
}
export default Home;
