import { HeadLineStyles } from './HeadLineStyles';

export default function HeadLine({ headline, headlineText }) {
  return (
    <HeadLineStyles>
      <h4>{headline}</h4>
      <p>{headlineText}</p>
    </HeadLineStyles>
  );
}
