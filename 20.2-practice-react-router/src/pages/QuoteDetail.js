import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>QuoteDetail Page</h1>
      <p>{params.quoteId}</p>
    </>
  );
};

export default QuoteDetail;
