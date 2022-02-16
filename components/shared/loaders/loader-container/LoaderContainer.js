import Loader from '../loader/Loader';
import { LoaderContainerStyles } from './LoaderContainerStyles';

export default function LoaderContainer({ height }) {
  return (
    <LoaderContainerStyles height={height}>
      <Loader />
    </LoaderContainerStyles>
  );
}
