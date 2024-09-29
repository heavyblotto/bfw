import { GetStaticProps } from 'next';
import { getSortedReleaseNotes } from '../utils/releaseNotes';
import Layout from '../components/Layout';
import { PixelatedText } from '../components/PixelatedText';
import Link from 'next/link';
import { Button } from '../components/ui/button';

interface ReleaseNote {
  slug: string;
  version: string;
  date: string;
  content: string;
}

interface ReleaseNotesProps {
  releaseNotes: ReleaseNote[];
}

export const getStaticProps: GetStaticProps<ReleaseNotesProps> = async () => {
  const allReleaseNotes = await getSortedReleaseNotes();
  return {
    props: {
      releaseNotes: allReleaseNotes,
    },
  };
};

const ReleaseNotes: React.FC<ReleaseNotesProps> = ({ releaseNotes }) => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="outline" className="mb-8 bg-stone-700 hover:bg-stone-600 text-stone-200 border-2 border-stone-400 font-pixel">
          <Link href="/">← Back to Home</Link>
        </Button>
        <PixelatedText as="h1" className="text-4xl mb-8">Release Notes</PixelatedText>
        {releaseNotes.map((note) => (
          <div key={note.slug} className="mb-8">
            <PixelatedText as="h2" className="text-2xl mb-4">
              {note.version} - {note.date}
            </PixelatedText>
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: note.content }} 
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ReleaseNotes;
