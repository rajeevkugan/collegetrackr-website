import { Link } from 'react-router-dom';
import { PageHero } from '../components/Blocks';

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="That page took a different pathway."
      actions={<Link className="btn btn-primary" to="/">Back to home</Link>}
    >
      We couldn't find what you were looking for.
    </PageHero>
  );
}
