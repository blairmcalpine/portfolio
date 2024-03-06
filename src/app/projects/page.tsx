import { TrackList } from '@/components/TrackList';
import { Metadata } from 'next';

const ProjectsPage = () => {
  return (
    <div>
      <TrackList />
    </div>
  );
};

export default ProjectsPage;

export const metadata: Metadata = {
  title: 'Projects',
};
